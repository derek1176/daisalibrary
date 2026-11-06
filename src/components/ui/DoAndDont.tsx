import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

export interface DoAndDontItem {
  type: 'do' | 'dont';
  title: string;
  description: string;
  visual?: React.ReactNode;
}

export interface DoAndDontProps {
  items: [DoAndDontItem, DoAndDontItem];
}

export const DoAndDont: React.FC<DoAndDontProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
      {items.map((item, idx) => {
        const isDo = item.type === 'do';
        return (
          <div
            key={idx}
            className={`rounded-[12px] border overflow-hidden flex flex-col ${
              isDo
                ? 'border-emerald-200 bg-emerald-50/30'
                : 'border-rose-200 bg-rose-50/30'
            }`}
          >
            {/* Visual Preview Box */}
            {item.visual && (
              <div className="min-h-[140px] bg-white border-b flex items-center justify-center p-6 border-inherit">
                {item.visual}
              </div>
            )}

            {/* Explanation Content */}
            <div className="p-4 flex flex-col gap-1.5 flex-1 bg-white/70">
              <div className="flex items-center gap-2">
                {isDo ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                ) : (
                  <XCircle className="w-5 h-5 text-rose-500 shrink-0" />
                )}
                <span
                  className={`text-[14px] font-bold tracking-da24 ${
                    isDo ? 'text-emerald-900' : 'text-rose-900'
                  }`}
                >
                  {isDo ? 'DO' : "DON'T"}: {item.title}
                </span>
              </div>
              <p className="text-[13px] text-text-03 leading-[20px] tracking-da24 pl-7">
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
