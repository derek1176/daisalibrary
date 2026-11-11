// Partner values are independently maintained from the customer system.
export const PARTNER_COLORS = {
  'main-01': '#1219F7', 'main-02': '#595EF9', 'main-04': '#F4F5FF',
  'sub-01': '#F7D915', 'sub-02': '#F34766',
  'text-01': '#121212', 'text-02': '#333333', 'text-03': '#666666', 'text-04': '#888888',
  'etc-01': '#C4C9D1', 'etc-02': '#D7DBE2', 'etc-03': '#EBEEF2', 'etc-04': '#F7F8FA', 'etc-05': '#FAFAFA',
  'system-01': '#000000', 'system-02': '#FFFFFF',
  dimmed: 'rgba(0, 0, 0, 0.6)',
} as const;

export const PARTNER_COLOR_USAGES: Record<keyof typeof PARTNER_COLORS, string> = {
  'main-01': '주요 버튼 배경, 승인·확정 강조',
  'main-02': '보조 액션 텍스트·테두리, 보조 포인트',
  'main-04': '안내 배경, 선택 영역의 옅은 배경',
  'sub-01': '주의 안내, 배차 추천 강조',
  'sub-02': '오류·경고·반려 안내',
  'text-01': '주요 제목, 견적 금액, 주문 번호',
  'text-02': '기본 본문, 입력 값, 고객명·주소',
  'text-03': '보조 설명, 견적 일시, 부가 정보',
  'text-04': '옅은 보조 텍스트, 플레이스홀더',
  'etc-01': '진한 구분선, 보조 테두리',
  'etc-02': '입력창·카드의 기본 1px 테두리',
  'etc-03': '연한 구분선, 보조 버튼 배경',
  'etc-04': '옅은 보조 영역 배경',
  'etc-05': '기본 페이지 배경',
  'system-01': '순수 검정이 필요한 그래픽 요소',
  'system-02': '카드·입력창·모달 배경, 주요 버튼 텍스트',
  dimmed: '모달·바텀시트의 60% 배경 오버레이',
};

export const PARTNER_TYPOGRAPHY = [
  { name: 'Display', size: 32, lineHeight: 45, weight: 700, usage: '핵심 성과 지표, 환영 메시지' },
  { name: 'Headline', size: 28, lineHeight: 40, weight: 700, usage: '페이지 대표 제목, 완료 화면 제목' },
  { name: 'Title', size: 24, lineHeight: 34, weight: 700, usage: '섹션 제목' },
  { name: 'Sub-Title', size: 20, lineHeight: 30, weight: 700, usage: '그룹 소제목, 모달 제목' },
  { name: 'Body 1', size: 18, lineHeight: 27, weight: 400, usage: '기본 본문, 입력 값, 주요 설명' },
  { name: 'Body 2', size: 16, lineHeight: 24, weight: 400, usage: '보조 설명, 테이블 보조 정보' },
  { name: 'Caption', size: 14, lineHeight: 21, weight: 400, usage: '각주, 날짜, 부가 정보, 작은 태그' },
] as const;

export const PARTNER_RADII = [
  { val: '6px', name: '기본 컴포넌트 / 모달', desc: '일반 버튼·입력창·카드·모달 · AI 임의 조정 금지', tailwind: 'rounded-[6px]', highlight: true },
  { val: '16px', name: '바텀시트 상단', desc: '명시적 예외: 위쪽 좌우 16px · 아래쪽 0px · 중앙 모달 전환 시 6px', tailwind: 'rounded-t-[16px]', highlight: false },
  { val: 'Full', name: '원형 / Pill', desc: '원형·캡슐형 요소·핸들바', tailwind: 'rounded-full', highlight: false },
];
