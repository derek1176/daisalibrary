import React from 'react';
import { ArrowRight } from 'lucide-react';

export const MainLandingSection: React.FC<{
  onGoToLibrary: () => void;
}> = ({ onGoToLibrary }) => {
  return (
    <div className="space-y-10 py-2">
      {/* 1. 사용자가 첨부한 감각적인 기하학 daisalibrary 히어로 배너 */}
      <div className="w-full rounded-[24px] overflow-hidden shadow-2xl bg-black select-none border border-black/5">
        <img
          src="/hero-banner.png"
          alt="daisalibrary hero"
          className="w-full h-auto object-cover block"
        />
      </div>

      {/* 2. 타이틀 & 서브 문구 & 라이브러리로 바로가기 버튼 */}
      <div className="flex flex-col items-center text-center space-y-6 max-w-2xl mx-auto pt-2">
        {/* 타이틀 */}
        <h1 className="text-[28px] md:text-[36px] font-extrabold tracking-tight text-[#191F28] leading-tight">
          다이사 공식 디자인 시스템
        </h1>

        {/* 서브 문구 */}
        <p className="text-[15px] md:text-[17px] text-[#4E5968] leading-relaxed font-normal">
          &ldquo;가장 다이사다운, 가장 효율적인&rdquo; 다이사라이브러리는 사용자에게는 막힘없는 이사 경험을, 메이커에게는 최고의 생산성을 제공하는 것을 목표로 합니다.
        </p>

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
    </div>
  );
};

export default MainLandingSection;
