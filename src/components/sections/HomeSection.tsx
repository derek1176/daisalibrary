import React, { useState } from 'react';
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
  Search,
  AlertCircle
} from 'lucide-react';

interface HomeSectionProps {
  onSelectTab: (tabId: string) => void;
}

interface ComponentCard {
  id: string;
  title: string;
  category: '기초 규격' | '컴포넌트' | '스타일' | '보이스앤톤';
  desc: string;
  badge?: string;
  icon: React.ComponentType<{ className?: string }>;
  renderPreview: () => React.ReactNode;
}

export const HomeSection: React.FC<HomeSectionProps> = ({ onSelectTab }) => {
  const [filterCategory, setFilterCategory] = useState<string>('전체');

  const filterTabs = ['전체', '기초 규격', '컴포넌트', '스타일', '보이스앤톤'];

  const cards: ComponentCard[] = [
    {
      id: 'layout',
      title: '작업 규격 (레이아웃)',
      category: '기초 규격',
      badge: '절대 규칙',
      icon: Maximize2,
      desc: '모바일 360px (여백 24px) · 웹 1200px (헤더·본문·버튼 640px)',
      renderPreview: () => (
        <div className="w-full h-full flex items-center justify-center gap-3 px-3 select-none">
          {/* Mini Mobile 360 Canvas */}
          <div className="w-[76px] h-[106px] bg-white rounded-[10px] border border-[#D1D6DB] shadow-xs flex flex-col justify-between p-1.5 shrink-0 relative overflow-hidden">
            {/* Top Bar */}
            <div className="flex items-center justify-between pb-1 border-b border-[#F2F4F6]">
              <span className="text-[7px] font-extrabold text-[#191F28]">360 모바일</span>
              <span className="text-[6px] font-bold text-[#1B64DA] bg-[#E8F3FF] px-1 py-0.5 rounded-full">여백 24</span>
            </div>
            {/* Content with 24px margin indicators */}
            <div className="relative my-auto w-full py-1">
              <div className="w-full h-2.5 bg-[#F2F4F6] rounded-[2px] mb-1" />
              <div className="w-3/4 h-2 bg-[#E5E8EB] rounded-[2px]" />
              {/* Margin visualizers */}
              <div className="absolute inset-y-0 left-0 w-1 bg-[#F34766]/20 border-r border-[#F34766]/40" />
              <div className="absolute inset-y-0 right-0 w-1 bg-[#F34766]/20 border-l border-[#F34766]/40" />
            </div>
            {/* 312px Full Public CTA Button */}
            <div className="h-[14px] bg-[#1219F7] text-white rounded-[4px] flex items-center justify-center text-[7px] font-bold shadow-2xs">
              312 버튼
            </div>
          </div>

          {/* Mini Web 1200 Canvas */}
          <div className="w-[144px] h-[106px] bg-white rounded-[10px] border border-[#D1D6DB] shadow-xs flex flex-col justify-between p-1.5 shrink-0 relative overflow-hidden">
            {/* Top Bar */}
            <div className="flex items-center justify-between pb-1 border-b border-[#F2F4F6]">
              <span className="text-[7px] font-extrabold text-[#191F28]">1200 웹 캔버스</span>
              <span className="text-[6px] font-bold text-[#1B64DA] bg-[#E8F3FF] px-1 py-0.5 rounded-full">중앙 640 고정</span>
            </div>
            {/* 1200 Canvas with 280px side margins and 640px central area */}
            <div className="relative w-full h-[64px] bg-[#FAFBFD] rounded-[6px] border border-dashed border-[#D1D6DB] flex items-center justify-center overflow-hidden">
              {/* Left 280px margin visualizer */}
              <div className="absolute left-0 top-0 bottom-0 w-[24px] bg-[#F34766]/10 border-r border-[#F34766]/30 flex items-center justify-center">
                <span className="text-[5px] text-[#F34766] font-bold rotate-90">280</span>
              </div>
              {/* Right 280px margin visualizer */}
              <div className="absolute right-0 top-0 bottom-0 w-[24px] bg-[#F34766]/10 border-l border-[#F34766]/30 flex items-center justify-center">
                <span className="text-[5px] text-[#F34766] font-bold -rotate-90">280</span>
              </div>
              {/* Central 640px design area */}
              <div className="w-[82px] h-full bg-white shadow-2xs border-x border-[#3182F6]/40 p-1 flex flex-col justify-between z-10">
                <div className="h-1.5 w-10 mx-auto bg-[#191F28] rounded-[1px]" />
                <div className="space-y-0.5 my-auto">
                  <div className="h-1.5 w-full bg-[#E8F3FF] border border-[#3182F6]/30 rounded-[1px]" />
                  <div className="h-1.5 w-full bg-[#F2F4F6] rounded-[1px]" />
                </div>
                <div className="h-2.5 w-full bg-[#1219F7] text-white rounded-[2px] flex items-center justify-center text-[5px] font-bold">
                  640 CTA
                </div>
              </div>
            </div>
            {/* Bottom info */}
            <div className="text-[6px] text-center text-[#8B95A1] font-medium">
              헤더 · 폼 · 버튼 640px 내 배치
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'buttons',
      title: '버튼 (Public Button)',
      category: '컴포넌트',
      badge: '표준 56px',
      icon: MousePointerClick,
      desc: '본문 표준 Public 312(640) · 모달 2분할(136) · 필터 칩',
      renderPreview: () => (
        <div className="w-full h-full flex flex-col justify-center gap-2 px-4 select-none">
          {/* Main Public CTA Button (56px miniature) */}
          <div className="w-full h-[36px] bg-[#1219F7] hover:bg-[#0E15D4] text-white rounded-[10px] px-3 flex items-center justify-between shadow-[0_4px_12px_rgba(18,25,247,0.22)] transition-all">
            <span className="text-[11px] font-bold tracking-tight">견적 신청하기</span>
            <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center">
              <ArrowRight className="w-2.5 h-2.5 text-white" />
            </div>
          </div>

          {/* Modal 2-Segment Button Pair (48px miniature) */}
          <div className="flex items-center gap-2 w-full">
            <div className="flex-1 h-[30px] bg-[#F2F4F6] hover:bg-[#E5E8EB] text-[#4E5968] rounded-[8px] flex items-center justify-center text-[10px] font-bold transition-colors">
              이전으로
            </div>
            <div className="flex-1 h-[30px] bg-[#1219F7] text-white rounded-[8px] flex items-center justify-center text-[10px] font-bold shadow-2xs">
              선택 완료
            </div>
            {/* Pill Chip */}
            <div className="px-2.5 h-[30px] bg-[#E8F3FF] border border-[#3182F6]/20 text-[#1B64DA] rounded-full flex items-center justify-center text-[10px] font-bold whitespace-nowrap">
              필터
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'inputs',
      title: '입력창 (Form Input)',
      category: '컴포넌트',
      icon: Sliders,
      desc: '높이 56px · 포커스 블루 · 에러(#F34766) 스트로크',
      renderPreview: () => (
        <div className="w-full h-full flex flex-col justify-center gap-2 px-3 select-none">
          {/* Focused Search Input (Miniature of real Address Search) */}
          <div className="w-full bg-white rounded-[10px] border-2 border-[#1219F7] px-3 py-1.5 shadow-[0_2px_8px_rgba(18,25,247,0.08)]">
            <div className="flex items-center justify-between mb-0.5">
              <span className="text-[8px] font-bold text-[#1219F7]">출발지 주소</span>
              <span className="text-[7px] text-[#8B95A1]">필수</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 min-w-0">
                <span className="text-[11px] font-medium text-[#191F28] truncate">서울 강남구 테헤란로 152</span>
                <span className="w-0.5 h-3 bg-[#1219F7] animate-pulse" />
              </div>
              <Search className="w-3 h-3 text-[#1219F7] shrink-0 ml-1" />
            </div>
          </div>

          {/* Error Input (Stroke #F34766 with Helper Text) */}
          <div className="w-full bg-white rounded-[10px] border-2 border-[#F34766] px-3 py-1.5 shadow-[0_2px_8px_rgba(243,71,102,0.08)]">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-medium text-[#191F28]">010-0000-0000</span>
              <AlertCircle className="w-3 h-3 text-[#F34766] shrink-0" />
            </div>
            <div className="flex items-center gap-1 mt-0.5">
              <span className="text-[8px] font-bold text-[#F34766]">올바른 휴대폰 번호를 입력해 주세요</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'modals',
      title: '모달 및 바텀시트',
      category: '컴포넌트',
      badge: '반응형 1200px',
      icon: Layers,
      desc: '1200px 이상 중앙 고정 모달 & 360~1199px 바텀시트',
      renderPreview: () => (
        <div className="w-full h-full flex items-center justify-center px-4 select-none">
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
      category: '보이스앤톤',
      badge: '노션 6대 표준',
      icon: MessageSquare,
      desc: '타이틀/설명/유의사항/버튼(~하기) · 자주 쓰는 단어 7종 표기',
      renderPreview: () => (
        <div className="w-full h-full flex flex-col items-center justify-center gap-2 px-6 select-none">
          <div className="w-[160px] p-2 rounded-[10px] bg-[#E8F3FF] border border-[#3182F6]/20 text-[11px] font-bold text-[#1B64DA] flex items-center gap-1.5 shadow-2xs">
            <span className="text-[#3182F6] font-bold">✓</span>
            <span className="truncate">출발지를 검색해 주세요</span>
          </div>
          <div className="w-[160px] p-2 rounded-[10px] bg-[#FEEBED] border border-[#F34766]/20 text-[11px] font-bold text-[#D93442] flex items-center gap-1.5 shadow-2xs opacity-80">
            <span className="text-[#F34766] font-bold">✕</span>
            <span className="line-through decoration-[#F34766] truncate">검색해 주십시오.</span>
          </div>
        </div>
      ),
    },
    {
      id: 'colors',
      title: '색상 토큰 (Color Tokens)',
      category: '스타일',
      icon: Palette,
      desc: '키컬러 #1219F7 · 에러 #F34766 · 12개 시맨틱 토큰',
      renderPreview: () => (
        <div className="w-full h-full flex items-center justify-center gap-2.5 px-6 select-none">
          <div className="flex flex-col items-center gap-1">
            <div className="w-9 h-9 rounded-full bg-[#1219F7] shadow-sm" />
            <span className="text-[9px] font-bold text-[#8B95A1]">main</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-9 h-9 rounded-full bg-[#595EF9] shadow-sm" />
            <span className="text-[9px] font-bold text-[#8B95A1]">sub</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-9 h-9 rounded-full bg-[#F34766] shadow-sm" />
            <span className="text-[9px] font-bold text-[#8B95A1]">error</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-9 h-9 rounded-full bg-[#121212] shadow-sm" />
            <span className="text-[9px] font-bold text-[#8B95A1]">text</span>
          </div>
        </div>
      ),
    },
    {
      id: 'typography',
      title: '타이포그래피 (Typography)',
      category: '스타일',
      badge: 'Pretendard',
      icon: Type,
      desc: 'Pretendard · 짝수 6종 룰 (뱃지 10/11px 예외 허용)',
      renderPreview: () => (
        <div className="w-full h-full flex flex-col items-center justify-center gap-1 select-none">
          <div className="text-[34px] font-extrabold text-[#191F28] leading-none tracking-tight">
            다Aa
          </div>
          <div className="flex items-center gap-1.5 text-[11px] text-[#8B95A1] mt-1.5 font-medium">
            <span className="font-bold text-[#333D4B]">Pretendard</span>
            <span>·</span>
            <span>24 / 20 / 16 / 14</span>
          </div>
        </div>
      ),
    },
    {
      id: 'spacing-radius',
      title: '여백 및 라운드 (Spacing & Radius)',
      category: '기초 규격',
      icon: ShieldCheck,
      desc: '0px(플로팅) · 10px(버튼/인풋) · 16px(모달) 8단계 라운드',
      renderPreview: () => (
        <div className="w-full h-full flex flex-col justify-center gap-2 px-3 select-none">
          {/* Spacing Bars visualizer (TDS / Seed Style) */}
          <div className="space-y-1 bg-[#F9FAFB] p-2 rounded-[10px] border border-[#E5E8EB]">
            <div className="flex items-center justify-between text-[8px]">
              <span className="font-bold text-[#8B95A1] w-7">4px</span>
              <div className="flex-1 mx-2 h-1 bg-[#E5E8EB] rounded-full overflow-hidden">
                <div className="h-full bg-[#D1D6DB] w-1/4 rounded-full" />
              </div>
              <span className="text-[#8B95A1] font-mono text-[7px]">x1</span>
            </div>
            <div className="flex items-center justify-between text-[8px]">
              <span className="font-bold text-[#3182F6] w-7">8px</span>
              <div className="flex-1 mx-2 h-1.5 bg-[#E8F3FF] rounded-full overflow-hidden">
                <div className="h-full bg-[#3182F6] w-1/2 rounded-full" />
              </div>
              <span className="text-[#3182F6] font-bold font-mono text-[7px]">x2 핵심</span>
            </div>
            <div className="flex items-center justify-between text-[8px]">
              <span className="font-bold text-[#1219F7] w-7">16px</span>
              <div className="flex-1 mx-2 h-1.5 bg-[#E8F3FF] rounded-full overflow-hidden">
                <div className="h-full bg-[#1219F7] w-full rounded-full" />
              </div>
              <span className="text-[#1219F7] font-bold font-mono text-[7px]">x4 핵심</span>
            </div>
          </div>

          {/* 3 Core Radii Showcase: R0 vs R10 vs R16 */}
          <div className="flex items-center justify-center gap-1.5">
            <div className="h-5 px-1.5 bg-white border border-[#D1D6DB] rounded-none flex items-center justify-center text-[7px] font-bold text-[#8B95A1]">
              R0 (플로팅)
            </div>
            <div className="h-5 px-2 bg-[#E8F3FF] border-2 border-[#1219F7] rounded-[10px] flex items-center justify-center text-[7px] font-extrabold text-[#1219F7] shadow-xs">
              R10 (버튼/인풋)
            </div>
            <div className="h-5 px-1.5 bg-white border border-[#D1D6DB] rounded-[16px] flex items-center justify-center text-[7px] font-bold text-[#8B95A1]">
              R16 (모달)
            </div>
          </div>
        </div>
      ),
    },
  ];

  const filteredCards = filterCategory === '전체'
    ? cards
    : cards.filter(card => card.category === filterCategory);

  return (
    <div className="space-y-10">
      {/* Intro Header: Toss Style */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[12px] font-bold bg-[#E8F3FF] text-[#1B64DA]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#3182F6]" />
          다이사 고객향 디자인시스템
        </div>
        <h1 className="text-[32px] md:text-[38px] font-extrabold text-[#191F28] tracking-tight leading-tight">
          컴포넌트 모아보기
        </h1>
        <p className="text-[16px] text-[#4E5968] max-w-2xl leading-relaxed">
          다이사(da24) 서비스에 적용되는 레이아웃 규격, 버튼, 모달, 입력창, 컬러 및 타이포그래피 토큰을 한눈에 탐색하고 세부 규칙을 확인하세요.
        </p>
      </div>

      {/* Category Filter Tabs: Toss Minimal Pill Buttons */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
        {filterTabs.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilterCategory(cat)}
            className={`px-4 py-2 rounded-full text-[13px] font-bold transition-all whitespace-nowrap cursor-pointer select-none ${
              filterCategory === cat
                ? 'bg-[#191F28] text-white shadow-sm'
                : 'bg-white text-[#6B7684] hover:bg-[#F2F4F6] hover:text-[#191F28] border border-[#E5E8EB]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid of Component Cards (Toss Style with subtle lift shadow) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.id}
              onClick={() => onSelectTab(card.id)}
              className="group bg-white rounded-[24px] border border-[#E5E8EB] overflow-hidden hover:border-[#1219F7]/40 hover:shadow-[0_12px_32px_rgba(18,25,247,0.08)] transition-all duration-200 cursor-pointer flex flex-col justify-between shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
            >
              {/* Preview Window Area */}
              <div className="h-[170px] bg-[#F9FAFB] border-b border-[#F2F4F6] flex items-center justify-center p-4 relative group-hover:bg-[#F4F6F9] transition-colors">
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
