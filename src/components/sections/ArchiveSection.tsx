import React, { useState } from 'react';

const CUSTOMER_MD_CONTENT = `# 다이사(da24) 공식 고객향 디자인시스템 명세서 (Daisa Customer Design System)

> **문서 버전**: v2.0.0 (Figma Linter & AI Engine Edition)  
> **최종 갱신일**: 2026-11-09  
> **적용 대상**: 다이사(da24) B2C 고객향 웹 & 모바일 서비스 전반  
> 🚨 **절대 원칙 (Non-Negotiable)**: 절대 파트너향과 고객향의 md 파일 및 명세는 섞여서는 안 되며, 반드시 각자의 md 파일을 기준으로 독립적으로 작업해야 합니다. 사용자가 "두 개를 동시에 바꿔라" 또는 "통일시켜라"라고 명시적으로 지시하지 않는 한, 절대로 두 시스템을 임의로 통일시키지 마십시오.

---

## 1. 레벨 1: 절대 불변 규칙 (Hard Rules / 플러그인 100% 차단 대상)

### 1-1. 타이포그래피 (Typography)
* **단일 서체**: 오직 **\`Pretendard\`** 단일 서체만 사용합니다. (시스템 산세리프, AppleGothic, Roboto 등 혼용 금지)
* **자간**: 모든 텍스트 레이어에 **\`letter-spacing: -1px\` (\`-0.01em\`)** 고정 적용.
* **굵기**: **\`Bold (700)\`**과 **\`Regular (400)\`** 2종만 허용.
* **짝수 6종 크기 원칙**: **\`12, 14, 16, 18, 20, 24px\`** 외 홀수(13, 15, 17px) 및 소수점 폰트 크기 사용 엄격 차단.
  * **예외 허용 (Micro Badge)**: 실시간 알림 카운트 배지(\`N개\`, \`3\`), 상태 태그 등 특수 초소형 배지에 한하여 **\`10px\` 또는 \`11px\`** 사용 허용.
* **타이포그래피 스케일 표**:

| 토큰명 | 크기 (Size) | 행간 (Line-Height) | 굵기 | 주요 권장 용도 |
| :--- | :---: | :---: | :---: | :--- |
| **Headline** | \`24px\` | \`140% (34px)\` | Bold / Regular | 페이지 메인 헤드라인, 신청 완료 대타이틀 |
| **Title** | \`20px\` | \`150% (30px)\` | Bold / Regular | 섹션 대제목, 팝업 및 모달 제목 |
| **Button / Body High**| \`18px\` | \`140% (25px) / 150%\` | Bold / Regular | 메인 액션 버튼(56px), 견적 금액 등 강조 본문 |
| **Body (★ 기본 본문)**| \`16px\` | \`150% (24px)\` | Bold / Regular | **고객향 기본 본문 텍스트**, 인풋 입력 값, 라벨, 모달 설명문 |
| **Sub** | \`14px\` | \`140% (20px)\` | Bold / Regular | 서브 라벨, 인풋 하단 에러 메시지, 설명 보조 문구 |
| **Caption** | \`12px\` | \`130% (16px)\` | Bold / Regular | 각주 약관 동의, 부가 메타데이터, 날짜/시간 표기 |
| *Micro Badge (예외)*| \`10px / 11px\`| \`120%\` | Bold | 알림 카운트 배지 전용 |

---

### 1-2. 컬러 토큰 (Color Tokens & Role Mapping)
허용된 13대 Hex 토큰 외의 임의 색상 사용은 피그마 플러그인 린터에서 에러로 검출합니다.

| 토큰명 | Hex 코드 | 역할 및 적용 위치 (Role Mapping) |
| :--- | :---: | :--- |
| **main-01** | \`#1219F7\` | 메인 브랜드 키컬러, Primary CTA 버튼 배경, 포커스 인풋 보더 |
| **main-02** | \`#595EF9\` | 보조 블루 포인트, 서브 버튼 텍스트/보더 |
| **main-03** | \`#1219F7 ~ #595EF9\` | 대형 프로모션 배너 및 브랜드 그라디언트 |
| **main-04** | \`#F4F5FF\` | 키컬러 배경 틴트, 파란색 안내 뱃지 배경 |
| **sub-02** | \`#F34766\` | 에러 1px 스트로크, 하단 오류 피드백 텍스트 |
| **text-01** | \`#121212\` | 페이지 메인 대제목, 주요 강조 헤드라인 |
| **text-02** | \`#333333\` | 본문 기본 텍스트, 인풋 입력 값, 라벨 텍스트 |
| **text-03** | \`#666666\` | 보조 설명문, 입력창 힌트 문구, 주소 검색 팁 |
| **text-04** | \`#888888\` | 인풋 플레이스홀더, 비활성 텍스트, 각주 약관 |
| **etc-01** | \`#FFFFFF\` | 카드 컨테이너 배경, 인풋 필드 배경, 모달 팝업 배경 |
| **etc-02** | \`#D7DBE2\` | 기본 1px 테두리 (인풋 외곽선, 기본 카드 스트로크) |
| **etc-03** | \`#EBEEF2\` | 영역 구분선(Divider 1px), 모달 취소 버튼 배경 |
| **etc-04** | \`#F7F8FA\` | 비활성 인풋 배경, 비활성 버튼 배경 |
| **etc-05** | \`#FAFAFA\` | 서비스 기본 페이지 배경 |
| **dimmed** | \`rgba(0,0,0,0.6)\` | 모달 및 바텀시트 뒷배경 오버레이 (60%) |

---

### 1-3. 캔버스 및 레이아웃 안전 영역 (Layout Safe Area)
* **모바일 (Mobile)**:
  * 기준 프레임 캔버스 너비: **\`360px\`**
  * 좌우 마진 여백: **양측 각 \`24px\`** 고정
  * 본문 콘텐츠 안전 영역 (Safe Area): **\`312px\`** (360 - 24 * 2 = 312px)
  * 모든 메인 버튼, 폼 인풋, 기본 카드는 반드시 312px 이내로 배치합니다.
* **웹/PC (Desktop)**:
  * 기준 캔버스 너비: **\`1200px\`**
  * 콘텐츠 단일 열 집중: **\`640px\` 중앙 단일 열 정렬** (헤더, 본문 폼, 하단 버튼 모두 640px 일치)
  * 좌우 안전 여백: 각 \`280px\`

---

### 1-4. UX 라이팅 및 이모지 금지 룰 (UX Writing & Emoji)
* **이모지 전면 금지**: 텍스트 레이어에 \`📦, 🔥, ✨, 🚚\` 등 비표준 이모지 사용 절대 금지 (공식 선형 아이콘으로 대체).
* **문체 원칙**:
  * 타이틀: \`~해요체\` (마침표 없음) ➔ *ex. 출발지를 검색해 주세요*
  * 설명: \`~해요체\` (마침표 있음) ➔ *ex. 업체에게 모든걸 맡기세요.*
  * 유의사항/힌트: \`~합니다체\` (마침표 있음) ➔ *ex. 이벤트 신청은 1건당 1회 가능합니다.*
  * 버튼 텍스트: \`~하기체\` 또는 명사형 ➔ *ex. 설정하러 가기, 신청 정보 확인 완료*
* **외 표기법**:
  * 금액: \`48만 원\`, \`총 200만 원\`, \`340,000원\` (단위 간 띄어쓰기 준수)
  * 날짜: \`2024.07.06\` (연도 4자리 온점 표기)
  * 슬래시: 앞뒤 띄어쓰기 없음 (\`알림톡/mms\`)
  * 괄호: 국문 앞 붙여쓰기 (\`원룸/오피스텔(9평 이하)\`), 영문/숫자 앞 띄어쓰기 (\`oneroom (9평 이하)\`)
  * 콜론: 붙여쓰기 (\`1:1\`), 앰퍼샌드: 띄어쓰기 (\`조건 & 혜택\`)

---

## 2. 레벨 2: 필수 공통 컴포넌트 4대 규격 (Core 4 Components)

### 2-1. 버튼 (Button)
* **본문 표준 버튼 (Public Button - 공식 표준)**:
  * 크기: 모바일 너비 \`312px\` (PC \`640px\`), 높이 \`56px\`
  * Corner Radius: **\`10px\`**
  * 텍스트: \`16px Bold White\`, 중앙 정렬
  * 상태: Normal \`#1219F7\` / Loading (인디케이터) / Disabled \`#F7F8FA\` (텍스트 \`#888888\`)
  * ⚠️ **Floating CTA (360x56, r:0px)**는 구버전 레거시 규격으로 사용 금지.
* **모달 다이얼로그 버튼 (Modal Buttons)**:
  * 전체 너비 \`280px\`, 높이 \`56px\` (또는 \`48px\`), Corner Radius **\`10px\`**
  * [좌측 취소]: 너비 \`136px\`, 배경 \`#EBEEF2\`, 텍스트 \`#666666 16px Bold\`
  * [우측 확인]: 너비 \`136px\`, 배경 \`#1219F7\`, 텍스트 \`#FFFFFF 16px Bold\` (버튼 간 간격 8px)

### 2-2. 입력창 (Form Input)
* **규격**: 너비 \`312px\`, 높이 \`56px\`, Corner Radius **\`10px\`**, 좌우 패딩 \`16px\`
* **보더 스트로크**: 무조건 **\`1px solid\`** 고정 (두꺼운 2px 스트로크 금지)
  * 기본 상태: 보더 \`#D7DBE2\`, 배경 \`#FFFFFF\`, 텍스트 \`#333333 (16px Regular)\`
  * 포커스 상태: 보더 \`#1219F7\`
  * 에러 상태: 보더 **\`#F34766\`**, 텍스트 \`#F34766\`
  * 🚨 **에러 인풋 내 느낌표(\`!\`) 아이콘 절대 사용 금지** (1px 에러 보더와 하단 14px 안내 문구로만 피드백).
* **라벨**: 입력창 상단 \`14px Bold (#121212)\`

### 2-3. 오버레이 (Modal & Bottom Sheet)
* **Alert / Confirm 모달**: 너비 \`312px\` 중앙 정렬, Corner Radius **\`16px\`**, 배경 딤드 60%
* **바텀시트**: 모바일 전폭 \`360px\`, 상단 모서리만 **\`16px\`** (\`rounded-t-[16px]\`), 상단 중앙 핸들바 (\`36x4px, r:full, #D7DBE2\`)
* **1200px 반응형 절대 분기**:
  * \`360px ~ 1199px\`: 하단에서 슬라이드 업되는 **가변 바텀시트** (뷰포트 너비 대응)
  * \`1200px 이상\`: 화면 정중앙에 고정되는 **중앙 고정 모달** (\`w-[440px]\`, r:16px, 핸들바 숨김)

### 2-4. 카드 컨테이너 (Card Box)
* **배경 & 보더**: 순수 흰색 \`#FFFFFF\` 배경 + **\`1px solid #D7DBE2\` (또는 \`#E5E8EB\`)**
* **높이별 Corner Radius 3단계 (신규 확정 규격)**:
  * **소형 인라인 카드 (높이 ~ 79px)**: **\`8px\`** (\`rounded-[8px]\`) ➔ *단일 옵션 행, 1줄짜리 소형 정보 박스*
  * **표준 카드 (높이 80px ~ 240px)**: **\`10px\`** (\`rounded-[10px]\`) ➔ *견적 요약 카드, 기본 폼 블록 (전사 표준)*
  * **대형 컨테이너 카드 (높이 241px 이상)**: **\`12px\`** (\`rounded-[12px]\`) ➔ *화면 전체를 감싸는 대형 섹션 그룹*

---

## 3. 레벨 3: 디자이너 자유 영역 (Flexibility)

위의 4대 핵심 컴포넌트(버튼, 인풋, 오버레이, 카드)와 레벨 1의 토큰(서체, 짝수 크기, 컬러, 캔버스 안전영역)만 준수한다면:
1. 화면 내 카드들의 세로 배치 순서 및 그룹핑
2. 이사 날짜 선택 달력 레이아웃이나 세부 체크박스 목록 조합
3. 서비스 프로모션 안내 배너의 시각 구도
등은 **디자이너가 서비스 기획 의도에 맞춰 100% 자유롭게 디자인**할 수 있습니다.
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

      {/* 3. Action Card (심플 & 직관적인 다운로드 및 복사 영역) */}
      <div className="bg-white rounded-[16px] p-5 shadow-xs border border-[#E5E8EB] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
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

      {/* 4. Raw Markdown Viewer */}
      <div className="bg-white rounded-[16px] overflow-hidden shadow-xs border border-[#E5E8EB]">
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
