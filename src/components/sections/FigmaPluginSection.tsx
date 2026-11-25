import React from 'react';
import {
  ExternalLink,
  Sparkles,
  MousePointer,
  Info,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

interface FigmaPluginSectionProps {
  mode?: 'customer' | 'partner';
}

export const FigmaPluginSection: React.FC<FigmaPluginSectionProps> = () => {
  const pluginUrl = 'https://www.figma.com/community/plugin/1701500498028389673';

  return (
    <section id="figma-plugin" className="space-y-12">
      {/* 1. Header (심플 헤더) */}
      <div className="border-b pb-6 border-[#E5E8EB]">
        <h2 className="text-[28px] md:text-[34px] font-extrabold tracking-tight text-[#191F28]">
          Figma Plugin (다이사 교정기)
        </h2>

        {/* 액션 버튼 (플러그인 열기 단일 버튼) */}
        <div className="mt-4">
          <a
            href={pluginUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="h-[42px] px-5 rounded-[10px] bg-[#1219F7] hover:bg-[#0E14CA] text-white text-[13.5px] font-bold inline-flex items-center gap-2 transition-all shadow-sm hover:shadow"
          >
            <span>플러그인 열기</span>
            <ExternalLink className="w-4 h-4 opacity-80" />
          </a>
        </div>
      </div>

      {/* 2. 사내 비공개 플러그인 안내 */}
      <div className="p-5 rounded-[14px] bg-[#F8FAFF] border border-[#D9E2FF]">
        <div className="text-[14px] font-bold text-[#191F28]">
          사내 전용(Private) 배포 접속 안내
        </div>
        <div className="text-[13px] text-[#4E5968] leading-relaxed mt-1">
          본 플러그인은 외부 사용자에게 비공개(404) 처리되어 있으며, <strong>회사 피그마 계정으로 로그인된 브라우저</strong>에서만 열립니다. 피그마 데스크톱 앱 내에서는 <span className="font-semibold text-[#191F28]">Plugins ➔ All plugins ➔ 사내 조직 탭(Marketdesigners / 다이사)</span>에서 바로 실행할 수 있습니다.
        </div>
      </div>

      {/* 3. 단계별 실전 사용 가이드 (6단계) */}
      <div className="space-y-10">
        <div>
          <h3 className="text-[22px] font-extrabold text-[#191F28] mb-1.5">
            다이사 교정기 사용 방법
          </h3>
          <p className="text-[14.5px] text-[#6B7684]">
            피그마 작업 완료 후 아래 6단계 순서에 따라 디자인 규격을 최종 점검하세요.
          </p>
        </div>

        <div className="space-y-12 max-w-[760px]">
          {/* Step 1 */}
          <div className="space-y-3.5">
            <div className="flex items-start gap-3.5">
              <span className="w-8 h-8 rounded-full bg-[#191F28] text-white font-extrabold text-[14px] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                1
              </span>
              <div>
                <h4 className="text-[18px] font-bold text-[#191F28]">
                  피그마 플러그인에서 다이사 교정기 실행
                </h4>
                <p className="text-[14.5px] text-[#4E5968] mt-1 leading-relaxed">
                  피그마 상단 메뉴 또는 플러그인 검색창에서 '다이사 교정기'를 찾아 실행합니다.
                </p>
              </div>
            </div>

            {/* Visual 1 (Development 제거된 실물 검색창 캡처 + 다이사 교정기 영역에만 파란색 타겟 강조) */}
            <div className="ml-11 p-4 rounded-[14px] bg-[#F9FAFB] border border-[#E5E8EB] flex items-center justify-center">
              <div className="w-full max-w-[500px] rounded-[10px] overflow-hidden border border-[#3E4249] shadow-md relative bg-[#2C2C2C]">
                <img
                  src="/images/figma-step-1.png"
                  alt="피그마 검색창에서 다이사 교정기 실행"
                  className="w-full h-auto block"
                />
                {/* 다이사 교정기 행에만 정확히 맞춘 파란색 점선 타겟 박스 (하단 Rename layers 침범 방지) */}
                <div className="absolute top-[34%] left-[2.2%] w-[27%] h-[10.5%] border-2 border-dashed border-[#1219F7] rounded-[6px] pointer-events-none bg-[#1219F7]/15" />
                <div className="absolute top-[36.5%] left-[28%] text-[#1219F7] drop-shadow-md pointer-events-none">
                  <MousePointer className="w-5 h-5 fill-[#1219F7] stroke-white stroke-1 transform -rotate-12" />
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="space-y-3.5">
            <div className="flex items-start gap-3.5">
              <span className="w-8 h-8 rounded-full bg-[#191F28] text-white font-extrabold text-[14px] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                2
              </span>
              <div>
                <h4 className="text-[18px] font-bold text-[#191F28]">
                  페이지명([고객향] / [파트너향]) 구분에 따라 자동으로 해당 모드 실행
                </h4>
                <p className="text-[14.5px] text-[#4E5968] mt-1 leading-relaxed">
                  피그마 페이지명이 [고객향] 또는 [파트너향]으로 명명되어 있으면 플러그인이 실행될 때 해당 서비스 기준이 자동으로 적용됩니다.
                </p>
              </div>
            </div>

            {/* Visual 2 (고객향/파트너향 전체 영역이 표시된 실물 페이지 트리 캡처 - 비율 균형 조정) */}
            <div className="ml-11 p-4 rounded-[14px] bg-[#F9FAFB] border border-[#E5E8EB] flex items-center justify-center">
              <div className="w-full max-w-[480px] rounded-[10px] overflow-hidden border border-[#3E4249] bg-[#222222] p-2 shadow-md flex items-center justify-center">
                <img
                  src="/images/figma-step-2.png"
                  alt="피그마 페이지명 구분"
                  className="w-full max-h-[260px] object-contain block rounded-[4px]"
                />
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="space-y-3.5">
            <div className="flex items-start gap-3.5">
              <span className="w-8 h-8 rounded-full bg-[#191F28] text-white font-extrabold text-[14px] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                3
              </span>
              <div>
                <h4 className="text-[18px] font-bold text-[#191F28]">
                  한 페이지에 두 서비스가 함께 있는 경우 수동으로 모드 변경
                </h4>
                <p className="text-[14.5px] text-[#4E5968] mt-1 leading-relaxed">
                  고객향과 파트너향 작업이 한 페이지에 섞여 있거나 특정 규격으로 교정해야 하는 경우, 플러그인 우측 상단 스위처에서 직접 전환합니다.
                </p>
              </div>
            </div>

            {/* Visual 3 (상단 모드 스위처 크롭 - 비율 확대) */}
            <div className="ml-11 p-4 rounded-[14px] bg-[#F9FAFB] border border-[#E5E8EB] flex items-center justify-center">
              <div className="w-full max-w-[480px] bg-white rounded-[12px] p-4 border border-[#E5E8EB] shadow-xs flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="font-bold text-[14.5px] text-[#191F28]">다이사 교정기</span>
                  <span className="text-[11px] font-semibold text-[#6B7280] bg-[#F3F4F6] px-2 py-0.5 rounded">고객향</span>
                </div>

                <div className="relative">
                  <div className="border-2 border-dashed border-[#1219F7] rounded-[9px] p-1.5 bg-[#EEF2FF]/40 flex items-center gap-1.5">
                    <span className="px-3 py-1 rounded-[6px] bg-white text-[#191F28] text-[12px] font-bold shadow-2xs">고객향</span>
                    <span className="px-3 py-1 rounded-[6px] text-[#6B7280] text-[12px] font-medium">파트너향</span>
                  </div>
                  <div className="absolute -bottom-3 -right-2 text-[#1219F7] drop-shadow-md">
                    <MousePointer className="w-5 h-5 fill-[#1219F7] stroke-white stroke-1 transform -rotate-12" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="space-y-3.5">
            <div className="flex items-start gap-3.5">
              <span className="w-8 h-8 rounded-full bg-[#191F28] text-white font-extrabold text-[14px] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                4
              </span>
              <div>
                <h4 className="text-[18px] font-bold text-[#191F28]">
                  페이지 전체를 검사하거나 원하는 레이어만 선택하여 검사
                </h4>
                <p className="text-[14.5px] text-[#4E5968] mt-1 leading-relaxed">
                  특정 프레임만 볼 때는 [선택된 레이어 (실시간)]를, 현재 페이지 내 모든 화면을 일괄 확인할 때는 [현재 페이지 전체]를 선택합니다.
                </p>
              </div>
            </div>

            {/* Visual 4 (검사 범위 탭 크롭 - 비율 확대) */}
            <div className="ml-11 p-4 rounded-[14px] bg-[#F9FAFB] border border-[#E5E8EB] flex items-center justify-center">
              <div className="w-full max-w-[480px] bg-white rounded-[12px] p-4 border border-[#E5E8EB] shadow-xs flex items-center justify-between">
                <div className="relative">
                  <div className="border-2 border-dashed border-[#1219F7] rounded-[9px] p-1.5 bg-[#EEF2FF]/40 flex items-center gap-1.5">
                    <span className="px-3 py-1.5 rounded-[6px] bg-white text-[#191F28] text-[12px] font-bold shadow-2xs">
                      선택된 레이어 (실시간)
                    </span>
                    <span className="px-3 py-1.5 rounded-[6px] text-[#6B7280] text-[12px] font-medium">
                      현재 페이지 전체
                    </span>
                  </div>
                  <div className="absolute -bottom-3 left-1/3 text-[#1219F7] drop-shadow-md">
                    <MousePointer className="w-5 h-5 fill-[#1219F7] stroke-white stroke-1 transform -rotate-12" />
                  </div>
                </div>

                <div className="flex items-center gap-2 opacity-65">
                  <div className="w-7 h-7 rounded border border-[#E5E8EB] flex items-center justify-center text-[11px] font-mono font-bold">{"{ }"}</div>
                  <div className="w-7 h-7 rounded border border-[#E5E8EB] flex items-center justify-center text-[12px] font-bold">?</div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="space-y-3.5">
            <div className="flex items-start gap-3.5">
              <span className="w-8 h-8 rounded-full bg-[#191F28] text-white font-extrabold text-[14px] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                5
              </span>
              <div>
                <h4 className="text-[18px] font-bold text-[#191F28]">
                  검출된 [수정 필요]와 [확인 필요] 항목 검토
                </h4>
                <p className="text-[14.5px] text-[#4E5968] mt-1 leading-relaxed">
                  구분을 맹신하기보다 검출된 목록을 직접 확인하며 실제 수정할 대상인지 판단합니다.
                </p>
              </div>
            </div>

            {/* Visual 5 (수정 필요 vs 확인 필요 탭 및 정의) */}
            <div className="ml-11 p-4 rounded-[14px] bg-[#F9FAFB] border border-[#E5E8EB] flex items-center justify-center">
              <div className="w-full max-w-[480px] bg-white rounded-[12px] p-4 border border-[#E5E8EB] shadow-xs space-y-3">
                {/* 탭 예시 */}
                <div className="flex items-center gap-3 border-b border-[#F2F4F6] pb-2.5 text-[12.5px] font-bold">
                  <span className="text-[#191F28]">
                    전체 <span className="text-[11px] px-1.5 py-0.5 rounded-full bg-[#191F28] text-white ml-0.5">85</span>
                  </span>
                  <span className="text-[#E02424] flex items-center gap-1">
                    수정 필요 <span className="text-[11px] px-1.5 py-0.5 rounded-full bg-[#FDE8E8] text-[#E02424]">79</span>
                  </span>
                  <span className="text-[#4B5563] flex items-center gap-1">
                    확인 필요 <span className="text-[11px] px-1.5 py-0.5 rounded-full bg-[#F3F4F6] text-[#4B5563]">6</span>
                  </span>
                </div>

                {/* 설명 항목 2개 */}
                <div className="space-y-2 text-[12.5px] leading-relaxed">
                  <div className="p-2.5 rounded-[8px] bg-[#FEF2F2] border border-[#FEE2E2]">
                    <strong className="text-[#991B1B]">수정 필요:</strong>{' '}
                    <span className="text-[#7F1D1D]">모서리 곡률, 비표준 서체, 미허용 컬러 등 핵심 규칙을 위반한 항목으로 대부분 필수로 수정해야 합니다.</span>
                  </div>
                  <div className="p-2.5 rounded-[8px] bg-[#F9FAFB] border border-[#E5E8EB]">
                    <strong className="text-[#374151]">확인 필요:</strong>{' '}
                    <span className="text-[#4B5563]">의도된 예외인지 직접 검토가 필요한 항목입니다. 구분을 맹신하지 말고 목록을 확인하세요.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 6 */}
          <div className="space-y-3.5">
            <div className="flex items-start gap-3.5">
              <span className="w-8 h-8 rounded-full bg-[#191F28] text-white font-extrabold text-[14px] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                6
              </span>
              <div>
                <h4 className="text-[18px] font-bold text-[#191F28]">
                  원본을 보존하고 수정본을 생성할지, 해당 레이어에서 바로 수정할지 선택
                </h4>
                <p className="text-[14.5px] text-[#4E5968] mt-1 leading-relaxed">
                  기존 원본을 유지하고 변경점을 비교하려면 [수정된 복제본 생성]을, 선택한 프레임에 즉시 덮어쓰려면 [이 프레임에서 수정]을 누릅니다.
                </p>
              </div>
            </div>

            {/* Visual 6 (수정 방식 버튼 크롭 - 비율 확대) */}
            <div className="ml-11 p-4 rounded-[14px] bg-[#F9FAFB] border border-[#E5E8EB] flex items-center justify-center">
              <div className="w-full max-w-[480px] bg-white rounded-[12px] p-4 border border-[#E5E8EB] shadow-xs space-y-3">
                <div className="text-[12px] font-bold text-[#4E5968]">총 3개 항목 발견</div>
                <div className="flex items-center gap-2.5">
                  <div className="px-3.5 py-2 rounded-[7px] bg-[#F2F4F6] text-[#4E5968] text-[12px] font-medium border border-[#E5E8EB]">
                    이 프레임에서 수정 (3)
                  </div>

                  <div className="relative flex-1">
                    <div className="border-2 border-dashed border-[#1219F7] rounded-[9px] p-1 bg-[#EEF2FF]/40 flex items-center justify-center">
                      <span className="px-3.5 py-1.5 rounded-[7px] bg-[#1219F7] text-white text-[12px] font-bold flex items-center gap-1.5 shadow-2xs">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>수정된 복제본 생성</span>
                      </span>
                    </div>
                    <div className="absolute -bottom-3 right-6 text-[#1219F7] drop-shadow-md">
                      <MousePointer className="w-5 h-5 fill-[#1219F7] stroke-white stroke-1 transform -rotate-12" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. 사용 목적 및 주의사항 */}
      <div className="p-6 rounded-[16px] bg-[#F8FAFB] border border-[#E5E8EB] space-y-3">
        <div className="flex items-center gap-2 text-[15px] font-bold text-[#191F28]">
          <Info className="w-4 h-4 text-[#6B7684]" />
          <span>사용 목적 및 주의사항</span>
        </div>
        <p className="text-[13.5px] text-[#4E5968] leading-relaxed">
          다이사 교정기는 <strong>MD 규격 문서와 디자인시스템 가이드에 맞추어 제작된 작업물이 필수 규칙을 올바르게 준수했는지 확인하는 최종 검증 도구</strong>입니다.
        </p>
        <ul className="text-[13px] text-[#6B7684] space-y-1.5 list-disc list-inside">
          <li>
            <strong>최종 검증용 도구:</strong> 레이아웃의 복잡한 논리나 기획적 디테일까지 대신 판단하는 목적이 아닙니다.
          </li>
          <li>
            <strong>육안 식별이 어려운 필수 규칙 검증:</strong> 모서리 굴곡(Radius), 폰트 크기 및 행간(Typography), 색상 헥스코드(Colors) 등 눈으로 구분하기 어렵지만 디자인시스템 상 반드시 지켜야 하는 필수 요소들을 기계적으로 확인하고 교정하는 용도로 활용합니다.
          </li>
        </ul>
      </div>

      {/* 5. 검사 결과 예시 (잘된 예시 vs 잘못된 예시) */}
      <div className="space-y-6 pt-4 border-t border-[#E5E8EB]">
        <div>
          <h3 className="text-[22px] font-extrabold text-[#191F28] mb-1.5">
            검사 결과 예시 (규칙 준수 여부 판별)
          </h3>
          <p className="text-[14.5px] text-[#6B7684]">
            플러그인 검사 시 [수정 필요] 항목이 적거나 없으면 규칙이 잘 지켜진 화면이고, [수정 필요] 항목이 많으면 비표준 규격이 포함되어 수정이 필요한 화면입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[860px]">
          {/* 잘된 예시 카드 */}
          <div className="p-5 rounded-[16px] bg-[#F9FAFB] border border-[#E5E8EB] space-y-3.5">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-1 rounded-[6px] bg-[#E8F5E9] text-[#2E7D32] text-[12.5px] font-bold inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                잘된 예시 (규칙 준수)
              </span>
              <span className="text-[12px] font-bold text-[#2E7D32] bg-white px-2 py-0.5 rounded border border-[#C8E6C9]">
                수정 필요 0건
              </span>
            </div>

            <div className="rounded-[10px] overflow-hidden border border-[#D1D5DB] bg-[#1E1E1E] shadow-xs flex items-center justify-center p-2">
              <img
                src="/images/figma-good-example.png"
                alt="잘된 예시 - 수정 필요 0건"
                className="w-full max-h-[420px] object-contain block rounded-[4px]"
              />
            </div>

            <div className="text-[13px] text-[#4E5968] leading-relaxed">
              수정 필요 항목이 0건으로 필수 디자인 규격(곡률 10px/6px, Pretendard 서체, 공식 컬러 토큰)이 모두 올바르게 지켜진 상태입니다.
            </div>
          </div>

          {/* 잘못된 예시 카드 */}
          <div className="p-5 rounded-[16px] bg-[#F9FAFB] border border-[#E5E8EB] space-y-3.5">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-1 rounded-[6px] bg-[#FDE8E8] text-[#E02424] text-[12.5px] font-bold inline-flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4" />
                잘못된 예시 (수정 필요)
              </span>
              <span className="text-[12px] font-bold text-[#E02424] bg-white px-2 py-0.5 rounded border border-[#FCD9BD]">
                수정 필요 79건
              </span>
            </div>

            <div className="rounded-[10px] overflow-hidden border border-[#D1D5DB] bg-[#1E1E1E] shadow-xs flex items-center justify-center p-2">
              <img
                src="/images/figma-bad-example.jpg"
                alt="잘못된 예시 - 수정 필요 다수"
                className="w-full max-h-[420px] object-contain block rounded-[4px]"
              />
            </div>

            <div className="text-[13px] text-[#4E5968] leading-relaxed">
              비표준 곡률, 비표준 서체, 미허용 Fill 컬러 등 수정 필요 항목이 79건 검출된 상태입니다. [수정된 복제본 생성]을 눌러 표준 규격으로 일괄 교정합니다.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FigmaPluginSection;
