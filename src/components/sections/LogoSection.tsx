import React, { useState } from "react";
import { Download, Copy, Check, CheckCircle2, XCircle, Sparkles, Layers, ShieldCheck, Palette } from "lucide-react";

interface LogoSectionProps {
  mode?: "customer" | "partner";
}

interface LogoVariant {
  id: string;
  name: string;
  filename: string;
  bgType: "white" | "blue" | "dark";
  bgColor: string;
  borderColor: string;
  logoColorName: string;
  svgContent: string;
}

interface LogoGroup {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  recommendedUse: string;
  variants: LogoVariant[];
}

export const LogoSection: React.FC<LogoSectionProps> = ({ mode = "customer" }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // SVG Paths for Daisa Brand Logos
  const PATHS = {
    symbol: "M 8.750 5.080 L 0 10.158 0.003 20.329 L 0.005 30.500 9.127 35.646 L 18.248 40.792 24.374 37.274 C 27.743 35.339, 31.959 32.799, 33.743 31.628 L 36.986 29.500 36.993 19.191 C 36.997 13.040, 36.622 9.115, 36.064 9.461 C 35.549 9.779, 31.303 7.780, 26.629 5.020 C 21.955 2.259, 17.989 0, 17.816 0.001 C 17.642 0.001, 13.563 2.287, 8.750 5.080 M 15.653 7.265 C 14.114 8.390, 14.645 8.945, 20.461 12.290 C 26.441 15.729, 27 16.334, 27 19.365 C 27 21.929, 26.435 22.937, 24.500 23.818 C 22.098 24.913, 22 24.823, 22 21.526 C 22 18.379, 21.489 17.796, 15.816 14.471 C 10.629 11.432, 9.258 11.017, 7.316 11.902 C 5.224 12.855, 5.001 13.612, 5.015 19.729 C 5.024 23.453, 5.361 26.980, 5.765 27.566 C 6.169 28.152, 8.986 30.040, 12.025 31.761 L 17.550 34.889 22.899 31.964 C 30.917 27.579, 31.002 27.461, 30.985 20.628 C 30.976 17.257, 30.639 14.027, 30.235 13.450 C 29.363 12.204, 19.321 6, 18.176 6 C 17.739 6, 16.604 6.569, 15.653 7.265",
    wordmark: "M 0.642 2.250 C 0.317 3.488, 0.504 4.655, 1.059 4.844 C 1.694 5.062, 1.822 7.884, 1.405 12.490 C 0.796 19.203, 0.909 19.881, 2.806 20.896 C 3.940 21.503, 7.373 22, 10.434 22 C 15.704 22, 16 21.867, 16 19.500 C 16 17.204, 15.633 17, 11.500 17 L 7 17 7 12.582 C 7 5.680, 7.547 5, 13.107 5 C 17.660 5, 18 4.826, 18 2.500 C 18 0.032, 17.892 0, 9.617 0 C 1.765 0, 1.196 0.143, 0.642 2.250 M 20.648 1.750 C 20.380 2.712, 19.865 6.650, 19.505 10.500 C 19.144 14.350, 18.609 18.512, 18.316 19.750 C 17.872 21.626, 18.199 22, 20.285 22 C 22.830 22, 24 20.390, 24 16.887 C 24 15.815, 24.675 14.678, 25.500 14.362 C 27.241 13.693, 27.575 8, 25.872 8 C 25.116 8, 24.955 6.680, 25.384 4 C 25.984 0.250, 25.871 0, 23.579 0 C 22.103 0, 20.942 0.693, 20.648 1.750 M 35 1.279 C 31.695 2.930, 29.003 8.494, 29.002 13.677 C 29 17, 29.539 18.279, 31.635 19.927 C 38.560 25.375, 47 19.656, 47 9.517 C 47 4.787, 46.166 3.137, 42.928 1.463 C 39.497 -0.311, 38.241 -0.341, 35 1.279 M 49.160 9.442 C 47.607 22.077, 47.600 22, 50.371 22 C 52.928 22, 52.895 22.122, 54.591 6.250 C 55.249 0.091, 55.222 -0, 52.789 -0 C 50.421 -0, 50.274 0.382, 49.160 9.442 M 64.071 1.867 C 63.522 2.894, 61.289 7.844, 59.111 12.867 L 55.150 22 57.636 22 C 59.702 22, 60.629 20.941, 63.107 15.750 L 66.091 9.500 65.561 15.750 C 65.045 21.831, 65.096 22, 67.436 22 C 70.122 22, 70.462 20.999, 71.519 10 C 71.863 6.425, 72.367 2.712, 72.639 1.750 C 73.382 -0.873, 65.480 -0.765, 64.071 1.867 M 74.591 6.250 C 74.224 9.688, 73.657 14.637, 73.333 17.250 C 72.760 21.862, 72.819 22, 75.371 22 C 77.569 22, 78.003 21.549, 78.015 19.250 C 78.036 15.580, 79.002 14.272, 82 13.851 C 83.875 13.588, 84.579 12.813, 84.816 10.750 C 85.089 8.382, 84.776 8, 82.566 8 C 80.239 8, 80 7.628, 80 4 C 80 0.458, 79.728 -0, 77.629 -0 C 75.459 -0, 75.202 0.529, 74.591 6.250 M 35.067 7.874 C 32.503 12.666, 34.379 17.624, 38.377 16.620 C 41.120 15.932, 42.421 13.007, 41.833 8.852 C 41.383 5.676, 36.612 4.987, 35.067 7.874",
    combination: "M 32.250 5.109 L 24 10.075 24 20.358 L 24 30.642 32.336 35.321 C 36.920 37.894, 41.308 39.992, 42.086 39.982 C 42.864 39.972, 47.002 37.923, 51.283 35.429 L 59.067 30.893 58.783 20.316 L 58.500 9.739 50 4.874 C 45.325 2.199, 41.275 0.040, 41 0.077 C 40.725 0.114, 36.788 2.378, 32.250 5.109 M 39.538 7.348 C 37.844 8.587, 38.195 8.972, 43.847 12.079 C 49.682 15.287, 50 15.655, 50 19.196 C 50 21.906, 49.452 23.223, 48 24 C 46.224 24.951, 45.998 24.759, 45.985 22.285 C 45.964 18.462, 45.329 17.736, 38.805 14.071 C 34.124 11.441, 32.744 11.067, 31.055 11.971 C 29.266 12.928, 29 14.028, 29 20.477 L 29 27.884 35.238 31.400 L 41.476 34.915 L 47.488 31.538 L 53.500 28.161 L 53.500 20.393 L 53.500 12.625 48 9.317 C 41.672 5.510, 41.960 5.577, 39.538 7.348 M 0.642 49.250 C 0.317 50.487, 0.512 51.658, 1.076 51.850 C 1.730 52.073, 1.861 54.636, 1.439 58.918 C 0.579 67.647, 1.738 69, 10.071 69 C 15.691 69, 16 68.873, 16 66.557 C 16 64.399, 15.506 64.079, 11.750 63.807 C 7.722 63.516, 7.483 63.323, 7.176 60.112 C 6.998 58.248, 7.119 55.661, 7.445 54.362 C 7.969 52.275, 8.618 52, 13.019 52 C 17.665 52, 18 51.832, 18 49.500 C 18 47.032, 17.892 47, 9.617 47 C 1.765 47, 1.196 47.143, 0.642 49.250 M 20.648 48.750 C 20.380 49.712, 19.865 53.650, 19.505 57.500 C 19.144 61.350, 18.609 65.513, 18.316 66.750 C 17.872 68.626, 18.199 69, 20.285 69 C 22.929 69, 24 67.391, 24 63.418 C 24 61.935, 24.580 61, 25.500 61 C 26.548 61, 27 59.944, 27 57.500 C 27 55.575, 26.500 54, 25.889 54 C 25.160 54, 25.004 52.794, 25.434 50.500 C 26.041 47.265, 25.903 47, 23.613 47 C 22.105 47, 20.944 47.685, 20.648 48.750 M 32.862 49.832 C 30.188 52.221, 29.620 53.539, 29.228 58.260 C 28.814 63.261, 29.037 64.128, 31.337 66.428 C 36.890 71.981, 45.533 67.900, 46.704 59.172 C 47.480 53.388, 46.402 50.259, 43.035 48.518 C 38.797 46.326, 36.445 46.630, 32.862 49.832 M 49.160 56.442 C 47.607 69.077, 47.600 69, 50.371 69 C 52.928 69, 52.895 69.122, 54.591 53.250 C 55.249 47.091, 55.222 47, 52.789 47 C 50.421 47, 50.274 47.382, 49.160 56.442 M 64.071 48.867 C 63.522 49.894, 61.289 54.844, 59.111 59.867 L 55.150 69 57.621 69 C 59.669 69, 60.601 67.929, 63.063 62.750 L 66.034 56.500 65.532 62.750 C 65.041 68.874, 65.081 69, 67.515 69 C 68.882 69, 70.022 68.888, 70.048 68.750 C 70.074 68.612, 70.663 63.663, 71.356 57.750 L 72.617 47 68.844 47 C 66.183 47, 64.776 47.551, 64.071 48.867 M 74.160 56.442 C 72.598 69.152, 72.582 69, 75.500 69 C 77.477 69, 78 68.495, 78 66.582 C 78 62.647, 79.064 61, 81.607 61 C 82.923 61, 84.037 60.663, 84.082 60.250 C 84.127 59.837, 84.368 58.263, 84.616 56.750 C 85.010 54.355, 84.742 54, 82.534 54 C 80.305 54, 80 53.579, 80 50.500 C 80 47.497, 79.668 47, 77.660 47 C 75.455 47, 75.254 47.540, 74.160 56.442 M 36 54 C 32.719 57.281, 33.813 64, 37.629 64 C 41.274 64, 43.618 56.018, 40.800 53.200 C 39.146 51.546, 38.316 51.684, 36 54"
  };

  const createSvgMarkup = (viewBox: string, path: string, fillHex: string) => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" fill="none" style="width: 100%; height: 100%; max-height: 100%; object-fit: contain;">
  <path d="${path}" fill="${fillHex}" fill-rule="evenodd" />
</svg>
`.trim();

  const SVG_MAP = {
    comboBlue: createSvgMarkup("0 0 86 70", PATHS.combination, "#1219F7"),
    comboDark: createSvgMarkup("0 0 86 70", PATHS.combination, "#191F28"),
    comboWhite: createSvgMarkup("0 0 86 70", PATHS.combination, "#FFFFFF"),

    symbolBlue: createSvgMarkup("0 0 36 41", PATHS.symbol, "#1219F7"),
    symbolDark: createSvgMarkup("0 0 36 41", PATHS.symbol, "#191F28"),
    symbolWhite: createSvgMarkup("0 0 36 41", PATHS.symbol, "#FFFFFF"),

    wordmarkBlue: createSvgMarkup("0 0 86 23", PATHS.wordmark, "#1219F7"),
    wordmarkDark: createSvgMarkup("0 0 86 23", PATHS.wordmark, "#191F28"),
    wordmarkWhite: createSvgMarkup("0 0 86 23", PATHS.wordmark, "#FFFFFF"),
  };

  const handleDownload = (svgContent: string, fileName: string) => {
    const blob = new Blob([svgContent], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopy = (svgContent: string, id: string) => {
    navigator.clipboard.writeText(svgContent);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1500);
  };

  const logoGroups: LogoGroup[] = [
    {
      id: "combination",
      title: "1. 심볼 + 워드마크 (Combination / 조합형 로고)",
      subtitle: "Official Primary Signature",
      description: "다이사 브랜드를 가장 온전하고 명확하게 대표하는 공식 표준 조합입니다. 상단의 헥사곤 큐브 심볼과 하단의 볼드한 '다이사' 한글 워드마크가 완벽한 황금비율로 정렬되어 있습니다.",
      recommendedUse: "앱 스플래시 화면, 서비스 대표 헤더, 옥외 광고물, 온·오프라인 공식 마케팅 배너",
      variants: [
        {
          id: "combo-blue",
          name: "시그니처 블루 조합형",
          filename: "daisa-combination-blue.svg",
          bgType: "white",
          bgColor: "bg-white",
          borderColor: "border-[#E5E8EB]",
          logoColorName: "Signature Blue (#1219F7)",
          svgContent: SVG_MAP.comboBlue,
        },
        {
          id: "combo-dark",
          name: "다크 조합형",
          filename: "daisa-combination-dark.svg",
          bgType: "white",
          bgColor: "bg-[#FAFAFA]",
          borderColor: "border-[#E5E8EB]",
          logoColorName: "Deep Dark (#191F28)",
          svgContent: SVG_MAP.comboDark,
        },
        {
          id: "combo-white",
          name: "화이트 조합형 (반전용)",
          filename: "daisa-combination-white.svg",
          bgType: "blue",
          bgColor: "bg-[#1219F7]",
          borderColor: "border-[#1219F7]",
          logoColorName: "Pure White (#FFFFFF)",
          svgContent: SVG_MAP.comboWhite,
        },
      ],
    },
    {
      id: "symbol",
      title: "2. 심볼 단독형 (Symbol Mark)",
      subtitle: "Hexagon & 3D Cube",
      description: "육각형 프레임과 입체적인 3D 이사 큐브 박스를 형상화한 다이사의 핵심 심볼 그래픽입니다. 작은 공간에서도 강한 주목도와 브랜드 연상 효과를 발휘합니다.",
      recommendedUse: "모바일 앱 아이콘, 웹사이트 파비콘(Favicon), SNS 프로필 아바타, 좁은 UI 헤더 및 푸터",
      variants: [
        {
          id: "symbol-blue",
          name: "시그니처 블루 심볼",
          filename: "daisa-symbol-blue.svg",
          bgType: "white",
          bgColor: "bg-white",
          borderColor: "border-[#E5E8EB]",
          logoColorName: "Signature Blue (#1219F7)",
          svgContent: SVG_MAP.symbolBlue,
        },
        {
          id: "symbol-dark",
          name: "다크 심볼",
          filename: "daisa-symbol-dark.svg",
          bgType: "white",
          bgColor: "bg-[#FAFAFA]",
          borderColor: "border-[#E5E8EB]",
          logoColorName: "Deep Dark (#191F28)",
          svgContent: SVG_MAP.symbolDark,
        },
        {
          id: "symbol-white",
          name: "화이트 심볼 (반전용)",
          filename: "daisa-symbol-white.svg",
          bgType: "blue",
          bgColor: "bg-[#1219F7]",
          borderColor: "border-[#1219F7]",
          logoColorName: "Pure White (#FFFFFF)",
          svgContent: SVG_MAP.symbolWhite,
        },
      ],
    },
    {
      id: "wordmark",
      title: "3. 워드마크 단독형 (Wordmark / 한글 텍스트 로고)",
      subtitle: "Korean Dynamic Wordmark",
      description: "다이사 고유의 스피드감 있는 이탤릭 앵글과 볼드한 웨이트가 결합된 한글 타이포그래피 로고입니다. 텍스트 중심의 신뢰감과 명확한 가독성을 제공합니다.",
      recommendedUse: "상단 네비게이션 바(GNB), 공식 인쇄 서식, 견적 계약서 서명란, 파트너 명함 및 배너",
      variants: [
        {
          id: "wordmark-blue",
          name: "시그니처 블루 워드마크",
          filename: "daisa-wordmark-blue.svg",
          bgType: "white",
          bgColor: "bg-white",
          borderColor: "border-[#E5E8EB]",
          logoColorName: "Signature Blue (#1219F7)",
          svgContent: SVG_MAP.wordmarkBlue,
        },
        {
          id: "wordmark-dark",
          name: "다크 워드마크",
          filename: "daisa-wordmark-dark.svg",
          bgType: "white",
          bgColor: "bg-[#FAFAFA]",
          borderColor: "border-[#E5E8EB]",
          logoColorName: "Deep Dark (#191F28)",
          svgContent: SVG_MAP.wordmarkDark,
        },
        {
          id: "wordmark-white",
          name: "화이트 워드마크 (반전용)",
          filename: "daisa-wordmark-white.svg",
          bgType: "blue",
          bgColor: "bg-[#1219F7]",
          borderColor: "border-[#1219F7]",
          logoColorName: "Pure White (#FFFFFF)",
          svgContent: SVG_MAP.wordmarkWhite,
        },
      ],
    },
  ];

  return (
    <div className="space-y-12 animate-fadeIn pb-16">
      {/* 1. Header */}
      <div className="space-y-3 border-b border-[#E5E8EB] pb-6">
        <div className="flex items-center gap-2">
          <span className="text-[12px] font-bold px-2.5 py-0.5 rounded-full bg-[#E8F3FF] text-[#1219F7]">
            Foundations
          </span>
          <span className="text-[12px] font-medium text-[#8B95A1]">Brand Identity</span>
        </div>
        <h1 className="text-[32px] md:text-[36px] font-black tracking-tight text-[#191F28]">
          Logo
        </h1>
        <p className="text-[15px] md:text-[16px] text-[#6B7684] max-w-3xl leading-relaxed">
          '다이사'의 브랜드 아이덴티티를 형성하는 3가지 공식 로고(심볼+워드마크 조합형, 심볼 단독형, 워드마크 단독형)의 공식 에셋과 배경색별 적용 규칙입니다. 각 로고에 마우스를 올리면 순수 벡터 <strong>.svg 파일 다운로드</strong> 및 코드 복사가 가능합니다.
        </p>
      </div>

      {/* 2. 3대 핵심 로고 인터랙티브 쇼케이스 */}
      <div className="space-y-12">
        {logoGroups.map((group) => (
          <section key={group.id} className="space-y-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h2 className="text-[20px] font-extrabold text-[#191F28]">
                  {group.title}
                </h2>
                <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-[#F2F4F8] text-[#4E5968]">
                  {group.subtitle}
                </span>
              </div>
              <p className="text-[13px] text-[#6B7684]">
                {group.description}
              </p>
              <div className="text-[12px] text-[#1219F7] font-semibold flex items-center gap-1.5 pt-0.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>권장 사용처: {group.recommendedUse}</span>
              </div>
            </div>

            {/* 3 Color Variants Cards (Hover to download) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {group.variants.map((variant) => (
                <div
                  key={variant.id}
                  className="group relative rounded-[14px] border border-[#E5E8EB] overflow-hidden shadow-xs transition-all duration-200 hover:shadow-md hover:border-[#1219F7]/30 flex flex-col justify-between"
                >
                  {/* Visual Canvas Area with Logo (Fixed Aspect & Centered) */}
                  <div
                    className={`h-[170px] ${variant.bgColor} relative flex items-center justify-center p-6 overflow-hidden transition-all duration-200`}
                  >
                    {/* SVG Render (Constrained to canvas) */}
                    <div
                      className="w-full h-full max-w-[130px] max-h-[85px] flex items-center justify-center select-none transition-transform duration-200 group-hover:scale-105"
                      dangerouslySetInnerHTML={{ __html: variant.svgContent }}
                    />

                    {/* Hover Floating Action Bar */}
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2 p-4">
                      <button
                        type="button"
                        onClick={() => handleDownload(variant.svgContent, variant.filename)}
                        className="h-9 px-3.5 rounded-[9px] bg-white text-[#191F28] font-bold text-[12px] flex items-center gap-1.5 shadow-md hover:bg-[#F8F9FA] transition-transform active:scale-95 cursor-pointer"
                      >
                        <Download className="w-3.5 h-3.5 text-[#1219F7]" />
                        <span>SVG 다운로드</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => handleCopy(variant.svgContent, variant.id)}
                        className="h-9 px-3 rounded-[9px] bg-white/90 text-[#191F28] font-bold text-[12px] flex items-center gap-1 shadow-md hover:bg-white transition-transform active:scale-95 cursor-pointer"
                        title="SVG 코드 복사"
                      >
                        {copiedId === variant.id ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span className="text-emerald-600">복사됨</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-[#6B7684]" />
                            <span>코드</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Card Bottom Meta Info */}
                  <div className="p-3 bg-white border-t border-[#F2F4F8] flex items-center justify-between text-[11px]">
                    <div className="space-y-0.5">
                      <div className="font-bold text-[#191F28]">{variant.name}</div>
                      <div className="text-[#8B95A1] font-mono text-[10px]">{variant.filename}</div>
                    </div>
                    <span className="font-mono font-bold px-2 py-0.5 rounded bg-[#F2F4F8] text-[#4E5968]">
                      {variant.logoColorName}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* 3. 배경색별 로고 색상 적용 원칙 (Rules for Background Contrast) */}
      <section className="space-y-4 pt-4 border-t border-[#E5E8EB]">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Palette className="w-5 h-5 text-[#1219F7]" />
            <h2 className="text-[20px] font-extrabold text-[#191F28]">
              배경색에 따른 로고 컬러 적용 원칙
            </h2>
          </div>
          <p className="text-[13px] text-[#6B7684]">
            로고는 어떤 배경 환경에서도 명확한 시인성을 보장받아야 합니다. 배경색에 따라 정해진 로고 컬러 규칙을 엄격히 준수해야 합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          {/* Rule 1: 화이트/라이트 배경 */}
          <div className="bg-white rounded-[14px] border border-[#E5E8EB] p-4.5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[13px] font-bold text-[#191F28]">화이트 / 연회색 배경</span>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700">
                표준 적용
              </span>
            </div>
            <div className="h-[90px] bg-[#FAFAFA] border border-[#E5E8EB] rounded-[10px] flex items-center justify-center p-3 overflow-hidden">
              <div
                className="w-full h-full max-w-[120px] max-h-[56px] flex items-center justify-center select-none"
                dangerouslySetInnerHTML={{ __html: SVG_MAP.comboDark }}
              />
            </div>
            <p className="text-[12px] text-[#4E5968] leading-relaxed">
              기본 흰색(#FFFFFF) 및 밝은 회색(#FAFAFA, #F2F3F6) 배경에서는 <strong>다크(#191F28)</strong> 또는 <strong>시그니처 블루(#1219F7)</strong> 로고를 기본 표준으로 사용합니다.
            </p>
          </div>

          {/* Rule 2: 다이사 블루 배경 (핵심 강조 규칙) */}
          <div className="bg-white rounded-[14px] border-2 border-[#1219F7] p-4.5 space-y-3 shadow-xs">
            <div className="flex items-center justify-between">
              <span className="text-[13px] font-black text-[#1219F7]">파란색(Brand Blue) 배경</span>
              <span className="text-[11px] font-black px-2 py-0.5 rounded bg-[#1219F7] text-white">
                화이트 로고 필수
              </span>
            </div>
            <div className="h-[90px] bg-[#1219F7] rounded-[10px] flex items-center justify-center p-3 shadow-inner overflow-hidden">
              <div
                className="w-full h-full max-w-[120px] max-h-[56px] flex items-center justify-center select-none"
                dangerouslySetInnerHTML={{ __html: SVG_MAP.comboWhite }}
              />
            </div>
            <p className="text-[12px] text-[#191F28] font-medium leading-relaxed">
              🚨 <strong>배경이 파란색(#1219F7)일 경우</strong>에는 반드시 <strong>화이트(#FFFFFF) 로고</strong>만 사용해야 합니다. (블랙 로고 절대 사용 금지)
            </p>
          </div>

          {/* Rule 3: 다크/블랙 배경 */}
          <div className="bg-white rounded-[14px] border border-[#E5E8EB] p-4.5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[13px] font-bold text-[#191F28]">다크 / 블랙 배경</span>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700">
                화이트 로고
              </span>
            </div>
            <div className="h-[90px] bg-[#191F28] rounded-[10px] flex items-center justify-center p-3 overflow-hidden">
              <div
                className="w-full h-full max-w-[120px] max-h-[56px] flex items-center justify-center select-none"
                dangerouslySetInnerHTML={{ __html: SVG_MAP.comboWhite }}
              />
            </div>
            <p className="text-[12px] text-[#4E5968] leading-relaxed">
              어두운 배경(#191F28, #121212)이나 딤드 오버레이 위에서는 시인성을 확보하기 위해 <strong>화이트(#FFFFFF) 로고</strong>를 적용합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 4. 같이 쓸 때의 조합 규정 및 여백 보호 구역 (Combination & Clear Space) */}
      <section className="space-y-4 pt-4 border-t border-[#E5E8EB]">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-[#1219F7]" />
            <h2 className="text-[20px] font-extrabold text-[#191F28]">
              로고 조합 및 여백 보호 구역 (Clear Space)
            </h2>
          </div>
          <p className="text-[13px] text-[#6B7684]">
            심볼과 텍스트를 함께 배치할 때 준수해야 할 비율과 독립 여백 규격입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Col 1: Clear Space Blueprint */}
          <div className="bg-white rounded-[14px] border border-[#E5E8EB] p-5 space-y-3">
            <h3 className="text-[14px] font-extrabold text-[#191F28] flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#1219F7]" />
              여백 보호 구역 (Clear Space)
            </h3>
            <div className="h-[140px] bg-[#F8F9FA] rounded-[10px] border border-dashed border-[#1219F7]/30 relative flex items-center justify-center p-6 overflow-hidden">
              {/* Outer boundary guides */}
              <div className="absolute inset-4 border border-dashed border-[#1219F7]/40 rounded-[6px] pointer-events-none" />
              <div className="absolute top-1.5 left-2 text-[8px] font-mono font-bold text-[#1219F7]">24px Safe</div>
              <div className="absolute bottom-1.5 right-2 text-[8px] font-mono font-bold text-[#1219F7]">24px Safe</div>

              {/* Logo in center */}
              <div
                className="w-full h-full max-w-[110px] max-h-[64px] relative z-10 flex items-center justify-center select-none"
                dangerouslySetInnerHTML={{ __html: SVG_MAP.comboDark }}
              />
            </div>
            <p className="text-[12px] text-[#6B7684] leading-relaxed">
              로고 주변에는 최소 <strong>심볼 높이의 25% (20px 이상)</strong>의 여백을 확보해야 하며, 다른 텍스트, 사진, 그래픽 요소가 이 영역을 침범할 수 없습니다.
            </p>
          </div>

          {/* Col 2: Lockup & Minimum Size */}
          <div className="bg-white rounded-[14px] border border-[#E5E8EB] p-5 space-y-3">
            <h3 className="text-[14px] font-extrabold text-[#191F28]">
              최소 권장 크기 (Minimum Size)
            </h3>
            <div className="h-[140px] bg-[#F8F9FA] rounded-[10px] border border-[#E5E8EB] p-4 flex flex-col justify-around">
              <div className="flex items-center justify-between text-[12px]">
                <span className="font-bold text-[#191F28]">조합형 시그니처 (Symbol + Text)</span>
                <span className="font-mono font-bold text-[#1219F7]">최소 높이 24px (권장 32px)</span>
              </div>
              <div className="flex items-center justify-between text-[12px]">
                <span className="font-bold text-[#191F28]">심볼 단독형 (Symbol Mark)</span>
                <span className="font-mono font-bold text-[#1219F7]">최소 16x16px (파비콘 규격)</span>
              </div>
              <div className="flex items-center justify-between text-[12px]">
                <span className="font-bold text-[#191F28]">워드마크 (Wordmark)</span>
                <span className="font-mono font-bold text-[#1219F7]">최소 높이 14px</span>
              </div>
            </div>
            <p className="text-[12px] text-[#6B7684] leading-relaxed">
              화면 해상도나 인쇄물에서 로고가 뭉개지거나 식별되지 않는 것을 방지하기 위해 상기 명시된 최소 크기 규격을 엄격히 지켜야 합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Do & Don't (금지 규정) */}
      <section className="space-y-4 pt-4 border-t border-[#E5E8EB]">
        <div className="space-y-1">
          <h2 className="text-[20px] font-extrabold text-[#191F28]">
            Do & Don't (오용 사례 방지)
          </h2>
          <p className="text-[13px] text-[#6B7684]">
            브랜드 가치를 훼손할 수 있는 형태 왜곡이나 색상 오용을 엄격히 금지합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: DO */}
          <div className="bg-white rounded-[12px] border border-[#E5E8EB] p-3.5 space-y-2">
            <div className="flex items-center gap-1.5 text-emerald-600 font-bold text-[12px]">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>DO: 블루 배경 + 화이트 로고</span>
            </div>
            <div className="h-[76px] bg-[#1219F7] rounded-[8px] flex items-center justify-center p-2.5 overflow-hidden">
              <div className="w-full h-full max-w-[90px] max-h-[48px] flex items-center justify-center" dangerouslySetInnerHTML={{ __html: SVG_MAP.comboWhite }} />
            </div>
            <p className="text-[11px] text-[#6B7684]">
              블루 배경에서는 높은 대비비를 위해 100% 화이트 로고를 사용합니다.
            </p>
          </div>

          {/* Card 2: DONT (Blue background + Black logo) */}
          <div className="bg-white rounded-[12px] border border-red-200 p-3.5 space-y-2">
            <div className="flex items-center gap-1.5 text-red-600 font-bold text-[12px]">
              <XCircle className="w-4 h-4 shrink-0" />
              <span>DON'T: 파란 배경에 검정 로고</span>
            </div>
            <div className="h-[76px] bg-[#1219F7] rounded-[8px] flex items-center justify-center p-2.5 overflow-hidden opacity-60">
              <div className="w-full h-full max-w-[90px] max-h-[48px] flex items-center justify-center" dangerouslySetInnerHTML={{ __html: SVG_MAP.comboDark }} />
            </div>
            <p className="text-[11px] text-red-600 font-medium">
              🚨 파란 배경에 검정 로고 사용을 절대 금지합니다. (시인성 훼손)
            </p>
          </div>

          {/* Card 3: DONT (Distortion) */}
          <div className="bg-white rounded-[12px] border border-red-200 p-3.5 space-y-2">
            <div className="flex items-center gap-1.5 text-red-600 font-bold text-[12px]">
              <XCircle className="w-4 h-4 shrink-0" />
              <span>DON'T: 비율 왜곡 금지</span>
            </div>
            <div className="h-[76px] bg-[#F2F4F8] rounded-[8px] flex items-center justify-center p-2.5 overflow-hidden">
              <div className="w-[85px] h-[40px] flex items-center justify-center scale-x-135 scale-y-70" dangerouslySetInnerHTML={{ __html: SVG_MAP.comboDark }} />
            </div>
            <p className="text-[11px] text-red-600 font-medium">
              가로세로 비율(종횡비)을 임의로 늘리거나 줄여서는 안 됩니다.
            </p>
          </div>

          {/* Card 4: DONT (Arbitrary Color & Shadow) */}
          <div className="bg-white rounded-[12px] border border-red-200 p-3.5 space-y-2">
            <div className="flex items-center gap-1.5 text-red-600 font-bold text-[12px]">
              <XCircle className="w-4 h-4 shrink-0" />
              <span>DON'T: 임의 색상 및 그림자</span>
            </div>
            <div className="h-[76px] bg-[#F2F4F8] rounded-[8px] flex items-center justify-center p-2.5 overflow-hidden">
              <div className="w-[85px] h-[45px] flex items-center justify-center [filter:drop-shadow(0_2px_4px_rgba(239,68,68,0.7))] [&>svg_path]:fill-red-500" dangerouslySetInnerHTML={{ __html: SVG_MAP.comboDark }} />
            </div>
            <p className="text-[11px] text-red-600 font-medium">
              지정되지 않은 색상 변경이나 외곽선, 그림자 효과를 적용하지 않습니다.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LogoSection;
