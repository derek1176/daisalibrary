import React, { useState } from 'react';
import { InputText, InputMemo, InputSearch, InputNumber, SelectBox, SelectSmall } from '../ui/Input';
import { ComponentHeader } from '../ui/ComponentHeader';
import { DoAndDont } from '../ui/DoAndDont';
import { Code2, Layers, Sliders, Check, Copy, Smartphone, Monitor } from 'lucide-react';

export const InputsShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'preview' | 'code' | 'spec'>('preview');
  const [deviceView, setDeviceView] = useState<'mobile' | 'pc'>('mobile');

  // Interactive state
  const [textVal, setTextVal] = useState('서울시 강남구 테헤란로 123');
  const [memoVal, setMemoVal] = useState('사다리차 진입 가능한 주차공간이 있으며, 짐 포장 전 가전 분해 요청드립니다.');
  const [searchVal, setSearchVal] = useState('서현동');
  const [numVal, setNumVal] = useState('34');
  const [selectVal, setSelectVal] = useState('5');
  const [smallSelectVal, setSmallSelectVal] = useState('1');

  const [isDisabled, setIsDisabled] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [hasSuccess, setHasSuccess] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  const floorOptions = [
    { label: '1층 (단독주택/저층)', value: '1' },
    { label: '2층', value: '2' },
    { label: '3층', value: '3' },
    { label: '4층', value: '4' },
    { label: '5층 (사다리차 권장)', value: '5' },
    { label: '6층 이상 (고층 아파트)', value: '6+' },
  ];

  const countOptions = [
    { label: '1대', value: '1' },
    { label: '2대', value: '2' },
    { label: '3대', value: '3' },
    { label: '4대+', value: '4+' },
  ];

  const codeSnippet = `// 1. Text Input (312px / 720px, 56px, Radius 10px)
<InputText
  label="출발지 주소"
  placeholder="동/읍/면 또는 도로명 입력"
  value="${textVal}"
  onChange={(e) => setText(e.target.value)}
  disabled={${isDisabled}}
  error={${hasError ? '"올바른 도로명 주소를 입력해 주세요"' : 'undefined'}}
  success={${hasSuccess ? '"확인된 주소입니다"' : 'undefined'}}
/>

// 2. Memo Textarea (312px / 720px, 104px, Radius 10px)
<InputMemo
  label="상세 요청사항"
  height="104"
  value="${memoVal}"
  onChange={(e) => setMemo(e.target.value)}
  disabled={${isDisabled}}
/>

// 3. Search Input (돋보기 + 원클릭 삭제 X 아이콘)
<InputSearch
  label="지역 검색"
  value="${searchVal}"
  onChange={(val) => setSearch(val)}
  placeholder="시/군/구 동 검색"
  disabled={${isDisabled}}
/>

// 4. Number Input (우측 단위 고정 접미사)
<InputNumber
  label="주거 평수"
  unit="평"
  value="${numVal}"
  onChange={(e) => setNum(e.target.value)}
  disabled={${isDisabled}}
/>

// 5. Small Select (104x40px, Radius 8px)
<SelectSmall
  options={countOptions}
  value="${smallSelectVal}"
  onChange={(val) => setCount(val)}
  disabled={${isDisabled}}
/>`;

  const copyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 1500);
  };

  return (
    <div className="space-y-10">
      <ComponentHeader
        category="Components / Form Inputs"
        title="Form Inputs (입력 폼 표준 규격)"
        description="다이사 서비스의 모든 폼 입력 필드는 너비 312px, 높이 56px, Corner Radius 10px, 내부 패딩 16px의 엄격한 일관성을 갖습니다. 단문 입력부터 멀티라인 메모(104px), 실시간 검색, 단위 포함 숫자 인풋, 소형 드롭다운(40px, r:8)까지 완벽히 지원합니다."
        figmaNode={{
          fileKey: 'csWoLlTCHOtuE7oAMswuL7',
          nodeId: '9899:6841',
          label: '9899:6841 (Form Frame)',
        }}
      />

      {/* Playground Card */}
      <div className="bg-white border border-etc-02 rounded-[16px] overflow-hidden shadow-sm">
        {/* Controls Toolbar */}
        <div className="p-4 border-b border-etc-03 bg-[#FCFDFE] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center bg-etc-04 p-1 rounded-[8px] border border-etc-02">
            <button
              onClick={() => setActiveTab('preview')}
              className={`px-3 py-1.5 rounded-[6px] text-[13px] font-bold flex items-center gap-1.5 transition-colors ${
                activeTab === 'preview' ? 'bg-white text-text-01 shadow-xs' : 'text-text-03 hover:text-text-01'
              }`}
            >
              <Layers className="w-3.5 h-3.5" /> Preview
            </button>
            <button
              onClick={() => setActiveTab('code')}
              className={`px-3 py-1.5 rounded-[6px] text-[13px] font-bold flex items-center gap-1.5 transition-colors ${
                activeTab === 'code' ? 'bg-white text-text-01 shadow-xs' : 'text-text-03 hover:text-text-01'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" /> Code
            </button>
            <button
              onClick={() => setActiveTab('spec')}
              className={`px-3 py-1.5 rounded-[6px] text-[13px] font-bold flex items-center gap-1.5 transition-colors ${
                activeTab === 'spec' ? 'bg-white text-text-01 shadow-xs' : 'text-text-03 hover:text-text-01'
              }`}
            >
              <Sliders className="w-3.5 h-3.5" /> Spec
            </button>
          </div>

          <div className="flex items-center flex-wrap gap-4 text-[13px]">
            {/* Device Switcher */}
            <div className="flex items-center bg-etc-04 p-0.5 rounded-[6px] border border-etc-02">
              <button
                onClick={() => setDeviceView('mobile')}
                className={`px-2.5 py-1 rounded-[5px] text-[12px] font-bold flex items-center gap-1 ${
                  deviceView === 'mobile' ? 'bg-white text-main-01 shadow-xs' : 'text-text-03'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" /> Mobile (312px)
              </button>
              <button
                onClick={() => setDeviceView('pc')}
                className={`px-2.5 py-1 rounded-[5px] text-[12px] font-bold flex items-center gap-1 ${
                  deviceView === 'pc' ? 'bg-white text-main-01 shadow-xs' : 'text-text-03'
                }`}
              >
                <Monitor className="w-3.5 h-3.5" /> PC (720px)
              </button>
            </div>

            <label className="flex items-center gap-1.5 text-text-02 font-medium cursor-pointer">
              <input
                type="checkbox"
                checked={isDisabled}
                onChange={(e) => setIsDisabled(e.target.checked)}
                className="accent-main-01"
              />
              <span>Disabled</span>
            </label>
            <label className="flex items-center gap-1.5 text-text-02 font-medium cursor-pointer">
              <input
                type="checkbox"
                checked={hasError}
                onChange={(e) => {
                  setHasError(e.target.checked);
                  if (e.target.checked) setHasSuccess(false);
                }}
                className="accent-main-01"
              />
              <span>Error</span>
            </label>
            <label className="flex items-center gap-1.5 text-text-02 font-medium cursor-pointer">
              <input
                type="checkbox"
                checked={hasSuccess}
                onChange={(e) => {
                  setHasSuccess(e.target.checked);
                  if (e.target.checked) setHasError(false);
                }}
                className="accent-main-01"
              />
              <span>Success</span>
            </label>
          </div>
        </div>

        {/* Preview Area */}
        {activeTab === 'preview' && (
          <div className="p-8 bg-[#F8F9FB] flex flex-col items-center justify-center">
            <div
              className={`bg-white border border-etc-02 rounded-[16px] p-6 shadow-sm flex flex-col items-center gap-6 transition-all duration-200 ${
                deviceView === 'mobile' ? 'w-[360px]' : 'w-full max-w-[760px]'
              }`}
            >
              <div className="w-full text-left border-b border-etc-03 pb-3 flex items-center justify-between">
                <div>
                  <span className="text-[12px] font-bold text-main-01">DA24 PRODUCTION FORM</span>
                  <h4 className="text-[18px] font-bold text-text-01">이사/청소 신청 양식</h4>
                </div>
                <span className="text-[12px] font-mono text-text-04">
                  {deviceView === 'mobile' ? 'Mobile w:312px' : 'PC w:720px'}
                </span>
              </div>

              {/* 1. Text Input */}
              <InputText
                label="출발지 주소"
                placeholder="동/읍/면 또는 도로명 입력"
                value={textVal}
                fullWidth={deviceView === 'pc'}
                onChange={(e) => setTextVal(e.target.value)}
                disabled={isDisabled}
                error={hasError ? '정확한 주소를 입력해 주세요' : undefined}
                success={hasSuccess ? '확인된 주소입니다' : undefined}
                helperText={!hasError && !hasSuccess ? '상세 동/호수는 방문 시 전달됩니다.' : undefined}
              />

              {/* 2. Search Input */}
              <InputSearch
                label="이사 지역 검색 (input-search)"
                value={searchVal}
                fullWidth={deviceView === 'pc'}
                onChange={(val) => setSearchVal(val)}
                placeholder="시/군/구 동 입력 (예: 분당구 서현동)"
                disabled={isDisabled}
              />

              {/* 3. Number Input */}
              <InputNumber
                label="주거 평수 (input-number)"
                placeholder="평수 입력"
                unit="평"
                value={numVal}
                fullWidth={deviceView === 'pc'}
                onChange={(e) => setNumVal(e.target.value)}
                disabled={isDisabled}
                error={hasError ? '1평 이상의 숫자를 입력해 주세요' : undefined}
              />

              {/* 4. Select Box & Small Select */}
              <div className="w-full flex flex-col md:flex-row items-start md:items-end gap-3 justify-center">
                <SelectBox
                  label="출발지 층수 (select-text)"
                  options={floorOptions}
                  value={selectVal}
                  fullWidth={deviceView === 'pc'}
                  onChange={(val) => setSelectVal(val)}
                  disabled={isDisabled}
                />
                <div className="flex flex-col gap-1.5 shrink-0">
                  <span className="text-[14px] font-bold text-text-02">에어컨 수량 (small)</span>
                  <SelectSmall
                    options={countOptions}
                    value={smallSelectVal}
                    onChange={(val) => setSmallSelectVal(val)}
                    disabled={isDisabled}
                  />
                </div>
              </div>

              {/* 5. Memo Textarea */}
              <InputMemo
                label="상세 요청사항 (input-text memo: 104px)"
                value={memoVal}
                fullWidth={deviceView === 'pc'}
                onChange={(e) => setMemoVal(e.target.value)}
                disabled={isDisabled}
                placeholder="기사님께 전달할 특이사항을 적어주세요."
                helperText="엘리베이터 사용 가능 여부, 사다리차 진입 공간 등"
              />
            </div>
          </div>
        )}

        {/* Code View */}
        {activeTab === 'code' && (
          <div className="relative bg-[#1A1C23] text-gray-100 p-6 font-mono text-[13px] overflow-x-auto leading-relaxed">
            <button
              onClick={copyCode}
              className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/10 hover:bg-white/20 text-white text-[12px] transition-colors"
            >
              {copiedCode ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
              {copiedCode ? '복사됨!' : '코드 복사'}
            </button>
            <pre>{codeSnippet}</pre>
          </div>
        )}

        {/* Spec View */}
        {activeTab === 'spec' && (
          <div className="p-6 overflow-x-auto">
            <table className="w-full text-left border-collapse text-[14px]">
              <thead>
                <tr className="border-b border-etc-03 text-text-04 text-[12px] bg-etc-04/50">
                  <th className="py-2.5 px-3 font-semibold">인풋 종류</th>
                  <th className="py-2.5 px-3 font-semibold">모바일 규격</th>
                  <th className="py-2.5 px-3 font-semibold">PC 규격</th>
                  <th className="py-2.5 px-3 font-semibold">라운드</th>
                  <th className="py-2.5 px-3 font-semibold">상태 (States)</th>
                  <th className="py-2.5 px-3 font-semibold">특징</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-etc-03 text-text-02">
                <tr>
                  <td className="py-3 px-3 font-bold text-main-01">input-text</td>
                  <td className="py-3 px-3 font-mono">312 x 56px</td>
                  <td className="py-3 px-3 font-mono">720 x 56px</td>
                  <td className="py-3 px-3 font-mono">10px</td>
                  <td className="py-3 px-3 text-[13px]">normal, focus, done, disable</td>
                  <td className="py-3 px-3 text-[13px] text-text-03">단문 텍스트 기본 인풋 (패딩 16px)</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 font-bold text-main-01">input-text (Memo)</td>
                  <td className="py-3 px-3 font-mono">312 x 104px</td>
                  <td className="py-3 px-3 font-mono">720 x 104px</td>
                  <td className="py-3 px-3 font-mono">10px</td>
                  <td className="py-3 px-3 text-[13px]">memo-normal, memo-focus</td>
                  <td className="py-3 px-3 text-[13px] text-text-03">멀티라인 요청사항/메모 입력창</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 font-bold text-main-01">input-search</td>
                  <td className="py-3 px-3 font-mono">312 x 56px</td>
                  <td className="py-3 px-3 font-mono">720 x 56px</td>
                  <td className="py-3 px-3 font-mono">10px</td>
                  <td className="py-3 px-3 text-[13px]">normal, focus, focus-close</td>
                  <td className="py-3 px-3 text-[13px] text-text-03">좌측 돋보기 + 우측 입력 지우기(X)</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 font-bold text-main-01">input-number</td>
                  <td className="py-3 px-3 font-mono">312 x 56px</td>
                  <td className="py-3 px-3 font-mono">720 x 56px</td>
                  <td className="py-3 px-3 font-mono">10px</td>
                  <td className="py-3 px-3 text-[13px]">normal, focus, success, error</td>
                  <td className="py-3 px-3 text-[13px] text-text-03">우측 고정 단위(평, 대, 층)</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 font-bold text-main-01">select-number (small)</td>
                  <td className="py-3 px-3 font-mono">104 x 40px</td>
                  <td className="py-3 px-3 font-mono">104 x 40px</td>
                  <td className="py-3 px-3 font-mono font-bold text-main-01">8px</td>
                  <td className="py-3 px-3 text-[13px]">size=small</td>
                  <td className="py-3 px-3 text-[13px] text-text-03">수량/개수 전용 콤팩트 드롭다운</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Do & Don't Guidelines */}
      <div>
        <h3 className="text-[18px] font-bold text-text-01 tracking-da24 mb-2">
          폼 인풋 사용 시 올바른 가이드라인 (Do & Don't)
        </h3>
        <DoAndDont
          items={[
            {
              type: 'do',
              title: '포커스 시에는 항상 main-01 (#1219F7) 1px 보더 활성화하기',
              description:
                '사용자가 현재 어떤 필드를 입력 중인지 명확히 인지할 수 있도록, 포커스 시에는 기본 테두리(#D7DBE2)에서 #1219F7로 전환되어야 합니다.',
              visual: (
                <div className="w-[280px]">
                  <input
                    type="text"
                    readOnly
                    value="현재 입력 중인 텍스트 필드"
                    className="w-full h-[56px] px-4 rounded-[10px] bg-white border border-main-01 ring-1 ring-main-01 text-[15px] font-medium text-text-01 outline-none"
                  />
                </div>
              ),
            },
            {
              type: 'dont',
              title: '단위가 있는 숫자 입력에 일반 텍스트 인풋 혼용 금지',
              description:
                '평수, 수량, 층수 등 단위가 정해진 값은 반드시 `InputNumber`와 고정 단위 접미사(Suffix)를 사용하여 사용자의 오타를 사전에 방지하세요.',
              visual: (
                <div className="w-[280px]">
                  <input
                    type="text"
                    readOnly
                    value="34평형 정도 됩니다 (오류)"
                    className="w-full h-[56px] px-4 rounded-[10px] bg-rose-50 border border-rose-300 text-rose-700 text-[14px] line-through outline-none"
                  />
                </div>
              ),
            },
          ]}
        />
      </div>
    </div>
  );
};
