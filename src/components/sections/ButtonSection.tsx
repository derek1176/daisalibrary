import React, { useState } from 'react';
import { PublicButton, PartnerPrimaryButton, PartnerSecondaryButton, ModalButtons, Chip, ButtonState } from '../ui/Button';
import { Smartphone, Monitor } from 'lucide-react';

export const ButtonSection: React.FC<{ mode?: 'customer' | 'partner' }> = ({ mode = 'customer' }) => {
  const isPartner = mode === 'partner';
  const [btnState, setBtnState] = useState<ButtonState>('normal');
  const [activeChip, setActiveChip] = useState('가정이사 (포장)');
  const [deviceView, setDeviceView] = useState<'mobile' | 'pc'>('mobile');
  const [modalType, setModalType] = useState<'double' | 'single'>('double');
  const [modalSize, setModalSize] = useState<48 | 56>(56);

  const chips = ['가정이사 (포장)', '원룸/소형이사', '사무실 이전', '보관이사', '에어컨 분해청소'];

  return (
    <section id="buttons" className="space-y-10 relative">
      {/* Section Header */}
      <div className="border-b pb-4 border-[#E5E8EB]">
        <h2 className="text-[28px] md:text-[32px] font-extrabold tracking-tight text-[#191F28]">
          Buttons
        </h2>
      </div>

      {/* State & Device Control Bar */}
      <div className="rounded-[18px] p-4 flex flex-wrap items-center justify-between gap-4 bg-white border border-[#E5E8EB] shadow-xs">
        {/* Device Switcher */}
        <div className="flex items-center gap-1.5 p-1 rounded-[10px] border bg-[#F2F4F6] border-[#E5E8EB]/50">
          <button
            type="button"
            onClick={() => setDeviceView('mobile')}
            className={`px-3.5 py-1.5 rounded-[8px] text-[13px] font-bold flex items-center gap-1.5 transition-all select-none ${
              deviceView === 'mobile'
                ? 'bg-white text-[#191F28] shadow-2xs'
                : 'text-[#6B7684] hover:text-[#191F28]'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" /> 모바일 (312px)
          </button>
          <button
            type="button"
            onClick={() => setDeviceView('pc')}
            className={`px-3.5 py-1.5 rounded-[8px] text-[13px] font-bold flex items-center gap-1.5 transition-all select-none ${
              deviceView === 'pc'
                ? 'bg-white text-[#191F28] shadow-2xs'
                : 'text-[#6B7684] hover:text-[#191F28]'
            }`}
          >
            <Monitor className="w-3.5 h-3.5" /> {isPartner ? '웹/데스크톱 (627px)' : '웹/PC (640px)'}
          </button>
        </div>

        {/* State Toggle Buttons */}
        <div className="flex items-center gap-1.5">
          <span className="text-[12px] font-medium mr-1 text-[#8B95A1]">{isPartner ? '상태:' : '기존 상태 예시:'}</span>
          {(['normal', 'loading', 'disable'] as ButtonState[]).map((st) => (
            <button
              key={st}
              type="button"
              onClick={() => setBtnState(st)}
              className={`px-3 py-1.5 rounded-[8px] text-[12px] font-bold transition-all select-none ${
                btnState === st
                  ? 'bg-[#1219F7] text-white shadow-2xs'
                  : 'bg-[#F2F4F6] text-[#4E5968] hover:bg-[#E5E8EB]'
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Button Showcase Card */}
      <div className="border border-[#E5E8EB] rounded-[20px] p-6 md:p-8 space-y-8 bg-white shadow-sm">
        {/* 1. Main Button Section */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between border-b pb-3 border-[#F2F4F6] gap-2">
            <div>
              <h3 className="text-[17px] font-extrabold text-[#191F28]">
                {isPartner ? '1. 파트너 메인 CTA 버튼 (Primary Button 56px)' : '1. 본문 표준 버튼 (Public Button)'}
              </h3>
              <p className="text-[13px] mt-0.5 text-[#6B7684]">
                {isPartner
                  ? `높이 56px · 너비 ${deviceView === 'mobile' ? '312px' : '627px'} · Corner Radius 6px · 18/27px Bold · 자간 -1% · Large는 요청 시 62px`
                  : `시안 너비 ${deviceView === 'mobile' ? '312px' : '640px'} · 구현은 부모 너비 대응 · 높이 56px · Radius 10px · 16/24px Bold · 자간 -1%`}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold px-2 py-1 rounded bg-[#E8F3FF] text-[#1B64DA]">
                {isPartner ? '높이 56px / r:6' : '높이 56px / r:10'}
              </span>
            </div>
          </div>

          <div data-customer-preview={!isPartner || undefined} data-partner-preview={isPartner || undefined} className="rounded-[16px] p-8 flex items-center justify-center border bg-[#F9FAFB] border-[#E5E8EB]">
            {isPartner ? (
              <div style={{ width: deviceView === 'mobile' ? '312px' : '627px' }}>
                <PartnerPrimaryButton
                  state={btnState}
                  fluid
                  onClick={() => {}}
                >
                  견적 제출하기 (56px)
                </PartnerPrimaryButton>
              </div>
            ) : (
              <div style={{ width: deviceView === 'mobile' ? '312px' : '640px' }}>
                <PublicButton
                  state={btnState}
                  fluid
                  onClick={() => {}}
                >
                  견적 신청하기
                </PublicButton>
              </div>
            )}
          </div>
        </div>

        {/* 2. Secondary Action Buttons */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between border-b pb-3 border-[#F2F4F6] gap-2">
            <div>
              <h3 className="text-[17px] font-extrabold text-[#191F28]">
                {isPartner ? '2. 파트너 서브 액션 버튼 (Secondary & Modal Action 51px)' : '2. 모달 버튼 (Modal Buttons)'}
              </h3>
              <p className="text-[13px] mt-0.5 text-[#6B7684]">
                {isPartner
                  ? '기본 51px · Radius 6px · 18/27px Bold · 취소 etc-03 / text-03 · 확인 main-01 / system-02 · Compact는 명시적 요청 시 48px / 16px'
                  : '시안 내부 280px (136 + 8 + 136) · 높이 56px · Radius 10px · 16/24px Bold · 48px는 기존 예시이며 필수 기준 제외'}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold px-2 py-1 rounded bg-[#E8F3FF] text-[#1B64DA]">
                {isPartner ? '높이 51px / r:6' : '표준 높이 56px'}
              </span>
            </div>
          </div>

          <div data-customer-preview={!isPartner || undefined} data-partner-preview={isPartner || undefined} className="rounded-[16px] p-8 flex flex-col items-center justify-center gap-4 border bg-[#F9FAFB] border-[#E5E8EB]">
            {isPartner ? (
              <div className="space-y-4 w-full max-w-[340px]">
                {/* Visual Pair from node 9053:6921 */}
                <div className="flex items-center gap-2.5 w-full">
                  <PartnerSecondaryButton
                    variant="cancel"
                    className="flex-1"
                    onClick={() => {}}
                  >
                    취소
                  </PartnerSecondaryButton>
                  <button
                    type="button"
                    onClick={() => {}}
                    className="flex-1 h-[51px] px-5 rounded-[6px] text-[18px] leading-[27px] font-bold inline-flex items-center justify-center bg-[#1219F7] hover:bg-[#0E15D4] text-white transition-colors"
                  >
                    답변 생성
                  </button>
                </div>

                {/* Outline Sub Action */}
                <div className="flex items-center gap-2.5 w-full pt-2">
                  <PartnerSecondaryButton
                    variant="outline"
                    className="flex-1"
                    onClick={() => {}}
                  >
                    상세 조회 (51px)
                  </PartnerSecondaryButton>
                  <PartnerSecondaryButton
                    variant="outline"
                    className="flex-1"
                    onClick={() => {}}
                  >
                    조건 변경
                  </PartnerSecondaryButton>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-3">
                <div className="w-[280px]">
                  <ModalButtons
                    type={modalType}
                    size={modalSize}
                    confirmText="확인"
                    cancelText="취소"
                    onConfirm={() => {}}
                    onCancel={() => {}}
                  />
                </div>
                <div className="flex items-center gap-3 text-[12px] text-[#6B7684] pt-2">
                  <span className="font-medium">모달 옵션 변경:</span>
                  <div className="flex items-center gap-1 bg-[#E5E8EB]/50 p-1 rounded-[6px]">
                    <button
                      type="button"
                      onClick={() => setModalType('double')}
                      className={`px-2 py-0.5 rounded-[4px] text-[11px] font-semibold ${
                        modalType === 'double' ? 'bg-white text-[#191F28] shadow-xs' : 'text-[#6B7684]'
                      }`}
                    >
                      2분할 (취소/확인)
                    </button>
                    <button
                      type="button"
                      onClick={() => setModalType('single')}
                      className={`px-2 py-0.5 rounded-[4px] text-[11px] font-semibold ${
                        modalType === 'single' ? 'bg-white text-[#191F28] shadow-xs' : 'text-[#6B7684]'
                      }`}
                    >
                      단일 (확인)
                    </button>
                  </div>
                  <div className="flex items-center gap-1 bg-[#E5E8EB]/50 p-1 rounded-[6px]">
                    <button
                      type="button"
                      onClick={() => setModalSize(56)}
                      className={`px-2 py-0.5 rounded-[4px] text-[11px] font-semibold ${
                        modalSize === 56 ? 'bg-white text-[#191F28] shadow-xs' : 'text-[#6B7684]'
                      }`}
                    >
                      56px
                    </button>
                    <button
                      type="button"
                      onClick={() => setModalSize(48)}
                      className={`px-2 py-0.5 rounded-[4px] text-[11px] font-semibold ${
                        modalSize === 48 ? 'bg-white text-[#191F28] shadow-xs' : 'text-[#6B7684]'
                      }`}
                    >
                      48px (기존 예시)
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 3. Filter Chips */}
        <div className="space-y-4">
          <div className="border-b pb-3 border-[#F2F4F6]">
            <h3 className="text-[17px] font-extrabold text-[#191F28]">
              3. 필터 및 선택 칩 (Filter Chips)
            </h3>
            <p className="text-[13px] mt-0.5 text-[#6B7684]">
              {isPartner ? '오토레이아웃 참고: 칩 간 간격 6px · 좌우 여백 20px' : '배치와 간격은 구성에 맞게 설계'} · <strong>원형·캡슐형은 완전 둥근 형태 (rounded-full / Pill)</strong>
            </p>
          </div>

          <div data-customer-preview={!isPartner || undefined} data-partner-preview={isPartner || undefined} className="rounded-[16px] p-6 flex flex-wrap gap-2.5 border bg-[#F9FAFB] border-[#E5E8EB]">
            {chips.map((chip) => {
              const active = activeChip === chip;
              return (
                <button
                  key={chip}
                  type="button"
                  onClick={() => setActiveChip(chip)}
                  className={`h-[36px] px-[20px] rounded-full text-[14px] font-bold transition-all border ${
                    active
                      ? 'bg-[#1219F7] text-white border-[#1219F7] shadow-xs'
                      : 'bg-white text-[#4E5968] border-[#D7DBE2] hover:border-[#1219F7] hover:text-[#191F28]'
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
