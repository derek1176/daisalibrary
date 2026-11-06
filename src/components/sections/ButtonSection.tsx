import React, { useState } from 'react';
import { PublicButton, ModalButtons, Chip, ButtonState } from '../ui/Button';
import { Smartphone, Monitor } from 'lucide-react';

export const ButtonSection: React.FC = () => {
  const [btnState, setBtnState] = useState<ButtonState>('normal');
  const [activeChip, setActiveChip] = useState('원룸이사 (소형)');
  const [deviceView, setDeviceView] = useState<'mobile' | 'pc'>('mobile');
  const [modalType, setModalType] = useState<'double' | 'single'>('double');
  const [modalSize, setModalSize] = useState<48 | 56>(56);

  const chips = ['원룸이사 (소형)', '가정이사 (아파트)', '사무실/기업이사', '보관이사', '에어컨 이전설치'];

  return (
    <section id="buttons" className="space-y-10">
      {/* Section Header: Toss Style */}
      <div className="border-b border-[#E5E8EB] pb-6">
        <span className="text-[13px] font-bold text-[#3182F6]">
          버튼 컴포넌트
        </span>
        <h2 className="text-[28px] md:text-[32px] font-extrabold text-[#191F28] tracking-tight mt-1">
          버튼
        </h2>
        <p className="text-[15px] text-[#4E5968] mt-2 leading-relaxed max-w-2xl">
          다이사 서비스 전반에서 사용하는 <strong>본문 표준 Public Button</strong>, 모달 다이얼로그 버튼, 필터 칩 규격입니다.
        </p>
      </div>

      {/* State & Device Control Bar */}
      <div className="bg-white border border-[#E5E8EB] rounded-[20px] p-4 flex flex-wrap items-center justify-between gap-4 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
        {/* Device Switcher */}
        <div className="flex items-center gap-1.5 bg-[#F2F4F6] p-1 rounded-[12px] border border-[#E5E8EB]/50">
          <button
            type="button"
            onClick={() => setDeviceView('mobile')}
            className={`px-3.5 py-1.5 rounded-[9px] text-[13px] font-bold flex items-center gap-1.5 transition-all ${
              deviceView === 'mobile' ? 'bg-white text-[#191F28] shadow-2xs' : 'text-[#6B7684] hover:text-[#191F28]'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" /> 모바일 (312px)
          </button>
          <button
            type="button"
            onClick={() => setDeviceView('pc')}
            className={`px-3.5 py-1.5 rounded-[9px] text-[13px] font-bold flex items-center gap-1.5 transition-all ${
              deviceView === 'pc' ? 'bg-white text-[#191F28] shadow-2xs' : 'text-[#6B7684] hover:text-[#191F28]'
            }`}
          >
            <Monitor className="w-3.5 h-3.5" /> 웹/PC (640px)
          </button>
        </div>

        {/* State Toggle Buttons */}
        <div className="flex items-center gap-1.5">
          <span className="text-[12px] text-[#8B95A1] font-medium mr-1">상태:</span>
          {(['normal', 'loading', 'disable', 'error'] as ButtonState[]).map((st) => (
            <button
              key={st}
              type="button"
              onClick={() => setBtnState(st)}
              className={`px-3 py-1 rounded-[8px] text-[12px] font-bold capitalize transition-colors ${
                btnState === st
                  ? 'bg-[#191F28] text-white shadow-2xs'
                  : 'bg-[#F2F4F6] text-[#4E5968] hover:bg-[#E5E8EB]'
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Buttons */}
      <div className="grid grid-cols-1 gap-8">
        {/* 1. Public In-Content Button (Official Standard) */}
        <div className="bg-white border-2 border-[#1219F7]/20 rounded-[22px] p-6 md:p-8 space-y-4 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[#F2F4F6] pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#1219F7]" />
              <h3 className="text-[18px] font-extrabold text-[#191F28]">
                본문 표준 버튼 (Public Button)
              </h3>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#E8F3FF] text-[#1B64DA]">
                공식 표준
              </span>
            </div>
            <span className="text-[12px] text-[#6B7684]">
              {deviceView === 'mobile' ? '너비 312px (r:10)' : '너비 640px (r:10)'} · 높이 56px · 16px Bold White
            </span>
          </div>

          <div className="p-8 bg-[#F9FAFB] rounded-[16px] flex flex-col items-center justify-center min-h-[140px] border border-[#E5E8EB]">
            <div style={{ width: deviceView === 'mobile' ? '312px' : '640px' }} className="max-w-full">
              <PublicButton
                fluid
                state={btnState}
                onClick={() => alert('견적 신청하기 버튼 클릭')}
              >
                이사 견적 신청하기
              </PublicButton>
            </div>
          </div>
        </div>

        {/* 2. Modal Dialog Action Buttons */}
        <div className="bg-white border border-[#E5E8EB] rounded-[22px] p-6 md:p-8 space-y-4 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[#F2F4F6] pb-3">
            <div className="flex items-center gap-2">
              <h3 className="text-[18px] font-bold text-[#191F28]">
                모달 다이얼로그 버튼 (Modal Buttons)
              </h3>
            </div>
            <div className="flex items-center gap-2">
              {/* Type Switch */}
              <div className="flex bg-[#F2F4F6] p-0.5 rounded-[8px] text-[11px] font-bold">
                <button
                  type="button"
                  onClick={() => setModalType('double')}
                  className={`px-2 py-1 rounded-[6px] transition-colors ${
                    modalType === 'double' ? 'bg-white text-[#191F28] shadow-2xs' : 'text-[#6B7684]'
                  }`}
                >
                  2버튼 컨펌
                </button>
                <button
                  type="button"
                  onClick={() => setModalType('single')}
                  className={`px-2 py-1 rounded-[6px] transition-colors ${
                    modalType === 'single' ? 'bg-white text-[#191F28] shadow-2xs' : 'text-[#6B7684]'
                  }`}
                >
                  1버튼 알림
                </button>
              </div>

              {/* Height Switch */}
              <div className="flex bg-[#F2F4F6] p-0.5 rounded-[8px] text-[11px] font-bold">
                <button
                  type="button"
                  onClick={() => setModalSize(56)}
                  className={`px-2 py-1 rounded-[6px] transition-colors ${
                    modalSize === 56 ? 'bg-white text-[#191F28] shadow-2xs' : 'text-[#6B7684]'
                  }`}
                >
                  56px 표준
                </button>
                <button
                  type="button"
                  onClick={() => setModalSize(48)}
                  className={`px-2 py-1 rounded-[6px] transition-colors ${
                    modalSize === 48 ? 'bg-white text-[#191F28] shadow-2xs' : 'text-[#6B7684]'
                  }`}
                >
                  48px 컴팩트
                </button>
              </div>
            </div>
          </div>

          <div className="p-8 bg-[#F9FAFB] rounded-[16px] flex flex-col items-center justify-center min-h-[140px] border border-[#E5E8EB]">
            <ModalButtons
              type={modalType}
              size={modalSize}
              onCancel={() => alert('취소되었습니다.')}
              onConfirm={() => alert('확인되었습니다.')}
            />
          </div>
        </div>

        {/* 3. Pill Chips (Category & Filter) */}
        <div className="bg-white border border-[#E5E8EB] rounded-[22px] p-6 md:p-8 space-y-4 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
          <div className="border-b border-[#F2F4F6] pb-3">
            <h3 className="text-[17px] font-bold text-[#191F28]">필터 칩 (Pill Chips)</h3>
            <p className="text-[13px] text-[#6B7684] mt-0.5">
              높이 33px · 라운드 28px (Pill) · 태그 및 조건 다중 선택 필터
            </p>
          </div>
          <div className="p-6 bg-[#F9FAFB] rounded-[16px] flex flex-wrap gap-2.5 items-center justify-center border border-[#E5E8EB]">
            {chips.map((c) => (
              <Chip
                key={c}
                active={activeChip === c}
                onClick={() => setActiveChip(c)}
              >
                {c}
              </Chip>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
