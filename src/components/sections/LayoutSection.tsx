import React from 'react';
import { Smartphone, Monitor, Info, CheckCircle2, ShieldCheck } from 'lucide-react';

export const LayoutSection: React.FC = () => {
  return (
    <section id="layout" className="space-y-10">
      {/* Section Header: Toss Style */}
      <div className="border-b border-[#E5E8EB] pb-6">
        <span className="text-[13px] font-bold text-[#3182F6]">
          화면 레이아웃
        </span>
        <h2 className="text-[28px] md:text-[32px] font-extrabold text-[#191F28] tracking-tight mt-1">
          작업 규격 (모바일 & 웹)
        </h2>
        <p className="text-[15px] text-[#4E5968] mt-2 leading-relaxed max-w-2xl">
          다이사(da24) 서비스의 <strong>모바일(360px)</strong> 및 <strong>웹/PC(1200px)</strong> 공식 작업 규격입니다.
          모바일은 좌우 24px 여백(콘텐츠 312px)을 사용하며, 웹사이트는 1200px 캔버스 내에서 좌우 각 280px 여백을 두고 <strong>헤더, 본문, 버튼 모두 640px</strong> 단일 컬럼 안에서만 디자인해야 합니다.
        </p>
      </div>

      {/* Quick Spec Card Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Mobile Spec Summary */}
        <div className="bg-white border border-[#E5E8EB] rounded-[22px] p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)] flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2.5 text-[#3182F6] mb-3">
              <Smartphone className="w-5 h-5" />
              <h3 className="text-[18px] font-bold text-[#191F28]">모바일 작업 규격</h3>
            </div>
            <div className="space-y-2.5 text-[14px] text-[#333D4B]">
              <div className="flex justify-between py-1.5 border-b border-[#F2F4F6]">
                <span className="text-[#6B7684]">기본 프레임 너비</span>
                <span className="font-bold text-[#191F28]">360px</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-[#F2F4F6]">
                <span className="text-[#6B7684]">좌우 마진 (여백)</span>
                <span className="font-bold text-[#1219F7]">24px (양측 각 24px)</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-[#F2F4F6]">
                <span className="text-[#6B7684]">안전 콘텐츠 너비</span>
                <span className="font-bold text-[#1219F7]">312px (360 - 48)</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-[#F2F4F6]">
                <span className="text-[#6B7684]">상단 헤더 높이</span>
                <span className="font-bold text-[#191F28]">56px</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-[#6B7684]">본문 표준 버튼 (Public)</span>
                <span className="font-bold text-[#1219F7]">312px × 56px (라운드 10px)</span>
              </div>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-[#F2F4F6] flex items-center gap-2 text-[12px] text-[#8B95A1]">
            <CheckCircle2 className="w-4 h-4 text-[#3182F6] shrink-0" />
            <span>모바일 안전 영역 312px 공식 기준</span>
          </div>
        </div>

        {/* Web Spec Summary */}
        <div className="bg-white border border-[#E5E8EB] rounded-[22px] p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)] flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2.5 text-[#3182F6] mb-3">
              <Monitor className="w-5 h-5" />
              <h3 className="text-[18px] font-bold text-[#191F28]">웹/PC 작업 규격</h3>
            </div>
            <div className="space-y-2.5 text-[14px] text-[#333D4B]">
              <div className="flex justify-between py-1.5 border-b border-[#F2F4F6]">
                <span className="text-[#6B7684]">전체 캔버스 너비</span>
                <span className="font-bold text-[#191F28]">1200px</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-[#F2F4F6]">
                <span className="text-[#6B7684]">좌우 마진 (안전 여백)</span>
                <span className="font-bold text-[#1219F7]">각 280px (양측 총 560px)</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-[#F2F4F6]">
                <span className="text-[#6B7684]">상단 헤더 너비</span>
                <span className="font-bold text-[#1219F7]">640px (중앙 고정)</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-[#F2F4F6]">
                <span className="text-[#6B7684]">본문 신청 폼 너비</span>
                <span className="font-bold text-[#1219F7]">640px (중앙 고정)</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-[#6B7684]">하단 액션 버튼 너비</span>
                <span className="font-bold text-[#1219F7]">640px (중앙 고정)</span>
              </div>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-[#F2F4F6] flex items-center gap-2 text-[12px] text-[#8B95A1]">
            <CheckCircle2 className="w-4 h-4 text-[#3182F6] shrink-0" />
            <span>웹사이트 640px 단일 컬럼 중앙 집중 정렬</span>
          </div>
        </div>
      </div>

      {/* Visual Blueprint 1: Mobile Layout (360px & 24px Margins) */}
      <div className="bg-white border border-[#E5E8EB] rounded-[22px] p-6 md:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.04)] space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#F2F4F6] pb-4">
          <div>
            <h3 className="text-[18px] font-bold text-[#191F28] flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-[6px] bg-[#E8F3FF] text-[#1B64DA] text-[12px] font-bold">모바일</span>
              모바일 레이아웃 시각화 (360px × 가변)
            </h3>
            <p className="text-[13px] text-[#6B7684] mt-1">
              양측 <strong>24px 마진(분홍 영역)</strong>을 제외한 중앙 <strong>312px(안전 구역)</strong> 내에 모든 텍스트, 인풋, 카드가 배치됩니다.
            </p>
          </div>
          <span className="text-[12px] text-[#4E5968] bg-[#F2F4F6] px-3 py-1.5 rounded-[8px] self-start sm:self-auto font-medium">
            전체: 360px · 여백: 24px · 본문: 312px
          </span>
        </div>

        {/* Mobile Blueprint Frame */}
        <div className="flex justify-center py-6 bg-[#F9FAFB] rounded-[16px] border border-[#E5E8EB] overflow-x-auto">
          <div className="relative w-[360px] min-h-[480px] bg-white rounded-[24px] shadow-lg border-2 border-[#191F28]/10 flex flex-col justify-between overflow-hidden">
            {/* Top Device Notch Bar */}
            <div className="h-6 bg-white flex items-center justify-between px-6 text-[10px] text-[#8B95A1] select-none">
              <span>9:41</span>
              <div className="flex gap-1.5 items-center">
                <span>5G</span>
                <span className="w-4 h-2 rounded-[2px] bg-[#8B95A1]"></span>
              </div>
            </div>

            {/* Mobile Header (360x56) */}
            <div className="h-[56px] border-b border-[#F2F4F6] px-6 flex items-center justify-between bg-white relative">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-[4px] bg-[#1219F7]/10 flex items-center justify-center text-[#1219F7] text-[11px] font-bold">←</div>
                <span className="text-[16px] font-bold text-[#191F28]">서비스 신청</span>
              </div>
              <span className="text-[11px] font-bold text-[#8B95A1]">높이 56px</span>
            </div>

            {/* Content Area with 24px Left/Right Margin Guides */}
            <div className="relative flex-1 py-6 flex">
              {/* Left Margin Indicator (24px) */}
              <div className="w-[24px] bg-rose-500/10 border-r border-dashed border-rose-400 flex flex-col items-center justify-center shrink-0 select-none">
                <span className="text-[10px] font-bold text-[#F34766] [writing-mode:vertical-lr] rotate-180">
                  24px
                </span>
              </div>

              {/* Center Content Box (312px) */}
              <div className="w-[312px] px-1 space-y-4">
                <div className="bg-[#E8F3FF] border border-dashed border-[#3182F6]/50 rounded-[10px] p-3 text-center">
                  <span className="text-[12px] font-bold text-[#1B64DA] block">
                    안전 콘텐츠 영역 (312px)
                  </span>
                  <span className="text-[11px] text-[#6B7684] mt-0.5 block">
                    모든 인풋, 카드, 텍스트, 본문 버튼이 들어오는 구역
                  </span>
                </div>

                {/* Example 312px Input */}
                <div className="h-[56px] rounded-[10px] border border-[#E5E8EB] bg-white px-4 flex items-center justify-between shadow-2xs">
                  <span className="text-[14px] text-[#4E5968]">312px × 56px 인풋 박스</span>
                  <span className="text-[11px] text-[#8B95A1]">라운드 10px</span>
                </div>

                {/* Example 312px Public Button (Official Standard) */}
                <div className="h-[56px] rounded-[10px] bg-[#1219F7] text-white font-bold text-[15px] flex items-center justify-center shadow-xs">
                  312px 본문 표준 버튼 (라운드 10px)
                </div>

                {/* Example 312px Card */}
                <div className="p-3 bg-[#F9FAFB] rounded-[10px] border border-[#E5E8EB] flex items-center justify-between">
                  <span className="text-[13px] font-bold text-[#333D4B]">312px 옵션 카드</span>
                  <span className="px-2.5 py-1 rounded-full bg-[#1219F7] text-white text-[11px] font-bold">선택됨</span>
                </div>
              </div>

              {/* Right Margin Indicator (24px) */}
              <div className="w-[24px] bg-rose-500/10 border-l border-dashed border-rose-400 flex flex-col items-center justify-center shrink-0 select-none">
                <span className="text-[10px] font-bold text-[#F34766] [writing-mode:vertical-lr] rotate-180">
                  24px
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Guidelines Callout */}
        <div className="bg-[#F9FAFB] rounded-[14px] p-4 text-[13px] text-[#333D4B] space-y-1.5 leading-relaxed border border-[#E5E8EB]">
          <div className="font-bold text-[#191F28] flex items-center gap-1.5">
            <Info className="w-4 h-4 text-[#3182F6]" />
            <span>모바일 작업 가이드라인</span>
          </div>
          <ul className="list-disc pl-5 space-y-1 text-[#4E5968]">
            <li>모바일 프레임은 <strong>360px</strong> 폭으로 생성하며, 양측에 <strong>24px 마진 가이드라인</strong>을 배치합니다.</li>
            <li>모든 인풋, 카드, 텍스트, 버튼은 반드시 <strong>312px(360-48)</strong> 안전 영역 내에서만 디자인합니다.</li>
            <li>기존 하단 고정 플로팅 버튼(360x56)은 레거시 규격으로 사용을 지양하며, 본문 내 <strong>312px Public Button</strong>을 공식 표준으로 사용합니다.</li>
          </ul>
        </div>
      </div>

      {/* Visual Blueprint 2: Web / Desktop Layout (1200px Canvas & 280px Margins & 640px Core Area) */}
      <div className="bg-white border border-[#E5E8EB] rounded-[22px] p-6 md:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.04)] space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#F2F4F6] pb-4">
          <div>
            <h3 className="text-[18px] font-bold text-[#191F28] flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-[6px] bg-[#E8F3FF] text-[#1B64DA] text-[12px] font-bold">웹 / PC</span>
              웹사이트 디자인 규격 (1200px 캔버스 내 좌우 280px 마진 & 640px 안에서만 디자인)
            </h3>
            <p className="text-[13px] text-[#6B7684] mt-1">
              전체 캔버스는 <strong>1200px</strong>이며, 좌우 각 <strong>280px 안전 마진</strong>을 두고 <strong>중앙 640px 안에서만 헤더, 본문 신청 폼, 버튼을 디자인</strong>해야 합니다.
            </p>
          </div>
          <span className="text-[12px] text-[#4E5968] bg-[#F2F4F6] px-3 py-1.5 rounded-[8px] self-start sm:self-auto font-medium">
            캔버스: 1200px · 좌우여백: 각 280px · 핵심 디자인구역: 640px
          </span>
        </div>

        {/* Visual Web Blueprint Diagram with 280px Left/Right Margin Indicators */}
        <div className="p-6 bg-[#F9FAFB] rounded-[16px] border border-[#E5E8EB] overflow-x-auto">
          {/* 1200px Outer Canvas Representation */}
          <div className="min-w-[760px] max-w-[960px] mx-auto bg-white rounded-[18px] border-2 border-[#191F28]/15 p-5 shadow-md space-y-4">
            {/* Canvas Header Badge */}
            <div className="flex items-center justify-between border-b border-[#F2F4F6] pb-3 text-[12px] text-[#8B95A1]">
              <span className="font-bold text-[#191F28]">웹/PC 캔버스 (전체 너비 1200px)</span>
              <span className="bg-[#F2F4F6] px-2.5 py-1 rounded text-[11px] font-bold text-[#4E5968]">
                데스크톱 기준 프레임
              </span>
            </div>

            {/* 1200px Canvas Body with Visual Margin Guide Bars */}
            <div className="flex border border-[#E5E8EB] rounded-[14px] overflow-hidden bg-white min-h-[380px]">
              {/* Left Margin Guide (280px) */}
              <div className="w-[180px] bg-rose-500/10 border-r border-dashed border-rose-400 flex flex-col items-center justify-center shrink-0 select-none p-2 text-center">
                <span className="text-[11px] font-extrabold text-[#F34766] block">
                  좌측 여백 280px
                </span>
                <span className="text-[10px] text-[#8B95A1] mt-1 block">
                  (디자인 금지 영역)
                </span>
              </div>

              {/* Central Focused 640px Design Zone */}
              <div className="flex-1 max-w-[640px] p-4 space-y-3.5 bg-[#FAFBFD]">
                {/* 640px Header Area */}
                <div className="h-[48px] bg-white border-2 border-[#1219F7] rounded-[10px] flex items-center justify-between px-4 text-[12px] text-[#333D4B] shadow-2xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#1219F7]"></span>
                    <span className="font-bold text-[#1219F7]">상단 헤더 (640px 고정)</span>
                  </div>
                  <span className="text-[11px] text-[#8B95A1] font-medium">로고 / 닫기</span>
                </div>

                {/* 640px Central Form Box */}
                <div className="bg-[#E8F3FF]/40 border-2 border-[#1219F7] rounded-[14px] p-4 space-y-3 shadow-2xs">
                  <div className="flex items-center justify-between border-b border-[#3182F6]/20 pb-2">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#1219F7]"></span>
                      <span className="text-[13px] font-bold text-[#1219F7]">본문 신청 폼 (640px 규격)</span>
                    </div>
                    <span className="text-[11px] font-bold text-[#1B64DA] bg-white px-2 py-0.5 rounded border border-[#3182F6]/30">
                      ★ 640px 안에서만 디자인
                    </span>
                  </div>

                  <div className="text-[12px] text-[#4E5968] leading-relaxed">
                    출발지/도착지 주소, 일정, 조건 선택 등 <strong>모든 주요 입력 요소는 오직 640px 너비 안에서만 설계</strong>됩니다.
                  </div>

                  {/* Sample 640px Inputs */}
                  <div className="h-[44px] rounded-[8px] bg-white border border-[#E5E8EB] px-3 flex items-center text-[12px] text-[#8B95A1]">
                    출발지 주소 입력창 (640px × 56px)
                  </div>
                  <div className="h-[44px] rounded-[8px] bg-white border border-[#E5E8EB] px-3 flex items-center text-[12px] text-[#8B95A1]">
                    도착지 주소 입력창 (640px × 56px)
                  </div>
                </div>

                {/* 640px Action Button */}
                <div className="h-[52px] bg-[#1219F7] text-white font-bold text-[14px] rounded-[10px] flex items-center justify-center shadow-xs">
                  하단 액션 버튼 (640px × 56px / 라운드 10px)
                </div>
              </div>

              {/* Right Margin Guide (280px) */}
              <div className="w-[180px] bg-rose-500/10 border-l border-dashed border-rose-400 flex flex-col items-center justify-center shrink-0 select-none p-2 text-center">
                <span className="text-[11px] font-extrabold text-[#F34766] block">
                  우측 여백 280px
                </span>
                <span className="text-[10px] text-[#8B95A1] mt-1 block">
                  (디자인 금지 영역)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Web Guidelines Callout */}
        <div className="bg-[#F9FAFB] rounded-[14px] p-4 text-[13px] text-[#333D4B] space-y-1.5 leading-relaxed border border-[#E5E8EB]">
          <div className="font-bold text-[#191F28] flex items-center gap-1.5">
            <Info className="w-4 h-4 text-[#3182F6]" />
            <span>웹사이트(PC) 핵심 디자인 규칙</span>
          </div>
          <ul className="list-disc pl-5 space-y-1 text-[#4E5968]">
            <li>웹사이트 전체 캔버스는 <strong>1200px</strong> 규격입니다.</li>
            <li>좌우 각 <strong>280px</strong>은 배경 여백(안전 마진)이며, <strong>헤더, 본문 신청 폼, 버튼 모두 640px 단일 열 안에서만 정렬 및 디자인</strong>해야 합니다.</li>
            <li>대화면에서도 콘텐츠가 640px을 초과하여 양옆으로 분산되지 않도록 엄격히 단일 컬럼을 유지합니다.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
