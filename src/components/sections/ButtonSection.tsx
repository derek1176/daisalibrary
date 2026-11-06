import React, { useState } from 'react';
import { PublicButton, PartnerPrimaryButton, PartnerSecondaryButton, ModalButtons, Chip, ButtonState } from '../ui/Button';
import { Smartphone, Monitor, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const ButtonSection: React.FC<{ mode?: 'customer' | 'partner' }> = ({ mode = 'customer' }) => {
  const isPartner = mode === 'partner';
  const isDark = false; // 파트너향도 고객향과 동일한 깨끗한 라이트모드로 통일
  const [btnState, setBtnState] = useState<ButtonState>('normal');
  const [activeChip, setActiveChip] = useState('가정이사 (포장)');
  const [deviceView, setDeviceView] = useState<'mobile' | 'pc'>('mobile');
  const [modalType, setModalType] = useState<'double' | 'single'>('double');
  const [modalSize, setModalSize] = useState<48 | 56>(56);

  const chips = ['가정이사 (포장)', '원룸/소형이사', '사무실 이전', '보관이사', '에어컨 분해청소'];

  return (
    <section id="buttons" className="space-y-10">
      {/* Section Header */}
      <div className="border-b pb-6 border-[#E5E8EB]">
        <span className="text-[13px] font-bold text-[#3182F6]">
          {isPartner ? '파트너향 디자인시스템' : '버튼 컴포넌트'}
        </span>
        <h2 className="text-[28px] md:text-[32px] font-extrabold tracking-tight mt-1 text-[#191F28]">
          {isPartner ? '파트너 버튼 규격 (메인 CTA 56px r:6 · 18px Bold)' : '버튼'}
        </h2>
        <p className="text-[15px] mt-2 leading-relaxed max-w-2xl text-[#4E5968]">
          {isPartner
            ? '피그마 공식 [파트너] 스타일가이드(loNec9fjF6nIEgkwxH7aSN) 기반 규격입니다. 파트너 메인 CTA 버튼은 높이 56px, Corner Radius 6px, 18px Bold 텍스트를 기본으로 적용하며, 보조 액션 버튼은 48px/51px(r:4~6)을 적용합니다.'
            : '다이사 서비스 전반에서 사용하는 본문 표준 Public Button, 모달 다이얼로그 버튼, 필터 칩 규격입니다.'}
        </p>
      </div>

      {/* State & Device Control Bar */}
      <div className={`border rounded-[18px] p-4 flex flex-wrap items-center justify-between gap-4 shadow-sm ${
        isDark ? 'bg-[#1C1B22] border-[#26252D]' : 'bg-white border-[#E5E8EB]'
      }`}>
        {/* Device Switcher */}
        <div className={`flex items-center gap-1.5 p-1 rounded-[10px] border ${
          isDark ? 'bg-[#121620] border-[#2B2A34]' : 'bg-[#F2F4F6] border-[#E5E8EB]/50'
        }`}>
          <button
            type="button"
            onClick={() => setDeviceView('mobile')}
            className={`px-3.5 py-1.5 rounded-[8px] text-[13px] font-bold flex items-center gap-1.5 transition-all ${
              deviceView === 'mobile'
                ? isDark ? 'bg-[#292931] text-white shadow-xs' : 'bg-white text-[#191F28] shadow-2xs'
                : isDark ? 'text-[#9E9EA4] hover:text-white' : 'text-[#6B7684] hover:text-[#191F28]'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" /> {isDark ? '모바일 (312px)' : '모바일 (312px)'}
          </button>
          <button
            type="button"
            onClick={() => setDeviceView('pc')}
            className={`px-3.5 py-1.5 rounded-[8px] text-[13px] font-bold flex items-center gap-1.5 transition-all ${
              deviceView === 'pc'
                ? isDark ? 'bg-[#292931] text-white shadow-xs' : 'bg-white text-[#191F28] shadow-2xs'
                : isDark ? 'text-[#9E9EA4] hover:text-white' : 'text-[#6B7684] hover:text-[#191F28]'
            }`}
          >
            <Monitor className="w-3.5 h-3.5" /> {isDark ? '웹/데스크톱 (627px)' : '웹/PC (640px)'}
          </button>
        </div>

        {/* State Toggle Buttons */}
        <div className="flex items-center gap-1.5">
          <span className={`text-[12px] font-medium mr-1 ${isDark ? 'text-[#9E9EA4]' : 'text-[#8B95A1]'}`}>상태:</span>
          {(['normal', 'loading', 'disable', 'error'] as ButtonState[]).map((st) => (
            <button
              key={st}
              type="button"
              onClick={() => setBtnState(st)}
              className={`px-3 py-1.5 rounded-[8px] text-[12px] font-bold transition-all ${
                btnState === st
                  ? isDark ? 'bg-[#595EF9] text-white shadow-xs' : 'bg-[#1219F7] text-white shadow-2xs'
                  : isDark ? 'bg-[#292931] text-[#9E9EA4] hover:text-white' : 'bg-[#F2F4F6] text-[#4E5968] hover:bg-[#E5E8EB]'
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Button Showcase Card */}
      <div className={`border rounded-[20px] p-6 md:p-8 space-y-8 ${
        isDark ? 'bg-[#1C1B22] border-[#26252D]' : 'bg-white border-[#E5E8EB]'
      }`}>
        {/* 1. Main Button Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b pb-3 border-[#F2F4F6]">
            <div>
              <h3 className="text-[17px] font-extrabold text-[#191F28]">
                {isPartner ? '1. 파트너 메인 CTA 버튼 (Primary Button 56px)' : '1. 본문 표준 버튼 (Public Button)'}
              </h3>
              <p className="text-[13px] mt-0.5 text-[#6B7684]">
                {isPartner
                  ? `높이 56px · 너비 ${deviceView === 'mobile' ? '312px' : '627px'} · Corner Radius 6px · 폰트 18px Bold`
                  : `높이 56px · 너비 ${deviceView === 'mobile' ? '312px' : '640px'} · Corner Radius 10px · 폰트 16px Bold`}
              </p>
            </div>
            <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-[#E8F3FF] text-[#1B64DA]">
              {isPartner ? '높이 56px / r:6' : '높이 56px / r:10'}
            </span>
          </div>

          <div className="rounded-[16px] p-8 flex items-center justify-center border bg-[#F9FAFB] border-[#E5E8EB]">
            {isPartner ? (
              <div style={{ width: deviceView === 'mobile' ? '312px' : '627px' }}>
                <PartnerPrimaryButton
                  state={btnState}
                  fluid
                  onClick={() => alert('파트너 견적 제출')}
                >
                  견적 제출하기 (56px)
                </PartnerPrimaryButton>
              </div>
            ) : (
              <div style={{ width: deviceView === 'mobile' ? '312px' : '640px' }}>
                <PublicButton
                  state={btnState}
                  fluid
                  onClick={() => alert('신청 완료')}
                >
                  견적 신청하기
                </PublicButton>
              </div>
            )}
          </div>
        </div>

        {/* 2. Secondary Action Buttons */}
        <div className="space-y-4">
          <div className={`flex items-center justify-between border-b pb-3 ${isDark ? 'border-[#222129]' : 'border-[#F2F4F6]'}`}>
            <div>
              <h3 className="text-[17px] font-extrabold text-[#191F28]">
                {isPartner ? '2. 파트너 서브 액션 버튼 (Secondary Action 51px)' : '2. 모달 버튼 (Modal Buttons)'}
              </h3>
              <p className="text-[13px] mt-0.5 text-[#6B7684]">
                {isPartner
                  ? 'Figma [개발] v1.2 node 1:130 규격: 280x51 r:4 / 51px r:6 아웃라인 및 솔리드 보조 버튼'
                  : '너비 280px (136px + 8px + 136px 2분할) · 높이 56px 또는 48px · Corner Radius 10px'}
              </p>
            </div>
            <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-[#E8F3FF] text-[#1B64DA]">
              {isPartner ? '높이 51px / r:4~6' : '높이 56px / 48px'}
            </span>
          </div>

          <div className="rounded-[16px] p-8 flex items-center justify-center gap-3 border bg-[#F9FAFB] border-[#E5E8EB]">
            {isPartner ? (
              <div className="flex items-center gap-3 w-[312px]">
                <PartnerSecondaryButton
                  variant="outline"
                  className="flex-1"
                  onClick={() => alert('보조 액션')}
                >
                  상세 조회 (51px)
                </PartnerSecondaryButton>
                <PartnerSecondaryButton
                  variant="solid"
                  className="flex-1"
                  onClick={() => alert('조건 변경')}
                >
                  조건 변경
                </PartnerSecondaryButton>
              </div>
            ) : (
              <div className="w-[280px]">
                <ModalButtons
                  type={modalType}
                  size={modalSize}
                  confirmText="확인"
                  cancelText="취소"
                  onConfirm={() => alert('확인 클릭')}
                  onCancel={() => alert('취소 클릭')}
                />
              </div>
            )}
          </div>
        </div>

        {/* 3. Filter Chips */}
        <div className="space-y-4">
          <div className={`border-b pb-3 ${isDark ? 'border-[#222129]' : 'border-[#F2F4F6]'}`}>
            <h3 className={`text-[17px] font-extrabold ${isDark ? 'text-white' : 'text-[#191F28]'}`}>
              3. 필터 및 선택 칩 (Filter Chips)
            </h3>
            <p className={`text-[13px] mt-0.5 ${isDark ? 'text-[#9E9EA4]' : 'text-[#6B7684]'}`}>
              {isDark
                ? 'Radius 4px / 6px · 폰트 16px · 활성 시 키컬러 테두리 및 배경 하이라이트'
                : '높이 38px · Corner Radius 10px · 패딩 14px · 14px Medium'}
            </p>
          </div>

          <div className={`rounded-[16px] p-6 flex flex-wrap gap-2.5 border ${
            isDark ? 'bg-[#141319] border-[#222129]' : 'bg-[#F9FAFB] border-[#E5E8EB]'
          }`}>
            {chips.map((chip) => {
              const active = activeChip === chip;
              return (
                <button
                  key={chip}
                  type="button"
                  onClick={() => setActiveChip(chip)}
                  className={`px-4 py-2 rounded-[6px] text-[14px] font-bold transition-all ${
                    active
                      ? isDark
                        ? 'bg-[#595EF9]/20 text-[#A5A8FC] border border-[#595EF9]'
                        : 'bg-[#1219F7] text-white'
                      : isDark
                      ? 'bg-[#292931] text-[#CBD5E1] border border-[#2B2A34] hover:border-[#2B2A34]'
                      : 'bg-white text-[#4E5968] border border-[#E5E8EB] hover:bg-[#F2F4F6]'
                  }`}
                >
                  {chip}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
