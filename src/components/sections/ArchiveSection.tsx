import React, { useEffect, useRef, useState } from 'react';
import CUSTOMER_MD_CONTENT from '../../../DESIGN.md?raw';
import START_HERE_CONTENT from '../../../START-HERE.md?raw';
import PARTNER_MD_CONTENT from '../../../partner/DESIGN.md?raw';
import PARTNER_START_CONTENT from '../../../partner/START-HERE.md?raw';

export const ArchiveSection: React.FC<{ mode?: 'customer' | 'partner' }> = ({ mode = 'customer' }) => {
  const isPartner = mode === 'partner';
  const [selectedDoc, setSelectedDoc] = useState<'customer' | 'partner'>(isPartner ? 'partner' : 'customer');
  const [previewDoc, setPreviewDoc] = useState<'design' | 'start'>('design');
  const [copied, setCopied] = useState(false);
  const [deliveryId, setDeliveryId] = useState(0);
  const deliveryTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const mascot = new Image();
    mascot.src = '/images/darangie-delivery.png';
    return () => { if (deliveryTimer.current) clearTimeout(deliveryTimer.current); };
  }, []);

  useEffect(() => { setSelectedDoc(isPartner ? 'partner' : 'customer'); }, [isPartner]);

  const activeContent = selectedDoc === 'partner'
    ? (previewDoc === 'start' ? PARTNER_START_CONTENT : PARTNER_MD_CONTENT)
    : (previewDoc === 'start' ? START_HERE_CONTENT : CUSTOMER_MD_CONTENT);
  const activeFileName = previewDoc === 'start' ? 'START-HERE.md' : 'DESIGN.md';

  const triggerDarangie = () => {
    if (deliveryTimer.current) clearTimeout(deliveryTimer.current);
    setDeliveryId(value => value + 1);
    deliveryTimer.current = setTimeout(() => {
      setDeliveryId(0);
      deliveryTimer.current = null;
    }, 2800);
  };

  const handleDownload = () => {
    triggerDarangie();
    const link = document.createElement('a');
    link.href = `/daisa-${selectedDoc}-md.zip`;
    link.download = `daisa-${selectedDoc}-md.zip`;
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(activeContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section id="archive" className="space-y-6 relative">
      {/* 1. Header (심플 영문 타이틀만) */}
      <div className="border-b pb-4 border-[#E5E8EB]">
        <h2 className="text-[28px] md:text-[32px] font-extrabold tracking-tight text-[#191F28]">
          Resources
        </h2>
      </div>

      {/* 2. 전환되는 Segmented Switcher UI (고급스러운 슬라이딩 토글 형태) */}
      <div className="relative bg-[#E2E6EE] p-1 rounded-[14px] flex items-center w-full max-w-[280px] select-none">
        {/* 부드럽게 좌우로 슬라이딩되는 화이트 썸 */}
        <div
          className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white rounded-[10px] shadow-sm transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            selectedDoc === 'customer' ? 'left-1' : 'left-[calc(50%+2px)]'
          }`}
        />

        {/* 탭 1: 고객향.md */}
        <button
          type="button"
          onClick={() => setSelectedDoc('customer')}
          className={`relative z-10 w-1/2 py-2 text-center text-[13px] font-bold transition-colors duration-200 cursor-pointer flex items-center justify-center gap-1.5 ${
            selectedDoc === 'customer' ? 'text-[#1219F7]' : 'text-[#6B7684] hover:text-[#191F28]'
          }`}
        >
          <span>고객향 MD</span>
        </button>

        {/* 탭 2: 파트너향.md */}
        <button
          type="button"
          onClick={() => setSelectedDoc('partner')}
          className={`relative z-10 w-1/2 py-2 text-center text-[13px] font-bold transition-colors duration-200 cursor-pointer flex items-center justify-center gap-1.5 ${
            selectedDoc === 'partner' ? 'text-[#1219F7]' : 'text-[#6B7684] hover:text-[#191F28]'
          }`}
        >
          <span>파트너향 MD</span>
        </button>
      </div>

      {/* 3. Action Card (심플 & 직관적인 다운로드 및 복사 영역) */}
      <div className="bg-white rounded-[16px] p-5 shadow-xs border border-[#E5E8EB] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[16px] font-bold text-[#191F28]">
              {selectedDoc === 'customer' ? '고객향 MD' : '파트너향 MD'}
            </span>
            <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#E8F3FF] text-[#1219F7]">
              ZIP · MD 2개
            </span>
          </div>
          <p className="text-[13px] text-[#6B7684]">
            포함: DESIGN.md(디자인 기준) · START-HERE.md(AI 작업 안내)
          </p>
        </div>

        {/* Buttons (아이콘 최소화, 명확한 텍스트 중심) */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={handleDownload}
            className="h-[42px] px-4 rounded-[10px] bg-[#1219F7] hover:bg-[#0E15D4] text-white font-bold text-[13px] shadow-xs transition-all active:scale-[0.98] cursor-pointer"
          >
            {selectedDoc === 'customer' ? '고객향' : '파트너향'} MD 받기 (.zip)
          </button>
          <button
            type="button"
            onClick={handleCopy}
            className="h-[42px] px-4 rounded-[10px] bg-[#F2F4F8] hover:bg-[#E5EAF2] text-[#333D4B] font-bold text-[13px] transition-all active:scale-[0.98] cursor-pointer"
          >
            {copied ? '복사 완료' : '미리보기 원문 복사'}
          </button>
        </div>
      </div>

      {(
        <div className="bg-white rounded-[16px] p-5 shadow-xs border border-[#E5E8EB] space-y-3 text-[13px] text-[#6B7684] leading-relaxed">
          <h3 className="font-bold text-[#191F28]">간단 사용법</h3>
          <p>ZIP을 풀고 아래 두 방식 중 하나로 사용하세요. ZIP 자체가 아닌 두 MD 파일을 첨부합니다. 고객향과 파트너향은 섞지 않습니다.</p>
          <p><strong className="text-[#191F28]">프롬프트 AI → 디자인 AI</strong><br />
            두 AI에 각각 두 MD를 첨부합니다. 앞 AI에는 “첨부 MD 기준으로 디자인용 프롬프트를 작성해 줘”,
            다음 AI에는 “첨부 MD 기준을 지키며 이 프롬프트로 디자인해 줘”라고 요청하세요.
          </p>
          <p><strong className="text-[#191F28]">디자인 AI에 바로 요청</strong><br />
            두 MD와 기획·참고 화면을 첨부하고 “첨부 MD 기준을 지키며 이 화면을 디자인해 줘”라고 요청하세요.
          </p>
        </div>
      )}

      {/* 4. Raw Markdown Viewer */}
      <div className="bg-white rounded-[16px] overflow-hidden shadow-xs border border-[#E5E8EB]">
        <div className="px-5 py-3 border-b border-[#F2F4F8] flex items-center justify-between text-[12px] font-semibold text-[#8B95A1] bg-[#FAFAFB]">
          <div className="flex flex-wrap items-center gap-3">
            {(['design', 'start'] as const).map(doc => (
              <button key={doc} type="button" onClick={() => { setPreviewDoc(doc); setCopied(false); }}
                className={previewDoc === doc ? 'text-[#1219F7] font-bold' : 'hover:text-[#191F28]'}>
                {doc === 'design' ? 'DESIGN.md' : 'START-HERE.md'}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={handleCopy}
            className="text-[12px] text-[#1219F7] hover:underline font-bold"
          >
            {copied ? '복사됨' : '전체 복사'}
          </button>
        </div>

        <div className="p-6 overflow-x-auto text-[13px] font-mono leading-relaxed text-[#333D4B] max-h-[640px] overflow-y-auto bg-white select-text">
          <pre className="whitespace-pre">
            <code>{activeContent}</code>
          </pre>
        </div>
      </div>

      {deliveryId > 0 && (
        <div
          key={deliveryId}
          data-delivery-easter-egg
          className="fixed right-5 bottom-6 z-[60] pointer-events-none animate-darangie flex flex-col items-center gap-2 select-none"
          role="status"
          aria-live="polite"
        >
          <img src="/images/darangie-delivery.png" alt="" width="160" height="160" className="w-32 sm:w-40 h-auto object-contain" draggable={false} />
          <span className="rounded-full bg-[#191F28] px-4 py-2 text-[14px] font-bold text-white shadow-lg">다랑이가 배송중</span>
        </div>
      )}
    </section>
  );
};

export default ArchiveSection;
