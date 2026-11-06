import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'floating' | 'public' | 'modal-primary' | 'modal-secondary';
  size?: '56' | '48';
  fullWidth?: boolean;
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'public',
  size = '56',
  fullWidth = false,
  isLoading = false,
  disabled = false,
  className = '',
  children,
  ...props
}) => {
  // Base styles
  let baseStyle = 'inline-flex items-center justify-center font-bold tracking-da24 transition-colors duration-150 select-none cursor-pointer outline-none';

  // Variant & Layout specifics
  let variantStyle = '';
  if (variant === 'floating') {
    // Floating CTA: 너비 100%(모바일 360px), 높이 56px, Corner Radius 0px, 18px Bold White (#1219F7)
    baseStyle += ' w-full max-w-[360px] h-[56px] rounded-none text-[18px] leading-[26px]';
    if (disabled) {
      variantStyle = 'bg-etc-03 text-text-04 cursor-not-allowed';
    } else {
      variantStyle = 'bg-main-01 text-white hover:bg-[#0D14D6] active:bg-[#090EB8] focus-visible:ring-2 focus-visible:ring-main-02';
    }
  } else if (variant === 'public') {
    // Public In-Content: 너비 312px, 높이 56px, Corner Radius 10px, 16px Bold White
    const widthStyle = fullWidth ? 'w-full' : 'w-[312px]';
    baseStyle += ` ${widthStyle} h-[56px] rounded-[10px] text-[16px] leading-[24px]`;
    if (disabled) {
      variantStyle = 'bg-etc-03 text-text-04 cursor-not-allowed';
    } else {
      variantStyle = 'bg-main-01 text-white hover:bg-[#0D14D6] active:bg-[#090EB8] shadow-sm focus-visible:ring-2 focus-visible:ring-main-02';
    }
  } else if (variant === 'modal-primary') {
    // Modal Confirm: 높이 48/56px, Corner Radius 10px, #1219F7
    const h = size === '48' ? 'h-[48px]' : 'h-[56px]';
    baseStyle += ` ${h} rounded-[10px] text-[16px] leading-[24px]`;
    if (disabled) {
      variantStyle = 'bg-etc-03 text-text-04 cursor-not-allowed';
    } else {
      variantStyle = 'bg-main-01 text-white hover:bg-[#0D14D6] active:bg-[#090EB8]';
    }
  } else if (variant === 'modal-secondary') {
    // Modal Cancel: 높이 48/56px, Corner Radius 10px, #EBEEF2, text #333333
    const h = size === '48' ? 'h-[48px]' : 'h-[56px]';
    baseStyle += ` ${h} rounded-[10px] text-[16px] leading-[24px] bg-etc-03 text-text-02 hover:bg-[#DFE3E8] active:bg-[#D4D9DF]`;
  }

  return (
    <button
      disabled={disabled || isLoading}
      className={`${baseStyle} ${variantStyle} ${className}`}
      {...props}
    >
      {isLoading ? (
        <span className="flex items-center gap-2">
          <svg className="animate-spin h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>처리중...</span>
        </span>
      ) : (
        children
      )}
    </button>
  );
};

// Segmented 3-Split Button (312px 3분할: 103px - 104px - 103px 룰 적용)
export interface Segmented3SplitProps {
  options: [string, string, string];
  selectedIndex: number;
  onChange: (index: number) => void;
  disabled?: boolean;
}

export const Segmented3Split: React.FC<Segmented3SplitProps> = ({
  options,
  selectedIndex,
  onChange,
  disabled = false,
}) => {
  return (
    <div
      className={`w-[312px] h-[56px] p-1 bg-etc-04 border border-etc-02 rounded-[10px] flex items-center box-border ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
    >
      {options.map((opt, idx) => {
        const isSelected = selectedIndex === idx;
        // 103 - 104 - 103 px width distribution rule
        const widthClass = idx === 1 ? 'w-[104px]' : 'w-[103px]';

        return (
          <button
            key={opt}
            type="button"
            disabled={disabled}
            onClick={() => onChange(idx)}
            className={`h-[46px] ${widthClass} rounded-[8px] text-[16px] font-bold tracking-da24 transition-all duration-150 flex items-center justify-center select-none ${
              isSelected
                ? 'bg-main-01 text-white shadow-sm'
                : 'bg-transparent text-text-03 hover:text-text-01 hover:bg-white/50'
            }`}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
};

// Modal Button 2-Split Group (너비 280px = 136px + 8px gap + 136px)
export interface ModalButtonGroupProps {
  onCancel?: () => void;
  onConfirm?: () => void;
  cancelText?: string;
  confirmText?: string;
  size?: '48' | '56';
  isConfirmLoading?: boolean;
}

export const ModalButtonGroup: React.FC<ModalButtonGroupProps> = ({
  onCancel,
  onConfirm,
  cancelText = '취소',
  confirmText = '확인',
  size = '48',
  isConfirmLoading = false,
}) => {
  return (
    <div className="w-[280px] flex items-center gap-[8px]">
      <Button
        variant="modal-secondary"
        size={size}
        className="w-[136px]"
        onClick={onCancel}
      >
        {cancelText}
      </Button>
      <Button
        variant="modal-primary"
        size={size}
        className="w-[136px]"
        onClick={onConfirm}
        isLoading={isConfirmLoading}
      >
        {confirmText}
      </Button>
    </div>
  );
};

// Modal Single Full Button (너비 280px 전폭)
export interface ModalSingleButtonProps {
  onClick?: () => void;
  text?: string;
  size?: '48' | '56';
  isLoading?: boolean;
}

export const ModalSingleButton: React.FC<ModalSingleButtonProps> = ({
  onClick,
  text = '확인',
  size = '48',
  isLoading = false,
}) => {
  return (
    <Button
      variant="modal-primary"
      size={size}
      className="w-[280px]"
      onClick={onClick}
      isLoading={isLoading}
    >
      {text}
    </Button>
  );
};
