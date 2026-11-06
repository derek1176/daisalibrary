import React, { useState } from 'react';
import { Smartphone, Monitor, Search, ChevronDown, CheckCircle2 } from 'lucide-react';

export const InputSection: React.FC<{ mode?: 'customer' | 'partner' }> = ({ mode = 'customer' }) => {
  const isPartner = mode === 'partner';
  const [deviceView, setDeviceView] = useState<'mobile' | 'pc'>('mobile');

  // Input states
  const [textVal, setTextVal] = useState(isPartner ? '서울시 강남구 테헤란로 123 (역삼동)' : '서울시 강남구 테헤란로 123');
  const [errorTextVal, setErrorTextVal] = useState(isPartner ? '123-45-67890' : '998877');
  const [searchVal, setSearchVal] = useState('포장이사');
  const [memoVal, setMemoVal] = useState(
    isPartner
      ? '사다리차 진입 가능한 주차 공간 확보 완료. 5톤 탑차 진입 가능.'
      : '엘리베이터 사용 가능하며 관리사무소에 사전 예약 완료했습니다.'
  );
  const [selectVal, setSelectVal] = useState(isPartner ? '5톤 탑차 (추천)' : '가정이사 (포장)');

  // Responsive Width calculation based on official md
  // Customer: Mobile 312px / PC 640px
  // Partner: Mobile 312px / PC 627px (Order Container)
  const currentWidth = deviceView === 'mobile' ? '312px' : isPartner ? '627px' : '640px';

  return (
    <section id="inputs" className="space-y-10">
      {/* Section Header */}
      <div className="border-b pb-4 border-[#E5E8EB]">
        <h2 className="text-[28px] md:text-[32px] font-extrabold tracking-tight text-[#191F28]">
          Inputs
        </h2>
      </div>

      {/* Device Control Bar */}
      <div className="border border-[#E5E8EB] rounded-[18px] p-4 flex flex-wrap items-center justify-between gap-4 bg-white shadow-sm">
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

        <div className="text-[12px] font-bold text-[#1219F7]">
          {isPartner
            ? '★ 파트너 코어: Radius 6px · 기본 18px 텍스트 (Stroke 1px)'
            : '★ 고객향 코어: Radius 10px · 기본 16px 텍스트 (Stroke 1px)'}
        </div>
      </div>

      {/* Inputs Showcase Card */}
      <div className="border border-[#E5E8EB] rounded-[20px] p-6 md:p-8 space-y-8 bg-white shadow-sm">
        {/* 1. Standard Text Input */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-[#F2F4F6] pb-3">
            <div>
              <h3 className="text-[17px] font-extrabold text-[#191F28]">
                1. 기본 텍스트 입력창 (Text Input)
              </h3>
              <p className="text-[13px] mt-0.5 text-[#6B7684]">
                {isPartner
                  ? '높이 56px · Corner Radius 6px · 1px stroke · 라벨 16px Bold · 입력값 18px Regular'
                  : '높이 56px · Corner Radius 10px · 1px stroke · 라벨 14px Bold · 입력값 16px Regular'}
              </p>
            </div>
            <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-[#E8F3FF] text-[#1B64DA]">
              {isPartner ? 'Radius 6px / 18px' : 'Radius 10px / 16px'}
            </span>
          </div>

          <div className="rounded-[16px] p-8 flex items-center justify-center border bg-[#F9FAFB] border-[#E5E8EB]">
            <div style={{ width: currentWidth }} className="space-y-2 transition-all duration-300">
              <label
                className={`block font-bold text-[#191F28] ${
                  isPartner ? 'text-[16px]' : 'text-[14px]'
                }`}
              >
                {isPartner ? '현장 작업 주소' : '출발지 주소'}
              </label>
              {/* 1px stroke 고정: border border-[#D7DBE2] (두꺼운 border-2 제거) */}
              <div
                className={`h-[56px] px-4 border border-[#D7DBE2] bg-white flex items-center justify-between transition-colors focus-within:border-[#1219F7] ${
                  isPartner ? 'rounded-[6px]' : 'rounded-[10px]'
                }`}
              >
                <input
                  type="text"
                  value={textVal}
                  onChange={(e) => setTextVal(e.target.value)}
                  placeholder="주소를 입력해 주세요"
                  className={`w-full bg-transparent outline-none font-medium text-[#191F28] placeholder-[#888888] ${
                    isPartner ? 'text-[18px]' : 'text-[16px]'
                  }`}
                />
                <Search className="w-5 h-5 text-[#888888] shrink-0 ml-2" />
              </div>
            </div>
          </div>
        </div>

        {/* 2. Error State Input */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-[#F2F4F6] pb-3">
            <div>
              <h3 className="text-[17px] font-extrabold text-[#191F28]">
                2. 에러 상태 입력창 (Error Input)
              </h3>
              <p className="text-[13px] mt-0.5 text-[#6B7684]">
                공식 에러 컬러 <strong>#F34766</strong> 적용 · 1px solid stroke 유지 및 하단 14px 에러 메시지
              </p>
            </div>
            <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-red-50 text-[#F34766] border border-red-200">
              Error #F34766
            </span>
          </div>

          <div className="rounded-[16px] p-8 flex items-center justify-center border bg-[#F9FAFB] border-[#E5E8EB]">
            <div style={{ width: currentWidth }} className="space-y-2 transition-all duration-300">
              <label
                className={`block font-bold text-[#191F28] ${
                  isPartner ? 'text-[16px]' : 'text-[14px]'
                }`}
              >
                {isPartner ? '사업자등록번호 입력' : '인증번호 입력'}
              </label>
              {/* 1px stroke 고정: border border-[#F34766] */}
              <div
                className={`h-[56px] px-4 border border-[#F34766] bg-white flex items-center justify-between ${
                  isPartner ? 'rounded-[6px]' : 'rounded-[10px]'
                }`}
              >
                <input
                  type="text"
                  value={errorTextVal}
                  onChange={(e) => setErrorTextVal(e.target.value)}
                  className={`w-full bg-transparent outline-none font-medium text-[#F34766] ${
                    isPartner ? 'text-[18px]' : 'text-[16px]'
                  }`}
                />
              </div>
              <span className="text-[14px] font-medium text-[#F34766] block pt-0.5">
                {isPartner
                  ? '등록되지 않은 사업자등록번호입니다. 확인 후 다시 입력해 주세요.'
                  : '인증번호가 일치하지 않습니다. 다시 확인해 주세요.'}
              </span>
            </div>
          </div>
        </div>

        {/* 3. Dropdown Select Input */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-[#F2F4F6] pb-3">
            <div>
              <h3 className="text-[17px] font-extrabold text-[#191F28]">
                3. 선택 드롭다운 (Select Input)
              </h3>
              <p className="text-[13px] mt-0.5 text-[#6B7684]">
                높이 56px · 1px stroke · 우측 드롭다운 화살표
              </p>
            </div>
            <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-[#E8F3FF] text-[#1B64DA]">
              {isPartner ? 'Radius 6px' : 'Radius 10px'}
            </span>
          </div>

          <div className="rounded-[16px] p-8 flex items-center justify-center border bg-[#F9FAFB] border-[#E5E8EB]">
            <div style={{ width: currentWidth }} className="space-y-2 transition-all duration-300">
              <label
                className={`block font-bold text-[#191F28] ${
                  isPartner ? 'text-[16px]' : 'text-[14px]'
                }`}
              >
                {isPartner ? '작업 차량 종류' : '이사 서비스 선택'}
              </label>
              <div
                className={`h-[56px] px-4 border border-[#D7DBE2] bg-white flex items-center justify-between cursor-pointer hover:border-[#1219F7] transition-colors ${
                  isPartner ? 'rounded-[6px]' : 'rounded-[10px]'
                }`}
              >
                <span
                  className={`font-medium text-[#191F28] ${
                    isPartner ? 'text-[18px]' : 'text-[16px]'
                  }`}
                >
                  {selectVal}
                </span>
                <ChevronDown className="w-5 h-5 text-[#888888] shrink-0" />
              </div>
            </div>
          </div>
        </div>

        {/* 4. Textarea / Memo */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-[#F2F4F6] pb-3">
            <div>
              <h3 className="text-[17px] font-extrabold text-[#191F28]">
                4. 특이사항 메모 (Textarea Memo)
              </h3>
              <p className="text-[13px] mt-0.5 text-[#6B7684]">
                {isPartner
                  ? '파트너 작업 메모 규격: 높이 112px · Corner Radius 6px · 1px stroke · 18px 텍스트'
                  : '고객 전달 메모 규격: 높이 104px · Corner Radius 10px · 1px stroke · 16px 텍스트'}
              </p>
            </div>
            <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-[#E8F3FF] text-[#1B64DA]">
              {isPartner ? '높이 112px / r:6' : '높이 104px / r:10'}
            </span>
          </div>

          <div className="rounded-[16px] p-8 flex items-center justify-center border bg-[#F9FAFB] border-[#E5E8EB]">
            <div style={{ width: currentWidth }} className="space-y-2 transition-all duration-300">
              <label
                className={`block font-bold text-[#191F28] ${
                  isPartner ? 'text-[16px]' : 'text-[14px]'
                }`}
              >
                특이사항 및 전달 메모
              </label>
              <textarea
                value={memoVal}
                onChange={(e) => setMemoVal(e.target.value)}
                rows={3}
                style={{ height: isPartner ? '112px' : '104px' }}
                className={`w-full p-4 border border-[#D7DBE2] bg-white outline-none font-medium resize-none text-[#191F28] placeholder-[#888888] focus:border-[#1219F7] transition-colors ${
                  isPartner
                    ? 'rounded-[6px] text-[18px]'
                    : 'rounded-[10px] text-[16px]'
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
