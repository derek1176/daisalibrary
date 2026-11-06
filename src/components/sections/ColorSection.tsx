import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface ColorRow {
  category: string;
  token: string;
  value: string;
  isTransparent?: boolean;
}

export const ColorSection: React.FC<{ mode?: 'customer' | 'partner' }> = ({ mode = 'customer' }) => {
  const isPartner = mode === 'partner';
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  const handleCopy = (value: string, token: string) => {
    navigator.clipboard.writeText(value);
    setCopiedToken(token);
    setTimeout(() => setCopiedToken(null), 1500);
  };

  // 고객향 컬러 테이블 데이터 (Category / Token / Value)
  const customerColors: { category: string; items: { token: string; value: string; isTransparent?: boolean }[] }[] = [
    {
      category: 'Common',
      items: [
        { token: 'white', value: '#FFFFFF' },
        { token: 'black', value: '#000000' },
        { token: 'transparent', value: 'transparent', isTransparent: true },
      ],
    },
    {
      category: 'Brand',
      items: [
        { token: 'main-01', value: '#1219F7' },
        { token: 'main-02', value: '#595EF9' },
        { token: 'main-04', value: '#F4F5FF' },
      ],
    },
    {
      category: 'Text',
      items: [
        { token: 'text-01', value: '#121212' },
        { token: 'text-02', value: '#333333' },
        { token: 'text-03', value: '#666666' },
        { token: 'text-04', value: '#888888' },
      ],
    },
    {
      category: 'Border & BG',
      items: [
        { token: 'etc-02', value: '#D7DBE2' },
        { token: 'etc-03', value: '#EBEEF2' },
        { token: 'etc-04', value: '#F7F8FA' },
      ],
    },
    {
      category: 'Feedback',
      items: [
        { token: 'error', value: '#F34766' },
        { token: 'dimmed', value: 'rgba(0, 0, 0, 0.60)' },
      ],
    },
  ];

  // 파트너향 컬러 테이블 데이터 (Category / Token / Value)
  const partnerColors: { category: string; items: { token: string; value: string; isTransparent?: boolean }[] }[] = [
    {
      category: 'Common',
      items: [
        { token: 'white', value: '#FFFFFF' },
        { token: 'black', value: '#000000' },
        { token: 'transparent', value: 'transparent', isTransparent: true },
      ],
    },
    {
      category: 'Brand',
      items: [
        { token: 'main-01', value: '#1219F7' },
        { token: 'main-02', value: '#595EF9' },
        { token: 'main-04', value: '#F4F5FF' },
      ],
    },
    {
      category: 'Partner Sub',
      items: [
        { token: 'sub-01', value: '#F7D915' },
        { token: 'sub-02', value: '#F34766' },
      ],
    },
    {
      category: 'Text',
      items: [
        { token: 'text-01', value: '#121212' },
        { token: 'text-02', value: '#333333' },
        { token: 'text-03', value: '#666666' },
        { token: 'text-04', value: '#888888' },
      ],
    },
    {
      category: 'Border & BG',
      items: [
        { token: 'etc-01', value: '#C4C9D1' },
        { token: 'etc-02', value: '#D7DBE2' },
        { token: 'etc-03', value: '#EBEEF2' },
        { token: 'etc-04', value: '#F7F8FA' },
        { token: 'etc-05', value: '#FAFAFA' },
      ],
    },
    {
      category: 'Feedback',
      items: [
        { token: 'dimmed', value: 'rgba(0, 0, 0, 0.60)' },
      ],
    },
  ];

  const colorGroups = isPartner ? partnerColors : customerColors;

  return (
    <div className="space-y-6">
      {/* Page Header (심플 영문 타이틀만) */}
      <div className="border-b pb-4 border-[#E5E8EB]">
        <h2 className="text-[28px] md:text-[32px] font-extrabold tracking-tight text-[#191F28]">
          Colors
        </h2>
      </div>

      {/* Category / Token / Value 미니멀 테이블 (첨부파일 스타일) */}
      <div className="bg-white rounded-[16px] border border-[#E5E8EB] overflow-hidden shadow-xs">
        {/* Table Header */}
        <div className="grid grid-cols-12 px-6 py-3.5 border-b border-[#E5E8EB] text-[13px] font-semibold text-[#8B95A1] bg-[#FAFAFB]">
          <div className="col-span-3">Category</div>
          <div className="col-span-6">Token</div>
          <div className="col-span-3 text-right">Value</div>
        </div>

        {/* Table Rows */}
        <div className="divide-y divide-[#F2F4F6]">
          {colorGroups.map((group) => (
            <div key={group.category} className="divide-y divide-[#F8F9FA]">
              {group.items.map((item, index) => {
                const isCopied = copiedToken === item.token;
                return (
                  <div
                    key={item.token}
                    onClick={() => handleCopy(item.value, item.token)}
                    className="grid grid-cols-12 px-6 py-3 items-center text-[13px] hover:bg-[#F9FAFB] transition-colors cursor-pointer group select-none"
                    title="클릭하여 값 복사"
                  >
                    {/* 1. Category (첫 줄에만 표시) */}
                    <div className="col-span-3 text-[#191F28] font-medium">
                      {index === 0 ? group.category : ''}
                    </div>

                    {/* 2. Token (컬러 스와치 + 토큰명) */}
                    <div className="col-span-6 flex items-center gap-3 font-mono text-[13px] text-[#333D4B]">
                      <div
                        className="w-4 h-4 rounded-[3px] border border-black/10 shrink-0 shadow-2xs relative"
                        style={{
                          backgroundColor: item.value,
                          backgroundImage: item.isTransparent
                            ? 'repeating-conic-gradient(#E5E8EB 0% 25%, #FFFFFF 0% 50%) 50% / 8px 8px'
                            : undefined,
                        }}
                      />
                      <span className="font-sans font-medium text-[#191F28] group-hover:text-[#1219F7] transition-colors">
                        {item.token}
                      </span>
                    </div>

                    {/* 3. Value (Hex 코드) */}
                    <div className="col-span-3 text-right font-mono text-[13px] text-[#4E5968] flex items-center justify-end gap-1.5">
                      <span>{item.value}</span>
                      {isCopied ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      ) : (
                        <Copy className="w-3.5 h-3.5 text-[#8B95A1] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColorSection;