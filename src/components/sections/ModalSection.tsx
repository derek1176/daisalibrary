import React, { useState } from 'react';
import { Check, CheckCircle2, X } from 'lucide-react';

export const ModalSection: React.FC<{ mode?: 'customer' | 'partner' }> = ({ mode = 'customer' }) => {
  const isPartner = mode === 'partner';

  // Responsive Viewport Preset State (360px, 768px, 1280px)
  const [simulatedWidth, setSimulatedWidth] = useState<number>(360);
  const isSimulatedDesktop = simulatedWidth >= 1200;

  // 모달 & 바텀시트 스펙 표 데이터 (내용 보존 & 표 형태 UI)
  const customerSpecs = [
    {
      type: 'Alert / Confirm 모달', viewport: '전체 뷰포트 공통',
      width: '시안 312px · 구현은 화면 이내', radius: '16px',
      action: '취소 system-02 / 1px etc-02 테두리 / text-03 · 확인 main-01 / system-02 · 버튼 56px / r:10',
      behavior: '제목 20/30 Bold · 본문 16/24 Regular · 오버레이 60%',
    },
    {
      type: '아이콘 + 모달', viewport: '전체 뷰포트 공통',
      width: '시안 312px · 구현은 화면 이내', radius: '16px',
      action: '모달 상태 아이콘 48×48px · 원형 컨테이너는 Full',
      behavior: '기본 모달과 동일한 폰트·색상·모서리 기준',
    },
    {
      type: '바텀시트 ↔ 중앙 모달', viewport: '1200px 미만 / 이상',
      width: '뷰포트 전폭 / 중앙 440px', radius: '시트 상단 16px·하단 0px / 모달 16px',
      action: '기본 버튼 56px / r:10 · 16/24px Bold',
      behavior: '시트 핸들바 36×4px / Full / etc-02 · 중앙 모달 핸들바 숨김 · 동작은 별도 제품 요구사항',
    },
  ];

  const partnerSpecs = [
    {
      type: '파트너 Alert / Confirm 모달', viewport: '전체 뷰포트 공통',
      width: '시안 312px · 구현은 화면 이내', radius: '6px',
      action: '버튼 51px / r:6 / 18·27px Bold · 취소 흰 배경 / 1px etc-02 테두리 / text-03',
      behavior: '제목 20/30 Bold · 본문 18/27 Regular · 딤드 60%',
    },
    {
      type: '아이콘 + 모달', viewport: '전체 뷰포트 공통',
      width: '시안 312px · 구현은 화면 이내', radius: '6px',
      action: '모달 상태 아이콘 48×48px · 원형 컨테이너 Full',
      behavior: '폰트 Noto Sans KR · 최소 14px · 자간 -1%',
    },
    {
      type: '파트너 바텀시트 ↔ 중앙 모달', viewport: '1200px 미만 / 이상',
      width: '뷰포트 전폭 / 중앙 440px', radius: '시트 상단 16px·하단 0px / 모달 6px',
      action: '기본 본문 18/27 · 보조 버튼 51px / r:6',
      behavior: '핸들바 36×4px / Full / etc-02 · 중앙 모달에서는 숨김',
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


      {/* 2. 개별 실물 컴포넌트 프리뷰 (1:1 실제 규격 프리뷰) */}
      <div className="space-y-6">
        {/* 2-A. 다이얼로그 모달 2종 (312px 고정 규격) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* 1. 기본 모달 Preview */}
          <div className="rounded-[16px] p-6 space-y-4 shadow-xs bg-white border border-[#E5E8EB]">
            <div className="border-b pb-3 border-[#F2F4F8] flex items-center justify-between">
              <div>
                <h3 className="text-[16px] font-bold text-[#191F28]">
                  {isPartner ? '파트너 기본 모달' : '기본 모달 (Confirm Dialog)'}
                </h3>
                <p className="text-[12px] text-[#8B95A1] mt-0.5">{isPartner ? '취소 흰 배경·1px #D7DBE2 · 확인 #1219F7 · 높이 51px' : '취소 흰 배경·1px #D7DBE2 / #666666 · 확인 #1219F7 / #FFFFFF · 높이 56px'}</p>
              </div>
              <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-[#E8F3FF] text-[#1219F7]">
                {isPartner ? '시안 312px / r:6' : '시안 312px / r:16'}
              </span>
            </div>

            <div className="p-8 rounded-[14px] bg-[#FAFBFD] flex items-center justify-center min-h-[300px]">
              <div
                data-customer-preview={!isPartner || undefined} data-partner-preview={isPartner || undefined}
                className={`w-[312px] p-5 space-y-4 shadow-lg bg-white border border-[#E5E8EB]/60 transition-all ${
                  isPartner ? 'rounded-[6px]' : 'rounded-[16px]'
                }`}
              >
                <div className="text-center space-y-1.5 pt-1">
                  <div className={`font-bold ${isPartner ? 'text-[#121212]' : 'text-[#121212]'} ${isPartner ? 'text-[20px] leading-[30px]' : 'text-[20px] leading-[30px] text-[#121212]'}`}>
                    {isPartner ? '오더 접수를 취소하시겠습니까?' : '신청을 취소하시겠습니까?'}
                  </div>
                  <div className={`${isPartner ? 'text-[#333333]' : 'text-[#333333]'} ${isPartner ? 'text-[18px] leading-[27px]' : 'text-[16px] leading-[24px] text-[#333333]'}`}>
                    {isPartner ? '작성 중인 견적 정보가 삭제됩니다.' : '작성 중인 정보가 저장되지 않습니다.'}
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <button
                    type="button"
                    className={`flex-1 font-bold bg-white border border-[#D7DBE2] text-[#666666] transition-colors ${
                      isPartner ? 'h-[51px] rounded-[6px] text-[18px] leading-[27px]' : 'h-[56px] rounded-[10px] text-[16px] leading-[24px]'
                    }`}
                  >
                    취소
                  </button>
                  <button
                    type="button"
                    className={`flex-1 font-bold bg-[#1219F7] text-white hover:bg-[#0E15D4] transition-colors ${
                      isPartner ? 'h-[51px] rounded-[6px] text-[18px] leading-[27px]' : 'h-[56px] rounded-[10px] text-[16px] leading-[24px]'
                    }`}
                  >
                    확인
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 2. 아이콘 + 모달 Preview */}
          <div className="rounded-[16px] p-6 space-y-4 shadow-xs bg-white border border-[#E5E8EB]">
            <div className="border-b pb-3 border-[#F2F4F8] flex items-center justify-between">
              <div>
                <h3 className="text-[16px] font-bold text-[#191F28]">
                  {isPartner ? '아이콘 + 모달 (안내)' : '아이콘 + 모달 (Icon Dialog)'}
                </h3>
                <p className="text-[12px] text-[#8B95A1] mt-0.5">상단 48px 상태 아이콘 + 닫기/확인 액션</p>
              </div>
              <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-[#E8F3FF] text-[#1219F7]">
                {isPartner ? '시안 312px / r:6' : '시안 312px / r:16'}
              </span>
            </div>

            <div className="p-8 rounded-[14px] bg-[#FAFBFD] flex items-center justify-center min-h-[300px]">
              <div
                data-customer-preview={!isPartner || undefined} data-partner-preview={isPartner || undefined}
                className={`w-[312px] p-5 space-y-4 shadow-lg bg-white border border-[#E5E8EB]/60 transition-all ${
                  isPartner ? 'rounded-[6px]' : 'rounded-[16px]'
                }`}
              >
                {/* Status Badge Icon */}
                <div className="w-12 h-12 rounded-full bg-[#E8F3FF] text-[#1219F7] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-12 h-12 stroke-[1.5]" />
                </div>

                <div className="text-center space-y-1.5">
                  <div className={`font-bold ${isPartner ? 'text-[#121212]' : 'text-[#121212]'} ${isPartner ? 'text-[20px] leading-[30px]' : 'text-[20px] leading-[30px] text-[#121212]'}`}>
                    {isPartner ? '견적 제출 완료' : '견적 신청 완료'}
                  </div>
                  <div className={`${isPartner ? 'text-[#333333]' : 'text-[#333333]'} ${isPartner ? 'text-[18px] leading-[27px]' : 'text-[16px] leading-[24px] text-[#333333]'}`}>
                    파트너사가 확인 후 빠르게 연락드립니다.
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <button
                    type="button"
                    className={`flex-1 font-bold bg-white border border-[#D7DBE2] text-[#666666] transition-colors ${
                      isPartner ? 'h-[51px] rounded-[6px] text-[18px] leading-[27px]' : 'h-[56px] rounded-[10px] text-[16px] leading-[24px]'
                    }`}
                  >
                    닫기
                  </button>
                  <button
                    type="button"
                    className={`flex-1 font-bold bg-[#1219F7] text-white hover:bg-[#0E15D4] transition-colors ${
                      isPartner ? 'h-[51px] rounded-[6px] text-[18px] leading-[27px]' : 'h-[56px] rounded-[10px] text-[16px] leading-[24px]'
                    }`}
                  >
                    내역 확인
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2-B. 고객향 바텀시트 프리뷰 (360px 모바일 실물 규격) */}
        <div className="rounded-[16px] p-6 space-y-4 shadow-xs bg-white border border-[#E5E8EB]">
          <div className="border-b pb-3 border-[#F2F4F8] flex flex-wrap items-center justify-between gap-2">
            <div>
              <h3 className="text-[16px] font-bold text-[#191F28]">
                {isPartner ? '파트너 바텀시트 (Bottom Sheet)' : '고객향 바텀시트 (Bottom Sheet)'}
              </h3>
              <p className="text-[12px] text-[#8B95A1] mt-0.5">
                모바일 뷰포트(360px) 기준 화면 하단에서 슬라이드 업되는 선택형 시트 규격
              </p>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-[#E8F3FF] text-[#1219F7]">
                {isPartner ? '시안 360px · 구현 전폭 반응형' : '시안 360px · 구현 전폭 반응형'}
              </span>
              <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-[#F2F4F6] text-[#4E5968]">
                상단 r:16px
              </span>
            </div>
          </div>

          <div className="p-6 md:p-8 rounded-[14px] bg-[#FAFBFD] flex flex-col lg:flex-row items-center justify-center gap-8">
            {/* Real Mobile Device Preview (360px) */}
            <div className="w-[360px] max-w-full h-[450px] bg-slate-900 rounded-[32px] p-3 shadow-2xl relative overflow-hidden flex flex-col justify-end border-4 border-slate-800 shrink-0">
              {/* Dummy Mobile Status Bar */}
              <div className="absolute top-2.5 left-0 right-0 px-6 flex items-center justify-between text-[11px] text-white/70 select-none z-10">
                <span className="font-semibold">09:41</span>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-bold">5G</span>
                  <div className="w-4 h-2 rounded-[2px] border border-white/60 p-[1px] flex items-center">
                    <div className="w-full h-full bg-white/80 rounded-[1px]" />
                  </div>
                </div>
              </div>

              {/* Faded Background Screen */}
              <div className="absolute inset-0 bg-slate-900 flex flex-col justify-start pt-12 px-5 space-y-3 opacity-30 select-none pointer-events-none">
                <div className="h-4 bg-white/40 rounded w-1/3" />
                <div className="h-10 bg-white/20 rounded w-full" />
                <div className="h-10 bg-white/20 rounded w-full" />
                <div className="h-24 bg-white/10 rounded w-full" />
              </div>

              {/* Dimmed Overlay */}
              <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px] pointer-events-none" />

              {/* Bottom Sheet Component (Anchored to Bottom) */}
              <div
                data-customer-preview={!isPartner || undefined}
                data-partner-preview={isPartner || undefined}
                className="relative w-full bg-white rounded-t-[16px] p-5 space-y-3 shadow-2xl transition-all"
              >
                {/* Handle Bar (36x4px) */}
                <div className="w-9 h-1 bg-[#D7DBE2] rounded-full mx-auto" />

                {/* Header (56px) */}
                <div className="flex items-center justify-between border-b border-[#F2F4F8] pb-2">
                  <div className={isPartner ? 'font-bold text-[#121212] text-[20px] leading-[30px]' : 'font-bold text-[#121212] text-[20px] leading-[30px]'}>
                    {isPartner ? '작업 조건 선택' : '이사 종류 선택'}
                  </div>
                  <button type="button" className="text-[#8B95A1] hover:text-[#191F28] p-1">
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Option Rows (56px touch target) */}
                <div className="space-y-1.5">
                  <div className={isPartner ? 'p-3 rounded-[6px] bg-[#F4F5FF] font-bold text-[#1219F7] flex items-center justify-between text-[18px] leading-[27px]' : 'p-3 rounded-[10px] bg-[#F4F5FF] font-bold text-[#1219F7] flex items-center justify-between text-[16px] leading-[24px]'}>
                    <span>{isPartner ? '1톤 탑차 (추천)' : '가정이사 (포장)'}</span>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[11px] font-medium text-[#1219F7]">선택됨</span>
                      <Check className="w-4 h-4 text-[#1219F7]" />
                    </div>
                  </div>
                  <div className={isPartner ? 'p-3 rounded-[6px] text-[#333333] flex items-center justify-between text-[18px] leading-[27px]' : 'p-3 rounded-[10px] text-[#333333] flex items-center justify-between text-[16px] leading-[24px]'}>
                    <span>{isPartner ? '2.5톤 탑차' : '원룸/소형이사'}</span>
                  </div>
                  <div className={isPartner ? 'p-3 rounded-[6px] text-[#333333] flex items-center justify-between text-[18px] leading-[27px]' : 'p-3 rounded-[10px] text-[#333333] flex items-center justify-between text-[16px] leading-[24px]'}>
                    <span>{isPartner ? '5톤 대형' : '사무실 이전'}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-1">
                  <button
                    type="button"
                    className={`w-full bg-[#1219F7] text-white font-bold text-[14px] ${
                      isPartner ? 'h-[51px] rounded-[6px] text-[18px] leading-[27px]' : 'h-[56px] rounded-[10px] text-[16px] leading-[24px]'
                    }`}
                  >
                    선택 완료
                  </button>
                </div>
              </div>
            </div>

            {/* Spec breakdown points on the side */}
            <div className="flex-1 space-y-4 max-w-[480px]">
              <div className="space-y-1">
                <span className="text-[12px] font-bold text-[#1219F7] uppercase tracking-wide">Specification Guide</span>
                <h4 className="text-[17px] font-extrabold text-[#191F28]">바텀시트 핵심 규격 & 조작성</h4>
                <p className="text-[13px] text-[#6B7684]">
                  {isPartner ? '모바일 환경에서 한 손 조작성을 극대화하기 위해 360px 모바일 규격에 최적화된 하단 시트 구조입니다.' : '360px는 Figma 기준 시안입니다. 실제 시트 너비는 뷰포트를 따르며, 1200px 이상에서는 440px 중앙 모달로 배치합니다.'}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[13px]">
                <div className="p-3.5 rounded-[12px] bg-white border border-[#E5E8EB] space-y-1">
                  <div className="font-bold text-[#191F28]">너비 규격 (Width)</div>
                  <div className="text-[12px] text-[#6B7684]">
                    {isPartner ? 'Figma 시안 360px · 구현 전폭 · 데스크톱 중앙 440px / r:6' : 'Figma 시안 360px · 구현 뷰포트 전폭 · 1200px 이상 중앙 모달 440px'}
                  </div>
                </div>

                <div className="p-3.5 rounded-[12px] bg-white border border-[#E5E8EB] space-y-1">
                  <div className="font-bold text-[#191F28]">코너 곡률 (Radius)</div>
                  <div className="text-[12px] text-[#6B7684]">
                    상단 좌/우에만 <strong className="text-[#191F28]">16px (rounded-t-[16px])</strong> 적용, 하단은 화면 바닥에 밀착(0px).
                  </div>
                </div>

                <div className="p-3.5 rounded-[12px] bg-white border border-[#E5E8EB] space-y-1">
                  <div className="font-bold text-[#191F28]">핸들바 (Handle Bar)</div>
                  <div className="text-[12px] text-[#6B7684]">
                    상단 중앙에 <strong className="text-[#191F28]">36 × 4px</strong> 캡슐 형태의 드래그 인지용 핸들바 필수 배치.
                  </div>
                </div>

                <div className="p-3.5 rounded-[12px] bg-white border border-[#E5E8EB] space-y-1">
                  <div className="font-bold text-[#191F28]">터치 타깃 (Touch Target)</div>
                  <div className="text-[12px] text-[#6B7684]">
                    헤더 및 옵션 행 높이 <strong className="text-[#191F28]">56px</strong>, 하단 버튼 <strong className="text-[#1219F7]">{isPartner ? '51px (r:6)' : '56px (r:10)'}</strong>.
                  </div>
                </div>
              </div>
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
              {isPartner ? '모바일 전폭 바텀시트(상단 16px) ↔ 1200px 이상 440px 중앙 모달(6px) 배치를 확인하세요.' : '모바일 전폭 바텀시트 ↔ 1200px 이상 440px 중앙 모달 배치를 확인하세요. 상태·동작은 MD 필수 기준에 포함하지 않습니다.'}
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
                ? (isPartner ? '데스크톱 중앙 고정 모달 (440px / r:6)' : '데스크톱 중앙 고정 모달 (440px)')
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
              {isSimulatedDesktop ? (isPartner ? 'PC 데스크톱 중앙 모달 (440px / r:6)' : 'PC 데스크톱 중앙 모달 (440px)') : '모바일 반응형 바텀시트'}
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
                <div
                  data-customer-preview={!isPartner || undefined}
                  data-partner-preview={isPartner || undefined}
                  className={`w-[440px] max-w-[92%] bg-white ${isPartner ? 'rounded-[6px]' : 'rounded-[16px]'} p-5 space-y-4 shadow-2xl transition-all`}
                >
                  <div className="flex items-center justify-between border-b border-[#F2F4F8] pb-2.5">
                    <div className="flex items-center gap-2">
                      <span className="text-[16px] font-bold text-[#191F28]">출발지 주소 검색</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#E8F3FF] text-[#1219F7]">
                        {isPartner ? '440px (r:6)' : '440px (r:16)'}
                      </span>
                    </div>
                    <button type="button" className="text-[#8B95A1] hover:text-[#191F28] font-bold text-[14px]">
                      ✕
                    </button>
                  </div>

                  <div className={isPartner ? 'h-[56px] rounded-[6px] border border-[#D7DBE2] bg-white px-4 flex items-center justify-between text-[18px] leading-[27px] text-[#333333]' : 'h-[56px] rounded-[10px] border border-[#D7DBE2] bg-white px-4 flex items-center justify-between text-[16px] leading-[24px] text-[#333333]'}>
                    <span className="font-medium">테헤란로 7길 12</span>
                    <span className="text-[#1219F7] font-bold text-[12px]">검색</span>
                  </div>

                  <div className={isPartner ? 'space-y-1 text-[16px] leading-[24px] text-[#666666] bg-[#FAFAFA] p-3 rounded-[6px]' : 'space-y-1 text-[14px] leading-[20px] text-[#666666] bg-[#FAFAFA] p-3 rounded-[10px]'}>
                    <div className="font-bold text-[#191F28]">주소검색 Tip</div>
                    <div>• 도로명 + 건물번호 (예: 테헤란로7길 12)</div>
                  </div>

                  <div className="pt-1 flex justify-end gap-2">
                    <button
                      type="button"
                      className={isPartner ? 'h-[51px] px-4 text-[18px] leading-[27px] font-bold bg-white border border-[#D7DBE2] text-[#666666] rounded-[6px]' : 'h-[56px] px-4 text-[16px] leading-[24px] font-bold bg-white border border-[#D7DBE2] text-[#666666] rounded-[10px]'}
                    >
                      취소
                    </button>
                    <button
                      type="button"
                      className={isPartner ? 'h-[51px] px-4 text-[18px] leading-[27px] font-bold bg-[#1219F7] text-white rounded-[6px]' : 'h-[56px] px-4 text-[16px] leading-[24px] font-bold bg-[#1219F7] text-white rounded-[10px]'}
                    >
                      선택 완료
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              // Mobile Bottom Sheet (< 1200px): Bottom-anchored, Top rounded 16px, Handle visible
              <div className="absolute inset-0 flex flex-col justify-end bg-black/60 backdrop-blur-xs transition-all duration-300">
                <div
                  data-customer-preview={!isPartner || undefined}
                  data-partner-preview={isPartner || undefined}
                  className="w-full bg-white rounded-t-[16px] p-5 space-y-3 shadow-2xl transition-all"
                >
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

                  <div className={isPartner ? 'h-[56px] rounded-[6px] border border-[#D7DBE2] bg-white px-4 flex items-center justify-between text-[18px] leading-[27px] text-[#333333]' : 'h-[56px] rounded-[10px] border border-[#D7DBE2] bg-white px-4 flex items-center justify-between text-[16px] leading-[24px] text-[#333333]'}>
                    <span className="font-medium text-[#888888]">도로명, 건물명 검색</span>
                    <span className="text-[#1219F7] font-bold text-[12px]">검색</span>
                  </div>

                  <button
                    type="button"
                    className={isPartner ? 'w-full h-[51px] bg-[#1219F7] text-white text-[18px] leading-[27px] font-bold rounded-[6px]' : 'w-full h-[56px] bg-[#1219F7] text-white text-[16px] leading-[24px] font-bold rounded-[10px]'}
                  >
                    {isPartner ? '주소 선택하기 (51px r:6)' : '주소 선택하기 (56px r:10)'}
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
