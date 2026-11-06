import React, { useState } from 'react';
import { ArrowRight, Layers, Sliders, Type, Palette, MousePointerClick, MessageSquare, Maximize2, ShieldCheck, FolderDown, Download, FileText } from 'lucide-react';

interface HomeSectionProps {
  onSelectTab: (tabId: string) => void;
}

interface ComponentCard {
  id: string;
  title: string;
  category: '기초 규격' | '컴포넌트' | '스타일' | '보이스앤톤' | '문서 & 다운로드';
  desc: string;
  badge?: string;
  icon: React.ComponentType<{ className?: string }>;
  renderPreview: () => React.ReactNode;
}

export const HomeSection: React.FC<HomeSectionProps> = ({ onSelectTab }) => {
  const [filterCategory, setFilterCategory] = useState<string>('전체');

  const filterTabs = ['전체', '기초 규격', '컴포넌트', '스타일', '보이스앤톤', '문서 & 다운로드'];

  const cards: ComponentCard[] = [
    {
      id: 'archive',
      title: '자료실 (MD 명세서 다운로드)',
      category: '문서 & 다운로드',
      badge: 'v1.2 원문',
      icon: FolderDown,
      desc: 'DAISA_DESIGN_SYSTEM.md 공식 명세서 원본 다운로드 및 미리보기',
      renderPreview: () => (
        <div className="w-full h-full flex flex-col justify-between p-4 select-none bg-[#F9FAFB] rounded-[14px]">
          <div className="flex items-center justify-between border-b border-[#EBEEF2] pb-2">
            <div className="flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-[#3182F6]" />
              <span className="text-[12px] font-extrabold text-[#191F28]">DAISA_DESIGN_SYSTEM.md</span>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#E8F3FF] text-[#1B64DA]">.md</span>
          </div>
          <div className="space-y-1 text-[11px] text-[#6B7684]">
            <div>• AI 에이전트 & 엔지니어 공식 헌법</div>
            <div>• 360px 모바일 & 1200px 웹 640px</div>
            <div>• 6대 UX 라이팅 표 전체 수록</div>
          </div>
          <div className="w-full h-[28px] bg-[#3182F6] text-white rounded-[8px] flex items-center justify-center gap-1.5 text-[11px] font-bold shadow-2xs">
            <Download className="w-3 h-3" />
            <span>원클릭 다운로드</span>
          </div>
        </div>
      ),
    },
    {
      id: 'layout',
      title: '작업 규격 (레이아웃)',
      category: '기초 규격',
      badge: '절대 규칙',
      icon: Maximize2,
      desc: '모바일 360px (여백 24px) · 웹 1200px (헤더·본문·버튼 640px)',
      renderPreview: () => (
        <div className="w-full h-full flex items-center justify-center gap-3 px-4 select-none">
          {/* Mini Mobile Preview */}
          <div className="w-[68px] h-[96px] bg-white rounded-[10px] border border-[#E5E8EB] shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex flex-col justify-between p-1.5 shrink-0">
            <div className="h-1 w-6 mx-auto bg-[#D1D6DB] rounded-full" />
            <div className="space-y-1 my-auto">
              <div className="h-2 bg-[#E8F3FF] border border-[#3182F6]/30 rounded-[2px]" />
              <div className="h-2 bg-[#F2F4F6] rounded-[2px]" />
            </div>
            <div className="h-2.5 bg-[#1219F7] rounded-[2px] w-full" />
          </div>

          {/* Mini Web 640 Preview */}
          <div className="w-[124px] h-[96px] bg-white rounded-[10px] border border-[#E5E8EB] shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex flex-col justify-between p-2">
            <div className="h-1.5 w-14 mx-auto bg-[#1219F7] rounded-[2px]" />
            <div className="w-[84px] mx-auto space-y-1 my-auto">
              <div className="h-2 bg-[#E8F3FF] border border-[#3182F6]/30 rounded-[2px]" />
              <div className="h-2 bg-[#F2F4F6] rounded-[2px]" />
              <div className="h-2 bg-[#F2F4F6] rounded-[2px]" />
            </div>
            <div className="h-2.5 w-[84px] mx-auto bg-[#1219F7] rounded-[2px]" />
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
        <div className="w-full h-full flex flex-col items-center justify-center gap-2 px-6 select-none">
          <div className="w-[140px] h-[36px] bg-[#1219F7] text-white rounded-[10px] flex items-center justify-center text-[12px] font-bold shadow-sm">
            견적 신청하기
          </div>
          <div className="w-[140px] h-[36px] bg-[#F2F4F6] text-[#4E5968] rounded-[10px] flex items-center justify-center text-[12px] font-bold">
            이전으로
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
        <div className="w-full h-full flex flex-col items-center justify-center gap-2 px-6 select-none">
          <div className="w-[160px] h-[34px] bg-white rounded-[9px] border-2 border-[#1219F7] px-2.5 flex items-center justify-between text-[11px] text-[#191F28] shadow-2xs">
            <span className="truncate">서울시 강남구 테헤란로</span>
            <span className="w-1.5 h-3 bg-[#1219F7] animate-pulse" />
          </div>
          <div className="w-[160px] h-[34px] bg-white rounded-[9px] border-2 border-[#F34766] px-2.5 flex items-center text-[11px] text-[#F34766] shadow-2xs">
            <span className="truncate text-[10px]">올바른 주소를 입력해 주세요</span>
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
        <div className="w-full h-full flex items-center justify-center gap-2.5 px-4 select-none">
          <div className="w-9 h-9 bg-white border border-[#E5E8EB] rounded-none flex items-center justify-center text-[10px] font-bold text-[#8B95A1] shadow-2xs">
            0
          </div>
          <div className="w-9 h-9 bg-white border border-[#E5E8EB] rounded-[8px] flex items-center justify-center text-[10px] font-bold text-[#8B95A1] shadow-2xs">
            8
          </div>
          <div className="w-9 h-9 bg-[#E8F3FF] border border-[#3182F6]/30 rounded-[10px] flex items-center justify-center text-[10px] font-bold text-[#1B64DA] shadow-xs">
            10
          </div>
          <div className="w-9 h-9 bg-white border border-[#E5E8EB] rounded-[16px] flex items-center justify-center text-[10px] font-bold text-[#8B95A1] shadow-2xs">
            16
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

      {/* Toss-Style Filter Chips Bar */}
      <div className="flex flex-wrap items-center gap-2 pt-1 border-b border-[#E5E8EB] pb-4">
        {filterTabs.map((tab) => {
          const isSelected = filterCategory === tab;
          return (
            <button
              key={tab}
              type="button"
              onClick={() => setFilterCategory(tab)}
              className={`px-4 py-2 rounded-full text-[14px] transition-all select-none ${
                isSelected
                  ? 'bg-[#191F28] text-white font-bold shadow-sm'
                  : 'bg-white border border-[#E5E8EB] text-[#4E5968] font-medium hover:bg-[#F2F4F6] hover:text-[#191F28]'
              }`}
            >
              {tab}
            </button>
          );
        })}
        <span className="text-[13px] text-[#8B95A1] ml-auto font-medium hidden sm:inline-block">
          총 {filteredCards.length}개 가이드
        </span>
      </div>

      {/* Grid of Component Cards (Toss Card Aesthetics) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.id}
              onClick={() => onSelectTab(card.id)}
              className="group flex flex-col bg-white rounded-[22px] overflow-hidden border border-[#E5E8EB] shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-200 cursor-pointer text-left"
            >
              {/* Visual Preview Box */}
              <div className="h-[180px] bg-[#F9FAFB] border-b border-[#F2F4F6] flex items-center justify-center relative overflow-hidden group-hover:bg-[#F2F4F6] transition-colors">
                {card.renderPreview()}

                {card.badge && (
                  <span className="absolute top-3.5 right-3.5 text-[11px] font-bold px-2 py-0.5 rounded-full bg-white/90 text-[#3182F6] border border-[#E5E8EB] shadow-2xs backdrop-blur-sm">
                    {card.badge}
                  </span>
                )}
              </div>

              {/* Content Area */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-center gap-1.5 text-[12px] font-bold text-[#3182F6]">
                    <Icon className="w-3.5 h-3.5" />
                    <span>{card.category}</span>
                  </div>
                  <h3 className="text-[18px] font-bold text-[#191F28] mt-1 group-hover:text-[#3182F6] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-[13px] text-[#6B7684] mt-1.5 leading-snug">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#F2F4F6] flex items-center justify-between text-[13px] text-[#3182F6] font-bold">
                  <span>규칙 및 코드 보기</span>
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
