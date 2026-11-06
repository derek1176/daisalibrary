import React, { useState } from 'react';
import { Copy, Check, AlertOctagon, ShieldCheck, Info } from 'lucide-react';

export const SpacingRadiusSection: React.FC<{ mode?: 'customer' | 'partner' }> = ({ mode = 'customer' }) => {
  const isDark = mode === 'partner';
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  const copy = (val: string) => {
    navigator.clipboard.writeText(val);
    setCopiedToken(val);
    setTimeout(() => setCopiedToken(null), 1200);
  };

  const spacingList = [
    { token: 'sp-2', px: 2, mult: 'x1', isCore: false, note: '아이콘 미세 보정' },
    { token: 'sp-4', px: 4, mult: 'x2', isCore: false, note: '아이콘-텍스트 최소 간격' },
    { token: 'sp-6', px: 6, mult: 'x3', isCore: false, note: '라벨-인풋 상하 간격' },
    { token: 'sp-8', px: 8, mult: 'x4', isCore: true, note: '컴포넌트 내부 기본 간격' },
    { token: 'sp-10', px: 10, mult: 'x5', isCore: false, note: '세그먼트 및 칩 내부 패딩' },
    { token: 'sp-12', px: 12, mult: 'x6', isCore: false, note: '소형 카드 내부 여백' },
    { token: 'sp-16', px: 16, mult: 'x8', isCore: true, note: '★ 인풋/버튼 기본 패딩, 모달 좌우 여백' },
    { token: 'sp-20', px: 20, mult: 'x10', isCore: false, note: '서브 섹션 타이틀 간격' },
    { token: 'sp-24', px: 24, mult: 'x12', isCore: true, note: '★ 모바일 양측 마진 (360-24x2=312)' },
    { token: 'sp-28', px: 28, mult: 'x14', isCore: false, note: '카드 패널 기본 마진' },
    { token: 'sp-32', px: 32, mult: 'x16', isCore: false, note: '섹션 간 블록 여백' },
    { token: 'sp-40', px: 40, mult: 'x20', isCore: false, note: '대형 섹션 구분 간격' },
    { token: 'sp-56', px: 56, mult: 'x28', isCore: true, note: isDark ? '★ 파트너 입력창 표준 높이 (56px)' : '★ 전사 표준 터치 타겟 높이 (56px)' },
    ...(isDark ? [{ token: 'sp-62', px: 62, mult: 'x31', isCore: true, note: '★ 파트너 메인 CTA 버튼 높이 (62px)' }] : []),
  ];

  const customerRadiusList = [
    {
      val: '0px',
      name: 'None (직각)',
      desc: 'Floating CTA (하단 밀착 버튼)',
      tailwind: 'rounded-none',
      highlight: false,
    },
    {
      val: '6px',
      name: 'XS (초소형)',
      desc: 'Tooltip 말풍선, 미니 배지',
      tailwind: 'rounded-[6px]',
      highlight: false,
    },
    {
      val: '8px',
      name: 'SM (서브/칩)',
      desc: '소형 서브 카드(312x94), 컴팩트 칩 블록',
      tailwind: 'rounded-[8px]',
      highlight: false,
    },
    {
      val: '10px',
      name: 'MD (★ 전사 표준)',
      desc: 'Public 버튼, 모든 인풋, 카드(Card) 기본 표준',
      tailwind: 'rounded-[10px]',
      highlight: true,
    },
    {
      val: '12px',
      name: 'LG (중형 카드)',
      desc: '중형 컨테이너 패널, 모달 확인 버튼',
      tailwind: 'rounded-[12px]',
      highlight: false,
    },
    {
      val: '16px',
      name: 'XL (대형/모달)',
      desc: 'Alert 및 Confirm 모달 다이얼로그 바디',
      tailwind: 'rounded-[16px]',
      highlight: false,
    },
    {
      val: '20px',
      name: '2XL (바텀시트)',
      desc: '바텀시트 최상단 라운드 (상단 좌우 모서리)',
      tailwind: 'rounded-t-[20px]',
      highlight: false,
    },
  ];

  const partnerRadiusList = [
    {
      val: '0px',
      name: 'None (하단 밀착)',
      desc: '하단 고정 밀착형 CTA 버튼 (여백 없이 접촉)',
      tailwind: 'rounded-none',
      highlight: false,
    },
    {
      val: '4px',
      name: 'Sub-Component (보조 버튼/태그)',
      desc: '서브 액션 버튼(280x51), 컴팩트 칩, 인라인 태그',
      tailwind: 'rounded-[4px]',
      highlight: false,
    },
    {
      val: '6px',
      name: '★ B2B Core Standard (전사 핵심 표준)',
      desc: '메인 버튼(312x62), 입력창(56px), 오더 카드(627px), 폼 박스, 모달',
      tailwind: 'rounded-[6px]',
      highlight: true,
    },
    {
      val: '10px',
      name: '🚨 고객향 규격 (파트너 금지)',
      desc: '파트너 B2B 현장 직각 아이덴티티 위배로 사용 금지',
      tailwind: 'rounded-[10px]',
      isBanned: true,
    },
    {
      val: '16px',
      name: '🚨 고객향 모달 규격 (파트너 금지)',
      desc: '파트너 모달은 6px 직각 규격 준수 (16px 과도한 라운드 금지)',
      tailwind: 'rounded-[16px]',
      isBanned: true,
    },
  ];

  const radiusList = isDark ? partnerRadiusList : customerRadiusList;

  return (
    <section id="spacing-radius" className="space-y-10">
      {/* Section Header */}
      <div className={`border-b pb-6 ${isDark ? 'border-[#262F40]' : 'border-[#E5E8EB]'}`}>
        <span className={`text-[13px] font-bold ${isDark ? 'text-[#7075FA]' : 'text-[#3182F6]'}`}>
          {isDark ? '파트너 B2B 공간 파운데이션' : '기초 규격'}
        </span>
        <h2 className={`text-[28px] md:text-[32px] font-extrabold tracking-tight mt-1 ${
          isDark ? 'text-white' : 'text-[#191F28]'
        }`}>
          {isDark ? '파트너 여백 및 라운드 규격 (Spacing & Radius 6px)' : '여백 및 라운드 (Spacing & Radius)'}
        </h2>
        <p className={`text-[15px] mt-2 leading-relaxed max-w-2xl ${
          isDark ? 'text-[#94A3B8]' : 'text-[#4E5968]'
        }`}>
          {isDark
            ? '피그마 공식 [파트너] 스타일가이드(loNec9fjF6nIEgkwxH7aSN) 기반 규격입니다. 파트너 B2B의 전사 코어 곡률은 Radius 6px이며, 보조 4px 외에 고객향의 10px 및 16px 곡률은 사용이 엄격히 금지됩니다.'
            : '다이사 서비스의 일관된 시각적 리듬을 위한 8의 배수 기반 스페이싱 시스템과 컴포넌트별 권장 Corner Radius 규격입니다.'}
        </p>
      </div>

      {/* Part 1: Corner Radius */}
      <div className="space-y-4">
        <div className={`flex items-center justify-between border-b pb-2 ${isDark ? 'border-[#262F40]' : 'border-[#F2F4F6]'}`}>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#1219F7]"></span>
            <h3 className={`text-[17px] font-bold ${isDark ? 'text-white' : 'text-[#191F28]'}`}>
              {isDark ? '코너 라운드 규격 (Corner Radius: 기본 6px)' : '코너 라운드 규격 (Corner Radius: 기본 10px)'}
            </h3>
          </div>
          <span className={`text-[12px] font-bold ${isDark ? 'text-[#7075FA]' : 'text-[#3182F6]'}`}>
            {isDark ? '핵심 표준: 6px / 금지: 10px, 16px' : '핵심 표준: 10px (카드·버튼·인풋)'}
          </span>
        </div>

        {isDark && (
          <div className="bg-[#161B26] border border-[#595EF9]/40 rounded-[14px] p-4 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#7075FA] shrink-0 mt-0.5" />
            <div className="text-[13px] text-[#94A3B8] leading-relaxed">
              <strong className="text-white">B2B 파트너 직각 아이덴티티 원칙:</strong> 파트너 화면은 현장 업무 효율성과 높은 정보 밀도를 위해 날렵하고 정돈된 <strong>Radius 6px</strong>를 기본으로 사용합니다. 고객향의 10px, 16px 둥근 곡률은 파트너 환경에서 사용을 엄격히 차단합니다.
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {radiusList.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-[16px] border p-5 flex flex-col justify-between transition-all select-none ${
                (item as any).isBanned
                  ? isDark
                    ? 'bg-[#1E1922] border-red-900/50 opacity-75'
                    : 'bg-red-50/50 border-red-200 opacity-75'
                  : item.highlight
                  ? isDark
                    ? 'bg-[#1A2234] border-[#595EF9] shadow-[0_4px_20px_rgba(89,94,249,0.2)]'
                    : 'bg-[#F4F8FF] border-[#3182F6] shadow-sm'
                  : isDark
                  ? 'bg-[#161B26] border-[#262F40]'
                  : 'bg-white border-[#E5E8EB]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[16px] font-black ${
                    (item as any).isBanned
                      ? 'text-red-400'
                      : item.highlight
                      ? isDark ? 'text-[#7075FA]' : 'text-[#1219F7]'
                      : isDark ? 'text-white' : 'text-[#191F28]'
                  }`}>
                    {item.val}
                  </span>
                  {(item as any).isBanned ? (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-red-950/60 text-red-300 border border-red-800">
                      사용 금지
                    </span>
                  ) : item.highlight ? (
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                      isDark ? 'bg-[#595EF9] text-white' : 'bg-[#1219F7] text-white'
                    }`}>
                      {isDark ? 'B2B 전사 표준' : '전사 표준'}
                    </span>
                  ) : (
                    <span className={`text-[11px] font-mono ${isDark ? 'text-[#64748B]' : 'text-[#8B95A1]'}`}>
                      {item.tailwind}
                    </span>
                  )}
                </div>

                {/* Visual Box Preview */}
                <div className={`h-16 rounded-[8px] flex items-center justify-center mb-3 border ${
                  isDark ? 'bg-[#10141D] border-[#222A3A]' : 'bg-[#F9FAFB] border-[#E5E8EB]'
                }`}>
                  <div
                    style={{ borderRadius: item.val }}
                    className={`w-20 h-10 border-2 flex items-center justify-center font-bold text-[11px] ${
                      (item as any).isBanned
                        ? 'border-dashed border-red-500/60 text-red-400 bg-red-500/10'
                        : item.highlight
                        ? isDark ? 'border-[#595EF9] text-[#7075FA] bg-[#595EF9]/10' : 'border-[#1219F7] text-[#1219F7] bg-white'
                        : isDark ? 'border-[#3A4560] text-[#CBD5E1] bg-[#161B26]' : 'border-[#D7DBE2] text-[#4E5968] bg-white'
                    }`}
                  >
                    {item.val}
                  </div>
                </div>

                <div className={`text-[13px] font-bold ${isDark ? 'text-[#E5E8EB]' : 'text-[#191F28]'}`}>
                  {item.name}
                </div>
                <p className={`text-[12px] mt-1 leading-relaxed ${isDark ? 'text-[#94A3B8]' : 'text-[#6B7684]'}`}>
                  {item.desc}
                </p>
              </div>

              {!(item as any).isBanned && (
                <div className={`mt-4 pt-3 border-t flex justify-end ${isDark ? 'border-[#222A3A]' : 'border-[#F2F4F6]'}`}>
                  <button
                    type="button"
                    onClick={() => copy(item.tailwind)}
                    className={`text-[11px] font-bold px-2 py-1 rounded-[6px] flex items-center gap-1 transition-colors ${
                      copiedToken === item.tailwind
                        ? 'bg-emerald-950 text-emerald-300'
                        : isDark
                        ? 'bg-[#1E2536] text-[#94A3B8] hover:text-white'
                        : 'bg-[#F2F4F6] text-[#6B7684] hover:text-[#191F28]'
                    }`}
                  >
                    {copiedToken === item.tailwind ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                    {copiedToken === item.tailwind ? '복사됨' : item.tailwind}
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Part 2: Spacing Tokens (Grid) */}
      <div className="space-y-4">
        <div className={`flex items-center justify-between border-b pb-2 ${isDark ? 'border-[#262F40]' : 'border-[#F2F4F6]'}`}>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#1219F7]"></span>
            <h3 className={`text-[17px] font-bold ${isDark ? 'text-white' : 'text-[#191F28]'}`}>
              여백 토큰 (Spacing Tokens)
            </h3>
          </div>
          <span className={`text-[12px] font-mono ${isDark ? 'text-[#64748B]' : 'text-[#8B95A1]'}`}>
            Base 8px Grid
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
          {spacingList.map((item) => (
            <div
              key={item.token}
              onClick={() => copy(`${item.px}px`)}
              className={`rounded-[14px] border p-3.5 flex items-center justify-between transition-all cursor-pointer select-none ${
                item.isCore
                  ? isDark
                    ? 'bg-[#1A2234] border-[#595EF9]/60 hover:border-[#595EF9]'
                    : 'bg-[#F4F8FF] border-[#3182F6]/60 hover:border-[#3182F6]'
                  : isDark
                  ? 'bg-[#161B26] border-[#262F40] hover:border-[#3B475E]'
                  : 'bg-white border-[#E5E8EB] hover:border-[#3182F6]'
              }`}
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className={`text-[14px] font-mono font-extrabold ${
                    item.isCore
                      ? isDark ? 'text-[#7075FA]' : 'text-[#1219F7]'
                      : isDark ? 'text-white' : 'text-[#191F28]'
                  }`}>
                    {item.px}px
                  </span>
                  <span className={`text-[11px] font-mono font-bold px-1.5 py-0.2 rounded ${
                    isDark ? 'bg-[#1E2536] text-[#94A3B8]' : 'bg-[#F2F4F6] text-[#6B7684]'
                  }`}>
                    {item.token}
                  </span>
                </div>
                <div className={`text-[11px] truncate max-w-[170px] ${
                  isDark ? 'text-[#94A3B8]' : 'text-[#6B7684]'
                }`}>
                  {item.note}
                </div>
              </div>

              {/* Visual Bar representation */}
              <div className="flex items-center gap-2">
                <div
                  style={{ width: `${Math.min(item.px, 48)}px` }}
                  className={`h-2 rounded-full ${
                    item.isCore
                      ? isDark ? 'bg-[#595EF9]' : 'bg-[#1219F7]'
                      : isDark ? 'bg-[#3A4560]' : 'bg-[#CBD5E1]'
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
