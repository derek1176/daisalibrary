import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface SwatchProps {
  token: string;
  hex: string;
  note: string;
  textColor?: string;
  border?: boolean;
}

const SwatchCard: React.FC<SwatchProps> = ({ token, hex, note, textColor = '#121212', border = false }) => {
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
      className="group relative flex flex-col bg-white rounded-[18px] border border-[#E5E8EB] overflow-hidden hover:border-[#3182F6] hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer select-none"
    >
      <div
        className={`h-[92px] w-full flex items-start justify-end p-2.5 ${border ? 'border-b border-[#F2F4F6]' : ''}`}
        style={{
          background: isGradient
            ? 'linear-gradient(135deg, #1219F7 0%, #595EF9 100%)'
            : hex,
        }}
      >
        <span
          className={`opacity-0 group-hover:opacity-100 transition-opacity text-[11px] font-bold px-2 py-0.5 rounded-full shadow-xs ${
            copied ? 'bg-emerald-500 text-white' : 'bg-black/60 text-white backdrop-blur-xs'
          }`}
        >
          {copied ? '복사됨!' : '클릭하여 복사'}
        </span>
      </div>
      <div className="p-3.5 flex flex-col gap-0.5">
        <div className="flex items-center justify-between">
          <span className="text-[14px] font-bold text-[#191F28] font-mono tracking-tight">{token}</span>
          {copied ? (
            <Check className="w-3.5 h-3.5 text-emerald-600" />
          ) : (
            <Copy className="w-3.5 h-3.5 text-[#8B95A1] opacity-0 group-hover:opacity-100 transition-opacity" />
          )}
        </div>
        <span className="text-[12px] font-mono font-semibold text-[#333D4B] tracking-wider">{hex}</span>
        <span className="text-[11px] text-[#6B7684] mt-1 leading-tight">{note}</span>
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
          다이사(da24)의 시맨틱 컬러 토큰입니다. 카드를 클릭하면 Hex 코드가 클립보드에 자동 복사됩니다.
        </p>
      </div>

      {/* Main Colors */}
      <div className="space-y-4">
        <div className="flex items-baseline gap-3">
          <h3 className="text-[17px] font-bold text-text-01">Main Colors</h3>
          <span className="text-[13px] text-text-04">브랜드를 대표하는 키컬러</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
          <SwatchCard token="main-01" hex="#1219F7" note="Primary Blue 키컬러 (CTA, 포커스, 브랜드)" />
          <SwatchCard token="main-02" hex="#595EF9" note="Secondary Blue (보조 포인트, 일러스트)" />
          <SwatchCard token="main-03" hex="#1219F7 ~ #595EF9" note="그라디언트 (주요 강조 배너)" />
          <SwatchCard token="main-04" hex="#F4F5FF" note="Tint Background (강조 영역 배경, 뱃지)" border />
        </div>
      </div>

      {/* Sub & System Colors */}
      <div className="space-y-4">
        <div className="flex items-baseline gap-3">
          <h3 className="text-[17px] font-bold text-text-01">Sub & System Colors</h3>
          <span className="text-[13px] text-text-04">보조 강조 및 시스템 상태 피드백</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
          <SwatchCard token="sub-01" hex="#F7D915" note="Yellow 포인트 (별점, 알림 강조)" />
          <SwatchCard token="sub-02" hex="#F34766" note="Error Red (에러 보더, 경고 문구)" />
          <SwatchCard token="system-01" hex="#000000" note="Pure Black (딤드 오버레이 기준)" />
          <SwatchCard token="system-02" hex="#FFFFFF" note="Pure White (컨테이너 배경)" border />
        </div>
      </div>

      {/* Text Colors */}
      <div className="space-y-4">
        <div className="flex items-baseline gap-3">
          <h3 className="text-[17px] font-bold text-text-01">Text Colors</h3>
          <span className="text-[13px] text-text-04">가독성과 정보 위계를 위한 4단계 텍스트 계층</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
          <SwatchCard token="text-01" hex="#121212" note="Title, Headline, 대형 타이포 (최우선)" />
          <SwatchCard token="text-02" hex="#333333" note="Body 본문 텍스트, 라벨, 폼 입력 텍스트" />
          <SwatchCard token="text-03" hex="#666666" note="Sub 보조 설명, 도움말 문구" />
          <SwatchCard token="text-04" hex="#888888" note="Caption, Placeholder, 비활성 텍스트" />
        </div>
      </div>

      {/* ETC Colors */}
      <div className="space-y-4">
        <div className="flex items-baseline gap-3">
          <h3 className="text-[17px] font-bold text-text-01">ETC Colors</h3>
          <span className="text-[13px] text-text-04">보더, 구분선, 배경 표면 색상</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
          <SwatchCard token="etc-01" hex="#C4C9D1" note="보조 아이콘, 약한 라인" border />
          <SwatchCard token="etc-02" hex="#D7DBE2" note="기본 보더 (Input, Card 테두리)" border />
          <SwatchCard token="etc-03" hex="#EBEEF2" note="구분선 Divider, 취소 버튼 배경" border />
          <SwatchCard token="etc-04" hex="#F7F8FA" note="비활성 BG, 탭바 배경, 인풋 Disabled" border />
          <SwatchCard token="etc-05" hex="#FAFAFA" note="페이지 배경 (Surface Soft)" border />
        </div>
      </div>
    </section>
  );
};
