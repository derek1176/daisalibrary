import React, { useState } from 'react';
import { Button, Segmented3Split, ModalButtonGroup, ModalSingleButton } from '../ui/Button';
import { ComponentHeader } from '../ui/ComponentHeader';
import { DoAndDont } from '../ui/DoAndDont';
import {
  Code2,
  Sliders,
  Layers,
  Copy,
  Check,
  Smartphone,
  Monitor,
  Info
} from 'lucide-react';

export const ButtonsShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'preview' | 'code' | 'spec'>('preview');
  const [selectedButtonType, setSelectedButtonType] = useState<
    'public' | 'floating' | 'modal-split' | 'modal-single' | 'segmented' | 'chip'
  >('public');

  // Interactive controls
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [modalSize, setModalSize] = useState<'48' | '56'>('48');
  const [segmentedIdx, setSegmentedIdx] = useState(0);
  const [deviceView, setDeviceView] = useState<'mobile' | 'pc'>('mobile');
  const [bgStyle, setBgStyle] = useState<'white' | 'gray' | 'dark' | 'tint'>('white');
  const [copiedCode, setCopiedCode] = useState(false);

  const segmentedOptions: [string, string, string] = ['포장이사', '반포장이사', '일반이사'];

  const getCodeSnippet = () => {
    switch (selectedButtonType) {
      case 'floating':
        return `// 1. Floating CTA (화면 하단 전폭 고정 버튼 - r:0px)
<Button
  variant="floating"
  disabled={${isDisabled}}
  isLoading={${isLoading}}
  onClick={() => handleSubmit()}
>
  무료 방문견적 신청하기 (${deviceView === 'mobile' ? '360px' : '720px'})
</Button>`;
      case 'public':
        return `// 2. Public In-Content Button (본문 인컨텐츠 기본 버튼 - r:10px)
<Button
  variant="public"
  fullWidth={${deviceView === 'pc'}}
  disabled={${isDisabled}}
  isLoading={${isLoading}}
  onClick={() => handleSubmit()}
>
  견적서 제출하기 (${deviceView === 'mobile' ? '312px' : '672px'})
</Button>`;
      case 'modal-split':
        return `// 3. Modal 2-Split Button (136px + 8px gap + 136px = 280px, r:10px)
<ModalButtonGroup
  cancelText="취소"
  confirmText="확인"
  size="${modalSize}"
  isConfirmLoading={${isLoading}}
  onCancel={() => handleCancel()}
  onConfirm={() => handleConfirm()}
/>`;
      case 'modal-single':
        return `// 4. Modal Single Button (280px 전폭 버튼, r:10px)
<ModalSingleButton
  text="확인했습니다"
  size="${modalSize}"
  isLoading={${isLoading}}
  onClick={() => handleConfirm()}
/>`;
      case 'segmented':
        return `// 5. Segmented 3-Split Button (312px 3분할: 103px - 104px - 103px 룰 적용)
<Segmented3Split
  options={['포장이사', '반포장이사', '일반이사']}
  selectedIndex={${segmentedIdx}}
  onChange={(index) => setIndex(index)}
  disabled={${isDisabled}}
/>`;
      case 'chip':
        return `// 6. Pill Filter Chip (높이 45px, r:28px)
<button className="h-[45px] px-[16px] rounded-full bg-main-01 text-white text-[14px] font-bold">
  원룸이사 (소형)
</button>`;
    }
  };

  const copyCode = () => {
    navigator.clipboard.writeText(getCodeSnippet());
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 1500);
  };

  return (
    <div className="space-y-10">
      <ComponentHeader
        category="Components / Actions"
        title="Buttons (버튼 시스템 4대 규격)"
        description="다이사 서비스 내에서 사용자의 터치/클릭 액션을 유도하는 핵심 요소입니다. 화면 배치 위치와 중요도에 따라 4가지 규격(Floating CTA, Public In-Content, Modal, Segmented 3-Split)을 명확히 구분하여 사용합니다."
        figmaNode={{
          fileKey: 'csWoLlTCHOtuE7oAMswuL7',
          nodeId: '9899:6992',
          label: '9899:6992 (Button Frame)',
        }}
      />

      {/* Anatomy Guide Card */}
      <div className="bg-white border border-etc-02 rounded-[16px] p-6 space-y-4 shadow-sm">
        <div className="flex items-center gap-2">
          <Info className="w-4 h-4 text-main-01" />
          <h3 className="text-[16px] font-bold text-text-01">버튼 컴포넌트 해부도 (Anatomy)</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-[13px] text-text-02 pt-1">
          <div className="p-3 bg-etc-04 rounded-[10px] space-y-1 border border-etc-02">
            <span className="font-bold text-main-01">1. 표준 높이: 56px</span>
            <p className="text-text-03 text-[12px]">모바일 터치 타겟 최적화 전사 규격</p>
          </div>
          <div className="p-3 bg-etc-04 rounded-[10px] space-y-1 border border-etc-02">
            <span className="font-bold text-main-01">2. 모바일 너비: 312px</span>
            <p className="text-text-03 text-[12px]">360px 화면에서 양측 24px 여백 기준</p>
          </div>
          <div className="p-3 bg-etc-04 rounded-[10px] space-y-1 border border-etc-02">
            <span className="font-bold text-main-01">3. 표준 라운드: 10px</span>
            <p className="text-text-03 text-[12px]">Floating만 0px, 인컨텐츠는 10px</p>
          </div>
          <div className="p-3 bg-etc-04 rounded-[10px] space-y-1 border border-etc-02">
            <span className="font-bold text-main-01">4. 타이포: 16px/18px Bold</span>
            <p className="text-text-03 text-[12px]">Pretendard 자간 -1px 고정 적용</p>
          </div>
        </div>
      </div>

      {/* Button Type Selector Tabs */}
      <div className="flex border-b border-etc-03 overflow-x-auto gap-2">
        {[
          { id: 'public', label: '1. Public In-Content (312px)' },
          { id: 'floating', label: '2. Floating CTA (360px 전폭)' },
          { id: 'modal-split', label: '3. Modal 2-Split (280px)' },
          { id: 'modal-single', label: '4. Modal Single (280px)' },
          { id: 'segmented', label: '5. Segmented 3-Split (312px)' },
          { id: 'chip', label: '6. Pill Filter Chip (45px)' },
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
        {/* Controls Toolbar */}
        <div className="p-4 border-b border-etc-03 bg-[#FCFDFE] flex flex-wrap items-center justify-between gap-4">
          {/* Mode Switcher */}
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

          {/* Interactive Controls Bar */}
          <div className="flex items-center flex-wrap gap-4 text-[13px]">
            {/* Device Switcher (Mobile 312px vs PC 672px/720px) */}
            <div className="flex items-center bg-etc-04 p-0.5 rounded-[6px] border border-etc-02">
              <button
                onClick={() => setDeviceView('mobile')}
                className={`px-2.5 py-1 rounded-[5px] text-[12px] font-bold flex items-center gap-1 ${
                  deviceView === 'mobile' ? 'bg-white text-main-01 shadow-xs' : 'text-text-03'
                }`}
                title="모바일 뷰포트 (312px)"
              >
                <Smartphone className="w-3.5 h-3.5" /> Mobile (312px)
              </button>
              <button
                onClick={() => setDeviceView('pc')}
                className={`px-2.5 py-1 rounded-[5px] text-[12px] font-bold flex items-center gap-1 ${
                  deviceView === 'pc' ? 'bg-white text-main-01 shadow-xs' : 'text-text-03'
                }`}
                title="PC 콘텐츠 뷰포트 (672px/720px)"
              >
                <Monitor className="w-3.5 h-3.5" /> PC (720px)
              </button>
            </div>

            {/* Background switcher */}
            <div className="flex items-center gap-1 text-text-03">
              <span className="text-[12px]">Canvas:</span>
              <div className="flex gap-1">
                {(['white', 'gray', 'tint', 'dark'] as const).map((bg) => (
                  <button
                    key={bg}
                    onClick={() => setBgStyle(bg)}
                    className={`w-5 h-5 rounded-full border transition-all ${
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

        {/* Live Canvas Area */}
        {activeTab === 'preview' && (
          <div
            className={`min-h-[300px] p-8 flex flex-col items-center justify-center transition-colors duration-200 ${
              bgStyle === 'white'
                ? 'bg-white'
                : bgStyle === 'gray'
                ? 'bg-etc-04'
                : bgStyle === 'tint'
                ? 'bg-main-04'
                : 'bg-text-01 text-white'
            }`}
          >
            <div className="flex flex-col items-center gap-4 w-full max-w-[760px]">
              {selectedButtonType === 'public' && (
                <div className="flex flex-col items-center gap-2 w-full">
                  <div
                    className={
                      deviceView === 'mobile'
                        ? 'w-[312px]'
                        : 'w-full max-w-[672px]'
                    }
                  >
                    <Button
                      variant="public"
                      fullWidth={deviceView === 'pc'}
                      disabled={isDisabled}
                      isLoading={isLoading}
                      onClick={() => alert('다이사 인컨텐츠 표준 버튼 클릭!')}
                    >
                      무료 방문견적 신청하기 ({deviceView === 'mobile' ? '312px' : '672px'})
                    </Button>
                  </div>
                  <span className="text-[12px] text-text-04">
                    현재 모드: {deviceView === 'mobile' ? '모바일 (312px)' : 'PC (672px)'} | Corner Radius: 10px
                  </span>
                </div>
              )}

              {selectedButtonType === 'floating' && (
                <div
                  className={`border border-dashed border-etc-02 p-4 rounded bg-white/50 flex flex-col items-center ${
                    deviceView === 'mobile' ? 'w-[360px]' : 'w-full max-w-[720px]'
                  }`}
                >
                  <span className="text-[12px] text-text-04 mb-3">
                    {deviceView === 'mobile' ? '모바일 360px 하단 고정' : 'PC 720px 하단 고정'} | Corner Radius: 0px (직각)
                  </span>
                  <div className="w-full">
                    <Button
                      variant="floating"
                      disabled={isDisabled}
                      isLoading={isLoading}
                      className={deviceView === 'pc' ? 'max-w-[720px]' : 'max-w-[360px]'}
                      onClick={() => alert('플로팅 CTA 버튼 클릭!')}
                    >
                      하단 고정 CTA 신청하기 (56px)
                    </Button>
                  </div>
                </div>
              )}

              {selectedButtonType === 'modal-split' && (
                <div className="w-[312px] bg-white border border-etc-02 p-4 rounded-[16px] shadow-sm flex flex-col items-center gap-4 text-text-01">
                  <div className="text-center">
                    <h4 className="text-[18px] font-bold">견적 요청 취소</h4>
                    <p className="text-[14px] text-text-03 mt-1">작성 중인 내용이 모두 초기화됩니다.</p>
                  </div>
                  <ModalButtonGroup
                    cancelText="취소"
                    confirmText="확인"
                    size={modalSize}
                    isConfirmLoading={isLoading}
                    onCancel={() => alert('취소 클릭')}
                    onConfirm={() => alert('확인 클릭')}
                  />
                  <span className="text-[11px] text-text-04">
                    136px(취소) + 8px(간격) + 136px(확인) = 280px (r:10px)
                  </span>
                </div>
              )}

              {selectedButtonType === 'modal-single' && (
                <div className="w-[312px] bg-white border border-etc-02 p-4 rounded-[16px] shadow-sm flex flex-col items-center gap-4 text-text-01">
                  <div className="text-center">
                    <h4 className="text-[18px] font-bold">접수 완료 안내</h4>
                    <p className="text-[14px] text-text-03 mt-1">담당 매니저가 유선으로 연락드립니다.</p>
                  </div>
                  <ModalSingleButton
                    text="확인했습니다"
                    size={modalSize}
                    isLoading={isLoading}
                    onClick={() => alert('단일 확인 버튼 클릭')}
                  />
                  <span className="text-[11px] text-text-04">
                    280px 전폭 단일 모달 버튼 (r:10px)
                  </span>
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
                    선택: <strong className="text-main-01">{segmentedOptions[segmentedIdx]}</strong> (좌 103px / 중앙 104px / 우 103px)
                  </span>
                </div>
              )}

              {selectedButtonType === 'chip' && (
                <div className="flex flex-wrap items-center justify-center gap-2.5">
                  {['원룸이사 (소형)', '가정이사 (아파트)', '사무실/기업이사', '보관이사'].map((label, i) => (
                    <button
                      key={label}
                      className={`h-[45px] px-[18px] rounded-full text-[14px] font-bold tracking-da24 transition-all ${
                        i === 0
                          ? 'bg-main-01 text-white shadow-sm'
                          : 'bg-etc-04 text-text-02 hover:bg-etc-03 border border-etc-02'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
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
                <tr className="border-b border-etc-03 text-text-04 text-[12px] bg-etc-04/50">
                  <th className="py-2.5 px-3 font-semibold">버튼 종류</th>
                  <th className="py-2.5 px-3 font-semibold">모바일 규격</th>
                  <th className="py-2.5 px-3 font-semibold">PC 규격</th>
                  <th className="py-2.5 px-3 font-semibold">라운드 (Radius)</th>
                  <th className="py-2.5 px-3 font-semibold">타이포그래피</th>
                  <th className="py-2.5 px-3 font-semibold">피그마 규칙 원문</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-etc-03 text-text-02">
                <tr>
                  <td className="py-3 px-3 font-bold text-main-01">Floating CTA</td>
                  <td className="py-3 px-3 font-mono">360 x 56px</td>
                  <td className="py-3 px-3 font-mono">720 x 56px</td>
                  <td className="py-3 px-3 font-mono text-error font-bold">0px (직각)</td>
                  <td className="py-3 px-3">18px Bold White</td>
                  <td className="py-3 px-3 text-[13px] text-text-03">화면 하단 밀착형 최우선 전환 버튼</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 font-bold text-main-01">Public In-Content</td>
                  <td className="py-3 px-3 font-mono">312 x 56px</td>
                  <td className="py-3 px-3 font-mono">672 x 56px</td>
                  <td className="py-3 px-3 font-mono font-bold">10px</td>
                  <td className="py-3 px-3">16px Bold White</td>
                  <td className="py-3 px-3 text-[13px] text-text-03">본문 내부 기본 표준 버튼 (패딩 16px)</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 font-bold text-main-01">Modal 2-Split</td>
                  <td className="py-3 px-3 font-mono">136 + 8 + 136px</td>
                  <td className="py-3 px-3 font-mono">136 + 8 + 136px</td>
                  <td className="py-3 px-3 font-mono font-bold">10px</td>
                  <td className="py-3 px-3">16px Bold</td>
                  <td className="py-3 px-3 text-[13px] text-text-03">취소(#EBEEF2) + 확인(#1219F7) 2분할</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 font-bold text-main-01">Segmented 3-Split</td>
                  <td className="py-3 px-3 font-mono">103-104-103px</td>
                  <td className="py-3 px-3 font-mono">가변 분할</td>
                  <td className="py-3 px-3 font-mono font-bold">외곽 10px / 내부 8px</td>
                  <td className="py-3 px-3">16px Bold</td>
                  <td className="py-3 px-3 text-[13px] text-text-03">중앙 버튼 1px 추가하여 312px 정렬</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 font-bold text-main-01">Pill Filter Chip</td>
                  <td className="py-3 px-3 font-mono">HUG x 45px</td>
                  <td className="py-3 px-3 font-mono">HUG x 45px</td>
                  <td className="py-3 px-3 font-mono font-bold">28px (Pill)</td>
                  <td className="py-3 px-3">14px Bold</td>
                  <td className="py-3 px-3 text-[13px] text-text-03">카테고리 다중 필터 선택 칩</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Do & Don't Guidelines */}
      <div>
        <h3 className="text-[18px] font-bold text-text-01 tracking-da24 mb-2">
          버튼 사용 시 올바른 가이드라인 (Do & Don't)
        </h3>
        <DoAndDont
          items={[
            {
              type: 'do',
              title: '화면당 메인 전환(Floating CTA)은 1개만 배치하기',
              description:
                '사용자의 의사결정을 돕기 위해 하단 고정 CTA는 화면당 1개만 사용합니다. 본문 내의 보조 동작은 10px 라운드의 Public 버튼이나 텍스트 링크를 사용하세요.',
              visual: (
                <div className="w-[280px] flex flex-col gap-2">
                  <div className="w-full h-[40px] bg-etc-03 text-text-02 rounded-[10px] text-[13px] font-bold flex items-center justify-center">
                    보조 액션 (취소 / 이전)
                  </div>
                  <div className="w-full h-[48px] bg-main-01 text-white rounded-[10px] text-[14px] font-bold flex items-center justify-center shadow-xs">
                    최종 신청 완료 (Primary CTA)
                  </div>
                </div>
              ),
            },
            {
              type: 'dont',
              title: '인컨텐츠 버튼을 하단에 고정하거나 라운드 혼용 금지',
              description:
                '하단 밀착 버튼에 10px 라운드를 주면 뷰포트 하단 모서리와 시각적 충돌이 발생합니다. 하단 고정은 반드시 0px 직각이어야 합니다.',
              visual: (
                <div className="w-[280px] p-2 bg-rose-50 border border-rose-200 rounded text-center">
                  <div className="w-full h-[48px] bg-main-01 text-white rounded-[24px] text-[13px] font-bold flex items-center justify-center line-through">
                    하단 바에 완전 둥근 캡슐 버튼 사용 (금지)
                  </div>
                </div>
              ),
            },
          ]}
        />
      </div>
    </div>
  );
};
