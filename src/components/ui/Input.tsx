import React, { useEffect, useRef, useState } from 'react';
import { IconCancel, IconChevron, IconMinus, IconPlus, IconSearch } from './Icons';

/* ──────────────────────────────────────────────────────────────
 * Form 공통 규격 (Figma: [고객향] 스타일가이드 > form 9899:6841)
 *  · mobile 312×56 / pc 640×56 · radius 10 · padding 16
 *  · text 16px Regular · lh 24 · 값 #333333 / placeholder #888888
 *  · normal  : bg #FFFFFF · border #D7DBE2
 *  · focus   : bg #FFFFFF · border #1219F7
 *  · disable : bg #F7F8FA · border #D7DBE2 · text #888888
 *  · error   : border #F34766 · 하단 메시지 14px #F34766 (gap 8)
 * ────────────────────────────────────────────────────────────── */

type BoxState = { focused: boolean; disabled?: boolean; error?: boolean };

const boxClass = ({ focused, disabled, error }: BoxState) =>
  [
    'flex items-center rounded-[10px] border transition-colors duration-150',
    disabled
      ? 'bg-etc-04 border-etc-02 text-text-04 cursor-not-allowed'
      : error
      ? 'bg-white border-[#F34766]'
      : focused
      ? 'bg-white border-main-01'
      : 'bg-white border-etc-02 hover:border-etc-01',
  ].join(' ');

const inputClass =
  'flex-1 min-w-0 h-full bg-transparent outline-none text-[16px] leading-[24px] text-text-02 placeholder:text-text-04 disabled:text-text-04 disabled:cursor-not-allowed';

export const Field: React.FC<{
  label?: string;
  message?: string;
  tone?: 'default' | 'error';
  fluid?: boolean;
  children: React.ReactNode;
}> = ({ label, message, tone = 'default', fluid, children }) => (
  <div className={`${fluid ? 'w-full' : 'w-[312px]'} flex flex-col gap-2`}>
    {label && <span className="text-[14px] leading-[21px] font-bold text-text-02">{label}</span>}
    {children}
    {message && (
      <span className={`text-[14px] leading-[21px] font-medium ${tone === 'error' ? 'text-[#F34766]' : 'text-text-03'}`}>
        {message}
      </span>
    )}
  </div>
);

interface CommonProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
  disabled?: boolean;
  error?: string;
  message?: string;
  forceFocus?: boolean;
  fluid?: boolean;
}

/* input-text */
export const InputText: React.FC<CommonProps & { suffix?: string }> = ({
  label,
  placeholder = '입력해주세요',
  value,
  onChange,
  disabled,
  error,
  message,
  forceFocus,
  fluid,
  suffix,
}) => {
  const [focused, setFocused] = useState(false);
  return (
    <Field label={label} message={error || message} tone={error ? 'error' : 'default'} fluid={fluid}>
      <div className={`${boxClass({ focused: focused || !!forceFocus, disabled, error: !!error })} h-[56px] px-4 gap-2.5`}>
        <input
          value={value}
          disabled={disabled}
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={(e) => onChange(e.target.value)}
          className={inputClass}
        />
        {suffix && <span className="shrink-0 text-[16px] leading-[24px] text-text-02">{suffix}</span>}
      </div>
    </Field>
  );
};

/* input-text · memo (312×104) */
export const InputMemo: React.FC<CommonProps> = ({
  label,
  placeholder = '업체 전달 메모 작성(선택)',
  value,
  onChange,
  disabled,
  error,
  message,
  forceFocus,
  fluid,
}) => {
  const [focused, setFocused] = useState(false);
  return (
    <Field label={label} message={error || message} tone={error ? 'error' : 'default'} fluid={fluid}>
      <div className={`${boxClass({ focused: focused || !!forceFocus, disabled, error: !!error })} h-[104px] p-4 items-stretch`}>
        <textarea
          value={value}
          disabled={disabled}
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={(e) => onChange(e.target.value)}
          className={`${inputClass} resize-none`}
        />
      </div>
    </Field>
  );
};

/* input-search — 텍스트 · [cancel] · search 아이콘 (gap 8) */
export const InputSearch: React.FC<CommonProps> = ({
  label,
  placeholder = '도로명, 지번, 건물명(2글자 이상)',
  value,
  onChange,
  disabled,
  forceFocus,
  fluid,
}) => {
  const [focused, setFocused] = useState(false);
  const isFocus = focused || !!forceFocus;
  return (
    <Field label={label} fluid={fluid}>
      <div className={`${boxClass({ focused: isFocus, disabled })} h-[56px] px-4 gap-2`}>
        <input
          value={value}
          disabled={disabled}
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={(e) => onChange(e.target.value)}
          className={inputClass}
        />
        {isFocus && value && !disabled && (
          <button
            type="button"
            aria-label="입력 지우기"
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => onChange('')}
            className="shrink-0"
          >
            <IconCancel />
          </button>
        )}
        <IconSearch className="shrink-0 text-text-02" />
      </div>
    </Field>
  );
};

/* input-number — success(잠금) / error 상태 + 하단 메시지 */
export const InputNumber: React.FC<CommonProps & { status?: 'none' | 'success' | 'error'; statusText?: string }> = ({
  label,
  placeholder = '숫자만 입력해주세요',
  value,
  onChange,
  disabled,
  forceFocus,
  fluid,
  status = 'none',
  statusText,
}) => {
  const [focused, setFocused] = useState(false);
  const locked = disabled || status === 'success';
  return (
    <Field
      label={label}
      message={status !== 'none' ? statusText : undefined}
      tone={status === 'error' ? 'error' : 'default'}
      fluid={fluid}
    >
      <div
        className={`${boxClass({ focused: focused || !!forceFocus, disabled: locked, error: status === 'error' })} h-[56px] px-4 gap-2.5`}
      >
        <input
          inputMode="numeric"
          value={value}
          disabled={locked}
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={(e) => onChange(e.target.value.replace(/[^0-9]/g, ''))}
          className={inputClass}
        />
      </div>
    </Field>
  );
};

/* select-text — 텍스트 · chevron(24) · 열림 시 up 아이콘 + focus 보더 */
export const SelectText: React.FC<{
  label?: string;
  placeholder?: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
  disabled?: boolean;
  forceFocus?: boolean;
  fluid?: boolean;
}> = ({ label, placeholder = '선택해주세요', value, options, onChange, disabled, forceFocus, fluid }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, [open]);

  const isOpen = open || !!forceFocus;
  return (
    <Field label={label} fluid={fluid}>
      <div ref={ref} className="relative">
        <button
          type="button"
          disabled={disabled}
          onClick={() => setOpen((o) => !o)}
          className={`${boxClass({ focused: isOpen, disabled })} w-full h-[56px] px-4 gap-2 text-left`}
        >
          <span className={`flex-1 truncate text-[16px] leading-[24px] ${value && !disabled ? 'text-text-02' : 'text-text-04'}`}>
            {value || placeholder}
          </span>
          <IconChevron up={isOpen} className={disabled ? 'text-text-04' : 'text-text-02'} />
        </button>
        {open && (
          <ul className="absolute z-20 left-0 right-0 top-[64px] max-h-[284px] overflow-auto rounded-[10px] border border-etc-02 bg-white shadow-pop py-1 anim-pop">
            {options.map((o) => (
              <li key={o}>
                <button
                  type="button"
                  onClick={() => {
                    onChange(o);
                    setOpen(false);
                  }}
                  className={`w-full h-[48px] px-4 text-left text-[16px] leading-[24px] hover:bg-etc-04 ${
                    o === value ? 'text-main-01 font-bold' : 'text-text-02'
                  }`}
                >
                  {o}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Field>
  );
};

/* select-number (수량 스테퍼)
 *  · large 312×56 · radius 10 · padding 16 · icon 24
 *  · small 104×40 · radius 8  · padding 8  · icon 20
 *  · 값 16px Bold #333333 */
export const Stepper: React.FC<{
  size?: 'large' | 'small';
  value: number;
  onChange: (n: number) => void;
  min?: number;
  max?: number;
  unit?: string;
  fluid?: boolean;
}> = ({ size = 'large', value, onChange, min = 1, max = 99, unit = '', fluid }) => {
  const large = size === 'large';
  const iconSize = large ? 24 : 20;
  const btn = (disabled: boolean) =>
    `shrink-0 flex items-center justify-center rounded-full transition-colors ${
      disabled ? 'text-etc-01 cursor-not-allowed' : 'text-text-02 hover:bg-etc-04'
    }`;
  return (
    <div
      className={`flex items-center bg-white border border-etc-02 ${
        large ? `${fluid ? 'w-full' : 'w-[312px]'} h-[56px] rounded-[10px] px-4 gap-2` : 'w-[104px] h-[40px] rounded-[8px] px-2 gap-1'
      }`}
    >
      <button type="button" aria-label="감소" disabled={value <= min} onClick={() => onChange(value - 1)} className={btn(value <= min)}>
        <IconMinus size={iconSize} />
      </button>
      <span className="flex-1 text-center text-[16px] leading-[24px] font-bold text-text-02 tabular-nums">
        {value}
        {unit}
      </span>
      <button type="button" aria-label="증가" disabled={value >= max} onClick={() => onChange(value + 1)} className={btn(value >= max)}>
        <IconPlus size={iconSize} />
      </button>
    </div>
  );
};
