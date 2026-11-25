import React from 'react';

/* 다이사 시스템 아이콘 — Figma 규칙: 24px 프레임, 1px 면(라인) 기반 */
type IconProps = { size?: number; className?: string };

export const IconSearch: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
    <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.8" />
    <path d="M16 16l4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

/* icon/cancel — #C4C9D1 원형 채움 + 흰색 X */
export const IconCancel: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
    <circle cx="12" cy="12" r="10" fill="#C4C9D1" />
    <path d="M9 9l6 6M15 9l-6 6" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

export const IconChevron: React.FC<IconProps & { up?: boolean }> = ({ size = 24, className = '', up }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={`${className} transition-transform duration-200 ${up ? 'rotate-180' : ''}`}
    aria-hidden
  >
    <path d="M5 9l7 7 7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const IconMinus: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
    <path d="M5 12h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

export const IconPlus: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

export const IconClose: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
    <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

export const IconCheck: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
    <path d="M5 12.5l4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* icon/loading-white — 도트 회전 스피너 */
export const IconLoading: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={`animate-spin ${className}`} aria-hidden>
    {Array.from({ length: 8 }).map((_, i) => {
      const a = (i / 8) * Math.PI * 2;
      return (
        <circle
          key={i}
          cx={12 + Math.cos(a) * 8}
          cy={12 + Math.sin(a) * 8}
          r={2.4 - i * 0.2}
          fill="currentColor"
          opacity={1 - i * 0.1}
        />
      );
    })}
  </svg>
);
