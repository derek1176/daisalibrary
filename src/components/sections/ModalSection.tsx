import React, { useState } from 'react';
import { Sliders, Smartphone, Monitor, Check, Search, X } from 'lucide-react';

export const ModalSection: React.FC<{ mode?: 'customer' | 'partner' }> = ({ mode = 'customer' }) => {
  const isPartner = mode === 'partner';

  // Responsive Resizer Slider State (360px ~ 1400px)
  const [simulatedWidth, setSimulatedWidth] = useState(768);
  const isSimulatedDesktop = simulatedWidth >= 1200;

  return (
    <section id="modals" className="space-y-10">
      {/* Section Header */}
      <div className="border-b pb-6 border-[#E5E8EB]">
        <span className="text-[13px] font-bold text-[#3182F6]">
          {isPartner ? '파트너향 디자인시스템' : '오버레이 컴포넌트'}
        </span>
        <h2 className="text-[28px] md:text-[32px] font-extrabold tracking-tight mt-1 text-[#191F28]">
          {isPartner ? '모달 및 바텀시트 (파트너 표준)' : '모달 및 바텀시트 (고객향 표준)'}
        </h2>
        <p className="text-[15px] mt-2 leading-relaxed max-w-2xl text-[#4E5968]">
          {isPartner
            ? '피그마 공식 [파트너] 스타일가이드(loNec9fjF6nIEgkwxH7aSN) 및 [개발] v1.1(node 9053:6921) 기준입니다. 파트너 다이얼로그는 너비 312px, Radius 6px 직각 곡률, 본문 18px Regular 및 51px 취소/확인 액션 버튼을 적용합니다.'
            : '다이사 고객향 디자인시스템 공식 명세서(DAISA_DESIGN_SYSTEM.md) 기준입니다. 360px~1199px 뷰포트에서는 모바일 반응형 바텀시트로 확장되며, 1200px 이상에서는 중앙 고정 모달 다이얼로그로 자동 전환됩니다.'}
        </p>
      </div>

      {/* ============================================================ */}
      {/* 1. 최상단 규격 요약 가이드 테이블 (사용자 요청: 최상단 배치 유지) */}
      {/* ============================================================ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Modal Spec Summary */}
        <div className="border border-[#E5E8EB] rounded-[18px] p-5 bg-white shadow-sm space-y-3">
          <div className="flex items-center justify-between border-b border-[#F2F4F6] pb-2.5">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#1219F7]" />
              <h3 className="text-[16px] font-bold text-[#191F28]">
                {isPartner ? '파트너 Alert / Confirm 모달 규격' : '고객향 Alert / Confirm 모달 규격'}
              </h3>
            </div>
            <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-[#E8F3FF] text-[#1B64DA]">
              {isPartner ? 'Radius 6px' : 'Radius 16px'}
            </span>
          </div>
          <div className="space-y-2 text-[13px] text-[#4E5968]">
            <div className="flex justify-between py-1 border-b border-[#F2F4F6]">
              <span>모달 너비 (Width)</span>
              <span className="font-bold text-[#191F28]">
                {isPartner ? '312px (모바일) / 440px (PC)' : '312px (모바일) / 440px (PC)'}
              </span>
            </div>
            <div className="flex justify-between py-1 border-b border-[#F2F4F6]">
              <span>모서리 곡률 (Corner Radius)</span>
              <span className={`font-bold ${isPartner ? 'text-[#1219F7]' : 'text-[#1B64DA]'}`}>
                {isPartner ? '6px (직각형 고정 · 16px 금지)' : '16px (전사 모달 표준)'}
              </span>
            </div>
            <div className="flex justify-between py-1 border-b border-[#F2F4F6]">
              <span>타이틀 / 본문 폰트</span>
              <span className="font-bold text-[#191F28]">
                {isPartner ? '20px Bold / 18px Regular' : '20px Bold / 16px Regular'}
              </span>
            </div>
            <div className="flex justify-between py-1 border-b border-[#F2F4F6]">
              <span>하단 액션 버튼</span>
              <span className="font-bold text-[#191F28]">
                {isPartner
                  ? '취소(#F2F4F6 텍스트 #191F28) + 메인(#1219F7) 51px r:6'
                  : '취소(#F2F4F6) + 확인(#1219F7) 56px r:10'}
              </span>
            </div>
            <div className="flex justify-between py-1">
              <span>배경 딤드 (Overlay)</span>
              <span className="font-bold text-[#191F28]">rgba(0, 0, 0, 0.6) 60%</span>
            </div>
          </div>
        </div>

        {/* Bottom Sheet Spec Summary */}
        <div className="border border-[#E5E8EB] rounded-[18px] p-5 bg-white shadow-sm space-y-3">
          <div className="flex items-center justify-between border-b border-[#F2F4F6] pb-2.5">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#3182F6]" />
              <h3 className="text-[16px] font-bold text-[#191F28]">
                {isPartner ? '파트너 Bottom Sheet 규격' : '고객향 Bottom Sheet 규격'}
              </h3>
            </div>
            <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-[#E8F3FF] text-[#1B64DA]">
              상단 r:16px
            </span>
          </div>
          <div className="space-y-2 text-[13px] text-[#4E5968]">
            <div className="flex justify-between py-1 border-b border-[#F2F4F6]">
              <span>반응형 전환 규칙</span>
              <span className="font-bold text-[#1219F7]">
                360~1199px 바텀시트 ↔ 1200px+ 중앙 모달
              </span>
            </div>
            <div className="flex justify-between py-1 border-b border-[#F2F4F6]">
              <span>상단 곡률 (Top Radius)</span>
              <span className="font-bold text-[#191F28]">16px (rounded-t-[16px])</span>
            </div>
            <div className="flex justify-between py-1 border-b border-[#F2F4F6]">
              <span>옵션 리스트 행 높이</span>
              <span className="font-bold text-[#191F28]">56px (터치 타겟 표준)</span>
            </div>
            <div className="flex justify-between py-1 border-b border-[#F2F4F6]">
              <span>옵션 텍스트 규격</span>
              <span className="font-bold text-[#191F28]">
                {isPartner ? '18px Medium' : '16px Medium'}
              </span>
            </div>
            <div className="flex justify-between py-1">
              <span>상단 핸들 바 (Handle)</span>
              <span className="font-bold text-[#191F28]">36px × 4px (중앙 정렬, r:full)</span>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 2. 고객향 반응형 바텀시트 ↔ 중앙 고정 모달 전환 인터랙티브 시뮬레이터 */}
      {/* ============================================================ */}
      {!isPartner && (
        <div className="border-2 border-[#1219F7]/30 rounded-[22px] p-6 md:p-8 space-y-6 bg-white shadow-sm">
          {/* Header & Controls */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#F2F4F6] pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-[12px] bg-[#E8F3FF] flex items-center justify-center text-[#1219F7] shrink-0">
                <Sliders className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-[18px] font-extrabold text-[#191F28]">
                    반응형 바텀시트 ↔ 중앙 고정 모달 전환 시각화
                  </h3>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#1219F7] text-white">
                    1200px 전환 룰
                  </span>
                </div>
                <p className="text-[13px] text-[#6B7684] mt-0.5">
                  <strong>360px ~ 1199px</strong>은 하단에서 올라오는 바텀시트(폭 가변), <strong>1200px 이상</strong>에서는 데스크톱 중앙 고정 모달(440px)로 매끄럽게 변형됩니다.
                </p>
              </div>
            </div>

            {/* Quick Presets */}
            <div className="flex items-center gap-2 self-start md:self-auto shrink-0">
              <button
                type="button"
                onClick={() => setSimulatedWidth(360)}
                className={`px-3 py-1.5 rounded-[8px] text-[12px] font-bold border transition-colors flex items-center gap-1.5 ${
                  simulatedWidth === 360
                    ? 'bg-[#1219F7] text-white border-[#1219F7]'
                    : 'bg-white text-[#4E5968] border-[#D7DBE2] hover:bg-[#F2F4F6]'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                모바일 (360px)
              </button>
              <button
                type="button"
                onClick={() => setSimulatedWidth(768)}
                className={`px-3 py-1.5 rounded-[8px] text-[12px] font-bold border transition-colors ${
                  simulatedWidth === 768
                    ? 'bg-[#1219F7] text-white border-[#1219F7]'
                    : 'bg-white text-[#4E5968] border-[#D7DBE2] hover:bg-[#F2F4F6]'
                }`}
              >
                태블릿 (768px)
              </button>
              <button
                type="button"
                onClick={() => setSimulatedWidth(1280)}
                className={`px-3 py-1.5 rounded-[8px] text-[12px] font-bold border transition-colors flex items-center gap-1.5 ${
                  simulatedWidth === 1280
                    ? 'bg-[#1219F7] text-white border-[#1219F7]'
                    : 'bg-white text-[#4E5968] border-[#D7DBE2] hover:bg-[#F2F4F6]'
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
                데스크톱 (1280px)
              </button>
            </div>
          </div>

          {/* Interactive Range Slider */}
          <div className="space-y-3 bg-[#F9FAFB] p-5 rounded-[16px] border border-[#E5E8EB]">
            <div className="flex items-center justify-between text-[13px]">
              <div className="flex items-center gap-2">
                <span className="font-bold text-[#191F28]">시뮬레이션 뷰포트 너비:</span>
                <span className="text-[17px] font-extrabold text-[#1219F7] font-mono">{simulatedWidth}px</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[12px] text-[#6B7684]">현재 UI 모드:</span>
                <span
                  className={`px-2.5 py-1 rounded-[6px] text-[12px] font-bold ${
                    isSimulatedDesktop
                      ? 'bg-[#E8F3FF] text-[#1B64DA] border border-[#1B64DA]/20'
                      : 'bg-orange-50 text-orange-600 border border-orange-200'
                  }`}
                >
                  {isSimulatedDesktop
                    ? '🖥️ 데스크톱 중앙 고정 모달 (1200px 이상)'
                    : '📱 모바일 가변 바텀시트 (360px ~ 1199px)'}
                </span>
              </div>
            </div>

            <div className="relative pt-6 pb-2">
              {/* 1200px Marker (360~1400: (1200-360)/(1400-360) = 840/1040 = 80.76%) */}
              <div className="absolute top-0 left-[80.76%] -translate-x-1/2 flex flex-col items-center pointer-events-none z-10">
                <span className="text-[10px] font-bold text-[#1219F7] bg-[#E8F3FF] px-1.5 py-0.5 rounded border border-[#1219F7]/30 whitespace-nowrap shadow-xs">
                  1200px 전환 기준선
                </span>
                <div className="w-[2px] h-3 bg-[#1219F7] mt-0.5" />
              </div>

              <input
                type="range"
                min={360}
                max={1400}
                step={10}
                value={simulatedWidth}
                onChange={(e) => setSimulatedWidth(Number(e.target.value))}
                className="w-full accent-[#1219F7] h-2 bg-[#E5E8EB] rounded-lg cursor-pointer"
              />

              <div className="flex justify-between text-[11px] text-[#8B95A1] mt-2 font-mono">
                <span>360px (모바일 최소)</span>
                <span>768px (태블릿)</span>
                <span className="font-bold text-[#1219F7]">1200px (전환 임계점)</span>
                <span>1400px (데스크톱 와이드)</span>
              </div>
            </div>
          </div>

          {/* Live Morphing Viewport Canvas */}
          <div className="bg-[#191F28] p-4 md:p-6 rounded-[18px] overflow-hidden flex flex-col items-center">
            <div className="text-[12px] text-white/70 mb-3 flex items-center gap-2">
              <span className="font-mono">뷰포트 캔버스: {simulatedWidth}px</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-white font-bold">
                {isSimulatedDesktop ? 'PC 데스크톱 중앙 모달' : '모바일 반응형 바텀시트'}
              </span>
            </div>

            {/* Simulated Device Window */}
            <div
              style={{ width: `${Math.min(simulatedWidth, 840)}px` }}
              className="h-[430px] bg-slate-900/90 rounded-[14px] border border-white/20 relative overflow-hidden transition-all duration-300 flex flex-col shadow-2xl"
            >
              {/* Dummy App Background */}
              <div className="p-3.5 border-b border-white/10 flex items-center justify-between text-white/80 text-[12px] bg-white/5">
                <span className="font-bold text-white">다이사 고객 견적 신청</span>
                <span className="text-white/60">3 / 5 단계</span>
              </div>
              <div className="p-4 space-y-2.5 opacity-25">
                <div className="h-4 bg-white/40 rounded w-1/3" />
                <div className="h-10 bg-white/20 rounded w-full" />
                <div className="h-10 bg-white/20 rounded w-full" />
                <div className="h-10 bg-white/20 rounded w-full" />
              </div>

              {/* In-Preview Dynamic Morphing Overlay */}
              {isSimulatedDesktop ? (
                // Desktop Center Modal (>= 1200px): Centered, Fixed 440px, All-round 16px
                <div className="absolute inset-0 flex items-center justify-center p-4 bg-black/60 backdrop-blur-[2px] transition-all duration-300">
                  <div className="w-[440px] max-w-[92%] bg-white rounded-[16px] p-6 space-y-4 shadow-2xl border border-[#E5E8EB] animate-scaleUp">
                    <div className="flex items-center justify-between border-b border-[#F2F4F6] pb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-[17px] font-bold text-[#191F28]">출발지 주소 검색</span>
                        <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-[#E8F3FF] text-[#1B64DA]">
                          중앙 고정 440px (r:16)
                        </span>
                      </div>
                      <button type="button" className="text-[#8B95A1] hover:text-[#191F28] font-bold">
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="h-[46px] rounded-[10px] border border-[#1219F7] px-3.5 flex items-center justify-between text-[14px] text-[#191F28] bg-white">
                      <span className="font-medium">테헤란로 7길 12</span>
                      <Search className="w-4 h-4 text-[#1219F7]" />
                    </div>

                    <div className="space-y-1 text-[12px] text-[#6B7684] bg-[#F9FAFB] p-3 rounded-[10px] border border-[#E5E8EB]">
                      <div className="font-bold text-[#191F28]">주소검색 Tip</div>
                      <div>• 도로명 + 건물번호 (예: 테헤란로7길 12)</div>
                      <div>• 지번 + 번지수 (예: 역삼동 648)</div>
                    </div>

                    <div className="pt-2 flex justify-end gap-2">
                      <button
                        type="button"
                        className="px-4 py-2 text-[13px] font-bold text-[#4E5968] hover:bg-[#F2F4F6] rounded-[8px]"
                      >
                        취소
                      </button>
                      <button
                        type="button"
                        className="px-5 py-2 text-[13px] font-bold bg-[#1219F7] text-white rounded-[8px] hover:bg-[#0E15D4]"
                      >
                        선택 완료
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                // Mobile / Tablet Bottom Sheet (< 1200px): Bottom-anchored, Full width, Top rounded 16px, Handle visible
                <div className="absolute inset-0 flex flex-col justify-end bg-black/60 backdrop-blur-[2px] transition-all duration-300">
                  <div className="w-full bg-white rounded-t-[16px] p-5 space-y-3.5 shadow-2xl border-t border-[#E5E8EB] animate-slideUp">
                    {/* Top Handle Bar */}
                    <div className="w-9 h-1 bg-[#D7DBE2] rounded-full mx-auto" />

                    <div className="flex items-center justify-between border-b border-[#F2F4F6] pb-2.5">
                      <div className="flex items-center gap-2">
                        <span className="text-[16px] font-bold text-[#191F28]">출발지 주소 검색</span>
                        <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-orange-50 text-orange-600 font-mono">
                          바텀시트 폭 {Math.min(simulatedWidth, 840)}px (상단 r:16)
                        </span>
                      </div>
                      <span className="text-[13px] text-[#8B95A1] font-bold cursor-pointer hover:text-[#191F28]">
                        닫기
                      </span>
                    </div>

                    <div className="h-[46px] rounded-[10px] border border-[#1219F7] px-3.5 flex items-center justify-between text-[14px] text-[#191F28] bg-white">
                      <span className="font-medium text-[#888888]">도로명, 건물명, 지번 검색</span>
                      <Search className="w-4 h-4 text-[#1219F7]" />
                    </div>

                    <div className="space-y-1 text-[11px] text-[#6B7684] bg-[#F9FAFB] p-2.5 rounded-[8px] border border-[#E5E8EB]">
                      <div className="font-bold text-[#191F28]">주소검색 Tip</div>
                      <div>• 도로명 + 건물번호 (예: 테헤란로7길 12)</div>
                    </div>

                    <button
                      type="button"
                      className="w-full h-[50px] bg-[#1219F7] hover:bg-[#0E15D4] text-white text-[15px] font-bold rounded-[10px] transition-colors"
                    >
                      주소 선택하기 (50px r:10)
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* 3. 개별 실물 컴포넌트 프리뷰 (Alert Modal & Bottom Sheet) */}
      {/* ============================================================ */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* 1. Modal Preview Box */}
        <div className="border border-[#E5E8EB] rounded-[20px] p-6 md:p-8 space-y-4 shadow-sm bg-white">
          <div className="border-b pb-3 border-[#F2F4F6]">
            <div className="inline-block px-2.5 py-0.5 rounded-[4px] text-[11px] font-bold mb-1 bg-[#E8F3FF] text-[#1B64DA]">
              {isPartner ? '파트너 중앙 다이얼로그 (Radius 6px)' : '중앙 다이얼로그 (Radius 16px)'}
            </div>
            <h3 className="text-[18px] font-extrabold text-[#191F28]">
              Alert / Confirm Modal 실물
            </h3>
            <p className="text-[13px] mt-0.5 text-[#6B7684]">
              {isPartner
                ? 'Figma [개발] v1.1 node 9053:6921 기준: 너비 312px · Corner Radius 6px · 타이틀 20px · 본문 18px · 취소(#F2F4F6) / 확인(#1219F7) 51px r:6'
                : '너비 312px · Corner Radius 16px · 타이틀 20px · 본문 16px · 버튼 136x56px r:10'}
            </p>
          </div>

          <div className="p-8 rounded-[16px] flex items-center justify-center min-h-[340px] border bg-[#F9FAFB] border-[#E5E8EB]">
            {/* Visual Modal Component */}
            <div
              className={`w-[312px] px-4 py-6 flex flex-col gap-5 text-center border shadow-[0_12px_36px_rgba(0,0,0,0.08)] bg-white transition-all ${
                isPartner ? 'rounded-[6px] border-[#D7DBE2]' : 'rounded-[16px] border-[#E5E8EB]'
              }`}
            >
              <div className="flex flex-col gap-2">
                <h4 className="text-[20px] leading-[28px] font-bold text-[#191F28] break-keep">
                  {isPartner ? '작성 중인 답변이 지워집니다' : '이사 견적 신청을 취소하시겠습니까?'}
                </h4>
                <p
                  className={`leading-[24px] break-keep text-[#6B7684] ${
                    isPartner ? 'text-[18px]' : 'text-[16px]'
                  }`}
                >
                  {isPartner
                    ? '현재 작성 중이던 내용은 지워지고, 새로운 답변이 생성됩니다. 계속하시겠어요?'
                    : '작성 중인 출발지 및 일정 정보가 저장되지 않습니다.'}
                </p>
              </div>

              {/* Action buttons */}
              <div className="w-[280px] flex gap-2 mx-auto pt-1">
                <button
                  type="button"
                  onClick={() => alert('취소 버튼 클릭')}
                  className={`w-[136px] font-bold text-[16px] transition-colors ${
                    isPartner
                      ? 'h-[51px] rounded-[6px] bg-[#F2F4F6] text-[#191F28] hover:bg-[#E5E8EB]'
                      : 'h-[56px] rounded-[10px] bg-[#F2F4F6] text-[#4E5968] hover:bg-[#E5E8EB]'
                  }`}
                >
                  취소
                </button>
                <button
                  type="button"
                  onClick={() => alert(isPartner ? '답변 생성 완료' : '확인 완료')}
                  className={`w-[136px] font-bold text-white transition-colors shadow-xs ${
                    isPartner
                      ? 'h-[51px] rounded-[6px] bg-[#1219F7] text-[16px] hover:bg-[#0E15D4]'
                      : 'h-[56px] rounded-[10px] bg-[#1219F7] text-[16px] hover:bg-[#0E15D4]'
                  }`}
                >
                  {isPartner ? '답변 생성' : '확인'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Bottom Sheet Preview Box */}
        <div className="border border-[#E5E8EB] rounded-[20px] p-6 md:p-8 space-y-4 shadow-sm bg-white">
          <div className="border-b pb-3 border-[#F2F4F6]">
            <div className="inline-block px-2.5 py-0.5 rounded-[4px] text-[11px] font-bold mb-1 bg-[#E8F3FF] text-[#1B64DA]">
              하단 옵션 시트
            </div>
            <h3 className="text-[18px] font-extrabold text-[#191F28]">
              Bottom Sheet 실물
            </h3>
            <p className="text-[13px] mt-0.5 text-[#6B7684]">
              {isPartner
                ? '모바일 전폭 360px · 상단 Radius 16px · 높이 56px 옵션 행 · 텍스트 18px'
                : '모바일 전폭 360px · 상단 Corner Radius 16px · 높이 56px 옵션 행 · 텍스트 16px'}
            </p>
          </div>

          <div className="p-8 rounded-[16px] flex items-end justify-center min-h-[340px] border bg-[#F9FAFB] border-[#E5E8EB]">
            {/* Visual Bottom Sheet Component */}
            <div className="w-[312px] border-t border-x border-[#E5E8EB] rounded-t-[16px] overflow-hidden shadow-[0_12px_36px_rgba(0,0,0,0.08)] bg-white">
              {/* Handle */}
              <div className="flex justify-center pt-3 pb-1.5">
                <div className="w-9 h-1 rounded-full bg-[#D7DBE2]" />
              </div>

              {/* Title Header */}
              <div className="px-4 py-3 border-b border-[#F2F4F6]">
                <h4 className="text-[17px] font-bold text-[#191F28]">
                  {isPartner ? '작업 환경 선택' : '이사 층수 선택'}
                </h4>
              </div>

              {/* Options List */}
              <div className="p-2 space-y-1">
                {[
                  isPartner ? '사다리차 진입 가능' : '1층 (단독주택/저층)',
                  isPartner ? '엘리베이터 사용 가능' : '2층 ~ 4층',
                  isPartner ? '계단 운반 작업 필요' : '5층 이상 (사다리차 권장)',
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`h-[56px] px-3.5 rounded-[8px] flex items-center justify-between font-medium transition-colors ${
                      isPartner ? 'text-[18px]' : 'text-[16px]'
                    } ${
                      i === 0
                        ? 'bg-[#E8F3FF] text-[#1B64DA] font-bold'
                        : 'text-[#333D4B] hover:bg-[#F2F4F6]'
                    }`}
                  >
                    <span>{item}</span>
                    {i === 0 && <Check className="w-4 h-4 text-[#1B64DA] shrink-0" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
