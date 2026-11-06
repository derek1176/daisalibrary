import React, { useState } from 'react';
import { Download, Copy, Check, FileText, CheckCircle2 } from 'lucide-react';

const MARKDOWN_CONTENT = `# 다이사(da24) 공식 디자인시스템 명세서 (daisalibrary)

> **기준**: 고객향 프로덕션 표준 규격  

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

6. **오버레이 및 팝업 절대 규격**
   * Alert/Confirm 모달: 너비 **\`312px\`** (모바일 좌우 24px 여백), Corner Radius **\`16px\`**, 배경 딤드 **\`rgba(0, 0, 0, 0.6) 60%\`**.
   * 바텀시트: 너비 **\`360px\`** 전폭, 상단 모서리 라운드 **\`16px\`** or **\`24px\`**.

---

## 10. 크로스 플랫폼 오버레이 반응형 절대 규칙 (Modal & Bottom Sheet)

다이사 서비스에서 **주소 검색, 층수/옵션 선택, 약관 안내, 확인 다이얼로그** 등 선택형 오버레이는 뷰포트 너비 **\`1200px\` 분기점**을 기준으로 자동 전환됩니다.

| 디바이스 구분 | 화면 너비 (Viewport) | 오버레이 형태 | 세부 규격 | 동작 방식 |
| :--- | :--- | :--- | :--- | :--- |
| **모바일 & 태블릿** | **\`360px ~ 1199px\`** | **바텀시트 (Bottom Sheet)** | 너비 \`100%\` (최대 \`640px\`), 상단 Corner Radius \`16px\` | 화면 하단에서 밀려 올라오는 슬라이드업 형태, 한 손 조작 최적화 |
| **데스크톱 (Web)** | **\`1200px 이상\`** | **중앙 고정 모달 (Center Modal)** | 너비 **\`440px\` 고정**, Corner Radius \`16px\` | 화면 정중앙 고정 다이얼로그, 마우스 클릭 및 대화면 시선 집중 |

> 🚨 **공통 규칙**: 배경 딤드(Dimmed)는 일관되게 **\`rgba(0, 0, 0, 0.6) (60% 블랙)\`**을 적용합니다.

---

## 11. UX 라이팅 가이드 (공식 표기 규칙)

위매치 및 다이사 실무 노션 원본에 기반한 **절대적 문장 체계 및 띄어쓰기·단어 표기 표준**입니다.

### 11.1. 컴포넌트별 문체 및 온점(.) 규칙
* **타이틀**: **[해요체]** 기본 사용 / **온점(.) 미사용** (\`출발지를 검색해 주세요\`)
* **설명**: **[해요체]** 기본 사용 / **온점(.) 필수 사용** (\`업체에게 모든걸 맡기세요.\`)
* **유의 사항 / 힌트**: **[~입니다체]** 기본 사용 / **온점(.) 필수 사용** (\`가정이사 업체 한정 이벤트입니다.\`)
* **버튼**: **[~하기체]** 기본 사용 / 어떤 일이 일어나는지 명확한 동사형 (\`설정하러 가기\`, \`자세히 보기\`, \`추천업체 바로 신청하기\`)

### 11.2. 자주 쓰는 단어 표기 (7대 표준)
1. **이사 종류**: \`가정이사\`, \`원룸이사\`, \`사무실이사\` (붙여쓰기)
2. **업체 종류**: \`이사업체\`, \`청소업체\`, \`추천업체\`, \`입주 청소업체\` (붙여쓰기)
3. **방문 견적 희망일**: \`방문 견적 희망일\` (띄어쓰기)
4. **일시 정지**: \`일시 정지\` (띄어쓰기)
5. **이사 지원금**: \`이사 지원금 이벤트\` (띄어쓰기)
6. **견적 신청**: \`견적 신청 가능 날짜\` (띄어쓰기)
7. **매칭 완료**: \`청소업체 매칭 완료\` (띄어쓰기)

### 11.3. 그 외 기호 및 숫자 표기 규칙 (6대 표준)
1. **금액 표기**: \`48만 원\`, \`총 200만 원\`, \`340,000원\` ('만'과 '원' 사이 공백)
2. **날짜 표기**: \`2024.07.06\` (4자리 연도, 온점 구분)
3. **슬래시(/)**: \`알림톡/mms\` (앞뒤 공백 없이 붙여쓰기)
4. **괄호(())**: 영문/숫자 앞 띄어쓰기 \`oneroom (9평 이하)\` / 국문 앞 붙여쓰기 \`원룸/오피스텔(9평 이하)\`
5. **대(:)**: \`1:1 (일대일)\` (글자와 콜론 붙여쓰기)
6. **앰퍼샌드(&)**: \`조건 & 혜택\` (기호 앞뒤 한 칸 띄어쓰기)
`;

export const ArchiveSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleDownload = () => {
    const blob = new Blob([MARKDOWN_CONTENT], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'DAISA_DESIGN_SYSTEM.md';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(MARKDOWN_CONTENT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="archive" className="space-y-10">
      {/* Section Header: Toss Style */}
      <div className="border-b border-[#E5E8EB] pb-6">
        <span className="text-[13px] font-bold text-[#3182F6]">
          공식 문서 및 자료
        </span>
        <h2 className="text-[28px] md:text-[32px] font-extrabold text-[#191F28] tracking-tight mt-1">
          자료실
        </h2>
        <p className="text-[15px] text-[#4E5968] mt-2 leading-relaxed max-w-2xl">
          다이사(da24) 디자인시스템의 공식 명세서 원본(DAISA_DESIGN_SYSTEM.md)을 다운로드하고 원문 마크다운 코드를 즉시 열람 및 복사할 수 있습니다.
        </p>
      </div>

      {/* Top CTA Banner */}
      <div className="bg-gradient-to-br from-white via-white to-[#F2F7FF] border border-[#E5E8EB] rounded-[24px] p-6 md:p-8 space-y-6 shadow-[0_2px_16px_rgba(0,0,0,0.04)]">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-bold bg-[#E8F3FF] text-[#1B64DA]">
                <FileText className="w-3.5 h-3.5" />
                공식 명세서
              </span>
              <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#F2F4F6] text-[#4E5968]">
                Markdown (.md)
              </span>
              <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-[#F2F4F6] text-[#8B95A1]">
                약 14KB
              </span>
            </div>

            <h3 className="text-[22px] md:text-[24px] font-extrabold text-[#191F28] tracking-tight">
              DAISA_DESIGN_SYSTEM.md
            </h3>

            <p className="text-[14px] text-[#6B7684] leading-relaxed max-w-xl">
              AI 에이전트 및 프론트엔드 엔지니어가 다이사 서비스를 구현할 때 일관된 디자인을 유지하기 위한 <strong>헌법적 절대 규칙(Non-Negotiables)</strong>, 작업 규격(360px/1200px), UX 라이팅 가이드 6대 표가 수록된 단일 진실 공급원입니다.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
            <button
              type="button"
              onClick={handleDownload}
              className="h-[52px] px-6 rounded-[14px] bg-[#3182F6] hover:bg-[#1B64DA] text-white font-bold text-[15px] flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg transition-all active:scale-[0.98]"
            >
              <Download className="w-4 h-4" />
              <span>DAISA_DESIGN_SYSTEM.md 다운로드</span>
            </button>

            <button
              type="button"
              onClick={handleCopy}
              className="h-[46px] px-5 rounded-[12px] bg-white hover:bg-[#F2F4F6] text-[#333D4B] font-bold text-[14px] border border-[#E5E8EB] flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700 font-bold">마크다운 복사 완료!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#8B95A1]" />
                  <span>마크다운 전체 복사</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Raw Markdown Viewer (Default & Only View) */}
      <div className="bg-[#191F28] border border-[#2B323D] rounded-[24px] overflow-hidden shadow-xl">
        <div className="px-6 py-4 border-b border-[#2B323D] flex items-center justify-between bg-[#14181F]">
          <div className="flex items-center gap-2 text-[13px] font-bold text-white">
            <FileText className="w-4 h-4 text-[#3182F6]" />
            <span>DAISA_DESIGN_SYSTEM.md (원문 마크다운 미리보기)</span>
          </div>
          <button
            type="button"
            onClick={handleCopy}
            className="text-[12px] text-[#8B95A1] hover:text-white flex items-center gap-1.5 transition-colors"
          >
            <Copy className="w-3.5 h-3.5" />
            <span>{copied ? '복사됨' : '원문 복사'}</span>
          </button>
        </div>

        <div className="p-6 md:p-8 overflow-x-auto text-[13px] font-mono leading-relaxed text-[#D1D6DB] max-h-[720px] overflow-y-auto">
          <pre className="whitespace-pre">
            <code>{MARKDOWN_CONTENT}</code>
          </pre>
        </div>
      </div>
    </section>
  );
};
