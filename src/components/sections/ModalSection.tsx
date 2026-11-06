import React, { useState } from 'react';
import { Modal } from '../ui/Modal';
import { BottomSheet } from '../ui/BottomSheet';
import { PublicButton } from '../ui/Button';
import { ExternalLink } from 'lucide-react';

export const ModalSection: React.FC = () => {
  const [liveConfirmOpen, setLiveConfirmOpen] = useState(false);
  const [liveAlertOpen, setLiveAlertOpen] = useState(false);
  const [liveSheetOpen, setLiveSheetOpen] = useState(false);
  const [selectedFloor, setSelectedFloor] = useState('3층');

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
            onClick={() => setLiveConfirmOpen(true)}
            className="flex items-center gap-2"
          >
            <span>2버튼 컨펌 모달 열기 (312px)</span>
            <ExternalLink className="w-4 h-4" />
          </PublicButton>

          <PublicButton
            onClick={() => setLiveAlertOpen(true)}
            className="!bg-text-01 hover:!bg-[#222] flex items-center gap-2"
          >
            <span>단일 알림 모달 열기 (312px)</span>
            <ExternalLink className="w-4 h-4" />
          </PublicButton>

          <PublicButton
            onClick={() => setLiveSheetOpen(true)}
            className="!bg-main-02 hover:!bg-[#464DF5] flex items-center gap-2"
          >
            <span>모바일 바텀시트 열기 (360px)</span>
            <ExternalLink className="w-4 h-4" />
          </PublicButton>
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
