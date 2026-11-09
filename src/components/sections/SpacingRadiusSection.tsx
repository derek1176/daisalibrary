import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

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
    { token: 'sp-16', px: 16, mult: 'x8', isCore: true, note: '인풋/버튼 기본 패딩, 모달 좌우 여백' },
    { token: 'sp-20', px: 20, mult: 'x10', isCore: false, note: '서브 섹션 타이틀 간격' },
    { token: 'sp-24', px: 24, mult: 'x12', isCore: true, note: '모바일 양측 마진 (360-24x2=312)' },
    { token: 'sp-28', px: 28, mult: 'x14', isCore: false, note: '카드 패널 기본 마진' },
    { token: 'sp-32', px: 32, mult: 'x16', isCore: false, note: '섹션 간 블록 여백' },
    { token: 'sp-40', px: 40, mult: 'x20', isCore: false, note: '대형 섹션 구분 간격' },
    {
      token: 'sp-56',
      px: 56,
      mult: 'x28',
      isCore: true,
      note: isPartner ? '파트너 입력창 표준 높이 (56px)' : '전사 표준 터치 타겟 높이 (56px)',
    },
    ...(isPartner
      ? [{ token: 'sp-62', px: 62, mult: 'x31', isCore: true, note: '파트너 메인 CTA 버튼 높이 (62px)' }]
      : []),
  ];

  const customerRadiusList = [
    {
      val: '6px',
      name: 'XS',
      desc: 'Tooltip 말풍선, 미니 배지',
      tailwind: 'rounded-[6px]',
      highlight: false,
    },
    {
      val: '8px',
      name: 'SM',
      desc: '소형 서브 카드(312x94), 컴팩트 칩 블록',
      tailwind: 'rounded-[8px]',
      highlight: false,
    },
    {
      val: '10px',
      name: 'MD',
      desc: 'Public 버튼, Form Input, 카드 기본 표준, 모달 액션 버튼 (다이사 전사 표준)',
      tailwind: 'rounded-[10px]',
      highlight: true,
    },
    {
      val: '12px',
      name: 'LG',
      desc: '프로모션 배너 카드, 견적 비교 서브 카드',
      tailwind: 'rounded-[12px]',
      highlight: false,
    },
    {
      val: '16px',
      name: 'XL',
      desc: 'Alert/Confirm 모달 다이얼로그 (312px), 바텀시트 상단 모서리',
      tailwind: 'rounded-[16px]',
      highlight: false,
    },
    {
      val: 'Full',
      name: 'Pill',
      desc: '카테고리 칩 필터, 선택 칩 (전사 원형 적용)',
      tailwind: 'rounded-full',
      highlight: false,
    },
  ];

  const partnerRadiusList = [
    {
      val: '4px',
      name: 'SM',
      desc: '서브 액션 버튼, 태그 칩, 마이크로 복사 버튼',
      tailwind: 'rounded-[4px]',
      highlight: false,
    },
    {
      val: '6px',
      name: 'Core Standard',
      desc: '메인 버튼(312x62), 입력창(56px), 오더 카드(627px), 모달 다이얼로그 (파트너 전사 표준)',
      tailwind: 'rounded-[6px]',
      highlight: true,
    },
    {
      val: 'Full',
      name: 'Pill',
      desc: '필터 및 선택 칩 (파트너향도 라운드 따지지 않고 완전 둥근 형태 적용)',
      tailwind: 'rounded-full',
      highlight: false,
    },
    {
      val: '10px',
      name: '고객향 규격 (금지)',
      desc: '파트너 직각 아이덴티티 위배로 사용 엄격 금지 (6px 준수)',
      tailwind: 'rounded-[10px]',
      isBanned: true,
    },
    {
      val: '16px',
      name: '고객향 모달 규격 (금지)',
      desc: '파트너 모달은 6px 직각 규격 준수 (16px 과도한 곡률 금지)',
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

      {/* Part 1: Spacing Table */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-[18px] font-bold text-[#191F28]">Spacing</h3>
          <span className="text-[12px] font-mono text-[#8B95A1]">Base unit: 8px (2px micro)</span>
        </div>

        <div className="bg-white rounded-[16px] shadow-xs overflow-hidden border border-[#E5E8EB]">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#F2F4F6] text-[13px] font-semibold text-[#8B95A1] bg-[#FAFAFC]">
                  <th className="py-3.5 px-6">Token</th>
                  <th className="py-3.5 px-6">Size</th>
                  <th className="py-3.5 px-6">Multiplier</th>
                  <th className="py-3.5 px-6 min-w-[170px]">Indicator</th>
                  <th className="py-3.5 px-6">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F2F4F6] text-[13px]">
                {spacingList.map((item) => (
                  <tr
                    key={item.token}
                    onClick={() => copy(item.token)}
                    className="hover:bg-[#F9FAFB] transition-colors cursor-pointer group"
                    title="클릭하여 토큰 복사"
                  >
                    {/* Token */}
                    <td className="py-3.5 px-6">
                      <div className="flex items-center gap-2">
                        <span
                          className={`font-mono font-semibold transition-colors ${
                            item.isCore
                              ? 'text-[#1219F7]'
                              : 'text-[#191F28] group-hover:text-[#1219F7]'
                          }`}
                        >
                          {item.token}
                        </span>
                        {item.isCore && (
                          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-[4px] bg-[#EEF2FF] text-[#1219F7]">
                            Core
                          </span>
                        )}
                      </div>
                    </td>

                    {/* Size */}
                    <td className="py-3.5 px-6 font-mono text-[#333D4B]">{item.px}px</td>

                    {/* Multiplier */}
                    <td className="py-3.5 px-6 font-mono text-[#8B95A1]">{item.mult}</td>

                    {/* Indicator: Sharp Rectangular Bar (Rounded-none) */}
                    <td className="py-3.5 px-6">
                      <div className="flex items-center">
                        <div
                          style={{ width: `${Math.max(item.px * 2, 2)}px` }}
                          className={`h-3.5 shrink-0 rounded-none ${
                            item.isCore ? 'bg-[#1219F7]' : 'bg-[#94A3B8]'
                          }`}
                        />
                      </div>
                    </td>

                    {/* Description */}
                    <td className="py-3.5 px-6 text-[#4E5968] font-medium">
                      <div className="flex items-center justify-between gap-4">
                        <span>{item.note}</span>
                        {copiedToken === item.token ? (
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-[4px]">
                            <Check className="w-3 h-3" /> 복사됨
                          </span>
                        ) : (
                          <Copy className="w-3.5 h-3.5 text-[#8B95A1] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Part 2: Corner Radius Table */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-[18px] font-bold text-[#191F28]">Corner Radius</h3>
          <span className="text-[12px] font-medium text-[#1219F7]">
            {isPartner ? '핵심 표준: 6px (10px·16px 금지)' : '핵심 표준: 10px (카드·버튼·인풋)'}
          </span>
        </div>

        {isPartner && (
          <div className="p-4 bg-white rounded-[16px] shadow-xs border border-[#E5E8EB] text-[13px] text-[#4E5968] leading-relaxed">
            <strong className="text-[#191F28]">파트너 직각 아이덴티티 원칙:</strong> 파트너 화면은 현장 업무 효율성과 높은 정보 밀도를 위해 날렵하고 정돈된 <strong className="text-[#1219F7]">Radius 6px</strong>를 기본으로 사용합니다. 단, 필터 및 선택 칩은 완전한 라운드(Full/Pill) 형태를 적용하며, 고객향의 10px, 16px 둥근 곡률은 사용이 엄격히 금지됩니다.
          </div>
        )}

        <div className="bg-white rounded-[16px] shadow-xs overflow-hidden border border-[#E5E8EB]">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#F2F4F6] text-[13px] font-semibold text-[#8B95A1] bg-[#FAFAFC]">
                  <th className="py-3.5 px-6">Token</th>
                  <th className="py-3.5 px-6">Radius</th>
                  <th className="py-3.5 px-6">Preview</th>
                  <th className="py-3.5 px-6">Tailwind</th>
                  <th className="py-3.5 px-6">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F2F4F6] text-[13px]">
                {radiusList.map((item, idx) => {
                  const isBanned = (item as any).isBanned;
                  return (
                    <tr
                      key={idx}
                      onClick={() => !isBanned && copy(item.tailwind)}
                      className={`transition-colors select-none ${
                        isBanned
                          ? 'bg-red-50/20'
                          : 'hover:bg-[#F9FAFB] cursor-pointer group'
                      }`}
                      title={isBanned ? undefined : '클릭하여 클래스 복사'}
                    >
                      {/* Token */}
                      <td className="py-3.5 px-6">
                        <div className="flex items-center gap-2">
                          <span
                            className={`font-semibold ${
                              isBanned
                                ? 'text-red-500'
                                : item.highlight
                                ? 'text-[#1219F7]'
                                : 'text-[#191F28]'
                            }`}
                          >
                            {item.name}
                          </span>
                          {item.highlight && (
                            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-[4px] bg-[#EEF2FF] text-[#1219F7]">
                              {isPartner ? '파트너 표준' : '전사 표준'}
                            </span>
                          )}
                          {isBanned && (
                            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-[4px] bg-red-100 text-red-600">
                              사용 금지
                            </span>
                          )}
                        </div>
                      </td>

                      {/* Value */}
                      <td className="py-3.5 px-6 font-mono text-[#333D4B] font-semibold">
                        {item.val}
                      </td>

                      {/* Preview Box */}
                      <td className="py-3.5 px-6">
                        <div
                          style={{ borderRadius: item.val === 'Full' ? '9999px' : item.val }}
                          className={`w-14 h-8 flex items-center justify-center font-bold text-[11px] ${
                            isBanned
                              ? 'border-2 border-dashed border-red-300 text-red-500 bg-red-50'
                              : item.highlight
                              ? 'border-2 border-[#1219F7] text-[#1219F7] bg-white shadow-2xs'
                              : 'border border-[#CBD5E1] text-[#4E5968] bg-[#F8FAFC]'
                          }`}
                        >
                          {item.val}
                        </div>
                      </td>

                      {/* Tailwind */}
                      <td className="py-3.5 px-6 font-mono text-[12px] text-[#4E5968]">
                        {item.tailwind}
                      </td>

                      {/* Description */}
                      <td className="py-3.5 px-6 text-[#4E5968]">
                        <div className="flex items-center justify-between gap-4">
                          <span className={isBanned ? 'text-red-600' : ''}>{item.desc}</span>
                          {!isBanned && (
                            copiedToken === item.tailwind ? (
                              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-[4px]">
                                <Check className="w-3 h-3" /> 복사됨
                              </span>
                            ) : (
                              <Copy className="w-3.5 h-3.5 text-[#8B95A1] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                            )
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpacingRadiusSection;
