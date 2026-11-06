import React from 'react';

export const LayoutSection: React.FC<{ mode?: 'customer' | 'partner' }> = ({ mode = 'customer' }) => {
  const isPartner = mode === 'partner';
  const contentWidth = isPartner ? '627px' : '640px';
  const sideMargin = isPartner ? '286.5px' : '280px';

  const breakpoints = [
    {
      bp: 'base',
      viewport: '0 - 479px',
      columns: 'base (360px)',
      gutters: '16px',
      margins: '24px',
    },
    {
      bp: 'sm',
      viewport: '480 - 767px',
      columns: 'sm',
      gutters: '16px',
      margins: '24px',
    },
    {
      bp: 'md',
      viewport: '768 - 1199px',
      columns: 'md',
      gutters: '24px',
      margins: 'Auto',
    },
    {
      bp: 'lg',
      viewport: '1200 + px',
      columns: `lg (${contentWidth})`,
      gutters: '32px',
      margins: `Auto (${sideMargin})`,
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
        <div className="bg-white rounded-[16px] p-6 shadow-xs flex flex-col items-center select-none">
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
        <div className="bg-white rounded-[16px] p-6 shadow-xs flex flex-col items-center select-none overflow-x-auto">
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

      {/* 3. Detailed Guide Table (첨부파일 표 스타일) */}
      <div className="space-y-3">
        <p className="text-[14px] text-[#4E5968] font-medium leading-relaxed px-1">
          다이사는 Mobile First 원칙을 따릅니다. 작은 화면에서 시작하여 화면이 커짐에 따라 레이아웃이 확장됩니다.
        </p>

        <div className="bg-white rounded-[16px] overflow-hidden shadow-xs">
          {/* Table Header */}
          <div className="grid grid-cols-12 px-6 py-3.5 border-b border-[#F2F4F8] text-[13px] font-semibold text-[#8B95A1] bg-[#FAFAFB]">
            <div className="col-span-2">Breakpoint</div>
            <div className="col-span-3">Viewport</div>
            <div className="col-span-3">Columns</div>
            <div className="col-span-2">Gutters</div>
            <div className="col-span-2">Margins</div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-[#F2F4F8]">
            {breakpoints.map((row) => (
              <div
                key={row.bp}
                className="grid grid-cols-12 px-6 py-4 items-center text-[13px] hover:bg-[#F9FAFB] transition-colors"
              >
                <div className="col-span-2 font-medium text-[#191F28]">{row.bp}</div>
                <div className="col-span-3 text-[#4E5968] font-mono text-[12px]">{row.viewport}</div>
                <div className="col-span-3 font-medium text-[#191F28]">{row.columns}</div>
                <div className="col-span-2 text-[#4E5968] font-mono text-[12px]">{row.gutters}</div>
                <div className="col-span-2 text-[#4E5968] font-mono text-[12px]">{row.margins}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LayoutSection;