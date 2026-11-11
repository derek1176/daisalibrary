import React, { useEffect, useId, useState } from 'react';
import { createPortal } from 'react-dom';
import { Check, Copy } from 'lucide-react';
import { CUSTOMER_COLORS, CUSTOMER_COLOR_USAGES } from '../../data/customerRules';
import { PARTNER_COLORS, PARTNER_COLOR_USAGES } from '../../data/partnerRules';

export const ColorSection: React.FC<{ mode?: 'customer' | 'partner' }> = ({ mode = 'customer' }) => {
  const isPartner = mode === 'partner';
  const [copiedToken, setCopiedToken] = useState<string | null>(null);
  const tooltipId = useId();
  const [tooltip, setTooltip] = useState<{ token: string; left: number; top: number; above: boolean } | null>(null);

  useEffect(() => {
    const hide = () => setTooltip(null);
    hide();
    window.addEventListener('scroll', hide, true);
    window.addEventListener('resize', hide);
    return () => {
      window.removeEventListener('scroll', hide, true);
      window.removeEventListener('resize', hide);
    };
  }, [mode]);

  const showUsage = (element: HTMLElement, token: string) => {
    const rect = element.getBoundingClientRect();
    const width = Math.min(320, window.innerWidth - 24);
    const above = rect.top >= 80;
    setTooltip({
      token,
      left: Math.max(12, Math.min(rect.left + rect.width / 4, window.innerWidth - width - 12)),
      top: above ? rect.top - 8 : rect.bottom + 8,
      above,
    });
  };

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

      {/* Category / Token / Value 미니멀 테이블 (첨부파일 스타일) */}
      <div className="bg-white rounded-[16px] overflow-hidden shadow-xs border border-[#E5E8EB]">
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
                    onMouseEnter={event => showUsage(event.currentTarget, item.token)}
                    onMouseLeave={() => setTooltip(null)}
                    onFocus={event => showUsage(event.currentTarget, item.token)}
                    onBlur={() => setTooltip(null)}
                    onKeyDown={event => {
                      if (event.key === 'Escape') setTooltip(null);
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        handleCopy(item.value, item.token);
                      }
                    }}
                    role="button"
                    tabIndex={0}
                    className="grid grid-cols-12 px-6 py-3 items-center text-[13px] hover:bg-[#F9FAFB] transition-colors cursor-pointer group select-none"
                    data-color-token={item.token}
                    aria-describedby={tooltip?.token === item.token ? tooltipId : undefined}
                    aria-label={`${item.token}: ${item.value}. ${item.usage}`}
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
      {tooltip && createPortal(
        <div
          id={tooltipId}
          role="tooltip"
          className="fixed z-[100] pointer-events-none rounded-[8px] bg-[#191F28] px-3 py-2 text-[13px] leading-[20px] text-white shadow-lg"
          style={{
            left: tooltip.left,
            top: tooltip.top,
            maxWidth: 'min(320px, calc(100vw - 24px))',
            transform: tooltip.above ? 'translateY(-100%)' : undefined,
          }}
        >
          {usages[tooltip.token]}
        </div>,
        document.body,
      )}
    </div>
  );
};

export default ColorSection;
