import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { ModalButtonGroup, ModalSingleButton } from './Button';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  type?: 'confirm' | 'alert';
  cancelText?: string;
  confirmText?: string;
  onConfirm?: () => void;
  children?: React.ReactNode;
  showCloseIcon?: boolean;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  type = 'confirm',
  cancelText = '취소',
  confirmText = '확인',
  onConfirm,
  children,
  showCloseIcon = false,
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Dimmed Overlay 60% */}
      <div
        className="fixed inset-0 bg-black/60 transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Modal Dialog: Width 312px, Radius 16px, Padding 24px 16px, Gap 24px */}
      <div className="relative z-10 w-[312px] bg-white rounded-[16px] p-[24px_16px] shadow-2xl flex flex-col gap-[24px] box-border animate-in zoom-in-95 duration-150">
        {showCloseIcon && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-text-03 hover:text-text-01 p-1 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        )}

        {/* Content Section */}
        <div className="flex flex-col text-center items-center">
          <h3 className="text-[20px] font-bold text-text-01 leading-[30px] tracking-da24 break-keep">
            {title}
          </h3>
          {description && (
            <p className="mt-2 text-[16px] font-normal text-text-03 leading-[24px] tracking-da24 break-keep">
              {description}
            </p>
          )}
          {children && <div className="mt-4 w-full">{children}</div>}
        </div>

        {/* Action Button Section: 280px total width */}
        <div className="flex justify-center">
          {type === 'confirm' ? (
            <ModalButtonGroup
              cancelText={cancelText}
              confirmText={confirmText}
              onCancel={onClose}
              onConfirm={() => {
                onConfirm?.();
                onClose();
              }}
              size="48"
            />
          ) : (
            <ModalSingleButton
              text={confirmText}
              onClick={() => {
                onConfirm?.();
                onClose();
              }}
              size="48"
            />
          )}
        </div>
      </div>
    </div>
  );
};
