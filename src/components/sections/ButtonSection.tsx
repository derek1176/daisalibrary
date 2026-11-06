import React, { useState } from 'react';
import { PublicButton, FloatingButton, ModalButtons, Segmented3, Chip, ButtonState } from '../ui/Button';
import { Smartphone, Monitor } from 'lucide-react';

export const ButtonSection: React.FC = () => {
  const [btnState, setBtnState] = useState<ButtonState>('normal');
  const [segmentedVal, setSegmentedVal] = useState(0);
  const [activeChip, setActiveChip] = useState('원룸이사');
  const [deviceView, setDeviceView] = useState<'mobile' | 'pc'>('mobile');
  const [modalType, setModalType] = useState<'double' | 'single'>('double');
  const [modalSize, setModalSize] = useState<48 | 56>(56);

  const segmentedOptions: [string, string, string] = ['포장이사', '반포장이사', '일반이사'];
  const chips = ['원룸이사 (소형)', '가정이사 (아파트)', '사무실/기업이사', '보관이사', '에어컨 이전설치'];

  return (
    <section id="buttons" className="space-y-12">
      {/* Section Header */}
      <div className="border-b border-etc-03 pb-6">
        <span className="text-[13px] font-bold text-main-01">
          버튼 컴포넌트
        </span>
        <h2 className="text-[28px] font-extrabold text-text-01 tracking-da24 mt-1">
          버튼 4대 규격
        </h2>
        <p className="text-[15px] text-text-03 mt-2 leading-relaxed max-w-2xl">
          화면 위치와 역할에 따라 4가지 규격(하단 플로팅, 본문 인라인, 모달 버튼, 3분할 세그먼트)을 철저히 구분하여 사용합니다.
        </p>
      </div>

      {/* State & Device Control Bar */}
      <div className="bg-white border border-[#EBEEF2] rounded-[18px] p-4 flex flex-wrap items-center justify-between gap-4 shadow-soft">
        {/* Device Switcher */}
        <div className="flex items-center gap-1.5 bg-etc-04 p-1 rounded-[10px] border border-etc-02">
          <button
            onClick={() => setDeviceView('mobile')}
            className={`px-3 py-1.5 rounded-[8px] text-[13px] font-bold flex items-center gap-1.5 transition-all ${
              deviceView === 'mobile' ? 'bg-white text-main-01 shadow-xs' : 'text-text-03 hover:text-text-01'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" /> 모바일 (312px)
          </button>
          <button
            onClick={() => setDeviceView('pc')}
            className={`px-3 py-1.5 rounded-[8px] text-[13px] font-bold flex items-center gap-1.5 transition-all ${
              deviceView === 'pc' ? 'bg-white text-main-01 shadow-xs' : 'text-text-03 hover:text-text-01'
            }`}
          >
            <Monitor className="w-3.5 h-3.5" /> 웹/PC (640px)
          </button>
        </div>

        {/* State Toggle Buttons */}
        <div className="flex items-center gap-2">
          <span className="text-[12px] text-text-04 font-medium">상태:</span>
          {(['normal', 'loading', 'disable', 'error'] as ButtonState[]).map((st) => (
            <button
              key={st}
              onClick={() => setBtnState(st)}
              className={`px-3 py-1 rounded-[8px] text-[12px] font-bold capitalize transition-colors ${
                btnState === st
                  ? 'bg-main-01 text-white shadow-xs'
                  : 'bg-etc-04 text-text-03 hover:bg-etc-03'
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* 1. Public In-Content Button */}
      <div className="bg-white border border-[#EBEEF2] rounded-[20px] p-6 md:p-8 space-y-4 shadow-soft">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-etc-03 pb-3">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-[17px] font-bold text-text-01">1. 본문 인라인 버튼 (Public Button)</h3>
              <span className="px-2 py-0.5 rounded-[6px] bg-main-04 text-main-01 text-[11px] font-bold">
                ★ 공식 표준 권장
              </span>
            </div>
            <p className="text-[13px] text-text-03 mt-0.5">
              본문 콘텐츠 영역 내부에서 폼 제출, 다음 단계 진행에 사용되는 기본 표준 버튼입니다. 향후 모든 신규 화면의 표준입니다.
            </p>
          </div>
          <span className="text-[12px] text-text-04">
            모바일 312x56 · 웹 640x56 · 라운드 10px
          </span>
        </div>

        <div className="p-8 bg-[#F8F9FA] rounded-[14px] flex flex-col items-center justify-center min-h-[140px]">
          <div className={deviceView === 'mobile' ? 'w-[312px]' : 'w-full max-w-[640px]'}>
            <PublicButton
              state={btnState}
              fluid={deviceView === 'pc'}
              onClick={() => alert('Public 버튼 클릭')}
            >
              무료 방문견적 신청하기 ({deviceView === 'mobile' ? '312px' : '640px'})
            </PublicButton>
          </div>
        </div>
      </div>

      {/* 2. Floating CTA Button (Deprecated / Legacy) */}
      <div className="bg-white border border-[#EBEEF2] rounded-[20px] p-6 md:p-8 space-y-4 shadow-soft opacity-90">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-etc-03 pb-3">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-[17px] font-bold text-text-01">2. 플로팅 버튼 (Floating CTA)</h3>
              <span className="px-2 py-0.5 rounded-[6px] bg-amber-50 text-amber-700 border border-amber-200 text-[11px] font-bold">
                ⚠️ 레거시 (사용 지양)
              </span>
            </div>
            <p className="text-[13px] text-amber-800/80 mt-1 leading-relaxed">
              <strong>안내:</strong> 플로팅 CTA는 이전 디자인 규격으로 점진적 퇴출 예정입니다. 신규 개발 및 개편 시에는 사용을 지양하고, 위 <strong>Public Button(본문 인라인 버튼)</strong>을 사용해 주세요.
            </p>
          </div>
          <span className="text-[12px] text-text-04">
            모바일 360x56 · 라운드 0px (직각)
          </span>
        </div>

        <div className="p-8 bg-[#F8F9FA] rounded-[14px] flex flex-col items-center justify-center min-h-[140px]">
          <div
            className={`border border-dashed border-etc-02 p-2 rounded bg-white/60 flex flex-col items-center ${
              deviceView === 'mobile' ? 'w-[360px]' : 'w-full max-w-[640px]'
            }`}
          >
            <span className="text-[11px] text-text-04 mb-2">하단 밀착 시뮬레이션 (r:0px / 레거시)</span>
            <FloatingButton
              state={btnState}
              onClick={() => alert('Floating CTA 클릭')}
            >
              하단 고정 CTA 신청하기 (56px)
            </FloatingButton>
          </div>
        </div>
      </div>

      {/* 3. Modal Buttons */}
      <div className="bg-white border border-[#EBEEF2] rounded-[20px] p-6 md:p-8 space-y-4 shadow-soft">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-etc-03 pb-3">
          <div>
            <h3 className="text-[17px] font-bold text-text-01">3. Modal Action Buttons</h3>
            <p className="text-[13px] text-text-03 mt-0.5">
              모달 312px 내 패딩 16px을 제외한 280px 액션 그리드 버튼
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 bg-etc-04 p-1 rounded-md text-[12px]">
              <button
                onClick={() => setModalType('double')}
                className={`px-2 py-0.5 rounded font-bold ${modalType === 'double' ? 'bg-white shadow-2xs text-main-01' : 'text-text-03'}`}
              >
                2분할 (136+8+136)
              </button>
              <button
                onClick={() => setModalType('single')}
                className={`px-2 py-0.5 rounded font-bold ${modalType === 'single' ? 'bg-white shadow-2xs text-main-01' : 'text-text-03'}`}
              >
                단일 (280px)
              </button>
            </div>
            <div className="flex items-center gap-1 bg-etc-04 p-1 rounded-md text-[12px]">
              <button
                onClick={() => setModalSize(56)}
                className={`px-2 py-0.5 rounded font-bold ${modalSize === 56 ? 'bg-white shadow-2xs text-main-01' : 'text-text-03'}`}
              >
                56px
              </button>
              <button
                onClick={() => setModalSize(48)}
                className={`px-2 py-0.5 rounded font-bold ${modalSize === 48 ? 'bg-white shadow-2xs text-main-01' : 'text-text-03'}`}
              >
                48px
              </button>
            </div>
          </div>
        </div>

        <div className="p-8 bg-[#F8F9FA] rounded-[14px] flex flex-col items-center justify-center min-h-[140px]">
          <div className="p-4 bg-white rounded-[16px] border border-etc-02 shadow-xs space-y-3 flex flex-col items-center">
            <span className="text-[13px] font-bold text-text-01">모달 액션 영역 (280px)</span>
            <ModalButtons
              type={modalType}
              size={modalSize}
              cancelText="취소"
              confirmText="확인"
              onCancel={() => alert('취소')}
              onConfirm={() => alert('확인')}
            />
          </div>
        </div>
      </div>

      {/* 4. Pill Filter Chips */}
      <div className="bg-white border border-[#EBEEF2] rounded-[20px] p-6 md:p-8 space-y-4 shadow-soft">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-etc-03 pb-3">
          <div>
            <h3 className="text-[17px] font-bold text-text-01">4. 필터 칩 & 태그 (Pill Filter Chips)</h3>
            <p className="text-[13px] text-text-03 mt-0.5">
              카테고리 다중 선택 및 필터 태그 (h:33px, Radius: 28px/Pill)
            </p>
          </div>
          <span className="text-[12px] text-text-04">
            높이 33px · 라운드 28px (Pill)
          </span>
        </div>

        <div className="p-8 bg-[#F8F9FA] rounded-[14px] flex flex-wrap items-center justify-center gap-2.5 min-h-[120px]">
          {chips.map((c) => (
            <Chip
              key={c}
              active={activeChip === c}
              onClick={() => setActiveChip(c)}
            >
              {c}
            </Chip>
          ))}
        </div>
      </div>
    </section>
  );
};
