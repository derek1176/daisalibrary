import React, { useState } from 'react';
import { Smartphone, Monitor, Info, CheckCircle2 } from 'lucide-react';

export const LayoutSection: React.FC = () => {
  return (
    <section id="layout" className="space-y-12">
      {/* Section Header */}
      <div className="border-b border-etc-03 pb-6">
        <span className="text-[13px] font-bold text-main-01">
          화면 레이아웃
        </span>
        <h2 className="text-[28px] font-extrabold text-text-01 tracking-da24 mt-1">
          작업 규격 (모바일 & 웹)
        </h2>
        <p className="text-[15px] text-text-03 mt-2 leading-relaxed max-w-2xl">
          다이사(da24) 서비스의 <strong>모바일(360px)</strong> 및 <strong>웹/PC(1200px)</strong> 공식 작업 규격입니다.
          모바일은 좌우 24px 여백(콘텐츠 312px)을 사용하며, 웹사이트는 1200px 캔버스 내에서 <strong>헤더, 본문, 버튼 모두 640px</strong> 단일 컬럼 규격을 엄격히 준수합니다.
        </p>
      </div>

      {/* Quick Spec Card Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Mobile Spec Summary */}
        <div className="bg-white border border-[#EBEEF2] rounded-[18px] p-6 shadow-soft flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2.5 text-main-01 mb-3">
              <Smartphone className="w-5 h-5" />
              <h3 className="text-[18px] font-bold text-text-01">모바일 작업 규격</h3>
            </div>
            <div className="space-y-2.5 text-[14px] text-text-02">
              <div className="flex justify-between py-1.5 border-b border-etc-03">
                <span className="text-text-03">기본 프레임 너비</span>
                <span className="font-bold text-text-01">360px</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-etc-03">
                <span className="text-text-03">좌우 마진 (여백)</span>
                <span className="font-bold text-main-01">24px (양측 각 24px)</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-etc-03">
                <span className="text-text-03">안전 콘텐츠 너비</span>
                <span className="font-bold text-main-01">312px (360 - 48)</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-etc-03">
                <span className="text-text-03">상단 헤더 높이</span>
                <span className="font-bold text-text-01">56px</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-text-03">하단 플로팅 CTA</span>
                <span className="font-bold text-text-01">360px (좌우여백 0px, r:0)</span>
              </div>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-etc-03 flex items-center gap-2 text-[12px] text-text-04">
            <CheckCircle2 className="w-4 h-4 text-main-01 shrink-0" />
            <span>피그마 노드 384:1369 (여백 및 팝업 규격) 공식 기준</span>
          </div>
        </div>

        {/* Web Spec Summary */}
        <div className="bg-white border border-[#EBEEF2] rounded-[18px] p-6 shadow-soft flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2.5 text-main-01 mb-3">
              <Monitor className="w-5 h-5" />
              <h3 className="text-[18px] font-bold text-text-01">웹/PC 작업 규격</h3>
            </div>
            <div className="space-y-2.5 text-[14px] text-text-02">
              <div className="flex justify-between py-1.5 border-b border-etc-03">
                <span className="text-text-03">전체 캔버스 너비</span>
                <span className="font-bold text-text-01">1200px</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-etc-03">
                <span className="text-text-03">상단 헤더 너비</span>
                <span className="font-bold text-main-01">640px (중앙 정렬)</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-etc-03">
                <span className="text-text-03">본문 및 신청 폼 너비</span>
                <span className="font-bold text-main-01">640px (중앙 정렬)</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-etc-03">
                <span className="text-text-03">하단 액션 버튼 너비</span>
                <span className="font-bold text-main-01">640px (중앙 정렬)</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-text-03">좌우 여백 (안전 마진)</span>
                <span className="font-bold text-text-01">280px (1200 - 640 / 2)</span>
              </div>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-etc-03 flex items-center gap-2 text-[12px] text-text-04">
            <CheckCircle2 className="w-4 h-4 text-main-01 shrink-0" />
            <span>웹사이트 640px 단일 컬럼 표준 정렬 적용</span>
          </div>
        </div>
      </div>

      {/* Visual Blueprint 1: Mobile Layout (360px & 24px Margins) */}
      <div className="bg-white border border-[#EBEEF2] rounded-[18px] p-6 md:p-8 shadow-soft space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-etc-03 pb-4">
          <div>
            <h3 className="text-[18px] font-bold text-text-01 flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-[6px] bg-main-04 text-main-01 text-[12px] font-bold">모바일</span>
              모바일 레이아웃 시각화 (360px × 가변)
            </h3>
            <p className="text-[13px] text-text-03 mt-1">
              양측 <strong>24px 마진(분홍 영역)</strong>을 제외한 중앙 <strong>312px(파란 점선)</strong> 내에 모든 텍스트, 인풋, 카드가 배치됩니다.
            </p>
          </div>
          <span className="text-[12px] text-text-04 bg-etc-04 px-3 py-1.5 rounded-[8px] self-start sm:self-auto font-medium">
            전체: 360px · 여백: 24px · 본문: 312px
          </span>
        </div>

        {/* Interactive Mobile Blueprint Viewer */}
        <div className="flex justify-center py-6 bg-[#F8F9FA] rounded-[14px] border border-etc-03 overflow-x-auto">
          <div className="relative w-[360px] min-h-[520px] bg-white rounded-[24px] shadow-lg border-2 border-text-01/10 flex flex-col justify-between overflow-hidden">
            {/* Top Device Notch Bar */}
            <div className="h-6 bg-white flex items-center justify-between px-6 text-[10px] text-text-04 select-none">
              <span>9:41</span>
              <div className="flex gap-1.5 items-center">
                <span>5G</span>
                <span className="w-4 h-2 rounded-[2px] bg-text-04"></span>
              </div>
            </div>

            {/* Mobile Header (360x56) */}
            <div className="h-[56px] border-b border-etc-03 px-6 flex items-center justify-between bg-white relative">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-[4px] bg-main-01/20 flex items-center justify-center text-main-01 text-[11px] font-bold">←</div>
                <span className="text-[16px] font-bold text-text-01">서비스 신청</span>
              </div>
              <span className="text-[11px] font-bold text-text-04">높이 56px</span>
            </div>

            {/* Content Area with 24px Left/Right Margin Guides */}
            <div className="relative flex-1 py-6 flex">
              {/* Left Margin Indicator (24px) */}
              <div className="w-[24px] bg-rose-500/10 border-r border-dashed border-rose-400 flex flex-col items-center justify-center shrink-0 group relative select-none">
                <span className="text-[10px] font-bold text-[#F34766] [writing-mode:vertical-lr] rotate-180">
                  24px
                </span>
              </div>

              {/* Center Content Box (312px) */}
              <div className="w-[312px] px-1 space-y-4">
                <div className="bg-main-04 border border-dashed border-main-01/50 rounded-[10px] p-3 text-center">
                  <span className="text-[12px] font-bold text-main-01 block">
                    콘텐츠 영역 (312px)
                  </span>
                  <span className="text-[11px] text-text-03 mt-0.5 block">
                    인풋, 일반버튼, 카드, 모달 등이 들어오는 안전 구역
                  </span>
                </div>

                {/* Example 312px Input */}
                <div className="h-[56px] rounded-[10px] border border-etc-02 bg-white px-4 flex items-center justify-between shadow-2xs">
                  <span className="text-[14px] text-text-03">312px × 56px 인풋 박스</span>
                  <span className="text-[11px] text-text-04">라운드 10px</span>
                </div>

                {/* Example 312px Public Button */}
                <div className="h-[56px] rounded-[10px] bg-main-01 text-white font-bold text-[15px] flex items-center justify-center shadow-2xs">
                  312px 본문 버튼 (라운드 10px)
                </div>

                {/* Example 312px Segmented Button */}
                <div className="grid grid-cols-3 gap-1 p-1 bg-etc-04 rounded-[10px] border border-etc-02 text-center text-[12px] font-bold">
                  <div className="py-2.5 rounded-[8px] bg-white text-main-01 shadow-2xs">가정 (103)</div>
                  <div className="py-2.5 rounded-[8px] text-text-03">원룸 (104)</div>
                  <div className="py-2.5 rounded-[8px] text-text-03">사무실 (103)</div>
                </div>
              </div>

              {/* Right Margin Indicator (24px) */}
              <div className="w-[24px] bg-rose-500/10 border-l border-dashed border-rose-400 flex flex-col items-center justify-center shrink-0 group relative select-none">
                <span className="text-[10px] font-bold text-[#F34766] [writing-mode:vertical-lr] rotate-180">
                  24px
                </span>
              </div>
            </div>

            {/* Bottom Floating CTA Button (360x56, r:0px) */}
            <div className="relative">
              <div className="h-[56px] w-[360px] bg-main-01 text-white font-bold text-[16px] flex items-center justify-center select-none shadow-lg">
                하단 고정 플로팅 버튼 (360px × 56px / 라운드 0px)
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Guidelines Callout */}
        <div className="bg-etc-04 rounded-[12px] p-4 text-[13px] text-text-02 space-y-1.5 leading-relaxed">
          <div className="font-bold text-text-01 flex items-center gap-1.5">
            <Info className="w-4 h-4 text-main-01" />
            모바일 작업 가이드라인
          </div>
          <ul className="list-disc pl-5 space-y-1 text-text-03">
            <li>모바일 프레임은 <strong>360px</strong> 폭으로 생성하며, 양측에 <strong>24px 마진 가이드라인</strong>을 배치합니다.</li>
            <li>본문 콘텐츠(인풋, 카드, 텍스트)는 반드시 <strong>312px(360-48)</strong> 폭을 넘지 않아야 합니다.</li>
            <li>단, <strong>화면 하단에 부착되는 플로팅 CTA 버튼</strong>은 좌우 마진 없이 <strong>360px 전폭(Corner Radius 0px)</strong>으로 제작합니다.</li>
            <li>얼럿/확인 모달 창 역시 모바일 화면 기준 <strong>312px 폭(좌우 24px 여백)</strong>으로 띄웁니다.</li>
          </ul>
        </div>
      </div>

      {/* Visual Blueprint 2: Web / Desktop Layout (1200px Canvas & 640px Strict Column) */}
      <div className="bg-white border border-[#EBEEF2] rounded-[18px] p-6 md:p-8 shadow-soft space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-etc-03 pb-4">
          <div>
            <h3 className="text-[18px] font-bold text-text-01 flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-[6px] bg-main-04 text-main-01 text-[12px] font-bold">웹 / PC</span>
              웹사이트 디자인 규격 (1200px 캔버스 내 640px 규격)
            </h3>
            <p className="text-[13px] text-text-03 mt-1">
              전체 캔버스는 <strong>1200px</strong>이며, <strong>상단 헤더, 본문 폼, 하단 버튼 모두 640px</strong> 단일 열 안에서 일치되게 설계합니다.
            </p>
          </div>
          <span className="text-[12px] text-text-04 bg-etc-04 px-3 py-1.5 rounded-[8px] self-start sm:self-auto font-medium">
            캔버스: 1200px · 헤더: 640px · 본문: 640px · 버튼: 640px
          </span>
        </div>

        {/* Visual Web Blueprint Diagram */}
        <div className="p-6 bg-[#F8F9FA] rounded-[14px] border border-etc-03 overflow-x-auto">
          {/* 1200px Outer Canvas Representation */}
          <div className="min-w-[680px] max-w-[880px] mx-auto bg-white rounded-[16px] border-2 border-text-01/15 p-5 shadow-md space-y-4">
            {/* Canvas Header Badge */}
            <div className="flex items-center justify-between border-b border-etc-03 pb-3 text-[12px] text-text-04">
              <span className="font-bold text-text-01">웹/PC 캔버스 (전체 너비 1200px)</span>
              <span className="bg-etc-04 px-2 py-0.5 rounded text-[11px] font-medium">데스크톱 기준 프레임</span>
            </div>

            {/* 640px Header Area */}
            <div className="w-[74%] max-w-[640px] mx-auto h-[48px] bg-white border-2 border-main-01 rounded-[10px] flex items-center justify-between px-4 text-[12px] text-text-02 shadow-2xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-main-01"></span>
                <span className="font-bold text-main-01">헤더 (640px 규격)</span>
              </div>
              <span className="text-[11px] text-text-04 font-medium">로고 / 뒤로가기 / 닫기</span>
            </div>

            {/* 640px Central Focused Form Area */}
            <div className="relative py-2 flex justify-center">
              {/* Left Empty Space (280px representation) */}
              <div className="hidden md:flex flex-1 items-center justify-center text-[11px] text-text-04">
                좌측 여백 280px
              </div>

              {/* 640px Core Content Box */}
              <div className="w-[74%] max-w-[640px] bg-main-04/50 border-2 border-main-01 rounded-[14px] p-5 space-y-3.5 shadow-2xs">
                <div className="flex items-center justify-between border-b border-main-02/20 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-main-01"></span>
                    <span className="text-[13px] font-bold text-main-01">본문 콘텐츠 (640px 규격)</span>
                  </div>
                  <span className="text-[11px] font-bold text-main-01">너비 640px</span>
                </div>

                <div className="text-[12px] text-text-03 leading-relaxed">
                  출발지 주소, 도착지 주소, 이사 날짜, 조건 선택 등 <strong>모든 주요 입력 요소가 640px 안에서 설계</strong>됩니다.
                </div>

                {/* Mock Form Inputs inside 640px */}
                <div className="space-y-2">
                  <div className="h-[44px] rounded-[10px] bg-white border border-etc-02 px-3 flex items-center justify-between text-[13px] text-text-03">
                    <span>출발지 주소 입력</span>
                    <span className="text-[11px] text-text-04">640 × 56</span>
                  </div>
                  <div className="h-[44px] rounded-[10px] bg-white border border-etc-02 px-3 flex items-center justify-between text-[13px] text-text-03">
                    <span>도착지 주소 입력</span>
                    <span className="text-[11px] text-text-04">640 × 56</span>
                  </div>
                </div>
              </div>

              {/* Right Empty Space (280px representation) */}
              <div className="hidden md:flex flex-1 items-center justify-center text-[11px] text-text-04">
                우측 여백 280px
              </div>
            </div>

            {/* 640px Action Button Bar */}
            <div className="w-[74%] max-w-[640px] mx-auto pt-1">
              <div className="w-full h-[52px] rounded-[10px] bg-main-01 text-white font-bold text-[15px] flex items-center justify-center shadow-xs">
                하단 액션 버튼 (640px 규격)
              </div>
              <div className="text-center mt-1.5 text-[11px] text-text-04 font-medium">
                헤더·본문·버튼 모두 동일한 640px 가로폭으로 완벽히 정렬됩니다.
              </div>
            </div>
          </div>
        </div>

        {/* Web Guidelines Callout */}
        <div className="bg-etc-04 rounded-[12px] p-4 text-[13px] text-text-02 space-y-1.5 leading-relaxed">
          <div className="font-bold text-text-01 flex items-center gap-1.5">
            <Info className="w-4 h-4 text-main-01" />
            웹/PC 작업 가이드라인
          </div>
          <ul className="list-disc pl-5 space-y-1 text-text-03">
            <li>피그마 PC 디자인 캔버스는 기본 <strong>1200px</strong>으로 작업합니다.</li>
            <li>이사/청소/인터넷 등 <strong>웹 화면의 헤더, 본문 폼, 하단 버튼은 모두 640px</strong> 너비로 통일하여 중앙에 정렬합니다.</li>
            <li>좌우 280px은 안전 여백(Blank Margin)으로 두어 어떤 모니터 해상도에서도 안정적인 시각적 집중도를 보장합니다.</li>
          </ul>
        </div>
      </div>

      {/* Comparison Summary Table */}
      <div className="bg-white border border-[#EBEEF2] rounded-[18px] p-6 shadow-soft space-y-4">
        <h3 className="text-[18px] font-bold text-text-01">디바이스별 작업 규격 비교 요약</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[13px] tracking-da24 border-collapse">
            <thead>
              <tr className="border-b border-etc-03 text-text-04 text-[12px]">
                <th className="py-3 px-4">구분</th>
                <th className="py-3 px-4">프레임 너비</th>
                <th className="py-3 px-4">좌우 여백 (Margin)</th>
                <th className="py-3 px-4">헤더 규격</th>
                <th className="py-3 px-4">본문 콘텐츠 너비</th>
                <th className="py-3 px-4">버튼 규격</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-etc-03 text-text-02 font-medium">
              <tr className="hover:bg-etc-04/50 transition-colors">
                <td className="py-3.5 px-4 font-bold text-text-01">모바일 (Mobile)</td>
                <td className="py-3.5 px-4 font-bold text-main-01">360px</td>
                <td className="py-3.5 px-4">24px (좌우 각 24)</td>
                <td className="py-3.5 px-4">360px × 56px</td>
                <td className="py-3.5 px-4 font-bold text-main-01">312px</td>
                <td className="py-3.5 px-4">플로팅 360px (r:0) / 본문 312px (r:10)</td>
              </tr>
              <tr className="hover:bg-etc-04/50 transition-colors">
                <td className="py-3.5 px-4 font-bold text-text-01">웹/PC (Desktop)</td>
                <td className="py-3.5 px-4 font-bold text-main-01">1200px</td>
                <td className="py-3.5 px-4">280px (중앙 집중)</td>
                <td className="py-3.5 px-4 font-bold text-main-01">640px</td>
                <td className="py-3.5 px-4 font-bold text-main-01">640px</td>
                <td className="py-3.5 px-4 font-bold text-main-01">640px (r:10)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
