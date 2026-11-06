import React, { useState } from 'react';
import { COLOR_TOKENS } from '../../tokens';
import { Copy, Check } from 'lucide-react';

export const ColorsShowcase: React.FC = () => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 1500);
  };

  const categories = [
    { key: 'main', title: 'Main Colors (브랜드 & 키컬러)' },
    { key: 'text', title: 'Text Colors (텍스트 계층)' },
    { key: 'etc', title: 'Etc Colors (테두리, 구분선, 비활성 배경)' },
    { key: 'system', title: 'System Colors (시스템 피드백 & 딤드)' },
  ] as const;

  return (
    <div className="space-y-10">
      <div>
        <h2 className="text-[24px] font-bold text-text-01 leading-[34px] tracking-da24">
          Color Palette
        </h2>
        <p className="mt-2 text-[16px] text-text-03 leading-[24px] tracking-da24">
          다이사(da24)의 브랜드 정체성과 명확한 위계를 전달하는 핵심 컬러 토큰 시스템입니다.
        </p>
      </div>

      {categories.map((cat) => {
        const tokens = COLOR_TOKENS.filter((t) => t.category === cat.key);
        return (
          <div key={cat.key} className="space-y-4">
            <h3 className="text-[18px] font-bold text-text-01 tracking-da24 border-b border-etc-03 pb-2">
              {cat.title}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {tokens.map((token) => {
                const isCopied = copiedHex === token.hex;
                return (
                  <div
                    key={token.name}
                    className="group bg-white border border-etc-02 rounded-[12px] overflow-hidden hover:border-main-02 hover:shadow-md transition-all duration-200"
                  >
                    {/* Swatch */}
                    <div
                      className="h-28 w-full relative p-3 flex flex-col justify-between"
                      style={{ backgroundColor: token.hex }}
                    >
                      <div className="flex justify-between items-start">
                        <span
                          className="px-2 py-0.5 rounded text-[12px] font-bold backdrop-blur-sm bg-black/20 text-white"
                        >
                          {token.name}
                        </span>
                        <button
                          onClick={() => copyToClipboard(token.hex)}
                          className="p-1.5 rounded-md bg-white/80 hover:bg-white text-text-01 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm"
                          title="HEX 코드 복사"
                        >
                          {isCopied ? <Check className="w-3.5 h-3.5 text-main-01" /> : <Copy className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                      <div className="text-[14px] font-mono font-bold" style={{ color: token.textColor || '#fff' }}>
                        {token.hex}
                      </div>
                    </div>

                    {/* Metadata */}
                    <div className="p-3.5 space-y-1.5">
                      <div className="flex items-center justify-between text-[12px] text-text-04">
                        <span>CSS 변수</span>
                        <code className="text-main-01 bg-main-04 px-1 rounded">{token.variable}</code>
                      </div>
                      <p className="text-[14px] text-text-02 leading-[20px] font-medium tracking-da24">
                        {token.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
