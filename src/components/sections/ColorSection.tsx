import React, { useState } from 'react';
import { Copy, Check, Palette, Sparkles, CheckCircle2 } from 'lucide-react';

interface SwatchProps {
  token: string;
  hex: string;
  name: string;
  desc: string;
  border?: boolean;
}

const ColorItem: React.FC<SwatchProps> = ({ token, hex, name, desc, border = false }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  const isGradient = hex.includes('~');

  return (
    <div
      onClick={handleCopy}
      className="group bg-white rounded-[18px] border border-[#E5E8EB] p-4 flex items-center justify-between hover:border-[#3182F6] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all cursor-pointer select-none"
    >
      <div className="flex items-center gap-4 min-w-0">
        {/* Color Preview Swatch */}
        <div
          className={`w-14 h-14 rounded-[14px] shrink-0 flex items-center justify-center shadow-xs transition-transform group-hover:scale-105 ${
            border ? 'border border-[#E5E8EB]' : ''
          }`}
          style={{
            background: isGradient
              ? 'linear-gradient(135deg, #1219F7 0%, #595EF9 100%)'
              : hex,
          }}
        />

        {/* Token Info */}
        <div className="space-y-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-[15px] font-extrabold text-[#191F28] font-mono tracking-tight">{token}</span>
            <span className="text-[12px] font-bold px-2 py-0.5 rounded-full bg-[#F2F4F6] text-[#4E5968] font-mono">{hex}</span>
          </div>
          <p className="text-[13px] text-[#6B7684] truncate">{desc}</p>
        </div>
      </div>

      {/* Copy Feedback */}
      <div className="shrink-0 pl-3">
        {copied ? (
          <span className="text-[12px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full flex items-center gap-1 border border-emerald-200">
            <Check className="w-3.5 h-3.5" /> 복사됨
          </span>
        ) : (
          <button
            type="button"
            className="text-[12px] font-bold text-[#8B95A1] group-hover:text-[#3182F6] bg-[#F2F4F6] group-hover:bg-[#E8F3FF] px-2.5 py-1 rounded-[8px] flex items-center gap-1 transition-colors"
          >
            <Copy className="w-3 h-3" /> 복사
          </button>
        )}
      </div>
    </div>
  );
};

export const ColorSection: React.FC = () => {
  return (
    <section id="colors" className="space-y-10">
      {/* Section Header: Toss Style */}
      <div className="border-b border-[#E5E8EB] pb-6">
        <span className="text-[13px] font-bold text-[#3182F6]">
          스타일 파운데이션
        </span>
        <h2 className="text-[28px] md:text-[32px] font-extrabold text-[#191F28] tracking-tight mt-1">
          색상 시스템 (Color Tokens)
        </h2>
        <p className="text-[15px] text-[#4E5968] mt-2 leading-relaxed max-w-2xl">
          다이사(da24) 서비스의 12대 시맨틱 컬러 토큰입니다. 카드를 클릭하면 Hex 코드가 클립보드에 자동 복사됩니다.
        </p>
      </div>

      {/* Category 1: Main Colors */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 border-b border-[#F2F4F6] pb-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#1219F7]"></span>
          <h3 className="text-[17px] font-bold text-[#191F28]">메인 브랜드 컬러 (Main Colors)</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          <ColorItem token="main-01" hex="#1219F7" name="Primary Blue" desc="전사 메인 CTA 버튼, 포커스 테두리, 핵심 브랜드 블루" />
          <ColorItem token="main-02" hex="#595EF9" name="Secondary Blue" desc="보조 포인트, 서브 버튼, 선택 칩 테두리" />
          <ColorItem token="main-03" hex="#1219F7 ~ #595EF9" name="Brand Gradient" desc="대형 프로모션 배너 및 브랜드 강조 그라디언트" />
          <ColorItem token="main-04" hex="#F4F5FF" name="Tint Background" desc="키컬러 배경 틴트, 상태 뱃지 및 안내 박스 배경" border />
        </div>
      </div>

      {/* Category 2: Text Hierarchy */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 border-b border-[#F2F4F6] pb-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#121212]"></span>
          <h3 className="text-[17px] font-bold text-[#191F28]">텍스트 위계 컬러 (Text Hierarchy 4종)</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          <ColorItem token="text-01" hex="#121212" name="Headline / Title" desc="페이지 대제목, 섹션 헤드라인, 메인 강조 문구" />
          <ColorItem token="text-02" hex="#333333" name="Body Text" desc="본문 기본 텍스트, 인풋 입력 값, 라벨 텍스트" />
          <ColorItem token="text-03" hex="#666666" name="Sub / Help" desc="보조 설명문, 입력 힌트 안내, 모달 본문 설명" />
          <ColorItem token="text-04" hex="#888888" name="Caption / Placeholder" desc="인풋 플레이스홀더, 비활성 텍스트, 각주 약관 문구" />
        </div>
      </div>

      {/* Category 3: Etc & Borders */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 border-b border-[#F2F4F6] pb-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#D7DBE2]"></span>
          <h3 className="text-[17px] font-bold text-[#191F28]">배경 및 구분선 (Borders & Backgrounds)</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          <ColorItem token="etc-01" hex="#FFFFFF" name="White" desc="기본 카드 컨테이너 배경, 인풋 필드 배경" border />
          <ColorItem token="etc-02" hex="#D7DBE2" name="Default Border" desc="인풋 테두리 기본 스트로크, 카드 라인 구분선" border />
          <ColorItem token="etc-03" hex="#EBEEF2" name="Divider / Cancel" desc="영역 구분선, 취소/보조 버튼 배경" border />
          <ColorItem token="etc-04" hex="#F7F8FA" name="Disabled BG" desc="비활성 인풋 배경, 탭바 컨테이너 배경" border />
          <ColorItem token="etc-05" hex="#FAFAFA" name="Page Background" desc="전체 대시보드 및 서비스 기본 배경색" border />
          <ColorItem token="dimmed" hex="rgba(0,0,0,0.6)" name="Overlay Dimmed" desc="모달 및 바텀시트 호출 시 배경 딤드 60%" />
        </div>
      </div>
    </section>
  );
};
