import React, { useState, useMemo } from "react";
import JSZip from "jszip";
import { Ban, Check, Download, Search } from "lucide-react";
import { systemIcons, type CategoryType } from "../../data/iconCatalog";
import { getIconUrl, renderIconSvg } from "../../lib/iconAssets";

export const IconSection: React.FC<{ mode?: 'customer' | 'partner' }> = ({ mode = 'customer' }) => {
  // 파트너향도 고객향과 동일하게 눈이 편안한 라이트모드로 통일
  const isDark = false;
  const [activeSize, setActiveSize] = useState<"24" | "20" | "16">("24");
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>("전체");
  const [searchQuery, setSearchQuery] = useState("");
  const [downloadedName, setDownloadedName] = useState<string | null>(null);

  const sizePixel = parseInt(activeSize, 10);

  const filteredIcons = useMemo(() => {
    return systemIcons.filter((item) => {
      const matchCategory =
        selectedCategory === "전체" || item.category === selectedCategory;
      const matchSearch =
        searchQuery === "" ||
        item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [systemIcons, selectedCategory, searchQuery]);

  const downloadSvgFile = (name: string) => {
    const link = document.createElement("a");
    link.href = getIconUrl(name, sizePixel);
    link.download = `daisa-icon-${name.toLowerCase()}-${sizePixel}px.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloadedName(name);
    setTimeout(() => setDownloadedName(null), 1500);
  };

  const [isZipping, setIsZipping] = useState(false);

  // 300종 전체 아이콘 .zip 일괄 다운로드
  const handleDownloadAll = async () => {
    setIsZipping(true);
    try {
      const zip = new JSZip();
      const folder = zip.folder(`daisa-icons-${activeSize}px`);

      systemIcons.forEach((item) => {
        const cleanSvg = renderIconSvg(item, sizePixel);
        folder?.file(`daisa-icon-${item.name.toLowerCase()}-${activeSize}px.svg`, cleanSvg);
      });

      const content = await zip.generateAsync({ type: "blob" });
      const url = URL.createObjectURL(content);
      const link = document.createElement("a");
      link.href = url;
      link.download = `daisa_icons_all_${activeSize}px.zip`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Failed to generate zip:", err);
    } finally {
      setIsZipping(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header (심플 영문 타이틀만) */}
      <div className="border-b pb-4 border-[#E5E8EB]">
        <h2 className="text-[28px] md:text-[32px] font-extrabold tracking-tight text-[#191F28]">
          Icons
        </h2>
      </div>

      {/* 1단: 규격 + 이모지 금지 조화로운 단일 슬림 바 */}
      <div className="bg-white rounded-[14px] px-4 py-2.5 shadow-xs border border-[#E5E8EB] flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-[12px]">
        <div className="flex items-center gap-3 text-[#4E5968]">
          <div className="flex items-center gap-1.5">
            <span className="font-bold text-[#191F28]">규격:</span>
            <span>24px (20·16px)</span>
          </div>
          <span className="text-[#D1D6DB]">·</span>
          <div className="flex items-center gap-1.5">
            <span className="font-bold text-[#191F28]">두께:</span>
            <span>1.5px</span>
          </div>
          <span className="text-[#D1D6DB]">·</span>
          <div className="flex items-center gap-1.5">
            <span className="font-bold text-[#191F28]">마감:</span>
            <span>Round</span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-[#F34766] font-semibold bg-[#FFF5F6] px-2.5 py-1 rounded-[8px]">
          <Ban className="w-3.5 h-3.5 shrink-0" />
          <span>이모지 사용 엄격 금지 (공식 SVG 전용)</span>
        </div>
      </div>

      {/* 2단: 검색 + 카테고리 탭 + 사이즈 컨트롤 바 (흰배경 + 테두리 + 그림자) */}
      <div className="bg-white rounded-[16px] p-3.5 space-y-3 shadow-xs border border-[#E5E8EB]">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-[12px] overflow-x-auto scrollbar-none bg-[#F2F4F6]">
            {(["전체", "이사·청소·파트너 서비스", "앱 필수 공통 컨트롤러"] as const).map((cat) => {
              const count = cat === "전체" ? systemIcons.length : systemIcons.filter(item => item.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-[9px] text-[12px] font-bold transition-all whitespace-nowrap ${
                    selectedCategory === cat
                      ? 'bg-white text-[#191F28] shadow-2xs'
                      : 'text-[#6B7684] hover:text-[#191F28]'
                  }`}
                >
                  {cat} ({count})
                </button>
              );
            })}
          </div>

          {/* Size Switcher */}
          <div className="flex items-center gap-1 p-1 rounded-[10px] bg-[#F2F4F6] self-end lg:self-auto">
            {(["24", "20", "16"] as const).map((s) => (
              <button
                key={s}
                onClick={() => setActiveSize(s)}
                className={`px-2.5 py-1 rounded-[7px] text-[12px] font-bold transition-all ${
                  activeSize === s
                    ? 'bg-white text-[#191F28] shadow-2xs'
                    : 'text-[#6B7684] hover:text-[#191F28]'
                }`}
              >
                {s}px
              </button>
            ))}
          </div>
        </div>

        {/* Search Box */}
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8B95A1]" />
          <input
            type="text"
            placeholder="300종 아이콘 이름 또는 설명 검색 (예: 트럭, 견적, 설정, 검색, 결제 등)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-[10px] pl-10 pr-10 py-2 text-[13px] outline-none transition-all bg-[#F9FAFB] text-[#191F28] placeholder-[#8B95A1] focus:bg-white focus:ring-2 focus:ring-[#1219F7]/15"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[12px] text-[#8B95A1] hover:text-[#191F28]"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Results Counter & Download All Button */}
      <div className={`flex items-center justify-between px-1 text-[13px] flex-wrap gap-2 ${isDark ? 'text-[#9E9EA4]' : 'text-[#6B7684]'}`}>
        <div>
          검색 결과: <strong className={isDark ? 'text-white' : 'text-[#191F28]'}>{filteredIcons.length}개</strong>
          {searchQuery && <span className={isDark ? 'text-[#65656E]' : 'text-[#8B95A1]'}> (&apos;{searchQuery}&apos; 검색 중)</span>}
        </div>

        <div className="flex items-center gap-3">
          <span className={`text-[12px] hidden sm:inline ${isDark ? 'text-[#65656E]' : 'text-[#8B95A1]'}`}>
            공식 원본 우선 · 카드 클릭 시 <strong>.{activeSize}px.svg</strong> 다운로드
          </span>

          {/* 작게 전체 아이콘 다운로드할 수 있는 버튼 */}
          <button
            type="button"
            onClick={handleDownloadAll}
            disabled={isZipping}
            className="h-[30px] px-2.5 rounded-[8px] bg-white text-[#1219F7] hover:bg-[#EEF2FF] shadow-2xs text-[12px] font-bold flex items-center gap-1.5 transition-all cursor-pointer disabled:opacity-50 select-none"
            title="공식 300종 전체 아이콘 SVG를 .zip으로 압축 다운로드합니다."
          >
            <Download className="w-3.5 h-3.5" />
            <span>{isZipping ? '압축 생성 중...' : '전체 아이콘 다운로드 (.zip)'}</span>
          </button>
        </div>
      </div>

        {/* Icon Grid (Pure Clean Outline Icons) */}
        {filteredIcons.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
            {filteredIcons.map((item) => {
              const Icon = item.icon;
              const isDownloaded = downloadedName === item.name;
              return (
                <div
                  key={`${item.category}-${item.name}`}
                  onClick={() => downloadSvgFile(item.name)}
                  title={`${item.label} (${item.name}) SVG 다운로드`}
                  className="group p-4 rounded-[16px] bg-white border border-[#E5E8EB] hover:border-[#1219F7] shadow-xs hover:shadow-md flex flex-col items-center justify-center gap-2 transition-all cursor-pointer relative select-none"
                >
                  {/* Category Tag on Top Right */}
                  <span className={`absolute top-2 right-2 text-[9px] font-bold px-1.5 py-0.5 rounded-full ${
                    item.category === "이사·청소·파트너 서비스"
                      ? isDark ? 'bg-[#0C234F] text-[#4B89FF]' : 'bg-[#E8F3FF] text-[#1B64DA]'
                      : isDark ? 'bg-[#292832] text-[#8B8B94]' : 'bg-[#F2F4F6] text-[#8B95A1]'
                  }`}>
                    {item.category === "이사·청소·파트너 서비스" ? "서비스/파트너" : "공통"}
                  </span>

                  {/* Clean Stroke Icon */}
                  <div className={`w-12 h-12 rounded-[10px] flex items-center justify-center transition-colors mt-2 ${
                    isDark
                      ? 'bg-[#141319] group-hover:bg-[#25242E] text-white group-hover:text-[#4B89FF]'
                      : 'bg-[#FAFBFD] group-hover:bg-[#E8F3FF] text-[#191F28] group-hover:text-[#1219F7]'
                  }`}>
                    <Icon size={sizePixel} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
                  </div>

                  <div className="text-center w-full">
                    <div className={`text-[12px] font-bold truncate transition-colors ${
                      isDark ? 'text-white group-hover:text-[#4B89FF]' : 'text-[#191F28] group-hover:text-[#1219F7]'
                    }`}>
                      {item.label}
                    </div>
                    <div className={`text-[10px] font-mono truncate ${isDark ? 'text-[#65656E]' : 'text-[#8B95A1]'}`}>
                      {item.name}
                    </div>
                  </div>

                  {/* Download notification overlay */}
                  {isDownloaded && (
                    <div className="absolute inset-0 bg-[#1219F7] text-white rounded-[16px] flex flex-col items-center justify-center gap-1 text-[11px] font-bold animate-fadeIn z-20 shadow-md">
                      <Check className="w-4 h-4 animate-bounce" />
                      <span>SVG 다운로드 완료</span>
                    </div>
                  )}

                  {/* Hover Overlay: Subtle Blur + Download Icon */}
                  <div
                    className={`absolute inset-0 rounded-[16px] opacity-0 group-hover:opacity-100 transition-all duration-200 flex flex-col items-center justify-center gap-1.5 z-10 pointer-events-none ${
                      isDark
                        ? 'bg-[#191F28]/80 backdrop-blur-[2px]'
                        : 'bg-white/85 backdrop-blur-[2px]'
                    }`}
                  >
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center shadow-xs transform scale-90 group-hover:scale-100 transition-transform ${
                        isDark ? 'bg-[#4B89FF] text-white' : 'bg-[#1219F7] text-white'
                      }`}
                    >
                      <Download className="w-4 h-4" />
                    </div>
                    <span
                      className={`text-[11px] font-bold ${
                        isDark ? 'text-white' : 'text-[#1219F7]'
                      }`}
                    >
                      SVG 다운로드
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className={`rounded-[18px] border p-12 text-center space-y-2 ${
            isDark ? 'bg-[#1C1B22] border-[#26252D]' : 'bg-white border-[#E5E8EB]'
          }`}>
            <Search className="w-8 h-8 text-[#8B95A1] mx-auto opacity-50" />
            <h4 className={`text-[15px] font-bold ${isDark ? 'text-white' : 'text-[#191F28]'}`}>일치하는 아이콘이 없습니다</h4>
            <p className={`text-[13px] ${isDark ? 'text-[#9E9EA4]' : 'text-[#6B7684]'}`}>
              다른 검색어로 다시 검색해 보세요.
            </p>
          </div>
        )}

      <div className="flex flex-wrap items-center gap-3 text-[14px] text-[#1219F7]">
        <a href="/icons/manifest.json" target="_blank" rel="noreferrer" className="underline">
          AI용 아이콘 목록 (JSON)
        </a>
        <a href="/icons/README.md" target="_blank" rel="noreferrer" className="underline">
          고정 SVG 주소 사용 안내 · 검색 후 적합한 원본이 없을 때만 제작
        </a>
      </div>
    </div>
  );
};
