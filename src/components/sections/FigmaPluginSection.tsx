import React, { useState } from 'react';
import {
  ExternalLink,
  Copy,
  Check,
  ShieldCheck,
  Sparkles,
  MousePointer,
  HelpCircle,
  FileCode,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

interface FigmaPluginSectionProps {
  mode?: 'customer' | 'partner';
}

export const FigmaPluginSection: React.FC<FigmaPluginSectionProps> = ({ mode = 'customer' }) => {
  const [activePluginMode, setActivePluginMode] = useState<'customer' | 'partner'>(mode);
  const [activeScope, setActiveScope] = useState<'selection' | 'page'>('selection');
  const [activeSev, setActiveSev] = useState<'all' | 'must' | 'check'>('all');
  const [activeCat, setActiveCat] = useState<string>('all');
  const [copiedLink, setCopiedLink] = useState(false);

  const pluginUrl = 'https://www.figma.com/community/plugin/1701500498028389673';

  const handleCopyLink = () => {
    navigator.clipboard.writeText(pluginUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <section id="figma-plugin" className="space-y-14">
      {/* 1. Page Header */}
      <div className="border-b pb-6 border-[#E5E8EB]">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[12px] font-bold text-[#1219F7] bg-[#EEF2FF] px-2.5 py-1 rounded-[6px]">
            Tools
          </span>
          <span className="text-[12px] text-[#8B95A1] font-medium">v1.0.0</span>
        </div>
        <h2 className="text-[28px] md:text-[34px] font-extrabold tracking-tight text-[#191F28] mb-3">
          Figma Plugin (다이사 교정기)
        </h2>
        <p className="text-[15px] text-[#4E5968] leading-relaxed max-w-[800px]">
          피그마에서 디자인시스템 규칙 준수 여부를 최종 점검하고, 필수 굴곡·폰트·컬러를 원클릭으로 안전하게 교정하는 공식 린터 플러그인입니다.
        </p>

        {/* 액션 버튼 */}
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
            <span>{copiedLink ? '링크 복사됨' : '플러그인 링크 복사'}</span>
          </button>
        </div>
      </div>

      {/* 2. 회사 사람들에게만 보이는 사내 비공개 플러그인 안내 */}
      <div className="p-5 rounded-[16px] bg-[#F8FAFF] border border-[#D9E2FF] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-[8px] bg-[#EEF2FF] flex items-center justify-center shrink-0 mt-0.5 text-[#1219F7]">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[14px] font-bold text-[#191F28]">
              사내 전용(Private) 배포 안내
            </div>
            <div className="text-[12.5px] text-[#4E5968] leading-relaxed mt-0.5">
              외부 사용자에게는 비공개(404) 처리되며, <strong>회사 피그마 계정으로 로그인된 상태</strong>에서만 열립니다. 피그마 데스크톱 앱 내 <span className="font-semibold text-[#191F28]">Plugins ➔ All plugins ➔ 사내 조직 탭</span>에서 1초 만에 바로 실행하실 수도 있습니다.
            </div>
          </div>
        </div>
      </div>

      {/* 3. 친절하고 직관적인 Step-by-Step 실전 사용 가이드 (보니 이용 가이드 스타일) */}
      <div className="space-y-8">
        <div>
          <h3 className="text-[20px] md:text-[22px] font-extrabold text-[#191F28] mb-1">
            복잡한 규칙 외울 필요 NO! 다이사 교정기 활용법 알려드릴게요 🛠️
          </h3>
          <p className="text-[13.5px] text-[#6B7684]">
            10초도 안 걸려요! 피그마에서 화면을 만들고 마지막에 딱 3단계로 검증하면 끝납니다.
          </p>
        </div>

        <div className="space-y-10 max-w-[680px]">
          {/* Step 1 */}
          <div className="space-y-3">
            <div className="flex items-start gap-3.5">
              <span className="w-7 h-7 rounded-full bg-[#F2F4F6] text-[#191F28] font-extrabold text-[13px] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                1
              </span>
              <div>
                <h4 className="text-[16px] font-bold text-[#191F28]">
                  피그마 페이지 이름에 맞게 교정기가 자동으로 켜져요
                </h4>
                <p className="text-[13px] text-[#8B95A1] mt-0.5">
                  페이지 이름에 [고객향] 또는 [파트너향]이 있으면 끝! 필요할 땐 우측 상단에서 수동 교체도 가능해요
                </p>
              </div>
            </div>

            {/* Visual Crop 1 */}
            <div className="ml-10 p-4 rounded-[14px] bg-[#F9FAFB] border border-[#E5E8EB] flex items-center justify-center">
              <div className="w-full max-w-[420px] bg-white rounded-[10px] p-2.5 border border-[#E5E7EB] shadow-xs flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[13px] text-[#191F28]">다이사 교정기</span>
                  <span className="text-[10px] font-semibold text-[#6B7280] bg-[#F3F4F6] px-1.5 py-0.5 rounded">고객향</span>
                </div>

                {/* Dashed Target Box */}
                <div className="relative">
                  <div className="border-2 border-dashed border-[#1219F7] rounded-[8px] p-1 bg-[#EEF2FF]/40 flex items-center gap-1">
                    <span className="px-2 py-0.5 rounded bg-white text-[#191F28] text-[11px] font-bold shadow-2xs">고객향</span>
                    <span className="px-2 py-0.5 rounded text-[#6B7280] text-[11px] font-medium">파트너향</span>
                  </div>
                  {/* Cursor Icon */}
                  <div className="absolute -bottom-3 -right-2 text-[#1219F7] drop-shadow-md">
                    <MousePointer className="w-5 h-5 fill-[#1219F7] stroke-white stroke-1 transform -rotate-12" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="space-y-3">
            <div className="flex items-start gap-3.5">
              <span className="w-7 h-7 rounded-full bg-[#F2F4F6] text-[#191F28] font-extrabold text-[13px] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                2
              </span>
              <div>
                <h4 className="text-[16px] font-bold text-[#191F28]">
                  검사할 프레임을 콕 찍거나, 페이지 전체를 한 번에 검사해요
                </h4>
                <p className="text-[13px] text-[#8B95A1] mt-0.5">
                  선택한 프레임만 빠르게 볼 땐 '선택된 레이어', 전체를 훑어볼 땐 '현재 페이지 전체'를 눌러보세요
                </p>
              </div>
            </div>

            {/* Visual Crop 2 */}
            <div className="ml-10 p-4 rounded-[14px] bg-[#F9FAFB] border border-[#E5E8EB] flex items-center justify-center">
              <div className="w-full max-w-[420px] bg-white rounded-[10px] p-2.5 border border-[#E5E7EB] shadow-xs flex items-center justify-between">
                {/* Dashed Target Box */}
                <div className="relative">
                  <div className="border-2 border-dashed border-[#1219F7] rounded-[8px] p-1 bg-[#EEF2FF]/40 flex items-center gap-1">
                    <span className="px-2 py-1 rounded bg-white text-[#191F28] text-[11px] font-bold shadow-2xs">
                      선택된 레이어 (실시간)
                    </span>
                    <span className="px-2 py-1 rounded text-[#6B7280] text-[11px] font-medium">
                      현재 페이지 전체
                    </span>
                  </div>
                  {/* Cursor Icon */}
                  <div className="absolute -bottom-3 left-1/3 text-[#1219F7] drop-shadow-md">
                    <MousePointer className="w-5 h-5 fill-[#1219F7] stroke-white stroke-1 transform -rotate-12" />
                  </div>
                </div>

                <div className="flex items-center gap-1.5 opacity-60">
                  <div className="w-6 h-6 rounded border border-[#E5E8EB] flex items-center justify-center text-[10px] font-mono">{"{ }"}</div>
                  <div className="w-6 h-6 rounded border border-[#E5E8EB] flex items-center justify-center text-[11px]">?</div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="space-y-3">
            <div className="flex items-start gap-3.5">
              <span className="w-7 h-7 rounded-full bg-[#F2F4F6] text-[#191F28] font-extrabold text-[13px] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                3
              </span>
              <div>
                <h4 className="text-[16px] font-bold text-[#191F28]">
                  원본을 지킬지, 바로 고칠지 버튼 하나로 선택하면 끝!
                </h4>
                <p className="text-[13px] text-[#8B95A1] mt-0.5">
                  안전하게 비교하려면 '복제본 생성', 지금 프레임에 바로 반영하려면 '이 프레임에서 수정'을 클릭하세요
                </p>
              </div>
            </div>

            {/* Visual Crop 3 */}
            <div className="ml-10 p-4 rounded-[14px] bg-[#F9FAFB] border border-[#E5E8EB] flex items-center justify-center">
              <div className="w-full max-w-[420px] bg-white rounded-[10px] p-3 border border-[#E5E8EB] shadow-xs space-y-2.5">
                <div className="text-[11px] font-bold text-[#4E5968]">총 3개 항목 발견</div>
                <div className="flex items-center gap-2">
                  <div className="px-3 py-1.5 rounded-[6px] bg-[#F2F4F6] text-[#4E5968] text-[11px] font-medium border border-[#E5E8EB]">
                    이 프레임에서 수정 (3)
                  </div>

                  {/* Dashed Target Box around Recommended Action */}
                  <div className="relative flex-1">
                    <div className="border-2 border-dashed border-[#1219F7] rounded-[8px] p-1 bg-[#EEF2FF]/40 flex items-center justify-center">
                      <span className="px-3 py-1 rounded-[6px] bg-[#1219F7] text-white text-[11px] font-bold flex items-center gap-1 shadow-2xs">
                        <Sparkles className="w-3 h-3" />
                        <span>수정된 복제본 생성</span>
                      </span>
                    </div>
                    {/* Cursor Icon */}
                    <div className="absolute -bottom-3 right-6 text-[#1219F7] drop-shadow-md">
                      <MousePointer className="w-5 h-5 fill-[#1219F7] stroke-white stroke-1 transform -rotate-12" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Final Summary Card (보라 하트 스타일) */}
          <div className="ml-10 p-5 rounded-[16px] bg-[#FAF5FF] border border-[#E9D5FF] flex items-start gap-3.5">
            <span className="text-[20px] select-none">💜</span>
            <div>
              <h4 className="text-[15px] font-bold text-[#581C87]">
                MD 규칙대로 잘 만들어졌는지 체크하는 "최종 검증 도구"예요!
              </h4>
              <p className="text-[13px] text-[#7E22CE] leading-relaxed mt-1">
                다이사 교정기는 복잡한 컴포넌트 구조나 기획 디테일을 대신해 주는 도구가 아니에요. 모서리 굴곡(Radius), 폰트 크기/행간(Typography), 색상(Colors)처럼 <strong>눈으로 일일이 구분하기 어려운 디자인시스템 필수 규칙이 잘 지켜졌는지 기계적으로 확인하는 최종 점검용</strong>으로 편하게 이용해 보세요!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 4. 실제 플러그인 UI 100% 동일 재현 윈도우 창 */}
      <div className="space-y-4 pt-6 border-t border-[#E5E8EB]">
        <div>
          <h3 className="text-[20px] font-bold text-[#191F28] mb-1">
            실제 피그마 플러그인 UI 윈도우
          </h3>
          <p className="text-[13px] text-[#6B7684]">
            실제 피그마 창 내부에서 구동되는 다이사 교정기 화면과 1:1로 동일하게 동작합니다. 탭과 버튼을 직접 클릭해 보세요.
          </p>
        </div>

        {/* 1:1 Figma Plugin Window Mockup */}
        <div className="max-w-[420px] mx-auto bg-[#F8F9FA] rounded-[16px] border border-[#D1D5DB] shadow-[0_16px_40px_rgba(0,0,0,0.12)] overflow-hidden font-sans text-[#111827]">
          {/* 1. 상단 미니멀 헤더 */}
          <header className="bg-white px-3.5 py-2.5 border-b border-[#E5E7EB] flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2">
              <span className="font-bold text-[14px] tracking-tight text-[#111827]">다이사 교정기</span>
              <span className="text-[10px] font-semibold text-[#6B7280] bg-[#F3F4F6] px-1.5 py-0.5 rounded">
                {activePluginMode === 'customer' ? '고객향' : '파트너향'}
              </span>
            </div>
            {/* 세그먼트 스위처 */}
            <div className="flex bg-[#F1F3F5] rounded-[6px] p-[2px] gap-[2px]">
              <button
                type="button"
                onClick={() => setActivePluginMode('customer')}
                className={`border-none px-3 py-1 text-[11px] rounded-[4px] cursor-pointer transition-all ${
                  activePluginMode === 'customer'
                    ? 'bg-white text-[#111827] font-semibold shadow-2xs'
                    : 'text-[#6B7280] font-medium'
                }`}
              >
                고객향
              </button>
              <button
                type="button"
                onClick={() => setActivePluginMode('partner')}
                className={`border-none px-3 py-1 text-[11px] rounded-[4px] cursor-pointer transition-all ${
                  activePluginMode === 'partner'
                    ? 'bg-white text-[#111827] font-semibold shadow-2xs'
                    : 'text-[#6B7280] font-medium'
                }`}
              >
                파트너향
              </button>
            </div>
          </header>

          {/* 2. 컨트롤 바 */}
          <div className="bg-white px-3.5 py-2 border-b border-[#E5E7EB] flex items-center justify-between shrink-0 gap-2">
            <div className="flex bg-[#F3F4F6] rounded-[5px] p-[2px] gap-[2px]">
              <button
                type="button"
                onClick={() => setActiveScope('selection')}
                className={`border-none px-2.5 py-1 text-[11px] rounded-[4px] cursor-pointer transition-all ${
                  activeScope === 'selection'
                    ? 'bg-white text-[#111827] font-semibold shadow-2xs'
                    : 'text-[#6B7280] font-medium'
                }`}
              >
                선택된 레이어 (실시간)
              </button>
              <button
                type="button"
                onClick={() => setActiveScope('page')}
                className={`border-none px-2.5 py-1 text-[11px] rounded-[4px] cursor-pointer transition-all ${
                  activeScope === 'page'
                    ? 'bg-white text-[#111827] font-semibold shadow-2xs'
                    : 'text-[#6B7280] font-medium'
                }`}
              >
                현재 페이지 전체
              </button>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                title="디자인시스템 명세서(MD) 보기"
                className="w-7 h-7 border border-[#E5E7EB] bg-white rounded-[4px] flex items-center justify-center text-[#6B7280] hover:bg-[#F3F4F6] text-[12px] font-mono font-bold"
              >
                {"{ }"}
              </button>
              <button
                type="button"
                title="다이사 교정기 안내"
                className="w-7 h-7 border border-[#E5E7EB] bg-white rounded-[4px] flex items-center justify-center text-[#6B7280] hover:bg-[#F3F4F6]"
              >
                <HelpCircle className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* 3. 필터 패널 (심각도 탭 & 카테고리 칩) */}
          <div className="bg-white px-3.5 py-2.5 border-b border-[#E5E7EB] space-y-2">
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => setActiveSev('all')}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-[5px] text-[11px] font-semibold border transition-all ${
                  activeSev === 'all'
                    ? 'bg-[#191F28] text-white border-[#191F28]'
                    : 'bg-white text-[#6B7280] border-[#E5E7EB]'
                }`}
              >
                <span>전체</span>
                <span className={`text-[10px] px-1 rounded-full ${activeSev === 'all' ? 'bg-white/20' : 'bg-[#F2F4F6]'}`}>3</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveSev('must')}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-[5px] text-[11px] font-semibold border transition-all ${
                  activeSev === 'must'
                    ? 'bg-[#E11D48] text-white border-[#E11D48]'
                    : 'bg-white text-[#E11D48] border-[#FFE4E6]'
                }`}
              >
                <span>수정 필요</span>
                <span className={`text-[10px] px-1 rounded-full ${activeSev === 'must' ? 'bg-white/20' : 'bg-[#FFE4E6]'}`}>2</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveSev('check')}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-[5px] text-[11px] font-semibold border transition-all ${
                  activeSev === 'check'
                    ? 'bg-[#D97706] text-white border-[#D97706]'
                    : 'bg-white text-[#D97706] border-[#FEF3C7]'
                }`}
              >
                <span>확인 필요</span>
                <span className={`text-[10px] px-1 rounded-full ${activeSev === 'check' ? 'bg-white/20' : 'bg-[#FEF3C7]'}`}>1</span>
              </button>
            </div>

            {/* 카테고리 칩 */}
            <div className="flex items-center gap-1 text-[10.5px] overflow-x-auto no-scrollbar pt-0.5">
              {['all:전체', 'typo:서체·폰트', 'color:컬러', 'radius:곡률·보더', 'layout:기타'].map((c) => {
                const [id, label] = c.split(':');
                const isSelected = activeCat === id;
                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setActiveCat(id)}
                    className={`px-2 py-0.5 rounded-[4px] whitespace-nowrap transition-all ${
                      isSelected
                        ? 'bg-[#F1F3F5] text-[#111827] font-bold'
                        : 'text-[#6B7280] hover:bg-[#F9FAFB]'
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 4. 상단 액션 바 (이 프레임에서 수정 / 수정된 복제본 생성) */}
          <div className="bg-[#FAFBFD] px-3.5 py-2.5 border-b border-[#E5E7EB] flex items-center justify-between text-[11px]">
            <span className="font-semibold text-[#4E5968]">총 3개 항목 발견</span>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                className="px-2.5 py-1 rounded-[5px] bg-white border border-[#D1D5DB] text-[#374151] hover:bg-[#F3F4F6] font-medium flex items-center gap-1 cursor-pointer transition-all shadow-2xs"
              >
                <Check className="w-3 h-3 text-[#1219F7]" />
                <span>이 프레임에서 수정 (2)</span>
              </button>

              <button
                type="button"
                className="px-2.5 py-1 rounded-[5px] bg-[#1219F7] hover:bg-[#0E14CA] text-white font-bold flex items-center gap-1 cursor-pointer transition-all shadow-2xs"
              >
                <Sparkles className="w-3 h-3" />
                <span>수정된 복제본 생성</span>
              </button>
            </div>
          </div>

          {/* 5. 이슈 카드 스크롤 영역 */}
          <div className="p-3 space-y-2 max-h-[300px] overflow-y-auto bg-[#F8F9FA]">
            {/* Issue Card 1 */}
            <div className="bg-white p-3 rounded-[8px] border border-[#E5E7EB] shadow-2xs space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-rose-50 text-rose-600 border border-rose-200">
                  수정 필요 · 곡률
                </span>
                <button type="button" className="text-[10.5px] font-bold text-[#1219F7] hover:underline">수정</button>
              </div>
              <div className="text-[12px] font-bold text-[#111827]">
                Radius 8px ➔ 공식 규격 {activePluginMode === 'customer' ? '10px' : '6px'}
              </div>
              <div className="text-[10.5px] text-[#6B7280]">
                Button / Primary · 컨테이너 모서리 굴곡 불일치
              </div>
            </div>

            {/* Issue Card 2 */}
            <div className="bg-white p-3 rounded-[8px] border border-[#E5E7EB] shadow-2xs space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-rose-50 text-rose-600 border border-rose-200">
                  수정 필요 · 컬러
                </span>
                <button type="button" className="text-[10.5px] font-bold text-[#1219F7] hover:underline">수정</button>
              </div>
              <div className="text-[12px] font-bold text-[#111827] flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-[2px] bg-[#2563EB] inline-block border border-black/10"></span>
                <span>#2563EB ➔ 메인 블루 #1219F7 (main-01)</span>
              </div>
              <div className="text-[10.5px] text-[#6B7280]">
                Button / Text · 비표준 블루 컬러 토큰 검출
              </div>
            </div>

            {/* Issue Card 3 */}
            <div className="bg-white p-3 rounded-[8px] border border-[#E5E7EB] shadow-2xs space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-50 text-amber-600 border border-amber-200">
                  확인 필요 · 타이포
                </span>
                <button type="button" className="text-[10.5px] font-bold text-[#1219F7] hover:underline">수정</button>
              </div>
              <div className="text-[12px] font-bold text-[#111827]">
                Pretendard Regular ➔ Medium (Body 16px)
              </div>
              <div className="text-[10.5px] text-[#6B7280]">
                버튼 라벨 텍스트 권장 굵기 적용 확인
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FigmaPluginSection;
