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
      desc: '플로팅 360 · 본문 312 · 모달 2분할 · 3분할 세그먼트',
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
      id: 'modals',
      title: '모달 및 시트',
      category: '오버레이',
      desc: '너비 312px 중앙 모달 다이얼로그 & 바텀시트',
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
      desc: 'Pretendard 단일 서체 · 6단계 짝수 폰트 규격',
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
    {
      id: 'inputs',
      title: '선택 및 제어',
      category: '컴포넌트',
      desc: '층수 선택 드롭다운 · 스테퍼 증감기 · 태그 칩',
      renderPreview: () => (
        <div className="w-full h-full flex flex-col items-center justify-center gap-2 px-6 select-none">
          <div className="flex items-center gap-2">
            <div className="px-2.5 py-1 rounded-full bg-main-01 text-white text-[10px] font-bold">
              선택됨
            </div>
            <div className="px-2.5 py-1 rounded-full bg-white border border-etc-02 text-text-03 text-[10px] font-bold">
              옵션
            </div>
          </div>
          <div className="w-[140px] h-[30px] rounded-[8px] bg-white border border-etc-02 flex items-center justify-between px-2 text-[11px] text-text-02 shadow-2xs">
            <span>수량 선택</span>
            <span className="text-[9px] text-text-04">▼</span>
          </div>
        </div>
      ),
    },
    {
      id: 'modals',
      title: '바텀시트',
      category: '오버레이',
      desc: '모바일 하단 슬라이드 시트 (360px · 높이 56px 리스트)',
      renderPreview: () => (
        <div className="w-full h-full flex items-end justify-center px-4">
          <div className="w-[170px] h-[76px] bg-white rounded-t-[14px] border-t-2 border-x-2 border-text-01/10 shadow-md p-2.5 flex flex-col justify-between select-none">
            <div className="w-8 h-1 bg-etc-02 rounded-full mx-auto" />
            <div className="space-y-1">
              <div className="h-2.5 bg-etc-04 rounded-[2px]" />
              <div className="h-2.5 bg-main-04 border border-main-01/20 rounded-[2px]" />
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-10">
      {/* Intro Header */}
      <div className="space-y-3">
        <h1 className="text-[32px] md:text-[36px] font-extrabold text-text-01 tracking-da24 leading-tight">
          컴포넌트 모아보기
        </h1>
        <p className="text-[16px] text-text-03 leading-relaxed max-w-2xl">
          다이사(da24) 디자인시스템의 공식 컴포넌트와 토큰 규격입니다.
          확인하고 싶은 카드를 클릭하면 상세 가이드와 인터랙티브 뷰어로 바로 이동합니다.
        </p>
      </div>

      {/* 3-Column Card Grid (Seed Design Style with Elegant Shadows) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div
            key={card.id + card.title}
            onClick={() => onSelectTab(card.id)}
            className="group flex flex-col bg-white rounded-[20px] border border-[#E5E8EB] overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:border-main-01/40 transition-all duration-200 cursor-pointer select-none"
          >
            {/* Visual Component Preview Box (Contrasting Crisp Surface) */}
            <div className="h-[148px] w-full bg-[#F7F8FA] border-b border-[#EBEFF5] flex items-center justify-center p-3 relative overflow-hidden group-hover:bg-[#F2F4F7] transition-colors">
              {card.renderPreview()}
            </div>

            {/* Card Content Footer */}
            <div className="p-4 flex flex-col gap-1.5 bg-white">
              <div className="flex items-center justify-between">
                <h3 className="text-[16px] font-bold text-text-01 group-hover:text-main-01 transition-colors">
                  {card.title}
                </h3>
                <span className="text-[11px] font-medium px-2 py-0.5 rounded-[6px] bg-etc-04 text-text-04 border border-etc-03">
                  {card.category}
                </span>
              </div>
              <p className="text-[12px] text-text-03 leading-relaxed line-clamp-2">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
