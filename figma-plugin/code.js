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
// Figma Plugin Backend Code - Daisa Design System Linter v7
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
// ★ 순수 픽토리얼 이모지만 판별 (-, +, *, •, 숫자, 화살표, 수학기호 등 특수기호 제외)
function containsPictorialEmoji(text) {
    if (!text)
        return false;
    const matches = text.match(/\p{Extended_Pictographic}/gu);
    if (!matches)
        return false;
    const nonEmojiSet = new Set([
        '#', '*', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
        '©', '®', '™', '+', '-', '±', '×', '÷', '=', '<', '>', '/', '%',
        '•', '·', '…', '★', '☆', '→', '←', '↑', '↓', '↔',
        '!', '?', '.', ',', ':', ';', '"', "'", '`', '~', '^', '_', '|',
        '(', ')', '[', ']', '{', '}', '₩', '$', '€', '¥'
    ]);
    return matches.some(m => !nonEmojiSet.has(m) && m.trim().length > 0);
}
// -------------------------------------------------------------
// 2. 도우미 함수 및 세션 캐시
// -------------------------------------------------------------
let sessionTargetNodeIds = [];
let sessionMode = 'customer';
let sessionScope = 'selection';
let sessionIgnoreHidden = true;
let isNavigatingSelection = false; // 위치 이동 시 실시간 자동 검사 방지 플래그
function rgbToHex(r, g, b) {
    const toHex = (n) => {
        const hex = Math.round(Math.max(0, Math.min(1, n)) * 255).toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    };
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toLowerCase();
}
function hexToRgb(hex) {
    const clean = hex.replace('#', '');
    const num = parseInt(clean, 16);
    return {
        r: (num >> 16) & 255,
        g: (num >> 8) & 255,
        b: num & 255
    };
}
function colorDistance(c1, c2) {
    const dr = c1.r - c2.r;
    const dg = c1.g - c2.g;
    const db = c1.b - c2.b;
    return Math.sqrt(2 * dr * dr + 4 * dg * dg + 3 * db * db);
}
function findNearestColorToken(hex, allowedColors) {
    const rgb = hexToRgb(hex);
    let bestHex = '';
    let bestName = '';
    let minDistance = Infinity;
    for (const [tokenHex, tokenName] of Object.entries(allowedColors)) {
        const tokenRgb = hexToRgb(tokenHex);
        const dist = colorDistance(rgb, tokenRgb);
        if (dist < minDistance) {
            minDistance = dist;
            bestHex = tokenHex;
            bestName = tokenName;
        }
    }
    if (minDistance <= 65) {
        return { hex: bestHex, name: bestName, distance: minDistance };
    }
    return null;
}
function findNearestAllowedFontSize(current, allowed) {
    return allowed.reduce((prev, curr) => Math.abs(curr - current) < Math.abs(prev - current) ? curr : prev);
}
function isSystemUI(node) {
    // 1. 조상 노드 전체 탐색 (Status Bar / Home Bar 내부 자식 레이어까지 완벽 제외)
    let curr = node;
    while (curr && curr.type !== 'PAGE' && curr.type !== 'DOCUMENT') {
        const name = curr.name.toLowerCase();
        if (name.includes('status bar') ||
            name.includes('statusbar') ||
            name.includes('status_bar') ||
            name.includes('home bar') ||
            name.includes('homebar') ||
            name.includes('home indicator') ||
            name.includes('homeindicator') ||
            name.includes('dynamic island') ||
            name.includes('notch') ||
            name.includes('navigation bar') ||
            name.includes('ios / status') ||
            name.includes('iphone / status') ||
            name.includes('ios status') ||
            name.includes('system bar')) {
            return true;
        }
        curr = curr.parent;
    }
    // 2. iOS/Android 시스템 UI 고유 레이어명 (Time, Cap, Battery, Cellular, Wifi 등)
    const name = node.name.toLowerCase().trim();
    const systemNames = [
        'time', 'cap', 'capacity', 'battery', 'border', 'wifi', 'cellular',
        'cellular connection', 'reception', 'signal', 'home indicator',
        'status bar - iphone', 'status bar'
    ];
    if (systemNames.includes(name)) {
        return true;
    }
    return false;
}
function isExemptFromRadiusCheck(node) {
    const name = node.name.toLowerCase();
    const exemptKeywords = [
        'toast', 'tooltip', 'tip', 'snackbar', 'popover',
        'balloon', 'bubble', 'badge', 'tag', 'chip', 'indicator', 'pill', 'status'
    ];
    if (exemptKeywords.some(kw => name.includes(kw))) {
        return true;
    }
    if (node.parent && 'name' in node.parent) {
        const parentName = node.parent.name.toLowerCase();
        if (exemptKeywords.some(kw => parentName.includes(kw))) {
            return true;
        }
    }
    if ('height' in node && typeof node.height === 'number' && node.height <= 36) {
        return true;
    }
    return false;
}
// 딤드 레이어 판별
function isDimmedLayer(node) {
    const name = node.name.toLowerCase();
    if (name.includes('dim') || name.includes('overlay') || name.includes('scrim') || name.includes('backdrop')) {
        return true;
    }
    if ('fills' in node && Array.isArray(node.fills)) {
        for (const f of node.fills) {
            if (f.type === 'SOLID' && f.visible !== false) {
                const hex = rgbToHex(f.color.r, f.color.g, f.color.b);
                const fillOp = typeof f.opacity === 'number' ? f.opacity : 1;
                const nodeOp = 'opacity' in node && typeof node.opacity === 'number' ? node.opacity : 1;
                const totalOp = fillOp * nodeOp;
                if (hex === '#000000' && totalOp >= 0.35 && totalOp <= 0.85) {
                    return true;
                }
            }
        }
    }
    return false;
}
// 상하위 계층 내 딤드 오버레이 존재 여부 검사
function hasDimmedBackdropInHierarchy(node) {
    // 형제 레이어 검사
    if (node.parent && 'children' in node.parent) {
        for (const sibling of node.parent.children) {
            if (sibling.id !== node.id && isDimmedLayer(sibling)) {
                return true;
            }
        }
    }
    // 부모의 형제 레이어 검사
    if (node.parent && node.parent.parent && 'children' in node.parent.parent) {
        for (const sibling of node.parent.parent.children) {
            if (sibling.id !== node.parent.id && isDimmedLayer(sibling)) {
                return true;
            }
        }
    }
    // 상위 루트 컨테이너 자식 검사
    let root = node.parent;
    while (root && root.parent && root.parent.type !== 'PAGE' && root.parent.type !== 'DOCUMENT') {
        root = root.parent;
    }
    if (root && 'children' in root) {
        for (const child of root.children) {
            if (isDimmedLayer(child)) {
                return true;
            }
        }
    }
    return false;
}
// ★ 모달 / 바텀시트 스마트 판별 (이름이 modal이 아니어도 딤드 배경이나 규격으로 16px 곡률 인정)
function isModalOrSheet(node) {
    const name = node.name.toLowerCase();
    // 1. 국/영문 키워드 검사
    const modalKeywords = [
        'modal', 'popup', 'dialog', 'sheet', 'bottomsheet', 'bottom_sheet',
        'alert', 'confirm', 'notice', '팝업', '모달', '다이얼로그', '바텀시트', '알림'
    ];
    if (modalKeywords.some(kw => name.includes(kw)))
        return true;
    // 2. 조상 레이어 이름 검사
    let curr = node.parent;
    while (curr && curr.type !== 'PAGE' && curr.type !== 'DOCUMENT') {
        if (modalKeywords.some(kw => curr.name.toLowerCase().includes(kw))) {
            return true;
        }
        curr = curr.parent;
    }
    // 3. 딤드 오버레이 연계 검사
    if (hasDimmedBackdropInHierarchy(node))
        return true;
    // 4. 모바일/웹 모달 다이얼로그 규격 (너비 260~360px 또는 400~500px에 곡률 16px 적용된 컨테이너)
    if ('width' in node && typeof node.width === 'number') {
        const w = Math.round(node.width);
        if ((w >= 260 && w <= 360) || (w >= 400 && w <= 500)) {
            if ('cornerRadius' in node && node.cornerRadius === 16) {
                return true;
            }
        }
    }
    return false;
}
// ★ 버튼 내부 주 텍스트 노드 탐색 도우미
function findPrimaryTextNode(node) {
    if (node.type === 'TEXT')
        return node;
    if ('children' in node) {
        for (const child of node.children) {
            if (child.type === 'TEXT')
                return child;
            if ('children' in child) {
                const nested = findPrimaryTextNode(child);
                if (nested)
                    return nested;
            }
        }
    }
    return null;
}
// ★ 스마트 버튼 컨테이너 판별 (이름이 Frame이어도 버튼 형태면 인식)
function isButtonContainer(node) {
    if (node.type !== 'FRAME' && node.type !== 'COMPONENT' && node.type !== 'INSTANCE' && node.type !== 'GROUP') {
        return false;
    }
    if (!node.parent || node.parent.type === 'PAGE' || node.parent.type === 'DOCUMENT') {
        return false;
    }
    const name = node.name.toLowerCase();
    const w = Math.round(node.width);
    const h = Math.round(node.height);
    const buttonKeywords = [
        'button', 'btn', 'cta', '버튼', '플로팅', 'floating',
        '견적 받기', '견적받기', '견적 신청', '견적신청', '신청하기', '신청',
        '제출', '확인', '취소', '완료', '다음', '조회', '상세보기', '더보기', '추가'
    ];
    const nameMatches = buttonKeywords.some(kw => name.includes(kw));
    const primaryText = findPrimaryTextNode(node);
    const hasTextChild = !!primaryText;
    const hasVisualSkin = ('fills' in node && Array.isArray(node.fills) && node.fills.length > 0) ||
        ('strokes' in node && Array.isArray(node.strokes) && node.strokes.length > 0);
    const validButtonDimensions = h >= 32 && h <= 72 && w >= 80 && w <= 680;
    if (nameMatches && hasTextChild)
        return true;
    if (validButtonDimensions && hasTextChild && hasVisualSkin) {
        if (primaryText && primaryText.characters.trim().length <= 30) {
            const childCount = 'children' in node ? node.children.length : 0;
            if (childCount <= 4) {
                return true;
            }
        }
    }
    return false;
}
// -------------------------------------------------------------
// 3. 검사 엔진 (Linter Core)
// -------------------------------------------------------------
function lintNode(node, mode, issues, options) {
    if (options.ignoreHidden && !node.visible)
        return;
    // Status Bar, Home Bar 등 시스템 UI 완전 제외
    if (isSystemUI(node))
        return;
    const allowedColors = mode === 'customer' ? CUSTOMER_COLORS : PARTNER_COLORS;
    // 1. 색상 검사 (Fills)
    if ('fills' in node && Array.isArray(node.fills)) {
        for (const fill of node.fills) {
            if (fill.visible !== false && fill.type === 'SOLID') {
                const hex = rgbToHex(fill.color.r, fill.color.g, fill.color.b);
                if (fill.opacity === 0)
                    continue;
                // 딤드(Dimmed) 60% 블랙 오버레이 판별
                const isBlack = hex === '#000000';
                const fillOp = typeof fill.opacity === 'number' ? fill.opacity : 1;
                const nodeOp = 'opacity' in node && typeof node.opacity === 'number' ? node.opacity : 1;
                const totalOp = fillOp * nodeOp;
                const isDimmedOpacity = (totalOp >= 0.45 && totalOp <= 0.75);
                const nameMatchesDimmed = node.name.toLowerCase().includes('dim') ||
                    node.name.toLowerCase().includes('overlay') ||
                    node.name.toLowerCase().includes('backdrop') ||
                    node.name.toLowerCase().includes('scrim');
                if (isBlack && (isDimmedOpacity || (totalOp < 1 && nameMatchesDimmed))) {
                    continue;
                }
                if (mode === 'partner' && PARTNER_BANNED_COLORS[hex]) {
                    const nearest = findNearestColorToken(hex, allowedColors);
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
                        details: `${PARTNER_BANNED_COLORS[hex]} 사용 금지 규정`,
                        autoFixable: !!nearest,
                        fixAction: nearest ? {
                            type: 'colorFill',
                            originalHex: hex,
                            targetValue: nearest.hex,
                            label: `${nearest.hex.toUpperCase()}로 변경`
                        } : undefined
                    });
                }
                else if (!allowedColors[hex]) {
                    const nearest = findNearestColorToken(hex, allowedColors);
                    const recText = nearest ? ` (추천 토큰: ${nearest.name} ${nearest.hex.toUpperCase()})` : '';
                    issues.push({
                        id: `${node.id}-fill-${hex}`,
                        nodeId: node.id,
                        nodeName: node.name,
                        nodeType: node.type,
                        severity: 'must-fix',
                        category: 'color',
                        groupKey: `fill-unallowed-${hex}`,
                        groupTitle: `미허용 Fill 컬러 (${hex.toUpperCase()})`,
                        message: `미허용 Fill 컬러 ${hex.toUpperCase()} 사용됨${recText}`,
                        details: nearest
                            ? `가장 근접한 가이드 토큰: ${nearest.name} (${nearest.hex.toUpperCase()})`
                            : `${mode === 'customer' ? '고객향' : '파트너향'} 13대 지정 컬러 토큰만 허용됩니다.`,
                        autoFixable: !!nearest,
                        fixAction: nearest ? {
                            type: 'colorFill',
                            originalHex: hex,
                            targetValue: nearest.hex,
                            label: `${nearest.hex.toUpperCase()}로 변경`
                        } : undefined
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
                    const nearest = findNearestColorToken(hex, allowedColors);
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
                        details: nearest
                            ? `가장 근접한 가이드 토큰: ${nearest.name} (${nearest.hex.toUpperCase()})`
                            : `지정된 보더 컬러(etc-02 #D7DBE2 등)를 사용하세요.`,
                        autoFixable: !!nearest,
                        fixAction: nearest ? {
                            type: 'colorStroke',
                            originalHex: hex,
                            targetValue: nearest.hex,
                            label: `${nearest.hex.toUpperCase()}로 변경`
                        } : undefined
                    });
                }
            }
        }
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
    // 3. 타이포그래피 검사 (TEXT Node - figma.mixed 완벽 대응)
    if (node.type === 'TEXT') {
        const textNode = node;
        let isNonPretendard = false;
        let detectedFamily = 'Unknown';
        if (textNode.fontName !== figma.mixed) {
            detectedFamily = textNode.fontName.family;
            if (mode === 'customer') {
                isNonPretendard = !detectedFamily.toLowerCase().includes('pretendard');
            }
            else {
                isNonPretendard = !detectedFamily.toLowerCase().includes('pretendard') && !detectedFamily.toLowerCase().includes('noto sans');
            }
        }
        else {
            const len = textNode.characters.length;
            if (len > 0) {
                const f0 = textNode.getRangeFontName(0, 1);
                if (f0 !== figma.mixed) {
                    detectedFamily = f0.family;
                    if (mode === 'customer') {
                        isNonPretendard = !f0.family.toLowerCase().includes('pretendard');
                    }
                    else {
                        isNonPretendard = !f0.family.toLowerCase().includes('pretendard') && !f0.family.toLowerCase().includes('noto sans');
                    }
                }
            }
        }
        if (isNonPretendard) {
            issues.push({
                id: `${node.id}-font-family`,
                nodeId: node.id,
                nodeName: node.name,
                nodeType: node.type,
                severity: 'must-fix',
                category: 'typography',
                groupKey: `font-family-${detectedFamily.toLowerCase().replace(/\s+/g, '-')}`,
                groupTitle: `비표준 서체 (${detectedFamily})`,
                message: `비표준 서체 (${detectedFamily}) 사용됨`,
                details: `${mode === 'customer' ? '고객향' : '파트너향'} 공식 Pretendard 서체로 교체해야 합니다.`,
                autoFixable: true,
                fixAction: { type: 'fontFamily', targetValue: 'Pretendard', label: 'Pretendard로 변경' }
            });
        }
        // 폰트 크기 검사
        let fontSizeValue = null;
        if (textNode.fontSize !== figma.mixed) {
            fontSizeValue = textNode.fontSize;
        }
        else if (textNode.characters.length > 0) {
            const fs0 = textNode.getRangeFontSize(0, 1);
            if (typeof fs0 === 'number') {
                fontSizeValue = fs0;
            }
        }
        if (fontSizeValue !== null) {
            const size = fontSizeValue;
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
        // 자간 검사 (Letter Spacing: -1% / -0.01em)
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
        // 이모지 검사 (순수 픽토리얼 이모지만 검사, -, +, *, • 등 특수문자 완벽 제외)
        const chars = textNode.characters;
        if (containsPictorialEmoji(chars)) {
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
        // 에러 느낌표 금지
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
    // 4. 모서리 곡률 (Corner Radius) 검사 (일반 컨테이너용, 버튼은 6번에서 전담)
    // 고객향 표준 10px 고정 (토스트/툴팁/배지는 자동 제외, 모달/바텀시트 16px은 정상 승인)
    if (!isButtonContainer(node) && 'cornerRadius' in node && typeof node.cornerRadius === 'number' && node.cornerRadius > 0) {
        const radius = node.cornerRadius;
        const height = node.height;
        const isPill = radius >= height / 2 - 1;
        // Pill 형태이거나 토스트/툴팁/배지 등 특수 요소는 검사 제외
        if (!isPill && !isExemptFromRadiusCheck(node)) {
            if (mode === 'customer') {
                const isModal = isModalOrSheet(node);
                // 모달/바텀시트인 경우 16px 곡률은 공식 표준이므로 정상 통과!
                if (radius === 16 && isModal) {
                    // 정상 통과
                }
                else if (radius !== 10) {
                    // 만약 16px인데 모달 키워드가 전혀 없더라도, 확인 필요로 부드럽게 안내
                    const isProbablyModal = radius === 16;
                    issues.push({
                        id: `${node.id}-radius`,
                        nodeId: node.id,
                        nodeName: node.name,
                        nodeType: node.type,
                        severity: isProbablyModal ? 'check-needed' : 'must-fix',
                        category: 'radius',
                        groupKey: `radius-${radius}-exp-10`,
                        groupTitle: isProbablyModal
                            ? `곡률 16px 적용됨 (모달/바텀시트 외 10px 권장)`
                            : `곡률 ${radius}px 적용됨 (10px 표준 필요)`,
                        message: isProbablyModal
                            ? `곡률 16px 적용됨 (모달 UI인 경우 정상 규격입니다)`
                            : `곡률 ${radius}px 적용됨 (고객향 표준 10px 필요)`,
                        details: isProbablyModal
                            ? `모달 팝업 및 바텀시트는 16px 곡률이 공식 표준입니다. 일반 카드라면 10px로 변경하세요.`
                            : `고객향 디자인시스템은 기본 카드/컨테이너 모서리 곡률을 10px로 통일합니다.`,
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
    // 5. 레이아웃 캔버스 안전영역 검사 (오직 최상위 아트보드 프레임만 검사)
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
    // 6. ★ 버튼 심층 검증 (버튼 사이즈 & 내부 폰트 사이즈/굵기 & 모서리 곡률 분석)
    if (isButtonContainer(node)) {
        const w = Math.round(node.width);
        const h = Math.round(node.height);
        // 6-1. 버튼 높이 분석
        if (mode === 'customer') {
            // 고객향 표준 높이: 56px (모달 서브 버튼은 48px 허용)
            if (h !== 56 && h !== 48) {
                const isFarOff = h < 44 || h > 64;
                issues.push({
                    id: `${node.id}-btn-height`,
                    nodeId: node.id,
                    nodeName: node.name,
                    nodeType: node.type,
                    severity: isFarOff ? 'must-fix' : 'check-needed',
                    category: 'button',
                    groupKey: `btn-height-${h}`,
                    groupTitle: `버튼 높이 ${h}px (표준 56px 권장)`,
                    message: `버튼 높이가 ${h}px입니다 (다이사 표준: 56px, 모달 서브: 48px)`,
                    details: `고객향 주요 CTA 버튼은 높이 56px(모달 서브 버튼 48px) 규격을 준수해야 합니다.`,
                    autoFixable: true,
                    fixAction: { type: 'buttonHeight', targetValue: 56, label: '높이 56px로 변경' }
                });
            }
        }
        else {
            // 파트너향 표준 높이: 56px(Primary) 또는 51px(Secondary) (레거시 62px / 48px 허용)
            if (h !== 56 && h !== 51 && h !== 62 && h !== 48) {
                issues.push({
                    id: `${node.id}-btn-height-partner`,
                    nodeId: node.id,
                    nodeName: node.name,
                    nodeType: node.type,
                    severity: 'must-fix',
                    category: 'button',
                    groupKey: `btn-height-partner-${h}`,
                    groupTitle: `파트너 버튼 높이 ${h}px (표준 56px 권장)`,
                    message: `파트너 버튼 높이가 ${h}px입니다 (표준 56px 또는 51px 권장)`,
                    details: `파트너 메인 버튼은 56px, 서브 버튼은 51px 규격을 사용해야 합니다.`,
                    autoFixable: true,
                    fixAction: { type: 'buttonHeight', targetValue: 56, label: '높이 56px로 변경' }
                });
            }
        }
        // 6-2. 버튼 너비 분석 (모바일 360 화면 기준)
        if (w >= 280 && w <= 359 && w !== 312 && w !== 280 && w !== 136) {
            issues.push({
                id: `${node.id}-btn-width`,
                nodeId: node.id,
                nodeName: node.name,
                nodeType: node.type,
                severity: 'check-needed',
                category: 'button',
                groupKey: `btn-width-${w}`,
                groupTitle: `버튼 너비 ${w}px (모바일 312px 권장)`,
                message: `버튼 너비가 ${w}px입니다 (모바일 360 기준 312px 권장)`,
                details: `모바일 360px 캔버스에서 주요 CTA 버튼은 좌우 24px 여백을 고려한 312px 너비가 원칙입니다.`,
                autoFixable: true,
                fixAction: { type: 'buttonWidth', targetValue: 312, label: '너비 312px로 변경' }
            });
        }
        // 6-3. 버튼 내부 텍스트 폰트 크기 및 두께 분석
        const primaryText = findPrimaryTextNode(node);
        if (primaryText) {
            let btnFontSize = null;
            if (primaryText.fontSize !== figma.mixed) {
                btnFontSize = primaryText.fontSize;
            }
            else if (primaryText.characters.length > 0) {
                const fs0 = primaryText.getRangeFontSize(0, 1);
                if (typeof fs0 === 'number')
                    btnFontSize = fs0;
            }
            if (btnFontSize !== null) {
                if (mode === 'customer') {
                    // 고객향 버튼 표준 폰트 크기: 16px
                    if (btnFontSize !== 16) {
                        issues.push({
                            id: `${primaryText.id}-btn-font-size`,
                            nodeId: primaryText.id,
                            nodeName: `${node.name} > ${primaryText.name}`,
                            nodeType: primaryText.type,
                            severity: 'must-fix',
                            category: 'button',
                            groupKey: `btn-font-size-${btnFontSize}`,
                            groupTitle: `버튼 텍스트 크기 ${btnFontSize}px (표준 16px 필요)`,
                            message: `버튼 내부 텍스트 크기가 ${btnFontSize}px입니다 (표준 16px 필요)`,
                            details: `고객향 본문 및 주요 버튼 텍스트는 16px Bold가 표준 규격입니다.`,
                            autoFixable: true,
                            fixAction: { type: 'fontSize', targetValue: 16, label: '16px로 변경' }
                        });
                    }
                }
                else {
                    // 파트너향 버튼 표준 폰트 크기: 최소 16px 이상 (기본 18px Bold)
                    if (btnFontSize < 16) {
                        issues.push({
                            id: `${primaryText.id}-btn-font-size-partner`,
                            nodeId: primaryText.id,
                            nodeName: `${node.name} > ${primaryText.name}`,
                            nodeType: primaryText.type,
                            severity: 'must-fix',
                            category: 'button',
                            groupKey: `btn-font-size-partner-${btnFontSize}`,
                            groupTitle: `파트너 버튼 텍스트 크기 ${btnFontSize}px (18px Bold 필요)`,
                            message: `파트너 버튼 내부 텍스트가 ${btnFontSize}px로 너무 작습니다 (최소 16px/18px 필요)`,
                            details: `기사님 현장 시인성을 위해 파트너 버튼 텍스트는 18px Bold(보조 16px) 이상이어야 합니다.`,
                            autoFixable: true,
                            fixAction: { type: 'fontSize', targetValue: 18, label: '18px로 변경' }
                        });
                    }
                }
            }
            // 폰트 두께(Weight) 분석
            let isBold = false;
            let fontStyleStr = 'Regular';
            if (primaryText.fontName !== figma.mixed) {
                fontStyleStr = primaryText.fontName.style;
                const s = fontStyleStr.toLowerCase();
                isBold = s.includes('bold') || s.includes('700') || s.includes('800') || s.includes('900') || s.includes('semibold');
            }
            if (!isBold) {
                issues.push({
                    id: `${primaryText.id}-btn-font-weight`,
                    nodeId: primaryText.id,
                    nodeName: `${node.name} > ${primaryText.name}`,
                    nodeType: primaryText.type,
                    severity: 'check-needed',
                    category: 'button',
                    groupKey: `btn-font-weight-${fontStyleStr.toLowerCase()}`,
                    groupTitle: `버튼 텍스트 굵기 ${fontStyleStr} (Bold 권장)`,
                    message: `버튼 내부 텍스트가 ${fontStyleStr}로 설정되어 있습니다 (Bold 권장)`,
                    details: `버튼 클릭 유도 및 CTA 시인성 강화를 위해 Bold 스타일을 권장합니다.`,
                    autoFixable: true,
                    fixAction: { type: 'fontStyle', targetValue: 'Bold', label: 'Bold로 변경' }
                });
            }
        }
        // 6-4. 버튼 코너 곡률 (Corner Radius) 분석
        if ('cornerRadius' in node && typeof node.cornerRadius === 'number') {
            const radius = node.cornerRadius;
            const isPill = radius >= h / 2 - 1;
            if (!isPill) {
                if (mode === 'customer' && radius !== 10) {
                    issues.push({
                        id: `${node.id}-btn-radius`,
                        nodeId: node.id,
                        nodeName: node.name,
                        nodeType: node.type,
                        severity: 'must-fix',
                        category: 'button',
                        groupKey: `btn-radius-${radius}`,
                        groupTitle: `버튼 모서리 곡률 ${radius}px (표준 10px 필요)`,
                        message: `버튼 모서리 곡률이 ${radius}px입니다 (고객향 표준 10px)`,
                        details: `고객향 디자인시스템 표준 버튼 모서리 곡률은 10px입니다.`,
                        autoFixable: true,
                        fixAction: { type: 'radius', targetValue: 10, label: '10px로 변경' }
                    });
                }
                else if (mode === 'partner' && radius !== 6) {
                    issues.push({
                        id: `${node.id}-btn-radius-partner`,
                        nodeId: node.id,
                        nodeName: node.name,
                        nodeType: node.type,
                        severity: 'must-fix',
                        category: 'button',
                        groupKey: `btn-radius-partner-${radius}`,
                        groupTitle: `파트너 버튼 모서리 곡률 ${radius}px (표준 6px 필요)`,
                        message: `파트너 버튼 모서리 곡률이 ${radius}px입니다 (파트너 표준 6px)`,
                        details: `파트너 디자인시스템 표준 버튼 곡률은 6px입니다.`,
                        autoFixable: true,
                        fixAction: { type: 'radius', targetValue: 6, label: '6px로 변경' }
                    });
                }
            }
        }
    }
    // 7. 구버전 레거시 Floating CTA (360x56, r:0px) 금지 검사
    if (mode === 'customer') {
        if (node.type === 'FRAME' || node.type === 'COMPONENT' || node.type === 'INSTANCE' || node.type === 'RECTANGLE') {
            const isRootCanvas = node.parent && node.parent.type === 'PAGE';
            if (!isRootCanvas) {
                const w = Math.round(node.width);
                const h = Math.round(node.height);
                // 너비 360px 전폭에 높이 48~64px 사이의 하단 버튼
                if (w === 360 && h >= 48 && h <= 64) {
                    let radius = 0;
                    if ('cornerRadius' in node && typeof node.cornerRadius === 'number') {
                        radius = node.cornerRadius;
                    }
                    const name = node.name.toLowerCase();
                    const isButtonLike = name.includes('cta') || name.includes('btn') || name.includes('button') ||
                        name.includes('floating') || name.includes('하단') || name.includes('신청') ||
                        name.includes('완료') || name.includes('확인') || name.includes('다음');
                    let hasBlueBg = false;
                    if ('fills' in node && Array.isArray(node.fills)) {
                        for (const f of node.fills) {
                            if (f.type === 'SOLID' && f.visible !== false) {
                                const hex = rgbToHex(f.color.r, f.color.g, f.color.b);
                                if (hex === '#1219f7' || hex === '#595ef9')
                                    hasBlueBg = true;
                            }
                        }
                    }
                    // 반경이 0px(완전 직각)인 360 전폭 하단 CTA는 구버전 레거시 규격으로 에러 검출!
                    if (radius === 0 && (isButtonLike || hasBlueBg)) {
                        issues.push({
                            id: `${node.id}-legacy-floating-cta`,
                            nodeId: node.id,
                            nodeName: node.name,
                            nodeType: node.type,
                            severity: 'must-fix',
                            category: 'layout',
                            groupKey: 'legacy-floating-cta',
                            groupTitle: '레거시 Floating CTA (360x56, r:0px) 사용 금지',
                            message: '구버전 전폭 Floating CTA (360x56, r:0px)가 사용되었습니다',
                            details: '다이사 v2.0 공식 표준 버튼(너비 312px, 높이 56px, Corner Radius 10px)으로 수정해야 합니다.',
                            autoFixable: true,
                            fixAction: {
                                type: 'legacyCtaFix',
                                targetValue: { width: 312, height: 56, radius: 10 },
                                label: '표준 312x56 (r:10px)로 변경'
                            }
                        });
                    }
                }
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
            type: 'lint-empty-selection',
            message: '선택된 레이어가 없습니다. 검사할 프레임을 캔버스에서 클릭하세요.'
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
// 폰트 교체 안전 도우미
function applyFontFamily(textNode, targetFamily) {
    return __awaiter(this, void 0, void 0, function* () {
        const len = textNode.characters.length;
        if (len === 0)
            return;
        let isBold = false;
        if (textNode.fontName !== figma.mixed) {
            const s = textNode.fontName.style.toLowerCase();
            isBold = s.includes('bold') || s.includes('semibold') || s.includes('700') || s.includes('800') || s.includes('900');
        }
        else {
            const f0 = textNode.getRangeFontName(0, 1);
            if (f0 !== figma.mixed) {
                const s = f0.style.toLowerCase();
                isBold = s.includes('bold') || s.includes('semibold') || s.includes('700');
            }
        }
        const targetStyle = isBold ? 'Bold' : 'Regular';
        const targetFont = { family: targetFamily, style: targetStyle };
        const fallbackFont = { family: targetFamily, style: 'Regular' };
        try {
            yield figma.loadFontAsync(targetFont);
        }
        catch (e) {
            yield figma.loadFontAsync(fallbackFont);
        }
        try {
            if (textNode.fontName !== figma.mixed) {
                yield figma.loadFontAsync(textNode.fontName);
            }
            else {
                for (let i = 0; i < len; i++) {
                    const rf = textNode.getRangeFontName(i, i + 1);
                    if (rf !== figma.mixed) {
                        try {
                            yield figma.loadFontAsync(rf);
                        }
                        catch (e2) { }
                    }
                }
            }
        }
        catch (e) { }
        try {
            textNode.fontName = targetFont;
        }
        catch (err) {
            try {
                textNode.setRangeFontName(0, len, targetFont);
            }
            catch (err2) {
                textNode.fontName = fallbackFont;
            }
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
            else {
                const len = textNode.characters.length;
                if (len > 0) {
                    const f0 = textNode.getRangeFontName(0, 1);
                    if (f0 !== figma.mixed) {
                        yield figma.loadFontAsync(f0);
                    }
                    textNode.fontSize = fixAction.targetValue;
                }
            }
        }
        else if (fixAction.type === 'colorFill' && 'fills' in node && Array.isArray(node.fills)) {
            const rgb = hexToRgb(fixAction.targetValue);
            const newFills = node.fills.map(fill => {
                if (fill.type === 'SOLID') {
                    const curHex = rgbToHex(fill.color.r, fill.color.g, fill.color.b);
                    if (!fixAction.originalHex || curHex === fixAction.originalHex) {
                        return Object.assign(Object.assign({}, fill), { color: { r: rgb.r / 255, g: rgb.g / 255, b: rgb.b / 255 } });
                    }
                }
                return fill;
            });
            node.fills = newFills;
        }
        else if (fixAction.type === 'colorStroke' && 'strokes' in node && Array.isArray(node.strokes)) {
            const rgb = hexToRgb(fixAction.targetValue);
            const newStrokes = node.strokes.map(stroke => {
                if (stroke.type === 'SOLID') {
                    const curHex = rgbToHex(stroke.color.r, stroke.color.g, stroke.color.b);
                    if (!fixAction.originalHex || curHex === fixAction.originalHex) {
                        return Object.assign(Object.assign({}, stroke), { color: { r: rgb.r / 255, g: rgb.g / 255, b: rgb.b / 255 } });
                    }
                }
                return stroke;
            });
            node.strokes = newStrokes;
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
        else if (fixAction.type === 'legacyCtaFix') {
            if ('resize' in node) {
                node.resize(312, 56);
            }
            if ('cornerRadius' in node) {
                node.cornerRadius = 10;
            }
            if (node.parent && 'width' in node.parent && Math.round(node.parent.width) === 360) {
                node.x = 24;
            }
        }
        else if (fixAction.type === 'buttonHeight') {
            if ('resize' in node) {
                node.resize(node.width, fixAction.targetValue);
            }
        }
        else if (fixAction.type === 'buttonWidth') {
            if ('resize' in node) {
                node.resize(fixAction.targetValue, node.height);
            }
        }
        else if (fixAction.type === 'fontStyle' && node.type === 'TEXT') {
            const textNode = node;
            let family = 'Pretendard';
            if (textNode.fontName !== figma.mixed) {
                family = textNode.fontName.family;
            }
            const targetFont = { family, style: fixAction.targetValue };
            try {
                yield figma.loadFontAsync(targetFont);
                textNode.fontName = targetFont;
            }
            catch (e) {
                const fallbackFont = { family: 'Pretendard', style: 'Bold' };
                try {
                    yield figma.loadFontAsync(fallbackFont);
                    textNode.fontName = fallbackFont;
                }
                catch (e2) { }
            }
        }
    });
}
// ★ 피그마 캔버스 선택 변경 실시간 자동 감지 (selectionchange)
figma.on('selectionchange', () => {
    if (isNavigatingSelection)
        return;
    if (sessionScope !== 'selection')
        return;
    const selection = figma.currentPage.selection;
    if (selection.length > 0) {
        sessionTargetNodeIds = selection.map(n => n.id);
        executeLint();
    }
    else {
        sessionTargetNodeIds = [];
        figma.ui.postMessage({
            type: 'lint-empty-selection',
            message: '선택된 레이어가 없습니다. 검사할 프레임을 캔버스에서 클릭하세요.'
        });
    }
});
figma.ui.onmessage = (msg) => __awaiter(void 0, void 0, void 0, function* () {
    // 1) 검사 요청 (모드 또는 스코프 변경 시)
    if (msg.type === 'run-lint') {
        const { mode, scope, ignoreHidden } = msg;
        sessionMode = mode;
        sessionScope = scope || 'selection';
        sessionIgnoreHidden = ignoreHidden !== undefined ? !!ignoreHidden : true;
        if (sessionScope === 'selection') {
            const selection = figma.currentPage.selection;
            if (selection.length === 0) {
                figma.ui.postMessage({
                    type: 'lint-empty-selection',
                    message: '선택된 레이어가 없습니다. 검사할 프레임을 캔버스에서 클릭하세요.'
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
    // 2) 특정 노드 선택 및 화면 줌 이동
    if (msg.type === 'select-node') {
        const node = figma.getNodeById(msg.nodeId);
        if (node && 'type' in node) {
            isNavigatingSelection = true;
            figma.currentPage.selection = [node];
            figma.viewport.scrollAndZoomIntoView([node]);
            setTimeout(() => {
                isNavigatingSelection = false;
            }, 350);
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
    // 5) 전체 일괄 수정 (Fix All on Existing Frame)
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
    // 6) 완성본 복제 생성 (Clone & Auto-Fix)
    if (msg.type === 'clone-and-fix') {
        let sourceNodes = [];
        for (const id of sessionTargetNodeIds) {
            const node = figma.getNodeById(id);
            if (node && 'type' in node) {
                sourceNodes.push(node);
            }
        }
        if (sourceNodes.length === 0) {
            sourceNodes = [...figma.currentPage.selection];
        }
        if (sourceNodes.length === 0) {
            figma.notify('복제하여 수정본을 생성할 프레임을 먼저 선택해주세요.');
            return;
        }
        try {
            const clonedNodes = [];
            for (const originalNode of sourceNodes) {
                const clone = originalNode.clone();
                clone.name = `[수정본] ${originalNode.name}`;
                clone.x = originalNode.x + originalNode.width + 48;
                clone.y = originalNode.y;
                clonedNodes.push(clone);
            }
            const cloneIssues = [];
            for (const clone of clonedNodes) {
                lintNode(clone, sessionMode, cloneIssues, { ignoreHidden: sessionIgnoreHidden });
            }
            let fixedCount = 0;
            for (const item of cloneIssues) {
                if (item.autoFixable && item.fixAction) {
                    const node = figma.getNodeById(item.nodeId);
                    if (node && 'type' in node) {
                        try {
                            yield applyFixToNode(node, item.fixAction);
                            fixedCount++;
                        }
                        catch (e) {
                            console.error('Clone fix item error', e);
                        }
                    }
                }
            }
            isNavigatingSelection = true;
            figma.currentPage.selection = clonedNodes;
            figma.viewport.scrollAndZoomIntoView(clonedNodes);
            setTimeout(() => { isNavigatingSelection = false; }, 350);
            figma.notify(`새 [수정본] 프레임 생성 완료! (${fixedCount}개 항목 자동 보정됨)`);
            sessionTargetNodeIds = clonedNodes.map(n => n.id);
            executeLint();
        }
        catch (e) {
            figma.notify(`완성본 복제 생성 실패: ${e.message || e}`);
        }
    }
    // 7) 알림 메시지 표시
    if (msg.type === 'notify') {
        figma.notify(msg.message);
    }
});
// 최초 실행 시 현재 선택된 요소가 있다면 바로 실시간 검사 실행
if (figma.currentPage.selection.length > 0) {
    sessionTargetNodeIds = figma.currentPage.selection.map(n => n.id);
    executeLint();
}
