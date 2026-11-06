import React, { useState } from 'react';
import { InputText, InputNumber, SelectBox } from '../ui/Input';
import { Code2, Layers, Sliders, Check, Copy } from 'lucide-react';

export const InputsShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'preview' | 'code' | 'spec'>('preview');

  // Interactive state
  const [textVal, setTextVal] = useState('서울시 강남구 논현동');
  const [numVal, setNumVal] = useState('32');
  const [selectVal, setSelectVal] = useState('5');
  const [isDisabled, setIsDisabled] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [hasHelper, setHasHelper] = useState(true);
  const [copiedCode, setCopiedCode] = useState(false);

  const floorOptions = [
    { label: '1층', value: '1' },
    { label: '2층', value: '2' },
    { label: '3층', value: '3' },
    { label: '4층', value: '4' },
    { label: '5층', value: '5' },
    { label: '6층 이상 (고층)', value: '6+' },
  ];

  const codeSnippet = `// 1. Text Input (312px, 56px, Radius 10px, Padding 16px)
<InputText
  label="출발지 주소"
  placeholder="동/읍/면을 입력하세요"
  value="${textVal}"
  onChange={(e) => setText(e.target.value)}
  disabled={${isDisabled}}
  error={${hasError ? '"올바른 주소 형식을 입력해 주세요"' : 'undefined'}}
  helperText={${hasHelper && !hasError ? '"상세 주소는 업체 방문 시 전달됩니다."' : 'undefined'}}
/>

// 2. Number Input (평수 / 층수 / 수량)
<InputNumber
  label="주택 평수"
  placeholder="0"
  unit="평"
  value="${numVal}"
  onChange={(e) => setNum(e.target.value)}
  disabled={${isDisabled}}
/>

// 3. Select Box
<SelectBox
  label="층수 선택"
  options={floorOptions}
  value="${selectVal}"
  onChange={(val) => setFloor(val)}
  disabled={${isDisabled}}
/>`;

  const copyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 1500);
  };

  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2.5 py-0.5 rounded-full text-[12px] font-bold bg-main-04 text-main-01">
            Components / Form Inputs
          </span>
          <span className="text-[12px] text-text-04">Figma: csWoLlTCHOtuE7oAMswuL7 (Section 1)</span>
        </div>
        <h2 className="text-[24px] font-bold text-text-01 leading-[34px] tracking-da24">
          Form Inputs (입력 폼 표준 규격)
        </h2>
        <p className="mt-1 text-[16px] text-text-03 leading-[24px] tracking-da24">
          다이사의 모든 입력 필드는 <strong>너비 312px, 높이 56px, Corner Radius 10px, 내부 패딩 16px</strong>의 정형화된 통일성을 갖습니다.
        </p>
      </div>

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

          <div className="flex items-center gap-4 text-[13px]">
            <label className="flex items-center gap-1.5 text-text-02 font-medium cursor-pointer">
              <input
                type="checkbox"
                checked={isDisabled}
                onChange={(e) => setIsDisabled(e.target.checked)}
                className="accent-main-01"
              />
              <span>Disabled 상태</span>
            </label>
            <label className="flex items-center gap-1.5 text-text-02 font-medium cursor-pointer">
              <input
                type="checkbox"
                checked={hasError}
                onChange={(e) => setHasError(e.target.checked)}
                className="accent-main-01"
              />
              <span>Error 상태</span>
            </label>
            <label className="flex items-center gap-1.5 text-text-02 font-medium cursor-pointer">
              <input
                type="checkbox"
                checked={hasHelper}
                onChange={(e) => setHasHelper(e.target.checked)}
                className="accent-main-01"
              />
              <span>도움말 문구</span>
            </label>
          </div>
        </div>

        {/* Preview Area */}
        {activeTab === 'preview' && (
          <div className="p-8 bg-[#F8F9FB] flex flex-col items-center justify-center">
            <div className="w-[360px] bg-white border border-etc-02 rounded-[16px] p-6 shadow-sm flex flex-col items-center gap-6">
              <div className="w-full text-left border-b border-etc-03 pb-3">
                <span className="text-[12px] font-bold text-main-01">LIVE INTERACTIVE FORM</span>
                <h4 className="text-[18px] font-bold text-text-01">이사 정보 입력 양식</h4>
              </div>

              {/* Text Input */}
              <InputText
                label="출발지 주소"
                placeholder="동/읍/면 또는 도로명 입력"
                value={textVal}
                onChange={(e) => setTextVal(e.target.value)}
                disabled={isDisabled}
                error={hasError ? '정확한 주소를 입력해 주세요' : undefined}
                helperText={hasHelper && !hasError ? '상세 동/호수는 방문 시 전달됩니다.' : undefined}
              />

              {/* Number Input */}
              <InputNumber
                label="주거 평수"
                placeholder="평수 입력"
                unit="평"
                value={numVal}
                onChange={(e) => setNumVal(e.target.value)}
                disabled={isDisabled}
                error={hasError ? '1평 이상의 숫자를 입력해 주세요' : undefined}
                helperText={hasHelper && !hasError ? '원룸(10평 미만), 아파트(24~34평 등)' : undefined}
              />

              {/* Select Box */}
              <SelectBox
                label="출발지 층수"
                options={floorOptions}
                value={selectVal}
                onChange={(val) => setSelectVal(val)}
                disabled={isDisabled}
                error={hasError ? '층수를 선택해 주세요' : undefined}
                helperText={hasHelper && !hasError ? '엘리베이터 유무는 다음 단계에서 선택합니다.' : undefined}
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
                <tr className="border-b border-etc-03 text-text-04 text-[12px]">
                  <th className="py-2.5 font-semibold">속성 (Property)</th>
                  <th className="py-2.5 font-semibold">설정값 (Figma Auto Layout)</th>
                  <th className="py-2.5 font-semibold">토큰 및 CSS 대응</th>
                  <th className="py-2.5 font-semibold">설명</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-etc-03 text-text-02">
                <tr>
                  <td className="py-3 font-bold text-main-01">너비 (Width)</td>
                  <td className="py-3 font-mono font-bold">312px</td>
                  <td className="py-3 font-mono">w-[312px]</td>
                  <td className="py-3 text-[13px]">모바일 360px 기준 양측 24px 여백을 제외한 표준 콘텐츠 너비</td>
                </tr>
                <tr>
                  <td className="py-3 font-bold text-main-01">높이 (Height)</td>
                  <td className="py-3 font-mono font-bold">56px</td>
                  <td className="py-3 font-mono">h-[56px]</td>
                  <td className="py-3 text-[13px]">터치 인터랙션 최적화 모바일 폼 표준 높이</td>
                </tr>
                <tr>
                  <td className="py-3 font-bold text-main-01">패딩 (Padding)</td>
                  <td className="py-3 font-mono">좌우 16px (pt:0 pr:16 pb:0 pl:16)</td>
                  <td className="py-3 font-mono">px-[16px]</td>
                  <td className="py-3 text-[13px]">텍스트 및 접미사 아이콘 여백</td>
                </tr>
                <tr>
                  <td className="py-3 font-bold text-main-01">라운드 (Corner Radius)</td>
                  <td className="py-3 font-mono">10px</td>
                  <td className="py-3 font-mono">rounded-[10px]</td>
                  <td className="py-3 text-[13px]">다이사 인풋 컴포넌트 표준 라운드</td>
                </tr>
                <tr>
                  <td className="py-3 font-bold text-main-01">보더 (Normal / Focus)</td>
                  <td className="py-3 font-mono">Normal: #D7DBE2 / Focus: #1219F7</td>
                  <td className="py-3 font-mono">border-etc-02 / focus:border-main-01</td>
                  <td className="py-3 text-[13px]">기본 회색 테두리 및 포커스 시 1px Primary Blue 활성화</td>
                </tr>
                <tr>
                  <td className="py-3 font-bold text-main-01">비활성 (Disabled)</td>
                  <td className="py-3 font-mono">배경: #F7F8FA / 텍스트: #888888</td>
                  <td className="py-3 font-mono">bg-etc-04 / text-text-04</td>
                  <td className="py-3 text-[13px]">입력 불가 상태의 소프트 배경</td>
                </tr>
                <tr>
                  <td className="py-3 font-bold text-main-01">에러 (Error)</td>
                  <td className="py-3 font-mono">보더: #F34765 / 에러문구: 12px</td>
                  <td className="py-3 font-mono">border-error / text-error</td>
                  <td className="py-3 text-[13px]">유효성 검증 실패 시 시각적 피드백</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};
