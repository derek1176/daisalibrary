import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  Search,
  CheckCircle2,
  MapPin,
  Truck
} from 'lucide-react';

interface HomeSectionProps {
  onSelectTab: (tabId: string) => void;
  mode?: 'customer' | 'partner';
}

interface ComponentItem {
  id: string;
  name: string;
  renderThumbnail: () => React.ReactNode;
}

export const HomeSection: React.FC<HomeSectionProps> = ({ onSelectTab, mode = 'customer' }) => {
  const isPartner = mode === 'partner';
  const componentRadiusClass = isPartner ? 'rounded-[6px]' : 'rounded-[10px]';
  const cornerRadiusClass = isPartner ? 'rounded-tl-[6px]' : 'rounded-tl-[10px]';
  const [loadingShimmer, setLoadingShimmer] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingShimmer(false);
    }, 120);
    return () => clearTimeout(timer);
  }, [mode]);

  // ============================================================
  // 1. Color Tokens Thumbnail (Design lines + Black / Blue / White palette swatches)
  // ============================================================
  const renderColorThumbnail = () => (
    <div className="w-full h-full relative flex items-center justify-center select-none overflow-hidden">
      {/* Abstract subtle background design geometry */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
        viewBox="0 0 200 150"
        fill="none"
      >
        <circle cx="100" cy="75" r="48" stroke="white" strokeWidth="6" strokeLinecap="round" strokeDasharray="14 14" />
        <path d="M35 125 L165 25" stroke="white" strokeWidth="6" strokeLinecap="round" />
      </svg>

      {/* 3 Tactile Swatch Cards: Black, Signature Blue, Pure White */}
      <div className="relative z-10 flex items-center justify-center h-full">
        {/* Left: Deep Charcoal / Black (#191F28) */}
        <div
          style={{ backgroundColor: '#121212' }}
          className={`w-[66px] h-[98px] bg-[#191F28] ${
            componentRadiusClass
          } shadow-[0_10px_22px_rgba(0,0,0,0.22)] p-2.5 flex flex-col justify-between transform -rotate-12 -translate-x-5 transition-transform duration-300 group-hover:-translate-y-2 group-hover:-rotate-14`}
        >
          <div className="w-3 h-3 rounded-full bg-white/20 flex items-center justify-center">
            <div className="w-1 h-1 rounded-full bg-white" />
          </div>
          <div>
            <div className="text-white text-[10px] font-mono font-black tracking-tight">{'#121212'}</div>
            <div className="text-white/60 text-[8px] font-bold">text-01</div>
          </div>
        </div>

        {/* Center: Hero Signature Blue (#1219F7) */}
        <div
          className={`w-[72px] h-[108px] bg-[#1219F7] ${
            componentRadiusClass
          } shadow-[0_14px_30px_rgba(18,25,247,0.32)] flex flex-col justify-between p-2.5 z-10 transform -translate-y-1 transition-transform duration-300 group-hover:-translate-y-3 group-hover:scale-102`}
        >
          <div className="w-3.5 h-3.5 rounded-full bg-white/25 backdrop-blur-xs flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-white" />
          </div>
          <div>
            <div className="text-white text-[11px] font-mono font-black tracking-tight">#1219F7</div>
            <div className="text-white/80 text-[8px] font-bold">Main 01</div>
          </div>
        </div>

        {/* Right: Crisp White (#FFFFFF) with 1px border */}
        <div
          className={`w-[66px] h-[98px] bg-white border border-[#E5E8EB] ${
            componentRadiusClass
          } shadow-[0_8px_20px_rgba(0,0,0,0.06)] p-2.5 flex flex-col justify-between transform rotate-12 translate-x-5 transition-transform duration-300 group-hover:-translate-y-2 group-hover:rotate-14`}
        >
          <div className="w-3 h-3 rounded-full bg-[#191F28]/10 flex items-center justify-center">
            <div className="w-1 h-1 rounded-full bg-[#191F28]" />
          </div>
          <div>
            <div className="text-[#191F28] text-[10px] font-mono font-black tracking-tight">#FFFFFF</div>
            <div className="text-[#8B95A1] text-[8px] font-bold">White</div>
          </div>
        </div>
      </div>
    </div>
  );

  // ============================================================
  // 2. Typography Thumbnail (Pure bold Aa centered without card UI)
  // ============================================================
  const renderTypographyThumbnail = () => (
    <div className="w-full h-full flex items-center justify-center select-none">
      <span className="text-[82px] md:text-[88px] font-black text-[#191F28] leading-none tracking-tight select-none transition-transform duration-300 group-hover:scale-108">
        Aa
      </span>
    </div>
  );

  // ============================================================
  // 3. Spacing & Radius Thumbnail (Blueprint Grid + Black Curved Block + Blue Guide)
  // ============================================================
  const renderSpacingRadiusThumbnail = () => (
    <div className="w-full h-full relative flex items-center justify-center select-none px-6 overflow-hidden">
      {/* Blueprint background grid lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
        viewBox="0 0 200 150"
        fill="none"
      >
        <path d="M-10 35 L210 35 M-10 115 L210 115" stroke="white" strokeWidth="5" strokeDasharray="10 8" />
        <path d="M45 -10 L45 160 M155 -10 L155 160" stroke="white" strokeWidth="5" strokeDasharray="10 8" />
      </svg>

      {/* Clean White Card with Solid Black Shape & Measurement */}
      <div
        className={`relative z-10 w-[195px] h-[122px] bg-white ${componentRadiusClass} p-3 shadow-[0_8px_24px_rgba(0,0,0,0.07)] border border-black/[0.04] flex flex-col justify-between transition-transform duration-300 group-hover:scale-105`}
      >
        {/* Top: Black Shape with Corner Curve & Guide Arc */}
        <div className="flex items-center justify-between">
          <div className="relative">
            {/* Corner Radius Blue Arc Guide */}
            <div className={`absolute -top-1.5 -left-1.5 w-7 h-7 border-t-2 border-l-2 border-[#1219F7] ${cornerRadiusClass}`} />

            {/* Solid Black Shape demonstrating corner radius */}
            <div
              className={`w-[108px] h-[48px] bg-[#191F28] ${
                componentRadiusClass
              } shadow-sm px-2.5 flex items-center justify-between text-white`}
            >
              <span className="text-[11px] font-bold tracking-tight">Box Radius</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#1219F7]" />
            </div>
          </div>

          {/* Black Radius Badge */}
          <div className={`px-2.5 py-1 ${componentRadiusClass} bg-[#191F28] text-white font-mono font-black text-[11px] shadow-xs flex items-center gap-1 border border-white/10`}>
            <span>R</span>
            <span className="text-[#595EF9]">{isPartner ? '6' : '10'}</span>
          </div>
        </div>

        {/* Bottom: Spacing / Margin measurement bar */}
        <div className={`w-full h-8 ${componentRadiusClass} bg-[#F2F4F8] border border-black/[0.04] flex items-center justify-between px-3 text-[10px] font-mono font-bold text-[#4E5968]`}>
          <div className="flex items-center gap-1">
            <span className="text-[#191F28] font-black">16</span>
            <span className="text-[8px] text-[#8B95A1]">pad</span>
          </div>
          <div className="w-12 h-1.5 rounded-full bg-[#191F28]/20" />
          <div className="flex items-center gap-1">
            <span className="text-[#1219F7] font-black">24</span>
            <span className="text-[8px] text-[#8B95A1]">gap</span>
          </div>
        </div>
      </div>
    </div>
  );

  // ============================================================
  // 4. Layout Thumbnail (Simplified Mobile Canvas from Layout page)
  // ============================================================
  const renderLayoutThumbnail = () => (
    <div className="w-full h-full flex items-center justify-center select-none px-6">
      <div className={`w-full max-w-[210px] bg-white ${componentRadiusClass} p-3 shadow-[0_6px_20px_rgba(0,0,0,0.06)] border border-[#E5E8EB] flex flex-col gap-2.5 transition-transform duration-300 group-hover:scale-105`}>
        {/* Top GNB Line */}
        <div className="flex items-center justify-between pb-1.5 border-b border-[#E5E8EB] text-[10px] font-bold text-[#191F28]">
          <span className="font-extrabold">daisalibrary</span>
          <span className="text-[9px] text-[#8B95A1] font-mono">360px</span>
        </div>

        {/* Grid & Margins View */}
        <div className="flex items-stretch justify-between gap-1.5 h-14">
          {/* Left Margin (24px) */}
          <div className={`w-5 bg-[#E8F3FF] ${componentRadiusClass} flex items-center justify-center`}>
            <span className="text-[8px] font-bold text-[#1219F7] font-mono">24</span>
          </div>

          {/* Center Content Area (312px: 4 columns) */}
          <div className={`flex-1 flex gap-1 p-1 bg-[#F8F9FB] border border-[#E5E8EB] ${componentRadiusClass}`}>
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className={`flex-1 bg-[#EEF2FF] ${componentRadiusClass} flex items-end justify-center pb-0.5 text-[7px] font-bold text-[#595EF9]`}
              >
                col
              </div>
            ))}
          </div>

          {/* Right Margin (24px) */}
          <div className={`w-5 bg-[#E8F3FF] ${componentRadiusClass} flex items-center justify-center`}>
            <span className="text-[8px] font-bold text-[#1219F7] font-mono">24</span>
          </div>
        </div>

        {/* Safe Area text at bottom */}
        <div className="text-center text-[9px] font-bold text-[#8B95A1]">
          {isPartner ? 'Content: 312px (Web: 627px)' : 'Content Safe Area: 312px'}
        </div>
      </div>
    </div>
  );

  // ============================================================
  // 5. Writing Guide (Yeogi inspired: Plump speech bubble with volume)
  // ============================================================
  const renderWritingThumbnail = () => (
    <div className="w-full h-full relative flex flex-col items-center justify-center gap-2 select-none px-4">
      {/* Abstract subtle background lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
        viewBox="0 0 200 150"
        fill="none"
      >
        <path d="M-20 40 L220 110" stroke="white" strokeWidth="8" strokeLinecap="round" />
        <path d="M120 -20 L80 170" stroke="white" strokeWidth="8" strokeLinecap="round" />
      </svg>

      {/* Main Blue Speech Bubble (~해요체) with rich volume */}
      <div className="relative z-10 transition-transform duration-300 group-hover:scale-105">
        <div className={`bg-[#1219F7] text-white text-[13px] font-extrabold px-4 py-2.5 ${componentRadiusClass} shadow-[0_10px_24px_rgba(18,25,247,0.32)] flex items-center gap-2`}>
          <MapPin className="w-3.5 h-3.5 fill-white shrink-0" />
          <span>{isPartner ? '배차 수락 3건' : '출발지를 검색해 주세요'}</span>
        </div>
        {/* Speech Bubble Tail */}
        <div className="w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-[#1219F7] mx-auto -mt-[1px]" />
      </div>

      {/* Secondary White Response Pill (~하기체) */}
      <div className="relative z-10 bg-white text-[#191F28] text-[11px] font-bold px-3 py-1.5 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.06)] border border-black/[0.04]">
        <span>{isPartner ? '신청 정보 확인' : '견적 신청하기'}</span>
      </div>
    </div>
  );

  // ============================================================
  // 6. Icons (Icon Grid Construction + Black Hero Tile + Clean Floating Tiles)
  // ============================================================
  const renderIconsThumbnail = () => (
    <div className="w-full h-full relative flex items-center justify-center select-none px-6 overflow-hidden">
      {/* Icon Design Construction Grid (Keyline Circle & Rect) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
        viewBox="0 0 200 150"
        fill="none"
      >
        <circle cx="100" cy="75" r="44" stroke="white" strokeWidth="6" />
        <rect x="66" y="41" width="68" height="68" rx="14" stroke="white" strokeWidth="5" strokeDasharray="12 8" />
        <path d="M100 20 V130 M30 75 H170" stroke="white" strokeWidth="3" strokeDasharray="6 6" />
      </svg>

      {/* 3 Staggered Floating Icon Tiles */}
      <div className="relative z-10 flex items-center justify-center">
        {/* Left: White Card with Deep Black Icon */}
        <div
          className={`w-12 h-12 bg-white ${
            componentRadiusClass
          } border border-black/[0.05] flex items-center justify-center text-[#191F28] shadow-[0_6px_16px_rgba(0,0,0,0.06)] transform -translate-x-3 transition-transform duration-300 group-hover:-translate-x-4`}
        >
          <Search className="w-5 h-5 stroke-[2.5] text-[#191F28]" />
        </div>

        {/* Center: Hero Deep Black Tile with White Moving Truck Icon */}
        <div
          className={`w-14 h-14 bg-[#191F28] ${
            componentRadiusClass
          } flex items-center justify-center text-white shadow-[0_12px_26px_rgba(0,0,0,0.25)] z-10 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1`}
        >
          <Truck className="w-7 h-7 stroke-[2.2] text-white" />
        </div>

        {/* Right: Clean White Card with Signature Blue Icon */}
        <div
          className={`w-12 h-12 bg-white ${
            componentRadiusClass
          } border border-black/[0.05] flex items-center justify-center text-[#1219F7] shadow-[0_6px_16px_rgba(0,0,0,0.06)] transform translate-x-3 transition-transform duration-300 group-hover:translate-x-4`}
        >
          <MapPin className="w-5 h-5 stroke-[2.2] text-[#1219F7] fill-[#1219F7]/20" />
        </div>
      </div>
    </div>
  );

  // ============================================================
  // 7. Buttons Thumbnail (Single solid main color button with rich volume)
  // ============================================================
  const renderButtonsThumbnail = () => (
    <div className="w-full h-full flex items-center justify-center select-none px-6">
      {/* Exactly one solid main color button */}
      <div
        className={`w-full max-w-[210px] h-[52px] bg-[#1219F7] ${
          componentRadiusClass
        } shadow-[0_10px_24px_rgba(18,25,247,0.28)] flex items-center justify-center text-white text-[16px] font-extrabold tracking-tight transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_12px_28px_rgba(18,25,247,0.36)]`}
      >
        <span>{isPartner ? '오더 수락하기' : 'Button'}</span>
      </div>
    </div>
  );

  // ============================================================
  // 8. Input Fields (Clean Centered Input Box)
  // ============================================================
  const renderInputsThumbnail = () => (
    <div className="w-full h-full flex items-center justify-center select-none px-6">
      <div
        className={`w-full max-w-[210px] h-[50px] bg-white border-2 border-[#1219F7] ${
          componentRadiusClass
        } px-3.5 flex items-center justify-between shadow-[0_6px_20px_rgba(18,25,247,0.08)] transition-transform duration-300 group-hover:scale-105`}
      >
        <div className="flex items-center gap-2">
          <span className="text-[13px] font-medium text-[#191F28]">
            {isPartner ? '견적 금액 입력' : '출발지 검색'}
          </span>
          <div className="w-[2px] h-4.5 bg-[#1219F7] rounded-full animate-pulse" />
        </div>
        <Search className="w-4.5 h-4.5 text-[#1219F7]" />
      </div>
    </div>
  );

  // ============================================================
  // 9. Modals / Dialog & Sheet (Elevated dialog card with volume and backdrop)
  // ============================================================
  const renderModalsThumbnail = () => (
    <div className="w-full h-full relative flex items-center justify-center select-none px-4">
      {/* Dimmed backdrop circle */}
      <div className="absolute w-36 h-36 rounded-full bg-black/[0.06] blur-md pointer-events-none" />

      {/* Elevated White Modal Box */}
      <div
        className={`relative z-10 w-[205px] bg-white ${
          isPartner ? 'rounded-[6px]' : 'rounded-[16px]'
        } p-4 shadow-[0_16px_36px_rgba(0,0,0,0.12)] border border-black/[0.04] space-y-3 transition-transform duration-300 group-hover:scale-105`}
      >
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-[#E8F3FF] flex items-center justify-center text-[#1219F7] shrink-0">
            <CheckCircle2 className="w-4 h-4 text-[#1219F7]" />
          </div>
          <span className="text-[13px] font-extrabold text-[#191F28] leading-tight">
            {isPartner ? '배차 승인 완료' : '견적 신청 완료'}
          </span>
        </div>

        {/* Dual Actions with volume */}
        <div className="flex gap-2 pt-1">
          <div
            className={`flex-1 h-8 ${
              componentRadiusClass
            } bg-[#F2F4F8] text-[11px] font-bold text-[#6B7684] flex items-center justify-center`}
          >
            취소
          </div>
          <div
            className={`flex-1 h-8 ${
              componentRadiusClass
            } bg-[#1219F7] text-[11px] font-bold text-white flex items-center justify-center shadow-[0_4px_10px_rgba(18,25,247,0.25)]`}
          >
            확인
          </div>
        </div>
      </div>

      {/* Floating Bottom Sheet Handlebar hint at bottom */}
      <div className="absolute bottom-2.5 w-12 h-1 bg-[#D1D6DB] rounded-full" />
    </div>
  );

  // ============================================================
  // Component Items Data
  // ============================================================
  const componentItems: ComponentItem[] = [
    {
      id: 'colors',
      name: 'Colors',
      renderThumbnail: renderColorThumbnail,
    },
    {
      id: 'typography',
      name: 'Typography',
      renderThumbnail: renderTypographyThumbnail,
    },
    {
      id: 'spacing-radius',
      name: 'Spacing & Radius',
      renderThumbnail: renderSpacingRadiusThumbnail,
    },
    {
      id: 'layout',
      name: 'Layout',
      renderThumbnail: renderLayoutThumbnail,
    },
    {
      id: 'writing',
      name: 'Writing Guide',
      renderThumbnail: renderWritingThumbnail,
    },
    {
      id: 'icons',
      name: 'Icons',
      renderThumbnail: renderIconsThumbnail,
    },
    {
      id: 'buttons',
      name: 'Buttons',
      renderThumbnail: renderButtonsThumbnail,
    },
    {
      id: 'inputs',
      name: 'Input Fields',
      renderThumbnail: renderInputsThumbnail,
    },
    {
      id: 'modals',
      name: 'Dialog & Sheet',
      renderThumbnail: renderModalsThumbnail,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Intro Header */}
      <div className="space-y-2 animate-fadeIn">
        <h1 className="text-[32px] md:text-[38px] font-extrabold tracking-tight leading-tight text-[#191F28]">
          Components
        </h1>
        <p className="text-[15px] md:text-[16px] max-w-2xl leading-relaxed text-[#6B7684]">
          다이사의 모든 컴포넌트를 둘러보세요.
        </p>
      </div>

      {/* Grid of Component Cards (Seed Design Style: 당근 SEED 썸네일 박스 #F2F3F6 + radius 10px) */}
      {loadingShimmer ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="space-y-3 animate-pulse">
              <div className="h-[190px] rounded-[10px] bg-[#F2F3F6]" />
              <div className="h-5 rounded w-1/2 bg-[#E5E8EB]" />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
          {componentItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => onSelectTab(item.id)}
              style={{ animationDelay: `${idx * 30}ms` }}
              className="group cursor-pointer select-none animate-fillUp"
            >
              {/* 1. 상단 썸네일 박스 (당근 SEED 스타일: 배경 #F2F3F6, radius 10px, 그림자 없음, 호버 시 살짝 어두워짐) */}
              <div className="w-full h-[190px] bg-[#F2F3F6] rounded-[10px] flex items-center justify-center p-4 transition-all duration-200 group-hover:bg-[#EAECEF] overflow-hidden">
                {item.renderThumbnail()}
              </div>

              {/* 2. 썸네일 아래 큰 타이틀 하나만 (당근 스타일) */}
              <div className="mt-3 px-0.5">
                <h3 className="text-[17px] font-bold tracking-tight text-[#191F28] group-hover:text-[#1219F7] transition-colors">
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomeSection;