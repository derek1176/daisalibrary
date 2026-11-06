import React, { useState } from 'react';
import {
  InputText,
  InputMemo,
  InputSearch,
  InputNumber,
  SelectText,
  Stepper
} from '../ui/Input';
import { Smartphone, Monitor } from 'lucide-react';

export const InputSection: React.FC = () => {
  const [deviceView, setDeviceView] = useState<'mobile' | 'pc'>('mobile');

  // Input states
  const [textVal, setTextVal] = useState('서울시 강남구 테헤란로 123');
  const [memoVal, setMemoVal] = useState('사다리차 진입 가능한 주차공간이 있으며, 냉장고 분해 조립 요청드립니다.');
  const [searchVal, setSearchVal] = useState('광명시');
  const [numVal, setNumVal] = useState('369369');
  const [numStatus, setNumStatus] = useState<'none' | 'success' | 'error'>('none');
  const [selectVal, setSelectVal] = useState('');
  const [stepperLargeVal, setStepperLargeVal] = useState(1);
  const [stepperSmallVal, setStepperSmallVal] = useState(1);

  const floorOptions = [
    '1층 (단독주택/저층)',
    '2층',
    '3층',
    '4층',
    '5층 (사다리차 권장)',
    '6층 이상 (고층 아파트)',
    '지하 1층',
  ];

  return (
    <section id="inputs" className="space-y-12">
      {/* Section Header */}
      <div className="border-b border-etc-03 pb-6">
        <span className="text-[13px] font-bold text-main-01">
          입력 폼
        </span>
        <h2 className="text-[28px] font-extrabold text-text-01 tracking-da24 mt-1">
          입력창 컴포넌트
        </h2>
        <p className="text-[15px] text-text-03 mt-2 leading-relaxed max-w-2xl">
          모바일 기준 <strong>너비 312px, 높이 56px, Corner Radius 10px, 좌우 패딩 16px</strong>의 정형화된 규격을 유지합니다. PC에서는 콘텐츠 영역 <strong>640px</strong>로 정렬됩니다. 에러 상태 시 테두리 스트로크와 하단 에러 문구는 공식 컬러 <strong>#F34766</strong>을 사용합니다.
        </p>
      </div>

      {/* Device Control Bar */}
      <div className="bg-white border border-[#EBEEF2] rounded-[18px] p-4 flex flex-wrap items-center justify-between gap-4 shadow-soft">
        <div className="flex items-center gap-1.5 bg-etc-04 p-1 rounded-[10px] border border-etc-02">
          <button
            onClick={() => setDeviceView('mobile')}
            className={`px-3 py-1.5 rounded-[8px] text-[13px] font-bold flex items-center gap-1.5 transition-all ${
              deviceView === 'mobile' ? 'bg-white text-main-01 shadow-xs' : 'text-text-03 hover:text-text-01'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" /> 모바일 (312px)
          </button>
          <button
            onClick={() => setDeviceView('pc')}
            className={`px-3 py-1.5 rounded-[8px] text-[13px] font-bold flex items-center gap-1.5 transition-all ${
              deviceView === 'pc' ? 'bg-white text-main-01 shadow-xs' : 'text-text-03 hover:text-text-01'
            }`}
          >
            <Monitor className="w-3.5 h-3.5" /> 웹/PC (640px)
          </button>
        </div>

        <span className="text-[13px] text-text-03">
          현재 뷰: <strong>{deviceView === 'mobile' ? 'Mobile 312px 그리드' : 'PC 640px 단일 열 그리드'}</strong>
        </span>
      </div>

      {/* Grid of Clean Input Cards */}
      <div className="grid grid-cols-1 gap-8">
        {/* 1. input-text */}
        <div className="bg-white border border-[#EBEEF2] rounded-[20px] p-6 md:p-8 space-y-4 shadow-soft">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-etc-03 pb-3">
            <div>
              <h3 className="text-[17px] font-bold text-text-01">1. input-text (기본 텍스트 인풋)</h3>
              <p className="text-[13px] text-text-03 mt-0.5">
                기본 테두리 #D7DBE2 · 포커스 시 #1219F7 · 비활성 시 #F7F8FA 배경
              </p>
            </div>
            <span className="font-mono text-[12px] text-text-04">312x56 · r:10px · pad:16px</span>
          </div>

          <div className="p-8 bg-[#F8F9FA] rounded-[14px] flex flex-col items-center justify-center gap-6">
            <div className={deviceView === 'mobile' ? 'w-[312px]' : 'w-full max-w-[640px]'}>
              <InputText
                label="출발지 주소 (Normal)"
                placeholder="동/읍/면 또는 도로명 입력"
                value={textVal}
                onChange={(v) => setTextVal(v)}
                fluid={deviceView === 'pc'}
              />
            </div>

            <div className={deviceView === 'mobile' ? 'w-[312px]' : 'w-full max-w-[640px]'}>
              <InputText
                label="에러 상태 (Error - stroke & text #F34766)"
                value="잘못된 주소 형식입니다"
                onChange={() => {}}
                error="정확한 도로명 주소를 2글자 이상 입력해주세요 (#F34766)"
                fluid={deviceView === 'pc'}
              />
            </div>

            <div className={deviceView === 'mobile' ? 'w-[312px]' : 'w-full max-w-[640px]'}>
              <InputText
                label="비활성 상태 (Disabled)"
                value="수정 불가 항목"
                onChange={() => {}}
                disabled
                fluid={deviceView === 'pc'}
              />
            </div>
          </div>
        </div>

        {/* 2. input-text (Memo 104px) */}
        <div className="bg-white border border-[#EBEEF2] rounded-[20px] p-6 md:p-8 space-y-4 shadow-soft">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-etc-03 pb-3">
            <div>
              <h3 className="text-[17px] font-bold text-text-01">2. input-text (Memo 멀티라인 텍스트에어리어)</h3>
              <p className="text-[13px] text-text-03 mt-0.5">
                상세 요청사항, 전달 메모 입력 전용. 높이 104px 고정
              </p>
            </div>
            <span className="text-[12px] text-text-04">312x104 · 라운드 10px · 패딩 16px</span>
          </div>

          <div className="p-8 bg-[#F8F9FA] rounded-[14px] flex flex-col items-center justify-center">
            <div className={deviceView === 'mobile' ? 'w-[312px]' : 'w-full max-w-[640px]'}>
              <InputMemo
                label="업체 전달 메모 작성(선택)"
                placeholder="업체 전달 메모 작성(선택)"
                value={memoVal}
                onChange={(v) => setMemoVal(v)}
                fluid={deviceView === 'pc'}
              />
            </div>
          </div>
        </div>

        {/* 3. input-search */}
        <div className="bg-white border border-[#EBEEF2] rounded-[20px] p-6 md:p-8 space-y-4 shadow-soft">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-etc-03 pb-3">
            <div>
              <h3 className="text-[17px] font-bold text-text-01">3. input-search (검색 전용 인풋)</h3>
              <p className="text-[13px] text-text-03 mt-0.5">
                우측 돋보기 아이콘 고정 · 텍스트 입력 및 포커스 시 즉시 지우기(X) 원형 아이콘 노출
              </p>
            </div>
            <span className="font-mono text-[12px] text-text-04">312x56 · gap:8px</span>
          </div>

          <div className="p-8 bg-[#F8F9FA] rounded-[14px] flex flex-col items-center justify-center">
            <div className={deviceView === 'mobile' ? 'w-[312px]' : 'w-full max-w-[640px]'}>
              <InputSearch
                label="지역 검색"
                placeholder="도로명, 지번, 건물명(2글자 이상)"
                value={searchVal}
                onChange={(v) => setSearchVal(v)}
                fluid={deviceView === 'pc'}
              />
            </div>
          </div>
        </div>

        {/* 4. input-number & Validation */}
        <div className="bg-white border border-[#EBEEF2] rounded-[20px] p-6 md:p-8 space-y-4 shadow-soft">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-etc-03 pb-3">
            <div>
              <h3 className="text-[17px] font-bold text-text-01">4. input-number (숫자 인풋 & 검증 피드백)</h3>
              <p className="text-[13px] text-text-03 mt-0.5">
                인증번호, 평수 등 숫자 입력. Success(#333333 잠금) 및 Error(#F34766 보더 스트로크 + 문구)
              </p>
            </div>
            <div className="flex items-center gap-1.5 bg-etc-04 p-1 rounded-md text-[12px]">
              {(['none', 'success', 'error'] as const).map((st) => (
                <button
                  key={st}
                  onClick={() => setNumStatus(st)}
                  className={`px-2.5 py-0.5 rounded font-bold capitalize transition-colors ${
                    numStatus === st ? 'bg-white text-main-01 shadow-2xs' : 'text-text-03'
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>
          </div>

          <div className="p-8 bg-[#F8F9FA] rounded-[14px] flex flex-col items-center justify-center">
            <div className={deviceView === 'mobile' ? 'w-[312px]' : 'w-full max-w-[640px]'}>
              <InputNumber
                label="인증번호 입력"
                placeholder="숫자 6자리 입력"
                value={numVal}
                onChange={(v) => setNumVal(v)}
                status={numStatus}
                statusText={
                  numStatus === 'success'
                    ? '인증이 완료되었습니다'
                    : numStatus === 'error'
                    ? '인증번호가 일치하지 않습니다 (#F34766)'
                    : undefined
                }
                fluid={deviceView === 'pc'}
              />
            </div>
          </div>
        </div>

        {/* 5. select-text & Stepper */}
        <div className="bg-white border border-[#EBEEF2] rounded-[20px] p-6 md:p-8 space-y-4 shadow-soft">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-etc-03 pb-3">
            <div>
              <h3 className="text-[17px] font-bold text-text-01">5. select-text & select-number (Stepper)</h3>
              <p className="text-[13px] text-text-03 mt-0.5">
                드롭다운 선택창(Chevron 회전) 및 수량 증감 스테퍼 (Large 312x56 r:10 / Small 104x40 r:8)
              </p>
            </div>
            <span className="text-[12px] text-text-04">Large 라운드 10px · Small 라운드 8px</span>
          </div>

          <div className="p-8 bg-[#F8F9FA] rounded-[14px] flex flex-col items-center justify-center gap-6">
            <div className={deviceView === 'mobile' ? 'w-[312px]' : 'w-full max-w-[640px]'}>
              <SelectText
                label="출발지 층수 선택 (select-text)"
                placeholder="선택해주세요"
                options={floorOptions}
                value={selectVal}
                onChange={(v) => setSelectVal(v)}
                fluid={deviceView === 'pc'}
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="flex flex-col gap-1.5 items-center">
                <span className="text-[13px] font-bold text-text-02">Large Stepper (312x56, r:10)</span>
                <Stepper
                  size="large"
                  value={stepperLargeVal}
                  onChange={(v) => setStepperLargeVal(v)}
                  unit="대"
                />
              </div>

              <div className="flex flex-col gap-1.5 items-center">
                <span className="text-[13px] font-bold text-text-02">Small Stepper (104x40, r:8)</span>
                <Stepper
                  size="small"
                  value={stepperSmallVal}
                  onChange={(v) => setStepperSmallVal(v)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
