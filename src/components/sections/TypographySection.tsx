import React from 'react';

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

  // 고객향 타이포그래피 스펙 (캡처화면 스타일)
  const customerSpecs: TypeRow[] = [
    {
      name: 'Headline 1',
      weightLabel: 'Bold (700)',
      weightNum: 700,
      size: 24,
      lineHeight: '34px (1.42)',
      lineHeightNum: 34,
      letterSpacing: '0px',
    },
    {
      name: 'Title 1',
      weightLabel: 'Bold (700)',
      weightNum: 700,
      size: 20,
      lineHeight: '30px (1.50)',
      lineHeightNum: 30,
      letterSpacing: '0px',
    },
    {
      name: 'Title 2',
      weightLabel: 'Semi Bold (600)',
      weightNum: 600,
      size: 18,
      lineHeight: '26px (1.44)',
      lineHeightNum: 26,
      letterSpacing: '0px',
    },
    {
      name: 'Body 1',
      weightLabel: 'Bold (700)',
      weightNum: 700,
      size: 16,
      lineHeight: '24px (1.50)',
      lineHeightNum: 24,
      letterSpacing: '0px',
    },
    {
      name: 'Body 2',
      weightLabel: 'Regular (400)',
      weightNum: 400,
      size: 16,
      lineHeight: '24px (1.50)',
      lineHeightNum: 24,
      letterSpacing: '0px',
    },
    {
      name: 'Body 3',
      weightLabel: 'Bold (700)',
      weightNum: 700,
      size: 14,
      lineHeight: '20px (1.43)',
      lineHeightNum: 20,
      letterSpacing: '0px',
    },
    {
      name: 'Body 4',
      weightLabel: 'Regular (400)',
      weightNum: 400,
      size: 14,
      lineHeight: '20px (1.43)',
      lineHeightNum: 20,
      letterSpacing: '0px',
    },
    {
      name: 'Caption 1',
      weightLabel: 'Bold (700)',
      weightNum: 700,
      size: 12,
      lineHeight: '16px (1.33)',
      lineHeightNum: 16,
      letterSpacing: '0px',
    },
    {
      name: 'Caption 2',
      weightLabel: 'Regular (400)',
      weightNum: 400,
      size: 12,
      lineHeight: '16px (1.33)',
      lineHeightNum: 16,
      letterSpacing: '0px',
    },
    {
      name: 'Caption 3',
      weightLabel: 'Medium (500)',
      weightNum: 500,
      size: 10,
      lineHeight: '14px (1.40)',
      lineHeightNum: 14,
      letterSpacing: '0px',
    },
  ];

  // 파트너향 타이포그래피 스펙 (18px 기본)
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
      {/* Page Header (심플 영문 타이틀만) */}
      <div className="border-b pb-4 border-[#E5E8EB]">
        <h2 className="text-[28px] md:text-[32px] font-extrabold tracking-tight text-[#191F28]">
          Typography
        </h2>
      </div>

      {/* 캡처 화면 3번 스타일의 직관적인 타이포그래피 테이블 */}
      <div className="bg-white rounded-[16px] overflow-hidden shadow-xs">
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

              {/* 5. Sample Text (누적 고객 780만 명이 이용한 이사 매칭 플랫폼) */}
              <div className="col-span-4 pl-2 text-[#191F28] overflow-hidden">
                <div
                  style={{
                    fontSize: `${item.size}px`,
                    fontWeight: item.weightNum,
                    lineHeight: `${item.lineHeightNum}px`,
                    letterSpacing: item.letterSpacing,
                  }}
                  className="truncate font-sans leading-tight"
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