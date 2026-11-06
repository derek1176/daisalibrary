/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Figma: [고객향] 스타일가이드 > color (9899:7042)
        'main-01': '#1219F7',
        'main-02': '#595EF9',
        'main-04': '#F4F5FF',
        'sub-01': '#F7D915',
        'sub-02': '#F34766',
        error: '#F34766',
        'text-01': '#121212',
        'text-02': '#333333',
        'text-03': '#666666',
        'text-04': '#888888',
        'etc-01': '#C4C9D1',
        'etc-02': '#D7DBE2',
        'etc-03': '#EBEEF2',
        'etc-04': '#F7F8FA',
        'etc-05': '#FAFAFA',
      },
      fontFamily: {
        sans: [
          'Pretendard Variable',
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
        pretendard: [
          'Pretendard Variable',
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
      letterSpacing: {
        da24: '-0.01em',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(18,18,18,0.04), 0 4px 16px rgba(18,18,18,0.04)',
        pop: '0 12px 40px rgba(18,18,18,0.16)',
      },
    },
  },
  plugins: [],
};