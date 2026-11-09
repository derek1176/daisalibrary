"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Figma Plugin Backend Code - Daisa Design System Linter v4
// 다이사(da24) 디자인시스템 검증기 (고객향 & 파트너향 분리 린터)
figma.showUI(__html__, { width: 480, height: 720, themeColors: true });
// -------------------------------------------------------------
// 1. 디자인 시스템 토큰 정의 (Customer vs Partner 엄격 분리)
// -------------------------------------------------------------
// [고객향] 허용 컬러 토큰 (Hex 13종)
const CUSTOMER_COLORS = {
    '#1219f7': 'main-01 (키컬러/CTA)',
    '#595ef9': 'main-02 (보조 블루)',
    '#f4f5ff': 'main-04 (틴트 배경/뱃지)',
    '#f34766': 'sub-02 (에러 보더/텍스트)',
    '#121212': 'text-01 (헤드라인 대제목)',
    '#333333': 'text-02 (본문 기본 텍스트)',
    '#666666': 'text-03 (보조 설명문)',
    '#888888': 'text-04 (플레이스홀더/비활성)',
    '#ffffff': 'etc-01 (배경/화이트)',
    '#d7dbe2': 'etc-02 (기본 1px 테두리)',
    '#ebeef2': 'etc-03 (구분선 Divider/취소버튼)',
    '#f7f8fa': 'etc-04 (비활성 인풋/버튼)',
    '#fafafa': 'etc-05 (기본 페이지 배경)'
};
// [파트너향] 허용 컬러 토큰 (Hex 16종)
const PARTNER_COLORS = {
    '#1219f7': 'main-01 (키컬러/승인)',
    '#595ef9': 'main-02 (보조 블루)',
    '#f4f5ff': 'main-04 (틴트 배경)',
    '#f7d915': 'sub-01 (주의/옐로우)',
    '#f34766': 'sub-02 (에러/레드/반려)',
    '#000000': 'system-01 (순수 블랙)',
    '#ffffff': 'system-02 (순수 화이트)',
    '#121212': 'text-01 (주요 정보/타이틀)',
    '#333333': 'text-02 (본문 기본 텍스트)',
    '#666666': 'text-03 (보조 설명/견적일시)',
    '#888888': 'text-04 (캡션/플레이스홀더)',
    '#c4c9d1': 'etc-01 (진한 구분선/서브보더)',
    '#d7dbe2': 'etc-02 (기본 1px 테두리)',
    '#ebeef2': 'etc-03 (연한 구분선 Divider)',
    '#f7f8fa': 'etc-04 (비활성 배경/인풋)',
    '#fafafa': 'etc-05 (연한 영역 배경)'
};
// 파트너향 명시적 금지 레거시 컬러
const PARTNER_BANNED_COLORS = {
    '#999999': 'notused-01 (레거시 폐기 색상)',
    '#bcc0c6': 'notused-02 (레거시 폐기 색상)'
};
// [고객향] 폰트 크기 규격 (짝수 6종 + 마이크로 배지 10/11)
const CUSTOMER_FONT_SIZES = [10, 11, 12, 14, 16, 18, 20, 24];
// [파트너향] 폰트 크기 규격 (7단계, 최소 14px, 기본 18px)
const PARTNER_FONT_SIZES = [14, 16, 18, 20, 24, 28, 32];
// 이모지 정규식
const EMOJI_REGEX = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
// -------------------------------------------------------------
// 2. 도우미 함수 및 세션 캐시
// -------------------------------------------------------------
let sessionTargetNodeIds = [];
let sessionMode = 'customer';
let sessionIgnoreHidden = true;
function rgbToHex(r, g, b) {
    const toHex = (n) => {
        const hex = Math.round(Math.max(0, Math.min(1, n)) * 255).toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    };
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toLowerCase();
}
function findNearestAllowedFontSize(current, allowed) {
    return allowed.reduce((prev, curr) => Math.abs(curr - current) < Math.abs(prev - current) ? curr : prev);
}
// 토스트, 툴팁, 배지 등 특수 컴포넌트 예외 판별
function isExemptFromRadiusCheck(node) {
    const name = node.name.toLowerCase();
    // 1. 레이어명 키워드 검사 (토스트, 툴팁, 배지, 칩, 태그, 팝오버, 스낵바 등)
    const exemptKeywords = [
        'toast', 'tooltip', 'tip', 'snackbar', 'popover',
        'balloon', 'bubble', 'badge', 'tag', 'chip', 'indicator', 'pill', 'status'
    ];
    if (exemptKeywords.some(kw => name.includes(kw))) {
        return true;
    }
    // 2. 부모 레이어명도 검사 (예: Tooltip 컨테이너 내부의 Box)
    if (node.parent && 'name' in node.parent) {
        const parentName = node.parent.name.toLowerCase();
        if (exemptKeywords.some(kw => parentName.includes(kw))) {
            return true;
        }
    }
    // 3. 높이 36px 이하의 초소형 인라인 요소 (초소형 태그, 칩 등)
    if ('height' in node && typeof node.height === 'number' && node.height <= 36) {
        return true;
    }
    return false;
}
// -------------------------------------------------------------
// 3. 검사 엔진 (Linter Core)
// -------------------------------------------------------------
function lintNode(node, mode, issues, options) {
    if (options.ignoreHidden && !node.visible)
        return;
    const allowedColors = mode === 'customer' ? CUSTOMER_COLORS : PARTNER_COLORS;
    // 1. 색상 검사 (Fills)
    if ('fills' in node && Array.isArray(node.fills)) {
        for (const fill of node.fills) {
            if (fill.visible !== false && fill.type === 'SOLID') {
                const hex = rgbToHex(fill.color.r, fill.color.g, fill.color.b);
                if (fill.opacity === 0)
                    continue;
                if (mode === 'partner' && PARTNER_BANNED_COLORS[hex]) {
                    issues.push({
                        id: `${node.id}-fill-banned-${hex}`,
                        nodeId: node.id,
                        nodeName: node.name,
                        nodeType: node.type,
                        severity: 'must-fix',
                        category: 'color',
                        groupKey: `fill-banned-${hex}`,
                        groupTitle: `폐기된 레거시 컬러 (${hex.toUpperCase()})`,
                        message: `폐기된 레거시 컬러 ${hex.toUpperCase()} 사용됨`,
                        details: `${PARTNER_BANNED_COLORS[hex]} 사용 금지 규정`
                    });
                }
                else if (!allowedColors[hex]) {
                    issues.push({
                        id: `${node.id}-fill-${hex}`,
                        nodeId: node.id,
                        nodeName: node.name,
                        nodeType: node.type,
                        severity: 'must-fix',
                        category: 'color',
                        groupKey: `fill-unallowed-${hex}`,
                        groupTitle: `미허용 Fill 컬러 (${hex.toUpperCase()})`,
                        message: `미허용 Fill 컬러 ${hex.toUpperCase()} 사용됨`,
                        details: `${mode === 'customer' ? '고객향' : '파트너향'} 지정 컬러 토큰만 허용됩니다.`
                    });
                }
            }
        }
    }
    // 2. 스트로크 검사 (Strokes & StrokeWeight)
    if ('strokes' in node && Array.isArray(node.strokes) && node.strokes.length > 0) {
        for (const stroke of node.strokes) {
            if (stroke.visible !== false && stroke.type === 'SOLID') {
                const hex = rgbToHex(stroke.color.r, stroke.color.g, stroke.color.b);
                if (!allowedColors[hex]) {
                    issues.push({
                        id: `${node.id}-stroke-${hex}`,
                        nodeId: node.id,
                        nodeName: node.name,
                        nodeType: node.type,
                        severity: 'must-fix',
                        category: 'color',
                        groupKey: `stroke-unallowed-${hex}`,
                        groupTitle: `미허용 테두리 컬러 (${hex.toUpperCase()})`,
                        message: `미허용 테두리 컬러 ${hex.toUpperCase()} 사용됨`,
                        details: `지정된 보더 컬러(etc-02 #D7DBE2 등)를 사용하세요.`
                    });
                }
            }
        }
        // 스트로크 두께 검사 (기본 1px 규칙, 2px 이상은 확인 필요)
        if ('strokeWeight' in node && typeof node.strokeWeight === 'number' && node.strokeWeight > 1) {
            const isPartnerFocus = mode === 'partner' && node.strokeWeight === 2 && node.name.toLowerCase().includes('focus');
            if (!isPartnerFocus) {
                issues.push({
                    id: `${node.id}-stroke-weight`,
                    nodeId: node.id,
                    nodeName: node.name,
                    nodeType: node.type,
                    severity: 'check-needed',
                    category: 'radius',
                    groupKey: `stroke-weight-${node.strokeWeight}`,
                    groupTitle: `테두리 두께 ${node.strokeWeight}px (1px 권장)`,
                    message: `테두리 두께가 ${node.strokeWeight}px입니다 (1px 권장)`,
                    details: `다이사 UI 규격은 1px 보더를 원칙으로 합니다.`,
                    autoFixable: true,
                    fixAction: { type: 'strokeWeight', targetValue: 1, label: '1px로 변경' }
                });
            }
        }
    }
    // 3. 타이포그래피 검사 (TEXT Node)
    if (node.type === 'TEXT') {
        const textNode = node;
        // 3-1. 폰트 패밀리 검사 및 자동 교체(Auto-Fix) 지원
        if (textNode.fontName !== figma.mixed) {
            const family = textNode.fontName.family;
            if (mode === 'customer') {
                if (!family.toLowerCase().includes('pretendard')) {
                    issues.push({
                        id: `${node.id}-font-family`,
                        nodeId: node.id,
                        nodeName: node.name,
                        nodeType: node.type,
                        severity: 'must-fix',
                        category: 'typography',
                        groupKey: `font-family-${family.toLowerCase().replace(/\s+/g, '-')}`,
                        groupTitle: `비표준 서체 (${family})`,
                        message: `비표준 서체 (${family}) 사용됨`,
                        details: `고객향은 Pretendard 단일 서체만 허용합니다.`,
                        autoFixable: true,
                        fixAction: { type: 'fontFamily', targetValue: 'Pretendard', label: 'Pretendard로 변경' }
                    });
                }
            }
            else {
                const isAllowed = family.toLowerCase().includes('pretendard') || family.toLowerCase().includes('noto sans');
                if (!isAllowed) {
                    issues.push({
                        id: `${node.id}-font-family`,
                        nodeId: node.id,
                        nodeName: node.name,
                        nodeType: node.type,
                        severity: 'must-fix',
                        category: 'typography',
                        groupKey: `font-family-${family.toLowerCase().replace(/\s+/g, '-')}`,
                        groupTitle: `비표준 서체 (${family})`,
                        message: `비표준 서체 (${family}) 사용됨`,
                        details: `파트너향은 Pretendard 또는 Noto Sans KR만 허용합니다.`,
                        autoFixable: true,
                        fixAction: { type: 'fontFamily', targetValue: 'Pretendard', label: 'Pretendard로 변경' }
                    });
                }
            }
        }
        // 3-2. 폰트 크기 검사
        if (textNode.fontSize !== figma.mixed) {
            const size = textNode.fontSize;
            const allowedSizes = mode === 'customer' ? CUSTOMER_FONT_SIZES : PARTNER_FONT_SIZES;
            if (mode === 'customer') {
                if (!allowedSizes.includes(size)) {
                    const nearest = findNearestAllowedFontSize(size, allowedSizes);
                    issues.push({
                        id: `${node.id}-font-size`,
                        nodeId: node.id,
                        nodeName: node.name,
                        nodeType: node.type,
                        severity: 'must-fix',
                        category: 'typography',
                        groupKey: `font-size-${size}`,
                        groupTitle: `비표준 폰트 크기 ${size}px (${nearest}px 권장)`,
                        message: `비표준 폰트 크기 ${size}px 사용됨`,
                        details: `고객향 짝수 규격: 12, 14, 16, 18, 20, 24px (추천: ${nearest}px)`,
                        autoFixable: true,
                        fixAction: { type: 'fontSize', targetValue: nearest, label: `${nearest}px로 변경` }
                    });
                }
            }
            else {
                if (size < 14) {
                    issues.push({
                        id: `${node.id}-font-size-too-small`,
                        nodeId: node.id,
                        nodeName: node.name,
                        nodeType: node.type,
                        severity: 'must-fix',
                        category: 'typography',
                        groupKey: `font-size-too-small-${size}`,
                        groupTitle: `극소 폰트 크기 ${size}px 금지 (12px 금지)`,
                        message: `극소 폰트 크기 ${size}px 금지 (최소 14px 이상 필수)`,
                        details: `기사님 현장 시인성을 위해 파트너 화면은 12px 사용이 절대 금지됩니다. (기본 본문 18px)`,
                        autoFixable: true,
                        fixAction: { type: 'fontSize', targetValue: 14, label: '14px로 변경' }
                    });
                }
                else if (!allowedSizes.includes(size)) {
                    const nearest = findNearestAllowedFontSize(size, allowedSizes);
                    issues.push({
                        id: `${node.id}-font-size`,
                        nodeId: node.id,
                        nodeName: node.name,
                        nodeType: node.type,
                        severity: 'check-needed',
                        category: 'typography',
                        groupKey: `font-size-${size}`,
                        groupTitle: `파트너 규격 외 폰트 크기 ${size}px (${nearest}px 권장)`,
                        message: `파트너 7대 표준 크기가 아닌 ${size}px 사용됨`,
                        details: `파트너 스케일: 14, 16, 18(기본), 20, 24, 28, 32px (추천: ${nearest}px)`,
                        autoFixable: true,
                        fixAction: { type: 'fontSize', targetValue: nearest, label: `${nearest}px로 변경` }
                    });
                }
            }
        }
        // 3-3. 자간 검사 (Letter Spacing: -1% / -0.01em)
        if (textNode.letterSpacing !== figma.mixed) {
            const ls = textNode.letterSpacing;
            if (ls.unit === 'PERCENT' && Math.round(ls.value) !== -1) {
                issues.push({
                    id: `${node.id}-letter-spacing`,
                    nodeId: node.id,
                    nodeName: node.name,
                    nodeType: node.type,
                    severity: 'check-needed',
                    category: 'typography',
                    groupKey: `letter-spacing-${Math.round(ls.value)}`,
                    groupTitle: `자간 ${ls.value}% 설정됨 (-1% 권장)`,
                    message: `자간이 ${ls.value}%로 설정됨 (-1% 권장)`,
                    details: `다이사 디자인시스템은 모든 텍스트에 letter-spacing: -1px (-1%) 적용을 권장합니다.`,
                    autoFixable: true,
                    fixAction: { type: 'letterSpacing', targetValue: { value: -1, unit: 'PERCENT' }, label: '-1%로 변경' }
                });
            }
        }
        // 3-4. 이모지 검사
        const chars = textNode.characters;
        if (EMOJI_REGEX.test(chars)) {
            issues.push({
                id: `${node.id}-emoji`,
                nodeId: node.id,
                nodeName: node.name,
                nodeType: node.type,
                severity: 'must-fix',
                category: 'layout',
                groupKey: 'emoji-native',
                groupTitle: '텍스트 내 네이티브 이모지 사용',
                message: `텍스트 내 네이티브 이모지가 포함되어 있습니다`,
                details: `네이티브 이모지 사용 금지 (공식 선형 SVG 아이콘으로 대체 필수)`
            });
        }
        // 3-5. 에러 느낌표 금지
        if (chars.trim() === '!' && node.name.toLowerCase().includes('error')) {
            issues.push({
                id: `${node.id}-error-exclamation`,
                nodeId: node.id,
                nodeName: node.name,
                nodeType: node.type,
                severity: 'must-fix',
                category: 'layout',
                groupKey: 'error-exclamation',
                groupTitle: '에러 인풋 내 느낌표(!) 아이콘',
                message: `에러 인풋 내 느낌표(!) 아이콘 사용 금지`,
                details: `1px 에러 보더(#F34766)와 하단 14px 안내 문구로만 피드백해야 합니다.`
            });
        }
    }
    // 4. 모서리 곡률 (Corner Radius) 검사
    // 고객 요청 반영: 고객향은 무조건 10px 고정! (토스트/툴팁/배지는 자동 예외 처리)
    if ('cornerRadius' in node && typeof node.cornerRadius === 'number' && node.cornerRadius > 0) {
        const radius = node.cornerRadius;
        const height = node.height;
        const isPill = radius >= height / 2 - 1;
        // Pill 형태이거나 토스트/툴팁/배지 등 특수 요소는 검사 제외
        if (!isPill && !isExemptFromRadiusCheck(node)) {
            if (mode === 'customer') {
                const isModalOrSheet = node.name.toLowerCase().includes('modal') ||
                    node.name.toLowerCase().includes('sheet') ||
                    node.name.toLowerCase().includes('popup');
                // 고객향 표준은 무조건 10px 고정! (모달/바텀시트 16px 허용)
                const expectedRadius = 10;
                if (radius === 16 && isModalOrSheet) {
                    // 모달/시트 16px 허용
                }
                else if (radius !== expectedRadius) {
                    issues.push({
                        id: `${node.id}-radius`,
                        nodeId: node.id,
                        nodeName: node.name,
                        nodeType: node.type,
                        severity: radius === 16 ? 'check-needed' : 'must-fix',
                        category: 'radius',
                        groupKey: `radius-${radius}-exp-10`,
                        groupTitle: `곡률 ${radius}px 적용됨 (10px 표준 필요)`,
                        message: `곡률 ${radius}px 적용됨 (고객향 표준 10px 필요)`,
                        details: `고객향 디자인시스템은 기본 카드/컨테이너 모서리 곡률을 10px로 통일합니다.`,
                        autoFixable: true,
                        fixAction: { type: 'radius', targetValue: 10, label: '10px로 변경' }
                    });
                }
            }
            else {
                // [파트너향] 전사 6px 고정
                const allowedPartnerRadius = [6];
                if (!allowedPartnerRadius.includes(radius)) {
                    const isCustomerRadius = radius === 10 || radius === 16;
                    issues.push({
                        id: `${node.id}-radius`,
                        nodeId: node.id,
                        nodeName: node.name,
                        nodeType: node.type,
                        severity: isCustomerRadius ? 'must-fix' : 'check-needed',
                        category: 'radius',
                        groupKey: `radius-partner-${radius}`,
                        groupTitle: `파트너 규격 외 곡률 ${radius}px (6px 고정 필수)`,
                        message: `파트너 규격 외 곡률 ${radius}px 사용됨 (6px 고정 필수)`,
                        details: isCustomerRadius
                            ? `고객향 라운드(${radius}px)는 파트너 화면에서 엄격히 금지됩니다. 6px로 수정하세요.`
                            : `파트너 화면은 모서리 곡률 6px을 기본 아이덴티티로 통일합니다.`,
                        autoFixable: true,
                        fixAction: { type: 'radius', targetValue: 6, label: '6px로 변경' }
                    });
                }
            }
        }
    }
    // 5. 레이아웃 캔버스 안전영역 검사 (오직 최상위 아트보드 프레임만 검사, 내부 오토레이아웃 무시)
    if (node.type === 'FRAME' || node.type === 'COMPONENT') {
        const frame = node;
        if (frame.parent && frame.parent.type === 'PAGE') {
            const w = Math.round(frame.width);
            if (w !== 360 && w !== 1200) {
                issues.push({
                    id: `${node.id}-canvas-width`,
                    nodeId: node.id,
                    nodeName: node.name,
                    nodeType: node.type,
                    severity: 'check-needed',
                    category: 'layout',
                    groupKey: `canvas-width-${w}`,
                    groupTitle: `캔버스 너비 ${w}px (360px 또는 1200px 권장)`,
                    message: `캔버스 너비가 ${w}px입니다 (모바일 360px 또는 PC 1200px 권장)`,
                    details: `다이사 공식 캔버스는 Mobile 360px, Web 1200px 기준입니다.`
                });
            }
        }
    }
    // 자식 노드 재귀 탐색
    if ('children' in node) {
        for (const child of node.children) {
            lintNode(child, mode, issues, options);
        }
    }
}
// -------------------------------------------------------------
// 4. 플러그인 메시지 수신 처리 (UI <-> Code 통신)
// -------------------------------------------------------------
function executeLint() {
    const issues = [];
    const targetNodes = [];
    for (const id of sessionTargetNodeIds) {
        const node = figma.getNodeById(id);
        if (node && 'type' in node) {
            targetNodes.push(node);
        }
    }
    if (targetNodes.length === 0) {
        figma.ui.postMessage({
            type: 'lint-error',
            message: '검사할 대상 레이어가 없습니다. 프레임을 선택하거나 [현재 페이지 전체]로 검사하세요.'
        });
        return;
    }
    for (const node of targetNodes) {
        lintNode(node, sessionMode, issues, { ignoreHidden: sessionIgnoreHidden });
    }
    figma.ui.postMessage({
        type: 'lint-results',
        mode: sessionMode,
        totalCount: issues.length,
        issues
    });
}
// 폰트 교체 안전 도우미 (Pretendard의 같은 weight를 로드하거나 fallback)
function applyFontFamily(textNode, targetFamily) {
    return __awaiter(this, void 0, void 0, function* () {
        let targetStyle = 'Regular';
        if (textNode.fontName !== figma.mixed) {
            targetStyle = textNode.fontName.style || 'Regular';
        }
        const primaryFont = { family: targetFamily, style: targetStyle };
        try {
            yield figma.loadFontAsync(primaryFont);
            textNode.fontName = primaryFont;
        }
        catch (err) {
            // 지정 style 로드 실패 시 Bold 또는 Regular로 안전 fallback
            const fallbackStyle = targetStyle.toLowerCase().includes('bold') ? 'Bold' : 'Regular';
            const fallbackFont = { family: targetFamily, style: fallbackStyle };
            yield figma.loadFontAsync(fallbackFont);
            textNode.fontName = fallbackFont;
        }
    });
}
function applyFixToNode(node, fixAction) {
    return __awaiter(this, void 0, void 0, function* () {
        if (fixAction.type === 'fontFamily' && node.type === 'TEXT') {
            yield applyFontFamily(node, fixAction.targetValue);
        }
        else if (fixAction.type === 'fontSize' && node.type === 'TEXT') {
            const textNode = node;
            if (textNode.fontName !== figma.mixed) {
                yield figma.loadFontAsync(textNode.fontName);
                textNode.fontSize = fixAction.targetValue;
            }
        }
        else if (fixAction.type === 'radius' && 'cornerRadius' in node) {
            node.cornerRadius = fixAction.targetValue;
        }
        else if (fixAction.type === 'strokeWeight' && 'strokeWeight' in node) {
            node.strokeWeight = fixAction.targetValue;
        }
        else if (fixAction.type === 'letterSpacing' && node.type === 'TEXT') {
            const textNode = node;
            if (textNode.fontName !== figma.mixed) {
                yield figma.loadFontAsync(textNode.fontName);
                textNode.letterSpacing = fixAction.targetValue;
            }
        }
    });
}
figma.ui.onmessage = (msg) => __awaiter(void 0, void 0, void 0, function* () {
    // 1) 검사 최초 실행 요청 (사용자가 버튼 클릭 시 타겟 세션 갱신)
    if (msg.type === 'run-lint') {
        const { mode, scope, ignoreHidden } = msg;
        sessionMode = mode;
        sessionIgnoreHidden = !!ignoreHidden;
        if (scope === 'selection') {
            const selection = figma.currentPage.selection;
            if (selection.length === 0) {
                figma.ui.postMessage({
                    type: 'lint-error',
                    message: '선택된 레이어가 없습니다. 검사할 프레임이나 요소를 선택해주세요.'
                });
                return;
            }
            sessionTargetNodeIds = selection.map(n => n.id);
        }
        else {
            sessionTargetNodeIds = figma.currentPage.children.map(n => n.id);
        }
        executeLint();
    }
    // 2) 특정 노드 선택 및 화면 줌 이동 (세션 타겟은 유지!)
    if (msg.type === 'select-node') {
        const node = figma.getNodeById(msg.nodeId);
        if (node && 'type' in node) {
            figma.currentPage.selection = [node];
            figma.viewport.scrollAndZoomIntoView([node]);
        }
        else {
            figma.notify('해당 레이어를 피그마 캔버스에서 찾을 수 없습니다.');
        }
    }
    // 3) 단일 이슈 빠른 수정
    if (msg.type === 'fix-issue') {
        const { nodeId, fixAction } = msg;
        const node = figma.getNodeById(nodeId);
        if (!node || !('type' in node)) {
            figma.notify('수정할 레이어를 찾을 수 없습니다.');
            return;
        }
        try {
            yield applyFixToNode(node, fixAction);
            figma.notify('수정이 완료되었습니다.');
            executeLint();
        }
        catch (e) {
            figma.notify(`자동 수정 실패: ${e.message || e}`);
        }
    }
    // 4) 특정 유형의 동일 이슈 일괄 수정 (Group Batch Fix)
    if (msg.type === 'fix-group') {
        const { issues } = msg;
        let fixedCount = 0;
        for (const item of issues) {
            if (item.autoFixable && item.fixAction) {
                const node = figma.getNodeById(item.nodeId);
                if (node && 'type' in node) {
                    try {
                        yield applyFixToNode(node, item.fixAction);
                        fixedCount++;
                    }
                    catch (e) {
                        console.error('Group auto fix error for node', item.nodeId, e);
                    }
                }
            }
        }
        figma.notify(`해당 유형의 ${fixedCount}개 레이어를 일괄 수정했습니다.`);
        executeLint();
    }
    // 5) 전체 일괄 수정
    if (msg.type === 'fix-all') {
        const { issues } = msg;
        let fixedCount = 0;
        for (const item of issues) {
            if (item.autoFixable && item.fixAction) {
                const node = figma.getNodeById(item.nodeId);
                if (node && 'type' in node) {
                    try {
                        yield applyFixToNode(node, item.fixAction);
                        fixedCount++;
                    }
                    catch (e) {
                        console.error('Auto fix error for node', item.nodeId, e);
                    }
                }
            }
        }
        figma.notify(`총 ${fixedCount}개 항목의 자동 수정을 완료했습니다.`);
        executeLint();
    }
    // 6) 알림 메시지 표시
    if (msg.type === 'notify') {
        figma.notify(msg.message);
    }
});
