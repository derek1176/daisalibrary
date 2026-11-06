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
    { token: 'sp-2', px: 2, note: '예외 초미세 여백' },
    { token: 'sp-4', px: 4, note: '아이콘-텍스트 최소 간격' },
    { token: 'sp-6', px: 6, note: '라벨-인풋 상하 간격' },
    { token: 'sp-8', px: 8, note: '컴포넌트 내부 기본 gap, 모달 버튼 사이 간격' },
    { token: 'sp-10', px: 10, note: '세그먼트 및 칩 패딩' },
    { token: 'sp-12', px: 12, note: '카드 내부 소형 패딩' },
    { token: 'sp-16', px: 16, note: '★ 인풋/버튼 기본 좌우 패딩, 모바일 모달 좌우 여백' },
    { token: 'sp-20', px: 20, note: '섹션 서브 타이틀 간격' },
    { token: 'sp-24', px: 24, note: '★ 모바일 양측 마진 (360-24x2=312), 모달 상하 패딩' },
    { token: 'sp-28', px: 28, note: '패널 내부 기본 여백' },
    { token: 'sp-32', px: 32, note: '태블릿 양측 마진, 섹션 간 블록 여백' },
    { token: 'sp-40', px: 40, note: 'PC 양측 마진, 대형 섹션 구분 간격' },
    { token: 'sp-56', px: 56, note: '★ 전사 표준 터치 타겟 높이' },
    { token: 'sp-64', px: 64, note: '페이지 상하 헤더 여백' },
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
      desc: '소형 셀렉트(104x40), 세그먼트 블록',
      tailwind: 'rounded-[8px]',
      highlight: false,
    },
    {
      val: '10px',
      name: 'MD (★ 전사 표준)',
      desc: 'Public 버튼, 모든 인풋, 배너, 경고박스',
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
    <div className="space-y-16">
      {/* 03 — SPACING */}
      <section id="spacing" className="space-y-8">
        <div className="border-b border-etc-03 pb-6">
          <span className="text-[13px] font-bold text-main-01">
            간격 체계
          </span>
          <h2 className="text-[28px] font-extrabold text-text-01 tracking-da24 mt-1">
            여백 (Spacing Scale)
          </h2>
          <p className="text-[15px] text-text-03 mt-2 leading-relaxed max-w-2xl">
            기본은 <strong>4의 배수</strong> 체계를 따릅니다. 컴포넌트 내부 여백과 화면 레이아웃 마진은 엄격히 통일된 스케일을 적용합니다.
          </p>
        </div>

        <div className="bg-white border border-[#EBEEF2] rounded-[20px] p-6 md:p-8 shadow-soft divide-y divide-etc-03">
          {spacingList.map((item) => (
            <div
              key={item.token}
              onClick={() => copy(item.token)}
              className="py-3.5 first:pt-0 last:pb-0 grid grid-cols-1 md:grid-cols-[100px_90px_1fr] items-center gap-3 cursor-pointer group hover:bg-[#FAFBFD] px-2 rounded-lg transition-colors"
            >
              <div className="flex items-center gap-1.5 font-mono text-[14px] font-bold text-text-01">
                <span>{item.token}</span>
                {copiedToken === item.token && (
                  <Check className="w-3.5 h-3.5 text-emerald-600 inline" />
                )}
              </div>
              <div className="font-mono text-[13px] text-text-04 font-medium">
                {item.px}px
              </div>
              <div className="flex items-center gap-4">
                <div
                  className="h-3 rounded-full bg-main-01 transition-all group-hover:bg-[#0D14D6]"
                  style={{ width: `${Math.min(item.px * 6, 420)}px` }}
                />
                <span className="text-[12px] text-text-03 hidden sm:inline">
                  {item.note}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 04 — RADIUS */}
      <section id="radius" className="space-y-8">
        <div className="border-b border-etc-03 pb-6">
          <span className="text-[13px] font-bold text-main-01">
            모서리 곡률
          </span>
          <h2 className="text-[28px] font-extrabold text-text-01 tracking-da24 mt-1">
            라운드 (Corner Radius 8단계)
          </h2>
          <p className="text-[15px] text-text-03 mt-2 leading-relaxed max-w-2xl">
            다이사는 컴포넌트의 크기와 위계에 따라 8단계의 라운드 체계를 유지합니다. <strong>인풋/버튼은 10px</strong>, <strong>모달은 16px</strong>, <strong>하단 고정 CTA는 0px</strong>가 절대 원칙입니다.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
          {radiusList.map((r) => (
            <div
              key={r.val}
              onClick={() => copy(r.tailwind)}
              className={`p-5 rounded-[18px] border flex flex-col justify-between h-[190px] cursor-pointer transition-all duration-150 select-none ${
                r.highlight
                  ? 'bg-main-04 border-main-02/40 shadow-soft'
                  : 'bg-white border-[#EBEEF2] hover:border-[#D7DBE2] hover:shadow-soft'
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
