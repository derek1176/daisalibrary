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
   * **보더 및 구분선**: 기본 보더 \`#D7DBE2\`, 구분선 \`#EBEEF2\`, 비활성 배경 \`#F7F8FA\`
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
| **etc-03** | \`#EBEEF2\` | 영역 구분선, 취소/보조 버튼 배경 |
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

export const ArchiveSection: React.FC<{ mode?: 'customer' | 'partner' }> = ({ mode = 'customer' }) => {
  const isPartner = mode === 'partner';
  const [selectedDoc, setSelectedDoc] = useState<'customer' | 'partner'>(isPartner ? 'partner' : 'customer');
  const [copied, setCopied] = useState(false);

  const activeContent = selectedDoc === 'partner' ? PARTNER_MD_CONTENT : CUSTOMER_MD_CONTENT;
  const activeFileName = selectedDoc === 'partner' ? 'DAISA_PARTNER_DESIGN_SYSTEM.md' : 'DAISA_DESIGN_SYSTEM.md';

  const handleDownload = () => {
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
    <section id="archive" className="space-y-6">
      {/* 1. Header (심플 영문 타이틀만) */}
      <div className="border-b pb-4 border-[#E5E8EB]">
        <h2 className="text-[28px] md:text-[32px] font-extrabold tracking-tight text-[#191F28]">
          Resources
        </h2>
      </div>

      {/* 2. Document Switcher Segment (아이콘 배제, 심플 탭) */}
      <div className="flex items-center p-1 rounded-[12px] bg-[#E8EDF5] w-fit">
        <button
          type="button"
          onClick={() => setSelectedDoc('customer')}
          className={`px-4 py-2 rounded-[9px] text-[13px] font-bold transition-all ${
            selectedDoc === 'customer'
              ? 'bg-white text-[#191F28] shadow-2xs'
              : 'text-[#6B7684] hover:text-[#191F28]'
          }`}
        >
          고객향 명세서
        </button>
        <button
          type="button"
          onClick={() => setSelectedDoc('partner')}
          className={`px-4 py-2 rounded-[9px] text-[13px] font-bold transition-all ${
            selectedDoc === 'partner'
              ? 'bg-white text-[#1219F7] shadow-2xs'
              : 'text-[#6B7684] hover:text-[#191F28]'
          }`}
        >
          파트너향 명세서
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
            className="h-[42px] px-4 rounded-[10px] bg-[#1219F7] hover:bg-[#0E15D4] text-white font-bold text-[13px] shadow-xs transition-all active:scale-[0.98]"
          >
            .md 다운로드
          </button>
          <button
            type="button"
            onClick={handleCopy}
            className="h-[42px] px-4 rounded-[10px] bg-[#F2F4F8] hover:bg-[#E5EAF2] text-[#333D4B] font-bold text-[13px] transition-all active:scale-[0.98]"
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
    </section>
  );
};

export default ArchiveSection;