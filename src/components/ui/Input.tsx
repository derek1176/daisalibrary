import React, { forwardRef } from 'react';
import { ChevronDown, AlertCircle } from 'lucide-react';

export interface BaseInputProps {
  label?: string;
  error?: string;
  helperText?: string;
  disabled?: boolean;
}

// Text Input (312px, 56px, Radius 10px, Padding 16px)
export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement>, BaseInputProps {
  suffix?: string;
}

export const InputText = forwardRef<HTMLInputElement, TextInputProps>(({
  label,
  error,
  helperText,
  disabled = false,
  suffix,
  className = '',
  ...props
}, ref) => {
  return (
    <div className="w-[312px] flex flex-col gap-[6px]">
      {label && (
        <label className="text-[14px] font-bold text-text-02 tracking-da24">
          {label}
        </label>
      )}
      <div className="relative w-[312px]">
        <input
          ref={ref}
          disabled={disabled}
          className={`w-[312px] h-[56px] px-[16px] rounded-[10px] bg-white border text-[16px] text-text-01 placeholder:text-text-04 tracking-da24 transition-colors duration-150 outline-none ${
            disabled
              ? 'bg-etc-04 border-etc-03 text-text-04 cursor-not-allowed select-none'
              : error
              ? 'border-error focus:border-error focus:ring-1 focus:ring-error'
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

InputText.displayName = 'InputText';

// Number Input (312px, 56px, Radius 10px, Padding 16px)
export interface NumberInputProps extends React.InputHTMLAttributes<HTMLInputElement>, BaseInputProps {
  unit?: string;
}

export const InputNumber = forwardRef<HTMLInputElement, NumberInputProps>(({
  label,
  error,
  helperText,
  disabled = false,
  unit,
  className = '',
  ...props
}, ref) => {
  return (
    <div className="w-[312px] flex flex-col gap-[6px]">
      {label && (
        <label className="text-[14px] font-bold text-text-02 tracking-da24">
          {label}
        </label>
      )}
      <div className="relative w-[312px]">
        <input
          ref={ref}
          type="number"
          disabled={disabled}
          className={`w-[312px] h-[56px] px-[16px] rounded-[10px] bg-white border text-[16px] font-medium text-text-01 placeholder:text-text-04 tracking-da24 transition-colors duration-150 outline-none ${
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

// Select Dropdown (312px, 56px, Radius 10px, Padding 16px)
export interface SelectProps extends BaseInputProps {
  value?: string;
  options: { label: string; value: string }[];
  placeholder?: string;
  onChange?: (val: string) => void;
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
  className = '',
}) => {
  return (
    <div className="w-[312px] flex flex-col gap-[6px]">
      {label && (
        <label className="text-[14px] font-bold text-text-02 tracking-da24">
          {label}
        </label>
      )}
      <div className="relative w-[312px]">
        <select
          value={value}
          disabled={disabled}
          onChange={(e) => onChange?.(e.target.value)}
          className={`w-[312px] h-[56px] pl-[16px] pr-[40px] rounded-[10px] bg-white border text-[16px] text-text-01 tracking-da24 appearance-none transition-colors duration-150 outline-none cursor-pointer ${
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
