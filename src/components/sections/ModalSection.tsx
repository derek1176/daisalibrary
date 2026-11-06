import React, { useState } from 'react';
import { Sliders, Smartphone, Monitor, Search, X, Check, ShieldCheck } from 'lucide-react';

export const ModalSection: React.FC<{ mode?: 'customer' | 'partner' }> = ({ mode = 'customer' }) => {
  const isPartner = mode === 'partner';
  const isDark = false; // 파트너향도 고객향과 동일한 깨끗한 라이트모드로 통일
  const [simulatedWidth, setSimulatedWidth] = useState(768);

  return (
    <section id="modals" className="space-y-10">
      {/* Section Header */}
      <div className="border-b pb-6 border-[#E5E8EB]">
        <span className="text-[13px] font-bold text-[#3182F6]">
          {isPartner ? '파트너향 디자인시스템' : '오버레이 컴포넌트'}
        </span>
        <h2 className="text-[28px] md:text-[32px] font-extrabold tracking-tight mt-1 text-[#191F28]">
          {isPartner ? '파트너 모달 및 다이얼로그 (Radius 6px)' : '모달 및 바텀시트'}
        </h2>
        <p className="text-[15px] mt-2 leading-relaxed max-w-2xl text-[#4E5968]">
          {isPartner
            ? '피그마 공식 [파트너] 스타일가이드(loNec9fjF6nIEgkwxH7aSN) 기반 규격입니다. 파트너 다이얼로그는 너비 312px, 직각 곡률 Radius 6px(16px 금지), 배경 딤드 60%를 적용합니다.'
            : '사용자의 맥락을 차단하고 집중시키는 중앙 모달 다이얼로그와 모바일 옵션 선택을 위한 바텀시트 규격입니다. 배경 딤드는 rgba(0, 0, 0, 0.6) 60%를 적용합니다.'}
        </p>
      </div>

      {/* 1. Alert Modal & Bottom Sheet */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Modal Spec */}
        <div className="border border-[#E5E8EB] rounded-[20px] p-6 md:p-8 space-y-4 shadow-sm bg-white">
          <div className="border-b pb-3 border-[#F2F4F6]">
            <div className="inline-block px-2.5 py-0.5 rounded-[4px] text-[11px] font-bold mb-1 bg-[#E8F3FF] text-[#1B64DA]">
              {isPartner ? '파트너 중앙 다이얼로그 (r:6)' : '중앙 다이얼로그 (r:16)'}
            </div>
            <h3 className="text-[18px] font-extrabold text-[#191F28]">
              Alert / Confirm Modal 규격
            </h3>
            <p className="text-[13px] mt-0.5 text-[#6B7684]">
              {isPartner
                ? '너비 312px · Corner Radius 6px · 51px r:6 액션 버튼 2분할'
                : '너비 312px · Corner Radius 16px · 패딩 24/16/24/16 · 버튼 136px 2분할'}
            </p>
          </div>

          <div className="p-8 rounded-[16px] flex items-center justify-center min-h-[320px] border bg-[#F9FAFB] border-[#E5E8EB]">
            {/* Visual Modal Component */}
            <div className={`w-[312px] px-4 py-6 flex flex-col gap-6 text-center border shadow-lg ${
              isPartner
                ? 'bg-white rounded-[6px] border-[#E5E8EB] shadow-[0_8px_30px_rgba(0,0,0,0.08)]'
                : 'bg-white rounded-[16px] border-[#E5E8EB] shadow-[0_8px_30px_rgba(0,0,0,0.08)]'
            }`}>
              <div className="flex flex-col gap-2">
                <h4 className={`text-[20px] leading-[30px] font-bold break-keep ${
                  isPartner ? 'text-white' : 'text-[#191F28]'
                }`}>
                  {isPartner ? '견적을 제출하시겠습니까?' : '이사 견적 신청을 취소하시겠습니까?'}
                </h4>
                <p className={`text-[15px] leading-[22px] break-keep ${
                  isPartner ? 'text-[#9E9EA4]' : 'text-[#6B7684]'
                }`}>
                  {isPartner
                    ? '제출 후에는 견적 금액 및 조건 수정이 불가합니다.'
                    : '작성 중인 출발지 및 일정 정보가 저장되지 않습니다.'}
                </p>
              </div>

              {/* Action buttons */}
              <div className="w-[280px] flex gap-2 mx-auto">
                <button
                  type="button"
                  className={`w-[136px] font-bold text-[16px] transition-colors ${
                    isPartner
                      ? 'h-[51px] rounded-[6px] bg-[#F2F4F6] text-[#4E5968] hover:bg-[#E5E8EB]'
                      : 'h-[56px] rounded-[10px] bg-[#F2F4F6] text-[#4E5968] hover:bg-[#E5E8EB]'
                  }`}
                >
                  취소
                </button>
                <button
                  type="button"
                  className={`w-[136px] font-bold text-[16px] text-white transition-colors shadow-xs ${
                    isPartner
                      ? 'h-[51px] rounded-[6px] bg-[#1219F7] hover:bg-[#0E14D4]'
                      : 'h-[56px] rounded-[10px] bg-[#1219F7] hover:bg-[#0E15D4]'
                  }`}
                >
                  {isPartner ? '제출하기' : '확인'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sheet Spec */}
        <div className="border border-[#E5E8EB] rounded-[20px] p-6 md:p-8 space-y-4 shadow-sm bg-white">
          <div className="border-b pb-3 border-[#F2F4F6]">
            <div className="inline-block px-2.5 py-0.5 rounded-[4px] text-[11px] font-bold mb-1 bg-[#E8F3FF] text-[#1B64DA]">
              하단 옵션 시트
            </div>
            <h3 className="text-[18px] font-extrabold text-[#191F28]">
              Bottom Sheet 규격
            </h3>
            <p className="text-[13px] mt-0.5 text-[#6B7684]">
              {isPartner
                ? '모바일 너비 360px · 상단 Radius 16px · 높이 48px/56px 리스트 셀'
                : '모바일 너비 360px · 상단 Corner Radius 20px · 옵션 리스트 56px 행'}
            </p>
          </div>

          <div className="p-8 rounded-[16px] flex items-end justify-center min-h-[320px] border bg-[#F9FAFB] border-[#E5E8EB]">
            <div className="w-[312px] border-t border-x overflow-hidden shadow-lg bg-white rounded-t-[16px] border-[#E5E8EB]">
              <div className="flex justify-center pt-2.5 pb-1">
                <div className="w-9 h-1 rounded-full bg-[#D7DBE2]" />
              </div>

              <div className="p-4 border-b border-[#F2F4F6]">
                <h4 className="text-[17px] font-bold text-[#191F28]">
                  {isPartner ? '작업 조건 선택' : '이사 층수 선택'}
                </h4>
              </div>

              <div className="p-2 space-y-1">
                {[
                  isPartner ? '사다리차 이용 가능' : '1층 (단독주택/저층)',
                  isPartner ? '엘리베이터 이용 가능' : '2층 ~ 4층',
                  isPartner ? '계단 운반 작업' : '5층 이상 (사다리차 권장)',
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`h-[48px] px-3 rounded-[6px] flex items-center justify-between text-[14px] font-medium transition-colors ${
                      i === 0
                        ? 'bg-[#E8F3FF] text-[#1B64DA] font-bold'
                        : 'text-[#333D4B] hover:bg-[#F2F4F6]'
                    }`}
                  >
                    <span>{item}</span>
                    {i === 0 && <Check className="w-4 h-4 text-[#1B64DA]" />}
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
