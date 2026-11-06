import React, { useState } from 'react';
import { Modal } from '../ui/Modal';
import { BottomSheet, BottomSheetItem } from '../ui/BottomSheet';
import { Button } from '../ui/Button';
import { ExternalLink, Layers, Sliders, Code2, Copy, Check } from 'lucide-react';

export const ModalsShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'preview' | 'code' | 'spec'>('preview');

  // Interactive triggers
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [selectedFloor, setSelectedFloor] = useState<string | number>('3');
  const [copiedCode, setCopiedCode] = useState(false);

  const floorItems: BottomSheetItem[] = [
    { id: '1', label: '1층 (단독주택/저층)' },
    { id: '2', label: '2층' },
    { id: '3', label: '3층', badge: '선택됨' },
    { id: '4', label: '4층' },
    { id: '5', label: '5층 (사다리차 필수)' },
    { id: '6', label: '6층 이상 (고층 아파트)' },
    { id: 'b1', label: '지하 1층' },
  ];

  const codeSnippet = `// 1. Alert/Confirm Modal (312px, Radius 16px, Dimmed 60%)
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="이사 견적 신청을 취소하시겠습니까?"
  description="작성 중인 출발지 및 일정 정보가 저장되지 않습니다."
  type="confirm"
  cancelText="이어쓰기"
  confirmText="취소하기"
  onConfirm={() => console.log('취소 처리')}
/>

// 2. Alert Modal (단일 280px 버튼)
<Modal
  isOpen={isAlertOpen}
  onClose={() => setIsAlertOpen(false)}
  title="견적 신청이 완료되었습니다"
  description="담당 마스터가 10분 내로 전화를 드립니다."
  type="alert"
  confirmText="확인"
/>

// 3. Bottom Sheet (360px 너비, 상단 16px 라운드, 헤더 56px, 리스트 56px)
<BottomSheet
  isOpen={isSheetOpen}
  onClose={() => setIsSheetOpen(false)}
  title="출발지 층수를 선택하세요"
  items={floorItems}
  selectedId={selectedFloor}
  onSelect={(item) => setSelectedFloor(item.id)}
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
            Components / Overlays
          </span>
          <span className="text-[12px] text-text-04">Figma: csWoLlTCHOtuE7oAMswuL7 (384:1369, 388:119) & G5JiHI51FV6XFImlsyON6u (6813:9676)</span>
        </div>
        <h2 className="text-[24px] font-bold text-text-01 leading-[34px] tracking-da24">
          Modals & Bottom Sheets (팝업 및 바텀시트 규격)
        </h2>
        <p className="mt-1 text-[16px] text-text-03 leading-[24px] tracking-da24">
          사용자의 맥락을 차단하고 집중시키는 중앙 모달 팝업과 모바일 선택을 위한 플로팅 바텀시트의 표준 인터랙션입니다.
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
          <span className="text-[13px] text-text-03">버튼을 클릭하여 실제 오버레이 팝업을 직접 띄워보세요.</span>
        </div>

        {/* Preview Area */}
        {activeTab === 'preview' && (
          <div className="p-8 bg-[#F8F9FB] flex flex-col items-center justify-center">
            <div className="w-full max-w-[420px] bg-white border border-etc-02 rounded-[16px] p-6 shadow-sm space-y-6">
              <div className="border-b border-etc-03 pb-3">
                <span className="text-[12px] font-bold text-main-01">INTERACTIVE TRIGGERS</span>
                <h4 className="text-[18px] font-bold text-text-01">모달 & 시트 데모 트리거</h4>
              </div>

              {/* Action buttons to trigger modals */}
              <div className="flex flex-col gap-3">
                <Button
                  variant="public"
                  fullWidth
                  onClick={() => setIsConfirmModalOpen(true)}
                  className="flex items-center justify-center gap-2"
                >
                  <span>2버튼 컨펌 모달 열기 (312px)</span>
                  <ExternalLink className="w-4 h-4" />
                </Button>

                <Button
                  variant="public"
                  fullWidth
                  onClick={() => setIsAlertModalOpen(true)}
                  className="bg-text-01 hover:bg-[#222] flex items-center justify-center gap-2"
                >
                  <span>1버튼 단일 알림 모달 열기 (312px)</span>
                  <ExternalLink className="w-4 h-4" />
                </Button>

                <Button
                  variant="public"
                  fullWidth
                  onClick={() => setIsBottomSheetOpen(true)}
                  className="bg-main-02 hover:bg-[#484EF8] flex items-center justify-center gap-2"
                >
                  <span>모바일 바텀시트 열기 (360px)</span>
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>

              {/* Status Display */}
              <div className="p-3 bg-etc-04 rounded-[8px] text-[13px] text-text-03 flex justify-between items-center">
                <span>현재 선택된 층수:</span>
                <strong className="text-main-01 font-bold">{selectedFloor}층</strong>
              </div>
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
                  <th className="py-2.5 font-semibold">구분</th>
                  <th className="py-2.5 font-semibold">너비 (Width)</th>
                  <th className="py-2.5 font-semibold">라운드 (Radius)</th>
                  <th className="py-2.5 font-semibold">오버레이 (Dimmed)</th>
                  <th className="py-2.5 font-semibold">타이틀 스펙</th>
                  <th className="py-2.5 font-semibold">내부 버튼 규격</th>
                  <th className="py-2.5 font-semibold">피그마 원본 참조</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-etc-03 text-text-02">
                <tr>
                  <td className="py-3 font-bold text-main-01">Alert / Confirm 모달</td>
                  <td className="py-3 font-mono font-bold">312px 중앙 정렬</td>
                  <td className="py-3 font-mono">16px</td>
                  <td className="py-3 font-mono">rgba(0,0,0,0.6) 60%</td>
                  <td className="py-3">20px Bold (lh 150%)</td>
                  <td className="py-3 font-mono">280px 전폭 또는 136+8+136 2분할 (r:10px)</td>
                  <td className="py-3 text-[12px] font-mono text-text-04">G5JiHI51FV6XFImlsyON6u (6813:9676)</td>
                </tr>
                <tr>
                  <td className="py-3 font-bold text-main-01">Bottom Sheet (선택 시트)</td>
                  <td className="py-3 font-mono font-bold">360px (최대폭)</td>
                  <td className="py-3 font-mono">상단만 16px (rounded-t-[16px])</td>
                  <td className="py-3 font-mono">rgba(0,0,0,0.6) 60%</td>
                  <td className="py-3">헤더 56px (18px Bold + 24x24 닫기)</td>
                  <td className="py-3 font-mono">리스트 아이템 56px, 최대높이 284px (5개 노출)</td>
                  <td className="py-3 text-[12px] font-mono text-text-04">csWoLlTCHOtuE7oAMswuL7 (388:119)</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Render Real Interactive Modal Overlays */}
      <Modal
        isOpen={isConfirmModalOpen}
        onClose={() => setIsConfirmModalOpen(false)}
        title="방문 견적 신청을 취소할까요?"
        description="입력하신 이사 정보와 요청 사항이 모두 초기화됩니다."
        type="confirm"
        cancelText="계속 작성"
        confirmText="취소하기"
        onConfirm={() => alert('취소되었습니다.')}
      />

      <Modal
        isOpen={isAlertModalOpen}
        onClose={() => setIsAlertModalOpen(false)}
        title="이사 견적 접수가 완료되었습니다"
        description="고객님의 연락처로 전문 매니저의 배정 알림톡이 전송되었습니다."
        type="alert"
        confirmText="확인 완료"
      />

      <BottomSheet
        isOpen={isBottomSheetOpen}
        onClose={() => setIsBottomSheetOpen(false)}
        title="출발지 층수를 선택해 주세요"
        items={floorItems}
        selectedId={selectedFloor}
        onSelect={(item) => setSelectedFloor(item.id)}
      />
    </div>
  );
};
