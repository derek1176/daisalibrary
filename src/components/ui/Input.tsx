import React, { forwardRef, useState } from 'react';
import { ChevronDown, AlertCircle, Search, X, Check } from 'lucide-react';

export interface BaseInputProps {
  label?: string;
  error?: string;
  success?: string;
  helperText?: string;
  disabled?: boolean;
}

// 1. Text Input (312px / 720px, 56px, Radius 10px, Padding 16px)
export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement>, BaseInputProps {
  suffix?: string;
  fullWidth?: boolean;
}

export const InputText = forwardRef<HTMLInputElement, TextInputProps>(({
  label,
  error,
  success,
  helperText,
  disabled = false,
  suffix,
  fullWidth = false,
  className = '',
  ...props
}, ref) => {
  const widthClass = fullWidth ? 'w-full' : 'w-[312px]';

  return (
    <div className={`${widthClass} flex flex-col gap-[6px]`}>
      {label && (
        <label className="text-[14px] font-bold text-text-02 tracking-da24">
          {label}
        </label>
      )}
      <div className={`relative ${widthClass}`}>
        <input
          ref={ref}
          disabled={disabled}
          className={`w-full h-[56px] px-[16px] rounded-[10px] bg-white border text-[16px] text-text-01 placeholder:text-text-04 tracking-da24 transition-colors duration-150 outline-none ${
            disabled
              ? 'bg-etc-04 border-etc-03 text-text-04 cursor-not-allowed select-none'
              : error
              ? 'border-error focus:border-error focus:ring-1 focus:ring-error'
              : success
              ? 'border-emerald-500 focus:border-emerald-500'
              : 'border-etc-02 hover:border-[#B4BAC6] focus:border-main-01 focus:ring-1 focus:ring-main-01'
          } ${suffix ? 'pr-[48px]' : ''} ${className}`}
          {...props}
        />
        {suffix && (
          <span className="absolute right-[16px] top-1/2 -translate-y-1/2 text-[14px] font-bold text-text-03 pointer-events-none">
            {suffix}
          </span>
        )}
      </div>
      {error ? (
        <div className="flex items-center gap-1 text-error text-[12px] mt-1 font-medium">
          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
          <span>{error}</span>
        </div>
      ) : success ? (
        <div className="flex items-center gap-1 text-emerald-600 text-[12px] mt-1 font-medium">
          <Check className="w-3.5 h-3.5 shrink-0" />
          <span>{success}</span>
        </div>
      ) : helperText ? (
        <span className="text-[12px] text-text-03 mt-1">{helperText}</span>
      ) : null}
    </div>
  );
});

InputText.displayName = 'InputText';

// 2. Memo / Textarea Input (312px / 720px, 104px / 128px height, Radius 10px)
export interface MemoInputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement>, BaseInputProps {
  height?: '104' | '128';
  fullWidth?: boolean;
}

export const InputMemo = forwardRef<HTMLTextAreaElement, MemoInputProps>(({
  label,
  error,
  helperText,
  disabled = false,
  height = '104',
  fullWidth = false,
  className = '',
  ...props
}, ref) => {
  const widthClass = fullWidth ? 'w-full' : 'w-[312px]';
  const hClass = height === '104' ? 'h-[104px]' : 'h-[128px]';

  return (
    <div className={`${widthClass} flex flex-col gap-[6px]`}>
      {label && (
        <label className="text-[14px] font-bold text-text-02 tracking-da24">
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        disabled={disabled}
        className={`w-full ${hClass} p-[16px] rounded-[10px] bg-white border text-[16px] text-text-01 placeholder:text-text-04 tracking-da24 transition-colors duration-150 outline-none resize-none leading-[22px] ${
          disabled
            ? 'bg-etc-04 border-etc-03 text-text-04 cursor-not-allowed select-none'
            : error
            ? 'border-error focus:border-error focus:ring-1 focus:ring-error'
            : 'border-etc-02 hover:border-[#B4BAC6] focus:border-main-01 focus:ring-1 focus:ring-main-01'
        } ${className}`}
        {...props}
      />
      {error ? (
        <div className="flex items-center gap-1 text-error text-[12px] mt-1 font-medium">
          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
          <span>{error}</span>
        </div>
      ) : helperText ? (
        <span className="text-[12px] text-text-03 mt-1">{helperText}</span>
      ) : null}
    </div>
  );
});

InputMemo.displayName = 'InputMemo';

// 3. Search Input with Clear Button (Figma input-search: 312x56, r:10)
export interface SearchInputProps extends BaseInputProps {
  value: string;
  onChange: (val: string) => void;
  onSearch?: (val: string) => void;
  placeholder?: string;
  fullWidth?: boolean;
}

export const InputSearch: React.FC<SearchInputProps> = ({
  label,
  value,
  onChange,
  onSearch,
  placeholder = '검색어를 입력하세요',
  disabled = false,
  error,
  helperText,
  fullWidth = false,
}) => {
  const widthClass = fullWidth ? 'w-full' : 'w-[312px]';

  return (
    <div className={`${widthClass} flex flex-col gap-[6px]`}>
      {label && (
        <label className="text-[14px] font-bold text-text-02 tracking-da24">
          {label}
        </label>
      )}
      <div className={`relative ${widthClass}`}>
        <Search className="absolute left-[16px] top-1/2 -translate-y-1/2 w-5 h-5 text-text-03 pointer-events-none" />
        <input
          type="text"
          value={value}
          disabled={disabled}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && onSearch?.(value)}
          placeholder={placeholder}
          className={`w-full h-[56px] pl-[44px] pr-[44px] rounded-[10px] bg-white border text-[16px] text-text-01 placeholder:text-text-04 tracking-da24 transition-colors duration-150 outline-none ${
            disabled
              ? 'bg-etc-04 border-etc-03 text-text-04 cursor-not-allowed select-none'
              : 'border-etc-02 hover:border-[#B4BAC6] focus:border-main-01 focus:ring-1 focus:ring-main-01'
          }`}
        />
        {value && !disabled && (
          <button
            type="button"
            onClick={() => onChange('')}
            className="absolute right-[14px] top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-etc-03 hover:bg-etc-02 text-text-03 hover:text-text-01 flex items-center justify-center transition-colors"
            title="검색어 지우기"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
      {error && <span className="text-[12px] text-error mt-1">{error}</span>}
    </div>
  );
};

// 4. Number Input (312px, 56px, Radius 10px)
export interface NumberInputProps extends React.InputHTMLAttributes<HTMLInputElement>, BaseInputProps {
  unit?: string;
  fullWidth?: boolean;
}

export const InputNumber = forwardRef<HTMLInputElement, NumberInputProps>(({
  label,
  error,
  helperText,
  disabled = false,
  unit,
  fullWidth = false,
  className = '',
  ...props
}, ref) => {
  const widthClass = fullWidth ? 'w-full' : 'w-[312px]';

  return (
    <div className={`${widthClass} flex flex-col gap-[6px]`}>
      {label && (
        <label className="text-[14px] font-bold text-text-02 tracking-da24">
          {label}
        </label>
      )}
      <div className={`relative ${widthClass}`}>
        <input
          ref={ref}
          type="number"
          disabled={disabled}
          className={`w-full h-[56px] px-[16px] rounded-[10px] bg-white border text-[16px] font-medium text-text-01 placeholder:text-text-04 tracking-da24 transition-colors duration-150 outline-none ${
            disabled
              ? 'bg-etc-04 border-etc-03 text-text-04 cursor-not-allowed select-none'
              : error
              ? 'border-error focus:border-error focus:ring-1 focus:ring-error'
              : 'border-etc-02 hover:border-[#B4BAC6] focus:border-main-01 focus:ring-1 focus:ring-main-01'
          } ${unit ? 'pr-[48px]' : ''} ${className}`}
          {...props}
        />
        {unit && (
          <span className="absolute right-[16px] top-1/2 -translate-y-1/2 text-[14px] font-bold text-text-02 pointer-events-none">
            {unit}
          </span>
        )}
      </div>
      {error ? (
        <div className="flex items-center gap-1 text-error text-[12px] mt-1">
          <AlertCircle className="w-3.5 h-3.5" />
          <span>{error}</span>
        </div>
      ) : helperText ? (
        <span className="text-[12px] text-text-03 mt-1">{helperText}</span>
      ) : null}
    </div>
  );
});

InputNumber.displayName = 'InputNumber';

// 5. Select Box (312px, 56px, Radius 10px)
export interface SelectProps extends BaseInputProps {
  value?: string;
  options: { label: string; value: string }[];
  placeholder?: string;
  onChange?: (val: string) => void;
  fullWidth?: boolean;
  className?: string;
}

export const SelectBox: React.FC<SelectProps> = ({
  label,
  value,
  options,
  placeholder = '선택해 주세요',
  onChange,
  disabled = false,
  error,
  helperText,
  fullWidth = false,
  className = '',
}) => {
  const widthClass = fullWidth ? 'w-full' : 'w-[312px]';

  return (
    <div className={`${widthClass} flex flex-col gap-[6px]`}>
      {label && (
        <label className="text-[14px] font-bold text-text-02 tracking-da24">
          {label}
        </label>
      )}
      <div className={`relative ${widthClass}`}>
        <select
          value={value}
          disabled={disabled}
          onChange={(e) => onChange?.(e.target.value)}
          className={`w-full h-[56px] pl-[16px] pr-[40px] rounded-[10px] bg-white border text-[16px] text-text-01 tracking-da24 appearance-none transition-colors duration-150 outline-none cursor-pointer ${
            disabled
              ? 'bg-etc-04 border-etc-03 text-text-04 cursor-not-allowed select-none'
              : error
              ? 'border-error focus:border-error focus:ring-1 focus:ring-error'
              : 'border-etc-02 hover:border-[#B4BAC6] focus:border-main-01 focus:ring-1 focus:ring-main-01'
          } ${!value ? 'text-text-04' : ''} ${className}`}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} className="text-text-01">
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-[16px] top-1/2 -translate-y-1/2 w-5 h-5 text-text-03 pointer-events-none" />
      </div>
      {error ? (
        <div className="flex items-center gap-1 text-error text-[12px] mt-1">
          <AlertCircle className="w-3.5 h-3.5" />
          <span>{error}</span>
        </div>
      ) : helperText ? (
        <span className="text-[12px] text-text-03 mt-1">{helperText}</span>
      ) : null}
    </div>
  );
};

// 6. Small Select Box (Figma select-number size=small: 104x40, Radius 8px)
export interface SmallSelectProps {
  value: string;
  options: { label: string; value: string }[];
  onChange: (val: string) => void;
  disabled?: boolean;
}

export const SelectSmall: React.FC<SmallSelectProps> = ({
  value,
  options,
  onChange,
  disabled = false,
}) => {
  return (
    <div className="relative w-[104px]">
      <select
        value={value}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        className="w-[104px] h-[40px] pl-[12px] pr-[28px] rounded-[8px] bg-white border border-etc-02 text-[14px] font-bold text-text-01 tracking-da24 appearance-none outline-none cursor-pointer hover:border-[#B4BAC6] focus:border-main-01 transition-colors"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-[10px] top-1/2 -translate-y-1/2 w-4 h-4 text-text-03 pointer-events-none" />
    </div>
  );
};
