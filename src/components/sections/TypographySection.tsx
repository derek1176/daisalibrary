import React from 'react';
import { CUSTOMER_TYPOGRAPHY } from '../../data/customerRules';

interface TypeRow {
  name: string;
  weightLabel: string;
  weightNum: number;
  size: number;
  lineHeight: string;
  lineHeightNum: number;
  letterSpacing: string;
}

export const TypographySection: React.FC<{ mode?: 'customer' | 'partner' }> = ({ mode = 'customer' }) => {
  const isPartner = mode === 'partner';

  // 고객향 타이포그래피 스펙 (캡처화면 스타일 - Pretendard)
  const customerSpecs: TypeRow[] = CUSTOMER_TYPOGRAPHY.map(item => ({
    name: item.name,
    weightLabel: item.weight === 700 ? 'Bold (700)' : 'Regular (400)',
    weightNum: item.weight,
    size: item.size,
    lineHeight: `${item.lineHeight}px`,
    lineHeightNum: item.lineHeight,
    letterSpacing: '-1%',
  }));

  // 파트너향 타이포그래피 스펙 (18px 기본 - Noto Sans KR)
  const partnerSpecs: TypeRow[] = [
    {
      name: 'Display 1',
      weightLabel: 'Bold (700)',
      weightNum: 700,
      size: 32,
      lineHeight: '45px (1.40)',
      lineHeightNum: 45,
      letterSpacing: '0px',
    },
    {
      name: 'Headline 1',
      weightLabel: 'Bold (700)',
      weightNum: 700,
      size: 28,
      lineHeight: '39px (1.40)',
      lineHeightNum: 39,
      letterSpacing: '0px',
    },
    {
      name: 'Title 1',
      weightLabel: 'Bold (700)',
      weightNum: 700,
      size: 24,
      lineHeight: '34px (1.42)',
      lineHeightNum: 34,
      letterSpacing: '0px',
    },
    {
      name: 'Title 2',
      weightLabel: 'Bold (700)',
      weightNum: 700,
      size: 20,
      lineHeight: '30px (1.50)',
      lineHeightNum: 30,
      letterSpacing: '0px',
    },
    {
      name: 'Body 1 (Standard)',
      weightLabel: 'Bold (700)',
      weightNum: 700,
      size: 18,
      lineHeight: '27px (1.50)',
      lineHeightNum: 27,
      letterSpacing: '0px',
    },
    {
      name: 'Body 2',
      weightLabel: 'Regular (400)',
      weightNum: 400,
      size: 18,
      lineHeight: '27px (1.50)',
      lineHeightNum: 27,
      letterSpacing: '0px',
    },
    {
      name: 'Body 3',
      weightLabel: 'Regular (400)',
      weightNum: 400,
      size: 16,
      lineHeight: '24px (1.50)',
      lineHeightNum: 24,
      letterSpacing: '0px',
    },
    {
      name: 'Caption 1',
      weightLabel: 'Bold (700)',
      weightNum: 700,
      size: 14,
      lineHeight: '21px (1.50)',
      lineHeightNum: 21,
      letterSpacing: '0px',
    },
    {
      name: 'Caption 2',
      weightLabel: 'Regular (400)',
      weightNum: 400,
      size: 14,
      lineHeight: '21px (1.50)',
      lineHeightNum: 21,
      letterSpacing: '0px',
    },
  ];

  const specs = isPartner ? partnerSpecs : customerSpecs;

  return (
    <div className="space-y-6">
      {/* 1. Page Header (심플 영문 타이틀만) */}
      <div className="border-b pb-4 border-[#E5E8EB]">
        <h2 className="text-[28px] md:text-[32px] font-extrabold tracking-tight text-[#191F28]">
          Typography
        </h2>
      </div>

      {/* 2. 서체 정보 카드 (고객향: Pretendard / 파트너향: Noto Sans KR) */}
      <div className="bg-white rounded-[16px] p-5 shadow-xs border border-[#E5E8EB] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-[11px] font-bold px-2 py-1 rounded-[6px] bg-[#EEF2FF] text-[#1219F7] shrink-0">
            {isPartner ? 'Partner Font' : 'Customer Font'}
          </span>
          <div>
            <div className="flex items-baseline gap-2 flex-wrap">
              <span className="font-extrabold text-[18px] text-[#191F28]">
                {isPartner ? 'Noto Sans KR' : 'Pretendard'}
              </span>
              <span className="text-[12px] font-mono text-[#8B95A1]">
                {isPartner ? "font-family: 'Noto Sans KR', sans-serif" : "font-family: 'Pretendard Variable', sans-serif"}
              </span>
            </div>
            <p className="text-[13px] text-[#6B7684] mt-0.5">
              {isPartner
                ? '현장 기사님 및 파트너 화면의 직관적인 가독성을 위한 고신뢰 표준 서체 (기본 본문 18px)'
                : '본문 16/24 · 버튼 16/24 Bold · 라벨 14/20 Bold · 배지 예외 없음 · Figma 자간 -1% / CSS -0.01em'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 self-start sm:self-auto shrink-0 text-[12px]">
          <span className="text-[#8B95A1] font-medium mr-1">표준 굵기:</span>
          <span className="font-bold text-[#191F28] bg-[#F2F4F8] px-2 py-0.5 rounded-[6px]">
            Bold (700)
          </span>
          <span className="font-bold text-[#191F28] bg-[#F2F4F8] px-2 py-0.5 rounded-[6px]">
            Regular (400)
          </span>
        </div>
      </div>

      {/* 3. 타이포그래피 스펙 테이블 */}
      <div className="bg-white rounded-[16px] overflow-hidden shadow-xs border border-[#E5E8EB]">
        {/* Table Header */}
        <div className="grid grid-cols-12 px-6 py-3.5 border-b border-[#E5E8EB] text-[13px] font-semibold text-[#8B95A1] bg-[#FAFAFB]">
          <div className="col-span-2">Style</div>
          <div className="col-span-3">Weight & Size</div>
          <div className="col-span-2">Line Height</div>
          <div className="col-span-1">Letter</div>
          <div className="col-span-4 pl-2">Sample</div>
        </div>

        {/* Table Rows */}
        <div className="divide-y divide-[#F2F4F6]">
          {specs.map((item) => (
            <div
              key={item.name}
              className="grid grid-cols-12 px-6 py-5 items-center text-[13px] hover:bg-[#F9FAFB] transition-colors"
            >
              {/* 1. Style Name */}
              <div className="col-span-2 font-semibold text-[#191F28]">
                {item.name}
              </div>

              {/* 2. Weight & Size */}
              <div className="col-span-3 text-[#4E5968] flex items-center gap-2">
                <span>{item.weightLabel}</span>
                <span className="font-bold text-[#191F28]">{item.size}px</span>
              </div>

              {/* 3. Line Height */}
              <div className="col-span-2 text-[#4E5968] font-mono text-[12px]">
                {item.lineHeight}
              </div>

              {/* 4. Letter Spacing */}
              <div className="col-span-1 text-[#4E5968] font-mono text-[12px]">
                {item.letterSpacing}
              </div>

              {/* 5. Sample Text (고객향: Pretendard / 파트너향: Noto Sans KR 실물 렌더링) */}
              <div className="col-span-4 pl-2 text-[#191F28] overflow-hidden">
                <div
                  style={{
                    fontSize: `${item.size}px`,
                    fontWeight: item.weightNum,
                    lineHeight: `${item.lineHeightNum}px`,
                    letterSpacing: isPartner ? item.letterSpacing : '-0.01em',
                    fontFamily: isPartner
                      ? "'Noto Sans KR', sans-serif"
                      : "'Pretendard Variable', 'Pretendard', sans-serif",
                  }}
                  className="truncate leading-tight"
                >
                  <div>누적 고객 780만 명이 이용한 이사 매칭 플랫폼</div>
                  <div className="text-[#8B95A1]">1234567890</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TypographySection;
