import React, { useState } from 'react';
import {
  InputText,
  InputMemo,
  InputSearch,
  InputNumber,
  SelectText
} from '../ui/Input';
import { Smartphone, Monitor, Search, AlertCircle, CheckCircle2 } from 'lucide-react';

export const InputSection: React.FC<{ mode?: 'customer' | 'partner' }> = ({ mode = 'customer' }) => {
  const isPartner = mode === 'partner';
  const isDark = false; // 파트너향도 고객향과 동일한 깨끗한 라이트모드로 통일
  const [deviceView, setDeviceView] = useState<'mobile' | 'pc'>('mobile');

  // Input states
  const [textVal, setTextVal] = useState(isPartner ? '서울시 강남구 테헤란로 123 (역삼동)' : '서울시 강남구 테헤란로 123');
  const [errorTextVal, setErrorTextVal] = useState('잘못된 사업자등록번호 입력');
  const [disabledTextVal, setDisabledTextVal] = useState('인증 완료된 기사 정보 (수정 불가)');
  const [memoVal, setMemoVal] = useState('사다리차 진입 가능한 주차공간 확보 완료. 5톤 탑차 진입 가능.');
  const [numVal, setNumVal] = useState('1200000');
  const [selectVal, setSelectVal] = useState('');

  const currentWidthStyle = {
    width: deviceView === 'mobile' ? '312px' : isPartner ? '627px' : '640px',
  };

  return (
    <section id="inputs" className="space-y-10">
      {/* Section Header */}
      <div className="border-b pb-6 border-[#E5E8EB]">
        <span className="text-[13px] font-bold text-[#3182F6]">
          {isPartner ? '파트너향 디자인시스템' : '입력 폼'}
        </span>
        <h2 className="text-[28px] md:text-[32px] font-extrabold tracking-tight mt-1 text-[#191F28]">
          {isPartner ? '파트너 입력창 규격 (높이 56px · Radius 6px · 18px 텍스트)' : '입력창 컴포넌트 (Form Inputs)'}
        </h2>
        <p className="text-[15px] mt-2 leading-relaxed max-w-2xl text-[#4E5968]">
          {isPartner
            ? '피그마 공식 [파트너] 스타일가이드(loNec9fjF6nIEgkwxH7aSN) 및 실제 화면(G5JiHI51FV6XFImlsyON6u node 1:130) 기반 규격입니다. 높이 56px, Radius 6px, 패딩 16px, 기본 입력 폰트 18px(Body 1)을 적용합니다.'
            : '모바일 기준 너비 312px, 높이 56px, Corner Radius 10px, 좌우 패딩 16px의 정형화된 규격을 유지합니다. PC에서는 콘텐츠 영역 640px로 정렬됩니다. 에러 상태 시 공식 컬러 #F34766을 사용합니다.'}
        </p>
      </div>

      {/* Device Control Bar */}
      <div className={`border rounded-[18px] p-4 flex flex-wrap items-center justify-between gap-4 shadow-sm ${
        isDark ? 'bg-[#1C1B22] border-[#26252D]' : 'bg-white border-[#E5E8EB]'
      }`}>
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
            <Smartphone className="w-3.5 h-3.5" /> 모바일 (312px)
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

        <div className={`text-[12px] font-bold ${isDark ? 'text-[#4B89FF]' : 'text-[#1219F7]'}`}>
          {isDark ? '★ 파트너 코어: Radius 6px & 폰트 18px' : '★ 고객향 코어: Radius 10px & 폰트 16px'}
        </div>
      </div>

      {/* Inputs Showcase Card */}
      <div className={`border rounded-[20px] p-6 md:p-8 space-y-8 ${
        isDark ? 'bg-[#1C1B22] border-[#26252D]' : 'bg-white border-[#E5E8EB]'
      }`}>
        {/* 1. Text Input */}
        <div className="space-y-4">
          <div className={`border-b pb-3 ${isDark ? 'border-[#222129]' : 'border-[#F2F4F6]'}`}>
            <h3 className={`text-[17px] font-extrabold ${isDark ? 'text-white' : 'text-[#191F28]'}`}>
              1. 기본 텍스트 입력창 (Text Input)
            </h3>
            <p className={`text-[13px] mt-0.5 ${isDark ? 'text-[#9E9EA4]' : 'text-[#6B7684]'}`}>
              {isDark
                ? '높이 56px · Radius 6px · 좌우 패딩 16px · 18px Bold 라벨 & 18px Regular 값'
                : '높이 56px · Radius 10px · 좌우 패딩 16px · 14px Bold 라벨 & 16px Regular 값'}
            </p>
          </div>

          <div className={`rounded-[16px] p-8 flex items-center justify-center border ${
            isDark ? 'bg-[#141319] border-[#222129]' : 'bg-[#F9FAFB] border-[#E5E8EB]'
          }`}>
            <div style={currentWidthStyle} className="space-y-2">
              <label className={`block font-bold ${isDark ? 'text-[16px] text-[#E5E8EB]' : 'text-[14px] text-[#191F28]'}`}>
                {isDark ? '현장 주소 입력' : '출발지 주소'}
              </label>
              <div className={`h-[56px] px-4 border flex items-center justify-between transition-colors ${
                isDark
                  ? 'bg-[#121620] border-[#2B2A34] rounded-[6px] focus-within:border-[#595EF9]'
                  : 'bg-white border-[#D7DBE2] rounded-[10px] focus-within:border-[#1219F7]'
              }`}>
                <input
                  type="text"
                  value={textVal}
                  onChange={(e) => setTextVal(e.target.value)}
                  placeholder="주소를 입력해 주세요"
                  className={`w-full bg-transparent outline-none font-medium ${
                    isDark ? 'text-[18px] text-white placeholder-[#65656E]' : 'text-[16px] text-[#191F28] placeholder-[#888888]'
                  }`}
                />
                <Search className={`w-5 h-5 shrink-0 ${isDark ? 'text-[#4B89FF]' : 'text-[#1219F7]'}`} />
              </div>
            </div>
          </div>
        </div>

        {/* 2. Error State Input */}
        <div className="space-y-4">
          <div className={`border-b pb-3 ${isDark ? 'border-[#222129]' : 'border-[#F2F4F6]'}`}>
            <h3 className={`text-[17px] font-extrabold ${isDark ? 'text-white' : 'text-[#191F28]'}`}>
              2. 에러 상태 입력창 (Error Input)
            </h3>
            <p className={`text-[13px] mt-0.5 ${isDark ? 'text-[#9E9EA4]' : 'text-[#6B7684]'}`}>
              보더 스트로크 및 하단 안내 문구에 공식 에러 컬러 <strong>#F34766</strong> 적용
            </p>
          </div>

          <div className={`rounded-[16px] p-8 flex items-center justify-center border ${
            isDark ? 'bg-[#141319] border-[#222129]' : 'bg-[#F9FAFB] border-[#E5E8EB]'
          }`}>
            <div style={currentWidthStyle} className="space-y-2">
              <label className={`block font-bold ${isDark ? 'text-[16px] text-[#E5E8EB]' : 'text-[14px] text-[#191F28]'}`}>
                {isDark ? '사업자등록번호' : '인증번호'}
              </label>
              <div className={`h-[56px] px-4 border-2 border-[#F34766] flex items-center justify-between ${
                isDark ? 'bg-[#121620] rounded-[6px]' : 'bg-white rounded-[10px]'
              }`}>
                <input
                  type="text"
                  value={errorTextVal}
                  onChange={(e) => setErrorTextVal(e.target.value)}
                  className={`w-full bg-transparent outline-none font-medium ${
                    isDark ? 'text-[18px] text-[#F34766]' : 'text-[16px] text-[#F34766]'
                  }`}
                />
                <AlertCircle className="w-5 h-5 text-[#F34766] shrink-0" />
              </div>
              <span className="text-[13px] font-bold text-[#F34766] block">
                등록되지 않은 사업자등록번호입니다. 확인 후 다시 입력해 주세요.
              </span>
            </div>
          </div>
        </div>

        {/* 3. Textarea / Memo */}
        <div className="space-y-4">
          <div className={`border-b pb-3 ${isDark ? 'border-[#222129]' : 'border-[#F2F4F6]'}`}>
            <h3 className={`text-[17px] font-extrabold ${isDark ? 'text-white' : 'text-[#191F28]'}`}>
              3. 작업 특이사항 메모 (Textarea)
            </h3>
            <p className={`text-[13px] mt-0.5 ${isDark ? 'text-[#9E9EA4]' : 'text-[#6B7684]'}`}>
              {isDark ? '최소 높이 112px · Radius 6px · 패딩 16px' : '최소 높이 112px · Radius 10px · 패딩 16px'}
            </p>
          </div>

          <div className={`rounded-[16px] p-8 flex items-center justify-center border ${
            isDark ? 'bg-[#141319] border-[#222129]' : 'bg-[#F9FAFB] border-[#E5E8EB]'
          }`}>
            <div style={currentWidthStyle} className="space-y-2">
              <label className={`block font-bold ${isDark ? 'text-[16px] text-[#E5E8EB]' : 'text-[14px] text-[#191F28]'}`}>
                특이사항 및 메모
              </label>
              <textarea
                value={memoVal}
                onChange={(e) => setMemoVal(e.target.value)}
                rows={3}
                className={`w-full p-4 border outline-none font-medium resize-none ${
                  isDark
                    ? 'bg-[#121620] border-[#2B2A34] rounded-[6px] text-white text-[16px] focus:border-[#595EF9]'
                    : 'bg-white border-[#D7DBE2] rounded-[10px] text-[#191F28] text-[15px] focus:border-[#1219F7]'
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
