/**
 * Figma Clipboard Utility
 * Copies SVG to clipboard formatted so that pasting (Cmd+V / Ctrl+V) in Figma
 * automatically creates editable native vector frames, rectangles, and text layers.
 */

export async function copySvgToFigma(svgString: string): Promise<boolean> {
  const cleanSvg = svgString.trim();
  try {
    if (navigator.clipboard && window.ClipboardItem) {
      const blobSvg = new Blob([cleanSvg], { type: 'image/svg+xml' });
      const blobText = new Blob([cleanSvg], { type: 'text/plain' });
      const blobHtml = new Blob([cleanSvg], { type: 'text/html' });
      const item = new ClipboardItem({
        'image/svg+xml': blobSvg,
        'text/html': blobHtml,
        'text/plain': blobText,
      });
      await navigator.clipboard.write([item]);
      return true;
    } else {
      await navigator.clipboard.writeText(cleanSvg);
      return true;
    }
  } catch (err) {
    try {
      await navigator.clipboard.writeText(cleanSvg);
      return true;
    } catch (fallbackErr) {
      console.error('Failed to copy to clipboard', fallbackErr);
      return false;
    }
  }
}

// 1. 메인 버튼 SVG 생성기 (고객향 56px r:10 16px Bold / 파트너향 56px r:6 18px Bold)
export function getMainButtonSvg(params: {
  mode: 'customer' | 'partner';
  device: 'mobile' | 'pc';
  state: 'normal' | 'loading' | 'disable';
  text?: string;
}): string {
  const { mode, device, state } = params;
  const isPartner = mode === 'partner';
  const width = device === 'mobile' ? 312 : isPartner ? 627 : 640;
  const height = 56;
  const radius = isPartner ? 6 : 10;
  const fontSize = isPartner ? 18 : 16;
  const defaultText = params.text || (isPartner ? '견적 제출하기' : '견적 신청하기');
  const text = state === 'loading' ? '처리 중...' : defaultText;

  let bg = '#1219F7';
  let textColor = '#FFFFFF';

  if (state === 'disable') {
    bg = isPartner ? '#E5E8EB' : '#D7DBE2';
    textColor = isPartner ? '#B0B8C1' : '#888888';
  }

  const yCenter = Math.round(height / 2 + fontSize * 0.35);

  return `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g id="${isPartner ? 'Partner_Primary_Button' : 'Public_Button'}">
    <rect width="${width}" height="${height}" rx="${radius}" fill="${bg}"/>
    <text x="${width / 2}" y="${yCenter}" fill="${textColor}" font-family="Pretendard, -apple-system, BlinkMacSystemFont, sans-serif" font-size="${fontSize}" font-weight="700" text-anchor="middle">${text}</text>
  </g>
</svg>`.trim();
}

// 2. 모달 버튼 SVG 생성기 (280px 단일 또는 136px + 8px + 136px 2분할, 56px 또는 48px, r:10)
// 회색 취소 버튼 -> 흰색 배경에 아웃라인 회색 버튼 (#D7DBE2, 텍스트 #4E5968)
export function getModalButtonsSvg(params: {
  type: 'single' | 'double';
  size: 48 | 56;
  confirmText?: string;
  cancelText?: string;
}): string {
  const { type, size, confirmText = '확인', cancelText = '취소' } = params;
  const height = size;
  const radius = 10;
  const fontSize = 16;
  const yCenter = Math.round(height / 2 + fontSize * 0.35);

  if (type === 'single') {
    return `
<svg width="280" height="${height}" viewBox="0 0 280 ${height}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g id="Modal_Button_Single">
    <rect width="280" height="${height}" rx="${radius}" fill="#1219F7"/>
    <text x="140" y="${yCenter}" fill="#FFFFFF" font-family="Pretendard, -apple-system, BlinkMacSystemFont, sans-serif" font-size="${fontSize}" font-weight="700" text-anchor="middle">${confirmText}</text>
  </g>
</svg>`.trim();
  }

  return `
<svg width="280" height="${height}" viewBox="0 0 280 ${height}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g id="Modal_Buttons_Double">
    <!-- 취소 버튼 (흰색 배경 + 아웃라인 회색) -->
    <g id="Btn_Cancel">
      <rect x="0.5" y="0.5" width="135" height="${height - 1}" rx="${radius}" fill="#FFFFFF" stroke="#D7DBE2" stroke-width="1"/>
      <text x="68" y="${yCenter}" fill="#4E5968" font-family="Pretendard, -apple-system, BlinkMacSystemFont, sans-serif" font-size="${fontSize}" font-weight="700" text-anchor="middle">${cancelText}</text>
    </g>
    <!-- 확인 버튼 -->
    <g id="Btn_Confirm" transform="translate(144, 0)">
      <rect width="136" height="${height}" rx="${radius}" fill="#1219F7"/>
      <text x="68" y="${yCenter}" fill="#FFFFFF" font-family="Pretendard, -apple-system, BlinkMacSystemFont, sans-serif" font-size="${fontSize}" font-weight="700" text-anchor="middle">${confirmText}</text>
    </g>
  </g>
</svg>`.trim();
}

// 3. 파트너 서브 액션 버튼 SVG 생성기 (51px, r:6)
export function getPartnerSecondaryPairSvg(): string {
  return `
<svg width="340" height="51" viewBox="0 0 340 51" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g id="Partner_Action_Pair">
    <!-- 취소 버튼 -->
    <g id="Btn_Cancel">
      <rect width="165" height="51" rx="6" fill="#F2F4F6"/>
      <text x="82.5" y="32" fill="#191F28" font-family="Pretendard, -apple-system, BlinkMacSystemFont, sans-serif" font-size="16" font-weight="700" text-anchor="middle">취소</text>
    </g>
    <!-- 액션 버튼 -->
    <g id="Btn_Action" transform="translate(175, 0)">
      <rect width="165" height="51" rx="6" fill="#1219F7"/>
      <text x="82.5" y="32" fill="#FFFFFF" font-family="Pretendard, -apple-system, BlinkMacSystemFont, sans-serif" font-size="16" font-weight="700" text-anchor="middle">답변 생성</text>
    </g>
  </g>
</svg>`.trim();
}

export function getPartnerOutlinePairSvg(): string {
  return `
<svg width="340" height="51" viewBox="0 0 340 51" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g id="Partner_Outline_Pair">
    <g id="Btn_Outline_Detail">
      <rect x="0.5" y="0.5" width="164" height="50" rx="5.5" fill="#FFFFFF" stroke="#595EF9" stroke-width="1"/>
      <text x="82.5" y="32" fill="#595EF9" font-family="Pretendard, -apple-system, BlinkMacSystemFont, sans-serif" font-size="16" font-weight="700" text-anchor="middle">상세 조회</text>
    </g>
    <g id="Btn_Outline_Modify" transform="translate(175, 0)">
      <rect x="0.5" y="0.5" width="164" height="50" rx="5.5" fill="#FFFFFF" stroke="#595EF9" stroke-width="1"/>
      <text x="82.5" y="32" fill="#595EF9" font-family="Pretendard, -apple-system, BlinkMacSystemFont, sans-serif" font-size="16" font-weight="700" text-anchor="middle">조건 변경</text>
    </g>
  </g>
</svg>`.trim();
}

// 4. 필터 칩 여러 개 오토레이아웃 프레임 SVG 생성기
// 피그마 노드: 9152:1806
// 규칙: 칩 간 간격 6px, 좌우 패딩 20px (컨테이너 padding-x: 20px), h:36, Pill rx:18
export function getFilterChipsRowSvg(): string {
  // 텍스트 길이 + 좌우 패딩 40px (20px * 2)
  const chipItems = [
    { label: '가정이사 (포장)', width: 140, active: true },
    { label: '원룸/소형이사', width: 122, active: false },
    { label: '사무실 이전', width: 108, active: false },
    { label: '보관이사', width: 92, active: false },
    { label: '에어컨 분해청소', width: 132, active: false },
  ];

  let currentX = 0;
  const gap = 6;
  const chipsSvg = chipItems
    .map((item, idx) => {
      const x = currentX;
      currentX += item.width + gap;
      const textX = x + item.width / 2;

      if (item.active) {
        return `    <g id="Chip_${idx + 1}_Active">
      <rect x="${x}" y="0" width="${item.width}" height="36" rx="18" fill="#1219F7"/>
      <text x="${textX}" y="22" fill="#FFFFFF" font-family="Pretendard, -apple-system, BlinkMacSystemFont, sans-serif" font-size="14" font-weight="700" text-anchor="middle">${item.label}</text>
    </g>`;
      }
      return `    <g id="Chip_${idx + 1}_Default">
      <rect x="${x + 0.5}" y="0.5" width="${item.width - 1}" height="35" rx="18" fill="#FFFFFF" stroke="#D7DBE2" stroke-width="1"/>
      <text x="${textX}" y="22" fill="#4E5968" font-family="Pretendard, -apple-system, BlinkMacSystemFont, sans-serif" font-size="14" font-weight="600" text-anchor="middle">${item.label}</text>
    </g>`;
    })
    .join('\n');

  const totalWidth = currentX - gap;

  return `
<svg width="${totalWidth}" height="36" viewBox="0 0 ${totalWidth} 36" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- AutoLayout Frame (Gap: 6px, Padding-X: 20px, Height: 36px, Radius: 18px) -->
  <g id="Filter_Chips_AutoLayout_Row">
${chipsSvg}
  </g>
</svg>`.trim();
}

// 단일 칩 생성기 (호환성 유지)
export function getChipSvg(text: string, active: boolean): string {
  const approxWidth = Math.max(90, text.length * 14 + 40); // 20px left + 20px right
  const bg = active ? '#1219F7' : '#FFFFFF';
  const textColor = active ? '#FFFFFF' : '#4E5968';
  const stroke = active ? '' : '<rect x="0.5" y="0.5" width="' + (approxWidth - 1) + '" height="35" rx="17.5" stroke="#D7DBE2" stroke-width="1"/>';

  return `
<svg width="${approxWidth}" height="36" viewBox="0 0 ${approxWidth} 36" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g id="Chip_${text.replace(/\s+/g, '_')}">
    <rect width="${approxWidth}" height="36" rx="18" fill="${bg}"/>
    ${stroke}
    <text x="${approxWidth / 2}" y="22" fill="${textColor}" font-family="Pretendard, -apple-system, BlinkMacSystemFont, sans-serif" font-size="14" font-weight="600" text-anchor="middle">${text}</text>
  </g>
</svg>`.trim();
}

// 5. 기본 모달 SVG 생성기
// Figma node: 9152:1793 (312px, radius 16, 취소(흰색+회색아웃라인) + 확인(블루))
export function getDefaultModalSvg(): string {
  return `
<svg width="312" height="196" viewBox="0 0 312 196" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g id="Default_Modal_312">
    <!-- 모달 컨테이너 (r:16) -->
    <rect width="312" height="196" rx="16" fill="#FFFFFF" stroke="#E5E8EB" stroke-width="1"/>
    
    <!-- 모달 타이틀 & 설명 문구 -->
    <text x="156" y="52" fill="#191F28" font-family="Pretendard, -apple-system, BlinkMacSystemFont, sans-serif" font-size="18" font-weight="700" text-anchor="middle">신청을 취소하시겠습니까?</text>
    <text x="156" y="80" fill="#6B7684" font-family="Pretendard, -apple-system, BlinkMacSystemFont, sans-serif" font-size="14" font-weight="400" text-anchor="middle">작성 중인 정보가 저장되지 않습니다.</text>
    
    <!-- 취소 버튼 (흰색 배경 + 아웃라인 회색) -->
    <g id="Modal_Btn_Cancel">
      <rect x="16.5" y="120.5" width="135" height="49" rx="10" fill="#FFFFFF" stroke="#D7DBE2" stroke-width="1"/>
      <text x="84" y="151" fill="#4E5968" font-family="Pretendard, -apple-system, BlinkMacSystemFont, sans-serif" font-size="15" font-weight="700" text-anchor="middle">취소</text>
    </g>
    
    <!-- 확인 버튼 (메인 블루 #1219F7) -->
    <g id="Modal_Btn_Confirm">
      <rect x="160" y="120" width="136" height="50" rx="10" fill="#1219F7"/>
      <text x="228" y="151" fill="#FFFFFF" font-family="Pretendard, -apple-system, BlinkMacSystemFont, sans-serif" font-size="15" font-weight="700" text-anchor="middle">확인</text>
    </g>
  </g>
</svg>`.trim();
}

// 6. 아이콘 + 모달 SVG 생성기
// Figma node: 9152:8798 (312px, radius 16, 48x48 상단 원형 아이콘)
export function getIconModalSvg(): string {
  return `
<svg width="312" height="256" viewBox="0 0 312 256" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g id="Icon_Modal_312">
    <!-- 모달 컨테이너 (r:16) -->
    <rect width="312" height="256" rx="16" fill="#FFFFFF" stroke="#E5E8EB" stroke-width="1"/>
    
    <!-- 상단 원형 아이콘 (48x48) -->
    <circle cx="156" cy="48" r="24" fill="#E8F3FF"/>
    <path d="M148 48L153.5 53.5L164 43" stroke="#1219F7" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    
    <!-- 타이틀 & 설명 -->
    <text x="156" y="102" fill="#191F28" font-family="Pretendard, -apple-system, BlinkMacSystemFont, sans-serif" font-size="18" font-weight="700" text-anchor="middle">견적 신청이 완료되었습니다</text>
    <text x="156" y="128" fill="#6B7684" font-family="Pretendard, -apple-system, BlinkMacSystemFont, sans-serif" font-size="14" font-weight="400" text-anchor="middle">파트너사가 확인 후 신속하게 연락드립니다.</text>
    
    <!-- 닫기 버튼 (흰색 배경 + 아웃라인) -->
    <g id="IconModal_Btn_Cancel">
      <rect x="16.5" y="180.5" width="135" height="49" rx="10" fill="#FFFFFF" stroke="#D7DBE2" stroke-width="1"/>
      <text x="84" y="211" fill="#4E5968" font-family="Pretendard, -apple-system, BlinkMacSystemFont, sans-serif" font-size="15" font-weight="700" text-anchor="middle">닫기</text>
    </g>
    
    <!-- 내역 확인 버튼 (메인 블루) -->
    <g id="IconModal_Btn_Confirm">
      <rect x="160" y="180" width="136" height="50" rx="10" fill="#1219F7"/>
      <text x="228" y="211" fill="#FFFFFF" font-family="Pretendard, -apple-system, BlinkMacSystemFont, sans-serif" font-size="15" font-weight="700" text-anchor="middle">내역 확인</text>
    </g>
  </g>
</svg>`.trim();
}

// 7. 바텀시트 SVG 생성기
// Figma node: 9097:6413 (360px, 상단 radius 16, 36x4 핸들바)
export function getBottomSheetSvg(): string {
  return `
<svg width="360" height="330" viewBox="0 0 360 330" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g id="Bottom_Sheet_360">
    <!-- 바텀시트 컨테이너 (상단 r:16) -->
    <path d="M0 16C0 7.16344 7.16344 0 16 0H344C352.837 0 360 7.16344 360 16V330H0V16Z" fill="#FFFFFF"/>
    <path d="M0 16C0 7.16344 7.16344 0 16 0H344C352.837 0 360 7.16344 360 16V330H0V16Z" stroke="#E5E8EB" stroke-width="1"/>
    
    <!-- 상단 핸들바 (36x4) -->
    <rect x="162" y="12" width="36" height="4" rx="2" fill="#D7DBE2"/>
    
    <!-- 타이틀 -->
    <text x="24" y="52" fill="#191F28" font-family="Pretendard, -apple-system, BlinkMacSystemFont, sans-serif" font-size="18" font-weight="700">이사 종류 선택</text>
    <line x1="20" y1="68" x2="340" y2="68" stroke="#F2F4F8" stroke-width="1"/>
    
    <!-- 옵션 1: 선택됨 -->
    <g id="Option_Selected">
      <rect x="20" y="82" width="320" height="46" rx="8" fill="#F2F4F8"/>
      <text x="36" y="110" fill="#1219F7" font-family="Pretendard, -apple-system, BlinkMacSystemFont, sans-serif" font-size="14" font-weight="700">가정이사 (포장)</text>
      <text x="324" y="110" fill="#1219F7" font-family="Pretendard, -apple-system, BlinkMacSystemFont, sans-serif" font-size="12" font-weight="700" text-anchor="end">선택됨</text>
    </g>
    
    <!-- 옵션 2: 기본 -->
    <g id="Option_2">
      <rect x="20.5" y="136.5" width="319" height="45" rx="8" fill="#FFFFFF" stroke="#F2F4F8" stroke-width="1"/>
      <text x="36" y="164" fill="#4E5968" font-family="Pretendard, -apple-system, BlinkMacSystemFont, sans-serif" font-size="14" font-weight="500">원룸/소형이사</text>
    </g>
    
    <!-- 옵션 3: 기본 -->
    <g id="Option_3">
      <rect x="20.5" y="190.5" width="319" height="45" rx="8" fill="#FFFFFF" stroke="#F2F4F8" stroke-width="1"/>
      <text x="36" y="218" fill="#4E5968" font-family="Pretendard, -apple-system, BlinkMacSystemFont, sans-serif" font-size="14" font-weight="500">사무실 이전</text>
    </g>
    
    <!-- 바텀 액션 버튼 (50px, r:10) -->
    <g id="Sheet_CTA_Button">
      <rect x="20" y="254" width="320" height="50" rx="10" fill="#1219F7"/>
      <text x="180" y="285" fill="#FFFFFF" font-family="Pretendard, -apple-system, BlinkMacSystemFont, sans-serif" font-size="15" font-weight="700" text-anchor="middle">선택 완료</text>
    </g>
  </g>
</svg>`.trim();
}
