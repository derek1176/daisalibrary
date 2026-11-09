import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  Search,
  CheckCircle2,
  MapPin
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
  const [loadingShimmer, setLoadingShimmer] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingShimmer(false);
    }, 120);
    return () => clearTimeout(timer);
  }, [mode]);

  // ============================================================
  // 1. Color Tokens Thumbnail (3D overlapping tangible swatch cards)
  // ============================================================
  const renderColorThumbnail = () => (
    <div className="w-full h-full flex items-center justify-center select-none">
      <div className="relative flex items-center justify-center h-full">
        {/* White Card behind */}
        <div
          className={`w-16 h-22 bg-white ${
            isPartner ? 'rounded-[6px]' : 'rounded-[14px]'
          } shadow-[0_6px_16px_rgba(0,0,0,0.06)] border border-[#E5E8EB] transform -rotate-14 -translate-x-9 transition-transform duration-300 group-hover:-translate-y-2`}
        />

        {/* Secondary Color Card */}
        <div
          className={`w-18 h-24 bg-[#595EF9] ${
            isPartner ? 'rounded-[6px]' : 'rounded-[14px]'
          } shadow-[0_10px_22px_rgba(89,94,249,0.25)] flex flex-col justify-end p-2.5 transform -rotate-4 -translate-x-3 z-10 transition-transform duration-300 group-hover:-translate-y-3`}
        >
          <span className="text-[10px] font-extrabold text-white/90">#59</span>
        </div>

        {/* Main Royal Blue Card with volume */}
        <div
          className={`w-20 h-26 bg-[#1219F7] ${
            isPartner ? 'rounded-[8px]' : 'rounded-[16px]'
          } shadow-[0_14px_30px_rgba(18,25,247,0.35)] flex flex-col justify-between p-3 transform rotate-8 translate-x-4 z-20 transition-transform duration-300 group-hover:-translate-y-3.5 group-hover:rotate-6`}
        >
          <div className="w-4 h-4 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-white" />
          </div>
          <div>
            <div className="text-white text-[12px] font-black tracking-wider">#1219F7</div>
            <div className="text-white/70 text-[9px] font-bold">Main 01</div>
          </div>
        </div>
      </div>
    </div>
  );

  // ============================================================
  // 2. Typography Thumbnail (Sculptural letterform with volume badge)
  // ============================================================
  const renderTypographyThumbnail = () => (
    <div className="w-full h-full flex items-center justify-center select-none px-6">
      <div
        className="w-[195px] h-[125px] bg-white rounded-[18px] p-4 shadow-[0_8px_24px_rgba(0,0,0,0.06)] border border-black/[0.04] flex flex-col justify-between transition-transform duration-300 group-hover:scale-105"
      >
        <div className="flex items-center justify-between">
          <span className="text-[44px] font-black text-[#191F28] leading-none tracking-tight">
            Aa
          </span>
          <div className="rounded-full bg-[#1219F7] text-white text-[11px] font-extrabold px-3 py-1 shadow-md shadow-[#1219F7]/25">
            {isPartner ? '18px' : 'Pretendard'}
          </div>
        </div>

        {/* Typo Scale Preview Rhythm */}
        <div className="space-y-1.5">
          <div className="h-2 w-full bg-[#191F28]/15 rounded-full" />
          <div className="h-2 w-3/4 bg-[#1219F7]/30 rounded-full" />
        </div>
      </div>
    </div>
  );

  // ============================================================
  // 3. Spacing & Radius Thumbnail (Clean tactile corner curve block)
  // ============================================================
  const renderSpacingRadiusThumbnail = () => (
    <div className="w-full h-full flex items-center justify-center select-none px-6">
      <div
        className="w-[190px] h-[120px] bg-white rounded-[16px] p-3.5 shadow-[0_8px_24px_rgba(0,0,0,0.06)] border border-black/[0.04] flex flex-col justify-between relative transition-transform duration-300 group-hover:scale-105"
      >
        {/* Top Curve Accent Guide with Pill Badge */}
        <div className="flex items-start justify-between">
          <div className="relative">
            {/* Corner Arc Marker */}
            <div className="w-10 h-10 border-t-3 border-l-3 border-[#1219F7] rounded-tl-[14px]" />
          </div>
          <div className="px-2.5 py-1 rounded-[8px] bg-[#1219F7] text-white font-black text-[12px] shadow-sm">
            {isPartner ? 'Radius 6' : 'Radius 10'}
          </div>
        </div>

        {/* Inner Padding Container */}
        <div className="w-full h-11 rounded-[10px] bg-[#E8F3FF] border border-dashed border-[#1219F7]/40 flex items-center justify-between px-3">
          <span className="text-[10px] font-black text-[#1219F7]">P-16</span>
          <div className="w-14 h-2 rounded-full bg-[#1219F7]/30" />
          <span className="text-[10px] font-black text-[#1219F7]">P-16</span>
        </div>
      </div>
    </div>
  );

  // ============================================================
  // 4. Layout Thumbnail (360px Canvas Safe Area Phone Mockup)
  // ============================================================
  const renderLayoutThumbnail = () => (
    <div className="w-full h-full relative flex items-end justify-center select-none overflow-hidden">
      {/* 360 Phone Viewport Frame */}
      <div
        className="w-[170px] h-[145px] bg-white rounded-t-[22px] shadow-[0_12px_28px_rgba(0,0,0,0.08)] border-t border-x border-black/[0.06] p-2.5 flex flex-col justify-between transition-transform duration-300 group-hover:translate-y-[-4px]"
      >
        {/* Phone Speaker Notch */}
        <div className="w-12 h-1 bg-[#D1D6DB] rounded-full mx-auto" />

        {/* 312px Safe Area Block with 24px side guides */}
        <div className="relative w-full h-[95px] bg-[#E8F3FF] rounded-[10px] border border-dashed border-[#1219F7]/30 p-1.5 flex flex-col items-center justify-center gap-1.5">
          {/* Side margin labels */}
          <div className="absolute left-1 top-1 text-[8px] font-black text-[#1219F7]">24</div>
          <div className="absolute right-1 top-1 text-[8px] font-black text-[#1219F7]">24</div>

          {/* Centered Safe Area Container */}
          <div className="w-[105px] h-[40px] bg-[#1219F7] rounded-[8px] flex items-center justify-center text-white font-black text-[12px] shadow-sm">
            <span>{isPartner ? '312 / 627' : '312px'}</span>
          </div>
          <span className="text-[9px] font-bold text-[#6B7684]">
            {isPartner ? 'w: 360 & 1200' : 'w: 360px Safe'}
          </span>
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
        <div className="bg-[#1219F7] text-white text-[13px] font-extrabold px-4 py-2.5 rounded-[16px] shadow-[0_10px_24px_rgba(18,25,247,0.32)] flex items-center gap-2">
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
  // 6. Icons (Tactile 3D floating icon tiles)
  // ============================================================
  const renderIconsThumbnail = () => (
    <div className="w-full h-full flex items-center justify-center select-none px-6">
      <div className="grid grid-cols-2 gap-2.5">
        {/* Main Blue Icon Tile */}
        <div
          className={`w-12 h-12 bg-[#1219F7] ${
            isPartner ? 'rounded-[8px]' : 'rounded-[14px]'
          } flex items-center justify-center text-white shadow-[0_8px_20px_rgba(18,25,247,0.3)] transition-transform duration-300 group-hover:scale-105`}
        >
          <Sparkles className="w-6 h-6 stroke-[2.2]" />
        </div>

        {/* White Tile with Blue Accent */}
        <div
          className={`w-12 h-12 bg-white ${
            isPartner ? 'rounded-[8px]' : 'rounded-[14px]'
          } border border-black/[0.04] flex items-center justify-center text-[#595EF9] shadow-[0_6px_16px_rgba(0,0,0,0.06)] transition-transform duration-300 group-hover:scale-105`}
        >
          <Search className="w-6 h-6 stroke-[2.5]" />
        </div>

        {/* White Tile with Coral Accent */}
        <div
          className={`w-12 h-12 bg-white ${
            isPartner ? 'rounded-[8px]' : 'rounded-[14px]'
          } border border-black/[0.04] flex items-center justify-center text-[#F34766] shadow-[0_6px_16px_rgba(0,0,0,0.06)] transition-transform duration-300 group-hover:scale-105`}
        >
          <MapPin className="w-6 h-6 stroke-[2.2]" />
        </div>

        {/* Soft Blue Tile with Emerald Accent */}
        <div
          className={`w-12 h-12 bg-[#E8F3FF] ${
            isPartner ? 'rounded-[8px]' : 'rounded-[14px]'
          } flex items-center justify-center text-[#1219F7] shadow-xs transition-transform duration-300 group-hover:scale-105`}
        >
          <CheckCircle2 className="w-6 h-6 stroke-[2.2]" />
        </div>
      </div>
    </div>
  );

  // ============================================================
  // 7. Buttons (Yeogi inspired: Large tactile primary button + icon & sub button)
  // ============================================================
  const renderButtonsThumbnail = () => (
    <div className="w-full h-full flex flex-col items-center justify-center gap-3 select-none px-6">
      {/* Primary Action Button with rich volume */}
      <div
        className={`w-full max-w-[200px] h-[46px] bg-[#1219F7] ${
          isPartner ? 'rounded-[6px]' : 'rounded-[14px]'
        } shadow-[0_8px_18px_rgba(18,25,247,0.24)] flex items-center justify-center text-white text-[15px] font-extrabold tracking-tight transition-transform duration-300 group-hover:scale-[1.03]`}
      >
        <span>{isPartner ? '오더 수락하기' : 'Button'}</span>
      </div>

      {/* Secondary Row: Icon circle button + soft secondary button */}
      <div className="flex items-center gap-2.5 w-full max-w-[200px]">
        <div
          className={`w-10 h-10 rounded-full bg-[#E8F3FF] flex items-center justify-center text-[#1219F7] shadow-xs shrink-0 transition-transform duration-300 group-hover:rotate-6`}
        >
          <Sparkles className="w-4 h-4 fill-[#1219F7]" />
        </div>
        <div
          className={`flex-1 h-10 bg-white ${
            isPartner ? 'rounded-[6px]' : 'rounded-[12px]'
          } border border-black/[0.04] shadow-[0_2px_8px_rgba(0,0,0,0.04)] px-3.5 flex items-center`}
        >
          <div className="w-16 h-2 rounded-full bg-[#1219F7]/25" />
        </div>
      </div>
    </div>
  );

  // ============================================================
  // 8. Input Fields (Yeogi inspired: Cropped card sheet with prominent search bar)
  // ============================================================
  const renderInputsThumbnail = () => (
    <div className="w-full h-full relative flex items-end justify-end select-none overflow-hidden">
      {/* Background white sheet container sliding from corner */}
      <div
        className="w-[230px] h-[155px] bg-white rounded-tl-[28px] shadow-[0_10px_28px_rgba(0,0,0,0.08)] border-t border-l border-black/[0.04] p-4 flex flex-col justify-between transition-transform duration-300 group-hover:translate-x-[-4px] group-hover:translate-y-[-4px]"
      >
        {/* Prominent Search/Text Input */}
        <div
          className={`w-full h-[46px] rounded-[14px] border-2 border-[#1219F7] bg-white px-3 flex items-center gap-2.5 shadow-xs`}
        >
          <Search className="w-5 h-5 text-[#1219F7] stroke-[2.5] shrink-0" />
          <div className="w-[2px] h-4.5 bg-[#1219F7] rounded-full animate-pulse" />
          <span className="text-[13px] font-bold text-[#191F28] truncate">
            {isPartner ? '고객 주소 검색' : '출발지 검색'}
          </span>
        </div>

        {/* Suggestion pill chips */}
        <div className="flex items-center gap-2 pt-1">
          <div className="w-16 h-4.5 rounded-full bg-[#E8F3FF]" />
          <div className="w-24 h-4.5 rounded-full bg-[#F2F4F8]" />
        </div>
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
          isPartner ? 'rounded-[8px]' : 'rounded-[18px]'
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
              isPartner ? 'rounded-[4px]' : 'rounded-[8px]'
            } bg-[#F2F4F8] text-[11px] font-bold text-[#6B7684] flex items-center justify-center`}
          >
            취소
          </div>
          <div
            className={`flex-1 h-8 ${
              isPartner ? 'rounded-[4px]' : 'rounded-[8px]'
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