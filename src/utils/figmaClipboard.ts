/**
 * Figma Clipboard Utility
 * Copies SVG to clipboard formatted so that pasting (Cmd+V) in Figma
 * automatically creates editable native vector frames, rectangles, and text layers.
 */

export async function copySvgToFigma(svgString: string): Promise<boolean> {
  const cleanSvg = svgString.trim();
  try {
    if (navigator.clipboard && window.ClipboardItem) {
      const blobSvg = new Blob([cleanSvg], { type: 'image/svg+xml' });
      const blobText = new Blob([cleanSvg], { type: 'text/plain' });
      const item = new ClipboardItem({
        'image/svg+xml': blobSvg,
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
    <!-- 취소 버튼 -->
    <g id="Btn_Cancel">
      <rect width="136" height="${height}" rx="${radius}" fill="#EBEEF2"/>
      <text x="68" y="${yCenter}" fill="#333333" font-family="Pretendard, -apple-system, BlinkMacSystemFont, sans-serif" font-size="${fontSize}" font-weight="700" text-anchor="middle">${cancelText}</text>
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

// 4. 필터 칩 SVG 생성기 (Pill r:18, h:36, 14px Semibold)
export function getChipSvg(text: string, active: boolean): string {
  const approxWidth = Math.max(88, text.length * 14 + 32);
  const bg = active ? '#1219F7' : '#FFFFFF';
  const textColor = active ? '#FFFFFF' : '#4E5968';
  const stroke = active ? '' : '<rect x="0.5" y="0.5" width="' + (approxWidth - 1) + '" height="35" rx="17.5" stroke="#D7DBE2" stroke-width="1"/>';

  return `
<svg width="${approxWidth}" height="36" viewBox="0 0 ${approxWidth} 36" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g id="Chip_${text.replace(/\s+/g, '_')}">
    <rect width="${approxWidth}" height="36" rx="18" fill="${bg}"/>
    ${stroke}
    <text x="${approxWidth / 2}" y="23" fill="${textColor}" font-family="Pretendard, -apple-system, BlinkMacSystemFont, sans-serif" font-size="14" font-weight="600" text-anchor="middle">${text}</text>
  </g>
</svg>`.trim();
}
