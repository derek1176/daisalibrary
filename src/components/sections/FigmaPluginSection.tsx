import React, { useState } from 'react';
import {
  ExternalLink,
  Download,
  AlertTriangle,
  Sparkles,
  Copy,
  Info,
  ShieldCheck,
  Check
} from 'lucide-react';

interface FigmaPluginSectionProps {
  mode?: 'customer' | 'partner';
}

export const FigmaPluginSection: React.FC<FigmaPluginSectionProps> = ({ mode = 'customer' }) => {
  const [previewMode, setPreviewMode] = useState<'customer' | 'partner'>(mode);
  const [previewScope, setPreviewScope] = useState<'selection' | 'page'>('selection');
  const [previewMethod, setPreviewMethod] = useState<'duplicate' | 'inplace'>('duplicate');
  const [copiedLink, setCopiedLink] = useState(false);

  const pluginUrl = 'https://www.figma.com/community/plugin/1701500498028389673';

  const handleCopyLink = () => {
    navigator.clipboard.writeText(pluginUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <section id="figma-plugin" className="space-y-12">
      {/* 1. Header (심플 헤더) */}
      <div className="border-b pb-6 border-[#E5E8EB]">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[12px] font-bold text-[#1219F7] bg-[#EEF2FF] px-2.5 py-1 rounded-[6px]">
            Tools
          </span>
          <span className="text-[12px] text-[#8B95A1] font-medium">v1.0.0</span>
        </div>
        <h2 className="text-[28px] md:text-[32px] font-extrabold tracking-tight text-[#191F28] mb-3">
          Figma Plugin (다이사 교정기)
        </h2>
        <p className="text-[15px] text-[#4E5968] leading-relaxed max-w-[820px]">
          피그마에서 디자인시스템 규칙 준수 여부를 최종 점검하고 비표준 속성을 원클릭으로 교정해 주는 공식 피그마 린터 플러그인입니다.
        </p>

        {/* 액션 버튼 그룹 */}
        <div className="flex flex-wrap items-center gap-3 mt-6">
          <a
            href={pluginUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="h-[42px] px-5 rounded-[10px] bg-[#1219F7] hover:bg-[#0E14CA] text-white text-[13.5px] font-bold inline-flex items-center gap-2 transition-all shadow-sm hover:shadow"
          >
            <span>피그마에서 다이사 교정기 열기</span>
            <ExternalLink className="w-4 h-4 opacity-80" />
          </a>

          <button
            type="button"
            onClick={handleCopyLink}
            className="h-[42px] px-4 rounded-[10px] bg-white border border-[#E5E8EB] hover:bg-[#F9FAFB] text-[#191F28] text-[13.5px] font-semibold inline-flex items-center gap-2 transition-all cursor-pointer"
          >
            {copiedLink ? <Check className="w-4 h-4 text-[#1219F7]" /> : <Copy className="w-4 h-4 text-[#6B7684]" />}
            <span>{copiedLink ? '링크 복사됨' : '플러그인 주소 복사'}</span>
          </button>

          <a
            href="/daisa-figma-plugin.zip"
            download="daisa-figma-plugin.zip"
            className="h-[42px] px-4 rounded-[10px] bg-white border border-[#E5E8EB] hover:bg-[#F9FAFB] text-[#4E5968] hover:text-[#191F28] text-[13px] font-semibold inline-flex items-center gap-2 transition-all"
            title="개발자용 manifest.json 및 플러그인 소스코드 패키지를 다운로드합니다."
          >
            <Download className="w-4 h-4 text-[#8B95A1]" />
            <span>오프라인 패키지 (.zip)</span>
          </a>
        </div>
      </div>

      {/* 2. 회사 사람들에게만 보이는 사내 배포 안내 카드 */}
      <div className="p-6 rounded-[16px] bg-[#F8FAFF] border border-[#D9E2FF] space-y-4">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-[8px] bg-[#EEF2FF] flex items-center justify-center shrink-0 mt-0.5 text-[#1219F7]">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div className="space-y-1.5 flex-1">
            <h3 className="text-[15px] font-bold text-[#191F28]">
              사내 비공개(Organization) 배포 및 접속 안내
            </h3>
            <p className="text-[13px] text-[#4E5968] leading-relaxed">
              본 플러그인은 회사 전용 비공개(Private to Organization)로 배포되어 있어, <strong>외부 일반 사용자에게는 노출되지 않고 우리 회사 계정 멤버에게만 열립니다.</strong>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 text-[12.5px]">
          <div className="p-3.5 rounded-[12px] bg-white border border-[#E0E7FF] flex items-start gap-2.5">
            <span className="w-5 h-5 rounded-full bg-[#1219F7]/10 text-[#1219F7] font-bold text-[11px] flex items-center justify-center shrink-0">1</span>
            <div>
              <div className="font-bold text-[#191F28] mb-0.5">웹 브라우저에서 링크 열기</div>
              <div className="text-[#6B7684] leading-relaxed">
                브라우저에서 <strong>회사 구글/피그마 계정</strong>으로 로그인된 상태로 열어야 404 없이 정상적으로 오픈됩니다. (시크릿 창/개인 계정은 차단됨)
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded-[12px] bg-white border border-[#E0E7FF] flex items-start gap-2.5">
            <span className="w-5 h-5 rounded-full bg-[#1219F7]/10 text-[#1219F7] font-bold text-[11px] flex items-center justify-center shrink-0">2</span>
            <div>
              <div className="font-bold text-[#191F28] mb-0.5">피그마 데스크톱 앱에서 바로 실행</div>
              <div className="text-[#6B7684] leading-relaxed">
                피그마 작업 창 상단 <span className="font-semibold text-[#191F28]">Plugins ➔ All plugins ➔ 사내 조직 탭(Marketdesigners/다이사)</span>에서 검색 없이 바로 클릭 실행 가능합니다.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. 플러그인 UI 프리뷰 및 핵심 컨트롤 */}
      <div className="space-y-4">
        <div>
          <h3 className="text-[18px] font-bold text-[#191F28] mb-1">
            다이사 교정기 인터페이스 미리보기
          </h3>
          <p className="text-[13px] text-[#6B7684]">
            실제 피그마 내에서 구동되는 플러그인 윈도우 UI와 동일한 구성을 미리 확인해 보세요.
          </p>
        </div>

        {/* 인터랙티브 Mockup Window */}
        <div className="max-w-[540px] mx-auto rounded-[16px] bg-white border border-[#E5E8EB] shadow-[0_12px_36px_rgba(0,0,0,0.08)] overflow-hidden">
          {/* 가상 피그마 플러그인 헤더 */}
          <div className="h-[46px] px-4 bg-white border-b border-[#E5E8EB] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src="/logo-dark.png"
                alt="다이사 로고"
                className="w-5 h-5 object-contain"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <span className="text-[13px] font-extrabold text-[#191F28]">다이사 교정기</span>
              <span className="text-[10px] font-semibold text-[#6B7684] bg-[#F2F4F6] px-1.5 py-0.5 rounded-[4px]">
                {previewMode === 'customer' ? '고객향' : '파트너향'}
              </span>
            </div>

            {/* 상단 모드 전환 세그먼트 */}
            <div className="flex items-center p-0.5 rounded-[7px] bg-[#F2F4F6] text-[11px] font-semibold">
              <button
                type="button"
                onClick={() => setPreviewMode('customer')}
                className={`px-2.5 py-1 rounded-[5px] transition-all cursor-pointer ${
                  previewMode === 'customer'
                    ? 'bg-white text-[#191F28] shadow-2xs'
                    : 'text-[#6B7684] hover:text-[#191F28]'
                }`}
              >
                고객향
              </button>
              <button
                type="button"
                onClick={() => setPreviewMode('partner')}
                className={`px-2.5 py-1 rounded-[5px] transition-all cursor-pointer ${
                  previewMode === 'partner'
                    ? 'bg-white text-[#191F28] shadow-2xs'
                    : 'text-[#6B7684] hover:text-[#191F28]'
                }`}
              >
                파트너향
              </button>
            </div>
          </div>

          {/* 서브 컨트롤 바 */}
          <div className="px-4 py-2 bg-[#F9FAFB] border-b border-[#E5E8EB] flex items-center justify-between text-[11.5px]">
            <div className="flex items-center gap-1.5 p-0.5 rounded-[6px] bg-[#E5E8EB]">
              <button
                type="button"
                onClick={() => setPreviewScope('selection')}
                className={`px-2 py-1 rounded-[5px] font-medium transition-all cursor-pointer ${
                  previewScope === 'selection' ? 'bg-white text-[#191F28] font-bold shadow-2xs' : 'text-[#6B7684]'
                }`}
              >
                선택 레이어
              </button>
              <button
                type="button"
                onClick={() => setPreviewScope('page')}
                className={`px-2 py-1 rounded-[5px] font-medium transition-all cursor-pointer ${
                  previewScope === 'page' ? 'bg-white text-[#191F28] font-bold shadow-2xs' : 'text-[#6B7684]'
                }`}
              >
                현재 페이지 전체
              </button>
            </div>

            <div className="text-[11px] text-[#6B7684]">
              {previewScope === 'selection' ? '선택된 프레임 1개 검사' : '페이지 전체 프레임 검사'}
            </div>
          </div>

          {/* 본문 검사 결과 리스트 예시 */}
          <div className="p-4 space-y-3 bg-white">
            <div className="flex items-center justify-between text-[12px] font-bold text-[#191F28]">
              <span className="flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
                <span>검출된 비표준 규칙 (3건)</span>
              </span>
              <span className="text-[11px] text-[#8B95A1] font-normal">
                {previewMode === 'customer' ? '고객향 기준 (Radius 10px)' : '파트너향 기준 (Radius 6px)'}
              </span>
            </div>

            {/* 항목별 샘플 리스트 */}
            <div className="space-y-2 text-[11.5px]">
              <div className="p-2.5 rounded-[8px] bg-[#FFFBEB] border border-[#FDE68A] flex items-center justify-between">
                <div>
                  <div className="font-bold text-[#92400E]">굴곡 (Border Radius)</div>
                  <div className="text-[11px] text-[#B45309]">8px ➔ 공식 규격 {previewMode === 'customer' ? '10px' : '6px'}으로 교정 필요</div>
                </div>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-200/60 text-amber-900">Radius</span>
              </div>

              <div className="p-2.5 rounded-[8px] bg-[#FFFBEB] border border-[#FDE68A] flex items-center justify-between">
                <div>
                  <div className="font-bold text-[#92400E]">색상 (Colors)</div>
                  <div className="text-[11px] text-[#B45309]">미등록 #2563EB ➔ 메인 블루 #1219F7로 교정 필요</div>
                </div>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-200/60 text-amber-900">Color</span>
              </div>

              <div className="p-2.5 rounded-[8px] bg-[#FFFBEB] border border-[#FDE68A] flex items-center justify-between">
                <div>
                  <div className="font-bold text-[#92400E]">타이포그래피 (Typography)</div>
                  <div className="text-[11px] text-[#B45309]">행간 120% ➔ Pretendard 공식 행간 규격으로 교정 필요</div>
                </div>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-200/60 text-amber-900">Typo</span>
              </div>
            </div>

            {/* 교정 방식 선택 (사본 생성 vs 현재 레이어) */}
            <div className="pt-2 border-t border-[#F2F4F6] space-y-2">
              <div className="text-[11px] font-bold text-[#4E5968]">교정 방식 선택</div>
              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <button
                  type="button"
                  onClick={() => setPreviewMethod('duplicate')}
                  className={`p-2 rounded-[8px] border text-left transition-all cursor-pointer ${
                    previewMethod === 'duplicate'
                      ? 'border-[#1219F7] bg-[#F8FAFF]'
                      : 'border-[#E5E8EB] bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between font-bold text-[#191F28] mb-0.5">
                    <span>사본 복제 교정</span>
                    <span className="text-[9px] font-extrabold text-[#1219F7] bg-[#EEF2FF] px-1 rounded">권장</span>
                  </div>
                  <div className="text-[10px] text-[#6B7684]">우측에 _교정본 생성하여 안전 비교</div>
                </button>

                <button
                  type="button"
                  onClick={() => setPreviewMethod('inplace')}
                  className={`p-2 rounded-[8px] border text-left transition-all cursor-pointer ${
                    previewMethod === 'inplace'
                      ? 'border-[#1219F7] bg-[#F8FAFF]'
                      : 'border-[#E5E8EB] bg-white'
                  }`}
                >
                  <div className="font-bold text-[#191F28] mb-0.5">현재 레이어 직접 수정</div>
                  <div className="text-[10px] text-[#6B7684]">선택한 원본에 즉시 토큰 덮어쓰기</div>
                </button>
              </div>

              {/* 하단 일괄 수정 실행 버튼 */}
              <button
                type="button"
                className="w-full h-[36px] rounded-[8px] bg-[#1219F7] hover:bg-[#0E14CA] text-white text-[12px] font-bold flex items-center justify-center gap-1.5 transition-all shadow-xs"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>3개 항목 일괄 자동 교정 (Autofix)</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 4. 실전 사용법 3단계 가이드 */}
      <div className="space-y-4">
        <h3 className="text-[18px] font-bold text-[#191F28]">
          실전 사용 방법 (3단계)
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Step 1 */}
          <div className="p-5 rounded-[14px] bg-[#FAFBFD] border border-[#E5E8EB] space-y-2.5">
            <div className="w-7 h-7 rounded-[8px] bg-[#EEF2FF] text-[#1219F7] font-bold text-[13px] flex items-center justify-center">
              1
            </div>
            <h4 className="text-[14.5px] font-bold text-[#191F28]">
              자동 모드 감지 & 수동 전환
            </h4>
            <p className="text-[13px] text-[#4E5968] leading-relaxed">
              피그마 해당 페이지 이름에 <strong>[고객향]</strong> 또는 <strong>[파트너향]</strong>이 포함되어 있으면 실행 시 해당 교정기가 자동으로 켜집니다. 필요 시 우측 상단 탭에서 수동 전환할 수 있습니다.
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-5 rounded-[14px] bg-[#FAFBFD] border border-[#E5E8EB] space-y-2.5">
            <div className="w-7 h-7 rounded-[8px] bg-[#EEF2FF] text-[#1219F7] font-bold text-[13px] flex items-center justify-center">
              2
            </div>
            <h4 className="text-[14.5px] font-bold text-[#191F28]">
              검사 대상 선택
            </h4>
            <p className="text-[13px] text-[#4E5968] leading-relaxed">
              교정하고자 하는 특정 레이어/프레임을 직접 클릭하거나, 페이지 내 모든 프레임을 한 번에 점검하고 싶다면 <strong>[현재 페이지 전체]</strong> 탭을 눌러 검사합니다.
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-5 rounded-[14px] bg-[#FAFBFD] border border-[#E5E8EB] space-y-2.5">
            <div className="w-7 h-7 rounded-[8px] bg-[#EEF2FF] text-[#1219F7] font-bold text-[13px] flex items-center justify-center">
              3
            </div>
            <h4 className="text-[14.5px] font-bold text-[#191F28]">
              교정 방식 설정 후 자동 반영
            </h4>
            <p className="text-[13px] text-[#4E5968] leading-relaxed">
              원본을 보존하고 비교하고 싶을 땐 <strong>사본 복제 교정</strong>을, 빠른 적용을 원할 땐 <strong>현재 레이어 직접 수정</strong>을 설정한 후 <strong>자동 교정</strong> 버튼을 누르면 끝납니다.
            </p>
          </div>
        </div>
      </div>

      {/* 5. 용도 및 주의사항 (Callout Box) */}
      <div className="p-5 rounded-[14px] bg-[#F8FAFA] border border-[#E5E8EB] space-y-2.5">
        <div className="flex items-center gap-2 text-[14px] font-bold text-[#191F28]">
          <Info className="w-4 h-4 text-[#6B7684]" />
          <span>사용 용도 및 주의사항</span>
        </div>
        <p className="text-[13px] text-[#4E5968] leading-relaxed">
          다이사 교정기는 <strong>MD 규격 문서와 디자인시스템 가이드에 맞춰 화면을 만들었을 때, 필수 규칙에 어긋남 없이 잘 지켜졌는지 체크하는 "최종 검증 도구"</strong>입니다.
        </p>
        <ul className="text-[12.5px] text-[#6B7684] space-y-1.5 list-disc list-inside">
          <li>
            <strong>100% 완벽한 전능 도구가 아닙니다:</strong> 레이아웃의 복잡한 논리나 기획적 디테일까지 잡아내는 목적이 아닙니다.
          </li>
          <li>
            <strong>사람 눈으로 놓치기 쉬운 필수 규칙 검증:</strong> 모서리 굴곡(Radius), 폰트 크기/행간(Typography), 색상 헥스코드(Colors), 여백(Spacing) 등 눈으로 구분하기는 어렵지만 디자인 규칙을 반드시 지켜야 하는 핵심 요소들을 기계적으로 확실하게 잡아내는 용도로 활용해 주세요.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default FigmaPluginSection;
