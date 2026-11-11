import { CUSTOMER_COLORS, CUSTOMER_TYPOGRAPHY } from '../data/customerRules';

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

export const PARTNER_COLOR_TOKENS: ColorToken[] = [
  // Main
  { name: 'main-01', variable: '--color-main-01', hex: '#1219F7', description: 'Primary Blue (메인 CTA 62px, 주요 활성 상태, 견적 확정)', category: 'main', textColor: '#FFFFFF' },
  { name: 'main-02', variable: '--color-main-02', hex: '#595EF9', description: 'Secondary Blue (보조 인터랙션, 그래픽 강조 포인트)', category: 'main', textColor: '#FFFFFF' },
  { name: 'main-04', variable: '--color-main-04', hex: '#F4F5FF', description: 'Tint Background (강조 영역 배경, 뱃지 배경)', category: 'main', textColor: '#1219F7' },
  // Sub
  { name: 'sub-01', variable: '--color-sub-01', hex: '#F7D915', description: 'Sub Yellow (주의 알림, 배차 추천 하이라이트)', category: 'system', textColor: '#121212' },
  { name: 'sub-02', variable: '--color-sub-02', hex: '#F34766', description: 'Sub Red (취소, 경고 피드백, 반려, 에러)', category: 'system', textColor: '#FFFFFF' },
  // Text
  { name: 'text-01', variable: '--color-text-01', hex: '#121212', description: 'Title, Headline, 금액, 주문 번호 등 주요 정보', category: 'text', textColor: '#FFFFFF' },
  { name: 'text-02', variable: '--color-text-02', hex: '#333333', description: 'Body Text, 폼 입력 텍스트, 고객명, 주소 라벨', category: 'text', textColor: '#FFFFFF' },
  { name: 'text-03', variable: '--color-text-03', hex: '#666666', description: 'Sub contents, 보조 설명문, 부가 정보 안내문', category: 'text', textColor: '#FFFFFF' },
  { name: 'text-04', variable: '--color-text-04', hex: '#888888', description: 'Caption, Placeholder, 비활성 텍스트', category: 'text', textColor: '#FFFFFF' },
  // Etc
  { name: 'etc-01', variable: '--color-etc-01', hex: '#C4C9D1', description: '진한 구분선, 서브 보더', category: 'etc', textColor: '#121212' },
  { name: 'etc-02', variable: '--color-etc-02', hex: '#D7DBE2', description: '기본 보더 (Input, Card 테두리 기본값 1px)', category: 'etc', textColor: '#121212' },
  { name: 'etc-03', variable: '--color-etc-03', hex: '#EBEEF2', description: '구분선 Divider, 연한 테두리, 취소 버튼 배경', category: 'etc', textColor: '#121212' },
  { name: 'etc-04', variable: '--color-etc-04', hex: '#F7F8FA', description: '비활성 배경, 카드 배경, 인풋 Disabled BG', category: 'etc', textColor: '#121212' },
  { name: 'etc-05', variable: '--color-etc-05', hex: '#FAFAFA', description: '가장 연한 배경 컨테이너', category: 'etc', textColor: '#121212' },
];

export const PARTNER_TYPOGRAPHY_TOKENS: TypographyToken[] = [
  { name: 'display_B_32', size: 32, weight: 'Bold', lineHeight: '140% (45px)', letterSpacing: '-1px (-0.01em)', usage: '파트너 환영 배너, 핵심 실적 지표', sampleText: '파트너 사장님, 오늘 신규 견적 5건이 도착했습니다' },
  { name: 'headline_B_28', size: 28, weight: 'Bold', lineHeight: '140% (39px)', letterSpacing: '-1px (-0.01em)', usage: '대분류 페이지 메인 헤더, 바로견적 설정', sampleText: '1톤 이사 기본 견적과 작업 조건을 설정하세요' },
  { name: 'title_B_24', size: 24, weight: 'Bold', lineHeight: '140% (34px)', letterSpacing: '-1px (-0.01em)', usage: '섹션 타이틀, 팝업 제목, 주문 상세 정보', sampleText: '소형 포장이사｜하이패스매칭' },
  { name: 'subtitle_B_20', size: 20, weight: 'Bold', lineHeight: '150% (30px)', letterSpacing: '-1px (-0.01em)', usage: '그룹 소제목, 모달 제목, 출/도착지 헤더', sampleText: '출/도착지 및 작업 상세 정보' },
  { name: 'body1_B_18', size: 18, weight: 'Bold', lineHeight: '150% (27px)', letterSpacing: '-1px (-0.01em)', usage: '★ [파트너 기본 본문 강조] 고객명, 견적 금액, 62px CTA 버튼', sampleText: '오전 9시 이사 요청 (3매칭 견적 확정)' },
  { name: 'body1_R_18', size: 18, weight: 'Regular', lineHeight: '150% (27px)', letterSpacing: '-1px (-0.01em)', usage: '★ [파트너 기본 본문] 고객 요구사항, 폼 입력 텍스트', sampleText: '엘리베이터 사용 가능하며 사다리차 진입 공간 확보됨' },
  { name: 'body2_B_16', size: 16, weight: 'Bold', lineHeight: '150% (24px)', letterSpacing: '-1px (-0.01em)', usage: '테이블 데이터 강조, 서브 인라인 버튼 (48px)', sampleText: '통화하기 및 채팅하기' },
  { name: 'body2_R_16', size: 16, weight: 'Regular', lineHeight: '150% (24px)', letterSpacing: '-1px (-0.01em)', usage: '보조 설명문, 주소 상세 안내', sampleText: '서울특별시 강남구 테헤란로 152 강남파이낸스센터' },
  { name: 'caption_B_14', size: 14, weight: 'Bold', lineHeight: '150% (21px)', letterSpacing: '-1px (-0.01em)', usage: '상태 뱃지, 필수 입력 칩', sampleText: '방문견적 완료' },
  { name: 'caption_R_14', size: 14, weight: 'Regular', lineHeight: '150% (21px)', letterSpacing: '-1px (-0.01em)', usage: '각주, 접수 일시, 약관 (※ 12px 사용 금지)', sampleText: '2026년 3월 27일 14:30 등록됨' },
];
