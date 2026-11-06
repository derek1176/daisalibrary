# 다이사(da24) 공식 디자인시스템 명세서 (daisalibrary)

> **버전**: v1.2 (2026 Production Standard)  
> **기준 피그마**:  
> 1. `[고객향] 스타일가이드` (`csWoLlTCHOtuE7oAMswuL7`) - 노드: `9852:6081`, `384:1369`, `8788:5522`  
> 2. `[실제 화면] [개발] v1.2` (`G5JiHI51FV6XFImlsyON6u`) - 노드: `7785:11499`, `6813:9676`  
> 3. `[실제 화면] [개발] v1.1` (`KLDA7nLwHvbDCIHS6y0MgT`) - 노드: `7349:334`, `7350:4922`, `6178:2247`, `6351:8380`, `6458:2639`  
> **실서비스 벤치마크**: [da24.co.kr](https://da24.co.kr) & 당근 [Seed Design](https://seed-design.io)

---

## 1. 반응형 레이아웃 & 그리드 시스템 (Responsive Grid)

다이사의 모든 화면은 **모바일 기준(w360)으로 우선 설계**된 후, **PC 환경(w1200 캔버스, w640/w720 콘텐츠 컨테이너)**에 맞춰 설계됩니다.

| 디바이스 | 기준 뷰포트 너비 | 양측 여백 (Margin) | 핵심 콘텐츠 너비 (Grid) | 버튼 규격 | 헤더 규격 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Mobile** | **`360px`** | 좌우 각 **`24px`** | **`312px`** ($360 - 24 \times 2$) | 플로팅: **`360px`** (r:0)<br>본문: **`312px`** (r:10) | **`360px × 56px`** |
| **PC (Web)** | **`1200px`** | 좌우 각 **`280px`** (중앙 집중) | **`640px`** (헤더·본문·버튼 통일) | **`640px`** (r:10) | **`640px`** (중앙 정렬) |

> 📌 **작업 규격 핵심 규칙**:
> * **모바일 프레임 (360px)**: 양측에 **24px 마진 가이드라인**을 두고, 모든 인풋, 카드, 텍스트는 **312px** 안전 구역 내에 배치합니다. 단, 최하단 고정 플로팅 CTA 버튼만 **360px 전폭(r:0px)**으로 화면 양 끝에 밀착합니다.
> * **웹/PC 캔버스 (1200px & 640px)**: PC 디자인 캔버스는 **1200px** 기준이며, **상단 헤더, 본문 신청 폼, 하단 액션 버튼 모두 중앙 640px 단일 열 규격**으로 완벽히 일치시켜 작업합니다. 좌우 280px은 안전 여백입니다.

---

## 2. Corner Radius 체계 (8단계 라운드 규칙)

실제 피그마와 프로덕션 코드를 전수 분석한 결과, 다이사는 목적에 따라 **8가지의 정밀한 라운드 체계**를 유지합니다.

| Radius 값 | 명칭 및 위계 | 적용 대상 컴포넌트 | 피그마 원본 참조 |
| :--- | :--- | :--- | :--- |
| **`0px`** | `none` (직각) | • **Floating CTA** (화면 하단 전폭 밀착 버튼)<br>• 헤더 상단 고정 바 | `floating-button` (360x56, r:0) |
| **`6px`** | `xs` (소형) | • **Tooltip** (274x44, r:6)<br>• 미니 상태 배지 (32x21, r:6) | `tooltip` (274x44), `Background` (32x21) |
| **`8px`** | `sm` (칩/태그) | • Segmented 내부 선택 블록<br>• 소형 셀렉트박스 (`select-number` size=small, 104x40, r:8)<br>• 서브 폼 카드 (`Frame 951960`, 312x94, r:8) | `select-number` small (104x40, r:8) |
| **`10px`** | **`md` (다이사 핵심 표준)** | • **Public Button** (모바일 312x56, PC 672x56, r:10)<br>• **모든 Form Input** (Text, Number, Search: 56px, r:10)<br>• **모달 액션 버튼** (136x56, r:10)<br>• 안내/경고 박스 (`Warning Container`: 52px, r:10)<br>• 메인 배너 (`main_banner_aircon`: 312x80, r:10)<br>• Textarea 메모 (`input-text` memo: 104px/128px, r:10) | `public-button`, `input-text`, `Warning Container` |
| **`12px`** | `lg` (중형 카드) | • 프로모션 카드 (`Frame 952075`: 312x99, r:12)<br>• 견적 비교 서브 카드 (`Frame 952197`: 312x136, r:12) | `Frame 952075` (312x99, r:12) |
| **`16px`** | **`xl` (대형 섹션/모달)** | • **모달 다이얼로그** (312x344, r:16)<br>• **대형 옵션 컨테이너** (`Options List`: 312x824, r:16)<br>• **후기 작성 섹션** (`Review Section`: 312x268, r:16)<br>• **쿠폰/할인 섹션** (`Coupon Section`: 312x141, r:16)<br>• 바텀시트 상단 모서리 | `모달` (312x344, r:16), `Options List` (312x824, r:16) |
| **`20px`** | `2xl` (캡슐 링크) | • 서브 네비게이션 링크 버튼 (`Link`: 125x38, r:20) | `Link` (125x38, r:20) |
| **`24px`** | `3xl` (바텀시트) | • 바텀시트 상단 라운드 (`[24px, 24px, 0, 0]`)<br>• 바텀 플로팅 서랍장 (`Frame 952110`: 360x389) | `Frame 952110` (360x389, r:[24,24,0,0]) |
| **`28px` / Full** | `pill` (완전 둥근) | • 카테고리 칩 필터 (`Frame 951988`: 135x45, r:28)<br>• 헤더 액션 링크 (`Chat History Link`: 78x33, r:28)<br>• 내 신청내역 링크 (`My Applications`: 89x33, r:28) | `Chat History Link` (78x33, r:28) |

---

## 3. Element Heights (높이 계층 체계)

다이사는 터치 최적화와 시각적 리듬을 위해 철저히 정형화된 높이 단위를 사용합니다.

```
[24px]  아이콘 / 체크박스 / 라디오
[32px]  헤더 액션 / 미니 태그
[40px]  소형 셀렉트 / 카테고리 아이콘 (40~42px)
[48px]  서브 버튼 / 모달 컴팩트 버튼 (48px)
[52px]  안내 및 경고 컨테이너 (Warning Container)
[56px]  ★ 전사 절대 표준 터치 타겟 (Button, Input, Header, Sheet Row)
[80px]  메인 배너 (312x80)
[104px] 텍스트에어리어 기본형 (Memo Normal)
[128px] 후기/상세 작성 텍스트에어리어 (Review Note)
```

---

## 4. 버튼 시스템 (Button Specifications)

### 4.1. 4대 핵심 버튼 규격

#### ① Floating CTA Button
* **목적**: 모바일 화면 최하단에 항상 밀착되어 사용자의 최종 전환(신청, 제출)을 유도하는 메인 CTA
* **규격**:
  * 모바일: 너비 `100%` (최대 `360px`), 높이 `56px`, **Corner Radius `0px`**
  * PC: 너비 `720px`, 높이 `56px`, **Corner Radius `0px`**
* **타이포그래피**: `button_B_18` (18px Bold White, Line-height 140%, Letter-spacing -1px)
* **컬러**:
  * Normal: `main-01` (`#1219F7`)
  * Hover: `#0D14D6` / Active: `#090EB8`
  * Disabled: `etc-03` (`#EBEEF2`), 텍스트 `text-04` (`#888888`)
  * Loading: `main-01`, `icon/loading-white` (24x24 회전 로딩)

#### ② Public In-Content Button
* **목적**: 본문 콘텐츠 영역 내부에서 폼 제출, 다음 단계 진행에 사용되는 기본 표준 버튼
* **규격**:
  * 모바일: 너비 **`312px`**, 높이 `56px`, **Corner Radius `10px`**
  * PC: 너비 **`672px`** (또는 640px/720px), 높이 `56px`, **Corner Radius `10px`**
* **타이포그래피**: `body_B_16` (16px Bold White, Line-height 150%)
* **내부 패딩**: 좌우 16px, 상하 자동 중앙 정렬
* **상태**: Normal, Hover, Active, Disabled, Loading, Error 지원

#### ③ Modal Button
* **목적**: Alert 및 Confirm 모달 다이얼로그 내부 액션 제어
* **규격**:
  * 높이: **`48px`** (컴팩트) 또는 **`56px`** (표준)
  * 라운드: **`Corner Radius 10px`**
* **배치 2가지 형태**:
  1. **단일 확인 버튼 (Alert)**: 너비 **`280px`** 전폭 (`main-01`, 16px Bold White)
  2. **2분할 버튼 (Confirm)**: 너비 **`280px`** 그리드 내
     * 취소 버튼: 너비 **`136px`** (`etc-03` `#EBEEF2`, 텍스트 `text-02` `#333333`)
     * 버튼 간격 (Gap): **`8px`**
     * 확인 버튼: 너비 **`136px`** (`main-01` `#1219F7`, 텍스트 White)
     * 산출식: $136\text{px} + 8\text{px} + 136\text{px} = 280\text{px}$ (모달 312px - 패딩 16x2)

#### ④ Segmented 3-Split Button (3분할 탭 버튼)
* **목적**: 이사 종류(포장/반포장/일반), 통신사(SK/KT/LG), 에어컨(스탠드/벽걸이/2in1) 등 3지 선다 옵션
* **규격**: 너비 **`312px`**, 높이 `56px`, 외곽 Corner Radius `10px`, 배경 `etc-04` (`#F7F8FA`)
* **103-104-103px 분할 룰**:
  * 좌측 버튼: `103px`
  * **중앙 버튼: `104px` (1px 추가 보정하여 312px 정렬)**
  * 우측 버튼: `103px`
  * 선택된 버튼 스타일: 배경 `main-01` (`#1219F7`), 텍스트 White, Radius `8px`

### 4.2. 서브 버튼 및 칩
* **Pill Filter Chip**: 높이 `45px`, 라운드 `28px`, 패딩 좌우 16px, 14px Bold
* **Header Action Link**: 높이 `33px`, 너비 78~89px, 라운드 `28px`, 배경 `etc-04`

---

## 5. 폼 인풋 시스템 (Form Inputs)

피그마 스타일가이드(`9899:6841`)에 명시된 5대 폼 규격입니다.

| 인풋 종류 | 모바일 크기 | PC 크기 | Radius | 상태 (States) | 비고 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **`input-text`** | 312 x 56px | 720 x 56px | 10px | `normal`, `focus`, `done`, `disable` | 기본 주소, 이름, 텍스트 |
| **`input-text` (Memo)** | 312 x 104px | 720 x 104px | 10px | `memo-normal`, `memo-focus`, `memo-done` | 멀티라인 요청사항, 상세 주소 |
| **`input-number`** | 312 x 56px | 720 x 56px | 10px | `normal`, `focus`, `done`, `disable` | 우측 단위(평, 층, 대) 고정 |
| **`input-number` (Validation)**| 312 x 85px | 720 x 85px | 10px | `success`, `error` | 하단 12px 헬퍼/에러 문구 포함 |
| **`input-search`** | 312 x 56px | 720 x 56px | 10px | `normal`, `focus`, `focus-close`, `done` | 좌측 돋보기, 우측 원클릭 삭제(X) |
| **`select-text`** | 312 x 56px | 720 x 56px | 10px | `normal`, `focus`, `done`, `disable` | 우측 20px 드롭다운 화살표 |
| **`select-number` (Small)** | 104 x 40px | - | **8px** | `normal`, `focus` | 콤팩트 인라인 숫자 선택기 |

---

## 6. 오버레이 규격 (Modals & Bottom Sheets)

### 6.1. Alert & Confirm Modal
* **다이얼로그 크기**: 너비 **`312px`**, 높이 가변 (콘텐츠 HUG)
* **Corner Radius**: **`16px`**
* **패딩 (Padding)**: 상단 `24px`, 좌우 `16px`, 하단 `24px` (`p:[24, 16, 24, 16]`)
* **간격 (Gap)**: 타이틀-본문 간격 `8px`, 콘텐츠-버튼 간격 `24px`
* **타이틀**: `title_B_20` (20px Bold, Line-height 150%, text-01)
* **본문**: `body_R_16` (16px Regular, Line-height 150%, text-03)
* **오버레이 (Dimmed)**: `rgba(0, 0, 0, 0.60)` (60% Black)

### 6.2. Bottom Sheet (선택 팝업)
* **시트 크기**: 너비 **`360px`** (화면 전폭), 높이 최대 **`284px`**
* **Corner Radius**: 상단 모서리만 **`[24px, 24px, 0, 0]`** (또는 `[16px, 16px, 0, 0]`)
* **헤더 (Header)**: 높이 **`56px`**, 패딩 좌우 `24px`, 18px Bold 타이틀 + 24x24 닫기(X) 아이콘
* **리스트 아이템**: 각 행 높이 **`56px`**, 하단 1px 구분선(`etc-03`), 최대 5개 노출 후 스크롤
* **오버레이 (Dimmed)**: `rgba(0, 0, 0, 0.60)`

---

## 7. 컬러 팔레트 토큰 (Color Palette Tokens)

```css
:root {
  /* Main Colors */
  --color-main-01: #1219F7; /* Primary Blue 키컬러 (CTA, 포커스, 브랜드) */
  --color-main-02: #595EF9; /* Secondary Blue (보조 포인트, 칩 강조) */
  --color-main-04: #F4F5FF; /* Tint Background (강조 영역 배경, 뱃지) */

  /* Text Colors */
  --color-text-01: #121212; /* Headline, Title, 주요 텍스트 */
  --color-text-02: #333333; /* Body Text, 라벨, 폼 입력 텍스트 */
  --color-text-03: #666666; /* Sub Text, 도움말, 모달 설명문 */
  --color-text-04: #888888; /* Caption, Placeholder, 비활성 텍스트 */

  /* Etc / Borders & Backgrounds */
  --color-etc-01: #FFFFFF; /* White */
  --color-etc-02: #D7DBE2; /* 표준 보더 (Input, Card 테두리 기본값) */
  --color-etc-03: #EBEEF2; /* 구분선 (Divider), 취소 버튼 배경 */
  --color-etc-04: #F7F8FA; /* 비활성 배경 (Disabled BG), 탭바 배경 */
  --color-etc-05: #F0F2F5; /* 서브 카드 배경 */

  /* System Feedback */
  --color-error: #F34766;   /* 에러 스트로크 보더, 에러 피드백 문구 (#F34766) */
  --color-sub-02: #F34766;  /* 서브 에러 토큰 (#F34766) */
  --color-dimmed: rgba(0, 0, 0, 0.60); /* 팝업/시트 배경 딤드 60% */
}
```

---

## 8. 타이포그래피 (Strict 6 Even Scale)

> ⚠️ **엄격 원칙**:  
> 1. 서체는 **Pretendard 단일 서체** 사용  
> 2. 자간은 **`letter-spacing: -1px (-0.01em)`** 고정  
> 3. 글꼴 크기는 **짝수 6개 규격(`12, 14, 16, 18, 20, 24px`) 외 홀수 및 소수점 일체 사용 금지**

| 토큰명 | 크기 | 굵기 | 행간 (LH) | 자간 (LS) | 주 사용처 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **`headline_B_24`** | **24px** | Bold (700) | 140% (34px) | -1px | 페이지 메인 타이틀, 완료 화면 헤드라인 |
| **`headline_R_24`** | **24px** | Regular (400)| 140% (34px) | -1px | 대형 안내문 본문 |
| **`title_B_20`** | **20px** | Bold (700) | 150% (30px) | -1px | 섹션 타이틀, 모달 다이얼로그 제목 |
| **`title_R_20`** | **20px** | Regular (400)| 150% (30px) | -1px | 중간 타이틀 서브 설명 |
| **`button_B_18`** | **18px** | Bold (700) | 140% (26px) | -1px | Floating CTA 버튼, 바텀시트 헤더 타이틀 |
| **`body_B_16`** | **16px** | Bold (700) | 150% (24px) | -1px | Public 버튼, 강조 본문, 인풋 입력 텍스트 |
| **`body_R_16`** | **16px** | Regular (400)| 150% (24px) | -1px | 일반 본문 텍스트, 모달 본문 설명문 |
| **`sub_B_14`** | **14px** | Bold (700) | 140% (20px) | -1px | 인풋 라벨, 탭 필터 텍스트, 소분류 제목 |
| **`sub_R_14`** | **14px** | Regular (400)| 140% (20px) | -1px | 폼 도움말 문구, 리스트 메타 정보 |
| **`caption_B_12`** | **12px** | Bold (700) | 130% (16px) | -1px | 상태 뱃지, 유효성 에러 문구, 강조 태그 |
| **`caption_R_12`** | **12px** | Regular (400)| 130% (16px) | -1px | 하단 약관 링크, 유의사항 각주, 타임스탬프 |

---

## 9. 아이콘 시스템 (Iconography)

피그마 스타일가이드(`9899:6355`)에 정의된 공식 제작 규칙:
1. **System Icon**: **`16px`** Rectangle 기준 안에 1px 면으로 제작 $\rightarrow$ 실제 화면 사용 시 **8배수 리사이징 (`16px`, `24px`, `32px`)**
2. **Service Icon**: **`56px`** Rectangle 기준 투톤 & 2px 면으로 제작 $\rightarrow$ 가이드에 맞춰 리사이징 (`32px`, `48px`, `56px`)
3. **Category Icon**: **`40x40px`** 및 **`42x42px`** (이사, 청소, 인터넷, 에어컨, 렌탈, 부동산)
4. **Check Icon**: **`24px`** Frame 안에 여백(Padding) 없이 꽉 찬 그리드로 작업
5. **Loading Icon**: 9개의 원형 도트(Ellipse 53~61)로 구성된 시계방향 회전 스피너

---

## 10. 프로덕션 구현 체크리스트 (프론트엔드 엔지니어 필독)

* [ ] 모바일 메인 폼과 카드는 반드시 `w-[312px]`에 맞춰 작성되었는가?
* [ ] PC 화면에서 폭이 깨지지 않도록 `max-w-[720px]` 또는 `w-[672px]`로 제한되었는가?
* [ ] 화면 하단 고정 CTA는 `rounded-none` (0px)이며, 인컨텐츠 버튼은 `rounded-[10px]`인가?
* [ ] 모달의 너비는 `w-[312px]`, 라운드는 `rounded-[16px]`인가?
* [ ] 모달 취소/확인 버튼은 `136px + 8px gap + 136px = 280px`로 정확히 분할되었는가?
* [ ] 3분할 세그먼트 버튼의 중앙 버튼에 1px이 추가되어 `103 - 104 - 103px`로 렌더링되는가?
* [ ] 짝수 6개 규격(12, 14, 16, 18, 20, 24px) 외의 폰트 크기가 사용되지 않았는가?
* [ ] 모든 텍스트에 `letter-spacing: -1px (-0.01em)`이 적용되어 있는가?
* [ ] 폼 인풋의 높이는 `h-[56px]`, 포커스 보더는 `#1219F7`, 패딩은 `px-[16px]`인가?
