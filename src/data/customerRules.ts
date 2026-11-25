// Customer-only content. Partner rules and the documentation site's own UI are independent.
export const CUSTOMER_COLORS = {
  'main-01': '#1219F7', 'main-02': '#595EF9', 'main-04': '#F4F5FF',
  'sub-01': '#F7D915', 'sub-02': '#F34766',
  'text-01': '#121212', 'text-02': '#333333', 'text-03': '#666666', 'text-04': '#888888',
  'etc-01': '#C4C9D1', 'etc-02': '#D7DBE2', 'etc-03': '#EBEEF2', 'etc-04': '#F7F8FA', 'etc-05': '#FAFAFA',
  'system-02': '#FFFFFF',
  dimmed: 'rgba(0, 0, 0, 0.6)',
} as const;

export const CUSTOMER_TYPOGRAPHY = [
  { name: 'Headline', size: 24, lineHeight: 34, weight: 700, usage: '페이지 대표 제목, 완료 화면 제목' },
  { name: 'Title', size: 20, lineHeight: 30, weight: 700, usage: '섹션 제목, 모달 제목' },
  { name: 'Emphasis', size: 18, lineHeight: 26, weight: 700, usage: '금액 등 강조 정보' },
  { name: 'Body', size: 16, lineHeight: 24, weight: 400, usage: '기본 본문, 입력 값, 주요 설명' },
  { name: 'Sub', size: 14, lineHeight: 20, weight: 400, usage: '보조 설명, 라벨, 안내 문구' },
  { name: 'Caption', size: 12, lineHeight: 16, weight: 400, usage: '각주, 날짜, 부가 정보, 작은 태그' },
] as const;

export const CUSTOMER_RADII = [
  { val: '10px', name: '기본 컴포넌트', desc: '일반 버튼·입력창·카드 UI · AI 임의 조정 금지', tailwind: 'rounded-[10px]', highlight: true },
  { val: '16px', name: '모달', desc: 'Alert / Confirm 및 중앙 모달', tailwind: 'rounded-[16px]', highlight: false },
  { val: '16px', name: '바텀시트 상단', desc: '위쪽 좌우 16px · 아래쪽 0px', tailwind: 'rounded-t-[16px]', highlight: false },
  { val: 'Full', name: '원형 / Pill', desc: '원형·캡슐형 요소·핸들바', tailwind: 'rounded-full', highlight: false },
];

export const CUSTOMER_COLOR_USAGES: Record<keyof typeof CUSTOMER_COLORS, string> = {
  "main-01": "주요 브랜드 색상, 주요 버튼 배경",
  "main-02": "보조 브랜드 포인트, 보조 액션 텍스트·테두리",
  "main-04": "브랜드 색상의 옅은 안내 배경",
  "sub-01": "주의 안내, 추천·혜택 강조 배경",
  "sub-02": "오류·주의 피드백 색상",
  "text-01": "주요 제목, 강조 텍스트",
  "text-02": "기본 본문, 입력 값, 일반 라벨",
  "text-03": "보조 설명",
  "text-04": "옅은 보조 텍스트, 플레이스홀더",
  "etc-01": "진한 구분선, 보조 테두리",
  "etc-02": "입력창·카드의 기본 테두리",
  "etc-03": "구분선",
  "etc-04": "옅은 보조 영역 배경",
  "etc-05": "기본 페이지 배경",
  "system-02": "카드·입력창·모달 배경, 주요 버튼 텍스트",
  "dimmed": "모달·바텀시트의 배경 오버레이"
};
