import React, { useState } from 'react';
import { Check, ShieldCheck, Layers, Smartphone, AlertTriangle } from 'lucide-react';

export const ModalSection: React.FC<{ mode?: 'customer' | 'partner' }> = ({ mode = 'customer' }) => {
  const isPartner = mode === 'partner';

  return (
    <section id="modals" className="space-y-10">
      {/* Section Header */}
      <div className="border-b pb-6 border-[#E5E8EB]">
        <span className="text-[13px] font-bold text-[#3182F6]">
          {isPartner ? '파트너향 디자인시스템' : '오버레이 컴포넌트'}
        </span>
        <h2 className="text-[28px] md:text-[32px] font-extrabold tracking-tight mt-1 text-[#191F28]">
          {isPartner ? '모달 및 바텀시트 (파트너 표준)' : '모달 및 바텀시트 (고객향 표준)'}
        </h2>
        <p className="text-[15px] mt-2 leading-relaxed max-w-2xl text-[#4E5968]">
          {isPartner
            ? '피그마 공식 [파트너] 스타일가이드(loNec9fjF6nIEgkwxH7aSN) 및 [개발] v1.2 기준입니다. 파트너 다이얼로그는 너비 312px, Radius 6px, 본문 18px Regular를 적용합니다.'
            : '다이사 고객향 디자인시스템 공식 명세서(DAISA_DESIGN_SYSTEM.md) 기준입니다. Alert/Confirm 모달은 너비 312px, Radius 16px, 본문 16px Regular, 버튼 56px(r:10px)을 적용합니다.'}
        </p>
      </div>

      {/* ============================================================ */}
      {/* 최상단 규격 요약 가이드 테이블 (사용자 요청: 최상단 배치 유지) */}
      {/* ============================================================ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Modal Spec Summary */}
        <div className="border border-[#E5E8EB] rounded-[18px] p-5 bg-white shadow-sm space-y-3">
          <div className="flex items-center justify-between border-b border-[#F2F4F6] pb-2.5">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#1219F7]" />
              <h3 className="text-[16px] font-bold text-[#191F28]">
                {isPartner ? '파트너 Alert / Confirm 모달 규격' : '고객향 Alert / Confirm 모달 규격'}
              </h3>
            </div>
            <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-[#E8F3FF] text-[#1B64DA]">
              {isPartner ? 'Radius 6px' : 'Radius 16px'}
            </span>
          </div>
          <div className="space-y-2 text-[13px] text-[#4E5968]">
            <div className="flex justify-between py-1 border-b border-[#F2F4F6]">
              <span>모달 너비 (Width)</span>
              <span className="font-bold text-[#191F28]">312px (모바일 안전영역 일치)</span>
            </div>
            <div className="flex justify-between py-1 border-b border-[#F2F4F6]">
              <span>모서리 곡률 (Corner Radius)</span>
              <span className={`font-bold ${isPartner ? 'text-[#1219F7]' : 'text-[#1B64DA]'}`}>
                {isPartner ? '6px (직각형 고정 · 16px 금지)' : '16px (전사 모달 표준)'}
              </span>
            </div>
            <div className="flex justify-between py-1 border-b border-[#F2F4F6]">
              <span>타이틀 / 본문 폰트</span>
              <span className="font-bold text-[#191F28]">
                {isPartner ? '20px Bold / 18px Regular' : '20px Bold / 16px Regular'}
              </span>
            </div>
            <div className="flex justify-between py-1 border-b border-[#F2F4F6]">
              <span>하단 액션 버튼</span>
              <span className="font-bold text-[#191F28]">
                {isPartner ? '136px × 51px (2분할, r:6px)' : '136px × 56px (2분할, r:10px)'}
              </span>
            </div>
            <div className="flex justify-between py-1">
              <span>배경 딤드 (Overlay)</span>
              <span className="font-bold text-[#191F28]">rgba(0, 0, 0, 0.6) 60%</span>
            </div>
          </div>
        </div>

        {/* Bottom Sheet Spec Summary */}
        <div className="border border-[#E5E8EB] rounded-[18px] p-5 bg-white shadow-sm space-y-3">
          <div className="flex items-center justify-between border-b border-[#F2F4F6] pb-2.5">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#3182F6]" />
              <h3 className="text-[16px] font-bold text-[#191F28]">
                {isPartner ? '파트너 Bottom Sheet 규격' : '고객향 Bottom Sheet 규격'}
              </h3>
            </div>
            <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-[#E8F3FF] text-[#1B64DA]">
              상단 r:16px
            </span>
          </div>
          <div className="space-y-2 text-[13px] text-[#4E5968]">
            <div className="flex justify-between py-1 border-b border-[#F2F4F6]">
              <span>시트 너비 (Width)</span>
              <span className="font-bold text-[#191F28]">360px (모바일 뷰포트 전폭)</span>
            </div>
            <div className="flex justify-between py-1 border-b border-[#F2F4F6]">
              <span>상단 곡률 (Top Radius)</span>
              <span className="font-bold text-[#191F28]">16px (rounded-t-[16px])</span>
            </div>
            <div className="flex justify-between py-1 border-b border-[#F2F4F6]">
              <span>옵션 리스트 행 높이</span>
              <span className="font-bold text-[#191F28]">56px (터치 타겟 표준)</span>
            </div>
            <div className="flex justify-between py-1 border-b border-[#F2F4F6]">
              <span>옵션 텍스트 규격</span>
              <span className="font-bold text-[#191F28]">
                {isPartner ? '18px Medium' : '16px Medium'}
              </span>
            </div>
            <div className="flex justify-between py-1">
              <span>상단 핸들 바 (Handle)</span>
              <span className="font-bold text-[#191F28]">36px × 4px (중앙 정렬, r:full)</span>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 2. 인터랙티브 실물 컴포넌트 프리뷰 (Alert Modal & Bottom Sheet) */}
      {/* ============================================================ */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* 1. Modal Preview Box */}
        <div className="border border-[#E5E8EB] rounded-[20px] p-6 md:p-8 space-y-4 shadow-sm bg-white">
          <div className="border-b pb-3 border-[#F2F4F6]">
            <div className="inline-block px-2.5 py-0.5 rounded-[4px] text-[11px] font-bold mb-1 bg-[#E8F3FF] text-[#1B64DA]">
              {isPartner ? '파트너 중앙 다이얼로그 (Radius 6px)' : '중앙 다이얼로그 (Radius 16px)'}
            </div>
            <h3 className="text-[18px] font-extrabold text-[#191F28]">
              Alert / Confirm Modal 실물
            </h3>
            <p className="text-[13px] mt-0.5 text-[#6B7684]">
              {isPartner
                ? '너비 312px · Corner Radius 6px · 타이틀 20px · 본문 18px · 버튼 136x51px r:6'
                : '너비 312px · Corner Radius 16px · 타이틀 20px · 본문 16px · 버튼 136x56px r:10'}
            </p>
          </div>

          <div className="p-8 rounded-[16px] flex items-center justify-center min-h-[340px] border bg-[#F9FAFB] border-[#E5E8EB]">
            {/* Visual Modal Component (고객향과 파트너향의 Radius 및 버튼 높이, 본문 폰트 명확히 분기) */}
            <div
              className={`w-[312px] px-4 py-6 flex flex-col gap-5 text-center border shadow-[0_12px_36px_rgba(0,0,0,0.08)] bg-white transition-all ${
                isPartner ? 'rounded-[6px] border-[#D7DBE2]' : 'rounded-[16px] border-[#E5E8EB]'
              }`}
            >
              <div className="flex flex-col gap-2">
                <h4 className="text-[20px] leading-[28px] font-bold text-[#191F28] break-keep">
                  {isPartner ? '견적을 제출하시겠습니까?' : '이사 견적 신청을 취소하시겠습니까?'}
                </h4>
                <p
                  className={`leading-[24px] break-keep text-[#6B7684] ${
                    isPartner ? 'text-[18px]' : 'text-[16px]'
                  }`}
                >
                  {isPartner
                    ? '제출 후에는 견적 금액 및 조건 수정이 불가합니다.'
                    : '작성 중인 출발지 및 일정 정보가 저장되지 않습니다.'}
                </p>
              </div>

              {/* Action buttons (136px 2분할: 고객향 높이 56px r:10px / 파트너향 높이 51px r:6px) */}
              <div className="w-[280px] flex gap-2 mx-auto pt-1">
                <button
                  type="button"
                  onClick={() => alert('취소 버튼 클릭')}
                  className={`w-[136px] font-bold text-[16px] transition-colors border ${
                    isPartner
                      ? 'h-[51px] rounded-[6px] bg-[#F2F4F6] border-[#D7DBE2] text-[#4E5968] hover:bg-[#E5E8EB]'
                      : 'h-[56px] rounded-[10px] bg-[#F2F4F6] border-[#E5E8EB] text-[#4E5968] hover:bg-[#E5E8EB]'
                  }`}
                >
                  취소
                </button>
                <button
                  type="button"
                  onClick={() => alert(isPartner ? '제출 완료' : '확인 완료')}
                  className={`w-[136px] font-bold text-white transition-colors shadow-xs ${
                    isPartner
                      ? 'h-[51px] rounded-[6px] bg-[#1219F7] text-[18px] hover:bg-[#0E15D4]'
                      : 'h-[56px] rounded-[10px] bg-[#1219F7] text-[16px] hover:bg-[#0E15D4]'
                  }`}
                >
                  {isPartner ? '제출하기' : '확인'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Bottom Sheet Preview Box */}
        <div className="border border-[#E5E8EB] rounded-[20px] p-6 md:p-8 space-y-4 shadow-sm bg-white">
          <div className="border-b pb-3 border-[#F2F4F6]">
            <div className="inline-block px-2.5 py-0.5 rounded-[4px] text-[11px] font-bold mb-1 bg-[#E8F3FF] text-[#1B64DA]">
              하단 옵션 시트
            </div>
            <h3 className="text-[18px] font-extrabold text-[#191F28]">
              Bottom Sheet 실물
            </h3>
            <p className="text-[13px] mt-0.5 text-[#6B7684]">
              {isPartner
                ? '모바일 전폭 360px · 상단 Radius 16px · 높이 56px 옵션 행 · 텍스트 18px'
                : '모바일 전폭 360px · 상단 Corner Radius 16px · 높이 56px 옵션 행 · 텍스트 16px'}
            </p>
          </div>

          <div className="p-8 rounded-[16px] flex items-end justify-center min-h-[340px] border bg-[#F9FAFB] border-[#E5E8EB]">
            {/* Visual Bottom Sheet Component */}
            <div className="w-[312px] border-t border-x border-[#E5E8EB] rounded-t-[16px] overflow-hidden shadow-[0_12px_36px_rgba(0,0,0,0.08)] bg-white">
              {/* Handle */}
              <div className="flex justify-center pt-3 pb-1.5">
                <div className="w-9 h-1 rounded-full bg-[#D7DBE2]" />
              </div>

              {/* Title Header */}
              <div className="px-4 py-3 border-b border-[#F2F4F6]">
                <h4 className="text-[17px] font-bold text-[#191F28]">
                  {isPartner ? '작업 환경 선택' : '이사 층수 선택'}
                </h4>
              </div>

              {/* Options List */}
              <div className="p-2 space-y-1">
                {[
                  isPartner ? '사다리차 진입 가능' : '1층 (단독주택/저층)',
                  isPartner ? '엘리베이터 사용 가능' : '2층 ~ 4층',
                  isPartner ? '계단 운반 작업 필요' : '5층 이상 (사다리차 권장)',
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`h-[56px] px-3.5 rounded-[8px] flex items-center justify-between font-medium transition-colors ${
                      isPartner ? 'text-[18px]' : 'text-[16px]'
                    } ${
                      i === 0
                        ? 'bg-[#E8F3FF] text-[#1B64DA] font-bold'
                        : 'text-[#333D4B] hover:bg-[#F2F4F6]'
                    }`}
                  >
                    <span>{item}</span>
                    {i === 0 && <Check className="w-4 h-4 text-[#1B64DA] shrink-0" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
