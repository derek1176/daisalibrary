import React, { useEffect, useState } from 'react';
import CUSTOMER_MD_CONTENT from '../../../DESIGN.md?raw';
import START_HERE_CONTENT from '../../../START-HERE.md?raw';
import PARTNER_MD_CONTENT from '../../../partner/DESIGN.md?raw';
import PARTNER_START_CONTENT from '../../../partner/START-HERE.md?raw';

interface DarangiItem {
  id: number;
  x: number;
  y: number;
}

// 2D 다이사 마스코트 다랑이 (머리띠 '다이사' + 택배 상자 배달 모습)
const DarangieSvg: React.FC = () => (
  <svg
    width="96"
    height="104"
    viewBox="0 0 100 110"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="filter drop-shadow-[0_12px_24px_rgba(18,25,247,0.3)] select-none pointer-events-none"
  >
    {/* 풍성한 다람쥐 꼬리 (우측) */}
    <path
      d="M68 85 C92 82 108 62 100 38 C94 22 78 18 70 26 C65 31 66 42 73 47 C80 52 82 62 74 76 Z"
      fill="#F58220"
      stroke="#191F28"
      strokeWidth="3"
      strokeLinejoin="round"
    />
    <path
      d="M78 35 C83 38 86 48 80 58"
      stroke="#FFE599"
      strokeWidth="2.5"
      strokeLinecap="round"
    />

    {/* 왼쪽 귀 */}
    <path
      d="M24 38 C17 24 21 10 31 14 C39 18 39 30 37 38 Z"
      fill="#FFA033"
      stroke="#191F28"
      strokeWidth="3"
      strokeLinejoin="round"
    />
    <path d="M26 28 C24 21 26 16 29 18" stroke="#FF7B7B" strokeWidth="2.5" strokeLinecap="round" />

    {/* 오른쪽 귀 */}
    <path
      d="M63 38 C61 30 61 18 69 14 C79 10 83 24 76 38 Z"
      fill="#FFA033"
      stroke="#191F28"
      strokeWidth="3"
      strokeLinejoin="round"
    />
    <path d="M74 28 C76 21 74 16 71 18" stroke="#FF7B7B" strokeWidth="2.5" strokeLinecap="round" />

    {/* 다랑이 몸통 */}
    <ellipse cx="50" cy="78" rx="26" ry="24" fill="#FFA033" stroke="#191F28" strokeWidth="3" />
    <ellipse cx="50" cy="80" rx="15" ry="16" fill="#FFFDF0" />

    {/* 다랑이 머리 */}
    <ellipse cx="50" cy="48" rx="33" ry="28" fill="#FFA033" stroke="#191F28" strokeWidth="3" />

    {/* 흰색 머리띠 ('다이사' 공식 텍스트) */}
    <path
      d="M19 40 C30 35 70 35 81 40 L82 48 C70 43 30 43 18 48 Z"
      fill="#FFFFFF"
      stroke="#191F28"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    <text
      x="50"
      y="45.5"
      textAnchor="middle"
      fontSize="6.5"
      fontWeight="900"
      fill="#1219F7"
      fontFamily="Pretendard, sans-serif"
    >
      다이사
    </text>

    {/* 볼살 및 하얀 털 */}
    <ellipse cx="38" cy="54" rx="9" ry="7" fill="#FFFDF0" />
    <ellipse cx="62" cy="54" rx="9" ry="7" fill="#FFFDF0" />

    {/* 분홍 볼터치 */}
    <ellipse cx="27" cy="54" rx="4" ry="2.5" fill="#FF7B7B" opacity="0.65" />
    <ellipse cx="73" cy="54" rx="4" ry="2.5" fill="#FF7B7B" opacity="0.65" />

    {/* 반짝이는 큰 눈동자 */}
    <ellipse cx="37" cy="50" rx="3.5" ry="4.5" fill="#191F28" />
    <circle cx="36" cy="48.5" r="1.3" fill="#FFFFFF" />
    <ellipse cx="63" cy="50" rx="3.5" ry="4.5" fill="#191F28" />
    <circle cx="62" cy="48.5" r="1.3" fill="#FFFFFF" />

    {/* 코 & 웃는 입 */}
    <ellipse cx="50" cy="53" rx="2" ry="1.4" fill="#4A3423" />
    <path d="M47 55 Q50 58 53 55" stroke="#4A3423" strokeWidth="1.8" strokeLinecap="round" fill="none" />

    {/* 다랑이가 들고 있는 택배/이사 상자 (Box) */}
    <g transform="translate(29, 66)">
      <rect x="0" y="0" width="42" height="30" rx="3" fill="#C89354" stroke="#191F28" strokeWidth="2.5" />
      {/* 상자 테이프 라인 */}
      <line x1="0" y1="8" x2="42" y2="8" stroke="#A67338" strokeWidth="1.5" />
      <rect x="17" y="0" width="8" height="30" fill="#E8D2A6" stroke="#191F28" strokeWidth="1.5" />
      {/* 운송장 송장 라벨 */}
      <rect x="4" y="12" width="10" height="12" rx="1" fill="#FFFFFF" stroke="#191F28" strokeWidth="1" />
      <line x1="6" y1="15" x2="12" y2="15" stroke="#888888" strokeWidth="1" />
      <line x1="6" y1="18" x2="12" y2="18" stroke="#888888" strokeWidth="1" />
      <line x1="6" y1="21" x2="10" y2="21" stroke="#888888" strokeWidth="1" />
    </g>

    {/* 상자를 잡고 있는 귀여운 앞발 */}
    <ellipse cx="30" cy="78" rx="5" ry="4" fill="#FFA033" stroke="#191F28" strokeWidth="2.5" />
    <ellipse cx="70" cy="78" rx="5" ry="4" fill="#FFA033" stroke="#191F28" strokeWidth="2.5" />

    {/* 하단 발 */}
    <ellipse cx="38" cy="99" rx="7" ry="4" fill="#FFA033" stroke="#191F28" strokeWidth="2.5" />
    <ellipse cx="62" cy="99" rx="7" ry="4" fill="#FFA033" stroke="#191F28" strokeWidth="2.5" />
  </svg>
);

export const ArchiveSection: React.FC<{ mode?: 'customer' | 'partner' }> = ({ mode = 'customer' }) => {
  const isPartner = mode === 'partner';
  const [selectedDoc, setSelectedDoc] = useState<'customer' | 'partner'>(isPartner ? 'partner' : 'customer');
  const [previewDoc, setPreviewDoc] = useState<'design' | 'start'>('design');
  const [copied, setCopied] = useState(false);
  const [darangis, setDarangis] = useState<DarangiItem[]>([]);

  useEffect(() => { setSelectedDoc(isPartner ? 'partner' : 'customer'); }, [isPartner]);

  const activeContent = selectedDoc === 'partner'
    ? (previewDoc === 'start' ? PARTNER_START_CONTENT : PARTNER_MD_CONTENT)
    : (previewDoc === 'start' ? START_HERE_CONTENT : CUSTOMER_MD_CONTENT);
  const activeFileName = previewDoc === 'start' ? 'START-HERE.md' : 'DESIGN.md';

  const triggerDarangie = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const newDarangi: DarangiItem = {
      id: Date.now() + Math.random(),
      x: rect.left + rect.width / 2,
      y: rect.top - 20,
    };
    setDarangis((prev) => [...prev, newDarangi]);
    setTimeout(() => {
      setDarangis((prev) => prev.filter((item) => item.id !== newDarangi.id));
    }, 2100);
  };

  const handleDownload = (e: React.MouseEvent) => {
    triggerDarangie(e);
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

      {/* 5. 이스터에그: 다이사 마스코트 다랑이가 택배 상자 들고 뿅뿅뿅 위로 배달 */}
      {darangis.map((item) => (
        <div
          key={item.id}
          className="fixed pointer-events-none z-50 animate-darangie flex flex-col items-center select-none"
          style={{ left: `${item.x}px`, top: `${item.y}px` }}
        >
          <div className="mb-2 bg-[#191F28] text-white text-[12px] font-extrabold px-3.5 py-1.5 rounded-full whitespace-nowrap shadow-xl flex items-center gap-1.5 border border-white/20">
            <span>다랑이가 택배 배달 중! 뿅뿅뿅</span>
            <span>📦💨</span>
          </div>
          <DarangieSvg />
        </div>
      ))}
    </section>
  );
};

export default ArchiveSection;
