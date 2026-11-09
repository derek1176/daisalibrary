// Figma Plugin Backend Code - Daisa Design System Linter v2
// 다이사(da24) 디자인시스템 검증기 (고객향 & 파트너향 분리 린터)

figma.showUI(__html__, { width: 480, height: 700, themeColors: true });

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

function findNearestAllowedFontSize(current: number, allowed: number[]): number {
  return allowed.reduce((prev, curr) => 
    Math.abs(curr - current) < Math.abs(prev - current) ? curr : prev
  );
}

interface LintIssue {
  id: string;
  nodeId: string;
  nodeName: string;
  nodeType: string;
  severity: 'must-fix' | 'check-needed'; // '수정 필요' | '확인 필요'
  category: 'typography' | 'color' | 'radius' | 'layout';
  message: string;
  details?: string;
  autoFixable?: boolean;
  fixAction?: {
    type: 'fontSize' | 'radius' | 'strokeWeight' | 'letterSpacing';
    targetValue: any;
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

  const allowedColors = mode === 'customer' ? CUSTOMER_COLORS : PARTNER_COLORS;

  // 1. 색상 검사 (Fills)
  if ('fills' in node && Array.isArray(node.fills)) {
    for (const fill of node.fills as Paint[]) {
      if (fill.visible !== false && fill.type === 'SOLID') {
        const hex = rgbToHex(fill.color.r, fill.color.g, fill.color.b);
        if (fill.opacity === 0) continue;

        if (mode === 'partner' && PARTNER_BANNED_COLORS[hex]) {
          issues.push({
            id: `${node.id}-fill-banned-${hex}`,
            nodeId: node.id,
            nodeName: node.name,
            nodeType: node.type,
            severity: 'must-fix',
            category: 'color',
            message: `폐기된 레거시 컬러 ${hex.toUpperCase()} 사용됨`,
            details: `${PARTNER_BANNED_COLORS[hex]} 사용 금지 규정`
          });
        } else if (!allowedColors[hex]) {
          issues.push({
            id: `${node.id}-fill-${hex}`,
            nodeId: node.id,
            nodeName: node.name,
            nodeType: node.type,
            severity: 'must-fix',
            category: 'color',
            message: `미허용 Fill 컬러 ${hex.toUpperCase()} 사용됨`,
            details: `${mode === 'customer' ? '고객향' : '파트너향'} 13대 지정 컬러 토큰만 허용됩니다.`
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
          issues.push({
            id: `${node.id}-stroke-${hex}`,
            nodeId: node.id,
            nodeName: node.name,
            nodeType: node.type,
            severity: 'must-fix',
            category: 'color',
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
          message: `테두리 두께가 ${node.strokeWeight}px입니다 (1px 권장)`,
          details: `다이사 UI 규격은 1px 보더를 원칙으로 합니다. (2px 두꺼운 선 금지)`,
          autoFixable: true,
          fixAction: { type: 'strokeWeight', targetValue: 1, label: '1px로 변경' }
        });
      }
    }
  }

  // 3. 타이포그래피 검사 (TEXT Node)
  if (node.type === 'TEXT') {
    const textNode = node as TextNode;

    // 3-1. 폰트 패밀리 검사
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
            message: `비표준 서체 (${family}) 사용됨`,
            details: `고객향은 Pretendard 단일 서체만 허용합니다.`
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
            message: `비표준 서체 (${family}) 사용됨`,
            details: `파트너향은 Pretendard 또는 Noto Sans KR만 허용합니다.`
          });
        }
      }
    }

    // 3-2. 폰트 크기 검사
    if (textNode.fontSize !== figma.mixed) {
      const size = textNode.fontSize;
      const allowedSizes = mode === 'customer' ? CUSTOMER_FONT_SIZES : PARTNER_FONT_SIZES;

      if (mode === 'customer') {
        // 고객향: 짝수 6종 (12, 14, 16, 18, 20, 24) + 마이크로 배지 (10, 11)
        if (!allowedSizes.includes(size)) {
          const nearest = findNearestAllowedFontSize(size, allowedSizes);
          issues.push({
            id: `${node.id}-font-size`,
            nodeId: node.id,
            nodeName: node.name,
            nodeType: node.type,
            severity: 'must-fix',
            category: 'typography',
            message: `비표준 폰트 크기 ${size}px 사용됨 (홀수/소수점 금지)`,
            details: `고객향 짝수 규격: 12, 14, 16, 18, 20, 24px (추천: ${nearest}px)`,
            autoFixable: true,
            fixAction: { type: 'fontSize', targetValue: nearest, label: `${nearest}px로 변경` }
          });
        }
      } else {
        // 파트너향: 14, 16, 18, 20, 24, 28, 32px (14 미만 엄격 금지, 특히 12px 금지)
        if (size < 14) {
          issues.push({
            id: `${node.id}-font-size-too-small`,
            nodeId: node.id,
            nodeName: node.name,
            nodeType: node.type,
            severity: 'must-fix',
            category: 'typography',
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
        message: `텍스트 내 네이티브 이모지가 포함되어 있습니다`,
        details: `네이티브 이모지 사용 금지 (공식 선형 SVG 아이콘으로 대체 필수)`
      });
    }

    // 3-5. 에러 인풋 내 느낌표 아이콘/텍스트 금지
    if (chars.trim() === '!' && node.name.toLowerCase().includes('error')) {
      issues.push({
        id: `${node.id}-error-exclamation`,
        nodeId: node.id,
        nodeName: node.name,
        nodeType: node.type,
        severity: 'must-fix',
        category: 'layout',
        message: `에러 인풋 내 느낌표(!) 아이콘 사용 금지`,
        details: `1px 에러 보더(#F34766)와 하단 14px 안내 문구로만 피드백해야 합니다.`
      });
    }
  }

  // 4. 모서리 곡률 (Corner Radius) 검사
  if ('cornerRadius' in node && typeof node.cornerRadius === 'number' && node.cornerRadius > 0) {
    const radius = node.cornerRadius;
    const height = node.height;
    const isPill = radius >= height / 2 - 1;

    if (!isPill) {
      if (mode === 'customer') {
        const isModalOrSheet = node.name.toLowerCase().includes('modal') || 
                               node.name.toLowerCase().includes('sheet') || 
                               node.name.toLowerCase().includes('popup');

        let expectedRadius = 10;
        let expectedDesc = '';

        if (height < 80) {
          expectedRadius = 8;
          expectedDesc = '소형 카드/행 (높이 < 80px) ➔ 8px';
        } else if (height <= 240) {
          expectedRadius = 10;
          expectedDesc = '표준 카드 (높이 80~240px) ➔ 10px';
        } else {
          expectedRadius = 12;
          expectedDesc = '대형 컨테이너 (높이 ≥ 241px) ➔ 12px';
        }

        if (radius === 16 && isModalOrSheet) {
          // 모달/바텀시트 16px은 정상 허용
        } else if (radius !== expectedRadius) {
          issues.push({
            id: `${node.id}-radius`,
            nodeId: node.id,
            nodeName: node.name,
            nodeType: node.type,
            severity: radius === 16 ? 'check-needed' : 'must-fix',
            category: 'radius',
            message: `곡률 ${radius}px 적용됨 (높이 ${Math.round(height)}px 기준 ${expectedRadius}px 필요)`,
            details: expectedDesc,
            autoFixable: true,
            fixAction: { type: 'radius', targetValue: expectedRadius, label: `${expectedRadius}px로 변경` }
          });
        }
      } else {
        // [파트너향] 절대 기준 6px (서브 4px 허용)
        const isSubSmall = height <= 32 || node.name.toLowerCase().includes('chip') || node.name.toLowerCase().includes('tag');
        const allowedPartnerRadius = isSubSmall ? [4, 6] : [6];

        if (!allowedPartnerRadius.includes(radius)) {
          const isCustomerRadius = radius === 10 || radius === 16;
          issues.push({
            id: `${node.id}-radius`,
            nodeId: node.id,
            nodeName: node.name,
            nodeType: node.type,
            severity: isCustomerRadius ? 'must-fix' : 'check-needed',
            category: 'radius',
            message: `파트너 규격 외 곡률 ${radius}px 사용됨 (6px 고정 필수)`,
            details: isCustomerRadius 
              ? `고객향 라운드(${radius}px)는 파트너 화면에서 엄격히 금지됩니다. 6px로 수정하세요.`
              : `파트너 화면은 모서리 곡률 6px(서브 태그 4px)을 기본 아이덴티티로 통일합니다.`,
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
    // 최상위 아트보드 프레임 검사 (부모가 PAGE인 경우만 검사)
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

figma.ui.onmessage = async (msg) => {
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
    } else {
      sessionTargetNodeIds = figma.currentPage.children.map(n => n.id);
    }

    executeLint();
  }

  // 2) 특정 노드 선택 및 화면 줌 이동 (세션 타겟은 유지!)
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
      if (fixAction.type === 'fontSize' && node.type === 'TEXT') {
        const textNode = node as TextNode;
        if (textNode.fontName !== figma.mixed) {
          await figma.loadFontAsync(textNode.fontName);
          textNode.fontSize = fixAction.targetValue;
          figma.notify(`폰트 크기를 ${fixAction.targetValue}px로 수정했습니다.`);
        }
      } else if (fixAction.type === 'radius' && 'cornerRadius' in node) {
        (node as any).cornerRadius = fixAction.targetValue;
        figma.notify(`모서리 곡률을 ${fixAction.targetValue}px로 수정했습니다.`);
      } else if (fixAction.type === 'strokeWeight' && 'strokeWeight' in node) {
        (node as any).strokeWeight = fixAction.targetValue;
        figma.notify(`테두리 두께를 ${fixAction.targetValue}px로 수정했습니다.`);
      } else if (fixAction.type === 'letterSpacing' && node.type === 'TEXT') {
        const textNode = node as TextNode;
        if (textNode.fontName !== figma.mixed) {
          await figma.loadFontAsync(textNode.fontName);
          textNode.letterSpacing = fixAction.targetValue;
          figma.notify(`자간을 -1%로 수정했습니다.`);
        }
      }

      // 수정 후 세션 타겟을 그대로 유지하며 재검사
      executeLint();
    } catch (e: any) {
      figma.notify(`자동 수정 실패: ${e.message || e}`);
    }
  }

  // 4) 자동 수정 가능한 모든 이슈 일괄 수정
  if (msg.type === 'fix-all') {
    const { issues } = msg;
    let fixedCount = 0;

    for (const item of issues) {
      if (item.autoFixable && item.fixAction) {
        const node = figma.getNodeById(item.nodeId);
        if (node && 'type' in node) {
          try {
            if (item.fixAction.type === 'fontSize' && node.type === 'TEXT') {
              const textNode = node as TextNode;
              if (textNode.fontName !== figma.mixed) {
                await figma.loadFontAsync(textNode.fontName);
                textNode.fontSize = item.fixAction.targetValue;
                fixedCount++;
              }
            } else if (item.fixAction.type === 'radius' && 'cornerRadius' in node) {
              (node as any).cornerRadius = item.fixAction.targetValue;
              fixedCount++;
            } else if (item.fixAction.type === 'strokeWeight' && 'strokeWeight' in node) {
              (node as any).strokeWeight = item.fixAction.targetValue;
              fixedCount++;
            } else if (item.fixAction.type === 'letterSpacing' && node.type === 'TEXT') {
              const textNode = node as TextNode;
              if (textNode.fontName !== figma.mixed) {
                await figma.loadFontAsync(textNode.fontName);
                textNode.letterSpacing = item.fixAction.targetValue;
                fixedCount++;
              }
            }
          } catch (e) {
            console.error('Auto fix error for node', item.nodeId, e);
          }
        }
      }
    }

    figma.notify(`총 ${fixedCount}개 항목의 자동 수정을 완료했습니다.`);
    executeLint();
  }

  // 5) 알림 메시지 표시
  if (msg.type === 'notify') {
    figma.notify(msg.message);
  }
};
