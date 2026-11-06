import React, { useState } from 'react';
import {
  InputText,
  InputMemo,
  InputSearch,
  InputNumber,
  SelectText
} from '../ui/Input';
import { Smartphone, Monitor } from 'lucide-react';

export const InputSection: React.FC = () => {
  const [deviceView, setDeviceView] = useState<'mobile' | 'pc'>('mobile');

  // Input states
  const [textVal, setTextVal] = useState('서울시 강남구 테헤란로 123');
  const [errorTextVal, setErrorTextVal] = useState('잘못된 건물명 입력');
  const [disabledTextVal, setDisabledTextVal] = useState('자동 입력 완료된 주소 (수정 불가)');
  const [memoVal, setMemoVal] = useState('사다리차 진입 가능한 주차공간이 있으며, 냉장고 분해 조립 요청드립니다.');
  const [searchVal, setSearchVal] = useState('광명시');
  const [numVal, setNumVal] = useState('369369');
  const [numStatus, setNumStatus] = useState<'none' | 'success' | 'error'>('none');
  const [selectVal, setSelectVal] = useState('');

  const floorOptions = [
    '1층 (단독주택/저층)',
    '2층',
    '3층',
    '4층',
    '5층 (사다리차 권장)',
    '6층 이상 (고층 아파트)',
    '지하 1층',
  ];

  const currentWidthClass = deviceView === 'mobile' ? 'w-[312px]' : 'w-[640px]';

  return (
    <section id="inputs" className="space-y-10">
      {/* Section Header: Toss Style */}
      <div className="border-b border-[#E5E8EB] pb-6">
        <span className="text-[13px] font-bold text-[#3182F6]">
          입력 폼
        </span>
        <h2 className="text-[28px] md:text-[32px] font-extrabold text-[#191F28] tracking-tight mt-1">
          입력창 컴포넌트 (Form Inputs)
        </h2>
        <p className="text-[15px] text-[#4E5968] mt-2 leading-relaxed max-w-2xl">
          모바일 기준 <strong>너비 312px, 높이 56px, Corner Radius 10px, 좌우 패딩 16px</strong>의 정형화된 규격을 유지합니다. PC에서는 콘텐츠 영역 <strong>640px</strong>로 정렬됩니다. 에러 상태 시 테두리 스트로크와 하단 에러 문구는 공식 컬러 <strong>#F34766</strong>을 사용합니다.
        </p>
      </div>

      {/* Device Control Bar: Toss Pill Segment */}
      <div className="bg-white border border-[#E5E8EB] rounded-[20px] p-4 flex flex-wrap items-center justify-between gap-4 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
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

        <span className="text-[12px] text-[#8B95A1] font-medium">
          에러 상태 보더 및 피드백 문구: <strong className="text-[#F34766]">#F34766</strong>
        </span>
      </div>

      {/* Input Gallery Grid */}
      <div className="grid grid-cols-1 gap-8">
        {/* 1. Input Text (Normal, Focus, Error) */}
        <div className="bg-white border border-[#E5E8EB] rounded-[22px] p-6 md:p-8 space-y-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
          <div className="border-b border-[#F2F4F6] pb-3">
            <h3 className="text-[18px] font-bold text-[#191F28]">기본 텍스트 인풋 (input-text)</h3>
            <p className="text-[13px] text-[#6B7684] mt-0.5">
              높이 56px · Radius 10px · 포커스 시 키컬러 테두리 활성화 · 에러 시 #F34766 적용
            </p>
          </div>

          <div className="p-8 bg-[#F9FAFB] rounded-[16px] space-y-6 flex flex-col items-center border border-[#E5E8EB]">
            <div className={`${currentWidthClass} max-w-full`}>
              <InputText
                fluid
                label="출발지 주소 (기본 상태)"
                placeholder="도로명 또는 지번 주소를 입력하세요"
                value={textVal}
                onChange={(val) => setTextVal(val)}
              />
            </div>

            <div className={`${currentWidthClass} max-w-full`}>
              <InputText
                fluid
                label="상세 주소 (에러 상태 예시)"
                placeholder="동/호수를 정확히 입력하세요"
                value={errorTextVal}
                onChange={(val) => setErrorTextVal(val)}
                error="정확한 상세 주소를 입력해주세요 (#F34766)"
              />
            </div>

            <div className={`${currentWidthClass} max-w-full`}>
              <InputText
                fluid
                label="비활성 인풋 (Disabled)"
                value={disabledTextVal}
                onChange={(val) => setDisabledTextVal(val)}
                disabled
              />
            </div>
          </div>
        </div>

        {/* 2. Input Search */}
        <div className="bg-white border border-[#E5E8EB] rounded-[22px] p-6 md:p-8 space-y-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
          <div className="border-b border-[#F2F4F6] pb-3">
            <h3 className="text-[18px] font-bold text-[#191F28]">검색 인풋 (input-search)</h3>
            <p className="text-[13px] text-[#6B7684] mt-0.5">
              좌측 돋보기 아이콘 (24x24) · 우측 원터치 텍스트 삭제(X) 아이콘 탑재
            </p>
          </div>

          <div className="p-8 bg-[#F9FAFB] rounded-[16px] flex flex-col items-center border border-[#E5E8EB]">
            <div className={`${currentWidthClass} max-w-full`}>
              <InputSearch
                fluid
                label="이사 지역 또는 아파트명 검색"
                placeholder="지역명(동/읍/면) 또는 아파트명을 검색하세요"
                value={searchVal}
                onChange={(val) => setSearchVal(val)}
              />
            </div>
          </div>
        </div>

        {/* 3. Number Input with Validation State */}
        <div className="bg-white border border-[#E5E8EB] rounded-[22px] p-6 md:p-8 space-y-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[#F2F4F6] pb-3">
            <div>
              <h3 className="text-[18px] font-bold text-[#191F28]">숫자/인증번호 인풋 (input-number)</h3>
              <p className="text-[13px] text-[#6B7684] mt-0.5">
                숫자 전용 키패드 호출 · 유효성 검증 아이콘 (체크/에러) 피드백 제공
              </p>
            </div>
            <div className="flex items-center gap-1.5 bg-[#F2F4F6] p-1 rounded-[10px] text-[12px] font-bold">
              <button
                type="button"
                onClick={() => setNumStatus('none')}
                className={`px-2 py-0.5 rounded-[6px] ${numStatus === 'none' ? 'bg-white text-[#191F28] shadow-2xs' : 'text-[#8B95A1]'}`}
              >
                일반
              </button>
              <button
                type="button"
                onClick={() => setNumStatus('success')}
                className={`px-2 py-0.5 rounded-[6px] ${numStatus === 'success' ? 'bg-white text-[#1B64DA] shadow-2xs' : 'text-[#8B95A1]'}`}
              >
                성공
              </button>
              <button
                type="button"
                onClick={() => setNumStatus('error')}
                className={`px-2 py-0.5 rounded-[6px] ${numStatus === 'error' ? 'bg-white text-[#D93442] shadow-2xs' : 'text-[#8B95A1]'}`}
              >
                에러
              </button>
            </div>
          </div>

          <div className="p-8 bg-[#F9FAFB] rounded-[16px] flex flex-col items-center border border-[#E5E8EB]">
            <div className={`${currentWidthClass} max-w-full`}>
              <InputNumber
                fluid
                label="휴대폰 인증번호 6자리"
                placeholder="인증번호를 입력하세요"
                value={numVal}
                onChange={(val) => setNumVal(val)}
                status={numStatus}
              />
            </div>
          </div>
        </div>

        {/* 4. Select Dropdown */}
        <div className="bg-white border border-[#E5E8EB] rounded-[22px] p-6 md:p-8 space-y-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
          <div className="border-b border-[#F2F4F6] pb-3">
            <h3 className="text-[18px] font-bold text-[#191F28]">선택 드롭다운 (select-text)</h3>
            <p className="text-[13px] text-[#6B7684] mt-0.5">
              높이 56px · 라운드 10px · 패딩 16px · 우측 드롭다운 화살표 아이콘 (셀렉터 넘버 미사용)
            </p>
          </div>
          <div className="p-8 bg-[#F9FAFB] rounded-[16px] flex flex-col items-center justify-center border border-[#E5E8EB]">
            <div className={`${currentWidthClass} max-w-full`}>
              <SelectText
                fluid
                label="출발지 층수 선택"
                placeholder="층수를 선택해 주세요"
                options={floorOptions}
                value={selectVal}
                onChange={(val) => setSelectVal(val)}
              />
            </div>
          </div>
        </div>

        {/* 5. Textarea Memo */}
        <div className="bg-white border border-[#E5E8EB] rounded-[22px] p-6 md:p-8 space-y-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
          <div className="border-b border-[#F2F4F6] pb-3">
            <h3 className="text-[18px] font-bold text-[#191F28]">멀티라인 요청사항 메모 (input-memo)</h3>
            <p className="text-[13px] text-[#6B7684] mt-0.5">
              높이 104px (모바일 기본) · 라운드 10px · 패딩 16px · 실시간 글자수 카운터 (최대 200자)
            </p>
          </div>

          <div className="p-8 bg-[#F9FAFB] rounded-[16px] flex flex-col items-center border border-[#E5E8EB]">
            <div className={`${currentWidthClass} max-w-full`}>
              <InputMemo
                fluid
                label="기사님께 전달할 특별 요청사항"
                placeholder="엘리베이터 유무, 사다리차 진입 가능 여부 등을 자유롭게 적어주세요"
                value={memoVal}
                onChange={(val) => setMemoVal(val)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
