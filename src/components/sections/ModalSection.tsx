import React, { useState } from 'react';

export const ModalSection: React.FC<{ mode?: 'customer' | 'partner' }> = ({ mode = 'customer' }) => {
  const isPartner = mode === 'partner';

  // Responsive Viewport Preset State (360px, 768px, 1280px)
  const [simulatedWidth, setSimulatedWidth] = useState<number>(360);
  const isSimulatedDesktop = simulatedWidth >= 1200;

  // 모달 & 바텀시트 스펙 표 데이터 (내용 보존 & 표 형태 UI)
  const customerSpecs = [
    {
      type: '중앙 고정 모달 (Center Modal)',
      viewport: '1200px 이상 (PC)',
      width: '360px 고정',
      radius: '16px (전사 표준)',
      action: '취소(#F2F4F6) + 확인(#1219F7) 56px r:10',
      behavior: '화면 정중앙 고정 얼럿/컨펌 다이얼로그 (딤드 60%)',
    },
    {
      type: '반응형 바텀시트 (Bottom Sheet)',
      viewport: '360px ~ 1199px (모바일·태블릿)',
      width: '100% (최대 640px)',
      radius: '상단 16px (rounded-t-[16px])',
      action: '옵션 행 56px / 바텀 액션 50px',
      behavior: '화면 하단 슬라이드업, 상단 36x4px 핸들바 중앙 배치',
    },
  ];

  const partnerSpecs = [
    {
      type: '파트너 Alert / Confirm 모달',
      viewport: '모바일 360px / PC 1200px',
      width: '312px (모바일) / 360px (PC)',
      radius: '6px (직각형 고정 · 16px 금지)',
      action: '취소(#F2F4F6) + 메인(#1219F7) 51px r:6',
      behavior: '현장 업무 특화 고시인성 직각 모달 (딤드 60%)',
    },
    {
      type: '파트너 바텀시트 (Bottom Sheet)',
      viewport: '360px ~ 1199px',
      width: '100% (오더 컨테이너 최대 627px)',
      radius: '상단 16px',
      action: '본문 18px Regular / 51px r:6 버튼',
      behavior: '하단 고정 오더 옵션 선택 시트',
    },
  ];

  const specs = isPartner ? partnerSpecs : customerSpecs;

  return (
    <section id="modals" className="space-y-8">
      {/* 1. Header (심플 영문 타이틀만) */}
      <div className="border-b pb-4 border-[#E5E8EB]">
        <h2 className="text-[28px] md:text-[32px] font-extrabold tracking-tight text-[#191F28]">
          Dialog & Sheet
        </h2>
      </div>

      {/* 2. 개별 실물 컴포넌트 프리뷰 (고객향 얼럿/컨펌 모달 & 고객향 바텀시트 프리뷰) - 맨 위 배치 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 1. Modal Preview */}
        <div className="rounded-[16px] p-6 space-y-4 shadow-xs bg-white border border-[#E5E8EB]">
          <div className="border-b pb-3 border-[#F2F4F8] flex items-center justify-between">
            <h3 className="text-[16px] font-bold text-[#191F28]">
              {isPartner ? '파트너 알림 모달 (Confirm / Alert)' : '고객향 얼럿/컨펌 모달'}
            </h3>
            <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-[#E8F3FF] text-[#1219F7]">
              {isPartner ? '312px / r:6' : '312px / r:16'}
            </span>
          </div>

          <div className="p-8 rounded-[14px] bg-[#FAFBFD] flex items-center justify-center">
            <div
              className={`w-full max-w-[312px] p-5 space-y-4 shadow-lg bg-white ${
                isPartner ? 'rounded-[6px]' : 'rounded-[16px]'
              }`}
            >
              <div className="text-center space-y-1">
                <div className={`font-bold text-[#191F28] ${isPartner ? 'text-[18px]' : 'text-[17px]'}`}>
                  {isPartner ? '오더 접수를 취소하시겠습니까?' : '신청을 취소하시겠습니까?'}
                </div>
                <div className={`text-[#6B7684] ${isPartner ? 'text-[14px]' : 'text-[13px]'}`}>
                  {isPartner ? '작성 중인 견적 정보가 삭제됩니다.' : '작성 중인 정보가 저장되지 않습니다.'}
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  className={`flex-1 font-bold bg-[#F2F4F6] text-[#333D4B] hover:bg-[#E5E8EB] transition-colors ${
                    isPartner ? 'h-[51px] rounded-[6px] text-[15px]' : 'h-[50px] rounded-[10px] text-[14px]'
                  }`}
                >
                  취소
                </button>
                <button
                  type="button"
                  className={`flex-1 font-bold bg-[#1219F7] text-white hover:bg-[#0E15D4] transition-colors ${
                    isPartner ? 'h-[51px] rounded-[6px] text-[15px]' : 'h-[50px] rounded-[10px] text-[14px]'
                  }`}
                >
                  확인
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Bottom Sheet Preview */}
        <div className="rounded-[16px] p-6 space-y-4 shadow-xs bg-white border border-[#E5E8EB]">
          <div className="border-b pb-3 border-[#F2F4F8] flex items-center justify-between">
            <h3 className="text-[16px] font-bold text-[#191F28]">
              {isPartner ? '파트너 바텀시트 프리뷰' : '고객향 바텀시트 프리뷰'}
            </h3>
            <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-[#E8F3FF] text-[#1219F7]">
              상단 r:16px
            </span>
          </div>

          <div className="p-8 rounded-[14px] bg-[#FAFBFD] flex items-center justify-center">
            <div className="w-full max-w-[312px] bg-white rounded-t-[16px] p-5 space-y-3 shadow-lg">
              <div className="w-9 h-1 bg-[#D7DBE2] rounded-full mx-auto" />
              <div className="font-bold text-[#191F28] text-[16px] border-b border-[#F2F4F8] pb-2">
                {isPartner ? '작업 조건 선택' : '이사 종류 선택'}
              </div>
              <div className="space-y-1.5 text-[13px] text-[#333D4B]">
                <div className="p-2.5 rounded-[8px] bg-[#F2F4F8] font-bold text-[#1219F7] flex items-center justify-between">
                  <span>{isPartner ? '1톤 탑차 (추천)' : '가정이사 (포장)'}</span>
                  <span className="text-[11px]">선택됨</span>
                </div>
                <div className="p-2.5 rounded-[8px] hover:bg-[#F9FAFB] text-[#6B7684]">
                  {isPartner ? '2.5톤 탑차' : '원룸/소형이사'}
                </div>
              </div>
              <button
                type="button"
                className={`w-full bg-[#1219F7] text-white font-bold text-[14px] ${
                  isPartner ? 'h-[51px] rounded-[6px]' : 'h-[50px] rounded-[10px]'
                }`}
              >
                선택 완료
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 3. 반응형 관련 규격 (표 형태 심플 UI) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-[18px] font-bold text-[#191F28]">반응형 오버레이 규격</h3>
          <span className="text-[12px] font-medium text-[#1219F7]">모바일 ↔ PC 최적화 표준</span>
        </div>

        <div className="bg-white rounded-[16px] overflow-hidden shadow-xs border border-[#E5E8EB]">
          {/* Table Header */}
          <div className="grid grid-cols-12 px-6 py-3.5 border-b border-[#F2F4F8] text-[13px] font-semibold text-[#8B95A1] bg-[#FAFAFB]">
            <div className="col-span-3">오버레이 구분</div>
            <div className="col-span-2">적용 뷰포트</div>
            <div className="col-span-2">너비 규격</div>
            <div className="col-span-2">코너 곡률</div>
            <div className="col-span-3">액션 버튼 & 동작 규칙</div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-[#F2F4F8]">
            {specs.map((row) => (
              <div
                key={row.type}
                className="grid grid-cols-12 px-6 py-4 items-center text-[13px] hover:bg-[#F9FAFB] transition-colors"
              >
                <div className="col-span-3 font-bold text-[#191F28]">{row.type}</div>
                <div className="col-span-2 text-[#4E5968] font-mono text-[12px]">{row.viewport}</div>
                <div className="col-span-2 font-bold text-[#1219F7] font-mono text-[13px]">{row.width}</div>
                <div className="col-span-2 text-[#191F28] font-medium">{row.radius}</div>
                <div className="col-span-3 text-[#6B7684] text-[12px] leading-relaxed">
                  <div>{row.action}</div>
                  <div className="text-[11px] text-[#8B95A1] mt-0.5">{row.behavior}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. 시각화 (슬라이더 배제, 모바일/태블릿/데스크톱 3개 버튼으로만 조절) */}
      <div className="bg-white rounded-[16px] p-6 md:p-8 space-y-6 shadow-xs border border-[#E5E8EB]">
        {/* Header & 3-Button Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#F2F4F8] pb-4">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-[17px] font-bold text-[#191F28]">
                반응형 바텀시트 ↔ 중앙 고정 모달 전환 시각화
              </h3>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#E8F3FF] text-[#1219F7]">
                1200px 전환 룰
              </span>
            </div>
            <p className="text-[13px] text-[#6B7684] mt-1">
              우측 버튼을 눌러 뷰포트별 전환(모바일 바텀시트 ↔ 데스크톱 360px 중앙 모달) 동작을 확인하세요.
            </p>
          </div>

          {/* 3 Presets Buttons Only (슬라이더 없이 이 3개 버튼으로만 제어) */}
          <div className="flex items-center gap-1.5 p-1 rounded-[10px] bg-[#F2F4F8] shrink-0 self-start sm:self-auto">
            <button
              type="button"
              onClick={() => setSimulatedWidth(360)}
              className={`px-3 py-1.5 rounded-[8px] text-[12px] font-bold transition-all ${
                simulatedWidth === 360
                  ? 'bg-white text-[#1219F7] shadow-2xs'
                  : 'text-[#6B7684] hover:text-[#191F28]'
              }`}
            >
              모바일 (360px)
            </button>
            <button
              type="button"
              onClick={() => setSimulatedWidth(768)}
              className={`px-3 py-1.5 rounded-[8px] text-[12px] font-bold transition-all ${
                simulatedWidth === 768
                  ? 'bg-white text-[#1219F7] shadow-2xs'
                  : 'text-[#6B7684] hover:text-[#191F28]'
              }`}
            >
              태블릿 (768px)
            </button>
            <button
              type="button"
              onClick={() => setSimulatedWidth(1280)}
              className={`px-3 py-1.5 rounded-[8px] text-[12px] font-bold transition-all ${
                simulatedWidth === 1280
                  ? 'bg-white text-[#1219F7] shadow-2xs'
                  : 'text-[#6B7684] hover:text-[#191F28]'
              }`}
            >
              데스크톱 (1280px)
            </button>
          </div>
        </div>

        {/* Current State Info Bar */}
        <div className="flex items-center justify-between text-[13px] bg-[#FAFBFD] px-4 py-3 rounded-[12px]">
          <div className="flex items-center gap-2">
            <span className="text-[#6B7684]">선택된 뷰포트 너비:</span>
            <span className="text-[15px] font-bold text-[#1219F7] font-mono">{simulatedWidth}px</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[12px] text-[#6B7684]">적용 모드:</span>
            <span className="px-2.5 py-0.5 rounded-[6px] text-[12px] font-bold bg-[#E8F3FF] text-[#1219F7]">
              {isSimulatedDesktop
                ? '데스크톱 중앙 고정 모달 (360px)'
                : '모바일 가변 바텀시트 (360px ~ 1199px)'}
            </span>
          </div>
        </div>

        {/* Live Morphing Viewport Canvas */}
        <div className="bg-[#191F28] p-4 md:p-6 rounded-[16px] overflow-hidden flex flex-col items-center select-none">
          <div className="text-[12px] text-white/70 mb-3 flex items-center gap-2">
            <span className="font-mono">뷰포트 캔버스: {simulatedWidth}px</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-white font-bold">
              {isSimulatedDesktop ? 'PC 데스크톱 중앙 모달 (360px)' : '모바일 반응형 바텀시트'}
            </span>
          </div>

          {/* Simulated Device Window */}
          <div
            style={{ width: `${Math.min(simulatedWidth, 840)}px` }}
            className="h-[400px] bg-slate-900/90 rounded-[12px] relative overflow-hidden transition-all duration-300 flex flex-col shadow-2xl"
          >
            {/* Dummy Background App */}
            <div className="p-3 border-b border-white/10 flex items-center justify-between text-white/80 text-[12px] bg-white/5">
              <span className="font-bold text-white">다이사 견적 신청</span>
              <span className="text-white/60">3 / 5 단계</span>
            </div>
            <div className="p-4 space-y-2 opacity-25">
              <div className="h-4 bg-white/40 rounded w-1/3" />
              <div className="h-9 bg-white/20 rounded w-full" />
              <div className="h-9 bg-white/20 rounded w-full" />
            </div>

            {/* In-Preview Dynamic Morphing Overlay */}
            {isSimulatedDesktop ? (
              // Desktop Center Modal (>= 1200px): Fixed 360px, All-round 16px
              <div className="absolute inset-0 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs transition-all duration-300">
                <div className="w-[360px] max-w-[92%] bg-white rounded-[16px] p-5 space-y-4 shadow-2xl">
                  <div className="flex items-center justify-between border-b border-[#F2F4F8] pb-2.5">
                    <div className="flex items-center gap-2">
                      <span className="text-[16px] font-bold text-[#191F28]">출발지 주소 검색</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#E8F3FF] text-[#1219F7]">
                        360px 고정 (r:16)
                      </span>
                    </div>
                    <button type="button" className="text-[#8B95A1] hover:text-[#191F28] font-bold text-[14px]">
                      ✕
                    </button>
                  </div>

                  <div className="h-[46px] rounded-[10px] bg-[#F2F4F8] px-3.5 flex items-center justify-between text-[13px] text-[#191F28]">
                    <span className="font-medium">테헤란로 7길 12</span>
                    <span className="text-[#1219F7] font-bold text-[12px]">검색</span>
                  </div>

                  <div className="space-y-1 text-[11px] text-[#6B7684] bg-[#FAFBFD] p-3 rounded-[8px]">
                    <div className="font-bold text-[#191F28]">주소검색 Tip</div>
                    <div>• 도로명 + 건물번호 (예: 테헤란로7길 12)</div>
                  </div>

                  <div className="pt-1 flex justify-end gap-2">
                    <button
                      type="button"
                      className="px-4 py-2 text-[12px] font-bold text-[#4E5968] hover:bg-[#F2F4F6] rounded-[8px]"
                    >
                      취소
                    </button>
                    <button
                      type="button"
                      className="px-4 py-2 text-[12px] font-bold bg-[#1219F7] text-white rounded-[8px]"
                    >
                      선택 완료
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              // Mobile Bottom Sheet (< 1200px): Bottom-anchored, Top rounded 16px, Handle visible
              <div className="absolute inset-0 flex flex-col justify-end bg-black/60 backdrop-blur-xs transition-all duration-300">
                <div className="w-full bg-white rounded-t-[16px] p-5 space-y-3 shadow-2xl">
                  <div className="w-9 h-1 bg-[#D7DBE2] rounded-full mx-auto" />

                  <div className="flex items-center justify-between border-b border-[#F2F4F8] pb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[15px] font-bold text-[#191F28]">출발지 주소 검색</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#E8F3FF] text-[#1219F7]">
                        바텀시트 (상단 r:16)
                      </span>
                    </div>
                    <span className="text-[12px] text-[#8B95A1] font-bold cursor-pointer hover:text-[#191F28]">
                      닫기
                    </span>
                  </div>

                  <div className="h-[46px] rounded-[10px] bg-[#F2F4F8] px-3.5 flex items-center justify-between text-[13px] text-[#191F28]">
                    <span className="font-medium text-[#888888]">도로명, 건물명 검색</span>
                    <span className="text-[#1219F7] font-bold text-[12px]">검색</span>
                  </div>

                  <button
                    type="button"
                    className="w-full h-[48px] bg-[#1219F7] text-white text-[14px] font-bold rounded-[10px]"
                  >
                    주소 선택하기 (56px r:10)
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModalSection;
