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
  // 1. Color Tokens Thumbnail
  // ============================================================
  const renderColorThumbnail = () => (
    <div className="w-full h-full flex items-center justify-center select-none">
      <div className="relative flex items-center justify-center">
        <div className="absolute w-24 h-24 rounded-full bg-[#1219F7]/8 blur-xl pointer-events-none" />
        <div className="flex items-center -space-x-3">
          <div
            className={`w-14 h-14 ${
              isPartner ? 'rounded-[8px]' : 'rounded-2xl'
            } bg-[#1219F7] shadow-lg shadow-[#1219F7]/25 flex items-center justify-center transform -rotate-6 transition-transform duration-300 group-hover:-translate-y-1.5`}
          >
            <span className="text-white/90 text-[10px] font-extrabold tracking-wider">#12</span>
          </div>

          <div
            className={`w-16 h-16 ${
              isPartner ? 'rounded-[8px]' : 'rounded-2xl'
            } bg-[#595EF9] shadow-lg shadow-[#595EF9]/25 flex items-center justify-center z-10 transition-transform duration-300 group-hover:-translate-y-2.5`}
          >
            <div className="w-5 h-5 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-white/80" />
            </div>
          </div>

          <div
            className={`w-14 h-14 ${
              isPartner ? 'rounded-[8px]' : 'rounded-2xl'
            } ${
              isPartner ? 'bg-[#F7D915]' : 'bg-[#F34766]'
            } shadow-lg ${
              isPartner ? 'shadow-[#F7D915]/25' : 'shadow-[#F34766]/25'
            } flex items-center justify-center transform rotate-6 transition-transform duration-300 group-hover:-translate-y-1.5`}
          >
            <span
              className={`text-[10px] font-extrabold tracking-wider ${
                isPartner ? 'text-[#191F28]' : 'text-white/90'
              }`}
            >
              {isPartner ? 'Sub' : 'Err'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  // ============================================================
  // 2. Typography Thumbnail
  // ============================================================
  const renderTypographyThumbnail = () => (
    <div className="w-full h-full flex items-center justify-center select-none">
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="flex items-baseline gap-1.5">
          <span className="text-[44px] font-black text-[#191F28] leading-none tracking-tight">
            Aa
          </span>
          <span
            className={`text-[11px] font-bold px-1.5 py-0.5 ${
              isPartner
                ? 'rounded-[4px] bg-[#E8F3FF] text-[#1219F7]'
                : 'rounded-full bg-[#F2F4F6] text-[#6B7684]'
            }`}
          >
            {isPartner ? '18px' : 'Pretendard'}
          </span>
        </div>
        <div className="w-28 space-y-1.5">
          <div className="h-1.5 w-full bg-[#191F28]/15 rounded-full" />
          <div className="h-1.5 w-3/4 bg-[#1219F7]/30 rounded-full mx-auto" />
        </div>
      </div>
    </div>
  );

  // ============================================================
  // 3. Spacing & Radius Thumbnail
  // ============================================================
  const renderSpacingRadiusThumbnail = () => (
    <div className="w-full h-full flex items-center justify-center select-none">
      <div className="relative flex items-center justify-center">
        <div className="w-36 h-24 rounded-[14px] border border-dashed border-[#D1D6DB] flex items-center justify-center p-2 bg-white/40">
          <div
            className={`w-24 h-16 bg-white border-2 border-[#1219F7] ${
              isPartner ? 'rounded-[6px]' : 'rounded-[10px]'
            } shadow-xs flex flex-col items-center justify-center gap-0.5 transition-transform duration-300 group-hover:scale-105`}
          >
            <span className="text-[12px] font-extrabold text-[#1219F7]">
              r: {isPartner ? '6px' : '10px'}
            </span>
            <span className="text-[9px] font-semibold text-[#8B95A1]">
              {isPartner ? 'Partner Rule' : 'Standard'}
            </span>
          </div>
        </div>
        <div className="absolute -top-2 right-1 text-[9px] font-bold px-2 py-0.5 rounded-full bg-[#E8F3FF] text-[#1219F7] border border-[#1219F7]/20 shadow-2xs">
          8 · 16px
        </div>
      </div>
    </div>
  );

  // ============================================================
  // 4. Layout Thumbnail
  // ============================================================
  const renderLayoutThumbnail = () => (
    <div className="w-full h-full flex items-center justify-center select-none">
      <div className="flex items-center gap-3">
        <div
          className={`w-13 h-20 bg-white border-2 border-[#191F28] ${
            isPartner ? 'rounded-[6px]' : 'rounded-[8px]'
          } p-1.5 flex flex-col justify-between shadow-xs transition-transform duration-300 group-hover:-translate-y-1`}
        >
          <span className="text-[7px] font-bold text-[#8B95A1] text-center">360</span>
          <div className="w-full h-1 bg-[#1219F7] rounded-full" />
        </div>
        <div
          className={`w-28 h-20 bg-white border border-[#D1D6DB] ${
            isPartner ? 'rounded-[6px]' : 'rounded-[8px]'
          } p-1.5 flex items-center justify-center shadow-xs transition-transform duration-300 group-hover:-translate-y-1`}
        >
          <div
            className={`w-16 h-full bg-[#E8F3FF] border border-[#1219F7]/30 ${
              isPartner ? 'rounded-[4px]' : 'rounded-[6px]'
            } p-1 flex flex-col justify-between`}
          >
            <span className="text-[8px] font-black text-[#1219F7] text-center">
              {isPartner ? '627px' : '640px'}
            </span>
            <div className="w-full h-1 bg-[#1219F7] rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );

  // ============================================================
  // 5. Writing Guide Thumbnail
  // ============================================================
  const renderWritingThumbnail = () => (
    <div className="w-full h-full flex items-center justify-center select-none">
      <div className="flex flex-col gap-2 w-44">
        <div className="self-start bg-[#E8F3FF] border border-[#1219F7]/20 px-3 py-1.5 rounded-2xl rounded-tl-xs text-[11px] font-bold text-[#1219F7] shadow-xs flex items-center gap-1.5 transition-transform duration-300 group-hover:scale-102">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1219F7]" />
          <span>출발지를 검색해 주세요</span>
        </div>
        <div className="self-end bg-white border border-[#E5E8EB] px-3 py-1.5 rounded-2xl rounded-tr-xs text-[11px] font-medium text-[#4E5968] shadow-xs transition-transform duration-300 group-hover:scale-102">
          신청하기
        </div>
      </div>
    </div>
  );

  // ============================================================
  // 6. Icons Thumbnail
  // ============================================================
  const renderIconsThumbnail = () => (
    <div className="w-full h-full flex items-center justify-center select-none">
      <div className="grid grid-cols-2 gap-2">
        <div
          className={`w-11 h-11 bg-[#F9FAFB] border border-[#E5E8EB] ${
            isPartner ? 'rounded-[6px]' : 'rounded-xl'
          } flex items-center justify-center text-[#1219F7] shadow-xs transition-transform duration-300 group-hover:scale-105`}
        >
          <Sparkles className="w-5 h-5 text-[#1219F7]" />
        </div>
        <div
          className={`w-11 h-11 bg-[#F9FAFB] border border-[#E5E8EB] ${
            isPartner ? 'rounded-[6px]' : 'rounded-xl'
          } flex items-center justify-center text-[#1219F7] shadow-xs transition-transform duration-300 group-hover:scale-105`}
        >
          <Search className="w-5 h-5 text-[#3182F6]" />
        </div>
        <div
          className={`w-11 h-11 bg-[#F9FAFB] border border-[#E5E8EB] ${
            isPartner ? 'rounded-[6px]' : 'rounded-xl'
          } flex items-center justify-center text-[#1219F7] shadow-xs transition-transform duration-300 group-hover:scale-105`}
        >
          <CheckCircle2 className="w-5 h-5 text-emerald-500" />
        </div>
        <div
          className={`w-11 h-11 bg-[#F9FAFB] border border-[#E5E8EB] ${
            isPartner ? 'rounded-[6px]' : 'rounded-xl'
          } flex items-center justify-center text-[#1219F7] shadow-xs transition-transform duration-300 group-hover:scale-105`}
        >
          <MapPin className="w-5 h-5 text-[#F34766]" />
        </div>
      </div>
    </div>
  );

  // ============================================================
  // 7. Buttons Thumbnail
  // ============================================================
  const renderButtonsThumbnail = () => (
    <div className="w-full h-full flex items-center justify-center select-none px-4">
      <div className="w-48 flex flex-col gap-2">
        <div
          className={`w-full h-11 bg-[#1219F7] ${
            isPartner ? 'rounded-[6px]' : 'rounded-[10px]'
          } flex items-center justify-center text-white text-[13px] font-bold shadow-md shadow-[#1219F7]/20 transition-all duration-300 group-hover:scale-[1.02]`}
        >
          <span>{isPartner ? '오더 수락하기' : '견적 신청하기'}</span>
        </div>
        <div
          className={`w-full h-8 bg-white border border-[#D7DBE2] ${
            isPartner ? 'rounded-[6px]' : 'rounded-[8px]'
          } flex items-center justify-center text-[#4E5968] text-[11px] font-semibold`}
        >
          보조 버튼
        </div>
      </div>
    </div>
  );

  // ============================================================
  // 8. Inputs Thumbnail
  // ============================================================
  const renderInputsThumbnail = () => (
    <div className="w-full h-full flex items-center justify-center select-none px-4">
      <div className="w-48 flex flex-col gap-1.5">
        <div className="flex justify-between items-center text-[10px] font-bold text-[#6B7684]">
          <span>{isPartner ? '금액' : '출발지'}</span>
        </div>
        <div
          className={`w-full h-11 bg-white border-2 border-[#1219F7] ${
            isPartner ? 'rounded-[6px]' : 'rounded-[10px]'
          } px-3 flex items-center justify-between shadow-xs transition-all duration-300 group-hover:scale-[1.02]`}
        >
          <div className="flex items-center gap-1.5">
            <span className="text-[12px] font-medium text-[#191F28]">
              {isPartner ? '견적 금액 입력' : '강남구 역삼동'}
            </span>
            <span className="w-0.5 h-3.5 bg-[#1219F7] animate-pulse" />
          </div>
          <Search className="w-4 h-4 text-[#8B95A1]" />
        </div>
      </div>
    </div>
  );

  // ============================================================
  // 9. Modals Thumbnail
  // ============================================================
  const renderModalsThumbnail = () => (
    <div className="w-full h-full flex items-center justify-center select-none px-4">
      <div className="relative">
        <div
          className={`w-40 bg-white ${
            isPartner ? 'rounded-[8px]' : 'rounded-[14px]'
          } border border-[#E5E8EB] p-3.5 shadow-lg shadow-black/5 space-y-2 text-center transition-transform duration-300 group-hover:scale-105`}
        >
          <div className="text-[11px] font-bold text-[#191F28] leading-tight">
            {isPartner ? '작업을 승인할까요?' : '신청을 취소할까요?'}
          </div>
          <div className="flex gap-1.5 pt-0.5">
            <div
              className={`flex-1 py-1 ${
                isPartner ? 'rounded-[4px]' : 'rounded-[6px]'
              } bg-[#F2F4F6] text-[9px] font-bold text-[#4E5968]`}
            >
              취소
            </div>
            <div
              className={`flex-1 py-1 ${
                isPartner ? 'rounded-[4px]' : 'rounded-[6px]'
              } bg-[#1219F7] text-[9px] font-bold text-white`}
            >
              확인
            </div>
          </div>
        </div>
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#D1D6DB] rounded-full" />
      </div>
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

      {/* Grid of Component Cards (Seed Design Style: 독립된 흰색 썸네일 박스 + 하단 큰 타이틀 하나만) */}
      {loadingShimmer ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="space-y-3 animate-pulse">
              <div className="h-[190px] rounded-[16px] bg-white border border-[#E5E8EB]" />
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
              {/* 1. 상단 썸네일 박스 (배경 흰색, 부드러운 라운드 16px, 테두리 및 그림자) */}
              <div className="w-full h-[190px] bg-white rounded-[16px] border border-[#E5E8EB] shadow-xs flex items-center justify-center p-4 transition-all duration-200 group-hover:border-[#1219F7]/40 group-hover:shadow-md overflow-hidden">
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