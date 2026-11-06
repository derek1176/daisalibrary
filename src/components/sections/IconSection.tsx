import React, { useState } from 'react';
import {
  LucideIcon,
  Download,
  Check,
  Search,
  X,
  ChevronLeft,
  ChevronRight,
  Check as CheckIcon,
  AlertCircle,
  HelpCircle,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Home,
  Menu,
  Share2,
  Trash2,
  Edit3,
  ShieldCheck,
  Bell,
  Sparkles,
  Ban,
  Truck,
  Package,
  Building2,
  FileText,
  Receipt,
  Star,
  User,
  MessageCircle,
  Layers
} from 'lucide-react';

interface IconMeta {
  name: string;
  label: string;
  icon: LucideIcon;
  category: '이사/청소 특화' | '앱 필수 공통';
  desc: string;
}

export const IconSection: React.FC = () => {
  const [activeSize, setActiveSize] = useState<'24' | '20' | '16'>('24');
  const [downloadedName, setDownloadedName] = useState<string | null>(null);

  // 28 Essential Icons for Daisa (Moving/Cleaning & Core App)
  const systemIcons: IconMeta[] = [
    // 1. 이사/청소 특화 (12종)
    { name: 'Truck', label: '이사업체 / 용달', icon: Truck, category: '이사/청소 특화', desc: '이사 트럭 및 운송 서비스' },
    { name: 'Package', label: '이사 짐 / 박스', icon: Package, category: '이사/청소 특화', desc: '포장 이사 및 보관 물품' },
    { name: 'Sparkles', label: '입주 청소 / 클리닝', icon: Sparkles, category: '이사/청소 특화', desc: '입주/이사/거주 청소 서비스' },
    { name: 'MapPin', label: '출발지 / 도착지', icon: MapPin, category: '이사/청소 특화', desc: '이사 주소 검색 및 위치' },
    { name: 'Building2', label: '주거 형태 / 아파트', icon: Building2, category: '이사/청소 특화', desc: '아파트, 빌라, 오피스텔 건물' },
    { name: 'Layers', label: '평수 / 층수', icon: Layers, category: '이사/청소 특화', desc: '평수 및 층수/엘리베이터 조건' },
    { name: 'FileText', label: '견적서 / 신청 내역', icon: FileText, category: '이사/청소 특화', desc: '비교 견적서 및 상세 신청서' },
    { name: 'Receipt', label: '비용 / 영수증', icon: Receipt, category: '이사/청소 특화', desc: '이사 비용 정산 및 계약금' },
    { name: 'ShieldCheck', label: '안심 보증 / 인증', icon: ShieldCheck, category: '이사/청소 특화', desc: '보증보험 가입 파트너 인증' },
    { name: 'Star', label: '후기 / 별점', icon: Star, category: '이사/청소 특화', desc: '고객 실제 이사 후기 평점' },
    { name: 'Calendar', label: '이사 희망일', icon: Calendar, category: '이사/청소 특화', desc: '손 없는 날 및 이사 일정' },
    { name: 'Clock', label: '희망 시간대', icon: Clock, category: '이사/청소 특화', desc: '작업 시작 및 방문 견적 시간' },

    // 2. 앱 필수 공통 (16종)
    { name: 'Home', label: '홈', icon: Home, category: '앱 필수 공통', desc: '서비스 메인 홈 화면' },
    { name: 'Search', label: '검색', icon: Search, category: '앱 필수 공통', desc: '주소 및 업체 검색' },
    { name: 'Bell', label: '알림', icon: Bell, category: '앱 필수 공통', desc: '견적 도착 및 진행 알림' },
    { name: 'User', label: '내 정보', icon: User, category: '앱 필수 공통', desc: '마이페이지 및 내 견적함' },
    { name: 'Menu', label: '전체 메뉴', icon: Menu, category: '앱 필수 공통', desc: '전체 서비스 메뉴 햄버거' },
    { name: 'X', label: '닫기 / 삭제', icon: X, category: '앱 필수 공통', desc: '모달 닫기 및 입력값 삭제' },
    { name: 'ChevronLeft', label: '이전', icon: ChevronLeft, category: '앱 필수 공통', desc: '이전 단계 이동' },
    { name: 'ChevronRight', label: '다음 / 더보기', icon: ChevronRight, category: '앱 필수 공통', desc: '다음 단계 및 상세 이동' },
    { name: 'Check', label: '선택 완료 / 확인', icon: CheckIcon, category: '앱 필수 공통', desc: '항목 체크 및 완료 상태' },
    { name: 'Phone', label: '전화 상담', icon: Phone, category: '앱 필수 공통', desc: '파트너 기사님/업체 바로 통화' },
    { name: 'MessageCircle', label: '1:1 채팅 문의', icon: MessageCircle, category: '앱 필수 공통', desc: '실시간 상담 및 고객센터' },
    { name: 'Share2', label: '공유하기', icon: Share2, category: '앱 필수 공통', desc: '견적 정보 및 링크 공유' },
    { name: 'Edit3', label: '수정하기', icon: Edit3, category: '앱 필수 공통', desc: '입력 정보 및 주소 수정' },
    { name: 'Trash2', label: '삭제하기', icon: Trash2, category: '앱 필수 공통', desc: '견적 취소 및 항목 삭제' },
    { name: 'AlertCircle', label: '경고 / 오류', icon: AlertCircle, category: '앱 필수 공통', desc: '에러 피드백 및 주의 안내' },
    { name: 'HelpCircle', label: '도움말 / FAQ', icon: HelpCircle, category: '앱 필수 공통', desc: '주소 입력 팁 및 이용 가이드' },
  ];

  const sizePixel = activeSize === '24' ? 24 : activeSize === '20' ? 20 : 16;

  const downloadSvgFile = (name: string, e: React.MouseEvent<HTMLDivElement>) => {
    // Find the svg element inside the clicked card
    const cardEl = e.currentTarget;
    const svgEl = cardEl.querySelector('svg');
    if (!svgEl) return;

    // Create a standalone SVG string with XML namespace and clean styling
    const serializer = new XMLSerializer();
    let svgString = serializer.serializeToString(svgEl);

    if (!svgString.includes('xmlns=')) {
      svgString = svgString.replace('<svg', '<svg xmlns="http://www.w3.org/2000/svg"');
    }

    // Force exact size attributes
    svgString = svgString
      .replace(/width="[^"]*"/, `width="${sizePixel}"`)
      .replace(/height="[^"]*"/, `height="${sizePixel}"`);

    const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `daisa-icon-${name.toLowerCase()}-${sizePixel}px.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadedName(name);
    setTimeout(() => setDownloadedName(null), 1500);
  };

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
          다이사(da24) 서비스의 <strong>공식 시스템 아이콘 28종</strong>입니다. 일관된 브랜드 신뢰도를 위해 이모지 사용을 엄격히 금지하고 정식 벡터 SVG 아이콘만 사용합니다. 아이콘 카드를 클릭하면 <strong>.svg 파일로 즉시 다운로드</strong>됩니다.
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
        <div className="bg-[#F9FAFB] border border-[#E5E8EB] rounded-[14px] p-5 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#1219F7]" />
              <span className="text-[13px] font-bold text-[#191F28]">
                AI 아이콘 제작 표준 프롬프트 가이드
              </span>
            </div>
            <span className="text-[11px] font-mono font-bold text-[#1B64DA] bg-[#E8F3FF] px-2.5 py-0.5 rounded-full">
              표준 프롬프트 템플릿
            </span>
          </div>

          <p className="text-[12px] text-[#6B7684] leading-relaxed">
            Gemini, ChatGPT, Claude 등의 AI에게 아래 프롬프트를 복사하여 뒤에 원하는 아이콘(예: <em>"사다리차 아이콘", "이사 박스 아이콘"</em>)을 요청하면, 시스템 아이콘과 100% 동일한 선 두께(1.5px)와 둥근 끝점(round)의 단일 SVG 코드로 생성됩니다.
          </p>

          <code className="block text-[12px] font-mono text-[#191F28] bg-white p-3.5 rounded-[10px] border border-[#E5E8EB] overflow-x-auto select-all leading-relaxed">
            "Design a 24x24 SVG icon with a 1.5px stroke weight, round stroke-linecap, and round stroke-linejoin. Outline style only (fill=none), stroke=currentColor, minimalistic modern Korean product style. Target object: [원하는 아이콘 이름]"
          </code>
        </div>
      </div>

      {/* Interactive Icon Showcase Grid */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-[19px] font-extrabold text-[#191F28]">
              다이사 공식 시스템 아이콘 (28종)
            </h3>
            <p className="text-[13px] text-[#6B7684] mt-0.5">
              원하는 크기(24/20/16px)를 선택한 후 아이콘을 클릭하면 <strong>.svg 파일로 즉시 다운로드</strong>됩니다.
            </p>
          </div>

          {/* Size Switcher */}
          <div className="flex items-center gap-1.5 bg-[#F2F4F6] p-1 rounded-[12px] shrink-0 border border-[#E5E8EB]/50">
            {(['24', '20', '16'] as const).map((s) => (
              <button
                key={s}
                onClick={() => setActiveSize(s)}
                className={`px-3 py-1.5 rounded-[9px] text-[12px] font-bold transition-all ${
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

        {/* 1. Moving / Cleaning Specialized Icons */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 border-b border-[#F2F4F6] pb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#1219F7]" />
            <h4 className="text-[15px] font-bold text-[#191F28]">이사 & 청소 서비스 특화 (12종)</h4>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
            {systemIcons.filter(i => i.category === '이사/청소 특화').map((item) => {
              const Icon = item.icon;
              const isDownloaded = downloadedName === item.name;
              return (
                <div
                  key={item.name}
                  onClick={(e) => downloadSvgFile(item.name, e)}
                  title={`${item.label} (${item.name}) SVG 다운로드`}
                  className="group p-4 bg-white border border-[#E5E8EB] rounded-[18px] flex flex-col items-center justify-center gap-2 hover:border-[#1219F7] hover:shadow-[0_10px_24px_rgba(18,25,247,0.08)] transition-all cursor-pointer relative select-none"
                >
                  {/* Visual SVG Icon */}
                  <div className="w-12 h-12 rounded-[12px] bg-[#FAFBFD] group-hover:bg-[#E8F3FF] flex items-center justify-center text-[#191F28] group-hover:text-[#1219F7] transition-colors">
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

                  {/* Download notification overlay */}
                  {isDownloaded && (
                    <div className="absolute inset-0 bg-[#1219F7] text-white rounded-[18px] flex flex-col items-center justify-center gap-1 text-[11px] font-bold animate-fadeIn z-10 shadow-md">
                      <Download className="w-4 h-4 animate-bounce" />
                      <span>SVG 저장됨</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. Core App Common Icons */}
        <div className="space-y-3 pt-4">
          <div className="flex items-center gap-2 border-b border-[#F2F4F6] pb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#595EF9]" />
            <h4 className="text-[15px] font-bold text-[#191F28]">앱 필수 공통 컨트롤러 (16종)</h4>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
            {systemIcons.filter(i => i.category === '앱 필수 공통').map((item) => {
              const Icon = item.icon;
              const isDownloaded = downloadedName === item.name;
              return (
                <div
                  key={item.name}
                  onClick={(e) => downloadSvgFile(item.name, e)}
                  title={`${item.label} (${item.name}) SVG 다운로드`}
                  className="group p-4 bg-white border border-[#E5E8EB] rounded-[18px] flex flex-col items-center justify-center gap-2 hover:border-[#1219F7] hover:shadow-[0_10px_24px_rgba(18,25,247,0.08)] transition-all cursor-pointer relative select-none"
                >
                  {/* Visual SVG Icon */}
                  <div className="w-12 h-12 rounded-[12px] bg-[#FAFBFD] group-hover:bg-[#E8F3FF] flex items-center justify-center text-[#191F28] group-hover:text-[#1219F7] transition-colors">
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

                  {/* Download notification overlay */}
                  {isDownloaded && (
                    <div className="absolute inset-0 bg-[#1219F7] text-white rounded-[18px] flex flex-col items-center justify-center gap-1 text-[11px] font-bold animate-fadeIn z-10 shadow-md">
                      <Download className="w-4 h-4 animate-bounce" />
                      <span>SVG 저장됨</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
