import React from 'react';
import { ModalButtons } from './Button';

/**
 * Alert / Confirm Modal
 * Figma: 312 × hug · radius 16 · padding 24/16/24/16 · gap 24
 *        title 20px Bold(lh 30) · body 16px Regular(lh 24) · dimmed #000 60%
 */
export const Modal: React.FC<{
  open: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  type?: 'single' | 'double';
  cancelText?: string;
  confirmText?: string;
  onConfirm?: () => void;
  contained?: boolean;
  children?: React.ReactNode;
}> = ({ open, onClose, title, description, type = 'double', cancelText, confirmText, onConfirm, contained, children }) => {
  if (!open) return null;
  return (
    <div className={`${contained ? 'absolute' : 'fixed'} inset-0 z-50 flex items-center justify-center`}>
      <div className="absolute inset-0 bg-black/60 anim-fade" onClick={onClose} />
      <div role="dialog" aria-modal className="relative w-[312px] bg-white rounded-[16px] px-4 py-6 flex flex-col gap-6 anim-pop">
        <div className="flex flex-col gap-2 text-center">
          <h3 className="text-[20px] leading-[30px] font-bold text-text-01 break-keep">{title}</h3>
          {description && <p className="text-[16px] leading-[24px] text-text-03 break-keep whitespace-pre-line">{description}</p>}
          {children}
        </div>
        <ModalButtons
          type={type}
          cancelText={cancelText}
          confirmText={confirmText}
          onCancel={onClose}
          onConfirm={() => {
            onConfirm?.();
            onClose();
          }}
        />
      </div>
    </div>
  );
};
