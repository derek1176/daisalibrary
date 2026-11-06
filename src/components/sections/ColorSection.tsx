import React, { useState } from 'react';
import { Copy, Check, Palette, Sparkles, CheckCircle2, AlertOctagon } from 'lucide-react';

interface SwatchProps {
  token: string;
  hex: string;
  name: string;
  desc: string;
  border?: boolean;
  isBanned?: boolean;
  isDark?: boolean;
}

const ColorItem: React.FC<SwatchProps> = ({ token, hex, name, desc, border = false, isBanned = false, isDark = false }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (isBanned) return;
    navigator.clipboard.writeText(hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  const isGradient = hex.includes('~');

  return (
    <div
      onClick={handleCopy}
      className={`group rounded-[16px] border p-4 flex items-center justify-between transition-all select-none ${
        isBanned
          ? isDark
            ? 'bg-[#22171A] border-[#4A1E24] opacity-80 cursor-not-allowed'
            : 'bg-red-50/50 border-red-200 opacity-80 cursor-not-allowed'
          : isDark
          ? 'bg-[#1C1B22] border-[#26252D] hover:border-[#3182F6] hover:bg-[#201F26] hover:shadow-[0_8px_20px_rgba(0,0,0,0.4)] cursor-pointer'
          : 'bg-white border-[#E5E8EB] hover:border-[#3182F6] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] cursor-pointer'
      }`}
    >
      <div className="flex items-center gap-4 min-w-0">
        {/* Color Preview Swatch */}
        <div
          className={`w-14 h-14 rounded-[12px] shrink-0 flex items-center justify-center shadow-xs transition-transform group-hover:scale-105 relative ${
            border ? (isDark ? 'border border-[#2B2A34]' : 'border border-[#E5E8EB]') : ''
          }`}
          style={{
            background: isGradient
              ? 'linear-gradient(135deg, #1219F7 0%, #595EF9 100%)'
              : hex,
          }}
        >
          {isBanned && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-[12px]">
              <AlertOctagon className="w-6 h-6 text-red-400" />
            </div>
          )}
        </div>

        {/* Token Info */}
        <div className="space-y-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className={`text-[15px] font-extrabold font-mono tracking-tight ${
              isDark ? 'text-white' : 'text-[#191F28]'
            }`}>
              {token}
            </span>
            <span className={`text-[12px] font-bold px-2 py-0.5 rounded-full font-mono ${
              isBanned
                ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                : isDark
                ? 'bg-[#292931] text-[#E5E5E8]'
                : 'bg-[#F2F4F6] text-[#4E5968]'
            }`}>
              {hex}
            </span>
          </div>
          <p className={`text-[13px] truncate ${isDark ? 'text-[#9E9EA4]' : 'text-[#6B7684]'}`}>{desc}</p>
        </div>
      </div>

      {/* Copy Feedback */}
      <div className="shrink-0 pl-3">
        {isBanned ? (
          <span className="text-[11px] font-bold text-red-400 px-2 py-1 rounded bg-red-950/40 border border-red-800/40">
            사용 금지
          </span>
        ) : copied ? (
          <span className="text-[12px] font-bold text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded-full flex items-center gap-1 border border-emerald-800/50">
            <Check className="w-3.5 h-3.5" /> 복사됨
          </span>
        ) : (
          <button
            type="button"
            className={`text-[12px] font-bold px-2.5 py-1 rounded-[6px] flex items-center gap-1 transition-colors ${
              isDark
                ? 'text-[#9E9EA4] group-hover:text-white bg-[#292931] group-hover:bg-[#32323C]'
                : 'text-[#8B95A1] group-hover:text-[#3182F6] bg-[#F2F4F6] group-hover:bg-[#E8F3FF]'
            }`}
          >
            <Copy className="w-3 h-3" /> 복사
          </button>
        )}
      </div>
    </div>
  );
};

export const ColorSection: React.FC<{ mode?: 'customer' | 'partner' }> = ({ mode = 'customer' }) => {
  const isPartner = mode === 'partner';
  const isDark = false; // 파트너향도 고객향과 동일한 깨끗한 라이트모드로 통일

  return (
    <section id="colors" className="space-y-10">
      {/* Section Header */}
      <div className="border-b pb-6 border-[#E5E8EB]">
        <span className="text-[13px] font-bold text-[#3182F6]">
          {isPartner ? '파트너향 디자인시스템' : '스타일 파운데이션'}
        </span>
        <h2 className="text-[28px] md:text-[32px] font-extrabold tracking-tight mt-1 text-[#191F28]">
          {isPartner ? '파트너 색상 시스템 (Partner Color Tokens)' : '색상 시스템 (Color Tokens)'}
        </h2>
        <p className="text-[15px] mt-2 leading-relaxed max-w-2xl text-[#4E5968]">
          {isPartner
            ? '피그마 공식 [파트너] 스타일가이드(loNec9fjF6nIEgkwxH7aSN) 기반 시맨틱 컬러 토큰입니다. 카드를 클릭하면 Hex 코드가 자동 복사됩니다.'
            : '다이사(da24) 서비스의 12대 시맨틱 컬러 토큰입니다. 카드를 클릭하면 Hex 코드가 클립보드에 자동 복사됩니다.'}
        </p>
      </div>

      {/* Category 1: Main Colors */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 border-b pb-2 border-[#F2F4F6]">
          <span className="w-2.5 h-2.5 rounded-full bg-[#1219F7]"></span>
          <h3 className="text-[17px] font-bold text-[#191F28]">
            메인 브랜드 컬러 (Main Colors)
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          <ColorItem token="main-01" hex="#1219F7" name="Primary Blue" desc="전사 메인 CTA 버튼(62px), 포커스 테두리, 핵심 브랜드 블루" isDark={isDark} />
          <ColorItem token="main-02" hex="#595EF9" name="Secondary Blue" desc="보조 포인트, 서브 버튼, 선택 칩 테두리 및 액티브 라인" isDark={isDark} />
          {!isPartner && (
            <>
              <ColorItem token="main-03" hex="#1219F7 ~ #595EF9" name="Brand Gradient" desc="대형 프로모션 배너 및 브랜드 강조 그라디언트" isDark={isDark} />
              <ColorItem token="main-04" hex="#F4F5FF" name="Tint Background" desc="키컬러 배경 틴트, 상태 뱃지 및 안내 박스 배경" border isDark={isDark} />
            </>
          )}
        </div>
      </div>

      {/* Category 2: Partner Sub Colors (Yellow & Red) */}
      {isPartner && (
        <div className="space-y-4">
          <div className="flex items-center gap-2 border-b border-[#F2F4F6] pb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F7D915]"></span>
            <h3 className="text-[17px] font-bold text-[#191F28]">서브 포인트 컬러 (Sub Colors)</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            <ColorItem token="sub-01" hex="#F7D915" name="Sub Yellow" desc="파트너 강조 포인트, 노란색 태그, 주의 및 알림 강조" isDark={isDark} />
            <ColorItem token="sub-02" hex="#F34766" name="Sub Red / Error" desc="오류 알림, 에러 인풋 보더, 취소/패널티 등 부정 상태" isDark={isDark} />
          </div>
        </div>
      )}

      {/* Category 3: Text Hierarchy */}
      <div className="space-y-4">
        <div className={`flex items-center gap-2 border-b pb-2 ${isDark ? 'border-[#222129]' : 'border-[#F2F4F6]'}`}>
          <span className="w-2.5 h-2.5 rounded-full bg-[#121212]"></span>
          <h3 className={`text-[17px] font-bold ${isDark ? 'text-white' : 'text-[#191F28]'}`}>
            텍스트 위계 컬러 (Text Hierarchy 4종)
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          <ColorItem token="text-01" hex="#121212" name="Headline / Title" desc="페이지 대제목, 섹션 헤드라인, 메인 강조 문구" isDark={isDark} />
          <ColorItem token="text-02" hex="#333333" name="Body Text" desc="본문 기본 텍스트, 인풋 입력 값, 라벨 텍스트" isDark={isDark} />
          <ColorItem token="text-03" hex="#666666" name="Sub / Help" desc="보조 설명문, 입력 힌트 안내, 모달 본문 설명" isDark={isDark} />
          <ColorItem token="text-04" hex="#888888" name="Caption / Placeholder" desc="인풋 플레이스홀더, 비활성 텍스트, 각주 약관 문구" isDark={isDark} />
        </div>
      </div>

      {/* Category 4: Etc & Borders */}
      <div className="space-y-4">
        <div className={`flex items-center gap-2 border-b pb-2 ${isDark ? 'border-[#222129]' : 'border-[#F2F4F6]'}`}>
          <span className="w-2.5 h-2.5 rounded-full bg-[#D7DBE2]"></span>
          <h3 className={`text-[17px] font-bold ${isDark ? 'text-white' : 'text-[#191F28]'}`}>
            배경 및 구분선 (Borders & Backgrounds)
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          <ColorItem token="etc-01" hex="#FFFFFF" name="White" desc="기본 카드 컨테이너 배경, 인풋 필드 배경" border isDark={isDark} />
          <ColorItem token="etc-02" hex="#D7DBE2" name="Default Border" desc="인풋 테두리 기본 스트로크, 카드 라인 구분선" border isDark={isDark} />
          <ColorItem token="etc-03" hex="#EBEEF2" name="Divider / Cancel" desc="영역 구분선, 취소/보조 버튼 배경" border isDark={isDark} />
          <ColorItem token="etc-04" hex="#F7F8FA" name="Disabled BG" desc="비활성 인풋 배경, 탭바 컨테이너 배경" border isDark={isDark} />
          <ColorItem token="etc-05" hex="#FAFAFA" name="Page Background" desc="전체 대시보드 및 서비스 기본 배경색" border isDark={isDark} />
          {!isPartner && (
            <ColorItem token="dimmed" hex="rgba(0,0,0,0.6)" name="Overlay Dimmed" desc="모달 및 바텀시트 호출 시 배경 딤드 60%" isDark={isDark} />
          )}
        </div>
      </div>

      {/* Category 5: Prohibited Colors for Partner */}
      {isPartner && (
        <div className="space-y-4">
          <div className="flex items-center gap-2 border-b border-red-200 pb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
            <h3 className="text-[17px] font-bold text-red-500">사용 금지 컬러 (Not Used Tokens)</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            <ColorItem token="notused-01" hex="#1E25F8" name="Not Used 01" desc="레거시 블루 톤 (현재 main-01 #1219F7로 완전 통일됨)" isBanned isDark={isDark} />
            <ColorItem token="notused-02" hex="#EBEEF2" name="Not Used 02" desc="비표준 구분선 톤 (etc-02 / etc-03으로 명확히 구분하여 사용)" isBanned isDark={isDark} />
          </div>
        </div>
      )}
    </section>
  );
};
