import React, { useState } from 'react';
import { Button, Segmented3Split, ModalButtonGroup, ModalSingleButton } from '../ui/Button';
import { Check, Copy, Sliders, Code2, Layers } from 'lucide-react';

export const ButtonsShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'preview' | 'code' | 'spec'>('preview');
  const [selectedButtonType, setSelectedButtonType] = useState<'public' | 'floating' | 'modal-split' | 'modal-single' | 'segmented'>('public');

  // Interactive controls
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [modalSize, setModalSize] = useState<'48' | '56'>('48');
  const [segmentedIdx, setSegmentedIdx] = useState(0);
  const [bgStyle, setBgStyle] = useState<'white' | 'gray' | 'dark' | 'tint'>('white');
  const [copiedCode, setCopiedCode] = useState(false);

  const segmentedOptions: [string, string, string] = ['포장이사', '반포장이사', '일반이사'];

  const getCodeSnippet = () => {
    switch (selectedButtonType) {
      case 'floating':
        return `// 1. Floating CTA (모바일 하단 고정 CTA)
<Button
  variant="floating"
  disabled={${isDisabled}}
  isLoading={${isLoading}}
>
  무료 방문견적 신청하기 (56px)
</Button>`;
      case 'public':
        return `// 2. Public In-Content (본문 인컨텐츠 기본 버튼 - 312px)
<Button
  variant="public"
  disabled={${isDisabled}}
  isLoading={${isLoading}}
>
  견적서 제출하기 (312px)
</Button>`;
      case 'modal-split':
        return `// 3. Modal 2-Split Button (136px + 8px gap + 136px = 280px)
<ModalButtonGroup
  cancelText="취소"
  confirmText="확인"
  size="${modalSize}"
  isConfirmLoading={${isLoading}}
  onCancel={() => console.log('취소')}
  onConfirm={() => console.log('확인')}
/>`;
      case 'modal-single':
        return `// 4. Modal Single Button (280px 전폭 버튼)
<ModalSingleButton
  text="확인했습니다"
  size="${modalSize}"
  isLoading={${isLoading}}
  onClick={() => console.log('확인')}
/>`;
      case 'segmented':
        return `// 5. Segmented 3-Split (312px 3분할: 103px - 104px - 103px 룰 적용)
<Segmented3Split
  options={['포장이사', '반포장이사', '일반이사']}
  selectedIndex={${segmentedIdx}}
  onChange={(index) => setIndex(index)}
  disabled={${isDisabled}}
/>`;
    }
  };

  const copyCode = () => {
    navigator.clipboard.writeText(getCodeSnippet());
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 1500);
  };

  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2.5 py-0.5 rounded-full text-[12px] font-bold bg-main-04 text-main-01">
            Components / Buttons
          </span>
          <span className="text-[12px] text-text-04">Figma: csWoLlTCHOtuE7oAMswuL7 (Section 1)</span>
        </div>
        <h2 className="text-[24px] font-bold text-text-01 leading-[34px] tracking-da24">
          Buttons (버튼 시스템 4대 규격)
        </h2>
        <p className="mt-1 text-[16px] text-text-03 leading-[24px] tracking-da24">
          화면 위치와 목적에 따라 엄격하게 정의된 4가지 규격(Floating, Public, Modal, Segmented 3-Split)을 제공합니다.
        </p>
      </div>

      {/* Button Type Selector Tabs */}
      <div className="flex border-b border-etc-03 overflow-x-auto gap-2">
        {[
          { id: 'public', label: 'Public In-Content (312px)' },
          { id: 'floating', label: 'Floating CTA (360px 전폭)' },
          { id: 'modal-split', label: 'Modal 2-Split (280px)' },
          { id: 'modal-single', label: 'Modal Single (280px)' },
          { id: 'segmented', label: 'Segmented 3-Split (312px)' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedButtonType(tab.id as any)}
            className={`pb-3 px-3 text-[15px] font-bold tracking-da24 border-b-2 whitespace-nowrap transition-colors select-none ${
              selectedButtonType === tab.id
                ? 'border-main-01 text-main-01'
                : 'border-transparent text-text-03 hover:text-text-01'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Seed Design Style Playground Card */}
      <div className="bg-white border border-etc-02 rounded-[16px] overflow-hidden shadow-sm">
        {/* Playground Top Controls Toolbar */}
        <div className="p-4 border-b border-etc-03 bg-[#FCFDFE] flex flex-wrap items-center justify-between gap-4">
          {/* View Mode Tabs */}
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

          {/* Interactive State Controls */}
          <div className="flex items-center flex-wrap gap-4 text-[13px]">
            {/* Background switcher */}
            <div className="flex items-center gap-1 text-text-03">
              <span className="text-[12px]">Canvas:</span>
              <div className="flex gap-1">
                {(['white', 'gray', 'tint', 'dark'] as const).map((bg) => (
                  <button
                    key={bg}
                    onClick={() => setBgStyle(bg)}
                    className={`w-6 h-6 rounded-full border transition-all ${
                      bg === 'white'
                        ? 'bg-white border-etc-02'
                        : bg === 'gray'
                        ? 'bg-etc-04 border-etc-02'
                        : bg === 'tint'
                        ? 'bg-main-04 border-main-02'
                        : 'bg-text-01 border-text-02'
                    } ${bgStyle === bg ? 'ring-2 ring-main-01 ring-offset-1' : ''}`}
                    title={`배경: ${bg}`}
                  />
                ))}
              </div>
            </div>

            {/* Toggle Disabled */}
            <label className="flex items-center gap-1.5 text-text-02 font-medium cursor-pointer">
              <input
                type="checkbox"
                checked={isDisabled}
                onChange={(e) => setIsDisabled(e.target.checked)}
                className="accent-main-01"
              />
              <span>Disabled</span>
            </label>

            {/* Toggle Loading */}
            <label className="flex items-center gap-1.5 text-text-02 font-medium cursor-pointer">
              <input
                type="checkbox"
                checked={isLoading}
                onChange={(e) => setIsLoading(e.target.checked)}
                className="accent-main-01"
              />
              <span>Loading</span>
            </label>

            {/* Modal button height size */}
            {(selectedButtonType === 'modal-split' || selectedButtonType === 'modal-single') && (
              <div className="flex items-center gap-1 bg-etc-04 border border-etc-02 rounded px-1.5 py-0.5">
                <span className="text-text-04 text-[12px]">높이:</span>
                <button
                  onClick={() => setModalSize('48')}
                  className={`text-[12px] font-bold px-1.5 py-0.5 rounded ${
                    modalSize === '48' ? 'bg-main-01 text-white' : 'text-text-03'
                  }`}
                >
                  48px
                </button>
                <button
                  onClick={() => setModalSize('56')}
                  className={`text-[12px] font-bold px-1.5 py-0.5 rounded ${
                    modalSize === '56' ? 'bg-main-01 text-white' : 'text-text-03'
                  }`}
                >
                  56px
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Canvas Area */}
        {activeTab === 'preview' && (
          <div
            className={`min-h-[280px] p-8 flex flex-col items-center justify-center transition-colors duration-200 ${
              bgStyle === 'white'
                ? 'bg-white'
                : bgStyle === 'gray'
                ? 'bg-etc-04'
                : bgStyle === 'tint'
                ? 'bg-main-04'
                : 'bg-text-01 text-white'
            }`}
          >
            {/* Component Live Render */}
            <div className="flex flex-col items-center gap-4">
              {selectedButtonType === 'public' && (
                <Button
                  variant="public"
                  disabled={isDisabled}
                  isLoading={isLoading}
                  onClick={() => alert('다이사 인컨텐츠 312px 버튼 클릭!')}
                >
                  무료 방문견적 신청하기
                </Button>
              )}

              {selectedButtonType === 'floating' && (
                <div className="w-[360px] border border-dashed border-etc-02 p-2 rounded bg-white/40 flex flex-col items-center">
                  <span className="text-[12px] text-text-04 mb-2">모바일 360px 뷰포트 하단 고정 시뮬레이션</span>
                  <Button
                    variant="floating"
                    disabled={isDisabled}
                    isLoading={isLoading}
                    onClick={() => alert('플로팅 CTA 버튼 클릭!')}
                  >
                    하단 고정 CTA 신청하기 (56px)
                  </Button>
                </div>
              )}

              {selectedButtonType === 'modal-split' && (
                <div className="w-[312px] bg-white border border-etc-02 p-4 rounded-[16px] shadow-sm flex flex-col items-center gap-4">
                  <div className="text-center">
                    <h4 className="text-[18px] font-bold text-text-01">견적 요청 취소</h4>
                    <p className="text-[14px] text-text-03 mt-1">작성 중인 내용이 모두 삭제됩니다.</p>
                  </div>
                  <ModalButtonGroup
                    cancelText="취소"
                    confirmText="확인"
                    size={modalSize}
                    isConfirmLoading={isLoading}
                    onCancel={() => alert('취소 버튼 클릭')}
                    onConfirm={() => alert('확인 버튼 클릭')}
                  />
                </div>
              )}

              {selectedButtonType === 'modal-single' && (
                <div className="w-[312px] bg-white border border-etc-02 p-4 rounded-[16px] shadow-sm flex flex-col items-center gap-4">
                  <div className="text-center">
                    <h4 className="text-[18px] font-bold text-text-01">접수 완료 안내</h4>
                    <p className="text-[14px] text-text-03 mt-1">상담원이 확인 후 연락드립니다.</p>
                  </div>
                  <ModalSingleButton
                    text="확인했습니다"
                    size={modalSize}
                    isLoading={isLoading}
                    onClick={() => alert('단일 확인 버튼 클릭')}
                  />
                </div>
              )}

              {selectedButtonType === 'segmented' && (
                <div className="flex flex-col items-center gap-3">
                  <Segmented3Split
                    options={segmentedOptions}
                    selectedIndex={segmentedIdx}
                    onChange={(idx) => setSegmentedIdx(idx)}
                    disabled={isDisabled}
                  />
                  <span className="text-[13px] text-text-03">
                    선택된 이사 종류: <strong className="text-main-01">{segmentedOptions[segmentedIdx]}</strong> (중앙 104px / 양측 103px)
                  </span>
                </div>
              )}
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
            <pre>{getCodeSnippet()}</pre>
          </div>
        )}

        {/* Spec View */}
        {activeTab === 'spec' && (
          <div className="p-6 overflow-x-auto">
            <table className="w-full text-left border-collapse text-[14px]">
              <thead>
                <tr className="border-b border-etc-03 text-text-04 text-[12px]">
                  <th className="py-2.5 font-semibold">버튼 종류</th>
                  <th className="py-2.5 font-semibold">너비 (Width)</th>
                  <th className="py-2.5 font-semibold">높이 (Height)</th>
                  <th className="py-2.5 font-semibold">라운드 (Radius)</th>
                  <th className="py-2.5 font-semibold">타이포그래피</th>
                  <th className="py-2.5 font-semibold">컬러 토큰</th>
                  <th className="py-2.5 font-semibold">상세 규칙</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-etc-03 text-text-02">
                <tr>
                  <td className="py-3 font-bold text-main-01">Floating CTA</td>
                  <td className="py-3 font-mono">100% (최대 360px)</td>
                  <td className="py-3 font-mono">56px</td>
                  <td className="py-3 font-mono text-error font-bold">0px (각진 모서리)</td>
                  <td className="py-3">18px Bold White</td>
                  <td className="py-3 font-mono text-main-01">main-01 (#1219F7)</td>
                  <td className="py-3 text-[13px]">모바일 뷰포트 최하단에 항상 밀착 고정되는 메인 신청 버튼</td>
                </tr>
                <tr>
                  <td className="py-3 font-bold text-main-01">Public In-Content</td>
                  <td className="py-3 font-mono">312px</td>
                  <td className="py-3 font-mono">56px</td>
                  <td className="py-3 font-mono">10px</td>
                  <td className="py-3">16px Bold White</td>
                  <td className="py-3 font-mono text-main-01">main-01 (#1219F7)</td>
                  <td className="py-3 text-[13px]">본문 콘텐츠 컨테이너 안에서 사용되는 기본 표준 CTA 버튼</td>
                </tr>
                <tr>
                  <td className="py-3 font-bold text-main-01">Modal 2-Split</td>
                  <td className="py-3 font-mono">280px (136+8+136)</td>
                  <td className="py-3 font-mono">48px / 56px</td>
                  <td className="py-3 font-mono">10px</td>
                  <td className="py-3">16px Bold</td>
                  <td className="py-3 font-mono text-text-02">취소 #EBEEF2 / 확인 #1219F7</td>
                  <td className="py-3 text-[13px]">모달 너비 312px 내 패딩 16px 적용 시 280px 그리드에 2분할 배치</td>
                </tr>
                <tr>
                  <td className="py-3 font-bold text-main-01">Modal Single</td>
                  <td className="py-3 font-mono">280px (전폭)</td>
                  <td className="py-3 font-mono">48px / 56px</td>
                  <td className="py-3 font-mono">10px</td>
                  <td className="py-3">16px Bold White</td>
                  <td className="py-3 font-mono text-main-01">main-01 (#1219F7)</td>
                  <td className="py-3 text-[13px]">얼럿/단일 확인 팝업에서 280px 전폭으로 사용되는 모달 버튼</td>
                </tr>
                <tr>
                  <td className="py-3 font-bold text-main-01">Segmented 3-Split</td>
                  <td className="py-3 font-mono">312px (103-104-103)</td>
                  <td className="py-3 font-mono">56px</td>
                  <td className="py-3 font-mono">10px (외곽) / 8px (내부)</td>
                  <td className="py-3">16px Bold</td>
                  <td className="py-3 font-mono text-main-01">선택: #1219F7 White / BG: #F7F8FA</td>
                  <td className="py-3 text-[13px]">3분할 시 중앙 버튼에 1px을 추가하여 312px 완벽 정렬 (103+104+103=310 + 패딩)</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};
