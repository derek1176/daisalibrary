import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export const SpacingRadiusSection: React.FC = () => {
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
    { token: 'sp-56', px: 56, mult: 'x28', isCore: true, note: '★ 전사 표준 터치 타겟 높이' },
  ];

  const radiusList = [
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
      desc: '프로모션 카드, 요금비교 서브 카드',
      tailwind: 'rounded-[12px]',
      highlight: false,
    },
    {
      val: '16px',
      name: 'XL (대형 섹션)',
      desc: '모달 다이얼로그(312x344), 옵션 컨테이너',
      tailwind: 'rounded-[16px]',
      highlight: true,
    },
    {
      val: '20px',
      name: '2XL (캡슐 링크)',
      desc: '서브 링크 캡슐 버튼 (125x38)',
      tailwind: 'rounded-[20px]',
      highlight: false,
    },
    {
      val: '24px',
      name: '3XL (바텀시트)',
      desc: '바텀시트 상단 모서리, 서랍 팝업',
      tailwind: 'rounded-t-[24px]',
      highlight: false,
    },
    {
      val: '28px / Pill',
      name: 'Pill (완전 둥근)',
      desc: '카테고리 칩 필터, 헤더 액션 링크',
      tailwind: 'rounded-full',
      highlight: false,
    },
  ];

  return (
    <div className="space-y-12">
      {/* 03 — SPACING */}
      <section id="spacing" className="space-y-8">
        <div className="border-b border-[#E5E8EB] pb-6">
          <span className="text-[13px] font-bold text-[#3182F6]">
            간격 체계
          </span>
          <h2 className="text-[28px] md:text-[32px] font-extrabold text-[#191F28] tracking-tight mt-1">
            여백 (Spacing Scale)
          </h2>
          <p className="text-[15px] text-[#4E5968] mt-2 leading-relaxed max-w-2xl">
            기본은 <strong>4의 배수</strong> 체계를 따릅니다. 컴포넌트 내부 여백과 화면 레이아웃 마진은 엄격히 통일된 스케일을 적용합니다.
          </p>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-6 text-[13px] text-[#6B7684]">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-[3px] bg-[#E5E8EB]"></span>
            <span>일반 규격 (Basic size)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-[3px] bg-[#1219F7]"></span>
            <span className="font-bold text-[#1219F7]">핵심 규격 (Core size)</span>
          </div>
        </div>

        {/* Compact Horizontal Bar Spacing Scale Chart */}
        <div className="bg-white border border-[#E5E8EB] rounded-[22px] p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)] space-y-1.5 select-none">
          {spacingList.map((item) => (
            <div
              key={item.token}
              onClick={() => copy(item.token)}
              className="py-1.5 px-3 rounded-[8px] flex items-center justify-between gap-4 hover:bg-[#F8F9FB] transition-colors cursor-pointer group"
            >
              {/* Left Px Label */}
              <div className="w-[50px] shrink-0 text-right">
                <span className={`text-[13px] font-bold ${item.isCore ? 'text-main-01 font-extrabold' : 'text-text-02'}`}>
                  {item.px}px
                </span>
              </div>

              {/* Horizontal Bar Visualizer */}
              <div className="flex-1 max-w-[320px] md:max-w-[420px] flex items-center">
                <div
                  className={`h-[7px] rounded-full transition-all group-hover:opacity-90 ${
                    item.isCore ? 'bg-main-01 shadow-2xs' : 'bg-[#E2E5EA]'
                  }`}
                  style={{ width: `${Math.max((item.px / 56) * 100, 2)}%` }}
                />
              </div>

              {/* Multiplier Tag (x1, x2, x4...) */}
              <div className="w-[45px] shrink-0">
                <span className={`text-[12px] font-bold ${item.isCore ? 'text-main-01' : 'text-text-04'}`}>
                  {item.mult}
                </span>
              </div>

              {/* Usage Note */}
              <div className="flex-1 hidden sm:flex items-center justify-between text-[12px]">
                <span className={`${item.isCore ? 'text-text-01 font-bold' : 'text-text-03'}`}>
                  {item.note}
                </span>
                <span className="text-[11px] text-text-04 opacity-0 group-hover:opacity-100 transition-opacity font-mono">
                  {copiedToken === item.token ? '복사됨!' : item.token}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 04 — RADIUS */}
      <section id="radius" className="space-y-8">
        <div className="border-b border-[#E5E8EB] pb-6">
          <span className="text-[13px] font-bold text-[#3182F6]">
            모서리 곡률
          </span>
          <h2 className="text-[28px] md:text-[32px] font-extrabold text-[#191F28] tracking-tight mt-1">
            라운드 (Corner Radius 8단계)
          </h2>
          <p className="text-[15px] text-[#4E5968] mt-2 leading-relaxed max-w-2xl">
            다이사는 컴포넌트의 크기와 위계에 따라 8단계의 라운드 체계를 유지합니다. <strong>인풋/버튼은 10px</strong>, <strong>모달은 16px</strong>, <strong>하단 고정 CTA는 0px</strong>가 절대 원칙입니다.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
          {radiusList.map((r) => (
            <div
              key={r.val}
              onClick={() => copy(r.tailwind)}
              className={`p-5 rounded-[20px] border flex flex-col justify-between h-[190px] cursor-pointer transition-all duration-200 select-none ${
                r.highlight
                  ? 'bg-[#E8F3FF] border-[#3182F6]/40 shadow-[0_4px_16px_rgba(49,130,246,0.12)]'
                  : 'bg-white border-[#E5E8EB] hover:border-[#3182F6] hover:shadow-[0_12px_28px_rgba(0,0,0,0.06)] hover:-translate-y-0.5'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`text-[12px] font-bold ${r.highlight ? 'text-main-01' : 'text-text-04'}`}>
                  {r.name.split(' ')[0]}
                </span>
                {copiedToken === r.tailwind ? (
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-text-04 opacity-0 group-hover:opacity-100" />
                )}
              </div>

              {/* Visual Box with exact radius */}
              <div className="flex items-center justify-center my-auto">
                <div
                  className={`w-14 h-14 border-2 transition-transform hover:scale-105 flex items-center justify-center ${
                    r.highlight
                      ? 'bg-main-01 text-white border-main-01'
                      : 'bg-white text-text-01 border-main-01/60'
                  }`}
                  style={{
                    borderRadius: r.val.includes('Pill')
                      ? '9999px'
                      : r.val.includes('t-[24')
                      ? '20px 20px 0 0'
                      : r.val,
                  }}
                >
                  <span className="text-[12px] font-mono font-bold">{r.val.split(' ')[0]}</span>
                </div>
              </div>

              <div className="space-y-0.5 pt-1">
                <div className="text-[12px] font-bold text-text-01">{r.name}</div>
                <div className="text-[11px] text-text-03 leading-tight line-clamp-1">{r.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Card UI Guidelines Block */}
        <div className="mt-8 bg-white border border-[#E5E8EB] rounded-[24px] p-6 md:p-8 space-y-6 shadow-xs">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-bold bg-[#E8F3FF] text-[#1B64DA]">
              카드 디자인 원칙
            </div>
            <h3 className="text-[20px] md:text-[22px] font-extrabold text-[#191F28] tracking-tight">
              카드(Card) UI 규격 및 일관성 원칙
            </h3>
            <p className="text-[14px] text-[#4E5968] leading-relaxed">
              견적 정보, 업체 정보, 요약 블록 등 콘텐츠를 묶어주는 카드는 버튼 및 인풋과 시각적 조화를 이루도록 <strong>기본 Corner Radius 10px(rounded-[10px])</strong>을 원칙으로 합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* 1. Small Card */}
            <div className="bg-[#FAFBFD] border border-[#E5E8EB] rounded-[8px] p-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-[#8B95A1]">소형 서브 카드</span>
                <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-white border border-[#E5E8EB] text-[#4E5968]">
                  r: 8px
                </span>
              </div>
              <div className="text-[13px] font-bold text-[#191F28]">이사 희망일 선택 칩</div>
              <p className="text-[11px] text-[#6B7684] leading-relaxed">
                선택 옵션, 작은 상태 블록 등 가벼운 정보 단위에 제한적으로 적용
              </p>
            </div>

            {/* 2. Standard Card (Recommended) */}
            <div className="bg-white border-2 border-[#1219F7] rounded-[10px] p-4 space-y-2 shadow-xs relative">
              <span className="absolute -top-2.5 right-3 text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#1219F7] text-white">
                ★ 전사 기본 표준
              </span>
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-[#1219F7]">표준 콘텐츠 카드</span>
                <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-[#E8F3FF] text-[#1219F7]">
                  r: 10px
                </span>
              </div>
              <div className="text-[13px] font-bold text-[#191F28]">견적 업체 상세 카드</div>
              <p className="text-[11px] text-[#6B7684] leading-relaxed">
                버튼(r10), 인풋(r10)과 일치시켜 화면 전체에 정돈된 일관성 제공
              </p>
            </div>

            {/* 3. Large Section Card */}
            <div className="bg-[#FAFBFD] border border-[#E5E8EB] rounded-[16px] p-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-[#8B95A1]">대형 섹션 그룹</span>
                <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-white border border-[#E5E8EB] text-[#4E5968]">
                  r: 16px
                </span>
              </div>
              <div className="text-[13px] font-bold text-[#191F28]">신청 내역 요약 패널</div>
              <p className="text-[11px] text-[#6B7684] leading-relaxed">
                모달 다이얼로그(r16)처럼 독립된 대형 구역 컨테이너에 한하여 허용
              </p>
            </div>
          </div>

          {/* Anti-Pattern Warning */}
          <div className="bg-[#FFF5F6] border border-[#F34766]/30 rounded-[14px] p-4 text-[13px] text-[#8C1D2F] space-y-1">
            <div className="font-bold flex items-center gap-1.5 text-[#F34766]">
              <span>🚨</span>
              <span>카드 UI 규격 일관성 금지 규칙 (Anti-Pattern)</span>
            </div>
            <p className="text-[12px] leading-relaxed text-[#591420]">
              화면 내 다른 UI들과 너무 달라 보이는 규격(예: <strong>4px 직각 느낌, 20px 이상 과도한 둥글기, 두껍거나 제각각인 보더 두께</strong>)은 사용을 엄격히 금지합니다. 크기에 따라 조절하되 <strong>기본 10px을 중심축으로 통일</strong>하세요.
            </p>
          </div>
        </div>
      </section>

      {/* 05 — ELEVATION & SHADOW */}
      <section id="shadow" className="space-y-8">
        <div className="border-b border-etc-03 pb-6">
          <span className="text-[13px] font-bold text-main-01">
            그림자 및 깊이감
          </span>
          <h2 className="text-[28px] font-extrabold text-text-01 tracking-da24 mt-1">
            그림자 (Elevation)
          </h2>
          <p className="text-[15px] text-text-03 mt-2 leading-relaxed max-w-2xl">
            입체감은 과도한 그림자 대신 명확한 보더라인과 은은한 분리감을 중심으로 설계합니다. 모달 및 팝오버는 딤드 오버레이(60%)와 함께 배치됩니다.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-6 bg-white border border-[#EBEEF2] rounded-[18px] shadow-soft space-y-2">
            <span className="text-[12px] font-mono font-bold text-main-01">shadow-soft</span>
            <h4 className="text-[16px] font-bold text-text-01">카드 패널 표면</h4>
            <p className="text-[13px] text-text-03 leading-relaxed">
              기본 카드 컨테이너, 폼 그룹 표면에 적용되는 은은한 그림자
            </p>
          </div>

          <div className="p-6 bg-white border border-[#EBEEF2] rounded-[18px] shadow-pop space-y-2">
            <span className="text-[12px] font-mono font-bold text-main-01">shadow-pop</span>
            <h4 className="text-[16px] font-bold text-text-01">모달 & 드롭다운</h4>
            <p className="text-[13px] text-text-03 leading-relaxed">
              Select 팝오버 메뉴, Alert/Confirm 모달 팝업의 공중에 뜬 깊이감
            </p>
          </div>

          <div className="p-6 bg-[#1219F7] text-white rounded-[18px] shadow-[0_8px_24px_rgba(18,25,247,0.3)] space-y-2">
            <span className="text-[12px] font-mono font-bold text-white/80">shadow-brand</span>
            <h4 className="text-[16px] font-bold text-white">키컬러 CTA 버튼</h4>
            <p className="text-[13px] text-white/80 leading-relaxed">
              최우선 전환 버튼과 이벤트 배너에 사용되는 브랜드 블루 강조 그림자
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
