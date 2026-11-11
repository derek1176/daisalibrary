import React, { useEffect, useState } from 'react';
import CUSTOMER_MD_CONTENT from '../../../DESIGN.md?raw';
import START_HERE_CONTENT from '../../../START-HERE.md?raw';

const PARTNER_MD_CONTENT = `# 다이사(da24) 공식 파트너향 디자인시스템 명세서 (Daisa Partner Design System)

> **문서 버전**: v2.0.0 (Figma Linter & AI Engine Edition)  
> **최종 갱신일**: 2026-11-09  
> **적용 대상**: 다이사(da24) 및 위매치(wematch) 파트너(이사업체, 청소업체, 기사님, 시공업체) 모바일 웹 & PC 파트너 관리 콘솔  
> 🚨 **절대 원칙 (Non-Negotiable)**: 절대 파트너향과 고객향의 md 파일 및 명세는 섞여서는 안 되며, 반드시 각자의 md 파일을 기준으로 독립적으로 작업해야 합니다. 사용자가 "두 개를 동시에 바꿔라" 또는 "통일시켜라"라고 명시적으로 지시하지 않는 한, 절대로 두 시스템을 임의로 통일시키지 마십시오.  
> **기준 피그마**: \`[파트너] 스타일가이드\` (\`loNec9fjF6nIEgkwxH7aSN\`), \`[개발] v1.2\` (\`G5JiHI51FV6XFImlsyON6u\`)

---

## 1. 레벨 1: 절대 불변 규칙 (Hard Rules / 플러그인 100% 차단 대상)

고객향 디자인시스템이 부드러운 라운드(10px)와 컴팩트한 본문(16px) 중심의 B2C 서비스라면, **파트너향 디자인시스템은 현장 기사님과 업체의 신속하고 정확한 조작성을 보장하는 고신뢰 파트너 규격**을 적용합니다.

### 1-1. 모서리 곡률 (Corner Radius) 절대 기준: 6px 고정
* **표준 기본값**: 모든 카드 컨테이너, 폼 인풋, 메인 CTA 버튼의 Corner Radius는 **\`6px\`** 고정입니다.
* **서브 컴포넌트 허용값**: 좁은 테이블 인라인 액션 버튼, 작은 태그 칩은 **\`4px\`** 적용 가능.
* **특수 제외 대상**:
  * 캡슐형 칩/배지: **Pill (\`rounded-full\`)** 형태 예외 허용.
  * 모달 및 바텀시트: 화면 환경에 맞추어 유연하게 적용할 수 있도록 **곡률 검증 완전 면제**.
* 🚨 **엄격한 금지 규격 (Anti-Pattern)**:
  * 고객향에서 쓰이는 둥근 라운드(**\`10px\`, \`16px\`**) 사용 절대 금지 (플러그인 '수정 필요'로 차단 및 6px로 자동 교정).
  * 20px 이상의 과도한 곡률(Pill 제외) 및 0px 완전 직각 컨테이너 사용 금지.
  * 파트너 화면은 **\`Radius 6px\`**을 기본 아이덴티티로 통일하여 단단하고 신뢰감 있는 인터페이스를 유지합니다.

---

### 1-2. 타이포그래피 (Typography) 가독성 절대 기준: 기본 18px (Body 1)
현장 이동 중이거나 야외 채광 환경에서 모바일 및 태블릿을 주로 다루는 기사님의 특성을 반영하여, **기본 본문 텍스트를 18px로 대폭 상향**합니다.

* **서체**: **\`Pretendard\`** 또는 **\`Noto Sans KR\`** 단일 서체만 사용합니다.
* **자간**: 모든 텍스트 레이어에 **\`letter-spacing: -1px\` (\`-0.01em\`)** 고정 적용.
* **굵기**: **\`Bold (700)\`**과 **\`Regular (400)\`** 2종만 허용.
* **7단계 폰트 스케일 원칙**: **\`14, 16, 18, 20, 24, 28, 32px\`** 외 홀수 및 소수점 폰트 크기 사용 엄격 차단.
* 🚨 **극소 폰트 절대 금지 (Anti-Pattern)**:
  * 기사님 현장 시인성을 위해 고객향의 **12px 이하 극소 폰트는 사용이 전면 금지**됩니다. (최소 14px 필수)
* **파트너 타이포그래피 스케일 표**:

| 토큰명 | 크기 (Size) | 행간 (Line-Height) | 굵기 | 주요 권장 용도 |
| :--- | :---: | :---: | :---: | :--- |
| **Display** | \`32px\` | \`140% (45px)\` | Bold / Regular | 환영 메시지, 핵심 성과 지표 대형 수치 |
| **Headline** | \`28px\` | \`140% (39px)\` | Bold / Regular | 대분류 페이지 메인 헤더, 완료 대타이틀 |
| **Title** | \`24px\` | \`140% (34px)\` | Bold / Regular | 섹션 대제목, 팝업 제목 |
| **Sub-Title** | \`20px\` | \`150% (30px)\` | Bold / Regular | 그룹 소제목, 모달 타이틀 |
| **Body 1 (★ 파트너 기본 본문)** | \`18px\` | \`150% (27px)\` | Bold / Regular | **파트너 기본 본문 텍스트**, 주문 정보, 고객 견적 세부 내역, 폼 라벨, 폼 입력 텍스트 |
| **Body 2** | \`16px\` | \`150% (24px)\` | Bold / Regular | 보조 설명문, 테이블 서브 본문 데이터 |
| **Caption** | \`14px\` | \`150% (21px)\` | Bold / Regular | 각주 약관 동의, 날짜/시간 메타데이터 (※ 12px 극소 텍스트 사용 금지) |

---

### 1-3. 컬러 토큰 (Color Tokens & Role Mapping)
피그마 \`[파트너] 스타일가이드\` 노드 \`1:305\` 공식 등록 16대 Hex 토큰 외의 임의 색상 및 레거시 폐기 색상은 플러그인에서 엄격히 차단합니다.

| 토큰명 | Hex 코드 | 역할 및 적용 위치 (Role Mapping) |
| :--- | :---: | :--- |
| **main-01** | \`#1219F7\` | 메인 키컬러 (메인 CTA 버튼 배경, 주요 활성 상태, 승인 완료) |
| **main-02** | \`#595EF9\` | 서브 블루 포인트 (보조 인터랙션, 그래픽 강조 포인트, 아웃라인 보더) |
| **main-03** | \`#1219F7 ~ #595EF9\` | 브랜드 그라데이션 |
| **main-04** | \`#F4F5FF\` | 틴트 배경 (배지, 선택된 리스트 카드 배경) |
| **sub-01** | \`#F7D915\` | 서브 옐로우 (주의 알림, 배차 추천 하이라이트) |
| **sub-02** | \`#F34766\` | 서브 레드 / 에러 (취소, 경고 피드백, 반려) |
| **system-01** | \`#000000\` | 순수 블랙 |
| **system-02** | \`#FFFFFF\` | 순수 화이트 |
| **text-01** | \`#121212\` | 타이틀, 견적 금액, 주문 번호 등 주요 정보 |
| **text-02** | \`#333333\` | 본문 기본 텍스트, 폼 입력 텍스트, 고객명, 주소 라벨 |
| **text-03** | \`#666666\` | 보조 설명, 견적 일시, 부가 정보 안내문 |
| **text-04** | \`#888888\` | 캡션, 인풋 플레이스홀더, 비활성 텍스트 |
| **etc-01** | \`#C4C9D1\` | 진한 구분선, 서브 보더 |
| **etc-02** | \`#D7DBE2\` | 기본 1px 보더 (인풋창, 기본 카드 외곽 테두리 1px) |
| **etc-03** | \`#EBEEF2\` | 연한 구분선 Divider, 비활성 버튼 테두리 |
| **etc-04** | \`#F7F8FA\` | 비활성 배경, 카드 배경, 인풋 Disabled BG |
| **etc-05** | \`#FAFAFA\` | 가장 연한 영역 배경 |
| **dimmed** | \`rgba(0,0,0,0.6)\` | 모달 및 바텀시트 뒷배경 오버레이 (60%) |
| 🚫 **notused-01** | \`#999999\` | **레거시 폐기 색상 (사용 엄격 금지 ➔ text-03 또는 etc-01로 교체)** |
| 🚫 **notused-02** | \`#BCC0C6\` | **레거시 폐기 색상 (사용 엄격 금지 ➔ etc-01 또는 etc-02로 교체)** |

---

### 1-4. 캔버스 및 레이아웃 안전 영역 (Layout Safe Area)
* **모바일 현장 뷰 (Mobile)**:
  * 기준 캔버스 너비: **\`360px\`**
  * 좌우 마진 여백: **양측 각 \`24px\`** 고정
  * 본문 콘텐츠 안전 영역 (Safe Area): **\`312px\`** (360 - 24 * 2 = 312px)
  * 상단 네비게이션: 헤더 높이 **\`56px\`**
* **웹/PC 관리자 콘솔 (Desktop)**:
  * 기준 캔버스 너비: **\`1200px\`**
  * 글로벌 네비게이션(GNB): 높이 **\`80px\`** (전폭 1200px)
  * **콘텐츠 카드 단일 안전 너비: \`627px\`** (Order Container 규격)
    * 1200px 캔버스 중앙에 \`627px\` 단일 열 카드를 배치하고 모서리 라운드 **\`6px\`** 적용.
    * 내부 컨테이너 여백: 기본 패딩 **\`24px\`**.

---

### 1-5. UX 라이팅 및 이모지 금지 룰 (UX Writing & Emoji)
* **이모지 전면 금지**: 텍스트 레이어에 \`📦, 🔥, ✨, 🚚\` 등 비표준 네이티브 이모지 사용 절대 금지 (공식 선형 SVG 아이콘으로 대체).
* **문체 원칙**: 신속하고 명확한 업무 소통을 위해 간결한 명사형 또는 정중한 안내체 유지.

---

## 2. 레벨 2: 필수 공통 컴포넌트 4대 규격 (Core 4 Components)

### 2-1. 버튼 (Button)
* **Primary Bottom CTA (하단 고정 및 페이지 메인 버튼)**:
  * 크기: 모바일 너비 **\`312px\`** (PC **\`627px\`**), 높이 **\`56px\`** 또는 **\`62px\`**
  * Corner Radius: **\`6px\`**
  * 타이포그래피: **\`18px Bold White\`** (\`#FFFFFF\`, 배경 \`#1219F7\`)
* **Secondary / Inline 액션 버튼 (통화하기, 채팅하기, 수정하기 등)**:
  * 크기: 높이 **\`51px\`** 또는 **\`48px\`**
  * Corner Radius: **\`6px\`** (초소형 마이크로 버튼은 **\`4px\`**)
  * 타이포그래피: **\`16px Bold\`** 또는 **\`18px Bold\`**
  * 스타일: 취소(배경 \`#F2F4F6\`, 텍스트 \`#191F28\`) 또는 아웃라인(보더 1px \`#595EF9\`, 텍스트 \`#595EF9\`)

### 2-2. 입력창 (Form Input)
* **표준 인풋 (Text, Number, Select)**:
  * 너비: **\`312px\`** (모바일 전폭 안전영역)
  * 높이: **\`56px\`** (패딩 좌우 16px)
  * Corner Radius: **\`6px\`**
  * 텍스트 크기: **\`18px\`** (입력값 text-01 \`#121212\`, 플레이스홀더 text-04 \`#888888\`)
  * 보더 스타일: 기본 etc-02 \`#D7DBE2\` (1px solid), 포커스 시 main-01 \`#1219F7\` (2px solid), 에러 시 sub-02 \`#F34766\`
  * 비활성 상태: 배경 etc-04 \`#F7F8FA\`, 보더 etc-03 \`#EBEEF2\`

### 2-3. 오버레이 및 다이얼로그 (Modals & Popups)
* **Alert / Confirm 모달**:
  * 너비: **\`312px\`** (모바일 전폭 안전영역 중앙 정렬)
  * Corner Radius: **\`6px\`** (플러그인에서는 모달 판별 시 곡률 검증 면제)
  * 배경 딤드: \`rgba(0, 0, 0, 0.6)\` 60%
  * 타이틀: **\`20px Bold\`** (\`lh 150%\`)
  * 본문: **\`18px Regular\`** (\`lh 150%\`)
  * 하단 버튼: 높이 **\`48px\`** 또는 **\`51px\`**, Corner Radius **\`6px\`**
* **바텀시트 (Bottom Sheet)**:
  * 너비: 모바일 전폭 **\`360px\`**
  * 상단 모서리 라운드: **\`16px\`** (기사님이 한 손으로 밀어 올릴 수 있는 슬라이드 제스처 영역)
  * 리스트 아이템: 높이 **\`56px\`**, 텍스트 **\`18px\`**

### 2-4. 필터 칩 및 태그 (Filter Chips)
* **형태**: 라운드 수치(6px)에 구애받지 않고 전사 공통 **완전한 라운드 형태 (Pill / rounded-full)** 적용.
* **규격**: 높이 **\`36px\`**, 텍스트 **\`14px Semibold\`**.

---

## 3. 고객향 vs 파트너향 핵심 비교 요약표

| 항목 | 고객향 (Customer) | 파트너향 (Partner) |
| :--- | :--- | :--- |
| **기본 본문 텍스트** | \`16px\` (Body) | **\`18px\` (Body 1)** (현장 가독성 강화) |
| **최소 캡션 크기** | \`12px\` | **\`14px\`** (\`12px\` 금지) |
| **기본 모서리 곡률** | \`10px\` (카드), \`16px\` (모달) | **\`6px\`** (카드, 인풋, 버튼 등 전사 통일) |
| **메인 CTA 버튼** | 높이 \`56px\`, Radius \`10px\`, \`16px Bold\` | 높이 **\`56px/62px\`**, Radius **\`6px\`**, **\`18px Bold\`** |
| **폼 인풋 규격** | 너비 \`312px\`, 높이 \`56px\`, Radius \`10px\` | 너비 \`312px\`, 높이 \`56px\`, Radius **\`6px\`** |
| **웹(Web) 콘텐츠 열 너비**| \`1200px\` 캔버스 내 \`640px\` 열 | \`1200px\` 캔버스 내 **\`627px\`** 주문 카드 열 |
| **모바일(Mobile) 콘텐츠** | \`360px\` 캔버스 내 \`312px\` 열 | \`360px\` 캔버스 내 **\`312px\`** 열 |
| **UI 테마 성격** | 모던 Toss 라이트 스타일 | **모던 Toss 라이트 스타일 (파트너 전용 18px / 6px)** |

---

## 4. AI 디자인 생성 및 자가 검증 프롬프트 (AI Self-Verification Protocol)

> **💡 사용법**: Figma Make(피그마 AI), Claude, ChatGPT, Cursor 등에게 다이사 파트너향(기사님/업체 관리 콘솔) 화면/컴포넌트 디자인이나 UI 코드를 요청할 때, 프롬프트 최상단에 아래 블록을 그대로 복사하여 붙여넣으세요.

\`\`\`text
[다이사 파트너향 디자인시스템 AI 생성 및 자가 검증 프로토콜]
당신은 다이사(da24) 및 위매치 파트너(이사업체, 청소업체, 기사님) B2B 화면 UI/UX를 전문으로 제작하는 디자이너 및 엔지니어입니다.
화면 디자인, 컴포넌트, 또는 UI 코드를 출력하기 직전, 반드시 아래 5대 규칙을 자체 전수조사하고 스스로 교정한 뒤 최종 결과물을 제시해야 합니다.

0. 🚨 [최우선 절대 원칙] 루트 캔버스 규격 (Canvas Width & Margin):
   - 모바일 최상위 프레임 너비: 무조건 '360px' 고정 (Width = 360).
   - 좌우 오토레이아웃 여백: 무조건 '양측 각 24px' 고정 (Padding-X = 24, 안전영역 312px).
   - ⚠️ [절대 금지]: 피그마 기본 iPhone 규격(402px, 393px, 390px, 430px) 생성을 엄격히 금지합니다. 좌우 여백 16px 생성을 절대 금지합니다.
   - PC 웹 규격: 캔버스 1200px, 중앙 오더 컨테이너 '627px', 좌우 마진 각 286.5px.

1. 모서리 곡률 (Corner Radius) 6px 원칙:
   - 파트너 화면의 모든 카드, 버튼, 폼 인풋의 모서리 곡률은 '6px'을 기본 아이덴티티로 통일합니다. (고객향의 10px, 16px은 파트너 화면에서 사용 금지).
   - 작은 인라인 버튼/태그 칩은 4px 허용, 캡슐형 칩은 Pill 허용.
   - 모달/바텀시트는 화면 환경에 맞게 유연하게 구성.

2. 컬러 토큰 (Color Tokens) 엄격 준수:
   - 임의의 HEX 컬러 및 레거시 폐기 색상(#0088FF, #232527 등) 절대 사용 금지.
   - 오직 파트너 공식 토큰(#1219F7, #595EF9, #17191F, #30333B, #727883, #B0B5BD, #DDE1E6, #F1F3F5, #FFFFFF 등)만 사용하십시오.

3. 타이포그래피 (Typography) 고시인성 스케일:
   - 서체는 'Noto Sans KR' 또는 'Pretendard'를 사용합니다.
   - 기사님 현장 시인성을 위해 고객향의 12px 극소 폰트는 절대 사용 금지(최소 14px 이상 필수).
   - 기본 본문 크기는 '18px (Body 1)'입니다.
   - 7대 표준 크기(14, 16, 18, 20, 24, 28, 32px) 외 홀수 크기는 상위 표준 크기로 올림 적용.

4. 자간 및 UX 라이팅:
   - 모든 텍스트 레이어에 'letter-spacing: -1%' (-0.01em) 필수 적용.
   - 텍스트 내 네이티브 이모지 사용 절대 금지.

[출력 전 자가 검증 체크리스트 (Self-Check)]
- [ ] 모바일 루트 프레임이 402px이 아닌 정확히 360px인가? (좌우 패딩 24px, 콘텐츠 너비 312px 준수)
- [ ] 파트너 화면에 12px 이하의 극소 텍스트가 사용되었는가? ➔ 최소 14px(기본 본문 18px)로 상향 완료.
- [ ] 곡률이 파트너 표준 6px로 견고하게 맞춰졌는가? (고객향 10px/16px 금지)
- [ ] 파트너 공식 컬러 토큰만 사용되었는가? (레거시 컬러 차단)
- [ ] 자간 -1%가 누락 없이 적용되었는가?
위 체크리스트를 통과한 최종 디자인 산출물만 반환합니다.
\`\`\`
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
  const [previewDoc, setPreviewDoc] = useState<'design' | 'start'>('design');
  const [copied, setCopied] = useState(false);
  const [darangis, setDarangis] = useState<DarangiItem[]>([]);

  useEffect(() => { setSelectedDoc(isPartner ? 'partner' : 'customer'); }, [isPartner]);

  const activeContent = selectedDoc === 'partner' ? PARTNER_MD_CONTENT : previewDoc === 'start' ? START_HERE_CONTENT : CUSTOMER_MD_CONTENT;
  const activeFileName = selectedDoc === 'partner' ? 'daisa_library_partner.md' : previewDoc === 'start' ? 'START-HERE.md' : 'DESIGN.md';

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
    if (selectedDoc === 'customer') {
      const link = document.createElement('a');
      link.href = '/daisa-customer-md.zip';
      link.download = 'daisa-customer-md.zip';
      document.body.appendChild(link);
      link.click();
      link.remove();
      return;
    }
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
          <span>고객향 MD</span>
        </button>

        {/* 탭 2: 파트너향.md */}
        <button
          type="button"
          onClick={() => setSelectedDoc('partner')}
          className={`relative z-10 w-1/2 py-2 text-center text-[13px] font-bold transition-colors duration-200 cursor-pointer flex items-center justify-center gap-1.5 ${
            selectedDoc === 'partner' ? 'text-[#1219F7]' : 'text-[#6B7684] hover:text-[#191F28]'
          }`}
        >
          <span>파트너향 MD</span>
        </button>
      </div>

      {/* 3. Action Card (심플 & 직관적인 다운로드 및 복사 영역) */}
      <div className="bg-white rounded-[16px] p-5 shadow-xs border border-[#E5E8EB] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[16px] font-bold text-[#191F28]">
              {selectedDoc === 'customer' ? '고객향 MD' : activeFileName}
            </span>
            <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#E8F3FF] text-[#1219F7]">
              {selectedDoc === 'customer' ? 'ZIP · MD 2개' : 'Markdown'}
            </span>
          </div>
          <p className="text-[13px] text-[#6B7684]">
            {selectedDoc === 'partner'
              ? '파트너 공식 규격: Radius 6px · 기본 본문 18px · 모바일 360 & 웹 627px'
              : '포함: DESIGN.md(디자인 기준) · START-HERE.md(AI 작업 안내)'}
          </p>
        </div>

        {/* Buttons (아이콘 최소화, 명확한 텍스트 중심) */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={handleDownload}
            className="h-[42px] px-4 rounded-[10px] bg-[#1219F7] hover:bg-[#0E15D4] text-white font-bold text-[13px] shadow-xs transition-all active:scale-[0.98] cursor-pointer"
          >
            {selectedDoc === 'customer' ? '고객향 MD 받기 (.zip)' : '.md 다운로드'}
          </button>
          <button
            type="button"
            onClick={handleCopy}
            className="h-[42px] px-4 rounded-[10px] bg-[#F2F4F8] hover:bg-[#E5EAF2] text-[#333D4B] font-bold text-[13px] transition-all active:scale-[0.98] cursor-pointer"
          >
            {copied ? '복사 완료' : selectedDoc === 'customer' ? '미리보기 원문 복사' : '원문 복사'}
          </button>
        </div>
      </div>

      {selectedDoc === 'customer' && (
        <div className="bg-white rounded-[16px] p-5 shadow-xs border border-[#E5E8EB] space-y-3 text-[13px] text-[#6B7684] leading-relaxed">
          <h3 className="font-bold text-[#191F28]">간단 사용법</h3>
          <p>ZIP을 풀고 아래 두 방식 중 하나로 사용하세요. ZIP 자체가 아닌 두 MD 파일을 첨부합니다.</p>
          <p><strong className="text-[#191F28]">프롬프트 AI → 디자인 AI</strong><br />
            두 AI에 각각 두 MD를 첨부합니다. 앞 AI에는 “첨부 MD 기준으로 디자인용 프롬프트를 작성해 줘”,
            다음 AI에는 “첨부 MD 기준을 지키며 이 프롬프트로 디자인해 줘”라고 요청하세요.
          </p>
          <p><strong className="text-[#191F28]">디자인 AI에 바로 요청</strong><br />
            두 MD와 기획·참고 화면을 첨부하고 “첨부 MD 기준을 지키며 이 화면을 디자인해 줘”라고 요청하세요.
          </p>
        </div>
      )}

      {/* 4. Raw Markdown Viewer */}
      <div className="bg-white rounded-[16px] overflow-hidden shadow-xs border border-[#E5E8EB]">
        <div className="px-5 py-3 border-b border-[#F2F4F8] flex items-center justify-between text-[12px] font-semibold text-[#8B95A1] bg-[#FAFAFB]">
          <div className="flex flex-wrap items-center gap-3">
            {selectedDoc === 'customer' ? (['design', 'start'] as const).map(doc => (
              <button key={doc} type="button" onClick={() => { setPreviewDoc(doc); setCopied(false); }}
                className={previewDoc === doc ? 'text-[#1219F7] font-bold' : 'hover:text-[#191F28]'}>
                {doc === 'design' ? 'DESIGN.md' : 'START-HERE.md'}
              </button>
            )) : <span>{activeFileName} 미리보기</span>}
          </div>
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
