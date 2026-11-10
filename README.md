# 📦 daisalibrary - 다이사(da24) 공식 디자인시스템 & 컴포넌트 라이브러리

> 토스 증권(Toss Invest) 스타일의 모던하고 신뢰감 있는 UI로 설계된 **다이사(da24)**의 전사 공식 디자인시스템 웹 애플리케이션입니다.  
> **고객향(B2C)** 및 **파트너향(Partner)** 두 가지 독립적인 디자인시스템을 하나의 통합 라이브러리에서 실시간으로 전환 및 시각화합니다.

> 🚨 **절대 원칙 (Non-Negotiable): 고객향과 파트너향 독립 작업 규칙**  
> * **절대 파트너향과 고객향의 md 파일 및 컴포넌트 명세는 섞여서는 안 되며, 반드시 각자의 md 파일을 기준으로 독립적으로 분리하여 작업해야 합니다.**  
> * **사용자로부터 "두 개를 동시에 바꿔라" 또는 "통일시켜라"라는 명시적인 지시가 없는 한, 절대 임의로 두 시스템을 하나로 통일시키거나 한쪽의 규격을 다른 쪽에 적용하지 마십시오.**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

---

## 🌐 배포 웹 주소

* **프로덕션 URL**: `https://daisalibrary.vercel.app` (또는 `https://daisalibrary-[유저명].vercel.app`)
* **자동 배포 파이프라인**: GitHub `main` 브랜치에 코드가 `push`되면 Vercel이 자동으로 감지하여 1분 내에 빌드 및 글로벌 CDN 배포를 완료합니다.

---

## AI용 공개 아이콘 목록과 고정 SVG

Icons 화면과 공개 파일은 `src/data/iconCatalog.tsx`의 같은 원본을 사용합니다. 별도 API 서버 없이 개발 서버 시작·프로덕션 빌드 시 정적 파일을 자동 생성합니다.

| 주소 | 용도 |
| --- | --- |
| `/icons/manifest.json` | 이름·한글 라벨·설명·검색어·용도·미리보기·다운로드 주소 |
| `/icons/search.svg` | 24px 원본 예시 |
| `/icons/20/search.svg` | 20px 원본 예시 |
| `/icons/16/search.svg` | 16px 원본 예시 |
| `/icons/README.md` | AI와 사람을 위한 사용 안내 |
| `/icons/LICENSE-lucide.txt` | Lucide 원본 라이선스 |

배포 후에는 사이트 origin(예: `https://daisalibrary.vercel.app`)에 위 경로를 붙여 사용합니다. 목록의 `previewUrl`과 `downloadUrl`도 동일한 origin 기준 경로입니다. 브라우저 UI 조작이나 JavaScript 실행 없이 목록과 SVG를 HTTP GET으로 읽을 수 있습니다.

목록의 `keywords`·`label`·`description`·`usages`에서 필요한 아이콘을 찾고 해당 `downloadUrl`로 원본을 받습니다. 같은 SVG의 다른 사용 용도는 `usages`에 모으므로 `entryCount`(용도 수)와 `iconCount`(고유 SVG 수)는 다를 수 있습니다. 24px 기본 원본과 20·16px 변형 모두 제공하며, 파일 이름은 순서 대신 아이콘 이름에서 생성합니다.

```bash
npm run icons:generate  # 공개 파일만 재생성
npm run test:icons      # 검색 메타데이터·주소·SVG 규격 검사
npm run build          # 공개 파일 자동 생성 후 전체 빌드
```

아이콘 추가·수정은 `src/data/iconCatalog.tsx`에서 합니다. 개발 서버 실행 중 원본을 바꿨으면 `npm run icons:generate`를 다시 실행하거나 개발 서버를 재시작하세요. `public/icons/`는 자동 생성 폴더이므로 직접 편집하거나 수동 자산을 넣지 않습니다. 빌드 시 생성된 파일은 `dist/icons/`에 포함되어 Vercel에 배포됩니다.

SVG는 `currentColor`를 사용합니다. `<img>`의 부모 `color`는 외부 SVG 내부에 전달되지 않으므로 색상을 제어하려면 원본을 inline SVG로 사용하세요. 기존 카드별 다운로드는 같은 고정 SVG 주소를 사용하며 ZIP 다운로드도 같은 원본 렌더러를 사용합니다. 아이콘 목록은 양쪽 모드가 기존부터 공유한 자산이고, 이번 변경은 고객향·파트너향의 별도 디자인 규칙을 변경하지 않습니다.

---

## 🎨 다이사 피그마 플러그인 (Figma Linter)

`figma-plugin/` 디렉터리에 피그마 디자인시스템 검증기(Linter)가 내장되어 있습니다:
- **지원 모드**: 고객향(Customer) v2.0 & 파트너향(Partner) v1.0 원클릭 전환
- **검증 대상**: 13대 컬러 토큰 준수 여부, Pretendard 짝수 폰트 크기(12~24px), 파트너 본문 18px 규격, 카드 높이별 Corner Radius (고객: 8/10/12px, 파트너: 6px 고정), 1px 보더 두께, 312px 모바일 안전영역, 비표준 이모지 감지
- **편의 기능**: 위반 레이어 캔버스 즉시 포커스 이동, 원클릭 자동 수정(Auto-Fix), 마크다운 리포트 복사
- **등록 방법**: 피그마 데스크톱 ➔ Plugins ➔ Development ➔ **Import plugin from manifest...** ➔ `figma-plugin/manifest.json` 선택

---

## ⚡️ 빠른 시작 (로컬 개발)

### 1. 레포지토리 클론 및 의존성 설치
```bash
git clone https://github.com/[YOUR_USERNAME]/daisalibrary.git
cd daisalibrary
npm install
```

### 2. 로컬 개발 서버 실행
```bash
npm run dev
```
브라우저에서 `http://localhost:5173` 접속 시 실시간 핫 리로딩(HMR) 환경에서 작업할 수 있습니다.

### 3. 프로덕션 빌드 및 검증
```bash
npm run build
npm run preview
```

---

## 🚀 GitHub & Vercel 자동 배포 설정 방법

### 1단계: 본인 GitHub에 레포지토리 생성 및 최초 푸시
1. [GitHub](https://github.com/new)에서 새 레포지토리를 생성합니다 (`daisalibrary` 권장, Public 또는 Private 무관).
2. 로컬 터미널에서 원격 저장소를 연결하고 푸시합니다:
```bash
# 원격 저장소 추가 (본인의 GitHub 주소 입력)
git remote add origin https://github.com/[YOUR_GITHUB_USERNAME]/daisalibrary.git

# 메인 브랜치 설정 및 최초 푸시
git branch -M main
git push -u origin main
```

### 2단계: Vercel에서 레포지토리 연결 (원클릭 자동 배포)
1. [Vercel](https://vercel.com)에 로그인 (GitHub 계정으로 로그인 권장).
2. **Add New...** > **Project**를 클릭합니다.
3. 방금 푸시한 `daisalibrary` GitHub 레포지토리를 찾아 **Import** 버튼을 클릭합니다.
4. 프로젝트 설정 확인:
   - **Project Name**: `daisalibrary` (원하는 주소 형태로 설정 가능 → `https://daisalibrary.vercel.app`)
   - **Framework Preset**: `Vite` (자동 인식)
   - **Root Directory**: `./` (기본값)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. **Deploy** 버튼을 누르면 약 30초 후 배포가 완료되며 라이브 웹 주소가 생성됩니다!
6. 이후에는 로컬에서 코드 수정 후 `git push origin main`만 실행하면 **자동으로 웹사이트가 갱신**됩니다.

---

## 👥 퇴사 시 회사(후임자) 인수인계 가이드

본 프로젝트는 퇴사 시 회사 팀원이나 후임자에게 안전하고 매끄럽게 소유권을 이전할 수 있도록 표준 Git/Vercel 구조로 구축되었습니다.

### 1. GitHub 레포지토리 소유권 이전 (Repository Transfer)
1. GitHub 레포지토리의 **Settings** 탭으로 이동합니다.
2. 페이지 가장 하단의 **Danger Zone** 섹션으로 스크롤합니다.
3. **Transfer ownership** 버튼을 클릭합니다.
4. 후임자의 GitHub 아이디 또는 회사 Organization 이름을 입력하고 이전을 승인합니다.
5. 이전 완료 후에도 로컬 Git 및 Vercel 연동은 자동으로 새 경로로 연결됩니다.

### 2. Vercel 프로젝트 팀원 추가 및 소유권 이전
1. Vercel 대시보드에서 `daisalibrary` 프로젝트의 **Settings** > **Members** 또는 **General**로 이동합니다.
2. 후임자 이메일을 초대하여 관리자(Admin) 권한을 부여하거나, 회사의 Vercel Team 계정으로 프로젝트를 **Transfer Project**합니다.

> 📄 보다 자세한 인수인계 절차 및 체크리스트는 [HANDOVER.md](./HANDOVER.md) 문서를 참고하세요.

---

## 🤖 AI를 활용한 신규 개발 & 유지보수 가이드

이 프로젝트는 후임자나 비개발자도 **AI 에이전트(Cursor, Antigravity, Claude Code, ChatGPT 등)**를 통해 손쉽게 신규 컴포넌트를 추가하고 시스템을 확장할 수 있도록 설계되었습니다.

AI에게 수정을 요청할 때 아래 가이드 문서를 프롬프트 컨텍스트로 제공하면 일관성을 100% 유지할 수 있습니다:
* **고객향 명세서**: [`DAISA_DESIGN_SYSTEM.md`](./DAISA_DESIGN_SYSTEM.md)
* **파트너향 명세서**: [`DAISA_PARTNER_DESIGN_SYSTEM.md`](./DAISA_PARTNER_DESIGN_SYSTEM.md)
* **AI 협업 프롬프트 템플릿**: [`AI_DEVELOPMENT_GUIDE.md`](./AI_DEVELOPMENT_GUIDE.md)

### 🚨 AI에게 반드시 주지시켜야 할 4대 절대 규칙
1. **서체는 Pretendard 단일 사용**: 폰트 크기는 **짝수 6종(12, 14, 16, 18, 20, 24px)**만 허용하며, 특수 뱃지만 10/11px 예외 허용.
2. **고객향 vs 파트너향 곡률 절대 분리**:
   * **고객향**: 기본 `10px` (`rounded-[10px]`), 모달 `16px`
   * **파트너향**: 전사 통일 `6px` (`rounded-[6px]`), 고객향 10px/16px 절대 금지
   * **공통**: 필터/선택 칩은 완전 라운드(`rounded-full` / Pill)
3. **반응형 1200px 규칙**:
   * 360px ~ 1199px은 모바일 반응형 바텀시트
   * 1200px 이상은 중앙 고정 440px 모달
4. **단일 열 정렬**:
   * 고객향 PC: `1200px` 캔버스 내 `640px` 중앙 집중
   * 파트너향 PC: `1200px` 캔버스 내 `627px` 주문 카드 정렬

---

## 📂 프로젝트 디렉토리 구조

```
daisalibrary/
├── DAISA_DESIGN_SYSTEM.md         # 고객향 공식 디자인시스템 명세서 (마크다운)
├── DAISA_PARTNER_DESIGN_SYSTEM.md # 파트너향 공식 디자인시스템 명세서 (마크다운)
├── AI_DEVELOPMENT_GUIDE.md        # 후임자 AI 개발 협업 프롬프트 가이드
├── HANDOVER.md                    # 계정/레포 인수인계 절차서
├── vercel.json                    # Vercel SPA 라우팅 및 빌드 설정
├── package.json
├── index.html
├── src/
│   ├── App.tsx                    # 대시보드 레이아웃 & GNB 모드 토글
│   ├── main.tsx
│   ├── index.css                  # Tailwind CSS & 전사 스타일
│   ├── components/
│   │   ├── sections/              # 11개 대분류 섹션 컴포넌트
│   │   │   ├── HomeSection.tsx            # 컴포넌트 모아보기 (대시보드)
│   │   │   ├── ColorSection.tsx           # 색상 토큰
│   │   │   ├── TypographySection.tsx      # 타이포그래피 (18px 기본 본문)
│   │   │   ├── IconSection.tsx            # 150종 선형 아이콘 & 이모지 금지 배너
│   │   │   ├── SpacingRadiusSection.tsx   # 여백 및 라운드 (파트너 6px)
│   │   │   ├── LayoutSection.tsx          # 작업 규격 (360/312 & 1200/640/627)
│   │   │   ├── WritingSection.tsx         # UX 라이팅 가이드
│   │   │   ├── ButtonSection.tsx          # 버튼 컴포넌트 (서브/모달 액션 51px)
│   │   │   ├── InputSection.tsx           # 입력창 (에러 느낌표 없음, 1px 보더)
│   │   │   ├── ModalSection.tsx           # 1200px 반응형 바텀시트-모달 시뮬레이터
│   │   │   └── ArchiveSection.tsx         # 명세서 다운로드 및 다랑이 이스터에그
│   │   └── ui/                    # 재사용 원자 단위 컴포넌트 (Button, Modal, Input 등)
│   └── data/
│       └── icons.ts               # 서비스 70종 + 공통 30종 선형 아이콘 데이터셋
└── public/
    ├── logo-dark.png              # 공식 다이사 로고
    └── DAISA_*.md                 # 다운로드 제공용 원본 마크다운 파일
```

---

## 🛠️ 기술 스택 (Tech Stack)

* **Core**: React 18, TypeScript, Vite 5
* **Styling**: Tailwind CSS 3.4
* **Icons**: Lucide React
* **Hosting & CI/CD**: Vercel + GitHub Actions (Zero-config 자동 배포)
