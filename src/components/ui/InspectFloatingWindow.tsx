import React, { useState, useCallback } from 'react';

export interface InspectColor {
  label: string;
  value: string;
  token?: string;
}

export interface InspectData {
  title: string;
  category: 'Button' | 'Input' | 'Modal & Sheet' | 'Dialog' | 'Sheet' | 'Component';
  mode?: 'customer' | 'partner';
  size?: string;
  radius?: string;
  typography?: string;
  padding?: string;
  border?: string;
  colors?: InspectColor[];
  description?: string;
}

export function useFloatingInspector() {
  const [inspectData, setInspectData] = useState<InspectData | null>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);

  const handleMouseEnter = useCallback((data: InspectData, e: React.MouseEvent) => {
    setInspectData(data);
    setMousePos({ x: e.clientX, y: e.clientY });
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setInspectData(null);
    setMousePos(null);
  }, []);

  const bindInspect = useCallback(
    (data: InspectData) => ({
      onMouseEnter: (e: React.MouseEvent) => handleMouseEnter(data, e),
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
    }),
    [handleMouseEnter, handleMouseMove, handleMouseLeave]
  );

  return {
    inspectData,
    mousePos,
    bindInspect,
  };
}

interface InspectFloatingWindowProps {
  data: InspectData | null;
  position: { x: number; y: number } | null;
}

export const InspectFloatingWindow: React.FC<InspectFloatingWindowProps> = ({ data, position }) => {
  if (!data || !position) return null;

  // Clamping within viewport
  const windowWidth = 295;
  const windowHeight = 240;
  const paddingMargin = 16;

  let left = position.x + 18;
  let top = position.y + 18;

  if (typeof window !== 'undefined') {
    if (left + windowWidth > window.innerWidth - paddingMargin) {
      left = position.x - windowWidth - 14;
    }
    if (top + windowHeight > window.innerHeight - paddingMargin) {
      top = position.y - windowHeight - 14;
    }
    // Prevent negative off-screen
    left = Math.max(paddingMargin, left);
    top = Math.max(paddingMargin, top);
  }

  const isPartner = data.mode === 'partner';

  return (
    <div
      style={{ left: `${left}px`, top: `${top}px` }}
      className="fixed z-50 pointer-events-none w-[295px] rounded-[14px] bg-[#1E1E22]/95 backdrop-blur-md text-[#F3F4F6] border border-white/12 shadow-[0_16px_40px_rgba(0,0,0,0.45)] overflow-hidden animate-popIn transition-all duration-75 text-[12px] select-none"
    >
      {/* 1. macOS Style Window Titlebar */}
      <div className="h-7 px-3 bg-white/5 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
        </div>
        <span className="text-[10.5px] font-mono tracking-tight text-white/50 uppercase">
          Inspector · {data.category}
        </span>
      </div>

      {/* 2. Component Header & Mode Badge */}
      <div className="p-3 border-b border-white/8 flex items-center justify-between gap-2 bg-white/[0.02]">
        <strong className="text-[13.5px] font-bold text-white tracking-tight truncate">
          {data.title}
        </strong>
        <span
          className={`shrink-0 text-[10px] font-bold px-1.5 py-0.5 rounded-[5px] ${
            isPartner ? 'bg-[#374151] text-[#9CA3AF]' : 'bg-[#1219F7]/30 text-[#8B9FFB] border border-[#1219F7]/40'
          }`}
        >
          {isPartner ? '파트너향' : '고객향'}
        </span>
      </div>

      {/* 3. Key Specifications List */}
      <div className="p-3 space-y-2 max-h-[300px] overflow-y-auto">
        {data.size && (
          <div className="grid grid-cols-[70px_1fr] items-center gap-2">
            <span className="text-[11px] text-white/50 font-medium">Height/Size</span>
            <span className="font-mono text-white/95 font-semibold text-[11.5px] truncate">
              {data.size}
            </span>
          </div>
        )}

        {data.radius && (
          <div className="grid grid-cols-[70px_1fr] items-center gap-2">
            <span className="text-[11px] text-white/50 font-medium">Radius</span>
            <span className="font-mono text-[#8B9FFB] font-bold text-[11.5px]">
              {data.radius}
            </span>
          </div>
        )}

        {data.typography && (
          <div className="grid grid-cols-[70px_1fr] items-start gap-2">
            <span className="text-[11px] text-white/50 font-medium mt-0.5">Typography</span>
            <span className="text-white/90 text-[11.5px] leading-tight">
              {data.typography}
            </span>
          </div>
        )}

        {data.padding && (
          <div className="grid grid-cols-[70px_1fr] items-center gap-2">
            <span className="text-[11px] text-white/50 font-medium">Padding</span>
            <span className="font-mono text-white/85 text-[11.5px]">
              {data.padding}
            </span>
          </div>
        )}

        {data.border && (
          <div className="grid grid-cols-[70px_1fr] items-center gap-2">
            <span className="text-[11px] text-white/50 font-medium">Border</span>
            <span className="font-mono text-white/85 text-[11.5px] truncate">
              {data.border}
            </span>
          </div>
        )}

        {/* Colors Swatches */}
        {data.colors && data.colors.length > 0 && (
          <div className="pt-1 border-t border-white/8 space-y-1.5">
            <span className="text-[10.5px] font-bold uppercase tracking-wider text-white/40 block">
              Color Tokens
            </span>
            <div className="space-y-1">
              {data.colors.map((c, idx) => (
                <div key={idx} className="flex items-center justify-between text-[11px]">
                  <div className="flex items-center gap-1.5 truncate">
                    <span
                      className="w-3 h-3 rounded-[3px] border border-white/20 shrink-0"
                      style={{ backgroundColor: c.value }}
                    />
                    <span className="text-white/70 font-medium truncate">{c.label}</span>
                  </div>
                  <div className="font-mono text-[10.5px] text-white/90 shrink-0">
                    <span className="text-white/50 mr-1">{c.token}</span>
                    <span className="text-white/80">{c.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {data.description && (
          <div className="pt-1.5 border-t border-white/8 text-[11px] text-white/60 leading-relaxed">
            {data.description}
          </div>
        )}
      </div>
    </div>
  );
};
