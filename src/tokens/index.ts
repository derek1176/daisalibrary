export interface ColorToken {
  name: string;
  variable: string;
  hex: string;
  description: string;
  category: 'main' | 'text' | 'etc' | 'system';
  textColor?: string;
}

export const COLOR_TOKENS: ColorToken[] = [
  // Main
  { name: 'main-01', variable: '--color-main-01', hex: '#1219F7', description: 'Primary Blue 키컬러 (메인 CTA, 주요 활성 상태)', category: 'main', textColor: '#FFFFFF' },
  { name: 'main-02', variable: '--color-main-02', hex: '#595EF9', description: 'Secondary Blue (보조 강조, 일러스트 포인트)', category: 'main', textColor: '#FFFFFF' },
  { name: 'main-04', variable: '--color-main-04', hex: '#F4F5FF', description: 'Tint Background (강조 영역 배경, 뱃지 배경)', category: 'main', textColor: '#1219F7' },
  // Text
  { name: 'text-01', variable: '--color-text-01', hex: '#121212', description: 'Title, Headline, 강한 본문 (주요 텍스트)', category: 'text', textColor: '#FFFFFF' },
  { name: 'text-02', variable: '--color-text-02', hex: '#333333', description: 'Body Text, 일반 텍스트, 라벨', category: 'text', textColor: '#FFFFFF' },
  { name: 'text-03', variable: '--color-text-03', hex: '#666666', description: 'Sub contents, 서브 설명, 보조 텍스트', category: 'text', textColor: '#FFFFFF' },
  { name: 'text-04', variable: '--color-text-04', hex: '#888888', description: 'Caption, Placeholder, 비활성 텍스트', category: 'text', textColor: '#FFFFFF' },
  // Etc
  { name: 'etc-02', variable: '--color-etc-02', hex: '#D7DBE2', description: '기본 보더 (Input, Card 테두리 기본값)', category: 'etc', textColor: '#121212' },
  { name: 'etc-03', variable: '--color-etc-03', hex: '#EBEEF2', description: '구분선 Divider, 연한 테두리, 취소 버튼 배경', category: 'etc', textColor: '#121212' },
  { name: 'etc-04', variable: '--color-etc-04', hex: '#F7F8FA', description: '비활성 배경, 카드 배경, 인풋 Disabled BG', category: 'etc', textColor: '#121212' },
  // System
  { name: 'error', variable: '--color-error', hex: '#F34765', description: 'System Error, 경고 및 에러 피드백', category: 'system', textColor: '#FFFFFF' },
  { name: 'dimmed', variable: '--color-dimmed', hex: 'rgba(0, 0, 0, 0.60)', description: 'Modal, BottomSheet Dimmed Background (60%)', category: 'system', textColor: '#FFFFFF' },
];

export interface TypographyToken {
  name: string;
  size: number;
  weight: 'Bold' | 'Regular';
  lineHeight: string;
  letterSpacing: string;
  usage: string;
  sampleText: string;
}

export const TYPOGRAPHY_TOKENS: TypographyToken[] = [
  { name: 'headline_B_24', size: 24, weight: 'Bold', lineHeight: '140% (34px)', letterSpacing: '-1px (-0.01em)', usage: '페이지 대타이틀, 주요 완료/안내 문구', sampleText: '다이사에서 검증된 우수 업체를 만나보세요' },
  { name: 'title_B_20', size: 20, weight: 'Bold', lineHeight: '150% (30px)', letterSpacing: '-1px (-0.01em)', usage: '섹션 타이틀, 팝업/모달 제목', sampleText: '견적 요청 내용을 확인해 주세요' },
  { name: 'button_B_18', size: 18, weight: 'Bold', lineHeight: '140% (26px)', letterSpacing: '-1px (-0.01em)', usage: '하단 고정 플로팅 CTA 버튼, 바텀시트 헤더', sampleText: '무료 방문견적 신청하기' },
  { name: 'body_B_16', size: 16, weight: 'Bold', lineHeight: '150% (24px)', letterSpacing: '-1px (-0.01em)', usage: '본문 강조, 인컨텐츠 버튼 텍스트, 인풋 텍스트', sampleText: '이사 예정일과 출발지를 입력하세요' },
  { name: 'body_R_16', size: 16, weight: 'Regular', lineHeight: '150% (24px)', letterSpacing: '-1px (-0.01em)', usage: '일반 본문 텍스트, 모달 본문 설명', sampleText: '고객님의 안심 이사를 위해 전문 상담원이 배정됩니다.' },
  { name: 'sub_B_14', size: 14, weight: 'Bold', lineHeight: '140% (20px)', letterSpacing: '-1px (-0.01em)', usage: '소분류 타이틀, 칩/뱃지 레이블', sampleText: '포장이사 견적안내' },
  { name: 'sub_R_14', size: 14, weight: 'Regular', lineHeight: '140% (20px)', letterSpacing: '-1px (-0.01em)', usage: '서브 정보, 도움말 문구, 폼 힌트', sampleText: '견적 확인 후 언제든지 변경 가능합니다.' },
  { name: 'caption_B_12', size: 12, weight: 'Bold', lineHeight: '130% (16px)', letterSpacing: '-1px (-0.01em)', usage: '태그 강조, 알림 뱃지', sampleText: '방문견적 가능' },
  { name: 'caption_R_12', size: 12, weight: 'Regular', lineHeight: '130% (16px)', letterSpacing: '-1px (-0.01em)', usage: '각주, 약관 링크, 날짜/시간 메타정보', sampleText: '접수일 기준 3영업일 이내 순차 연락' },
];

export const FIGMA_SOURCES = [
  {
    title: '[고객향] 스타일가이드',
    key: 'csWoLlTCHOtuE7oAMswuL7',
    nodes: [
      { id: '9852:6081', name: '디자인시스템 메인 캔버스' },
      { id: '384:1369', name: '여백 및 팝업 규격 (Margin)' },
      { id: '8788:5522', name: '가이드 정리 (202503)' }
    ]
  },
  {
    title: '[개발] v1.2',
    key: 'G5JiHI51FV6XFImlsyON6u',
    nodes: [
      { id: '7785:11499', name: '에어컨 페이지 리뉴얼' },
      { id: '6813:9676', name: '후기 페이지 리뉴얼 (모달 포함)' }
    ]
  },
  {
    title: '[개발] v1.1',
    key: 'KLDA7nLwHvbDCIHS6y0MgT',
    nodes: [
      { id: '7349:334', name: '인터넷 가격 비교' },
      { id: '7350:4922', name: '렌탈수정 (모달 포함)' },
      { id: '6178:2247', name: '메인페이지 개편 V3' },
      { id: '6351:8380', name: '에어컨 일반접수 불가' },
      { id: '6458:2639', name: '빠크 방문견적 모달' }
    ]
  }
];
