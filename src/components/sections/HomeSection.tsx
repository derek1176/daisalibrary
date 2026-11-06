import React from 'react';
import {
  ArrowRight,
  Layers,
  Sliders,
  Type,
  Palette,
  MousePointerClick,
  MessageSquare,
  Maximize2,
  ShieldCheck,
  Search
} from 'lucide-react';

interface HomeSectionProps {
  onSelectTab: (tabId: string) => void;
}

interface ComponentCard {
  id: string;
  title: string;
  category: string;
  desc: string;
  badge?: string;
  icon: React.ComponentType<{ className?: string }>;
  renderPreview: () => React.ReactNode;
}

export const HomeSection: React.FC<HomeSectionProps> = ({ onSelectTab }) => {
  const cards: ComponentCard[] = [
    {
      id: 'layout',
      title: '작업 규격 (레이아웃)',
      category: '기초 규격',
      badge: '절대 규칙',
      icon: Maximize2,
      desc: '모바일 360px (여백 24px) · 웹 1200px (헤더·본문·버튼 640px)',
      renderPreview: () => (
        <div className="w-full h-full flex items-center justify-center gap-4 select-none">
          {/* Simple 360 Frame */}
          <div className="w-[52px] h-[80px] bg-white rounded-[8px] border-2 border-[#191F28] flex flex-col justify-between p-1.5 shadow-2xs">
            <span className="text-[8px] font-bold text-[#8B95A1] text-center">360</span>
            <div className="h-1.5 bg-[#1219F7] rounded-[2px] w-full" />
          </div>

          {/* Simple 640/1200 Frame */}
          <div className="w-[108px] h-[80px] bg-[#FAFBFD] rounded-[8px] border border-dashed border-[#D1D6DB] flex items-center justify-center p-1 relative">
            <div className="w-[56px] h-full bg-white rounded-[4px] border-2 border-[#1219F7] flex flex-col justify-between p-1.5 shadow-2xs">
              <span className="text-[8px] font-bold text-[#1219F7] text-center">640</span>
              <div className="h-1.5 bg-[#1219F7] rounded-[2px] w-full" />
            </div>
            <span className="absolute bottom-1 right-1.5 text-[7px] font-bold text-[#8B95A1]">1200</span>
          </div>
        </div>
      ),
    },
    {
      id: 'buttons',
      title: '버튼 (Public Button)',
      category: '핵심 컴포넌트',
      badge: '표준 56px',
      icon: MousePointerClick,
      desc: '본문 표준 Public 312(640) · Corner Radius 10px · 키컬러 #1219F7',
      renderPreview: () => (
        <div className="w-full h-full flex items-center justify-center select-none px-6">
          {/* Single Simple CTA Button */}
          <div className="w-[190px] h-[46px] bg-[#1219F7] hover:bg-[#0E15D4] text-white rounded-[10px] flex items-center justify-center text-[14px] font-bold shadow-[0_4px_14px_rgba(18,25,247,0.25)] transition-transform group-hover:scale-102">
            견적 신청하기
          </div>
        </div>
      ),
    },
    {
      id: 'inputs',
      title: '입력창 (Form Input)',
      category: '핵심 컴포넌트',
      icon: Sliders,
      desc: '높이 56px · 포커스 블루 · 에러(#F34766) 스트로크',
      renderPreview: () => (
        <div className="w-full h-full flex items-center justify-center select-none px-5">
          {/* Single Simple Input */}
          <div className="w-full max-w-[210px] h-[46px] bg-white rounded-[10px] border-2 border-[#1219F7] px-3.5 flex items-center justify-between text-[13px] shadow-[0_2px_8px_rgba(18,25,247,0.08)]">
            <span className="text-[#191F28] font-medium">출발지를 입력해 주세요</span>
            <Search className="w-4 h-4 text-[#1219F7] shrink-0" />
          </div>
        </div>
      ),
    },
    {
      id: 'modals',
      title: '모달 및 바텀시트',
      category: '핵심 컴포넌트',
      badge: '반응형 1200px',
      icon: Layers,
      desc: '1200px 이상 중앙 고정 모달 & 360~1199px 바텀시트',
      renderPreview: () => (
        <div className="w-full h-full flex items-center justify-center px-4 select-none">
          {/* Single Simple Modal Dialog */}
          <div className="w-[170px] bg-white rounded-[14px] shadow-[0_4px_16px_rgba(0,0,0,0.08)] border border-[#E5E8EB] p-3 space-y-2 text-center">
            <div className="text-[11px] font-bold text-[#191F28] leading-tight">신청을 취소할까요?</div>
            <div className="text-[9px] text-[#8B95A1] leading-tight">작성 중인 내용은 저장되지 않아요.</div>
            <div className="flex gap-1.5 pt-0.5">
              <div className="flex-1 py-1 rounded-[6px] bg-[#F2F4F6] text-[10px] font-bold text-[#4E5968]">취소</div>
              <div className="flex-1 py-1 rounded-[6px] bg-[#1219F7] text-[10px] font-bold text-white">확인</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'writing',
      title: 'UX 라이팅 가이드',
      category: '기초 규격',
      badge: '노션 6대 표준',
      icon: MessageSquare,
      desc: '타이틀/설명/유의사항/버튼(~하기) · 자주 쓰는 단어 7종 표기',
      renderPreview: () => (
        <div className="w-full h-full flex items-center justify-center select-none px-4">
          {/* Single Simple Writing Guideline Pill */}
          <div className="px-4 py-2.5 rounded-[12px] bg-[#E8F3FF] border border-[#3182F6]/30 text-[13px] font-bold text-[#1B64DA] flex items-center gap-2 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#3182F6]" />
            <span>출발지를 검색해 주세요</span>
          </div>
        </div>
      ),
    },
    {
      id: 'colors',
      title: '색상 토큰 (Color Tokens)',
      category: '기초 규격',
      icon: Palette,
      desc: '키컬러 #1219F7 · 에러 #F34766 · 12개 시맨틱 토큰',
      renderPreview: () => (
        <div className="w-full h-full flex items-center justify-center gap-3 px-6 select-none">
          {/* Simple 3-Color Swatches */}
          <div className="flex flex-col items-center gap-1">
            <div className="w-10 h-10 rounded-full bg-[#1219F7] shadow-sm" />
            <span className="text-[10px] font-bold text-[#8B95A1]">#1219F7</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-10 h-10 rounded-full bg-[#595EF9] shadow-sm" />
            <span className="text-[10px] font-bold text-[#8B95A1]">#595EF9</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-10 h-10 rounded-full bg-[#F34766] shadow-sm" />
            <span className="text-[10px] font-bold text-[#8B95A1]">#F34766</span>
          </div>
        </div>
      ),
    },
    {
      id: 'typography',
      title: '타이포그래피 (Typography)',
      category: '기초 규격',
      badge: 'Pretendard',
      icon: Type,
      desc: 'Pretendard · 짝수 6종 룰 (뱃지 10/11px 예외 허용)',
      renderPreview: () => (
        <div className="w-full h-full flex flex-col items-center justify-center gap-1 select-none">
          {/* Simple Big Typography Text */}
          <div className="text-[38px] font-extrabold text-[#191F28] leading-none tracking-tight">
            다Aa
          </div>
          <div className="text-[11px] font-bold text-[#8B95A1] mt-1 tracking-wide">
            Pretendard
          </div>
        </div>
      ),
    },
    {
      id: 'spacing-radius',
      title: '여백 및 라운드 (Spacing & Radius)',
      category: '기초 규격',
      icon: ShieldCheck,
      desc: '기본 radius 10px · 카드 규격 · 8px / 16px 핵심 여백 체계',
      renderPreview: () => (
        <div className="w-full h-full flex items-center justify-center gap-3 px-4 select-none">
          {/* Simple Spacing & Radius Visualizer */}
          <div className="w-[96px] h-[64px] bg-white border-2 border-[#1219F7] rounded-[10px] flex flex-col items-center justify-center shadow-xs">
            <span className="text-[11px] font-extrabold text-[#1219F7]">r: 10px</span>
            <span className="text-[9px] font-bold text-[#8B95A1]">기본 표준</span>
          </div>
          <div className="flex flex-col gap-1.5 justify-center">
            <div className="flex items-center gap-1.5">
              <span className="w-6 text-[9px] font-bold text-[#8B95A1]">8px</span>
              <div className="w-10 h-1.5 bg-[#3182F6] rounded-full" />
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-6 text-[9px] font-bold text-[#1219F7]">16px</span>
              <div className="w-16 h-1.5 bg-[#1219F7] rounded-full" />
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-8">
      {/* Intro Header: Toss Style without Top Badge */}
      <div className="space-y-2">
        <h1 className="text-[32px] md:text-[38px] font-extrabold text-[#191F28] tracking-tight leading-tight">
          컴포넌트 모아보기
        </h1>
        <p className="text-[15px] md:text-[16px] text-[#4E5968] max-w-2xl leading-relaxed">
          다이사(da24) 서비스에 적용되는 레이아웃 규격, 버튼, 모달, 입력창, 컬러 및 타이포그래피 토큰을 한눈에 탐색하고 세부 규칙을 확인하세요.
        </p>
      </div>

      {/* Grid of Component Cards (Directly rendered without tab buttons) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.id}
              onClick={() => onSelectTab(card.id)}
              className="group bg-white rounded-[24px] border border-[#E5E8EB] overflow-hidden hover:border-[#1219F7]/40 hover:shadow-[0_12px_32px_rgba(18,25,247,0.08)] transition-all duration-200 cursor-pointer flex flex-col justify-between shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
            >
              {/* Preview Window Area */}
              <div className="h-[160px] bg-[#F9FAFB] border-b border-[#F2F4F6] flex items-center justify-center p-4 relative group-hover:bg-[#F4F6F9] transition-colors">
                {card.badge && (
                  <span className="absolute top-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded-full bg-white text-[#191F28] border border-[#E5E8EB] shadow-2xs">
                    {card.badge}
                  </span>
                )}
                {card.renderPreview()}
              </div>

              {/* Card Bottom Content Area */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-7 h-7 rounded-[8px] bg-[#F2F4F6] flex items-center justify-center text-[#4E5968] group-hover:bg-[#E8F3FF] group-hover:text-[#1219F7] transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[12px] font-bold text-[#8B95A1]">
                      {card.category}
                    </span>
                  </div>
                  <h3 className="text-[17px] font-extrabold text-[#191F28] group-hover:text-[#1219F7] transition-colors tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-[13px] text-[#6B7684] mt-1.5 line-clamp-2 leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-4 mt-2 border-t border-[#F2F4F6] flex items-center justify-between text-[13px] font-bold text-[#4E5968] group-hover:text-[#1219F7] transition-colors">
                  <span>자세히 보기</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
