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
  AlertTriangle
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
      title: '아이콘 (Icons)',
      category: '기초 규격',
      badge: '200종 SVG',
      icon: Sparkles,
      desc: '이모지 사용 금지 · stroke 1.5px · 선형 & 면형 SVG 다운로드',
      renderPreview: () => (
        <div className="w-full h-full flex items-center justify-center gap-3 select-none px-4">
          <div className="w-10 h-10 rounded-[10px] bg-white border border-[#E5E8EB] flex items-center justify-center text-[#191F28] shadow-2xs">
            <Search size={20} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
          </div>
          <div className="w-10 h-10 rounded-[10px] bg-[#E8F3FF] border border-[#3182F6]/30 flex items-center justify-center text-[#1219F7] shadow-xs">
            <CheckCircle2 size={20} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
          </div>
          <div className="w-10 h-10 rounded-[10px] bg-white border border-[#E5E8EB] flex items-center justify-center text-[#191F28] shadow-2xs">
            <MapPin size={20} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
          </div>
        </div>
      ),
    },

    // 7. 버튼
    {
      id: 'buttons',
      title: '버튼 (Public Button)',
      category: '핵심 컴포넌트',
      badge: '표준 56px',
      icon: MousePointerClick,
      desc: '본문 표준 Public 312(640) · Corner Radius 10px · 키컬러 #1219F7',
      renderPreview: () => (
        <div className="w-full h-full flex items-center justify-center select-none px-6">
          <div className="w-[190px] h-[46px] bg-[#1219F7] hover:bg-[#0E15D4] text-white rounded-[10px] flex items-center justify-center text-[14px] font-bold shadow-[0_4px_14px_rgba(18,25,247,0.25)] transition-transform group-hover:scale-102">
            견적 신청하기
          </div>
        </div>
      ),
    },

    // 8. 입력창
    {
      id: 'inputs',
      title: '입력창 (Form Input)',
      category: '핵심 컴포넌트',
      icon: Sliders,
      desc: '높이 56px · 포커스 블루 · 에러(#F34766) 스트로크',
      renderPreview: () => (
        <div className="w-full h-full flex items-center justify-center select-none px-5">
          <div className="w-full max-w-[210px] h-[46px] bg-white rounded-[10px] border-2 border-[#1219F7] px-3.5 flex items-center justify-between text-[13px] shadow-[0_2px_8px_rgba(18,25,247,0.08)]">
            <span className="text-[#191F28] font-medium">출발지를 입력해 주세요</span>
            <Search className="w-4 h-4 text-[#1219F7] shrink-0" />
          </div>
        </div>
      ),
    },

    // 9. 모달 및 바텀시트
    {
      id: 'modals',
      title: '모달 및 바텀시트',
      category: '핵심 컴포넌트',
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
            <div className="w-10 h-10 rounded-[6px] bg-[#1219F7] shadow-sm border border-white/10" />
            <span className="text-[10px] font-bold text-[#94A3B8]">#1219F7</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-10 h-10 rounded-[6px] bg-[#595EF9] shadow-sm border border-white/10" />
            <span className="text-[10px] font-bold text-[#94A3B8]">#595EF9</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-10 h-10 rounded-[6px] bg-[#F7D915] shadow-sm" />
            <span className="text-[10px] font-bold text-[#94A3B8]">#F7D915</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-10 h-10 rounded-[6px] bg-[#F34766] shadow-sm" />
            <span className="text-[10px] font-bold text-[#94A3B8]">#F34766</span>
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
          <div className="text-[34px] font-black text-white leading-none tracking-tight">
            파트너 18px
          </div>
          <div className="text-[11px] font-bold text-[#595EF9] tracking-wide bg-[#595EF9]/10 px-2.5 py-0.5 rounded-[4px] border border-[#595EF9]/30">
            기본 본문 18px / 12px 이하 사용 절대 금지
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
          <div className="w-[96px] h-[64px] bg-[#161B26] border-2 border-[#595EF9] rounded-[6px] flex flex-col items-center justify-center shadow-xs">
            <span className="text-[11px] font-extrabold text-[#595EF9]">r: 6px</span>
            <span className="text-[9px] font-bold text-[#94A3B8]">B2B 전사 표준</span>
          </div>
          <div className="w-[84px] h-[64px] bg-[#161B26] border border-[#3A4560] rounded-[4px] flex flex-col items-center justify-center">
            <span className="text-[11px] font-bold text-[#E5E8EB]">r: 4px</span>
            <span className="text-[9px] text-[#64748B]">보조 버튼/태그</span>
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
          <div className="w-[52px] h-[80px] bg-[#161B26] rounded-[6px] border border-[#595EF9] flex flex-col justify-between p-1.5 shadow-2xs">
            <span className="text-[8px] font-bold text-[#94A3B8] text-center">312</span>
            <div className="h-1.5 bg-[#595EF9] rounded-[2px] w-full" />
          </div>
          <div className="w-[108px] h-[80px] bg-[#121620] rounded-[6px] border border-dashed border-[#2B3342] flex items-center justify-center p-1 relative">
            <div className="w-[58px] h-full bg-[#161B26] rounded-[6px] border-2 border-[#1219F7] flex flex-col justify-between p-1.5 shadow-2xs">
              <span className="text-[8px] font-bold text-[#595EF9] text-center">627</span>
              <div className="h-1.5 bg-[#1219F7] rounded-[2px] w-full" />
            </div>
            <span className="absolute bottom-1 right-1.5 text-[7px] font-bold text-[#64748B]">1200</span>
          </div>
        </div>
      ),
    },

    // 5. 라이팅 가이드
    {
      id: 'writing',
      title: '라이팅 가이드 (파트너 업무 문구)',
      category: '기초 규격',
      badge: '현장 업무 특화',
      icon: MessageSquare,
      desc: '기사님/시공업체 현장 업무에 최적화된 명확하고 직관적인 지시어',
      renderPreview: () => (
        <div className="w-full h-full flex items-center justify-center select-none px-4">
          <div className="px-4 py-2.5 rounded-[6px] bg-[#1A2234] border border-[#595EF9]/40 text-[13px] font-bold text-[#7075FA] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#595EF9]" />
            <span>견적 접수 내역을 확인해 주세요</span>
          </div>
        </div>
      ),
    },

    // 6. 아이콘
    {
      id: 'icons',
      title: '아이콘 (200종 선형/면형)',
      category: '기초 규격',
      badge: '선형 / 면형 200종',
      icon: Sparkles,
      desc: '24px 기준 1.5px 두께 · 이모지 금지 · 다크 테두리 최적화 SVG',
      renderPreview: () => (
        <div className="w-full h-full flex items-center justify-center gap-3 select-none px-4">
          <div className="w-10 h-10 rounded-[6px] bg-[#1A2234] border border-[#2B3548] flex items-center justify-center text-white shadow-2xs">
            <Search size={20} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
          </div>
          <div className="w-10 h-10 rounded-[6px] bg-[#595EF9]/20 border border-[#595EF9]/50 flex items-center justify-center text-[#7075FA] shadow-xs">
            <CheckCircle2 size={20} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
          </div>
          <div className="w-10 h-10 rounded-[6px] bg-[#1A2234] border border-[#2B3548] flex items-center justify-center text-white shadow-2xs">
            <MapPin size={20} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
          </div>
        </div>
      ),
    },

    // 7. 버튼
    {
      id: 'buttons',
      title: '버튼 (Partner CTA 62px)',
      category: '핵심 컴포넌트',
      badge: '높이 62px / r:6px',
      icon: MousePointerClick,
      desc: '메인 CTA 62px (w:312/627, r:6, 18px Bold) · 서브 48/51px',
      renderPreview: () => (
        <div className="w-full h-full flex items-center justify-center select-none px-6">
          <div className="w-[190px] h-[50px] bg-[#1219F7] hover:bg-[#0E15D4] text-white rounded-[6px] flex items-center justify-center text-[15px] font-bold shadow-[0_4px_16px_rgba(18,25,247,0.4)] transition-transform group-hover:scale-102">
            견적 제출하기 (62px)
          </div>
        </div>
      ),
    },

    // 8. 입력창
    {
      id: 'inputs',
      title: '입력창 (Form Inputs 56px r:6)',
      category: '핵심 컴포넌트',
      badge: '높이 56px / r:6px',
      icon: Sliders,
      desc: '높이 56px · Corner Radius 6px · 18px 텍스트 · 에러 #F34766',
      renderPreview: () => (
        <div className="w-full h-full flex items-center justify-center select-none px-5">
          <div className="w-full max-w-[210px] h-[48px] bg-[#121620] rounded-[6px] border-2 border-[#595EF9] px-3.5 flex items-center justify-between text-[14px]">
            <span className="text-[#F3F4F6] font-medium">견적 금액 입력</span>
            <Search className="w-4 h-4 text-[#595EF9] shrink-0" />
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
      desc: '너비 312px · B2B 직각 Radius 6px (16px 금지) · 51/62px 액션',
      renderPreview: () => (
        <div className="w-full h-full flex items-center justify-center px-4 select-none">
          <div className="w-[170px] bg-[#161B26] rounded-[6px] shadow-[0_8px_24px_rgba(0,0,0,0.5)] border border-[#2B3548] p-3 space-y-2 text-center">
            <div className="text-[12px] font-bold text-white leading-tight">견적을 제출하시겠습니까?</div>
            <div className="text-[9px] text-[#94A3B8] leading-tight">제출 후 금액 수정이 불가합니다.</div>
            <div className="flex gap-1.5 pt-0.5">
              <div className="flex-1 py-1.5 rounded-[4px] bg-[#222A3B] text-[10px] font-bold text-[#CBD5E1]">취소</div>
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
        <div className="flex items-center gap-2">
          {isPartner && (
            <span className="px-2.5 py-0.5 rounded-[6px] text-[12px] font-bold bg-[#595EF9]/20 text-[#7075FA] border border-[#595EF9]/40">
              파트너향 B2B 전용 (다크모드)
            </span>
          )}
        </div>
        <h1 className={`text-[32px] md:text-[38px] font-extrabold tracking-tight leading-tight ${
          isPartner ? 'text-white' : 'text-[#191F28]'
        }`}>
          {isPartner ? '파트너(B2B) 컴포넌트 모아보기' : '컴포넌트 모아보기'}
        </h1>
        <p className={`text-[15px] md:text-[16px] max-w-2xl leading-relaxed ${
          isPartner ? 'text-[#94A3B8]' : 'text-[#4E5968]'
        }`}>
          {isPartner
            ? '다이사 파트너(기사님·시공업체) 서비스에 적용되는 전용 다크 UI 규격, 62px CTA 버튼, 6px 라운드, 18px 기본 폰트 및 360x312 / 1200x627 레이아웃 규격을 탐색하세요.'
            : '다이사(da24) 서비스에 적용되는 레이아웃 규격, 버튼, 모달, 입력창, 컬러 및 타이포그래피 토큰을 한눈에 탐색하고 세부 규칙을 확인하세요.'}
        </p>
      </div>

      {/* Grid of Component Cards with Staggered Living Fill-up Motion */}
      {loadingShimmer ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className={`rounded-[20px] border overflow-hidden p-5 space-y-4 animate-pulse shadow-sm ${
                isPartner
                  ? 'bg-[#161B26] border-[#262F40]'
                  : 'bg-white border-[#E5E8EB]'
              }`}
            >
              <div className={`h-[140px] rounded-[12px] ${isPartner ? 'bg-[#1E2536]' : 'bg-[#F2F4F6]'}`} />
              <div className={`h-4 rounded w-1/3 ${isPartner ? 'bg-[#1E2536]' : 'bg-[#F2F4F6]'}`} />
              <div className={`h-5 rounded w-2/3 ${isPartner ? 'bg-[#2B3548]' : 'bg-[#E5E8EB]'}`} />
              <div className={`h-3 rounded w-full ${isPartner ? 'bg-[#1E2536]' : 'bg-[#F2F4F6]'}`} />
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
                className={`group rounded-[20px] border overflow-hidden transition-all duration-200 cursor-pointer flex flex-col justify-between animate-fillUp ${
                  isPartner
                    ? 'bg-[#161B26] border-[#262F40] hover:border-[#595EF9] hover:shadow-[0_12px_32px_rgba(89,94,249,0.2)]'
                    : 'bg-white border-[#E5E8EB] hover:border-[#1219F7]/40 hover:shadow-[0_12px_32px_rgba(18,25,247,0.08)]'
                }`}
              >
                {/* Preview Window Area */}
                <div className={`h-[160px] border-b flex items-center justify-center p-4 relative transition-colors ${
                  isPartner
                    ? 'bg-[#10141D] border-[#222A3A] group-hover:bg-[#131822]'
                    : 'bg-[#F9FAFB] border-[#F2F4F6] group-hover:bg-[#F4F6F9]'
                }`}>
                  {card.badge && (
                    <span className={`absolute top-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded-[4px] border ${
                      isPartner
                        ? 'bg-[#1E2536] text-[#E2E8F0] border-[#374151]'
                        : 'bg-white text-[#191F28] border-[#E5E8EB]'
                    }`}>
                      {card.badge}
                    </span>
                  )}
                  {card.renderPreview()}
                </div>

                {/* Card Bottom Content Area */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className={`w-7 h-7 rounded-[6px] flex items-center justify-center transition-colors ${
                        isPartner
                          ? 'bg-[#1E2536] text-[#94A3B8] group-hover:bg-[#595EF9]/20 group-hover:text-[#7075FA]'
                          : 'bg-[#F2F4F6] text-[#4E5968] group-hover:bg-[#E8F3FF] group-hover:text-[#1219F7]'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className={`text-[12px] font-bold ${
                        isPartner ? 'text-[#64748B]' : 'text-[#8B95A1]'
                      }`}>
                        {card.category}
                      </span>
                    </div>
                    <h3 className={`text-[17px] font-extrabold tracking-tight transition-colors ${
                      isPartner
                        ? 'text-white group-hover:text-[#7075FA]'
                        : 'text-[#191F28] group-hover:text-[#1219F7]'
                    }`}>
                      {card.title}
                    </h3>
                    <p className={`text-[13px] mt-1.5 line-clamp-2 leading-relaxed ${
                      isPartner ? 'text-[#94A3B8]' : 'text-[#6B7684]'
                    }`}>
                      {card.desc}
                    </p>
                  </div>

                  <div className={`pt-4 mt-2 border-t flex items-center justify-between text-[13px] font-bold transition-colors ${
                    isPartner
                      ? 'border-[#222A3A] text-[#94A3B8] group-hover:text-[#7075FA]'
                      : 'border-[#F2F4F6] text-[#4E5968] group-hover:text-[#1219F7]'
                  }`}>
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
