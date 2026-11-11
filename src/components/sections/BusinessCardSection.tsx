import React, { useState, useRef } from 'react';
import {
  Download,
  RotateCcw,
  Sparkles,
  Info,
  CheckCircle2,
  FileCheck,
  Eye,
  Layers,
  ChevronDown,
  ChevronUp,
  Printer,
  Copy,
  Check,
} from 'lucide-react';
import {
  CardData,
  DEFAULT_CARD_DATA,
  DAISA_BLUE_HEX,
  DAISA_PATHS,
  generateOutlinedCardPdf,
  TRIM_WIDTH_MM,
  TRIM_HEIGHT_MM,
  WORK_WIDTH_MM,
  WORK_HEIGHT_MM,
} from '../../utils/businessCardPdf';

interface BusinessCardSectionProps {
  mode?: 'customer' | 'partner';
}

export const BusinessCardSection: React.FC<BusinessCardSectionProps> = () => {
  const [cardData, setCardData] = useState<CardData>(DEFAULT_CARD_DATA);
  const [showGuides, setShowGuides] = useState(true);
  const [previewTab, setPreviewTab] = useState<'both' | 'front' | 'back'>('both');
  const [isGenerating, setIsGenerating] = useState(false);
  const [showCompanyDetails, setShowCompanyDetails] = useState(false);
  const [copied, setCopied] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const frontRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (field: keyof CardData, value: string) => {
    setCardData((prev) => ({ ...prev, [field]: value }));
  };

  const handleReset = () => {
    setCardData(DEFAULT_CARD_DATA);
  };

  const handleDownload = async (format: 'ai' | 'pdf') => {
    try {
      setIsGenerating(true);
      const blob = await generateOutlinedCardPdf(cardData);
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      const cleanName = (cardData.nameKo || '명함').replace(/\s+/g, '_');
      link.download = `다이사_명함_${cleanName}_인쇄용_cmyk.${format}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      setDownloadSuccess(format.toUpperCase());
      setTimeout(() => setDownloadSuccess(null), 4000);
    } catch (err) {
      console.error('다운로드 생성 실패:', err);
      alert('파일 생성 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-12 pb-16">
      {/* ============================================================ */}
      {/* 1. Header & Spec Badges */}
      {/* ============================================================ */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F3FF] text-[#003893] text-[12px] font-bold">
          <Printer className="w-3.5 h-3.5" />
          <span>공식 명함 발급 & 인쇄용 AI 파일 생성기</span>
        </div>
        <h1 className="text-[28px] md:text-[34px] font-extrabold text-[#191F28] tracking-tight">
          명함 제작 (Business Card)
        </h1>
        <p className="text-[15px] md:text-[16px] text-[#4E5968] leading-relaxed max-w-[800px]">
          이름과 연락처를 입력하면 다이사 브랜드 가이드 규격에 맞춘 명함을 실시간으로 확인하고,
          <strong> 폰트가 아웃라인(글자 깨진 상태) 처리된 인쇄용 AI/PDF 파일</strong>을 즉시 생성합니다.
        </p>

        {/* Spec Pill Tags */}
        <div className="flex flex-wrap items-center gap-2.5 pt-2">
          <span className="px-3 py-1 rounded-[8px] bg-[#F2F4F6] text-[#4E5968] text-[12px] font-medium flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#003893]" />
            다이사 블루 CMYK (100, 80, 0, 0)
          </span>
          <span className="px-3 py-1 rounded-[8px] bg-[#F2F4F6] text-[#4E5968] text-[12px] font-medium">
            작업 규격: 92 × 52 mm (재단 90 × 50 mm)
          </span>
          <span className="px-3 py-1 rounded-[8px] bg-[#F2F4F6] text-[#4E5968] text-[12px] font-medium">
            서체: Pretendard (100% Vector Outline)
          </span>
          <span className="px-3 py-1 rounded-[8px] bg-emerald-50 text-emerald-700 text-[12px] font-bold flex items-center gap-1">
            <FileCheck className="w-3.5 h-3.5" />
            인쇄소 즉시 접수 가능
          </span>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 2. Main 2-Column Editor (Left: Forms, Right: Live Card Preview) */}
      {/* ============================================================ */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Form Controls (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white border border-[#E5E8EB] rounded-[18px] p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)] space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-[#F2F4F6]">
              <h2 className="text-[16px] font-bold text-[#191F28] flex items-center gap-2">
                <span>정보 입력</span>
              </h2>
              <button
                onClick={handleReset}
                className="text-[12px] text-[#6B7684] hover:text-[#191F28] flex items-center gap-1 py-1 px-2 rounded-[6px] hover:bg-[#F2F4F6] transition-colors"
                title="기본값으로 되돌리기"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>초기화</span>
              </button>
            </div>

            {/* Basic Info */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-[12px] font-bold text-[#4E5968]">
                    한글 성명 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={cardData.nameKo}
                    onChange={(e) => handleInputChange('nameKo', e.target.value)}
                    placeholder="이재원"
                    className="w-full h-[42px] px-3.5 rounded-[10px] border border-[#E5E8EB] text-[14px] text-[#191F28] focus:outline-none focus:border-[#003893] focus:ring-2 focus:ring-[#003893]/10 transition-all font-medium"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[12px] font-bold text-[#4E5968]">
                    영문 이름 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={cardData.nameEn}
                    onChange={(e) => handleInputChange('nameEn', e.target.value)}
                    placeholder="Jacob"
                    className="w-full h-[42px] px-3.5 rounded-[10px] border border-[#E5E8EB] text-[14px] text-[#191F28] focus:outline-none focus:border-[#003893] focus:ring-2 focus:ring-[#003893]/10 transition-all font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-[12px] font-bold text-[#4E5968]">소속 부서 / 팀</label>
                  <input
                    type="text"
                    value={cardData.department}
                    onChange={(e) => handleInputChange('department', e.target.value)}
                    placeholder="Operation Team"
                    className="w-full h-[42px] px-3.5 rounded-[10px] border border-[#E5E8EB] text-[14px] text-[#191F28] focus:outline-none focus:border-[#003893] focus:ring-2 focus:ring-[#003893]/10 transition-all"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[12px] font-bold text-[#4E5968]">직급 / 직책</label>
                  <input
                    type="text"
                    value={cardData.position}
                    onChange={(e) => handleInputChange('position', e.target.value)}
                    placeholder="파트리더"
                    className="w-full h-[42px] px-3.5 rounded-[10px] border border-[#E5E8EB] text-[14px] text-[#191F28] focus:outline-none focus:border-[#003893] focus:ring-2 focus:ring-[#003893]/10 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[12px] font-bold text-[#4E5968]">
                  휴대폰 번호 (M) <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={cardData.mobile}
                  onChange={(e) => handleInputChange('mobile', e.target.value)}
                  placeholder="010. 1234. 5678"
                  className="w-full h-[42px] px-3.5 rounded-[10px] border border-[#E5E8EB] text-[14px] text-[#191F28] focus:outline-none focus:border-[#003893] focus:ring-2 focus:ring-[#003893]/10 transition-all font-mono"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[12px] font-bold text-[#4E5968]">
                  이메일 (E) <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={cardData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="jacob@da24.co.kr"
                  className="w-full h-[42px] px-3.5 rounded-[10px] border border-[#E5E8EB] text-[14px] text-[#191F28] focus:outline-none focus:border-[#003893] focus:ring-2 focus:ring-[#003893]/10 transition-all font-mono"
                />
              </div>
            </div>

            {/* Collapsible: Company Shared Information */}
            <div className="pt-2 border-t border-[#F2F4F6]">
              <button
                type="button"
                onClick={() => setShowCompanyDetails(!showCompanyDetails)}
                className="w-full flex items-center justify-between text-[13px] font-bold text-[#4E5968] hover:text-[#191F28] py-2 transition-colors select-none"
              >
                <span>회사 공통 정보 (전화 / 팩스 / 주소 등)</span>
                {showCompanyDetails ? (
                  <ChevronUp className="w-4 h-4 text-[#8B95A1]" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-[#8B95A1]" />
                )}
              </button>

              {showCompanyDetails && (
                <div className="space-y-3.5 pt-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-[11px] font-semibold text-[#6B7684]">대표전화 (T)</label>
                      <input
                        type="text"
                        value={cardData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="w-full h-[38px] px-3 rounded-[8px] border border-[#E5E8EB] text-[13px] font-mono"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[11px] font-semibold text-[#6B7684]">팩스번호 (F)</label>
                      <input
                        type="text"
                        value={cardData.fax}
                        onChange={(e) => handleInputChange('fax', e.target.value)}
                        className="w-full h-[38px] px-3 rounded-[8px] border border-[#E5E8EB] text-[13px] font-mono"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold text-[#6B7684]">회사 주소 (A)</label>
                    <input
                      type="text"
                      value={cardData.addressLine1}
                      onChange={(e) => handleInputChange('addressLine1', e.target.value)}
                      placeholder="서울시 강남구 테헤란로7길 12"
                      className="w-full h-[38px] px-3 rounded-[8px] border border-[#E5E8EB] text-[13px]"
                    />
                    <input
                      type="text"
                      value={cardData.addressLine2}
                      onChange={(e) => handleInputChange('addressLine2', e.target.value)}
                      placeholder="허바허바빌딩 3층"
                      className="w-full h-[38px] px-3 mt-1.5 rounded-[8px] border border-[#E5E8EB] text-[13px]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold text-[#6B7684]">웹사이트 (W)</label>
                    <input
                      type="text"
                      value={cardData.website}
                      onChange={(e) => handleInputChange('website', e.target.value)}
                      className="w-full h-[38px] px-3 rounded-[8px] border border-[#E5E8EB] text-[13px] font-mono"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Download Action Cards */}
          <div className="bg-[#F8F9FA] border border-[#E5E8EB] rounded-[18px] p-6 space-y-4">
            <h3 className="text-[14px] font-bold text-[#191F28] flex items-center gap-2">
              <Download className="w-4 h-4 text-[#003893]" />
              <span>인쇄소 발주용 파일 내보내기</span>
            </h3>

            <p className="text-[12px] text-[#6B7684] leading-relaxed">
              모든 텍스트가 <strong>아웃라인(곡선 벡터)</strong>으로 변환되므로, 폰트 파일이 없어도 인쇄소에서
              글자가 깨지거나 유실되지 않습니다.
            </p>

            <div className="space-y-2.5 pt-1">
              {/* Primary AI Download Button */}
              <button
                type="button"
                disabled={isGenerating}
                onClick={() => handleDownload('ai')}
                className="w-full h-[46px] rounded-[12px] bg-[#003893] hover:bg-[#002f7a] text-white font-bold text-[14px] flex items-center justify-center gap-2 transition-all shadow-[0_2px_8px_rgba(0,56,147,0.25)] hover:shadow-[0_4px_12px_rgba(0,56,147,0.35)] disabled:opacity-50 select-none cursor-pointer"
              >
                {isGenerating ? (
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <Download className="w-4 h-4" />
                )}
                <span>인쇄용 AI 파일 다운로드 (.ai)</span>
              </button>

              {/* Secondary PDF Download Button */}
              <button
                type="button"
                disabled={isGenerating}
                onClick={() => handleDownload('pdf')}
                className="w-full h-[44px] rounded-[12px] bg-white border border-[#E5E8EB] hover:bg-[#F2F4F6] text-[#191F28] font-bold text-[14px] flex items-center justify-center gap-2 transition-all disabled:opacity-50 select-none cursor-pointer"
              >
                <Printer className="w-4 h-4 text-[#4E5968]" />
                <span>인쇄용 PDF 다운로드 (.pdf)</span>
              </button>
            </div>

            {downloadSuccess && (
              <div className="p-3 rounded-[10px] bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-[12px] flex items-center gap-2 font-medium animate-fadeIn">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>
                  {downloadSuccess} 파일이 생성되었습니다! 인쇄소 사이트에 바로 업로드하시면 됩니다.
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Live Card Preview (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          {/* Preview Controls Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 bg-[#F8F9FA] p-2.5 rounded-[14px] border border-[#E5E8EB]">
            {/* View Switcher */}
            <div className="flex items-center gap-1 bg-white p-1 rounded-[10px] border border-[#E5E8EB]/60">
              <button
                type="button"
                onClick={() => setPreviewTab('both')}
                className={`px-3 py-1 rounded-[7px] text-[12px] font-bold transition-all select-none ${
                  previewTab === 'both' ? 'bg-[#003893] text-white' : 'text-[#6B7684] hover:text-[#191F28]'
                }`}
              >
                앞/뒤 전체
              </button>
              <button
                type="button"
                onClick={() => setPreviewTab('front')}
                className={`px-3 py-1 rounded-[7px] text-[12px] font-bold transition-all select-none ${
                  previewTab === 'front' ? 'bg-[#003893] text-white' : 'text-[#6B7684] hover:text-[#191F28]'
                }`}
              >
                앞면 (Blue)
              </button>
              <button
                type="button"
                onClick={() => setPreviewTab('back')}
                className={`px-3 py-1 rounded-[7px] text-[12px] font-bold transition-all select-none ${
                  previewTab === 'back' ? 'bg-[#003893] text-white' : 'text-[#6B7684] hover:text-[#191F28]'
                }`}
              >
                뒷면 (White)
              </button>
            </div>

            {/* Guide Toggle */}
            <button
              type="button"
              onClick={() => setShowGuides(!showGuides)}
              className={`px-3 py-1.5 rounded-[9px] text-[12px] font-medium flex items-center gap-1.5 border transition-all ${
                showGuides
                  ? 'bg-[#E8F3FF] border-[#B8D7FF] text-[#003893]'
                  : 'bg-white border-[#E5E8EB] text-[#6B7684]'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>{showGuides ? '재단/도련 가이드 켜짐' : '가이드 숨김'}</span>
            </button>
          </div>

          {/* Cards Display Container */}
          <div className="bg-[#ECEEF2] border border-[#DDE1E6] rounded-[22px] p-8 md:p-10 flex flex-wrap items-center justify-center gap-8 min-h-[580px] overflow-hidden">
            {/* Front Card (01 - 아트보드 1) */}
            {(previewTab === 'both' || previewTab === 'front') && (
              <div className="flex flex-col items-center gap-3">
                <span className="text-[12px] font-bold text-[#6B7684] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#003893]" />
                  01 - 앞면 (Blue)
                </span>

                {/* 50x90mm ratio: 260px x 468px */}
                <div
                  ref={frontRef}
                  style={{ width: '260px', height: '468px' }}
                  className={`relative rounded-[2px] shadow-[0_12px_28px_rgba(0,0,0,0.18)] select-none overflow-hidden transition-all bg-[#003893] text-white flex flex-col justify-between ${
                    showGuides ? 'ring-2 ring-[#003893]/30' : ''
                  }`}
                >
                  {/* Bleed / Trim Guides Overlay */}
                  {showGuides && (
                    <div className="absolute inset-[8px] pointer-events-none border border-dashed border-cyan-300/40 z-20">
                      <span className="absolute top-1 left-1 text-[8px] text-cyan-200/60 font-mono">
                        재단선 (90×50mm)
                      </span>
                    </div>
                  )}

                  {/* Top Text Block */}
                  <div className="pt-24 px-6 text-center space-y-1.5 z-10">
                    <div className="text-[14px] font-bold tracking-widest text-white/95">No.1</div>
                    <div className="text-[12px] font-normal text-white/90">홈서비스 플랫폼</div>
                    <div className="w-6 h-[1.5px] bg-white/70 mx-auto mt-2" />
                  </div>

                  {/* Center Vertical Combination Logo */}
                  <div className="pb-28 px-6 flex flex-col items-center gap-3 z-10">
                    {/* Symbol */}
                    <div className="w-[42px] h-[48px]">
                      <svg viewBox="0 0 359 408" fill="none" className="w-full h-full">
                        <path d={DAISA_PATHS.symbol} fill="#FFFFFF" fillRule="evenodd" />
                      </svg>
                    </div>
                    {/* Wordmark */}
                    <div className="w-[72px] h-[19px]">
                      <svg viewBox="0 0 860 225" fill="none" className="w-full h-full">
                        <path d={DAISA_PATHS.wordmark} fill="#FFFFFF" fillRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Back Card (02 - 아트보드 2) */}
            {(previewTab === 'both' || previewTab === 'back') && (
              <div className="flex flex-col items-center gap-3">
                <span className="text-[12px] font-bold text-[#6B7684] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-white border border-[#B0B8C1]" />
                  02 - 뒷면 (White)
                </span>

                {/* 50x90mm ratio: 260px x 468px */}
                <div
                  ref={backRef}
                  style={{ width: '260px', height: '468px' }}
                  className={`relative rounded-[2px] shadow-[0_12px_28px_rgba(0,0,0,0.14)] select-none overflow-hidden transition-all bg-white text-[#191F28] flex flex-col justify-between p-7 ${
                    showGuides ? 'ring-2 ring-blue-500/30' : ''
                  }`}
                >
                  {/* Bleed / Trim Guides Overlay */}
                  {showGuides && (
                    <div className="absolute inset-[8px] pointer-events-none border border-dashed border-blue-400/35 z-20">
                      <span className="absolute top-1 right-1 text-[8px] text-blue-500/60 font-mono">
                        안전 영역
                      </span>
                    </div>
                  )}

                  {/* Watermark Logo (faint blue) */}
                  <div className="absolute right-[-10px] top-[140px] w-[130px] h-[148px] pointer-events-none opacity-[0.06] z-0">
                    <svg viewBox="0 0 359 408" fill="none" className="w-full h-full">
                      <path d={DAISA_PATHS.symbol} fill="#003893" fillRule="evenodd" />
                    </svg>
                  </div>

                  {/* Top Wordmark Logo */}
                  <div className="w-[62px] h-[17px] z-10">
                    <svg viewBox="0 0 860 225" fill="none" className="w-full h-full">
                      <path d={DAISA_PATHS.wordmark} fill="#003893" fillRule="evenodd" />
                    </svg>
                  </div>

                  {/* Middle: Name & Title Block */}
                  <div className="space-y-1.5 z-10 mt-6">
                    <div className="text-[17px] font-bold text-[#003893] tracking-tight">
                      {cardData.nameKo || '이재원'}
                      <span className="text-[#003893]/70 font-medium ml-1.5 mr-1.5">/</span>
                      <span className="text-[#003893]">{cardData.nameEn || 'Jacob'}</span>
                    </div>
                    <div className="text-[11.5px] text-[#4E5968] font-normal leading-[1.35]">
                      <div>{cardData.department || 'Operation Team'}</div>
                      <div>{cardData.position || '파트리더'}</div>
                    </div>
                  </div>

                  {/* Bottom: Contact Info Block */}
                  <div className="space-y-1 text-[9.5px] z-10 mb-1 leading-[1.35]">
                    <div className="flex items-baseline">
                      <span className="w-4 font-bold text-[#191F28] shrink-0">M</span>
                      <span className="text-[#333D4B] font-mono font-medium">
                        {cardData.mobile || '010. 1234. 5678'}
                      </span>
                    </div>

                    <div className="flex items-baseline">
                      <span className="w-4 font-bold text-[#191F28] shrink-0">T</span>
                      <span className="text-[#4E5968] font-mono">{cardData.phone || '02. 518. 0060'}</span>
                    </div>

                    <div className="flex items-baseline">
                      <span className="w-4 font-bold text-[#191F28] shrink-0">F</span>
                      <span className="text-[#4E5968] font-mono">{cardData.fax || '02. 6455. 2483'}</span>
                    </div>

                    <div className="flex items-baseline">
                      <span className="w-4 font-bold text-[#191F28] shrink-0">E</span>
                      <span className="text-[#4E5968] font-mono">{cardData.email || 'jacob@da24.co.kr'}</span>
                    </div>

                    <div className="flex items-baseline">
                      <span className="w-4 font-bold text-[#191F28] shrink-0">A</span>
                      <div className="text-[#4E5968]">
                        <div>{cardData.addressLine1 || '서울시 강남구 테헤란로7길 12'}</div>
                        <div>{cardData.addressLine2 || '허바허바빌딩 3층'}</div>
                      </div>
                    </div>

                    <div className="flex items-baseline pt-0.5">
                      <span className="w-4 font-bold text-[#191F28] shrink-0">W</span>
                      <span className="text-[#4E5968] font-mono">{cardData.website || 'da24.co.kr'}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 3. Printing Guide & Production Specs Box */}
      {/* ============================================================ */}
      <div className="bg-white border border-[#E5E8EB] rounded-[18px] p-6 md:p-8 space-y-4">
        <h3 className="text-[16px] font-bold text-[#191F28] flex items-center gap-2">
          <Info className="w-4 h-4 text-[#003893]" />
          <span>인쇄소 발주 가이드 & 파일 규격</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-2">
          <div className="p-4 rounded-[12px] bg-[#F8F9FA] border border-[#E5E8EB] space-y-1">
            <div className="text-[11px] font-bold text-[#8B95A1] uppercase">규격 (Dimensions)</div>
            <div className="text-[14px] font-bold text-[#191F28]">90 × 50 mm (세로형)</div>
            <div className="text-[11px] text-[#6B7684]">작업(도련) 사이즈 92 × 52 mm</div>
          </div>

          <div className="p-4 rounded-[12px] bg-[#F8F9FA] border border-[#E5E8EB] space-y-1">
            <div className="text-[11px] font-bold text-[#8B95A1] uppercase">색상 (Color Mode)</div>
            <div className="text-[14px] font-bold text-[#191F28]">CMYK 모드</div>
            <div className="text-[11px] text-[#6B7684]">C:100 M:80 Y:0 K:0 (#003893)</div>
          </div>

          <div className="p-4 rounded-[12px] bg-[#F8F9FA] border border-[#E5E8EB] space-y-1">
            <div className="text-[11px] font-bold text-[#8B95A1] uppercase">폰트 (Typography)</div>
            <div className="text-[14px] font-bold text-[#191F28]">Pretendard 아웃라인</div>
            <div className="text-[11px] text-[#6B7684]">전체 곡선 패스화(글자 깨기 완료)</div>
          </div>

          <div className="p-4 rounded-[12px] bg-[#F8F9FA] border border-[#E5E8EB] space-y-1">
            <div className="text-[11px] font-bold text-[#8B95A1] uppercase">권장 용지 (Paper)</div>
            <div className="text-[14px] font-bold text-[#191F28]">랑데뷰 / 반누보 240g+</div>
            <div className="text-[11px] text-[#6B7684]">무광 백색 고급 인쇄 용지</div>
          </div>
        </div>

        <p className="text-[12px] text-[#8B95A1] leading-relaxed pt-1">
          * 성원애드피아, 레드프린팅, 오프린트미, 디티피아 등 모든 국내 상업 인쇄소의 <strong>[명함 주문 &gt; 일러스트/PDF 파일 업로드]</strong>에 바로 접수하실 수 있습니다.
        </p>
      </div>
    </div>
  );
};
