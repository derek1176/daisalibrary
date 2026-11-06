/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-01': '#1219F7',
        'main-02': '#595EF9',
        'main-04': '#F4F5FF',
        'text-01': '#121212',
        'text-02': '#333333',
        'text-03': '#666666',
        'text-04': '#888888',
        'etc-02': '#D7DBE2',
        'etc-03': '#EBEEF2',
        'etc-04': '#F7F8FA',
        'error': '#F34765',
        'key-02': '#00B6ED',
        'dimmed': 'rgba(0, 0, 0, 0.6)',
      },
      fontFamily: {
        pretendard: [
          'Pretendard',
          '-apple-system',
          'BlinkMacSystemFont',
          'system-ui',
          'Roboto',
          'Helvetica Neue',
          'Segoe UI',
          'Apple SD Gothic Neo',
          'Noto Sans KR',
          'Malgun Gothic',
          'sans-serif',
        ],
      },
      fontSize: {
        'caption': ['12px', { lineHeight: '16px' }],
        'sub': ['14px', { lineHeight: '20px' }],
        'body-sm': ['16px', { lineHeight: '24px' }],
        'body-lg': ['18px', { lineHeight: '26px' }],
        'title': ['20px', { lineHeight: '30px' }],
        'headline': ['24px', { lineHeight: '34px' }],
      },
      letterSpacing: {
        'da24': '-0.01em', // -1px standard
      },
      borderRadius: {
        'btn': '10px',
        'modal': '16px',
        'sheet': '16px',
      },
      width: {
        'grid-content': '312px',
        'mobile-frame': '360px',
        'tablet-frame': '768px',
        'pc-frame': '1200px',
        'modal-btn': '280px',
        'modal-split': '136px',
      },
      height: {
        'cta': '56px',
        'input': '56px',
        'modal-btn': '48px',
        'modal-btn-lg': '56px',
      }
    },
  },
  plugins: [],
}
