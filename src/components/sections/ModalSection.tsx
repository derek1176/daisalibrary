import React, { useState } from 'react';
import { Sliders, Smartphone, Monitor, Search, X, Check } from 'lucide-react';

export const ModalSection: React.FC = () => {
  // Interactive Resizer Slider (360px ~ 1400px)
  const [simulatedWidth, setSimulatedWidth] = useState(768);

  const isSimulatedDesktop = simulatedWidth >= 1200;

  return (
    <section id="modals" className="space-y-10">
      {/* Section Header: Toss Style */}
      <div className="border-b border-[#E5E8EB] pb-6">
        <span className="text-[13px] font-bold text-[#3182F6]">
          오버레이 컴포넌트
        </span>
        <h2 className="text-[28px] md:text-[32px] font-extrabold text-[#191F28] tracking-tight mt-1">
          모달 및 바텀시트
        </h2>
        <p className="text-[15px] text-[#4E5968] mt-2 leading-relaxed max-w-2xl">
          사용자의 맥락을 차단하고 집중시키는 중앙 모달 다이얼로그와 모바일 옵션 선택을 위한 바텀시트 규격입니다. 배경 딤드는 <strong>rgba(0, 0, 0, 0.6) 60%</strong>를 적용합니다.
        </p>
      </div>

      {/* ============================================================ */}
      {/* 1. Core Specs: Alert Modal & Bottom Sheet (Moved to TOP) */}
      {/* ============================================================ */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Modal Anatomy & In-Place Spec */}
        <div className="bg-white border border-[#E5E8EB] rounded-[22px] p-6 md:p-8 space-y-4 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
          <div className="border-b border-[#F2F4F6] pb-3">
            <div className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#E8F3FF] text-[#1B64DA] mb-1">
              중앙 다이얼로그
            </div>
            <h3 className="text-[18px] font-extrabold text-[#191F28]">Alert / Confirm Modal 규격</h3>
            <p className="text-[13px] text-[#6B7684] mt-0.5">
              너비 312px · Corner Radius 16px · 패딩 24/16/24/16 · 버튼 136px 2분할
            </p>
          </div>

          <div className="p-8 bg-[#F9FAFB] rounded-[16px] flex items-center justify-center min-h-[320px] border border-[#E5E8EB]">
            {/* Visual Modal Component */}
            <div className="w-[312px] bg-white rounded-[16px] px-4 py-6 flex flex-col gap-6 shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-[#E5E8EB] text-center">
              <div className="flex flex-col gap-2">
                <h4 className="text-[20px] leading-[30px] font-bold text-[#191F28] break-keep">
                  이사 견적 신청을 취소하시겠습니까?
                </h4>
                <p className="text-[15px] leading-[22px] text-[#6B7684] break-keep">
                  작성 중인 출발지 및 일정 정보가 저장되지 않습니다.
                </p>
              </div>

              {/* 280px action buttons */}
              <div className="w-[280px] flex gap-2 mx-auto">
                <button
                  type="button"
                  className="w-[136px] h-[56px] rounded-[10px] bg-[#F2F4F6] text-[#4E5968] font-bold text-[16px] hover:bg-[#E5E8EB] transition-colors"
                >
                  이어쓰기
                </button>
                <button
                  type="button"
                  className="w-[136px] h-[56px] rounded-[10px] bg-[#1219F7] text-white font-bold text-[16px] hover:bg-[#0E15D4] transition-colors shadow-2xs"
                >
                  취소하기
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sheet In-Place Spec */}
        <div className="bg-white border border-[#E5E8EB] rounded-[22px] p-6 md:p-8 space-y-4 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
          <div className="border-b border-[#F2F4F6] pb-3">
            <div className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#E8F3FF] text-[#1B64DA] mb-1">
              슬라이드업 시트
            </div>
            <h3 className="text-[18px] font-extrabold text-[#191F28]">Bottom Sheet (선택 팝업) 규격</h3>
            <p className="text-[13px] text-[#6B7684] mt-0.5">
              너비 360px · 상단 Radius 16px · 헤더 56px · 리스트 행 56px (최대 284px)
            </p>
          </div>

          <div className="p-8 bg-[#F9FAFB] rounded-[16px] flex items-center justify-center min-h-[320px] border border-[#E5E8EB]">
            {/* Visual Sheet Component */}
            <div className="w-[360px] max-w-full bg-white rounded-t-[16px] shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-[#E5E8EB] overflow-hidden">
              <div className="h-[56px] px-6 flex items-center justify-between border-b border-[#F2F4F6]">
                <span className="text-[18px] leading-[27px] font-bold text-[#191F28]">
                  출발지 층수를 선택하세요
                </span>
                <span className="text-[13px] text-[#8B95A1] font-bold cursor-pointer hover:text-[#191F28]">닫기</span>
              </div>
              <div className="max-h-[224px] overflow-y-auto px-6 divide-y divide-[#F2F4F6] text-[15px]">
                {['1층 (단독주택/저층)', '2층', '3층 (선택됨)', '4층'].map((floor, i) => (
                  <div
                    key={floor}
                    className={`h-[56px] flex items-center justify-between ${
                      i === 2 ? 'text-[#1219F7] font-bold' : 'text-[#333D4B]'
                    }`}
                  >
                    <span>{floor}</span>
                    {i === 2 && <Check className="w-4 h-4 text-[#1219F7]" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 2. Responsive Breakpoint Highlight Banner */}
      {/* ============================================================ */}
      <div className="bg-white border border-[#E5E8EB] rounded-[22px] p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#E8F3FF] text-[#1B64DA]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3182F6]" />
            반응형 절대 규칙
          </div>
          <h3 className="text-[18px] font-bold text-[#191F28]">
            360px ~ 1199px은 바텀시트, 1200px 이상은 중앙 고정 모달
          </h3>
          <p className="text-[13px] text-[#6B7684] leading-relaxed">
            주소 검색, 층수/옵션 선택, 확인 팝업 등은 <strong>1200px 임계값</strong>을 기준으로 모바일 반응형 바텀시트 또는 데스크톱 중앙 고정 모달로 자동 전환됩니다.
          </p>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 3. Interactive Responsive Resizer Line / Slider */}
      {/* ============================================================ */}
      <div className="bg-white border border-[#E5E8EB] rounded-[22px] p-6 md:p-8 space-y-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-[#F2F4F6] pb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-[10px] bg-[#E8F3FF] flex items-center justify-center text-[#1B64DA]">
              <Sliders className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-[18px] font-extrabold text-[#191F28]">
                화면 너비별 실시간 모달 전환 시각화 (인터랙티브 슬라이더)
              </h3>
              <p className="text-[13px] text-[#6B7684] mt-0.5">
                슬라이더 바를 조작하여 1200px 임계값을 넘나들며 컴포넌트 변형을 확인해보세요.
              </p>
            </div>
          </div>

          {/* Quick Presets */}
          <div className="flex items-center gap-1.5 bg-[#F2F4F6] p-1 rounded-[12px] border border-[#E5E8EB]/50 self-start md:self-auto">
            <button
              type="button"
              onClick={() => setSimulatedWidth(360)}
              className={`px-3 py-1.5 rounded-[9px] text-[12px] font-bold transition-all flex items-center gap-1.5 ${
                simulatedWidth === 360 ? 'bg-white text-[#191F28] shadow-2xs' : 'text-[#6B7684] hover:text-[#191F28]'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              모바일 (360px)
            </button>
            <button
              type="button"
              onClick={() => setSimulatedWidth(768)}
              className={`px-3 py-1.5 rounded-[9px] text-[12px] font-bold transition-all ${
                simulatedWidth === 768 ? 'bg-white text-[#191F28] shadow-2xs' : 'text-[#6B7684] hover:text-[#191F28]'
              }`}
            >
              태블릿 (768px)
            </button>
            <button
              type="button"
              onClick={() => setSimulatedWidth(1280)}
              className={`px-3 py-1.5 rounded-[9px] text-[12px] font-bold transition-all flex items-center gap-1.5 ${
                simulatedWidth === 1280 ? 'bg-white text-[#191F28] shadow-2xs' : 'text-[#6B7684] hover:text-[#191F28]'
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
              데스크톱 (1280px)
            </button>
          </div>
        </div>

        {/* Resizer Slider Bar with 1200px Threshold Marker */}
        <div className="space-y-3 bg-[#F9FAFB] p-5 rounded-[16px] border border-[#E5E8EB]">
          <div className="flex items-center justify-between text-[13px]">
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#191F28]">시뮬레이션 폭:</span>
              <span className="text-[17px] font-extrabold text-[#3182F6]">{simulatedWidth}px</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[12px] text-[#8B95A1]">적용 형태:</span>
              <span className={`text-[12px] font-bold px-2 py-0.5 rounded-full ${
                isSimulatedDesktop ? 'bg-[#E8F3FF] text-[#1B64DA]' : 'bg-[#FFF0EB] text-[#E5501B]'
              }`}>
                {isSimulatedDesktop ? '중앙 고정 모달 (440px)' : '반응형 바텀시트 (Bottom Sheet)'}
              </span>
            </div>
          </div>

          <div className="relative pt-1">
            <input
              type="range"
              min={360}
              max={1400}
              step={10}
              value={simulatedWidth}
              onChange={(e) => setSimulatedWidth(Number(e.target.value))}
              className="w-full h-2 bg-[#E5E8EB] rounded-lg appearance-none cursor-pointer accent-[#3182F6]"
            />
            {/* 1200px marker indicator */}
            <div
              className="absolute top-0 flex flex-col items-center pointer-events-none"
              style={{ left: `${((1200 - 360) / (1400 - 360)) * 100}%` }}
            >
              <div className="w-0.5 h-4 bg-[#F34766]" />
              <span className="text-[10px] font-bold text-[#F34766] mt-1 whitespace-nowrap bg-white px-1 rounded border border-[#F34766]/30">
                1200px 분기선
              </span>
            </div>
          </div>

          <div className="flex justify-between text-[11px] text-[#8B95A1] font-mono pt-1">
            <span>360px (모바일 최소)</span>
            <span className="font-bold text-[#F34766]">1200px (전환 기준점)</span>
            <span>1400px (대화면)</span>
          </div>
        </div>

        {/* Live Visual Canvas Area */}
        <div className="p-6 bg-[#191F28]/5 rounded-[20px] flex items-center justify-center min-h-[460px] border border-[#E5E8EB] overflow-hidden relative">
          <div
            className="h-[420px] bg-white rounded-[16px] shadow-lg border border-[#E5E8EB] flex flex-col overflow-hidden transition-all duration-300 relative"
            style={{ width: `${Math.min(simulatedWidth, 760)}px`, maxWidth: '100%' }}
          >
            {/* Fake Page Header in Simulated Canvas */}
            <div className="h-[44px] bg-[#F9FAFB] border-b border-[#E5E8EB] px-4 flex items-center justify-between text-[12px] text-[#6B7684]">
              <span className="font-bold">da24.co.kr 시뮬레이션 ({simulatedWidth}px)</span>
              <span className="text-[10px] bg-white px-2 py-0.5 rounded border border-[#E5E8EB]">
                {isSimulatedDesktop ? 'PC 웹 뷰' : '모바일 뷰'}
              </span>
            </div>

            {/* In-Canvas Overlay Simulation */}
            {isSimulatedDesktop ? (
              // Desktop Center Modal (>= 1200px)
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px] transition-all duration-300">
                <div className="w-[440px] max-w-[90%] bg-white rounded-[16px] p-6 space-y-4 shadow-2xl border border-[#E5E8EB] animate-scaleUp">
                  <div className="flex items-center justify-between border-b border-[#F2F4F6] pb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-[17px] font-bold text-[#191F28]">출발지 주소 검색</span>
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#E8F3FF] text-[#1B64DA]">중앙 고정 440px</span>
                    </div>
                    <X className="w-4 h-4 text-[#8B95A1] cursor-pointer hover:text-[#191F28]" />
                  </div>

                  <div className="h-[46px] rounded-[10px] border-2 border-[#1219F7] px-3 flex items-center justify-between text-[14px] text-[#191F28]">
                    <span>테헤란로 7길 12</span>
                    <Search className="w-4 h-4 text-[#1219F7]" />
                  </div>

                  <div className="space-y-1.5 text-[12px] text-[#6B7684] bg-[#F9FAFB] p-3 rounded-[12px] border border-[#E5E8EB]">
                    <div className="font-bold text-[#191F28]">주소검색 Tip</div>
                    <div>• 도로명 + 건물번호 (예: 테헤란로7길 12)</div>
                    <div>• 지번 + 번지수 (예: 역삼동 648)</div>
                  </div>

                  <div className="pt-2 flex justify-end gap-2">
                    <button type="button" className="px-4 py-2 text-[13px] font-bold text-[#6B7684]">취소</button>
                    <button type="button" className="px-5 py-2 text-[13px] font-bold bg-[#1219F7] text-white rounded-[10px]">선택 완료</button>
                  </div>
                </div>
              </div>
            ) : (
              // Mobile / Tablet BottomSheet (< 1200px)
              <div className="absolute inset-0 flex flex-col justify-end bg-black/40 backdrop-blur-[2px] transition-all duration-300">
                <div className="w-full bg-white rounded-t-[22px] p-5 space-y-3 shadow-2xl border-t border-[#E5E8EB] animate-slideUp">
                  <div className="w-10 h-1 bg-[#E5E8EB] rounded-full mx-auto" />
                  <div className="flex items-center justify-between border-b border-[#F2F4F6] pb-2.5">
                    <div className="flex items-center gap-2">
                      <span className="text-[16px] font-bold text-[#191F28]">출발지 주소 검색</span>
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#FFF0EB] text-[#E5501B]">바텀시트 모드</span>
                    </div>
                    <X className="w-4 h-4 text-[#8B95A1] cursor-pointer hover:text-[#191F28]" />
                  </div>

                  <div className="h-[44px] rounded-[10px] border-2 border-[#1219F7] px-3 flex items-center justify-between text-[13px] text-[#191F28]">
                    <span>도로명, 지번, 건물명</span>
                    <Search className="w-4 h-4 text-[#1219F7]" />
                  </div>

                  <div className="space-y-1 text-[11px] text-[#6B7684] bg-[#F9FAFB] p-2.5 rounded-[10px] border border-[#E5E8EB]">
                    <div className="font-bold text-[#191F28]">주소검색 Tip</div>
                    <div>• 도로명 + 건물번호 (예: 테헤란로7길 12)</div>
                  </div>

                  <button type="button" className="w-full h-[48px] bg-[#1219F7] text-white text-[14px] font-bold rounded-[10px]">
                    주소 검색하기
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
