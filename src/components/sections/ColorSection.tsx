import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { CUSTOMER_COLORS, CUSTOMER_COLOR_USAGES } from '../../data/customerRules';
import { PARTNER_COLORS, PARTNER_COLOR_USAGES } from '../../data/partnerRules';

export const ColorSection: React.FC<{ mode?: 'customer' | 'partner' }> = ({ mode = 'customer' }) => {
  const isPartner = mode === 'partner';
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  const handleCopy = (value: string, token: string) => {
    navigator.clipboard.writeText(value);
    setCopiedToken(token);
    setTimeout(() => setCopiedToken(null), 1500);
  };

  const colors = isPartner ? PARTNER_COLORS : CUSTOMER_COLORS;
  const usages: Record<string, string> = isPartner ? PARTNER_COLOR_USAGES : CUSTOMER_COLOR_USAGES;
  const entries = Object.entries(colors);
  const colorGroups = [
    { category: 'Brand', prefix: 'main-' },
    { category: 'Sub', prefix: 'sub-' },
    { category: 'Text', prefix: 'text-' },
    { category: 'Border & BG', prefix: 'etc-' },
    { category: 'System', prefix: 'system-' },
    { category: 'Overlay', prefix: 'dimmed' },
  ].map(group => ({
    category: group.category,
    items: entries.filter(([token]) => token.startsWith(group.prefix))
      .map(([token, value]) => ({ token, value, usage: usages[token] })),
  }));

  return (
    <div className="space-y-6">
      {/* Page Header (심플 영문 타이틀만) */}
      <div className="border-b pb-4 border-[#E5E8EB]">
        <h2 className="text-[28px] md:text-[32px] font-extrabold tracking-tight text-[#191F28]">
          Colors
        </h2>
      </div>

      {/* Category / Token / Value / Description 테이블 */}
      <div className="bg-white rounded-[16px] overflow-hidden shadow-xs border border-[#E5E8EB]">
        {/* Table Header */}
        <div className="grid grid-cols-12 gap-2 px-6 py-3.5 border-b border-[#E5E8EB] text-[13px] font-semibold text-[#8B95A1] bg-[#FAFAFB]">
          <div className="col-span-2">Category</div>
          <div className="col-span-3">Token</div>
          <div className="col-span-2">Value</div>
          <div className="col-span-5">Description</div>
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
                    onKeyDown={event => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        handleCopy(item.value, item.token);
                      }
                    }}
                    role="button"
                    tabIndex={0}
                    className="grid grid-cols-12 gap-2 px-6 py-3 items-center text-[13px] hover:bg-[#F9FAFB] transition-colors cursor-pointer group select-none"
                    data-color-token={item.token}
                    title="클릭하여 HEX 색상 코드 복사"
                  >
                    {/* 1. Category (첫 줄에만 표시) */}
                    <div className="col-span-2 text-[#191F28] font-medium">
                      {index === 0 ? group.category : ''}
                    </div>

                    {/* 2. Token (컬러 스와치 + 토큰명) */}
                    <div className="col-span-3 flex items-center gap-2.5 font-mono text-[13px] text-[#333D4B]">
                      <div
                        className="w-4 h-4 rounded-[3px] border border-black/10 shrink-0 shadow-2xs relative"
                        style={{
                          backgroundColor: item.value,
                        }}
                      />
                      <span className="font-sans font-medium text-[#191F28] group-hover:text-[#1219F7] transition-colors truncate">
                        {item.token}
                      </span>
                    </div>

                    {/* 3. Value (Hex 코드 - Token 바로 옆에 좁은 간격으로 배치) */}
                    <div className="col-span-2 font-mono text-[13px] text-[#4E5968] flex items-center gap-1.5">
                      <span>{item.value}</span>
                      {isCopied ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      ) : (
                        <Copy className="w-3.5 h-3.5 text-[#8B95A1] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                      )}
                    </div>

                    {/* 4. Description (우측 끝에 상시 표시되는 디스크립션 항목) */}
                    <div className="col-span-5 text-[12.5px] text-[#6B7684] truncate" title={item.usage}>
                      {item.usage || '-'}
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
