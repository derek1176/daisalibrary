import React from 'react';
import { IconCheck, IconClose } from './Icons';

/**
 * Bottom Sheet (select popup)
 * Figma: 360 · 상단 radius 16 · header 56 (18px Bold + 24 닫기)
 *        list item 312×56 + 1px #EBEEF2 구분선 · 최대 높이 284 (5개 노출) · dimmed 60%
 */
export const BottomSheet: React.FC<{
  open: boolean;
  onClose: () => void;
  title: string;
  options: string[];
  value?: string;
  onSelect: (v: string) => void;
  contained?: boolean;
}> = ({ open, onClose, title, options, value, onSelect, contained }) => {
  if (!open) return null;
  return (
    <div className={`${contained ? 'absolute' : 'fixed'} inset-0 z-50 flex items-end justify-center`}>
      <div className="absolute inset-0 bg-black/60 anim-fade" onClick={onClose} />
      <div role="dialog" aria-modal className="relative w-full max-w-[360px] bg-white rounded-t-[16px] pb-6 anim-sheet">
        <div className="h-[56px] px-6 flex items-center justify-between">
          <h3 className="text-[18px] leading-[27px] font-bold text-text-01">{title}</h3>
          <button type="button" onClick={onClose} aria-label="닫기" className="text-text-02">
            <IconClose />
          </button>
        </div>
        <ul className="max-h-[284px] overflow-y-auto px-6">
          {options.map((o) => {
            const active = o === value;
            return (
              <li key={o} className="border-b border-etc-03 last:border-b-0">
                <button
                  type="button"
                  onClick={() => {
                    onSelect(o);
                    onClose();
                  }}
                  className={`w-full h-[56px] flex items-center justify-between text-left text-[16px] leading-[24px] ${
                    active ? 'text-main-01 font-bold' : 'text-text-02'
                  }`}
                >
                  {o}
                  {active && <IconCheck className="text-main-01" />}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
