import { CUSTOMER_COLORS, CUSTOMER_TYPOGRAPHY } from '../data/customerRules';
import { PARTNER_COLORS, PARTNER_COLOR_USAGES, PARTNER_TYPOGRAPHY } from '../data/partnerRules';

export interface ColorToken {
  name: string;
  variable: string;
  hex: string;
  description: string;
  category: 'main' | 'text' | 'etc' | 'system';
  textColor?: string;
}

export const COLOR_TOKENS: ColorToken[] = Object.entries(CUSTOMER_COLORS).map(([name, hex]) => ({
  name, variable: `--color-${name}`, hex,
  description: name === 'sub-02' ? '오류·주의 피드백' : name === 'dimmed' ? '오버레이 60%' : '고객향 DESIGN.md 허용 토큰',
  category: name.startsWith('main') ? 'main' : name.startsWith('text') ? 'text' : name.startsWith('etc') ? 'etc' : 'system',
}));

export interface TypographyToken {
  name: string;
  size: number;
  weight: 'Bold' | 'Regular';
  lineHeight: string;
  letterSpacing: string;
  usage: string;
  sampleText: string;
}

export const TYPOGRAPHY_TOKENS: TypographyToken[] = CUSTOMER_TYPOGRAPHY.map(item => ({
  name: item.name, size: item.size, weight: item.weight === 700 ? 'Bold' : 'Regular',
  lineHeight: `${item.lineHeight}px`, letterSpacing: '-1% (CSS -0.01em)',
  usage: item.usage, sampleText: '다이사에서 검증된 우수 업체를 만나보세요',
}));

export const FIGMA_SOURCES = [
  {
    title: '[파트너] 스타일가이드',
    key: 'loNec9fjF6nIEgkwxH7aSN',
    nodes: [
      { id: '1:9', name: 'typography (Display 32 ~ Caption 14)' },
      { id: '1:305', name: 'color (main-01, text-01~04, etc-01~05)' },
      { id: '18:38', name: '360x780 모바일 작업 규격 (312px 전폭, 62px r6 CTA)' },
      { id: '18:76', name: '1200x780 웹 작업 규격 (627px 단일 열 카드)' }
    ]
  },
  {
    title: '[개발] v1.2',
    key: 'G5JiHI51FV6XFImlsyON6u',
    nodes: [
      { id: '1:130', name: '[파트너향] 회원가입 수정' },
      { id: '8289:17503', name: '[파트너향] CPQ 바로견적 (업체향_메인 360x1108)' }
    ]
  },
  {
    title: '[고객향] 스타일가이드',
    key: 'csWoLlTCHOtuE7oAMswuL7',
    nodes: [
      { id: '9852:6081', name: '디자인시스템 메인 캔버스' },
      { id: '384:1369', name: '여백 및 팝업 규격 (Margin)' },
      { id: '8788:5522', name: '가이드 정리 (202503)' }
    ]
  }
];

export const PARTNER_COLOR_TOKENS: ColorToken[] = Object.entries(PARTNER_COLORS).map(([name, hex]) => ({
  name, variable: `--color-${name}`, hex,
  description: PARTNER_COLOR_USAGES[name as keyof typeof PARTNER_COLORS],
  category: name.startsWith('main') ? 'main' : name.startsWith('text') ? 'text' : name.startsWith('etc') ? 'etc' : 'system',
}));

export const PARTNER_TYPOGRAPHY_TOKENS: TypographyToken[] = PARTNER_TYPOGRAPHY.map(item => ({
  name: item.name, size: item.size, weight: item.weight === 700 ? 'Bold' : 'Regular',
  lineHeight: `${item.lineHeight}px`, letterSpacing: '-1% (CSS -0.01em)',
  usage: item.usage, sampleText: '견적 요청 내용과 작업 조건을 확인합니다.',
}));
