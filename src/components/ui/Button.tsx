import React from 'react';
import { IconLoading } from './Icons';

export type ButtonState = 'normal' | 'loading' | 'disable' | 'error';

const stateBg = (state: ButtonState) =>
  state === 'disable'
    ? 'bg-etc-02 cursor-not-allowed'
    : state === 'error'
    ? 'bg-sub-02'
    : 'bg-main-01 hover:bg-[#0E14D4] active:bg-[#0B10B0]';

/**
 * public-button
 * Figma: mobile 312×56 / pc 672×56 · radius 10 · padding 16 · 16px Bold White
 */
export const PublicButton: React.FC<{
  state?: ButtonState;
  fluid?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}> = ({ state = 'normal', fluid, children, onClick, className = '' }) => (
  <button
    type="button"
    disabled={state === 'disable' || state === 'loading'}
    onClick={onClick}
    className={`${fluid ? 'w-full' : 'w-[312px]'} h-[56px] px-4 rounded-[10px] text-white text-[16px] leading-[24px] font-bold inline-flex items-center justify-center transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-main-01 ${stateBg(
      state,
    )} ${className}`}
  >
    {state === 'loading' ? <IconLoading /> : children}
  </button>
);

/**
 * partner-primary-button
 * Figma loNec9fjF6nIEgkwxH7aSN node 18:38: mobile 312×62 / pc 627×62 · radius 6 · 18px Bold White
 */
export const PartnerPrimaryButton: React.FC<{
  state?: ButtonState;
  fluid?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}> = ({ state = 'normal', fluid, children, onClick, className = '' }) => (
  <button
    type="button"
    disabled={state === 'disable' || state === 'loading'}
    onClick={onClick}
    className={`${fluid ? 'w-full' : 'w-[312px]'} h-[62px] px-4 rounded-[6px] text-white text-[18px] leading-[26px] font-bold inline-flex items-center justify-center transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-main-01 ${stateBg(
      state,
    )} ${className}`}
  >
    {state === 'loading' ? <IconLoading /> : children}
  </button>
);

/**
 * partner-secondary-button
 * Figma G5JiHI51FV6XFImlsyON6u node 1:130: h48/h51 · radius 4 or 6 · 16px Bold
 */
export const PartnerSecondaryButton: React.FC<{
  state?: ButtonState;
  variant?: 'outline' | 'ghost' | 'solid';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}> = ({ state = 'normal', variant = 'outline', children, onClick, className = '' }) => (
  <button
    type="button"
    disabled={state === 'disable'}
    onClick={onClick}
    className={`h-[51px] px-5 rounded-[6px] text-[16px] font-bold inline-flex items-center justify-center transition-colors ${
      variant === 'outline'
        ? 'border border-[#595EF9] text-[#595EF9] bg-transparent hover:bg-[#595EF9]/10'
        : variant === 'ghost'
        ? 'text-[#94A3B8] hover:bg-white/5 hover:text-white'
        : 'bg-[#1E2536] text-[#E5E8EB] hover:bg-[#252E42]'
    } ${className}`}
  >
    {children}
  </button>
);

/**
 * floating-button
 * Figma: mobile 360×56 / pc 720×56 · radius 0 · padding 16 · 16px Bold White
 */
export const FloatingButton: React.FC<{
  state?: ButtonState;
  children: React.ReactNode;
  onClick?: () => void;
}> = ({ state = 'normal', children, onClick }) => (
  <button
    type="button"
    disabled={state === 'disable' || state === 'loading'}
    onClick={onClick}
    className={`w-full h-[56px] px-4 rounded-none text-white text-[16px] leading-[24px] font-bold inline-flex items-center justify-center transition-colors duration-150 ${stateBg(
      state,
    )}`}
  >
    {state === 'loading' ? <IconLoading /> : children}
  </button>
);

/**
 * modal button
 * radius 10 · h56(기본) / h48(컴팩트) · 2분할 136 + 8 + 136 = 280
 */
export const ModalButtons: React.FC<{
  type?: 'single' | 'double';
  size?: 48 | 56;
  cancelText?: string;
  confirmText?: string;
  onCancel?: () => void;
  onConfirm?: () => void;
}> = ({ type = 'double', size = 56, cancelText = '취소', confirmText = '확인', onCancel, onConfirm }) => {
  const h = size === 48 ? 'h-[48px]' : 'h-[56px]';
  const base = `${h} rounded-[10px] text-[16px] leading-[24px] font-bold transition-colors duration-150`;
  if (type === 'single') {
    return (
      <button type="button" onClick={onConfirm} className={`${base} w-[280px] bg-main-01 hover:bg-[#0E14D4] text-white`}>
        {confirmText}
      </button>
    );
  }
  return (
    <div className="w-[280px] flex gap-2">
      <button type="button" onClick={onCancel} className={`${base} w-[136px] bg-etc-03 hover:bg-etc-02 text-text-02`}>
        {cancelText}
      </button>
      <button type="button" onClick={onConfirm} className={`${base} w-[136px] bg-main-01 hover:bg-[#0E14D4] text-white`}>
        {confirmText}
      </button>
    </div>
  );
};

/**
 * 3분할 선택 버튼
 * Figma 규칙: 좌우 마진 유지, 가운데 버튼 1px 늘림 → 103 + 1 + 104 + 1 + 103 = 312
 */
export const Segmented3: React.FC<{
  options: [string, string, string];
  value: number;
  onChange: (i: number) => void;
}> = ({ options, value, onChange }) => (
  <div
    role="radiogroup"
    className="w-[312px] h-[56px] flex gap-px bg-etc-02 rounded-[10px] overflow-hidden outline outline-1 -outline-offset-1 outline-etc-02"
  >
    {options.map((opt, i) => {
      const active = value === i;
      return (
        <button
          key={opt}
          type="button"
          role="radio"
          aria-checked={active}
          onClick={() => onChange(i)}
          className={`${i === 1 ? 'w-[104px]' : 'w-[103px]'} h-full shrink-0 text-[16px] leading-[24px] transition-colors duration-150 ${
            active ? 'bg-main-01 text-white font-bold' : 'bg-white text-text-03 hover:bg-etc-04'
          }`}
        >
          {opt}
        </button>
      );
    })}
  </div>
);

/** Pill chip — radius 28(pill) · h33 */
export const Chip: React.FC<{ active?: boolean; children: React.ReactNode; onClick?: () => void }> = ({
  active,
  children,
  onClick,
}) => (
  <button
    type="button"
    onClick={onClick}
    className={`h-[33px] px-3.5 rounded-full text-[14px] leading-[21px] transition-colors duration-150 border ${
      active
        ? 'bg-main-01 border-main-01 text-white font-bold'
        : 'bg-white border-etc-02 text-text-02 hover:border-etc-01'
    }`}
  >
    {children}
  </button>
);
