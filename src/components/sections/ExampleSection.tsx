import React, { useState } from 'react';
import { ArrowLeft, Search } from 'lucide-react';
import { CUSTOMER_COLORS, CUSTOMER_RADII, CUSTOMER_TYPOGRAPHY } from '../../data/customerRules';
import { PARTNER_COLORS, PARTNER_RADII, PARTNER_TYPOGRAPHY } from '../../data/partnerRules';

const textStyle = (size: number, lineHeight: number, weight: number): React.CSSProperties => ({
  fontSize: size, lineHeight: `${lineHeight}px`, fontWeight: weight,
});

export const ExampleSection: React.FC<{ mode?: 'customer' | 'partner' }> = ({ mode = 'customer' }) => {
  const isPartner = mode === 'partner';
  const [address, setAddress] = useState('');
  const colors = isPartner ? PARTNER_COLORS : CUSTOMER_COLORS;
  const typography = isPartner ? PARTNER_TYPOGRAPHY : CUSTOMER_TYPOGRAPHY;
  const headline = typography.find(item => item.name === 'Headline')!;
  const body = typography.find(item => item.name === (isPartner ? 'Body 1' : 'Body'))!;
  const label = isPartner ? body : CUSTOMER_TYPOGRAPHY.find(item => item.name === 'Sub')!;
  const radius = (isPartner ? PARTNER_RADII : CUSTOMER_RADII).find(item => item.highlight)!.val;
  const examples = [
    ['헤더', '배치 참고용 · 헤더 구성은 자유롭게 변경'],
    ['타이틀', `${headline.size}px / ${headline.lineHeight}px · Bold 700 · text-01`],
    ['본문', `${body.size}px / ${body.lineHeight}px · Regular 400 · text-02`],
    ['입력창', `높이 56px · 모서리 ${radius} · 1px etc-02 테두리`],
    ['하단 CTA', `높이 56px · 모서리 ${radius} · ${body.size}px Bold · main-01`],
  ];

  return (
    <section className="space-y-6">
      <div className="border-b pb-4 border-[#E5E8EB]">
        <h2 className="text-[28px] md:text-[32px] font-extrabold tracking-tight text-[#191F28]">예시 화면</h2>
      </div>
      <p className="text-[14px] leading-relaxed text-[#6B7684]">
        {isPartner ? '파트너향' : '고객향'}의 기본 규칙을 조합한 참고 화면입니다. 배치·문구·구성은 필수 규칙이 아니며 자유롭게 변경할 수 있습니다.
      </p>

      <div className="grid gap-8 lg:grid-cols-2 items-start">
        <div className="min-w-0 flex flex-col items-center gap-3">
          <p className="text-[12px] text-[#8B95A1]">모바일 360px 기준 · 좁은 화면에서는 가용 너비에 맞춤</p>
          <div
            data-example-screen={mode}
            data-customer-preview={!isPartner || undefined}
            data-partner-preview={isPartner || undefined}
            className="w-[360px] max-w-full min-h-[640px] flex flex-col shadow-sm ring-1 ring-[#D7DBE2]"
            style={{ backgroundColor: colors['system-02'] }}
          >
            <header className="h-[56px] shrink-0 px-6 flex items-center gap-3 border-b" style={{ borderColor: colors['etc-03'], color: colors['text-01'] }}>
              <ArrowLeft size={24} strokeWidth={1.5} aria-hidden />
              <span style={textStyle(body.size, body.lineHeight, 700)}>{isPartner ? '견적 작성' : '견적 신청'}</span>
            </header>

            <div className="px-6 pt-8 pb-6 flex-1 space-y-6" data-example-content>
              <div className="space-y-3">
                <h3 data-example-title style={{ ...textStyle(headline.size, headline.lineHeight, 700), color: colors['text-01'] }}>
                  {isPartner ? '작업 정보를 확인해 주세요' : '이사 정보를 알려 주세요'}
                </h3>
                <p data-example-body style={{ ...textStyle(body.size, body.lineHeight, 400), color: colors['text-02'] }}>
                  {isPartner ? '현장 주소를 입력하면 견적 내용을 확인할 수 있습니다.' : '출발지 주소를 입력하면 필요한 이사 정보를 안내해 드려요.'}
                </p>
              </div>
              <div className="space-y-2">
                <label htmlFor="example-address" className="block" style={{ ...textStyle(label.size, label.lineHeight, 700), color: colors['text-01'] }}>
                  {isPartner ? '현장 주소' : '출발지 주소'}
                </label>
                <div className="h-[56px] px-4 border flex items-center gap-2" data-example-input-box style={{ borderRadius: radius, borderColor: colors['etc-02'] }}>
                  <input id="example-address" type="text" value={address} onChange={event => setAddress(event.target.value)}
                    placeholder="도로명, 건물명 검색" className="min-w-0 w-full bg-transparent outline-none placeholder:text-text-04"
                    style={{ ...textStyle(body.size, body.lineHeight, 400), color: colors['text-02'] }} />
                  <Search size={24} strokeWidth={1.5} className="shrink-0" style={{ color: colors['text-02'] }} aria-hidden />
                </div>
              </div>
            </div>

            <div className="px-6 pb-6 pt-4">
              <button type="button" data-example-cta className="w-full h-[56px] flex items-center justify-center"
                style={{ ...textStyle(body.size, body.lineHeight, 700), borderRadius: radius, backgroundColor: colors['main-01'], color: colors['system-02'] }}>
                {isPartner ? '견적 확인' : '다음'}
              </button>
            </div>
          </div>
        </div>

        <div className="rounded-[16px] bg-white border border-[#E5E8EB] p-5 space-y-4">
          <h3 className="text-[16px] font-bold text-[#191F28]">적용된 기본 규칙</h3>
          <dl className="divide-y divide-[#F2F4F6]">
            {examples.map(([name, detail]) => (
              <div key={name} className="py-3 space-y-1">
                <dt className="text-[14px] font-bold text-[#191F28]">{name}</dt>
                <dd className="text-[13px] text-[#6B7684] leading-relaxed">{detail}</dd>
              </div>
            ))}
          </dl>
          <p className="text-[13px] text-[#6B7684] leading-relaxed">
            서체: {isPartner ? 'Noto Sans KR' : 'Pretendard'} · 자간: Figma -1% / CSS -0.01em<br />
            좌우 24px · 기준 화면에서 본문·입력·CTA 너비 312px
          </p>
        </div>
      </div>
    </section>
  );
};
