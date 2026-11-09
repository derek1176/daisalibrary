import React from 'react';

export const LayoutSection: React.FC<{ mode?: 'customer' | 'partner' }> = ({ mode = 'customer' }) => {
  const isPartner = mode === 'partner';
  const contentWidth = isPartner ? '627px' : '640px';
  const sideMargin = isPartner ? '286.5px' : '280px';

  const layoutRules = [
    {
      env: '모바일 (Mobile)',
      canvas: '360px',
      margin: '24px (양측 각 24px)',
      content: '312px (360 - 48)',
      notes: isPartner
        ? '현장 기사님 오더 접수 및 견적 관리 콘텐츠 안전 영역'
        : '모든 버튼·인풋·카드 등 본문 핵심 UI는 312px 이내 배치',
    },
    {
      env: '웹 데스크톱 (Web)',
      canvas: '1200px',
      margin: `각 ${sideMargin}`,
      content: `${contentWidth} (단일 중앙 열)`,
      notes: isPartner
        ? '1200px 캔버스 중앙에 627px 단일 오더 컨테이너 배치 (r:6)'
        : '헤더(640px) · 본문 신청 폼(640px) · 액션 버튼(640px) 단일 열 일치',
    },
  ];

  return (
    <section id="layout" className="space-y-8">
      {/* 1. Header (심플 영문 타이틀만) */}
      <div className="border-b pb-4 border-[#E5E8EB]">
        <h2 className="text-[28px] md:text-[32px] font-extrabold tracking-tight text-[#191F28]">
          Layout
        </h2>
      </div>

      {/* 2. Visual Canvas Diagram (모바일과 PC 각각 사용하는 영역과 마진 표기) */}
      <div className="space-y-6">
        {/* Mobile Canvas View */}
        <div className="bg-white rounded-[16px] p-6 shadow-xs border border-[#E5E8EB] flex flex-col items-center select-none">
          <div className="text-[13px] font-semibold text-[#8B95A1] mb-4">
            Frame: 360px · Content: 312px (Mobile)
          </div>

          <div className="w-full max-w-[360px] bg-[#FAFBFD] rounded-[14px] p-4 flex flex-col gap-3">
            {/* Top GNB Line */}
            <div className="flex items-center justify-between pb-2 border-b border-[#E5E8EB] text-[11px] font-bold text-[#191F28]">
              <span>daisalibrary</span>
              <span className="text-[10px] text-[#8B95A1]">360px</span>
            </div>

            {/* Grid & Margins View */}
            <div className="flex items-stretch justify-between gap-2 h-44">
              {/* Left Margin (24px) */}
              <div className="w-6 bg-[#E8F3FF]/60 rounded-[4px] flex items-center justify-center">
                <span className="text-[9px] font-bold text-[#1B64DA] [writing-mode:vertical-rl] rotate-180">
                  Margin 24px
                </span>
              </div>

              {/* Center Content Area (312px: 4 columns) */}
              <div className="flex-1 flex gap-2 p-1 bg-white rounded-[8px] shadow-2xs">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-[#EEF2FF] rounded-[4px] flex items-end justify-center pb-1 text-[9px] font-medium text-[#595EF9]"
                  >
                    col
                  </div>
                ))}
              </div>

              {/* Right Margin (24px) */}
              <div className="w-6 bg-[#E8F3FF]/60 rounded-[4px] flex items-center justify-center">
                <span className="text-[9px] font-bold text-[#1B64DA] [writing-mode:vertical-rl] rotate-180">
                  Margin 24px
                </span>
              </div>
            </div>

            <div className="text-center text-[11px] font-medium text-[#8B95A1] pt-1">
              Safe Area Content: 312px (360 - 48)
            </div>
          </div>
        </div>

        {/* PC Canvas View (Max-width: 1200px) */}
        <div className="bg-white rounded-[16px] p-6 shadow-xs border border-[#E5E8EB] flex flex-col items-center select-none overflow-x-auto">
          <div className="text-[13px] font-semibold text-[#8B95A1] mb-4">
            Max-width: 1200px · Content: {contentWidth} (Desktop)
          </div>

          <div className="w-full min-w-[680px] max-w-[1040px] bg-[#FAFBFD] rounded-[14px] p-5 flex flex-col gap-3">
            {/* Top GNB Line */}
            <div className="flex items-center justify-between pb-2 border-b border-[#E5E8EB] text-[12px] font-bold text-[#191F28] px-2">
              <span>daisalibrary</span>
              <span className="text-[11px] text-[#8B95A1]">1200px Canvas</span>
            </div>

            {/* Grid & Margins View */}
            <div className="flex items-stretch justify-between gap-3 h-52">
              {/* Left Side Margin */}
              <div className="flex-1 bg-[#E8F3FF]/60 rounded-[6px] flex items-center justify-center">
                <span className="text-[11px] font-bold text-[#1B64DA]">
                  Margin {sideMargin}
                </span>
              </div>

              {/* Center Content Columns (12 columns) */}
              <div className="w-[520px] shrink-0 flex gap-1.5 p-2 bg-white rounded-[10px] shadow-2xs">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-[#EEF2FF] rounded-[4px] flex items-end justify-center pb-1 text-[8px] font-medium text-[#595EF9]"
                  >
                    col
                  </div>
                ))}
              </div>

              {/* Right Side Margin */}
              <div className="flex-1 bg-[#E8F3FF]/60 rounded-[6px] flex items-center justify-center">
                <span className="text-[11px] font-bold text-[#1B64DA]">
                  Margin {sideMargin}
                </span>
              </div>
            </div>

            <div className="text-center text-[11px] font-medium text-[#8B95A1] pt-1">
              Center Content Area: {contentWidth} (Single Column)
            </div>
          </div>
        </div>
      </div>

      {/* 3. Detailed Guide Table (환경, 캔버스, 마진, 콘텐츠 영역 공식 규칙 표) */}
      <div className="space-y-3">
        <div className="bg-white rounded-[16px] overflow-hidden shadow-xs border border-[#E5E8EB]">
          {/* Table Header */}
          <div className="grid grid-cols-12 px-6 py-3.5 border-b border-[#F2F4F8] text-[13px] font-semibold text-[#8B95A1] bg-[#FAFAFB]">
            <div className="col-span-3">환경</div>
            <div className="col-span-2">캔버스</div>
            <div className="col-span-2">마진</div>
            <div className="col-span-2">콘텐츠 영역</div>
            <div className="col-span-3">세부 규칙</div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-[#F2F4F8]">
            {layoutRules.map((row) => (
              <div
                key={row.env}
                className="grid grid-cols-12 px-6 py-4 items-center text-[13px] hover:bg-[#F9FAFB] transition-colors"
              >
                <div className="col-span-3 font-bold text-[#191F28]">{row.env}</div>
                <div className="col-span-2 text-[#191F28] font-mono text-[13px] font-bold">{row.canvas}</div>
                <div className="col-span-2 text-[#4E5968] font-mono text-[12px]">{row.margin}</div>
                <div className="col-span-2 font-bold text-[#1219F7] font-mono text-[13px]">{row.content}</div>
                <div className="col-span-3 text-[#6B7684] text-[12px] leading-relaxed">{row.notes}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LayoutSection;