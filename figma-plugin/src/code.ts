// Figma Plugin Backend Code - Daisa Design System Linter v5
// 다이사(da24) 디자인시스템 검증기 (고객향 & 파트너향 분리 린터)

figma.showUI(__html__, { width: 480, height: 720, themeColors: true });

// -------------------------------------------------------------
// 1. 디자인 시스템 토큰 정의 (Customer vs Partner 엄격 분리)
// -------------------------------------------------------------

// [고객향] 허용 컬러 토큰 (Hex 13종)
const CUSTOMER_COLORS: Record<string, string> = {
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
const PARTNER_COLORS: Record<string, string> = {
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
const PARTNER_BANNED_COLORS: Record<string, string> = {
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

let sessionTargetNodeIds: string[] = [];
let sessionMode: 'customer' | 'partner' = 'customer';
let sessionIgnoreHidden: boolean = true;

function rgbToHex(r: number, g: number, b: number): string {
  const toHex = (n: number) => {
    const hex = Math.round(Math.max(0, Math.min(1, n)) * 255).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toLowerCase();
}

function hexToRgb(hex: string): { r: number, g: number, b: number } {
  const clean = hex.replace('#', '');
  const num = parseInt(clean, 16);
  return {
    r: (num >> 16) & 255,
    g: (num >> 8) & 255,
    b: num & 255
  };
}

// 색상 거리 계산 (가중치 RGB 유클리디안 거리)
function colorDistance(c1: { r: number, g: number, b: number }, c2: { r: number, g: number, b: number }): number {
  const dr = c1.r - c2.r;
  const dg = c1.g - c2.g;
  const db = c1.b - c2.b;
  return Math.sqrt(2 * dr * dr + 4 * dg * dg + 3 * db * db);
}

// 가장 가까운 가이드 내 공식 컬러 토큰 매칭
function findNearestColorToken(
  hex: string, 
  allowedColors: Record<string, string>
): { hex: string, name: string, distance: number } | null {
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

  // 임계값: 약 65 이하인 경우(근접한 회색, 화이트, 블랙 등) 추천 적용
  if (minDistance <= 65) {
    return { hex: bestHex, name: bestName, distance: minDistance };
  }
  return null;
}

function findNearestAllowedFontSize(current: number, allowed: number[]): number {
  return allowed.reduce((prev, curr) => 
    Math.abs(curr - current) < Math.abs(prev - current) ? curr : prev
  );
}

// 시스템 UI (Status Bar, Home Bar 등) 자동 제외 판별
function isSystemUI(node: SceneNode): boolean {
  const name = node.name.toLowerCase();
  return name.includes('status bar') || 
         name.includes('statusbar') || 
         name.includes('home bar') || 
         name.includes('home indicator') || 
         name.includes('homebar');
}

// 토스트, 툴팁, 배지 등 특수 컴포넌트 예외 판별
function isExemptFromRadiusCheck(node: SceneNode): boolean {
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

interface LintIssue {
  id: string;
  nodeId: string;
  nodeName: string;
  nodeType: string;
  severity: 'must-fix' | 'check-needed'; // '수정 필요' | '확인 필요'
  category: 'typography' | 'color' | 'radius' | 'layout';
  groupKey: string;     // 동일 피드백 그룹핑 키
  groupTitle: string;   // 그룹 대표 타이틀
  message: string;
  details?: string;
  autoFixable?: boolean;
  fixAction?: {
    type: 'fontSize' | 'fontFamily' | 'radius' | 'strokeWeight' | 'letterSpacing' | 'colorFill' | 'colorStroke';
    targetValue: any;
    originalHex?: string;
    label?: string;
  };
}

// -------------------------------------------------------------
// 3. 검사 엔진 (Linter Core)
// -------------------------------------------------------------

function lintNode(
  node: SceneNode,
  mode: 'customer' | 'partner',
  issues: LintIssue[],
  options: { ignoreHidden: boolean }
) {
  if (options.ignoreHidden && !node.visible) return;

  // ★ Status Bar - iPhone, Home Bar 등 시스템 UI는 완전 제외
  if (isSystemUI(node)) return;

  const allowedColors = mode === 'customer' ? CUSTOMER_COLORS : PARTNER_COLORS;

  // 1. 색상 검사 (Fills)
  if ('fills' in node && Array.isArray(node.fills)) {
    for (const fill of node.fills as Paint[]) {
      if (fill.visible !== false && fill.type === 'SOLID') {
        const hex = rgbToHex(fill.color.r, fill.color.g, fill.color.b);
        if (fill.opacity === 0) continue;

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
        } else if (!allowedColors[hex]) {
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
    for (const stroke of node.strokes as Paint[]) {
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
    const textNode = node as TextNode;

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
      } else {
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
      } else {
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
        } else if (!allowedSizes.includes(size)) {
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

        const expectedRadius = 10;

        if (radius === 16 && isModalOrSheet) {
          // 모달/시트 16px 허용
        } else if (radius !== expectedRadius) {
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
      } else {
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
    const frame = node as FrameNode;
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
  const issues: LintIssue[] = [];
  const targetNodes: SceneNode[] = [];

  for (const id of sessionTargetNodeIds) {
    const node = figma.getNodeById(id);
    if (node && 'type' in node) {
      targetNodes.push(node as SceneNode);
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
async function applyFontFamily(textNode: TextNode, targetFamily: string) {
  let targetStyle = 'Regular';
  if (textNode.fontName !== figma.mixed) {
    targetStyle = textNode.fontName.style || 'Regular';
  }

  const primaryFont: FontName = { family: targetFamily, style: targetStyle };
  try {
    await figma.loadFontAsync(primaryFont);
    textNode.fontName = primaryFont;
  } catch (err) {
    const fallbackStyle = targetStyle.toLowerCase().includes('bold') ? 'Bold' : 'Regular';
    const fallbackFont: FontName = { family: targetFamily, style: fallbackStyle };
    await figma.loadFontAsync(fallbackFont);
    textNode.fontName = fallbackFont;
  }
}

async function applyFixToNode(node: SceneNode, fixAction: any) {
  if (fixAction.type === 'fontFamily' && node.type === 'TEXT') {
    await applyFontFamily(node as TextNode, fixAction.targetValue);
  } else if (fixAction.type === 'fontSize' && node.type === 'TEXT') {
    const textNode = node as TextNode;
    if (textNode.fontName !== figma.mixed) {
      await figma.loadFontAsync(textNode.fontName);
      textNode.fontSize = fixAction.targetValue;
    }
  } else if (fixAction.type === 'colorFill' && 'fills' in node && Array.isArray(node.fills)) {
    const rgb = hexToRgb(fixAction.targetValue);
    const newFills = (node.fills as Paint[]).map(fill => {
      if (fill.type === 'SOLID') {
        const curHex = rgbToHex(fill.color.r, fill.color.g, fill.color.b);
        if (!fixAction.originalHex || curHex === fixAction.originalHex) {
          return {
            ...fill,
            color: { r: rgb.r / 255, g: rgb.g / 255, b: rgb.b / 255 }
          };
        }
      }
      return fill;
    });
    (node as any).fills = newFills;
  } else if (fixAction.type === 'colorStroke' && 'strokes' in node && Array.isArray(node.strokes)) {
    const rgb = hexToRgb(fixAction.targetValue);
    const newStrokes = (node.strokes as Paint[]).map(stroke => {
      if (stroke.type === 'SOLID') {
        const curHex = rgbToHex(stroke.color.r, stroke.color.g, stroke.color.b);
        if (!fixAction.originalHex || curHex === fixAction.originalHex) {
          return {
            ...stroke,
            color: { r: rgb.r / 255, g: rgb.g / 255, b: rgb.b / 255 }
          };
        }
      }
      return stroke;
    });
    (node as any).strokes = newStrokes;
  } else if (fixAction.type === 'radius' && 'cornerRadius' in node) {
    (node as any).cornerRadius = fixAction.targetValue;
  } else if (fixAction.type === 'strokeWeight' && 'strokeWeight' in node) {
    (node as any).strokeWeight = fixAction.targetValue;
  } else if (fixAction.type === 'letterSpacing' && node.type === 'TEXT') {
    const textNode = node as TextNode;
    if (textNode.fontName !== figma.mixed) {
      await figma.loadFontAsync(textNode.fontName);
      textNode.letterSpacing = fixAction.targetValue;
    }
  }
}

figma.ui.onmessage = async (msg) => {
  // 1) 검사 최초 실행 요청
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
    } else {
      sessionTargetNodeIds = figma.currentPage.children.map(n => n.id);
    }

    executeLint();
  }

  // 2) 특정 노드 선택 및 화면 줌 이동
  if (msg.type === 'select-node') {
    const node = figma.getNodeById(msg.nodeId);
    if (node && 'type' in node) {
      figma.currentPage.selection = [node as SceneNode];
      figma.viewport.scrollAndZoomIntoView([node as SceneNode]);
    } else {
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
      await applyFixToNode(node as SceneNode, fixAction);
      figma.notify('수정이 완료되었습니다.');
      executeLint();
    } catch (e: any) {
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
            await applyFixToNode(node as SceneNode, item.fixAction);
            fixedCount++;
          } catch (e) {
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
            await applyFixToNode(node as SceneNode, item.fixAction);
            fixedCount++;
          } catch (e) {
            console.error('Auto fix error for node', item.nodeId, e);
          }
        }
      }
    }

    figma.notify(`총 ${fixedCount}개 항목의 자동 수정을 완료했습니다.`);
    executeLint();
  }

  // 6) ★ 완성본 복제 생성 (Clone & Auto-Fix)
  // 원본은 그대로 보존하고, 옆에 복제본을 만들어 모든 항목을 자동 수정한 뒤 비교할 수 있게 함!
  if (msg.type === 'clone-and-fix') {
    let sourceNodes: SceneNode[] = [];
    for (const id of sessionTargetNodeIds) {
      const node = figma.getNodeById(id);
      if (node && 'type' in node) {
        sourceNodes.push(node as SceneNode);
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
      const clonedNodes: SceneNode[] = [];

      for (const originalNode of sourceNodes) {
        const clone = originalNode.clone();
        clone.name = `[수정본] ${originalNode.name}`;
        
        // 원본 우측에 여백을 두고 나란히 배치
        clone.x = originalNode.x + originalNode.width + 48;
        clone.y = originalNode.y;
        clonedNodes.push(clone);
      }

      // 복제된 레이어 트리를 대상으로 린트 재실행하여 모든 자동 수정 액션 적용
      const cloneIssues: LintIssue[] = [];
      for (const clone of clonedNodes) {
        lintNode(clone, sessionMode, cloneIssues, { ignoreHidden: sessionIgnoreHidden });
      }

      let fixedCount = 0;
      for (const item of cloneIssues) {
        if (item.autoFixable && item.fixAction) {
          const node = figma.getNodeById(item.nodeId);
          if (node && 'type' in node) {
            try {
              await applyFixToNode(node as SceneNode, item.fixAction);
              fixedCount++;
            } catch (e) {
              console.error('Clone fix item error', e);
            }
          }
        }
      }

      // 새로 생성된 완성본 프레임을 선택하고 뷰포트 확대
      figma.currentPage.selection = clonedNodes;
      figma.viewport.scrollAndZoomIntoView(clonedNodes);

      figma.notify(`새 [수정본] 프레임 생성 완료! (${fixedCount}개 항목 자동 보정됨)`);

      // 린터 세션을 새로 생성된 복제본으로 전환하여 바로 검증 결과 확인
      sessionTargetNodeIds = clonedNodes.map(n => n.id);
      executeLint();
    } catch (e: any) {
      figma.notify(`완성본 복제 생성 실패: ${e.message || e}`);
    }
  }

  // 7) 알림 메시지 표시
  if (msg.type === 'notify') {
    figma.notify(msg.message);
  }
};
