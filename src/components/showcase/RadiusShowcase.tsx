import React, { useState } from 'react';
import { ComponentHeader } from '../ui/ComponentHeader';
import { DoAndDont } from '../ui/DoAndDont';
import { Copy, Check, Sparkles } from 'lucide-react';

interface RadiusItem {
  value: string;
  px: number;
  tailwind: string;
  name: string;
  usage: string;
  components: string[];
  figmaRef: string;
}

export const RadiusShowcase: React.FC = () => {
  const [selectedRadius, setSelectedRadius] = useState<number>(10);
  const [copiedValue, setCopiedValue] = useState<string | null>(null);

  const radiusScale: RadiusItem[] = [
    {
      value: '0px',
      px: 0,
      tailwind: 'rounded-none',
      name: 'None (직각)',
      usage: '모바일 하단 밀착 고정 CTA, 상단 고정 헤더 바',
      components: ['Floating CTA (360x56px)', 'PC Floating CTA (720x56px)'],
      figmaRef: 'floating-button (r:0)',
    },
    {
      value: '6px',
      px: 6,
      tailwind: 'rounded-[6px]',
      name: 'XS (초소형)',
      usage: '도움말 말풍선(Tooltip), 초소형 상태 배지',
      components: ['Tooltip (274x44px)', '미니 상태 배지 (32x21px)'],
      figmaRef: 'tooltip (274x44, r:6.0)',
    },
    {
      value: '8px',
      px: 8,
      tailwind: 'rounded-[8px]',
      name: 'SM (서브 폼 / 칩)',
      usage: '소형 숫자 선택기, 세그먼트 내부 선택 블록, 보조 폼 카드',
      components: ['select-number small (104x40px)', 'Frame 951960 (312x94px)'],
      figmaRef: 'select-number size=small (r:8.0)',
    },
    {
      value: '10px',
      px: 10,
      tailwind: 'rounded-[10px]',
      name: 'MD (★ 다이사 전사 표준 규격)',
      usage: '모든 기본 버튼, 모든 폼 인풋, 모달 액션 버튼, 경고 배너, 메인 프로모션 배너',
      components: [
        'Public Button (312x56 / 672x56)',
        'Input Text/Number/Search (312x56)',
        'Modal Buttons (136x56 / 280x56)',
        'Warning Container (328x52 / 720x52)',
        'Main Aircon Banner (312x80)',
      ],
      figmaRef: 'public-button, input-text (r:10.0)',
    },
    {
      value: '12px',
      px: 12,
      tailwind: 'rounded-[12px]',
      name: 'LG (중형 카드)',
      usage: '프로모션 서브 카드, 요금비교 안내 카드',
      components: ['Frame 952075 (312x99px)', 'Frame 952197 (312x136px)'],
      figmaRef: 'Frame 952075 (r:12.0)',
    },
    {
      value: '16px',
      px: 16,
      tailwind: 'rounded-[16px]',
      name: 'XL (대형 섹션 및 모달)',
      usage: '모달 다이얼로그, 대형 옵션 컨테이너, 후기 작성 박스, 쿠폰 섹션',
      components: [
        '모달 다이얼로그 (312x344px)',
        'Options List (312x824px)',
        'Review Section (312x268px)',
        'Coupon Container (312x141px)',
      ],
      figmaRef: '모달 (312x344, r:16.0)',
    },
    {
      value: '20px',
      px: 20,
      tailwind: 'rounded-[20px]',
      name: '2XL (캡슐 링크)',
      usage: '서브 네비게이션 캡슐 링크 버튼',
      components: ['Link (125x38px)', 'Link (115x38px)'],
      figmaRef: 'Link (125x38, r:20.0)',
    },
    {
      value: '24px',
      px: 24,
      tailwind: 'rounded-t-[24px]',
      name: '3XL (바텀시트 상단)',
      usage: '모바일 바텀시트 상단 모서리, 서랍형 팝업',
      components: ['Frame 952110 (360x389px) 상단 모서리'],
      figmaRef: 'Frame 952110 (r:[24, 24, 0, 0])',
    },
    {
      value: '28px / Pill',
      px: 28,
      tailwind: 'rounded-full (rounded-[28px])',
      name: 'Pill (완전 둥근)',
      usage: '카테고리 칩 필터, 헤더 액션 링크',
      components: ['카테고리 필터 칩 (135x45px)', '내 신청내역 링크 (89x33px)'],
      figmaRef: 'Chat History Link (78x33, r:28.0)',
    },
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedValue(text);
    setTimeout(() => setCopiedValue(null), 1500);
  };

  const currentItem = radiusScale.find((r) => r.px === selectedRadius) || radiusScale[3];

  return (
    <div className="space-y-10">
      <ComponentHeader
        category="Foundation / Geometry"
        title="Corner Radius (8단계 라운드 규칙)"
        description="다이사 디자인시스템은 컴포넌트의 크기와 위계(소형 태그부터 대형 모달까지)에 따라 철저히 정형화된 8단계의 라운드 체계를 유지합니다. 임의의 라운드 값(예: 4px, 14px, 18px 등)은 사용이 엄격히 제한됩니다."
        figmaNode={{
          fileKey: 'csWoLlTCHOtuE7oAMswuL7',
          nodeId: '9852:6081',
          label: '9852:6081 (전사 토큰)',
        }}
      />

      {/* Interactive Visualizer Card */}
      <div className="bg-white border border-etc-02 rounded-[16px] overflow-hidden shadow-sm">
        <div className="p-4 border-b border-etc-03 bg-[#FCFDFE] flex flex-wrap items-center justify-between gap-4">
          <span className="text-[14px] font-bold text-text-01 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-main-01" /> 라운드 실시간 프리뷰 & 토큰 선택기
          </span>
          <span className="text-[12px] text-text-04">
            클릭하여 컴포넌트와 Tailwind 클래스를 확인하세요.
          </span>
        </div>

        {/* Live Canvas */}
        <div className="p-8 md:p-12 bg-[#F8F9FB] flex flex-col items-center justify-center">
          <div className="flex flex-col items-center gap-6">
            {/* The Morphing Box */}
            <div
              className="w-56 h-36 bg-gradient-to-br from-main-01 to-main-02 text-white shadow-lg flex flex-col items-center justify-center p-4 transition-all duration-300 border-2 border-white/50"
              style={{
                borderRadius: selectedRadius === 28 ? '9999px' : `${selectedRadius}px`,
              }}
            >
              <span className="text-[28px] font-black tracking-tight">{currentItem.value}</span>
              <span className="text-[12px] opacity-90 font-mono mt-1">{currentItem.tailwind}</span>
            </div>

            {/* Quick Details Pill */}
            <div className="flex flex-wrap items-center justify-center gap-2 text-[13px]">
              <span className="font-bold text-text-01 bg-white border border-etc-02 px-3 py-1 rounded-[8px] shadow-xs">
                {currentItem.name}
              </span>
              <span className="text-text-03 bg-etc-04 px-3 py-1 rounded-[8px]">
                Figma: <code className="font-mono text-main-01">{currentItem.figmaRef}</code>
              </span>
              <button
                onClick={() => copyToClipboard(currentItem.tailwind)}
                className="flex items-center gap-1.5 px-3 py-1 rounded-[8px] bg-main-01 text-white font-bold text-[12px] hover:bg-[#0D14D6] transition-colors"
              >
                {copiedValue === currentItem.tailwind ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedValue === currentItem.tailwind ? '복사 완료' : 'Tailwind 복사'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Radius Selector Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 border-t border-etc-03 bg-white divide-x divide-etc-03">
          {radiusScale.map((item) => {
            const isSelected = selectedRadius === item.px;
            return (
              <button
                key={item.value}
                onClick={() => setSelectedRadius(item.px)}
                className={`p-3.5 flex flex-col items-center justify-center gap-1.5 transition-colors select-none ${
                  isSelected ? 'bg-main-04 text-main-01 font-bold' : 'hover:bg-etc-04 text-text-02'
                }`}
              >
                <div
                  className={`w-6 h-6 border-2 transition-all ${
                    isSelected ? 'border-main-01 bg-main-01/20' : 'border-text-04 bg-transparent'
                  }`}
                  style={{
                    borderRadius: item.px === 28 ? '9999px' : `${item.px / 2}px`,
                  }}
                />
                <span className="text-[13px] font-mono font-bold">{item.value}</span>
                <span className="text-[10px] text-text-04 text-center truncate w-full">
                  {item.name.split(' ')[0]}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Comprehensive Radius Specification Table */}
      <div className="bg-white border border-etc-02 rounded-[16px] overflow-hidden shadow-sm">
        <div className="p-5 border-b border-etc-03 bg-[#FCFDFE]">
          <h3 className="text-[16px] font-bold text-text-01">8단계 Corner Radius 전사 적용 가이드</h3>
          <p className="text-[13px] text-text-03 mt-1">
            기획자, 디자이너, 개발자 간의 원활한 소통을 위해 수치와 적용 예시를 일치시킵니다.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-[14px]">
            <thead>
              <tr className="border-b border-etc-03 text-text-04 text-[12px] bg-etc-04/50">
                <th className="py-3 px-4 font-semibold">Radius 수치</th>
                <th className="py-3 px-4 font-semibold">Tailwind 클래스</th>
                <th className="py-3 px-4 font-semibold">역할 및 위계</th>
                <th className="py-3 px-4 font-semibold">주요 적용 컴포넌트</th>
                <th className="py-3 px-4 font-semibold">피그마 원본 참조</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-etc-03 text-text-02">
              {radiusScale.map((item) => (
                <tr
                  key={item.value}
                  className={`transition-colors ${
                    item.px === 10 ? 'bg-main-04/30 font-semibold' : 'hover:bg-[#F9FAFC]'
                  }`}
                >
                  <td className="py-3.5 px-4 font-mono font-bold text-main-01">
                    {item.value} {item.px === 10 && <span className="text-[11px] bg-main-01 text-white px-1.5 py-0.5 rounded ml-1">전사표준</span>}
                  </td>
                  <td className="py-3.5 px-4 font-mono text-[13px] text-text-03">
                    <code className="bg-etc-04 px-1.5 py-0.5 rounded border border-etc-02">{item.tailwind}</code>
                  </td>
                  <td className="py-3.5 px-4">{item.name}</td>
                  <td className="py-3.5 px-4">
                    <ul className="list-disc list-inside space-y-0.5 text-[13px] text-text-03">
                      {item.components.map((c, i) => (
                        <li key={i}>{c}</li>
                      ))}
                    </ul>
                  </td>
                  <td className="py-3.5 px-4 font-mono text-[12px] text-text-04">
                    {item.figmaRef}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Do & Don't Guidelines */}
      <div>
        <h3 className="text-[18px] font-bold text-text-01 tracking-da24 mb-2">
          Corner Radius 사용 시 권장 / 지양 사항 (Do & Don't)
        </h3>
        <DoAndDont
          items={[
            {
              type: 'do',
              title: '표준 10px 라운드를 기본 규칙으로 준수하기',
              description:
                '다이사의 일반적인 버튼(Public), 입력창(Input), 경고 박스(Warning)는 모두 10px 라운드를 가집니다. 일관성을 위해 10px을 우선 고려하세요.',
              visual: (
                <div className="flex gap-3">
                  <div className="px-4 py-2.5 rounded-[10px] bg-main-01 text-white text-[13px] font-bold">
                    버튼 (r: 10px)
                  </div>
                  <div className="px-4 py-2.5 rounded-[10px] bg-white border border-etc-02 text-[13px] text-text-02">
                    인풋 (r: 10px)
                  </div>
                </div>
              ),
            },
            {
              type: 'dont',
              title: '하단 고정 Floating CTA에 라운드 주지 않기',
              description:
                '모바일 최하단에 항상 밀착되는 Floating CTA 버튼은 뷰포트와의 일체감을 위해 Corner Radius가 반드시 0px(rounded-none)이어야 합니다.',
              visual: (
                <div className="px-6 py-3 rounded-[12px] bg-rose-100 border border-rose-300 text-rose-700 text-[13px] font-bold line-through">
                  하단 고정 버튼에 12px 라운드 적용 (오류)
                </div>
              ),
            },
          ]}
        />
      </div>
    </div>
  );
};
