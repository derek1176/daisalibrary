import React, { useState } from 'react';
import {
  Copy,
  Check,
  Search,
  X,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Info,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Home,
  Menu,
  Download,
  Share2,
  Trash2,
  Edit3,
  ExternalLink,
  ShieldCheck,
  Eye,
  EyeOff,
  Bell,
  ArrowRight,
  SlidersHorizontal,
  Sparkles,
  Ban
} from 'lucide-react';

export const IconSection: React.FC = () => {
  const [activeSize, setActiveSize] = useState<'24' | '20' | '16'>('24');
  const [copiedName, setCopiedName] = useState<string | null>(null);

  const copy = (name: string) => {
    navigator.clipboard.writeText(`<${name} size={${activeSize}} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />`);
    setCopiedName(name);
    setTimeout(() => setCopiedName(null), 1500);
  };

  const systemIcons = [
    { name: 'Search', label: '검색', icon: Search, category: '탐색' },
    { name: 'X', label: '닫기 / 삭제', icon: X, category: '공통' },
    { name: 'ChevronLeft', label: '이전', icon: ChevronLeft, category: '방향' },
    { name: 'ChevronRight', label: '다음 / 바로가기', icon: ChevronRight, category: '방향' },
    { name: 'ChevronDown', label: '드롭다운 열기', icon: ChevronDown, category: '방향' },
    { name: 'ChevronUp', label: '드롭다운 닫기', icon: ChevronUp, category: '방향' },
    { name: 'ArrowRight', label: '액션 진행', icon: ArrowRight, category: '방향' },
    { name: 'CheckCircle2', label: '성공 / 완료', icon: CheckCircle2, category: '피드백' },
    { name: 'AlertCircle', label: '경고 / 오류', icon: AlertCircle, category: '피드백' },
    { name: 'Info', label: '정보 안내', icon: Info, category: '피드백' },
    { name: 'HelpCircle', label: '도움말', icon: HelpCircle, category: '피드백' },
    { name: 'MapPin', label: '출발지 / 도착지', icon: MapPin, category: '서비스' },
    { name: 'Calendar', label: '이사 희망일', icon: Calendar, category: '서비스' },
    { name: 'Clock', label: '시간 선택', icon: Clock, category: '서비스' },
    { name: 'Phone', label: '전화 상담', icon: Phone, category: '서비스' },
    { name: 'Home', label: '홈 / 홈으로', icon: Home, category: '네비게이션' },
    { name: 'Menu', label: '전체 메뉴', icon: Menu, category: '네비게이션' },
    { name: 'Bell', label: '알림 / 공지', icon: Bell, category: '네비게이션' },
    { name: 'Download', label: '파일 다운로드', icon: Download, category: '액션' },
    { name: 'Share2', label: '견적 공유', icon: Share2, category: '액션' },
    { name: 'Copy', label: '복사하기', icon: Copy, category: '액션' },
    { name: 'Edit3', label: '내용 수정', icon: Edit3, category: '액션' },
    { name: 'Trash2', label: '항목 삭제', icon: Trash2, category: '액션' },
    { name: 'ShieldCheck', label: '안심 보증 / 인증', icon: ShieldCheck, category: '브랜드' },
    { name: 'SlidersHorizontal', label: '상세 필터', icon: SlidersHorizontal, category: '액션' },
    { name: 'ExternalLink', label: '외부 링크', icon: ExternalLink, category: '공통' },
    { name: 'Eye', label: '보기', icon: Eye, category: '공통' },
    { name: 'EyeOff', label: '숨기기', icon: EyeOff, category: '공통' },
  ];

  const sizePixel = activeSize === '24' ? 24 : activeSize === '20' ? 20 : 16;

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="border-b border-[#E5E8EB] pb-6">
        <span className="text-[13px] font-bold text-[#3182F6]">
          파운데이션 / 기초 규격
        </span>
        <h2 className="text-[28px] md:text-[32px] font-extrabold text-[#191F28] tracking-tight mt-1">
          아이콘 (Icons)
        </h2>
        <p className="text-[15px] text-[#4E5968] mt-2 leading-relaxed max-w-2xl">
          다이사(da24) 서비스의 공식 시스템 아이콘 가이드입니다. 일관된 브랜드 신뢰도를 위해 이모지 사용을 엄격히 금지하고 정식 벡터 SVG 아이콘만 사용합니다.
        </p>
      </div>

      {/* 3 Core Rules Banner */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Rule 1: No Emoji */}
        <div className="p-5 bg-[#FFF5F6] border border-[#F34766]/30 rounded-[18px] space-y-2">
          <div className="flex items-center gap-2 text-[#F34766]">
            <Ban className="w-5 h-5 shrink-0" />
            <h4 className="text-[15px] font-extrabold">이모지 사용 금지</h4>
          </div>
          <p className="text-[13px] text-[#591420] leading-relaxed">
            모든 텍스트, 뱃지, 버튼, 툴팁 등에서 이모지 사용을 금지하며, 공식 SVG 아이콘만 사용합니다.
          </p>
        </div>

        {/* Rule 2: System Icon First */}
        <div className="p-5 bg-[#F2F7FF] border border-[#3182F6]/30 rounded-[18px] space-y-2">
          <div className="flex items-center gap-2 text-[#1B64DA]">
            <ShieldCheck className="w-5 h-5 shrink-0" />
            <h4 className="text-[15px] font-extrabold">System Icon 기반 사용</h4>
          </div>
          <p className="text-[13px] text-[#1B64DA] leading-relaxed">
            피그마 스타일가이드에 등록된 공식 system icon을 1순위 표준으로 우선 활용합니다.
          </p>
        </div>

        {/* Rule 3: AI Creation */}
        <div className="p-5 bg-white border border-[#E5E8EB] rounded-[18px] space-y-2 shadow-xs">
          <div className="flex items-center gap-2 text-[#191F28]">
            <Sparkles className="w-5 h-5 text-[#1219F7] shrink-0" />
            <h4 className="text-[15px] font-extrabold">AI 신규 아이콘 제작</h4>
          </div>
          <p className="text-[13px] text-[#6B7684] leading-relaxed">
            피그마 외 신규 아이콘은 일관성을 위해 규격(24px, 1.5px, round)에 맞춰 AI로 제작합니다.
          </p>
        </div>
      </div>

      {/* Specifications Block */}
      <div className="bg-white border border-[#E5E8EB] rounded-[24px] p-6 md:p-8 space-y-6 shadow-xs">
        <div className="space-y-1">
          <h3 className="text-[18px] font-extrabold text-[#191F28]">
            아이콘 제작 및 렌더링 규격
          </h3>
          <p className="text-[13px] text-[#6B7684]">
            디자이너 및 AI 에이전트가 아이콘을 추가할 때 반드시 준수해야 하는 파라미터입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 bg-[#FAFBFD] border border-[#E5E8EB] rounded-[14px] space-y-1">
            <span className="text-[11px] font-bold text-[#8B95A1]">기본 사이즈</span>
            <div className="text-[20px] font-extrabold text-[#191F28]">24px</div>
            <p className="text-[11px] text-[#6B7684]">터치 타겟 및 네비게이션 전사 표준</p>
          </div>

          <div className="p-4 bg-[#FAFBFD] border border-[#E5E8EB] rounded-[14px] space-y-1">
            <span className="text-[11px] font-bold text-[#8B95A1]">보조 사이즈</span>
            <div className="text-[20px] font-extrabold text-[#191F28]">20px · 16px</div>
            <p className="text-[11px] text-[#6B7684]">인풋 내부(20px), 미니 뱃지(16px)</p>
          </div>

          <div className="p-4 bg-[#FAFBFD] border border-[#E5E8EB] rounded-[14px] space-y-1">
            <span className="text-[11px] font-bold text-[#8B95A1]">선 두께 (Stroke)</span>
            <div className="text-[20px] font-extrabold text-[#1219F7]">1.5px</div>
            <p className="text-[11px] text-[#6B7684]">24px 캔버스 기준 1.5px 선 굵기 통일</p>
          </div>

          <div className="p-4 bg-[#FAFBFD] border border-[#E5E8EB] rounded-[14px] space-y-1">
            <span className="text-[11px] font-bold text-[#8B95A1]">엔드포인트</span>
            <div className="text-[20px] font-extrabold text-[#1219F7]">Round</div>
            <p className="text-[11px] text-[#6B7684]">stroke-linecap / linejoin 둥근 처리</p>
          </div>
        </div>

        {/* AI Prompt Snippet Box */}
        <div className="bg-[#F9FAFB] border border-[#E5E8EB] rounded-[14px] p-4 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[12px] font-bold text-[#4E5968]">
              AI 아이콘 제작 표준 프롬프트 가이드
            </span>
            <span className="text-[11px] font-mono font-bold text-[#1B64DA] bg-[#E8F3FF] px-2 py-0.5 rounded">
              AI Prompt
            </span>
          </div>
          <code className="block text-[12px] font-mono text-[#191F28] bg-white p-3 rounded-[8px] border border-[#E5E8EB] overflow-x-auto select-all">
            "Design a 24x24 SVG icon with a 1.5px stroke weight, round stroke-linecap, and round stroke-linejoin. Outline style only (fill=none), stroke=currentColor, minimalistic modern Korean product style."
          </code>
        </div>
      </div>

      {/* Interactive Icon Showcase Grid */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-[18px] font-extrabold text-[#191F28]">
              공식 시스템 아이콘 목록 ({systemIcons.length}종)
            </h3>
            <p className="text-[13px] text-[#6B7684]">
              아이콘 카드를 클릭하면 1.5px stroke와 round 설정이 적용된 컴포넌트 코드가 복사됩니다.
            </p>
          </div>

          {/* Size Switcher */}
          <div className="flex items-center gap-1 bg-[#F2F4F6] p-1 rounded-[10px] shrink-0 border border-[#E5E8EB]/50">
            {(['24', '20', '16'] as const).map((s) => (
              <button
                key={s}
                onClick={() => setActiveSize(s)}
                className={`px-3 py-1 rounded-[7px] text-[12px] font-bold transition-all ${
                  activeSize === s
                    ? 'bg-white text-[#191F28] shadow-2xs'
                    : 'text-[#6B7684] hover:text-[#191F28]'
                }`}
              >
                {s}px
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {systemIcons.map((item) => {
            const Icon = item.icon;
            const isCopied = copiedName === item.name;
            return (
              <div
                key={item.name}
                onClick={() => copy(item.name)}
                className="group p-4 bg-white border border-[#E5E8EB] rounded-[16px] flex flex-col items-center justify-center gap-2 hover:border-[#1219F7] hover:shadow-[0_8px_20px_rgba(18,25,247,0.06)] transition-all cursor-pointer relative select-none"
              >
                {/* Visual Icon with precise strokeWidth & round cap/join */}
                <div className="w-10 h-10 rounded-[10px] bg-[#FAFBFD] group-hover:bg-[#E8F3FF] flex items-center justify-center text-[#191F28] group-hover:text-[#1219F7] transition-colors">
                  <Icon
                    size={sizePixel}
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </div>

                <div className="text-center w-full">
                  <div className="text-[12px] font-bold text-[#191F28] group-hover:text-[#1219F7] truncate">
                    {item.label}
                  </div>
                  <div className="text-[10px] font-mono text-[#8B95A1] truncate">
                    {item.name}
                  </div>
                </div>

                {/* Copied indicator */}
                {isCopied && (
                  <div className="absolute inset-0 bg-[#1219F7]/95 text-white rounded-[16px] flex items-center justify-center gap-1 text-[11px] font-bold animate-fadeIn">
                    <Check className="w-3.5 h-3.5" />
                    <span>복사됨</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
