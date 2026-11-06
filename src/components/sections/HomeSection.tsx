import React from 'react';

interface HomeSectionProps {
  onSelectTab: (tabId: string) => void;
}

interface ComponentCard {
  id: string;
  title: string;
  category: string;
  desc: string;
  renderPreview: () => React.ReactNode;
}

export const HomeSection: React.FC<HomeSectionProps> = ({ onSelectTab }) => {
  const cards: ComponentCard[] = [
    {
      id: 'toss-showcase',
      title: '토스증권 화면 예시',
      category: '실전 화면',
      desc: '토스증권 주식 골라보기 & 종목 주문 패널 실전 재현 UI',
      renderPreview: () => (
        <div className="w-full h-full flex flex-col justify-between p-3 select-none bg-[#F9FAFB] rounded-[12px]">
          <div className="flex items-center justify-between border-b border-[#EBEEF2] pb-1.5">
            <div className="flex items-center gap-1.5">
              <span className="w-4 h-4 rounded-full bg-[#111] flex items-center justify-center text-[8px] text-white font-bold">T</span>
              <span className="text-[11px] font-extrabold text-text-01">토스증권</span>
            </div>
            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-blue-100 text-main-02">실전 예시</span>
          </div>
          <div className="space-y-1">
            <div className="flex items-center justify-between text-[10px]">
              <div className="flex items-center gap-1">
                <span className="w-3.5 h-3.5 rounded-full bg-[#034EA2] text-[7px] text-white flex items-center justify-center font-bold">삼</span>
                <span className="font-bold text-text-01">삼성전자</span>
              </div>
              <span className="text-[#3182F6] font-bold">190,400원</span>
            </div>
            <div className="w-full h-1.5 bg-[#EBEEF2] rounded-full overflow-hidden">
              <div className="w-3/4 h-full bg-[#3182F6] rounded-full" />
            </div>
          </div>
          <div className="w-full h-[24px] bg-[#F04452] text-white rounded-[6px] flex items-center justify-center text-[10px] font-bold shadow-2xs">
            구매하기
          </div>
        </div>
      ),
    },
    {
      id: 'layout',
      title: '작업 규격',
      category: '레이아웃',
      desc: '모바일 360px(여백 24px) · 웹 1200px(헤더·본문·버튼 640px)',
      renderPreview: () => (
        <div className="w-full h-full flex items-center justify-center gap-3 px-4">
          {/* Mini Mobile Preview */}
          <div className="w-[70px] h-[96px] bg-white rounded-[10px] border-2 border-text-01/10 shadow-xs flex flex-col justify-between p-1.5 shrink-0">
            <div className="h-1.5 w-8 mx-auto bg-text-04/30 rounded-full" />
            <div className="space-y-1 my-auto">
              <div className="h-2 bg-main-04 border border-main-01/40 rounded-[2px]" />
              <div className="h-2 bg-etc-03 rounded-[2px]" />
            </div>
            <div className="h-2.5 bg-main-01 rounded-[1px] w-full" />
          </div>

          {/* Mini Web 640 Preview */}
          <div className="w-[130px] h-[96px] bg-white rounded-[10px] border-2 border-text-01/10 shadow-xs flex flex-col justify-between p-2">
            <div className="h-2 w-16 mx-auto bg-main-01 rounded-[2px]" />
            <div className="w-[90px] mx-auto space-y-1 my-auto">
              <div className="h-2 bg-main-04 border border-main-01/30 rounded-[2px]" />
              <div className="h-2 bg-etc-03 rounded-[2px]" />
              <div className="h-2 bg-etc-03 rounded-[2px]" />
            </div>
            <div className="h-2.5 w-[90px] mx-auto bg-main-01 rounded-[2px]" />
          </div>
        </div>
      ),
    },
    {
      id: 'buttons',
      title: '버튼',
      category: '컴포넌트',
      desc: '본문 표준 Public 312(640) · 모달 2분할 · 필터 칩',
      renderPreview: () => (
        <div className="w-full h-full flex flex-col items-center justify-center gap-2 px-6">
          <div className="w-[130px] h-[34px] bg-[#1219F7] text-white rounded-[8px] flex items-center justify-center text-[12px] font-bold shadow-xs select-none">
            확인하기
          </div>
          <div className="w-[130px] h-[34px] bg-etc-03 text-text-02 rounded-[8px] flex items-center justify-center text-[12px] font-bold select-none">
            취소
          </div>
        </div>
      ),
    },
    {
      id: 'writing',
      title: 'UX 라이팅',
      category: '보이스앤톤',
      desc: '타이틀/설명/유의사항/버튼(~하기) · 자주 쓰는 단어 7종 표기',
      renderPreview: () => (
        <div className="w-full h-full flex flex-col items-center justify-center gap-2 px-6 select-none">
          <div className="w-[160px] p-2 rounded-[8px] bg-emerald-50 border border-emerald-200 text-[11px] font-bold text-emerald-800 flex items-center gap-1.5 shadow-2xs">
            <span className="text-emerald-600 font-bold">✓</span>
            <span className="truncate">방문견적 신청하기</span>
          </div>
          <div className="w-[160px] p-2 rounded-[8px] bg-rose-50 border border-rose-200 text-[11px] font-bold text-rose-800 flex items-center gap-1.5 shadow-2xs opacity-80">
            <span className="text-rose-600 font-bold">✕</span>
            <span className="line-through decoration-rose-500 truncate">확인 / 완료!</span>
          </div>
        </div>
      ),
    },
    {
      id: 'modals',
      title: '모달 및 시트',
      category: '오버레이',
      desc: '1200px 이상 중앙 고정 모달 & 360~1199px 바텀시트',
      renderPreview: () => (
        <div className="w-full h-full flex items-center justify-center px-4">
          <div className="w-[160px] bg-white rounded-[12px] shadow-md border border-[#EBEEF2] p-3 space-y-2 text-center select-none">
            <div className="text-[11px] font-bold text-text-01 leading-tight">신청을 취소할까요?</div>
            <div className="text-[9px] text-text-04 leading-tight">작성 중인 내용은 저장되지 않아요.</div>
            <div className="flex gap-1 pt-0.5">
              <div className="flex-1 py-1 rounded-[6px] bg-etc-03 text-[10px] font-bold text-text-02">취소</div>
              <div className="flex-1 py-1 rounded-[6px] bg-[#1219F7] text-[10px] font-bold text-white">확인</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'inputs',
      title: '입력창',
      category: '컴포넌트',
      desc: '높이 56px · 포커스 블루 · 에러(#F34766) 스트로크',
      renderPreview: () => (
        <div className="w-full h-full flex flex-col items-center justify-center gap-2 px-6">
          {/* Normal/Focus Input */}
          <div className="w-[160px] h-[32px] bg-white rounded-[8px] border-2 border-main-01 px-2.5 flex items-center justify-between text-[11px] text-text-01 shadow-2xs select-none">
            <span className="truncate">서울시 강남구</span>
            <span className="w-1.5 h-3 bg-main-01 animate-pulse" />
          </div>
          {/* Error Input (#F34766) */}
          <div className="w-[160px] h-[32px] bg-white rounded-[8px] border-2 border-[#F34766] px-2.5 flex items-center text-[11px] text-[#F34766] shadow-2xs select-none">
            <span className="truncate text-[10px]">입력 형식이 올바르지 않아요</span>
          </div>
        </div>
      ),
    },
    {
      id: 'colors',
      title: '색상',
      category: '스타일',
      desc: '키컬러 #1219F7 · 에러 #F34766 · 12개 시맨틱 토큰',
      renderPreview: () => (
        <div className="w-full h-full flex items-center justify-center gap-2 px-6">
          <div className="flex flex-col items-center gap-1">
            <div className="w-9 h-9 rounded-full bg-[#1219F7] shadow-xs" />
            <span className="text-[9px] font-bold text-text-04">main</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-9 h-9 rounded-full bg-[#595EF9] shadow-xs" />
            <span className="text-[9px] font-bold text-text-04">sub</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-9 h-9 rounded-full bg-[#F34766] shadow-xs" />
            <span className="text-[9px] font-bold text-text-04">error</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-9 h-9 rounded-full bg-[#121212] shadow-xs" />
            <span className="text-[9px] font-bold text-text-04">text</span>
          </div>
        </div>
      ),
    },
    {
      id: 'typography',
      title: '타이포그래피',
      category: '스타일',
      desc: 'Pretendard · 짝수 6종 (뱃지 10/11px 예외 허용)',
      renderPreview: () => (
        <div className="w-full h-full flex flex-col items-center justify-center gap-1 select-none">
          <div className="text-[32px] font-bold text-main-01 leading-none tracking-tight">
            다Aa
          </div>
          <div className="flex items-center gap-1.5 text-[11px] text-text-03 mt-1 font-medium">
            <span className="font-bold text-text-01">Pretendard</span>
            <span>·</span>
            <span>24 / 20 / 16 / 14</span>
          </div>
        </div>
      ),
    },
    {
      id: 'spacing-radius',
      title: '여백 및 라운드',
      category: '기초 규격',
      desc: '0px(플로팅) · 10px(버튼/인풋) · 16px(모달) 8단계 라운드',
      renderPreview: () => (
        <div className="w-full h-full flex items-center justify-center gap-2.5 px-4 select-none">
          <div className="w-10 h-10 bg-white border-2 border-etc-02 rounded-none flex items-center justify-center text-[10px] font-bold text-text-04 shadow-2xs">
            0
          </div>
          <div className="w-10 h-10 bg-white border-2 border-etc-02 rounded-[8px] flex items-center justify-center text-[10px] font-bold text-text-04 shadow-2xs">
            8
          </div>
          <div className="w-10 h-10 bg-main-04 border-2 border-main-01 rounded-[10px] flex items-center justify-center text-[10px] font-bold text-main-01 shadow-xs">
            10
          </div>
          <div className="w-10 h-10 bg-white border-2 border-etc-02 rounded-[16px] flex items-center justify-center text-[10px] font-bold text-text-04 shadow-2xs">
            16
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-12">
      {/* Intro Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[12px] font-bold bg-main-04 text-main-01 border border-main-02/20">
          다이사 공식 디자인시스템
        </div>
        <h1 className="text-[32px] md:text-[40px] font-extrabold text-text-01 tracking-tight leading-tight">
          컴포넌트 모아보기
        </h1>
        <p className="text-[16px] text-text-03 max-w-2xl leading-relaxed">
          다이사 서비스에 적용되는 레이아웃 규격, 버튼, 모달, 입력창, 컬러 및 타이포그래피 토큰을 한눈에 탐색하고 세부 규칙을 확인하세요.
        </p>
      </div>

      {/* Grid of Component Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => onSelectTab(card.id)}
            className="group flex flex-col bg-white rounded-[20px] overflow-hidden border border-[#EBEEF2] shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-200 cursor-pointer text-left"
          >
            {/* Visual Preview Box */}
            <div className="h-[180px] bg-[#F8F9FA] border-b border-[#EBEEF2] flex items-center justify-center relative overflow-hidden group-hover:bg-[#F2F4F7] transition-colors">
              {card.renderPreview()}
            </div>

            {/* Content Area */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
              <div>
                <span className="text-[11px] font-bold text-main-01 tracking-wide">
                  {card.category}
                </span>
                <h3 className="text-[18px] font-bold text-text-01 mt-1 group-hover:text-main-01 transition-colors">
                  {card.title}
                </h3>
                <p className="text-[13px] text-text-03 mt-1 leading-snug">
                  {card.desc}
                </p>
              </div>

              <div className="pt-2 border-t border-[#F2F4F6] flex items-center justify-between text-[13px] text-main-01 font-bold">
                <span>규칙 및 코드 보기</span>
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
