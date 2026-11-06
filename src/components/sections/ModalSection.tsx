import React, { useState, useEffect } from 'react';
import { Modal } from '../ui/Modal';
import { BottomSheet } from '../ui/BottomSheet';
import { PublicButton } from '../ui/Button';
import { ExternalLink, Sliders, Smartphone, Monitor } from 'lucide-react';

export const ModalSection: React.FC = () => {
  const [liveConfirmOpen, setLiveConfirmOpen] = useState(false);
  const [liveAlertOpen, setLiveAlertOpen] = useState(false);
  const [liveSheetOpen, setLiveSheetOpen] = useState(false);
  const [responsiveOpen, setResponsiveOpen] = useState(false);
  const [selectedFloor, setSelectedFloor] = useState('3층');

  // Interactive Resizer Slider (360px ~ 1400px)
  const [simulatedWidth, setSimulatedWidth] = useState(768);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isSimulatedDesktop = simulatedWidth >= 1200;
  const isActualDesktop = windowWidth >= 1200;

  const floorOptions = [
    '1층 (단독주택/저층)',
    '2층',
    '3층',
    '4층',
    '5층 (사다리차 권장)',
    '6층 이상 (고층 아파트)',
    '지하 1층',
  ];

  return (
    <section id="modals" className="space-y-12">
      {/* Section Header */}
      <div className="border-b border-etc-03 pb-6">
        <span className="text-[13px] font-bold text-main-01">
          오버레이 컴포넌트
        </span>
        <h2 className="text-[28px] font-extrabold text-text-01 tracking-da24 mt-1">
          모달 및 바텀시트
        </h2>
        <p className="text-[15px] text-text-03 mt-2 leading-relaxed max-w-2xl">
          사용자의 맥락을 차단하고 집중시키는 중앙 모달 다이얼로그와 모바일 옵션 선택을 위한 바텀시트 규격입니다. 배경 딤드는 <strong>rgba(0, 0, 0, 0.6) 60%</strong>를 적용합니다.
        </p>
      </div>

      {/* Responsive Breakpoint Highlight Banner */}
      <div className="bg-gradient-to-r from-main-04/80 via-white to-blue-50 border border-main-01/30 rounded-[20px] p-6 shadow-soft">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-main-01 text-white">
              반응형 절대 규칙
            </div>
            <h3 className="text-[18px] font-bold text-text-01">
              360px ~ 1199px은 바텀시트, 1200px 이상은 중앙 고정 모달
            </h3>
            <p className="text-[13px] text-text-03 leading-relaxed">
              주소 검색, 층수/옵션 선택, 확인 팝업 등은 별도 창을 띄우지 않고 <strong>1200px 임계값</strong>을 기준으로 모바일 반응형 바텀시트 또는 데스크톱 중앙 고정 모달로 전환됩니다.
            </p>
          </div>
          <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-[12px] border border-etc-03 shadow-2xs self-start md:self-auto shrink-0">
            <span className="text-[12px] text-text-03">현재 내 화면 너비:</span>
            <span className="text-[14px] font-extrabold text-main-01">{windowWidth}px</span>
            <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${isActualDesktop ? 'bg-blue-100 text-main-02' : 'bg-orange-100 text-main-01'}`}>
              {isActualDesktop ? '중앙 모달 적용' : '바텀시트 적용'}
            </span>
          </div>
        </div>
      </div>

      {/* Live Interactive Triggers Card */}
      <div className="bg-white border border-[#EBEEF2] rounded-[20px] p-6 md:p-8 space-y-4 shadow-soft">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-etc-03 pb-3">
          <div>
            <h3 className="text-[17px] font-bold text-text-01">실제 오버레이 팝업 트리거</h3>
            <p className="text-[13px] text-text-03 mt-0.5">
              버튼을 클릭하면 브라우저 화면 전체에 실제 오버레이와 딤드가 활성화됩니다.
            </p>
          </div>
          <span className="text-[12px] text-main-01 font-bold">오버레이 딤드 60%</span>
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          <PublicButton
            onClick={() => setResponsiveOpen(true)}
            className="flex items-center gap-2 !bg-main-01 hover:!bg-[#D9380F]"
          >
            <span>✨ 반응형 주소검색 팝업 열기 (현재 {windowWidth}px 감지)</span>
            <ExternalLink className="w-4 h-4" />
          </PublicButton>

          <PublicButton
            onClick={() => setLiveConfirmOpen(true)}
            className="flex items-center gap-2 !bg-text-01 hover:!bg-[#222]"
          >
            <span>2버튼 컨펌 모달 열기 (312px)</span>
            <ExternalLink className="w-4 h-4" />
          </PublicButton>

          <PublicButton
            onClick={() => setLiveAlertOpen(true)}
            className="!bg-[#555] hover:!bg-[#333] flex items-center gap-2"
          >
            <span>단일 알림 모달 열기 (312px)</span>
            <ExternalLink className="w-4 h-4" />
          </PublicButton>

          <PublicButton
            onClick={() => setLiveSheetOpen(true)}
            className="!bg-main-02 hover:!bg-[#464DF5] flex items-center gap-2"
          >
            <span>모바일 바텀시트 열기 (선택창)</span>
            <ExternalLink className="w-4 h-4" />
          </PublicButton>
        </div>
      </div>

      {/* Interactive Responsive Resizer Line / Slider */}
      <div className="bg-white border-2 border-main-01/30 rounded-[20px] p-6 md:p-8 space-y-6 shadow-soft">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-etc-03 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-main-04 flex items-center justify-center text-main-01">
              <Sliders className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-[18px] font-extrabold text-text-01">
                화면 너비별 실시간 모달 전환 시각화 (인터랙티브 슬라이더)
              </h3>
              <p className="text-[13px] text-text-03 mt-0.5">
                아래 슬라이더 바를 좌우로 움직여 1200px 임계값을 넘나들며 컴포넌트 변형을 확인해보세요.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              type="button"
              onClick={() => setSimulatedWidth(360)}
              className={`px-3 py-1.5 rounded-[8px] text-[12px] font-bold border transition-colors flex items-center gap-1.5 ${
                simulatedWidth === 360 ? 'bg-main-01 text-white border-main-01' : 'bg-white text-text-02 border-etc-02 hover:bg-etc-04'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              모바일 (360px)
            </button>
            <button
              type="button"
              onClick={() => setSimulatedWidth(768)}
              className={`px-3 py-1.5 rounded-[8px] text-[12px] font-bold border transition-colors ${
                simulatedWidth === 768 ? 'bg-main-01 text-white border-main-01' : 'bg-white text-text-02 border-etc-02 hover:bg-etc-04'
              }`}
            >
              태블릿 (768px)
            </button>
            <button
              type="button"
              onClick={() => setSimulatedWidth(1280)}
              className={`px-3 py-1.5 rounded-[8px] text-[12px] font-bold border transition-colors flex items-center gap-1.5 ${
                simulatedWidth === 1280 ? 'bg-main-02 text-white border-main-02' : 'bg-white text-text-02 border-etc-02 hover:bg-etc-04'
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
              데스크톱 (1280px)
            </button>
          </div>
        </div>

        {/* Resizer Slider Bar with 1200px Threshold Marker */}
        <div className="space-y-3 bg-[#F8F9FA] p-5 rounded-[16px] border border-etc-03">
          <div className="flex items-center justify-between text-[13px]">
            <div className="flex items-center gap-2">
              <span className="font-bold text-text-01">시뮬레이션 뷰포트 폭:</span>
              <span className="text-[17px] font-extrabold text-main-01">{simulatedWidth}px</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[12px] text-text-03">동작 규격:</span>
              <span className={`px-2.5 py-1 rounded-[6px] text-[12px] font-bold ${
                isSimulatedDesktop ? 'bg-blue-100 text-main-02' : 'bg-orange-100 text-main-01'
              }`}>
                {isSimulatedDesktop ? '중앙 고정 모달 (1200px 이상)' : '바텀시트 (360px ~ 1199px)'}
              </span>
            </div>
          </div>

          <div className="relative pt-6 pb-2">
            {/* Visual Threshold Line Indicator for 1200px */}
            {/* Range: 360 ~ 1400 (range length = 1040). (1200 - 360) / 1040 = 80.76% */}
            <div className="absolute top-0 left-[80.76%] -translate-x-1/2 flex flex-col items-center pointer-events-none">
              <span className="text-[10px] font-bold text-main-01 bg-orange-100 px-1.5 py-0.5 rounded border border-main-01/30">
                1200px 기준선
              </span>
              <div className="w-[2px] h-3 bg-main-01 mt-0.5" />
            </div>

            <input
              type="range"
              min={360}
              max={1400}
              step={10}
              value={simulatedWidth}
              onChange={(e) => setSimulatedWidth(Number(e.target.value))}
              className="w-full accent-main-01 h-2 bg-etc-02 rounded-lg cursor-pointer"
            />

            <div className="flex justify-between text-[11px] text-text-04 mt-2">
              <span>360px (최소 모바일)</span>
              <span>768px (태블릿)</span>
              <span className="font-bold text-main-01">1200px (전환 분기점)</span>
              <span>1400px (와이드 데스크톱)</span>
            </div>
          </div>
        </div>

        {/* Live Simulation Preview Frame */}
        <div className="bg-[#1E2024] p-4 md:p-6 rounded-[16px] overflow-hidden flex flex-col items-center">
          <div className="text-[12px] text-white/60 mb-3 flex items-center gap-2">
            <span>시뮬레이터 캔버스 ({simulatedWidth}px)</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-white font-medium">
              {isSimulatedDesktop ? 'PC 중앙 모달 상태' : '모바일 바텀시트 상태'}
            </span>
          </div>

          {/* Simulated Outer Device Window */}
          <div
            style={{ width: `${Math.min(simulatedWidth, 800)}px` }}
            className="h-[420px] bg-black/60 rounded-[14px] border border-white/20 relative overflow-hidden transition-all duration-300 flex flex-col shadow-2xl"
          >
            {/* Dummy App Background */}
            <div className="p-4 border-b border-white/10 flex items-center justify-between text-white/70 text-[12px]">
              <span className="font-bold text-white">다이사 이사 견적 신청</span>
              <span>3/5 단계</span>
            </div>
            <div className="p-4 space-y-2 opacity-30">
              <div className="h-4 bg-white/40 rounded w-1/3" />
              <div className="h-10 bg-white/20 rounded w-full" />
              <div className="h-10 bg-white/20 rounded w-full" />
            </div>

            {/* In-Preview Modal / Bottom Sheet Morphing Component */}
            {isSimulatedDesktop ? (
              // Desktop Center Modal (>= 1200px)
              <div className="absolute inset-0 flex items-center justify-center p-4 bg-black/40 backdrop-blur-[2px] transition-all duration-300">
                <div className="w-[440px] max-w-[90%] bg-white rounded-[16px] p-6 space-y-4 shadow-pop border border-etc-02 animate-scaleUp">
                  <div className="flex items-center justify-between border-b border-etc-03 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-[17px] font-bold text-text-01">출발지 주소 검색</span>
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-blue-50 text-main-02">중앙 고정 440px</span>
                    </div>
                    <span className="text-[14px] text-text-04 font-bold cursor-pointer">✕</span>
                  </div>

                  <div className="h-[46px] rounded-[10px] border-2 border-main-01 px-3 flex items-center justify-between text-[14px] text-text-01">
                    <span>테헤란로 7길 12</span>
                    <span className="text-main-01 font-bold">🔍</span>
                  </div>

                  <div className="space-y-1.5 text-[12px] text-text-03 bg-etc-04 p-3 rounded-[10px]">
                    <div className="font-bold text-text-02">주소검색 Tip</div>
                    <div>• 도로명 + 건물번호 (예: 테헤란로7길 12)</div>
                    <div>• 지번 + 번지수 (예: 역삼동 648)</div>
                    <div>• 건물명, 아파트명 (예: 동궁빌딩)</div>
                  </div>

                  <div className="pt-2 flex justify-end gap-2">
                    <button type="button" className="px-4 py-2 text-[13px] font-bold text-text-03">취소</button>
                    <button type="button" className="px-5 py-2 text-[13px] font-bold bg-main-01 text-white rounded-[8px]">선택 완료</button>
                  </div>
                </div>
              </div>
            ) : (
              // Mobile / Tablet BottomSheet (< 1200px)
              <div className="absolute inset-0 flex flex-col justify-end bg-black/40 backdrop-blur-[2px] transition-all duration-300">
                <div className="w-full bg-white rounded-t-[20px] p-5 space-y-3 shadow-pop border-t border-etc-02 animate-slideUp">
                  <div className="w-10 h-1 bg-etc-02 rounded-full mx-auto" />
                  <div className="flex items-center justify-between border-b border-etc-03 pb-2.5">
                    <div className="flex items-center gap-2">
                      <span className="text-[16px] font-bold text-text-01">출발지 주소 검색</span>
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-orange-50 text-main-01">바텀시트 모드</span>
                    </div>
                    <span className="text-[13px] text-text-04 font-bold cursor-pointer">닫기</span>
                  </div>

                  <div className="h-[44px] rounded-[10px] border-2 border-main-01 px-3 flex items-center justify-between text-[13px] text-text-01">
                    <span>도로명, 지번, 건물명 (2글자 이상)</span>
                    <span className="text-main-01 font-bold">🔍</span>
                  </div>

                  <div className="space-y-1 text-[11px] text-text-03 bg-etc-04 p-2.5 rounded-[8px]">
                    <div className="font-bold text-text-02">주소검색 Tip</div>
                    <div>• 도로명 + 건물번호 (예: 테헤란로7길 12)</div>
                    <div>• 지번 + 번지수 (예: 역삼동 648)</div>
                  </div>

                  <button type="button" className="w-full h-[48px] bg-main-01 text-white text-[14px] font-bold rounded-[10px]">
                    주소 검색하기
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Visual In-Place Mockups (Card Panels) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Modal Anatomy & In-Place Spec */}
        <div className="bg-white border border-[#EBEEF2] rounded-[20px] p-6 md:p-8 space-y-4 shadow-soft">
          <div className="border-b border-etc-03 pb-3">
            <h3 className="text-[17px] font-bold text-text-01">Alert / Confirm Modal 규격</h3>
            <p className="text-[13px] text-text-03 mt-0.5">
              너비 312px · Corner Radius 16px · 패딩 24/16/24/16 · gap 24
            </p>
          </div>

          <div className="p-8 bg-[#F8F9FA] rounded-[16px] flex items-center justify-center min-h-[360px]">
            {/* Visual Modal Component */}
            <div className="w-[312px] bg-white rounded-[16px] px-4 py-6 flex flex-col gap-6 shadow-pop border border-etc-02 text-center">
              <div className="flex flex-col gap-2">
                <h4 className="text-[20px] leading-[30px] font-bold text-text-01 break-keep">
                  이사 견적 신청을 취소하시겠습니까?
                </h4>
                <p className="text-[16px] leading-[24px] text-text-03 break-keep">
                  작성 중인 출발지 및 일정 정보가 저장되지 않습니다.
                </p>
              </div>

              {/* 280px action buttons */}
              <div className="w-[280px] flex gap-2 mx-auto">
                <button
                  type="button"
                  className="w-[136px] h-[56px] rounded-[10px] bg-etc-03 text-text-02 font-bold text-[16px] leading-[24px]"
                >
                  이어쓰기
                </button>
                <button
                  type="button"
                  className="w-[136px] h-[56px] rounded-[10px] bg-main-01 text-white font-bold text-[16px] leading-[24px]"
                >
                  취소하기
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sheet In-Place Spec */}
        <div className="bg-white border border-[#EBEEF2] rounded-[20px] p-6 md:p-8 space-y-4 shadow-soft">
          <div className="border-b border-etc-03 pb-3">
            <h3 className="text-[17px] font-bold text-text-01">Bottom Sheet (선택 팝업) 규격</h3>
            <p className="text-[13px] text-text-03 mt-0.5">
              너비 360px · 상단 Radius 16px · 헤더 56px · 리스트 56px (최대 5개 노출 284px)
            </p>
          </div>

          <div className="p-8 bg-[#F8F9FA] rounded-[16px] flex items-center justify-center min-h-[360px]">
            {/* Visual Sheet Component */}
            <div className="w-[360px] bg-white rounded-t-[16px] shadow-pop border border-etc-02 overflow-hidden">
              <div className="h-[56px] px-6 flex items-center justify-between border-b border-etc-03">
                <span className="text-[18px] leading-[27px] font-bold text-text-01">
                  출발지 층수를 선택하세요
                </span>
                <span className="text-[14px] text-text-04">닫기</span>
              </div>
              <div className="max-h-[224px] overflow-y-auto px-6 divide-y divide-etc-03 text-[16px]">
                {['1층', '2층', '3층 (선택됨)', '4층'].map((floor, i) => (
                  <div
                    key={floor}
                    className={`h-[56px] flex items-center justify-between ${
                      i === 2 ? 'text-main-01 font-bold' : 'text-text-02'
                    }`}
                  >
                    <span>{floor}</span>
                    {i === 2 && <span className="text-main-01 font-bold">✓</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Real Responsive Dialog Popup (Switches between BottomSheet and Modal based on actual window width) */}
      {responsiveOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-[2px]"
          onClick={() => setResponsiveOpen(false)}
        >
          {isActualDesktop ? (
            // Desktop Center Modal (>= 1200px)
            <div
              className="w-[440px] max-w-[92vw] bg-white rounded-[20px] p-6 space-y-4 shadow-pop border border-etc-02 animate-scaleUp"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-etc-03 pb-3">
                <div className="flex items-center gap-2">
                  <h3 className="text-[18px] font-bold text-text-01">출발지 주소 검색</h3>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-blue-50 text-main-02">
                    웹 중앙 고정 (화면 너비 {windowWidth}px ≥ 1200px)
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setResponsiveOpen(false)}
                  className="text-[16px] text-text-04 font-bold hover:text-text-01"
                >
                  ✕
                </button>
              </div>

              <div className="h-[48px] rounded-[10px] border-2 border-main-01 px-3 flex items-center justify-between text-[14px]">
                <input
                  type="text"
                  placeholder="도로명, 지번, 건물명 (2글자 이상)"
                  defaultValue="테헤란로"
                  className="w-full bg-transparent outline-none text-text-01 placeholder-text-04"
                />
                <span className="text-main-01 font-bold">🔍</span>
              </div>

              <div className="space-y-1.5 text-[12px] text-text-03 bg-[#F8F9FA] p-3.5 rounded-[12px] border border-etc-03">
                <div className="font-bold text-text-02">주소검색 Tip</div>
                <div>• 도로명 + 건물번호 (예: 테헤란로7길 12)</div>
                <div>• 지번 + 번지수 (예: 역삼동 648)</div>
                <div>• 건물명, 아파트명 (예: 동궁빌딩)</div>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setResponsiveOpen(false)}
                  className="px-4 py-2.5 rounded-[8px] text-[14px] font-bold text-text-03 hover:bg-etc-04"
                >
                  닫기
                </button>
                <button
                  type="button"
                  onClick={() => {
                    alert('주소가 선택되었습니다.');
                    setResponsiveOpen(false);
                  }}
                  className="px-5 py-2.5 rounded-[8px] text-[14px] font-bold bg-main-01 text-white hover:bg-[#D9380F]"
                >
                  검색하기
                </button>
              </div>
            </div>
          ) : (
            // Mobile Bottom Sheet (< 1200px)
            <div
              className="fixed bottom-0 left-0 right-0 max-w-[640px] mx-auto bg-white rounded-t-[20px] p-6 space-y-4 shadow-pop border-t border-etc-02 animate-slideUp"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-12 h-1 bg-etc-02 rounded-full mx-auto" />
              <div className="flex items-center justify-between border-b border-etc-03 pb-3">
                <div className="flex items-center gap-2">
                  <h3 className="text-[17px] font-bold text-text-01">출발지 주소 검색</h3>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-orange-50 text-main-01">
                    바텀시트 (화면 너비 {windowWidth}px &lt; 1200px)
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setResponsiveOpen(false)}
                  className="text-[14px] text-text-04 font-bold"
                >
                  닫기
                </button>
              </div>

              <div className="h-[46px] rounded-[10px] border-2 border-main-01 px-3 flex items-center justify-between text-[14px]">
                <input
                  type="text"
                  placeholder="도로명, 지번, 건물명 (2글자 이상)"
                  defaultValue="테헤란로"
                  className="w-full bg-transparent outline-none text-text-01 placeholder-text-04"
                />
                <span className="text-main-01 font-bold">🔍</span>
              </div>

              <div className="space-y-1 text-[12px] text-text-03 bg-[#F8F9FA] p-3 rounded-[10px] border border-etc-03">
                <div className="font-bold text-text-02">주소검색 Tip</div>
                <div>• 도로명 + 건물번호 (예: 테헤란로7길 12)</div>
                <div>• 지번 + 번지수 (예: 역삼동 648)</div>
              </div>

              <button
                type="button"
                onClick={() => {
                  alert('주소가 선택되었습니다.');
                  setResponsiveOpen(false);
                }}
                className="w-full h-[50px] bg-main-01 text-white text-[15px] font-bold rounded-[10px]"
              >
                주소 검색하기
              </button>
            </div>
          )}
        </div>
      )}

      {/* Real Full Screen Dialog Instances */}
      <Modal
        open={liveConfirmOpen}
        onClose={() => setLiveConfirmOpen(false)}
        title="방문 견적 신청을 취소할까요?"
        description="입력하신 이사 정보와 요청 사항이 모두 초기화됩니다."
        type="double"
        cancelText="계속 작성"
        confirmText="취소하기"
        onConfirm={() => alert('취소되었습니다.')}
      />

      <Modal
        open={liveAlertOpen}
        onClose={() => setLiveAlertOpen(false)}
        title="이사 견적 접수가 완료되었습니다"
        description="고객님의 연락처로 전문 매니저의 배정 알림톡이 전송되었습니다."
        type="single"
        confirmText="확인 완료"
      />

      <BottomSheet
        open={liveSheetOpen}
        onClose={() => setLiveSheetOpen(false)}
        title="출발지 층수를 선택하세요"
        options={floorOptions}
        value={selectedFloor}
        onSelect={(val) => setSelectedFloor(val)}
      />
    </section>
  );
};
