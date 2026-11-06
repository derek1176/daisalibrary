import React, { useEffect } from 'react';
import { X, Check } from 'lucide-react';

export interface BottomSheetItem {
  id: string | number;
  label: string;
  subLabel?: string;
  badge?: string;
}

export interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  items: BottomSheetItem[];
  selectedId?: string | number;
  onSelect: (item: BottomSheetItem) => void;
}

export const BottomSheet: React.FC<BottomSheetProps> = ({
  isOpen,
  onClose,
  title,
  items,
  selectedId,
  onSelect,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      {/* Dimmed Overlay 60% */}
      <div
        className="fixed inset-0 bg-black/60 transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Bottom Sheet Container: Max 360px, rounded-t-[16px] */}
      <div className="relative z-10 w-full max-w-[360px] bg-white rounded-t-[16px] overflow-hidden shadow-2xl flex flex-col animate-in slide-in-from-bottom duration-200">
        {/* Header: 56px height, 18px Bold Title, 24x24 Close Icon */}
        <div className="h-[56px] px-[24px] flex items-center justify-between border-b border-etc-03">
          <h3 className="text-[18px] font-bold text-text-01 leading-[26px] tracking-da24">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="w-[24px] h-[24px] flex items-center justify-center text-text-02 hover:text-text-01 transition-colors outline-none"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* List Section: 56px height per item, max height 284px (5 items scrollable) */}
        <div className="max-h-[284px] overflow-y-auto divide-y divide-etc-03 px-[24px]">
          {items.map((item) => {
            const isSelected = selectedId === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  onSelect(item);
                  onClose();
                }}
                className={`w-full h-[56px] flex items-center justify-between text-left transition-colors duration-150 select-none outline-none ${
                  isSelected ? 'text-main-01 font-bold' : 'text-text-02 hover:text-text-01 font-medium'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-[16px] leading-[24px] tracking-da24">
                    {item.label}
                  </span>
                  {item.subLabel && (
                    <span className="text-[12px] text-text-04">({item.subLabel})</span>
                  )}
                  {item.badge && (
                    <span className="px-1.5 py-0.5 rounded text-[12px] font-bold bg-main-04 text-main-01">
                      {item.badge}
                    </span>
                  )}
                </div>

                {isSelected && <Check className="w-5 h-5 text-main-01 stroke-[2.5]" />}
              </button>
            );
          })}
        </div>

        {/* Safe Area Padding for mobile */}
        <div className="h-[16px] bg-white" />
      </div>
    </div>
  );
};
