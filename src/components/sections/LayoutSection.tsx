import React from 'react';
import { Smartphone, Monitor, Info, CheckCircle2, ShieldCheck, Layers } from 'lucide-react';

export const LayoutSection: React.FC<{ mode?: 'customer' | 'partner' }> = ({ mode = 'customer' }) => {
  const isDark = mode === 'partner';

  return (
    <section id="layout" className="space-y-10">
      {/* Section Header */}
      <div className={`border-b pb-6 ${isDark ? 'border-[#262F40]' : 'border-[#E5E8EB]'}`}>
        <span className={`text-[13px] font-bold ${isDark ? 'text-[#7075FA]' : 'text-[#3182F6]'}`}>
          {isDark ? '파트너 B2B 캔버스 파운데이션' : '화면 레이아웃'}
        </span>
        <h2 className={`text-[28px] md:text-[32px] font-extrabold tracking-tight mt-1 ${
          isDark ? 'text-white' : 'text-[#191F28]'
        }`}>
          {isDark ? '파트너 작업 규격 (모바일 360 / 웹 1200 & 오더 627)' : '작업 규격 (모바일 & 웹)'}
        </h2>
        <p className={`text-[15px] mt-2 leading-relaxed max-w-2xl ${
          isDark ? 'text-[#94A3B8]' : 'text-[#4E5968]'
        }`}>
          {isDark
            ? '피그마 공식 [파트너] 스타일가이드(loNec9fjF6nIEgkwxH7aSN)의 모바일(360x780) 및 웹 데스크톱(1200x780) 공식 규격입니다. 웹에서는 1200px 캔버스 내 627px 단일 중앙 오더 컨테이너(r:6)를 사용합니다.'
            : '다이사(da24) 서비스의 모바일(360px) 및 웹/PC(1200px) 공식 작업 규격입니다. 모바일은 좌우 24px 여백(콘텐츠 312px)을 사용하며, 웹사이트는 1200px 캔버스 내에서 헤더, 본문, 버튼 모두 640px 단일 컬럼 안에서만 디자인해야 합니다.'}
        </p>
      </div>

      {/* Quick Spec Card Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Mobile Spec Summary */}
        <div className={`border rounded-[20px] p-6 shadow-sm flex flex-col justify-between ${
          isDark ? 'bg-[#161B26] border-[#262F40]' : 'bg-white border-[#E5E8EB]'
        }`}>
          <div>
            <div className={`flex items-center gap-2.5 mb-3 ${isDark ? 'text-[#7075FA]' : 'text-[#3182F6]'}`}>
              <Smartphone className="w-5 h-5" />
              <h3 className={`text-[18px] font-bold ${isDark ? 'text-white' : 'text-[#191F28]'}`}>
                모바일 작업 규격 (360px)
              </h3>
            </div>
            <div className={`space-y-2.5 text-[14px] ${isDark ? 'text-[#CBD5E1]' : 'text-[#333D4B]'}`}>
              <div className={`flex justify-between py-1.5 border-b ${isDark ? 'border-[#222A3A]' : 'border-[#F2F4F6]'}`}>
                <span className={isDark ? 'text-[#94A3B8]' : 'text-[#6B7684]'}>기본 프레임 규격</span>
                <span className={`font-bold ${isDark ? 'text-white' : 'text-[#191F28]'}`}>360px × 780px</span>
              </div>
              <div className={`flex justify-between py-1.5 border-b ${isDark ? 'border-[#222A3A]' : 'border-[#F2F4F6]'}`}>
                <span className={isDark ? 'text-[#94A3B8]' : 'text-[#6B7684]'}>좌우 마진 (여백)</span>
                <span className={`font-bold ${isDark ? 'text-[#7075FA]' : 'text-[#1219F7]'}`}>24px (양측 각 24px)</span>
              </div>
              <div className={`flex justify-between py-1.5 border-b ${isDark ? 'border-[#222A3A]' : 'border-[#F2F4F6]'}`}>
                <span className={isDark ? 'text-[#94A3B8]' : 'text-[#6B7684]'}>안전 콘텐츠 너비</span>
                <span className={`font-bold ${isDark ? 'text-[#7075FA]' : 'text-[#1219F7]'}`}>312px (360 - 48)</span>
              </div>
              <div className={`flex justify-between py-1.5 border-b ${isDark ? 'border-[#222A3A]' : 'border-[#F2F4F6]'}`}>
                <span className={isDark ? 'text-[#94A3B8]' : 'text-[#6B7684]'}>상단 헤더 높이</span>
                <span className={`font-bold ${isDark ? 'text-white' : 'text-[#191F28]'}`}>56px</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className={isDark ? 'text-[#94A3B8]' : 'text-[#6B7684]'}>
                  {isDark ? '메인 CTA 버튼 (312px)' : '본문 표준 버튼 (Public)'}
                </span>
                <span className={`font-bold ${isDark ? 'text-[#7075FA]' : 'text-[#1219F7]'}`}>
                  {isDark ? '312px × 62px (라운드 6px)' : '312px × 56px (라운드 10px)'}
                </span>
              </div>
            </div>
          </div>
          <div className={`mt-4 pt-3 border-t flex items-center gap-2 text-[12px] ${
            isDark ? 'border-[#222A3A] text-[#94A3B8]' : 'border-[#F2F4F6] text-[#8B95A1]'
          }`}>
            <CheckCircle2 className={`w-4 h-4 shrink-0 ${isDark ? 'text-[#7075FA]' : 'text-[#3182F6]'}`} />
            <span>모바일 안전 영역 312px 공식 기준</span>
          </div>
        </div>

        {/* Web Spec Summary */}
        <div className={`border rounded-[20px] p-6 shadow-sm flex flex-col justify-between ${
          isDark ? 'bg-[#161B26] border-[#262F40]' : 'bg-white border-[#E5E8EB]'
        }`}>
          <div>
            <div className={`flex items-center gap-2.5 mb-3 ${isDark ? 'text-[#7075FA]' : 'text-[#3182F6]'}`}>
              <Monitor className="w-5 h-5" />
              <h3 className={`text-[18px] font-bold ${isDark ? 'text-white' : 'text-[#191F28]'}`}>
                웹/데스크톱 작업 규격 (1200px)
              </h3>
            </div>
            <div className={`space-y-2.5 text-[14px] ${isDark ? 'text-[#CBD5E1]' : 'text-[#333D4B]'}`}>
              <div className={`flex justify-between py-1.5 border-b ${isDark ? 'border-[#222A3A]' : 'border-[#F2F4F6]'}`}>
                <span className={isDark ? 'text-[#94A3B8]' : 'text-[#6B7684]'}>전체 캔버스 프레임</span>
                <span className={`font-bold ${isDark ? 'text-white' : 'text-[#191F28]'}`}>1200px × 780px</span>
              </div>
              <div className={`flex justify-between py-1.5 border-b ${isDark ? 'border-[#222A3A]' : 'border-[#F2F4F6]'}`}>
                <span className={isDark ? 'text-[#94A3B8]' : 'text-[#6B7684]'}>
                  {isDark ? '중앙 오더 컨테이너' : '중앙 정렬 콘텐츠 영역'}
                </span>
                <span className={`font-bold ${isDark ? 'text-[#7075FA]' : 'text-[#1219F7]'}`}>
                  {isDark ? '627px (단일 중앙 카드, r:6)' : '640px (단일 컬럼 일치)'}
                </span>
              </div>
              <div className={`flex justify-between py-1.5 border-b ${isDark ? 'border-[#222A3A]' : 'border-[#F2F4F6]'}`}>
                <span className={isDark ? 'text-[#94A3B8]' : 'text-[#6B7684]'}>좌우 외부 여백</span>
                <span className={`font-bold ${isDark ? 'text-[#7075FA]' : 'text-[#1219F7]'}`}>
                  {isDark ? '각 286.5px' : '각 280px'}
                </span>
              </div>
              <div className={`flex justify-between py-1.5 border-b ${isDark ? 'border-[#222A3A]' : 'border-[#F2F4F6]'}`}>
                <span className={isDark ? 'text-[#94A3B8]' : 'text-[#6B7684]'}>상단 헤더(GNB) 규격</span>
                <span className={`font-bold ${isDark ? 'text-white' : 'text-[#191F28]'}`}>
                  {isDark ? '1200px × 80px' : '1200px (내부 640px) × 56px'}
                </span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className={isDark ? 'text-[#94A3B8]' : 'text-[#6B7684]'}>
                  {isDark ? '웹 메인 액션 버튼' : '웹 표준 버튼 (Public)'}
                </span>
                <span className={`font-bold ${isDark ? 'text-[#7075FA]' : 'text-[#1219F7]'}`}>
                  {isDark ? '627px × 62px (라운드 6px)' : '640px × 56px (라운드 10px)'}
                </span>
              </div>
            </div>
          </div>
          <div className={`mt-4 pt-3 border-t flex items-center gap-2 text-[12px] ${
            isDark ? 'border-[#222A3A] text-[#94A3B8]' : 'border-[#F2F4F6] text-[#8B95A1]'
          }`}>
            <CheckCircle2 className={`w-4 h-4 shrink-0 ${isDark ? 'text-[#7075FA]' : 'text-[#3182F6]'}`} />
            <span>{isDark ? '피그마 공식 오더 컨테이너 627px 기준' : '웹 640px 중앙 정렬 공식 기준'}</span>
          </div>
        </div>
      </div>

      {/* Visual Canvas Diagram */}
      <div className={`rounded-[20px] border p-6 md:p-8 space-y-6 ${
        isDark ? 'bg-[#161B26] border-[#262F40]' : 'bg-white border-[#E5E8EB]'
      }`}>
        <div className="flex items-center gap-2">
          <Layers className={`w-5 h-5 ${isDark ? 'text-[#7075FA]' : 'text-[#3182F6]'}`} />
          <h3 className={`text-[18px] font-bold ${isDark ? 'text-white' : 'text-[#191F28]'}`}>
            {isDark ? '피그마 1200px vs 627px 컨테이너 시각화' : '피그마 1200px vs 640px 단일 열 시각화'}
          </h3>
        </div>

        {/* Diagram Box */}
        <div className={`rounded-[16px] border p-6 flex flex-col items-center justify-center min-h-[260px] relative overflow-hidden ${
          isDark ? 'bg-[#10141D] border-[#222A3A]' : 'bg-[#F9FAFB] border-[#E5E8EB]'
        }`}>
          <div className="text-[11px] font-bold text-[#8B95A1] absolute top-3 left-4">
            전체 캔버스 1200px
          </div>

          {/* 627px / 640px Centered Box */}
          <div className={`w-full max-w-[560px] rounded-[6px] border-2 p-5 space-y-4 shadow-md ${
            isDark
              ? 'bg-[#182030] border-[#595EF9] text-white'
              : 'bg-white border-[#1219F7] text-[#191F28]'
          }`}>
            <div className="flex items-center justify-between border-b pb-2">
              <span className="text-[13px] font-bold">
                {isDark ? '오더 컨테이너 627px (r: 6.0)' : '중앙 정렬 640px (r: 10.0)'}
              </span>
              <span className={`text-[11px] font-bold px-2 py-0.5 rounded ${
                isDark ? 'bg-[#595EF9]/30 text-[#A5A8FC]' : 'bg-[#E8F3FF] text-[#1B64DA]'
              }`}>
                {isDark ? 'B2B 단일 오더 열' : '단일 열 필수'}
              </span>
            </div>

            <div className="space-y-2">
              <div className={`h-8 rounded-[4px] flex items-center justify-center text-[12px] font-bold ${
                isDark ? 'bg-[#222A3B] text-[#CBD5E1]' : 'bg-[#F2F4F6] text-[#4E5968]'
              }`}>
                {isDark ? '오더 접수 헤더' : '상단 헤더'}
              </div>
              <div className={`h-16 rounded-[4px] flex items-center justify-center text-[12px] font-bold ${
                isDark ? 'bg-[#222A3B] text-[#CBD5E1]' : 'bg-[#F2F4F6] text-[#4E5968]'
              }`}>
                {isDark ? '견적 신청 정보 폼 블록 (r:6)' : '본문 입력 폼 블록 (r:10)'}
              </div>
              <div className={`h-10 rounded-[6px] flex items-center justify-center text-[12px] font-bold text-white shadow-xs ${
                isDark ? 'bg-[#1219F7]' : 'bg-[#1219F7]'
              }`}>
                {isDark ? '메인 CTA 버튼 (62px r:6)' : '본문 표준 버튼 (56px r:10)'}
              </div>
            </div>
          </div>

          <div className="text-[11px] font-bold text-[#8B95A1] absolute bottom-3 right-4">
            {isDark ? '좌우 안전 여백: 각 286.5px' : '좌우 안전 여백: 각 280px'}
          </div>
        </div>
      </div>
    </section>
  );
};
