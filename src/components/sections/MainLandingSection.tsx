import React from 'react';
import { ArrowRight, Layers, Palette, Box, FileText } from 'lucide-react';

export const MainLandingSection: React.FC<{
  mode?: 'customer' | 'partner';
  onGoToLibrary: () => void;
  onSelectTab: (tabId: string) => void;
}> = ({ mode = 'customer', onGoToLibrary, onSelectTab }) => {
  const isPartner = mode === 'partner';

  return (
    <div className="space-y-12 py-2">
      {/* 1. 기하학적이고 감각적인 부피감이 큰 메인 비주얼 그래픽 */}
      <div className="w-full rounded-[24px] overflow-hidden bg-[#0D111A] shadow-2xl p-6 sm:p-10 md:p-14 lg:p-16 relative select-none flex items-center justify-center border border-white/5">
        {/* 은은한 앰비언트 글로우 백그라운드 */}
        <div className="absolute -top-24 left-1/4 w-80 h-80 bg-[#1219F7]/25 rounded-full blur-[90px] pointer-events-none" />
        <div className="absolute -bottom-24 right-1/4 w-80 h-80 bg-[#595EF9]/20 rounded-full blur-[90px] pointer-events-none" />

        {/* 볼륨감과 리듬감이 돋보이는 기하학 SVG 비주얼 */}
        <svg
          viewBox="0 0 960 300"
          className="w-full h-auto max-w-[880px] drop-shadow-2xl"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle Grid Accent Lines */}
          <line x1="40" y1="150" x2="920" y2="150" stroke="#FFFFFF" strokeOpacity="0.06" strokeWidth="1" strokeDasharray="4 8" />
          <line x1="480" y1="20" x2="480" y2="280" stroke="#FFFFFF" strokeOpacity="0.06" strokeWidth="1" strokeDasharray="4 8" />

          {/* Group 1: 좌측의 연속적인 볼륨 반원 (Forward Momentum / Connected Motion) */}
          <g transform="translate(60, 40)">
            {/* 첫 번째 아크 (Vibrant Bright Green / Motion Accent) */}
            <path
              d="M100 10 C45 10 0 60 0 110 C0 160 45 210 100 210 Z"
              fill="#22C55E"
            />
            {/* 두 번째 아크 (다이사 시그니처 블루) */}
            <path
              d="M210 10 C155 10 110 60 110 110 C110 160 155 210 210 210 Z"
              fill="#1219F7"
            />
          </g>

          {/* Group 2: 중앙의 묵직하고 거대한 트윈 서클 (Twin Volumetric Spheres) */}
          <g transform="translate(320, 40)">
            {/* 첫 번째 원 (순백의 화이트 서클) */}
            <circle cx="95" cy="110" r="95" fill="#FFFFFF" />
            {/* 두 번째 원 (순백의 화이트 서클) */}
            <circle cx="315" cy="110" r="95" fill="#FFFFFF" />
          </g>

          {/* Group 3: 우측의 정교한 3D 기하학 프리즘 & 다각형 파셋 (Architectural Prisms / Building Blocks) */}
          <g transform="translate(760, 40)">
            {/* 상단 직각 삼각 파셋 (화이트) */}
            <polygon points="0,10 90,10 0,100" fill="#FFFFFF" />
            {/* 중앙 다이사 블루 블록 */}
            <polygon points="0,110 90,110 90,200 0,200" fill="#1219F7" />
            {/* 하단 사선 슬라이스 삼각 파셋 (화이트) */}
            <polygon points="0,120 120,210 0,210" fill="#FFFFFF" />
            {/* 우측 상단 블루 보조 포인트 */}
            <polygon points="90,10 120,40 90,70" fill="#595EF9" />
          </g>
        </svg>
      </div>

      {/* 2. 다이사 라이브러리 로고 & 시스템 소개 */}
      <div className="flex flex-col items-center text-center space-y-6 max-w-2xl mx-auto pt-2">
        {/* 다이사 라이브러리 공식 로고 */}
        <div className="flex items-center gap-3">
          <img
            src="/logo-dark.png"
            alt="daisalibrary logo"
            className="h-[36px] md:h-[44px] w-auto object-contain"
          />
        </div>

        {/* 시스템 소개 문구 */}
        <div className="space-y-3">
          <h1 className="text-[26px] md:text-[34px] font-extrabold tracking-tight text-[#191F28] leading-tight">
            다이사 공식 디자인시스템
          </h1>
          <p className="text-[15px] md:text-[17px] text-[#4E5968] leading-relaxed font-normal">
            누적 고객 780만 명과 1,000+ 파트너를 연결하는 이사 매칭 플랫폼 다이사(da24)의 통합 라이브러리입니다.
            일관된 사용자 경험과 효율적인 제품 구현을 위한 표준 가이드라인과 재사용 컴포넌트를 제공합니다.
          </p>
        </div>

        {/* 라이브러리로 바로가기 CTA 버튼 */}
        <div className="pt-2">
          <button
            type="button"
            onClick={onGoToLibrary}
            className="h-[52px] px-8 rounded-[14px] bg-[#1219F7] hover:bg-[#0E15D4] text-white text-[15px] font-bold flex items-center gap-2.5 shadow-lg shadow-[#1219F7]/20 transition-all hover:scale-102 active:scale-98 cursor-pointer"
          >
            <span>라이브러리로 바로가기</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 3. 주요 핵심 섹션 빠른 둘러보기 카드 그리드 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
        {[
          {
            id: 'home',
            title: 'Components',
            desc: '버튼, 인풋, 모달 등 전사 핵심 UI 컴포넌트 16종',
            icon: Box,
            color: 'text-[#1219F7] bg-[#EEF2FF]',
          },
          {
            id: 'colors',
            title: 'Colors',
            desc: '브랜드 키컬러(#1219F7) 및 시맨틱 시스템 컬러 토큰',
            icon: Palette,
            color: 'text-[#595EF9] bg-[#F4F5FF]',
          },
          {
            id: 'layout',
            title: 'Layout',
            desc: '모바일 360/312px & 데스크톱 1200/640px 그리드 규격',
            icon: Layers,
            color: 'text-[#191F28] bg-[#F2F4F8]',
          },
          {
            id: 'archive',
            title: 'Resources',
            desc: '고객향 및 파트너향 공식 마크다운(.md) 명세서 원문',
            icon: FileText,
            color: 'text-emerald-600 bg-emerald-50',
          },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              onClick={() => onSelectTab(item.id)}
              className="bg-white rounded-[16px] p-5 shadow-xs hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between select-none"
            >
              <div className="space-y-3">
                <div className={`w-10 h-10 rounded-[10px] flex items-center justify-center ${item.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-[16px] text-[#191F28] group-hover:text-[#1219F7] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[13px] text-[#6B7684] mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
              <div className="pt-4 flex items-center text-[12px] font-bold text-[#1219F7] opacity-0 group-hover:opacity-100 transition-opacity gap-1">
                <span>둘러보기</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MainLandingSection;
