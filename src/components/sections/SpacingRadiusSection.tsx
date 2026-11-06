import React, { useState } from 'react';
import { Copy, Check, AlertOctagon, ShieldCheck, Info } from 'lucide-react';

export const SpacingRadiusSection: React.FC<{ mode?: 'customer' | 'partner' }> = ({ mode = 'customer' }) => {
  const isPartner = mode === 'partner';
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
    { token: 'sp-56', px: 56, mult: 'x28', isCore: true, note: isPartner ? '★ 파트너 입력창 표준 높이 (56px)' : '★ 전사 표준 터치 타겟 높이 (56px)' },
    ...(isPartner ? [{ token: 'sp-62', px: 62, mult: 'x31', isCore: true, note: '★ 파트너 메인 CTA 버튼 높이 (62px)' }] : []),
  ];

  const customerRadiusList = [
    {
      val: '0px',
      name: 'None (직각)',
      desc: 'Floating CTA (하단 밀착 버튼, 레거시 지양)',
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
      name: 'MD (★ 다이사 핵심 표준)',
      desc: 'Public 버튼, 모든 Form Input, 카드 기본 표준, 모달 액션 버튼',
      tailwind: 'rounded-[10px]',
      highlight: true,
    },
    {
      val: '12px',
      name: 'LG (중형 카드)',
      desc: '프로모션 배너 카드, 견적 비교 서브 카드',
      tailwind: 'rounded-[12px]',
      highlight: false,
    },
    {
      val: '16px',
      name: 'XL (대형/모달)',
      desc: 'Alert/Confirm 모달 다이얼로그 (312px), 바텀시트 상단 모서리',
      tailwind: 'rounded-[16px]',
      highlight: false,
    },
    {
      val: 'Full',
      name: 'Pill (완전 둥근 형태)',
      desc: '카테고리 칩 필터, 선택 칩 (전사 라운드 미적용)',
      tailwind: 'rounded-full',
      highlight: false,
    },
  ];

  const partnerRadiusList = [
    {
      val: '4px',
      name: 'SM (서브/인라인 액션)',
      desc: '서브 액션 버튼, 태그 칩, 마이크로 복사 버튼',
      tailwind: 'rounded-[4px]',
      highlight: false,
    },
    {
      val: '6px',
      name: '★ Core Standard (파트너 전사 표준)',
      desc: '메인 버튼(312x62), 입력창(56px), 오더 카드(627px), 모달 다이얼로그',
      tailwind: 'rounded-[6px]',
      highlight: true,
    },
    {
      val: 'Full',
      name: 'Pill (완전 둥근 형태)',
      desc: '필터 및 선택 칩 (파트너향도 라운드 안 따지고 완전 둥근 형태 적용)',
      tailwind: 'rounded-full',
      highlight: false,
    },
    {
      val: '10px',
      name: '🚨 고객향 인풋/버튼 규격 (파트너 금지)',
      desc: '파트너 직각 아이덴티티 위배로 사용 엄격 금지 (6px 준수)',
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

  const radiusList = isPartner ? partnerRadiusList : customerRadiusList;

  return (
    <section id="spacing-radius" className="space-y-10">
      {/* Section Header */}
      <div className="border-b pb-4 border-[#E5E8EB]">
        <h2 className="text-[28px] md:text-[32px] font-extrabold tracking-tight text-[#191F28]">
          Spacing & Radius
        </h2>
      </div>

      {/* Part 1: Corner Radius */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b pb-2 border-[#F2F4F6]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#1219F7]"></span>
            <h3 className="text-[17px] font-bold text-[#191F28]">
              {isPartner ? '코너 라운드 규격 (Corner Radius: 기본 6px)' : '코너 라운드 규격 (Corner Radius: 기본 10px)'}
            </h3>
          </div>
          <span className="text-[12px] font-bold text-[#3182F6]">
            {isPartner ? '핵심 표준: 6px / 금지: 10px, 16px' : '핵심 표준: 10px (카드·버튼·인풋)'}
          </span>
        </div>

        {isPartner && (
          <div className="bg-[#FFF8E6] border border-[#FFD666] rounded-[14px] p-4 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#D48806] shrink-0 mt-0.5" />
            <div className="text-[13px] text-[#595959] leading-relaxed">
              <strong className="text-[#191F28]">파트너 직각 아이덴티티 원칙:</strong> 파트너 화면은 현장 업무 효율성과 높은 정보 밀도를 위해 날렵하고 정돈된 <strong>Radius 6px</strong>를 기본으로 사용합니다. 단, 필터 및 선택 칩은 라운드 따지지 않고 완전한 라운드(rounded-full) 형태를 적용하며, 고객향의 10px, 16px 둥근 곡률은 파트너 환경에서 사용을 엄격히 차단합니다.
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {radiusList.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-[16px] border p-5 flex flex-col justify-between transition-all select-none ${
                (item as any).isBanned
                  ? 'bg-red-50/50 border-red-200 opacity-75'
                  : item.highlight
                  ? 'bg-[#F4F8FF] border-[#3182F6] shadow-sm'
                  : 'bg-white border-[#E5E8EB]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[16px] font-black ${
                    (item as any).isBanned
                      ? 'text-red-500'
                      : item.highlight
                      ? 'text-[#1219F7]'
                      : 'text-[#191F28]'
                  }`}>
                    {item.val}
                  </span>
                  {(item as any).isBanned ? (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-red-100 text-red-600 border border-red-300">
                      사용 금지
                    </span>
                  ) : item.highlight ? (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#1219F7] text-white">
                      {isPartner ? '파트너 전사 표준' : '전사 표준'}
                    </span>
                  ) : (
                    <span className="text-[11px] font-mono text-[#8B95A1]">
                      {item.tailwind}
                    </span>
                  )}
                </div>

                {/* Visual Box Preview */}
                <div className="h-16 rounded-[8px] flex items-center justify-center mb-3 border bg-[#F9FAFB] border-[#E5E8EB]">
                  <div
                    style={{ borderRadius: item.val === 'Full' ? '9999px' : item.val }}
                    className={`w-20 h-10 border flex items-center justify-center font-bold text-[11px] ${
                      (item as any).isBanned
                        ? 'border-dashed border-red-500 text-red-500 bg-red-50'
                        : item.highlight
                        ? 'border-[#1219F7] text-[#1219F7] bg-white shadow-xs'
                        : 'border-[#D7DBE2] text-[#4E5968] bg-white'
                    }`}
                  >
                    {item.val}
                  </div>
                </div>

                <div className="text-[13px] font-bold text-[#191F28]">
                  {item.name}
                </div>
                <p className="text-[12px] mt-1 leading-relaxed text-[#6B7684]">
                  {item.desc}
                </p>
              </div>

              {!(item as any).isBanned && (
                <div className="mt-4 pt-3 border-t border-[#F2F4F6] flex justify-end">
                  <button
                    type="button"
                    onClick={() => copy(item.tailwind)}
                    className="text-[11px] font-bold px-2 py-1 rounded-[6px] flex items-center gap-1 transition-colors bg-[#F2F4F6] text-[#6B7684] hover:text-[#191F28]"
                  >
                    {copiedToken === item.tailwind ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
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
        <div className="flex items-center justify-between border-b pb-2 border-[#F2F4F6]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#1219F7]"></span>
            <h3 className="text-[17px] font-bold text-[#191F28]">
              스페이싱 스케일 (Spacing Scale)
            </h3>
          </div>
          <span className="text-[12px] font-mono text-[#8B95A1]">
            Base unit: 8px (2px micro)
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {spacingList.map((item) => (
            <div
              key={item.token}
              className={`p-4 rounded-[14px] border flex items-center justify-between transition-all select-none ${
                item.isCore
                  ? 'bg-[#F4F8FF] border-[#3182F6]'
                  : 'bg-white border-[#E5E8EB]'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1.5">
                    <span className={`text-[14px] font-bold font-mono ${
                      item.isCore ? 'text-[#1219F7]' : 'text-[#191F28]'
                    }`}>
                      {item.token}
                    </span>
                    <span className="text-[11px] font-medium px-1.5 py-0.2 rounded bg-[#F2F4F6] text-[#6B7684]">
                      {item.px}px
                    </span>
                  </div>
                  <div className="text-[11px] text-[#6B7684]">
                    {item.note}
                  </div>
                </div>
              </div>

              {/* Visual Bar */}
              <div className="flex items-center gap-2">
                <div
                  style={{ width: `${Math.min(item.px, 64)}px` }}
                  className={`h-2 rounded-full ${
                    item.isCore ? 'bg-[#1219F7]' : 'bg-[#CBD5E1]'
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
