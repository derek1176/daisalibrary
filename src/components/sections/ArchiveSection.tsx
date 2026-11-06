import React, { useState } from 'react';

const CUSTOMER_MD_CONTENT = `# 다이사(da24) 공식 디자인시스템 명세서 (daisalibrary)

> **기준**: 고객향 프로덕션 표준 규격  
> 🚨 **절대 원칙 (Non-Negotiable)**: 절대 파트너향과 고객향의 md 파일 및 명세는 섞여서는 안 되며, 반드시 각자의 md 파일을 기준으로 독립적으로 작업해야 합니다. 사용자가 "두 개를 동시에 바꿔라" 또는 "통일시켜라"라고 명시적으로 지시하지 않는 한, 절대로 두 시스템을 임의로 통일시키지 마십시오.

---

## ⭐️ 디자인시스템 헌법: 절대 규칙 vs 유연한 규칙

AI 에이전트 및 프론트엔드 엔지니어가 다이사 서비스를 구현할 때, **디자인 일관성을 해치는 자의적 판단을 방지하기 위한 절대 규칙**과 **상황에 맞춰 합리적인 변형을 허용하는 유연한 규칙**을 엄격히 구분합니다.

### 1. 반드시 지켜야 하는 절대 규칙 (Non-Negotiables)
> 🚨 **타협 불가 원칙**: 어떤 상황에서도 디자이너의 사전 합의 없이 임의 변경하거나 타협할 수 없습니다.

1. **타이포그래피 절대 원칙 (Pretendard & 짝수 6종)**
   * 서체는 오직 **\`Pretendard\` 단일 서체**만 사용합니다. (시스템 산세리프 혼용 절대 금지)
   * 폰트 크기는 **\`12, 14, 16, 18, 20, 24px\` 짝수 6종** 외 절대 사용 금지 (13, 15, 17px 및 소수점 px 엄격 차단).
   * **예외 허용 (Micro Badge)**: 실시간 카운트 배지(\`N개\`, \`3\`), 상태 태그 등 특수 뱃지 제작 시에 한하여 **\`10px\` 또는 \`11px\`** 사용이 허용됩니다.
   * 모든 텍스트에 **\`letter-spacing: -1px (-0.01em)\`**을 필수 고정 적용합니다.
   * 굵기는 **\`Bold (700)\`**과 **\`Regular (400)\`** 2종만 사용합니다.

2. **작업 캔버스 및 레이아웃 절대 원칙**
   * **모바일 (Mobile)**:
     * 뷰포트 기준 프레임 너비: **\`360px\`**
     * 좌우 마진 (여백): **양측 각 \`24px\`** 고정
     * 안전 콘텐츠 영역 (Safe Area): **\`312px\`** (360 - 24 * 2 = 312)
     * 모든 인라인 버튼, 인풋, 카드, 모달은 반드시 312px 이내로 배치합니다.
   * **웹/PC (Desktop)**:
     * 캔버스 기준 너비: **\`1200px\`**
     * 핵심 정렬 구역: **\`640px\` 단일 열 중앙 집중 정렬**
     * **상단 헤더(640px), 본문 신청 폼(640px), 하단 액션 버튼(640px)** 모두 640px 단일 열로 완벽히 일치시킵니다. 좌우 280px은 안전 여백입니다.

3. **터치 타겟 및 인풋 높이 56px 룰**
   * 사용자가 직접 터치하거나 값을 입력하는 모든 기본 컨트롤러의 높이는 **\`56px\`**로 통일합니다.
     * 본문 메인 버튼: 높이 \`56px\`
     * 텍스트/숫자/검색 인풋: 높이 \`56px\`, 좌우 패딩 \`16px\`, Corner Radius **\`10px\`**
     * 셀렉트 드롭다운: 높이 \`56px\`
     * 모바일 헤더: 높이 \`56px\`
     * 바텀시트 리스트 아이템: 높이 \`56px\`

4. **버튼 표준: Public Button 사용 (Floating CTA 지양)**
   * **Public Button (★ 공식 표준)**: 향후 모든 신규 화면 및 리뉴얼 페이지에서는 **본문 인라인 Public Button (모바일 312px, PC 640px, Corner Radius 10px, 높이 56px)** 사용을 원칙으로 합니다.
   * **Floating CTA (360x56, r:0px)**: ⚠️ **레거시 규격(사용 지양)**으로, 이전 버전 디자인입니다. 신규 개발 시에는 사용을 지양하고 본문 인라인 버튼으로 전환합니다.

5. **컬러 토큰 절대 원칙**
   * **키컬러 (Primary Blue)**: \`#1219F7\`
   * **에러 피드백 (Error)**: **\`#F34766\`** (인풋 보더 스트로크 및 하단 에러 텍스트 통일)
   * **텍스트 위계 4종**: \`#121212\` (Headline/Title), \`#333333\` (Body/Input), \`#666666\` (Sub/Help), \`#888888\` (Caption/Placeholder)
   * **보더 및 구분선**: 기본 보더 \`#D7DBE2\`, 구분선 \`#EFF1F4\`, 비활성 배경 \`#F7F8FA\`
   * 임의의 Hex 컬러나 정의되지 않은 Tailwind 색상(\`blue-600\` 등) 생성을 엄격히 금지합니다.

6. **카드(Card) UI 기본 규격 및 일관성 원칙**
   * **기본 라운드**: **\`10px\` (\`rounded-[10px]\`)** 원칙 (버튼, 인풋과 동일한 전사 표준 곡률)
   * **위계별 허용 범위**: 소형 서브 카드 최소 \`8px\`, 표준 카드 기본 \`10px\`, 대형 섹션 그룹 최대 \`16px\`
   * 🚨 **금지 규격 (Anti-Pattern)**: 화면 내 다른 UI들과 이질감을 주는 임의의 라운드(예: 4px 직각 느낌, 20px 이상 과도한 곡률) 사용 금지
   * **보더 & 배경**: 순수 흰색 \`#FFFFFF\` 배경 및 \`1px solid #E5E8EB\` 기본, 불필요하게 두껍거나 튀는 보더 지양
   * **그림자**: 없거나 은은한 소프트 섀도우(\`0 2px 8px rgba(0,0,0,0.04)\`)만 허용, 짙은 그림자 금지

---

## 🎨 공식 시맨틱 컬러 토큰 (Semantic Colors)

| 토큰명 | Hex 코드 | 권장 용도 |
| :--- | :--- | :--- |
| **main-01** | \`#1219F7\` | 전사 메인 브랜드 블루 (Primary CTA, 포커스 테두리) |
| **main-02** | \`#595EF9\` | 보조 블루 포인트 (서브 버튼, 선택 칩 테두리) |
| **main-03** | \`#1219F7 ~ #595EF9\` | 프로모션 배너 및 브랜드 강조 그라디언트 |
| **main-04** | \`#F4F5FF\` | 키컬러 배경 틴트 (상태 뱃지, 안내 박스 배경) |
| **sub-02** | \`#F34766\` | 에러 스트로크 및 오류 피드백 텍스트 |
| **text-01** | \`#121212\` | 페이지 대제목, 섹션 헤드라인 |
| **text-02** | \`#333333\` | 본문 기본 텍스트, 인풋 입력 값, 라벨 |
| **text-03** | \`#666666\` | 보조 설명문, 입력 힌트, 안내 문구 |
| **text-04** | \`#888888\` | 인풋 플레이스홀더, 비활성 텍스트, 각주 약관 |
| **etc-01** | \`#FFFFFF\` | 카드 컨테이너 배경, 인풋 필드 배경 |
| **etc-02** | \`#D7DBE2\` | 기본 보더 스트로크, 카드 라인 구분선 |
| **etc-03** | \`#EFF1F4\` | 영역 구분선, 취소/보조 버튼 배경 |
| **etc-04** | \`#F7F8FA\` | 비활성 인풋 배경, 탭바 컨테이너 배경 |
| **etc-05** | \`#FAFAFA\` | 전체 대시보드 및 서비스 기본 배경 |
| **dimmed** | \`rgba(0,0,0,0.6)\` | 모달 및 바텀시트 배경 오버레이 (60%) |
`;

const PARTNER_MD_CONTENT = `# 다이사 파트너 디자인시스템 표준 명세서 (Daisa Partner Design System)

> **문서 버전**: v1.0.0 (공식 제정)  
> **최종 갱신일**: 2026-11-06  
> 🚨 **절대 원칙 (Non-Negotiable)**: 절대 파트너향과 고객향의 md 파일 및 명세는 섞여서는 안 되며, 반드시 각자의 md 파일을 기준으로 독립적으로 작업해야 합니다. 사용자가 "두 개를 동시에 바꿔라" 또는 "통일시켜라"라고 명시적으로 지시하지 않는 한, 절대로 두 시스템을 임의로 통일시키지 마십시오.  
> **적용 대상**: 다이사(da24) 및 위매치(wematch) 파트너(이사업체, 청소업체, 기사님, 시공업체) 모바일 웹 & PC 파트너 관리 콘솔  
> **기준 피그마**:  
> 1. \`[파트너] 스타일가이드\` (\`loNec9fjF6nIEgkwxH7aSN\`) - 노드: \`0:1\`, \`1:9\` (Typography), \`1:305\` (Color), \`18:38\` (Mobile 360x780), \`18:76\` (Web 1200x780)  
> 2. \`[개발] v1.2\` (\`G5JiHI51FV6XFImlsyON6u\`) - 노드: \`1:130\` (파트너향 회원가입), \`8289:17503\` (파트너향 CPQ 바로견적)

---

## 1. 파트너향 핵심 4대 절대 원칙 (Immutable Rules)

고객향 디자인시스템이 부드러운 라운드(10px/16px)와 컴팩트한 본문(16px) 중심의 B2C 서비스라면, **파트너향 디자인시스템은 현장 기사님과 업체의 신속하고 정확한 조작성을 보장하는 고신뢰 규격**을 적용합니다.

### 1. 코너 라운드 (Corner Radius) 절대 기준: 전사 통일 Radius 6px
* **핵심 원칙**: 파트너 전사 UI의 모든 버튼, 모달, 카드, 인풋은 **\`Corner Radius 6px\` (\`rounded-[6px]\`)**를 강제 적용합니다.
* **고객향 라운드 금지**: 고객향의 \`10px\`, \`16px\` 곡률은 파트너향에서 절대 사용할 수 없습니다.
* **유일한 예외**: 필터 칩 및 세그먼트 배지는 완전한 알약 형태인 **\`rounded-full\`**을 적용합니다.

### 2. 타이포그래피 (Typography) 가독성 절대 기준: 기본 18px (Body 1)
현장 이동 중이거나 야외 채광 환경에서 모바일 및 태블릿을 주로 다루는 기사님의 특성을 반영하여, **기본 본문 텍스트를 18px로 대폭 상향**합니다.

* **기본 폰트**: Pretendard (Letter Spacing \`-1px / -0.01em\` 통일)
* **타이포그래피 스케일 7단계**:
  1. **Display (32px)**: Bold / Regular, Line Height 140% (45px) — 환영 메시지, 핵심 성과 지표
  2. **Headline (28px)**: Bold / Regular, Line Height 140% (39px) — 대분류 페이지 메인 헤더
  3. **Title (24px)**: Bold / Regular, Line Height 140% (34px) — 섹션 타이틀, 팝업 제목
  4. **Sub-Title (20px)**: Bold / Regular, Line Height 150% (30px) — 그룹 소제목, 모달 제목
  5. **Body 1 (18px) [★ 파트너 기본 본문]**: Bold / Regular, Line Height 150% (27px) — 주문 정보, 고객 견적 세부 내역, 폼 라벨, 폼 입력 텍스트
  6. **Body 2 (16px)**: Bold / Regular, Line Height 150% (24px) — 보조 설명문, 테이블 본문 데이터
  7. **Caption (14px)**: Bold / Regular, Line Height 150% (21px) — 각주, 약관, 날짜/시간 메타데이터 (※ 고객향 12px 극소 텍스트 사용 금지)

---

## 2. 작업 규격 (Canvas & Content Grid System)
다이사 파트너향은 **모바일 현장 뷰(w360)**와 **PC 관리자 콘솔 뷰(w1200)** 2대 반응형 뷰포트를 표준으로 삼습니다.

* **모바일 (Mobile)**:
  * 캔버스 너비: **\`360px\`**
  * 콘텐츠 안전 너비: **\`312px\`** (좌우 균등 마진 **\`24px\`** 필수)
  * 상단 네비게이션: 헤더 높이 **\`56px\`**
* **웹 관리자 콘솔 (Web Desktop)**:
  * 캔버스 너비: **\`1200px\`**
  * 글로벌 네비게이션(GNB): 높이 **\`80px\`** (전폭 1200px)
  * **콘텐츠 카드 단일 안전 너비: \`627px\`** (Order Container 규격)
    * 1200px 캔버스 중앙에 \`627px\` 단일 열 카드를 배치하고 모서리 라운드 **\`6px\`** 적용.
    * 내부 컨테이너 여백: 기본 패딩 **\`24px\`**.
`;

interface DarangiItem {
  id: number;
  x: number;
  y: number;
}

// 2D 다이사 마스코트 다랑이 (머리띠 '다이사' + 택배 상자 배달 모습)
const DarangieSvg: React.FC = () => (
  <svg
    width="96"
    height="104"
    viewBox="0 0 100 110"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="filter drop-shadow-[0_12px_24px_rgba(18,25,247,0.3)] select-none pointer-events-none"
  >
    {/* 풍성한 다람쥐 꼬리 (우측) */}
    <path
      d="M68 85 C92 82 108 62 100 38 C94 22 78 18 70 26 C65 31 66 42 73 47 C80 52 82 62 74 76 Z"
      fill="#F58220"
      stroke="#191F28"
      strokeWidth="3"
      strokeLinejoin="round"
    />
    <path
      d="M78 35 C83 38 86 48 80 58"
      stroke="#FFE599"
      strokeWidth="2.5"
      strokeLinecap="round"
    />

    {/* 왼쪽 귀 */}
    <path
      d="M24 38 C17 24 21 10 31 14 C39 18 39 30 37 38 Z"
      fill="#FFA033"
      stroke="#191F28"
      strokeWidth="3"
      strokeLinejoin="round"
    />
    <path d="M26 28 C24 21 26 16 29 18" stroke="#FF7B7B" strokeWidth="2.5" strokeLinecap="round" />

    {/* 오른쪽 귀 */}
    <path
      d="M63 38 C61 30 61 18 69 14 C79 10 83 24 76 38 Z"
      fill="#FFA033"
      stroke="#191F28"
      strokeWidth="3"
      strokeLinejoin="round"
    />
    <path d="M74 28 C76 21 74 16 71 18" stroke="#FF7B7B" strokeWidth="2.5" strokeLinecap="round" />

    {/* 다랑이 몸통 */}
    <ellipse cx="50" cy="78" rx="26" ry="24" fill="#FFA033" stroke="#191F28" strokeWidth="3" />
    <ellipse cx="50" cy="80" rx="15" ry="16" fill="#FFFDF0" />

    {/* 다랑이 머리 */}
    <ellipse cx="50" cy="48" rx="33" ry="28" fill="#FFA033" stroke="#191F28" strokeWidth="3" />

    {/* 흰색 머리띠 ('다이사' 공식 텍스트) */}
    <path
      d="M19 40 C30 35 70 35 81 40 L82 48 C70 43 30 43 18 48 Z"
      fill="#FFFFFF"
      stroke="#191F28"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    <text
      x="50"
      y="45.5"
      textAnchor="middle"
      fontSize="6.5"
      fontWeight="900"
      fill="#1219F7"
      fontFamily="Pretendard, sans-serif"
    >
      다이사
    </text>

    {/* 볼살 및 하얀 털 */}
    <ellipse cx="38" cy="54" rx="9" ry="7" fill="#FFFDF0" />
    <ellipse cx="62" cy="54" rx="9" ry="7" fill="#FFFDF0" />

    {/* 분홍 볼터치 */}
    <ellipse cx="27" cy="54" rx="4" ry="2.5" fill="#FF7B7B" opacity="0.65" />
    <ellipse cx="73" cy="54" rx="4" ry="2.5" fill="#FF7B7B" opacity="0.65" />

    {/* 반짝이는 큰 눈동자 */}
    <ellipse cx="37" cy="50" rx="3.5" ry="4.5" fill="#191F28" />
    <circle cx="36" cy="48.5" r="1.3" fill="#FFFFFF" />
    <ellipse cx="63" cy="50" rx="3.5" ry="4.5" fill="#191F28" />
    <circle cx="62" cy="48.5" r="1.3" fill="#FFFFFF" />

    {/* 코 & 웃는 입 */}
    <ellipse cx="50" cy="53" rx="2" ry="1.4" fill="#4A3423" />
    <path d="M47 55 Q50 58 53 55" stroke="#4A3423" strokeWidth="1.8" strokeLinecap="round" fill="none" />

    {/* 다랑이가 들고 있는 택배/이사 상자 (Box) */}
    <g transform="translate(29, 66)">
      <rect x="0" y="0" width="42" height="30" rx="3" fill="#C89354" stroke="#191F28" strokeWidth="2.5" />
      {/* 상자 테이프 라인 */}
      <line x1="0" y1="8" x2="42" y2="8" stroke="#A67338" strokeWidth="1.5" />
      <rect x="17" y="0" width="8" height="30" fill="#E8D2A6" stroke="#191F28" strokeWidth="1.5" />
      {/* 운송장 송장 라벨 */}
      <rect x="4" y="12" width="10" height="12" rx="1" fill="#FFFFFF" stroke="#191F28" strokeWidth="1" />
      <line x1="6" y1="15" x2="12" y2="15" stroke="#888888" strokeWidth="1" />
      <line x1="6" y1="18" x2="12" y2="18" stroke="#888888" strokeWidth="1" />
      <line x1="6" y1="21" x2="10" y2="21" stroke="#888888" strokeWidth="1" />
    </g>

    {/* 상자를 잡고 있는 귀여운 앞발 */}
    <ellipse cx="30" cy="78" rx="5" ry="4" fill="#FFA033" stroke="#191F28" strokeWidth="2.5" />
    <ellipse cx="70" cy="78" rx="5" ry="4" fill="#FFA033" stroke="#191F28" strokeWidth="2.5" />

    {/* 하단 발 */}
    <ellipse cx="38" cy="99" rx="7" ry="4" fill="#FFA033" stroke="#191F28" strokeWidth="2.5" />
    <ellipse cx="62" cy="99" rx="7" ry="4" fill="#FFA033" stroke="#191F28" strokeWidth="2.5" />
  </svg>
);

export const ArchiveSection: React.FC<{ mode?: 'customer' | 'partner' }> = ({ mode = 'customer' }) => {
  const isPartner = mode === 'partner';
  const [selectedDoc, setSelectedDoc] = useState<'customer' | 'partner'>(isPartner ? 'partner' : 'customer');
  const [copied, setCopied] = useState(false);
  const [darangis, setDarangis] = useState<DarangiItem[]>([]);

  const activeContent = selectedDoc === 'partner' ? PARTNER_MD_CONTENT : CUSTOMER_MD_CONTENT;
  const activeFileName = selectedDoc === 'partner' ? 'daisa_library_partner.md' : 'daisa_library_customer.md';

  const triggerDarangie = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const newDarangi: DarangiItem = {
      id: Date.now() + Math.random(),
      x: rect.left + rect.width / 2,
      y: rect.top - 20,
    };
    setDarangis((prev) => [...prev, newDarangi]);
    setTimeout(() => {
      setDarangis((prev) => prev.filter((item) => item.id !== newDarangi.id));
    }, 2100);
  };

  const handleDownload = (e: React.MouseEvent) => {
    triggerDarangie(e);
    const blob = new Blob([activeContent], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = activeFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(activeContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section id="archive" className="space-y-6 relative">
      {/* 1. Header (심플 영문 타이틀만) */}
      <div className="border-b pb-4 border-[#E5E8EB]">
        <h2 className="text-[28px] md:text-[32px] font-extrabold tracking-tight text-[#191F28]">
          Resources
        </h2>
      </div>

      {/* 2. 전환되는 Segmented Switcher UI (고급스러운 슬라이딩 토글 형태) */}
      <div className="relative bg-[#E2E6EE] p-1 rounded-[14px] flex items-center w-full max-w-[280px] select-none">
        {/* 부드럽게 좌우로 슬라이딩되는 화이트 썸 */}
        <div
          className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white rounded-[10px] shadow-sm transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            selectedDoc === 'customer' ? 'left-1' : 'left-[calc(50%+2px)]'
          }`}
        />

        {/* 탭 1: 고객향.md */}
        <button
          type="button"
          onClick={() => setSelectedDoc('customer')}
          className={`relative z-10 w-1/2 py-2 text-center text-[13px] font-bold transition-colors duration-200 cursor-pointer flex items-center justify-center gap-1.5 ${
            selectedDoc === 'customer' ? 'text-[#1219F7]' : 'text-[#6B7684] hover:text-[#191F28]'
          }`}
        >
          <span>고객향.md</span>
          {selectedDoc === 'customer' && (
            <span className="w-1.5 h-1.5 rounded-full bg-[#1219F7]" />
          )}
        </button>

        {/* 탭 2: 파트너향.md */}
        <button
          type="button"
          onClick={() => setSelectedDoc('partner')}
          className={`relative z-10 w-1/2 py-2 text-center text-[13px] font-bold transition-colors duration-200 cursor-pointer flex items-center justify-center gap-1.5 ${
            selectedDoc === 'partner' ? 'text-[#1219F7]' : 'text-[#6B7684] hover:text-[#191F28]'
          }`}
        >
          <span>파트너향.md</span>
          {selectedDoc === 'partner' && (
            <span className="w-1.5 h-1.5 rounded-full bg-[#1219F7]" />
          )}
        </button>
      </div>

      {/* 3. Action Card (심플 & 직관적인 다운로드 및 복사 영역, stroke 없음) */}
      <div className="bg-white rounded-[16px] p-5 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[16px] font-bold text-[#191F28]">
              {activeFileName}
            </span>
            <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#E8F3FF] text-[#1219F7]">
              Markdown
            </span>
          </div>
          <p className="text-[13px] text-[#6B7684]">
            {selectedDoc === 'partner'
              ? '파트너 공식 규격: Radius 6px · 기본 본문 18px · 모바일 360 & 웹 627px'
              : '고객향 프로덕션 규격: Pretendard · Radius 10px · 모바일 360 & 웹 640px'}
          </p>
        </div>

        {/* Buttons (아이콘 최소화, 명확한 텍스트 중심) */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={handleDownload}
            className="h-[42px] px-4 rounded-[10px] bg-[#1219F7] hover:bg-[#0E15D4] text-white font-bold text-[13px] shadow-xs transition-all active:scale-[0.98] cursor-pointer"
          >
            .md 다운로드
          </button>
          <button
            type="button"
            onClick={handleCopy}
            className="h-[42px] px-4 rounded-[10px] bg-[#F2F4F8] hover:bg-[#E5EAF2] text-[#333D4B] font-bold text-[13px] transition-all active:scale-[0.98] cursor-pointer"
          >
            {copied ? '복사 완료' : '원문 복사'}
          </button>
        </div>
      </div>

      {/* 4. Raw Markdown Viewer (stroke 없는 화이트 뷰어) */}
      <div className="bg-white rounded-[16px] overflow-hidden shadow-xs">
        <div className="px-5 py-3 border-b border-[#F2F4F8] flex items-center justify-between text-[12px] font-semibold text-[#8B95A1] bg-[#FAFAFB]">
          <span>{activeFileName} 미리보기</span>
          <button
            type="button"
            onClick={handleCopy}
            className="text-[12px] text-[#1219F7] hover:underline font-bold"
          >
            {copied ? '복사됨' : '전체 복사'}
          </button>
        </div>

        <div className="p-6 overflow-x-auto text-[13px] font-mono leading-relaxed text-[#333D4B] max-h-[640px] overflow-y-auto bg-white select-text">
          <pre className="whitespace-pre">
            <code>{activeContent}</code>
          </pre>
        </div>
      </div>

      {/* 5. 이스터에그: 다이사 마스코트 다랑이가 택배 상자 들고 뿅뿅뿅 위로 배달 */}
      {darangis.map((item) => (
        <div
          key={item.id}
          className="fixed pointer-events-none z-50 animate-darangie flex flex-col items-center select-none"
          style={{ left: `${item.x}px`, top: `${item.y}px` }}
        >
          <div className="mb-2 bg-[#191F28] text-white text-[12px] font-extrabold px-3.5 py-1.5 rounded-full whitespace-nowrap shadow-xl flex items-center gap-1.5 border border-white/20">
            <span>다랑이가 택배 배달 중! 뿅뿅뿅</span>
            <span>📦💨</span>
          </div>
          <DarangieSvg />
        </div>
      ))}
    </section>
  );
};

export default ArchiveSection;
