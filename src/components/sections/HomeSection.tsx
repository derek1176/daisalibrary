import React, { useState, useEffect } from 'react';
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
  CheckCircle2,
  MapPin,
  Sparkles,
  AlertTriangle,
  Smile
} from 'lucide-react';

interface HomeSectionProps {
  onSelectTab: (tabId: string) => void;
  mode?: 'customer' | 'partner';
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

export const HomeSection: React.FC<HomeSectionProps> = ({ onSelectTab, mode = 'customer' }) => {
  const isPartner = mode === 'partner';
  const [loadingShimmer, setLoadingShimmer] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingShimmer(false);
    }, 180);
    return () => clearTimeout(timer);
  }, [mode]);

  const customerCards: ComponentCard[] = [
    // 1. 색상 토큰
    {
      id: 'colors',
      title: '색상 토큰 (Color Tokens)',
      category: '기초 규격',
      icon: Palette,
      desc: '키컬러 #1219F7 · 에러 #F34766 · 12개 시맨틱 토큰',
      renderPreview: () => (
        <div className="w-full h-full flex items-center justify-center gap-3 px-6 select-none">
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

    // 2. 타이포그래피
    {
      id: 'typography',
      title: '타이포그래피 (Typography)',
      category: '기초 규격',
      badge: 'Pretendard',
      icon: Type,
      desc: 'Pretendard 단일 서체 · 짝수 6종 룰 (10/11px 배지 허용)',
      renderPreview: () => (
        <div className="w-full h-full flex flex-col items-center justify-center gap-1 select-none">
          <div className="text-[38px] font-extrabold text-[#191F28] leading-none tracking-tight">
            다Aa
          </div>
          <div className="text-[11px] font-bold text-[#8B95A1] mt-1 tracking-wide">
            Pretendard
          </div>
        </div>
      ),
    },

    // 3. 여백 및 라운드
    {
      id: 'spacing-radius',
      title: '여백 및 라운드 (Spacing & Radius)',
      category: '기초 규격',
      icon: ShieldCheck,
      desc: '기본 radius 10px · 카드 규격 · 8px / 16px 핵심 여백 체계',
      renderPreview: () => (
        <div className="w-full h-full flex items-center justify-center gap-3 px-4 select-none">
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

    // 4. 작업 규격
    {
      id: 'layout',
      title: '작업 규격 (레이아웃)',
      category: '기초 규격',
      badge: '절대 규칙',
      icon: Maximize2,
      desc: '모바일 360px (여백 24px) · 웹 1200px (헤더·본문·버튼 640px)',
      renderPreview: () => (
        <div className="w-full h-full flex items-center justify-center gap-4 select-none">
          <div className="w-[52px] h-[80px] bg-white rounded-[8px] border-2 border-[#191F28] flex flex-col justify-between p-1.5 shadow-2xs">
            <span className="text-[8px] font-bold text-[#8B95A1] text-center">360</span>
            <div className="h-1.5 bg-[#1219F7] rounded-[2px] w-full" />
          </div>
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

    // 5. 라이팅 가이드
    {
      id: 'writing',
      title: '라이팅 가이드',
      category: '기초 규격',
      badge: '노션 6대 표준',
      icon: MessageSquare,
      desc: '타이틀/설명/유의사항/버튼(~하기) · 자주 쓰는 단어 7종 표기',
      renderPreview: () => (
        <div className="w-full h-full flex items-center justify-center select-none px-4">
          <div className="px-4 py-2.5 rounded-[12px] bg-[#E8F3FF] border border-[#3182F6]/30 text-[13px] font-bold text-[#1B64DA] flex items-center gap-2 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#3182F6]" />
            <span>출발지를 검색해 주세요</span>
          </div>
        </div>
      ),
    },

    // 6. 아이콘
    {
      id: 'icons',
      title: '아이콘 (공식 300종)',
      category: '기초 규격',
      badge: 'SVG 다운로드',
      icon: Sparkles,
      desc: '이사·청소·파트너 150종 + 컨트롤러 150종 · 이모지 금지',
      renderPreview: () => (
        <div className="w-full h-full flex items-center justify-center gap-4 select-none">
          <div className="w-10 h-10 rounded-[10px] bg-[#F2F4F6] flex items-center justify-center text-[#1219F7] shadow-xs">
            <Sparkles className="w-5 h-5" />
          </div>
          <div className="w-10 h-10 rounded-[10px] bg-[#F2F4F6] flex items-center justify-center text-[#1219F7] shadow-xs">
            <Search className="w-5 h-5" />
          </div>
          <div className="w-10 h-10 rounded-[10px] bg-[#F2F4F6] flex items-center justify-center text-[#1219F7] shadow-xs">
            <CheckCircle2 className="w-5 h-5" />
          </div>
        </div>
      ),
    },

    // 7. 버튼
    {
      id: 'buttons',
      title: '버튼 (Public Button)',
      category: '핵심 컴포넌트',
      badge: '56px 인라인 표준',
      icon: MousePointerClick,
      desc: '높이 56px · Corner Radius 10px · 본문 인라인 Public CTA',
      renderPreview: () => (
        <div className="w-full h-full flex items-center justify-center select-none px-6">
          <div className="w-full max-w-[210px] h-[48px] bg-[#1219F7] rounded-[10px] flex items-center justify-center text-white text-[14px] font-bold shadow-md hover:bg-[#0E15D4] transition-colors">
            견적 신청하기
          </div>
        </div>
      ),
    },

    // 8. 입력창
    {
      id: 'inputs',
      title: '입력창 (Input Fields)',
      category: '핵심 컴포넌트',
      badge: '높이 56px / r:10px',
      icon: Sliders,
      desc: '높이 56px · Corner Radius 10px · 패딩 16px · 1px stroke',
      renderPreview: () => (
        <div className="w-full h-full flex items-center justify-center select-none px-6">
          <div className="w-full max-w-[210px] h-[48px] bg-white rounded-[10px] border border-[#D7DBE2] px-3.5 flex items-center justify-between text-[14px] shadow-xs">
            <span className="text-[#191F28] font-medium">강남구 역삼동 (16px)</span>
            <Search className="w-4 h-4 text-[#888888] shrink-0" />
          </div>
        </div>
      ),
    },

    // 9. 모달 및 바텀시트
    {
      id: 'modals',
      title: '모달 및 바텀시트 (Radius 16px)',
      category: '핵심 컴포넌트',
      badge: '312px / r:16px',
      icon: Layers,
      desc: '얼럿/컨펌 모달 (너비 312px · Radius 16px) · 바텀시트 상단 16px',
      renderPreview: () => (
        <div className="w-full h-full flex items-center justify-center px-4 select-none">
          <div className="w-[170px] bg-white rounded-[16px] shadow-lg border border-[#E5E8EB] p-3 space-y-2 text-center">
            <div className="text-[12px] font-bold text-[#191F28] leading-tight">신청을 취소하시겠습니까?</div>
            <div className="text-[9px] text-[#8B95A1] leading-tight">작성 중인 정보가 저장되지 않습니다.</div>
            <div className="flex gap-1.5 pt-0.5">
              <div className="flex-1 py-1.5 rounded-[10px] bg-[#F2F4F6] text-[10px] font-bold text-[#4E5968]">취소</div>
              <div className="flex-1 py-1.5 rounded-[10px] bg-[#1219F7] text-[10px] font-bold text-white">확인</div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const partnerCards: ComponentCard[] = [
    // 1. 색상 토큰
    {
      id: 'colors',
      title: '색상 토큰 (Partner Colors)',
      category: '기초 규격',
      icon: Palette,
      desc: '키컬러 #1219F7 · 보조 #595EF9 · 서브 #F7D915, #F34766',
      renderPreview: () => (
        <div className="w-full h-full flex items-center justify-center gap-3 px-6 select-none">
          <div className="flex flex-col items-center gap-1">
            <div className="w-10 h-10 rounded-[6px] bg-[#1219F7] shadow-sm" />
            <span className="text-[10px] font-bold text-[#8B95A1]">#1219F7</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-10 h-10 rounded-[6px] bg-[#595EF9] shadow-sm" />
            <span className="text-[10px] font-bold text-[#8B95A1]">#595EF9</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-10 h-10 rounded-[6px] bg-[#F7D915] shadow-sm border border-[#E5E8EB]" />
            <span className="text-[10px] font-bold text-[#8B95A1]">#F7D915</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-10 h-10 rounded-[6px] bg-[#F34766] shadow-sm" />
            <span className="text-[10px] font-bold text-[#8B95A1]">#F34766</span>
          </div>
        </div>
      ),
    },

    // 2. 타이포그래피
    {
      id: 'typography',
      title: '타이포그래피 (18px 기본 폰트)',
      category: '기초 규격',
      badge: '기본 18px / 12px 금지',
      icon: Type,
      desc: '현장 기사님 가독성 특화 · 기본 Body 1 18px · 최소 14px 캡션',
      renderPreview: () => (
        <div className="w-full h-full flex flex-col items-center justify-center gap-1.5 select-none">
          <div className="text-[34px] font-black text-[#191F28] leading-none tracking-tight">
            파트너 18px
          </div>
          <div className="text-[11px] font-bold text-[#1219F7] tracking-wide bg-[#E8F3FF] px-2.5 py-0.5 rounded-[4px] border border-[#3182F6]/30">
            기본 본문 18px / 12px 이하 사용 엄격 금지
          </div>
        </div>
      ),
    },

    // 3. 여백 및 라운드
    {
      id: 'spacing-radius',
      title: '여백 및 라운드 (B2B 직각 Radius 6px)',
      category: '기초 규격',
      badge: '★ Radius 6px 표준',
      icon: ShieldCheck,
      desc: 'B2B 전사 표준 Radius 6px · 서브 4px · 고객향 10px/16px 금지',
      renderPreview: () => (
        <div className="w-full h-full flex items-center justify-center gap-3 px-4 select-none">
          <div className="w-[96px] h-[64px] bg-white border-2 border-[#1219F7] rounded-[6px] flex flex-col items-center justify-center shadow-xs">
            <span className="text-[11px] font-extrabold text-[#1219F7]">r: 6px</span>
            <span className="text-[9px] font-bold text-[#8B95A1]">B2B 전사 표준</span>
          </div>
          <div className="w-[84px] h-[64px] bg-white border border-[#D7DBE2] rounded-[4px] flex flex-col items-center justify-center shadow-xs">
            <span className="text-[11px] font-bold text-[#191F28]">r: 4px</span>
            <span className="text-[9px] text-[#8B95A1]">보조 버튼/태그</span>
          </div>
        </div>
      ),
    },

    // 4. 작업 규격
    {
      id: 'layout',
      title: '작업 규격 (모바일 360 / 웹 1200)',
      category: '기초 규격',
      badge: '오더 컨테이너 627px',
      icon: Maximize2,
      desc: '모바일 360px (콘텐츠 312px) · 웹 1200px (오더 컨테이너 627px r:6)',
      renderPreview: () => (
        <div className="w-full h-full flex items-center justify-center gap-4 select-none">
          <div className="w-[52px] h-[80px] bg-white rounded-[6px] border-2 border-[#1219F7] flex flex-col justify-between p-1.5 shadow-2xs">
            <span className="text-[8px] font-bold text-[#8B95A1] text-center">312</span>
            <div className="h-1.5 bg-[#1219F7] rounded-[2px] w-full" />
          </div>
          <div className="w-[108px] h-[80px] bg-[#FAFBFD] rounded-[6px] border border-dashed border-[#D1D6DB] flex items-center justify-center p-1 relative">
            <div className="w-[58px] h-full bg-white rounded-[6px] border-2 border-[#1219F7] flex flex-col justify-between p-1.5 shadow-2xs">
              <span className="text-[8px] font-bold text-[#1219F7] text-center">627</span>
              <div className="h-1.5 bg-[#1219F7] rounded-[2px] w-full" />
            </div>
            <span className="absolute bottom-1 right-1.5 text-[7px] font-bold text-[#8B95A1]">1200</span>
          </div>
        </div>
      ),
    },

    // 5. 라이팅 가이드
    {
      id: 'writing',
      title: '라이팅 가이드 (공통 표준)',
      category: '기초 규격',
      badge: '노션 6대 표준',
      icon: MessageSquare,
      desc: '타이틀/설명/유의사항/버튼(~하기) · 자주 쓰는 단어 7종 표기',
      renderPreview: () => (
        <div className="w-full h-full flex items-center justify-center select-none px-4">
          <div className="px-4 py-2.5 rounded-[6px] bg-[#E8F3FF] border border-[#3182F6]/30 text-[13px] font-bold text-[#1B64DA] flex items-center gap-2 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#3182F6]" />
            <span>출발지를 검색해 주세요</span>
          </div>
        </div>
      ),
    },

    // 6. 아이콘
    {
      id: 'icons',
      title: '아이콘 (공식 300종)',
      category: '기초 규격',
      badge: 'SVG 다운로드',
      icon: Sparkles,
      desc: '이사·청소·파트너 150종 + 컨트롤러 150종 · 이모지 금지',
      renderPreview: () => (
        <div className="w-full h-full flex items-center justify-center gap-4 select-none">
          <div className="w-10 h-10 rounded-[6px] bg-[#F2F4F6] flex items-center justify-center text-[#1219F7] shadow-xs">
            <Sparkles className="w-5 h-5" />
          </div>
          <div className="w-10 h-10 rounded-[6px] bg-[#F2F4F6] flex items-center justify-center text-[#1219F7] shadow-xs">
            <Search className="w-5 h-5" />
          </div>
          <div className="w-10 h-10 rounded-[6px] bg-[#F2F4F6] flex items-center justify-center text-[#1219F7] shadow-xs">
            <CheckCircle2 className="w-5 h-5" />
          </div>
        </div>
      ),
    },

    // 7. 버튼
    {
      id: 'buttons',
      title: '버튼 (B2B Public CTA)',
      category: '핵심 컴포넌트',
      badge: '높이 56px / r:6px',
      icon: MousePointerClick,
      desc: '높이 56px · Corner Radius 6px · 18px Bold 서체 · 파트너 표준',
      renderPreview: () => (
        <div className="w-full h-full flex items-center justify-center select-none px-6">
          <div className="w-full max-w-[210px] h-[48px] bg-[#1219F7] rounded-[6px] flex items-center justify-center text-white text-[15px] font-bold shadow-md hover:bg-[#0E15D4] transition-colors">
            오더 수락하기
          </div>
        </div>
      ),
    },

    // 8. 입력창
    {
      id: 'inputs',
      title: '입력창 (Partner Inputs)',
      category: '핵심 컴포넌트',
      badge: '높이 56px / r:6px',
      icon: Sliders,
      desc: '높이 56px · Corner Radius 6px · 18px 텍스트 · 1px stroke',
      renderPreview: () => (
        <div className="w-full h-full flex items-center justify-center select-none px-6">
          <div className="w-full max-w-[210px] h-[48px] bg-white rounded-[6px] border border-[#D7DBE2] px-3.5 flex items-center justify-between text-[15px] shadow-xs">
            <span className="text-[#191F28] font-bold">견적 금액 입력 (18px)</span>
            <Search className="w-4 h-4 text-[#888888] shrink-0" />
          </div>
        </div>
      ),
    },

    // 9. 모달 및 바텀시트
    {
      id: 'modals',
      title: '모달 및 바텀시트 (Radius 6px)',
      category: '핵심 컴포넌트',
      badge: '너비 312px / r:6px',
      icon: Layers,
      desc: '너비 312px · B2B 직각 Radius 6px (16px 금지) · 51px/62px 액션',
      renderPreview: () => (
        <div className="w-full h-full flex items-center justify-center px-4 select-none">
          <div className="w-[170px] bg-white rounded-[6px] shadow-lg border border-[#D7DBE2] p-3 space-y-2 text-center">
            <div className="text-[12px] font-bold text-[#191F28] leading-tight">견적을 제출하시겠습니까?</div>
            <div className="text-[9px] text-[#8B95A1] leading-tight">제출 후 금액 수정이 불가합니다.</div>
            <div className="flex gap-1.5 pt-0.5">
              <div className="flex-1 py-1.5 rounded-[4px] bg-[#F2F4F6] text-[10px] font-bold text-[#4E5968]">취소</div>
              <div className="flex-1 py-1.5 rounded-[4px] bg-[#1219F7] text-[10px] font-bold text-white">제출</div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const cards = isPartner ? partnerCards : customerCards;

  return (
    <div className="space-y-8">
      {/* Intro Header */}
      <div className="space-y-2 animate-fadeIn">
        <h1 className="text-[32px] md:text-[38px] font-extrabold tracking-tight leading-tight text-[#191F28]">
          컴포넌트 모아보기
        </h1>
        <p className="text-[15px] md:text-[16px] max-w-2xl leading-relaxed text-[#4E5968]">
          {isPartner
            ? '다이사 파트너(기사님·시공업체) 서비스에 적용되는 Radius 6px, 기본 18px 타이포그래피, 파트너 전용 버튼/인풋 및 작업 규격을 한눈에 탐색하세요.'
            : '다이사(da24) 서비스에 적용되는 레이아웃 규격, 버튼, 모달, 입력창, 컬러 및 타이포그래피 토큰을 한눈에 탐색하고 세부 규칙을 확인하세요.'}
        </p>
      </div>

      {/* Grid of Component Cards with Staggered Living Fill-up Motion & Soft Shadow */}
      {loadingShimmer ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="rounded-[20px] border border-[#E5E8EB] bg-white overflow-hidden p-5 space-y-4 animate-pulse shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
            >
              <div className="h-[140px] rounded-[12px] bg-[#F2F4F6]" />
              <div className="h-4 rounded w-1/3 bg-[#F2F4F6]" />
              <div className="h-5 rounded w-2/3 bg-[#E5E8EB]" />
              <div className="h-3 rounded w-full bg-[#F2F4F6]" />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                onClick={() => onSelectTab(card.id)}
                style={{ animationDelay: `${idx * 45}ms` }}
                className="group rounded-[20px] border border-[#E5E8EB] bg-white overflow-hidden transition-all duration-200 cursor-pointer flex flex-col justify-between animate-fillUp shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.1)] hover:border-[#3182F6]/50"
              >
                {/* Preview Window Area */}
                <div className="h-[160px] border-b border-[#F2F4F6] bg-[#F9FAFB] group-hover:bg-[#F4F6F9] flex items-center justify-center p-4 relative transition-colors">
                  {card.badge && (
                    <span className="absolute top-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded-[4px] border border-[#E5E8EB] bg-white text-[#191F28] shadow-2xs">
                      {card.badge}
                    </span>
                  )}
                  {card.renderPreview()}
                </div>

                {/* Card Bottom Content Area */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="w-7 h-7 rounded-[6px] flex items-center justify-center transition-colors bg-[#F2F4F6] text-[#4E5968] group-hover:bg-[#E8F3FF] group-hover:text-[#1219F7]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[12px] font-bold text-[#8B95A1]">
                        {card.category}
                      </span>
                    </div>
                    <h3 className="text-[17px] font-extrabold tracking-tight transition-colors text-[#191F28] group-hover:text-[#1219F7]">
                      {card.title}
                    </h3>
                    <p className="text-[13px] mt-1.5 line-clamp-2 leading-relaxed text-[#6B7684]">
                      {card.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-2 border-t border-[#F2F4F6] flex items-center justify-between text-[13px] font-bold transition-colors text-[#4E5968] group-hover:text-[#1219F7]">
                    <span>자세히 보기</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
