import React, { useState } from 'react';
import { Button, Segmented3Split, ModalButtonGroup } from '../ui/Button';
import { InputText, InputNumber, SelectBox } from '../ui/Input';
import { Modal } from '../ui/Modal';
import { Star, ShieldCheck, CheckCircle2, AlertTriangle, ArrowRight, PhoneCall, ChevronRight, Wind, Wifi, Truck } from 'lucide-react';

export const ScreensShowcase: React.FC = () => {
  const [selectedScreen, setSelectedScreen] = useState<'aircon' | 'review' | 'internet' | 'estimate'>('aircon');

  // Screen 1: 에어컨 상태
  const [airconTypeIdx, setAirconTypeIdx] = useState(0);
  const [airconCount, setAirconCount] = useState('1');
  const [isAirconSuccessModal, setIsAirconSuccessModal] = useState(false);

  // Screen 2: 후기 모달 상태
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [rating, setRating] = useState(5);

  // Screen 3: 인터넷 가격비교 상태
  const [telecomIdx, setTelecomIdx] = useState(0);
  const [internetPlan, setInternetPlan] = useState('500M');

  // Screen 4: 방문견적 모달
  const [isEstimateModalOpen, setIsEstimateModalOpen] = useState(false);

  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2.5 py-0.5 rounded-full text-[12px] font-bold bg-main-04 text-main-01">
            Real Screens / 실제 구현 화면
          </span>
          <span className="text-[12px] text-text-04">Figma Files: G5JiHI51FV6XFImlsyON6u & KLDA7nLwHvbDCIHS6y0MgT</span>
        </div>
        <h2 className="text-[24px] font-bold text-text-01 leading-[34px] tracking-da24">
          Figma 실제 서비스 화면 재현
        </h2>
        <p className="mt-1 text-[16px] text-text-03 leading-[24px] tracking-da24">
          다이사 피그마 프로젝트에 수록된 실제 프로덕션 화면들을 다이사 디자인시스템 컴포넌트로 구현한 라이브 프리뷰입니다.
        </p>
      </div>

      {/* Screen Selection Pills */}
      <div className="flex border-b border-etc-03 gap-2 overflow-x-auto pb-2">
        {[
          { id: 'aircon', label: '1. 에어컨 페이지 리뉴얼', node: '7785:11499' },
          { id: 'review', label: '2. 후기 페이지 & 모달', node: '6813:9676' },
          { id: 'internet', label: '3. 인터넷 가격 비교', node: '7349:334' },
          { id: 'estimate', label: '4. 빠크 방문견적 모달', node: '6458:2639' },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => setSelectedScreen(item.id as any)}
            className={`px-4 py-2 rounded-[8px] text-[14px] font-bold tracking-da24 flex items-center gap-2 transition-all ${
              selectedScreen === item.id
                ? 'bg-main-01 text-white shadow-sm'
                : 'bg-white text-text-02 border border-etc-02 hover:border-main-02'
            }`}
          >
            <span>{item.label}</span>
            <span className={`text-[11px] font-mono px-1.5 py-0.5 rounded ${
              selectedScreen === item.id ? 'bg-white/20 text-white' : 'bg-etc-04 text-text-04'
            }`}>
              #{item.node}
            </span>
          </button>
        ))}
      </div>

      {/* Interactive Mobile Simulator (360px standard frame) */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 py-4">
        {/* Phone Frame */}
        <div className="w-[360px] bg-white rounded-[32px] border-[8px] border-[#22242A] shadow-2xl overflow-hidden flex flex-col relative shrink-0">
          {/* Top Status Bar (Figma Status Bar Component) */}
          <div className="h-[44px] bg-white px-6 flex items-center justify-between text-[14px] font-bold text-text-01 border-b border-etc-03 select-none">
            <span>09:41</span>
            <div className="flex items-center gap-1.5">
              <span className="text-[12px]">5G</span>
              <div className="w-5 h-2.5 border border-text-01 rounded-sm p-0.5">
                <div className="w-full h-full bg-text-01 rounded-xs" />
              </div>
            </div>
          </div>

          {/* Screen Content Viewport (Height 620px scrollable) */}
          <div className="h-[580px] overflow-y-auto bg-[#F7F8FA] flex flex-col relative">
            {/* 1. 에어컨 페이지 리뉴얼 */}
            {selectedScreen === 'aircon' && (
              <div className="flex flex-col flex-1 pb-[70px]">
                {/* Header */}
                <div className="h-[56px] bg-white px-4 flex items-center justify-between border-b border-etc-03">
                  <h3 className="text-[18px] font-bold text-text-01 flex items-center gap-2">
                    <Wind className="w-5 h-5 text-main-01" /> 에어컨 설치/이전
                  </h3>
                  <span className="text-[12px] text-text-04">고객향 v1.2</span>
                </div>

                {/* Hero Banner */}
                <div className="p-4 bg-gradient-to-r from-main-01 to-main-02 text-white">
                  <span className="text-[12px] font-bold px-2 py-0.5 rounded bg-white/20">시즌 프로모션</span>
                  <h4 className="text-[20px] font-bold mt-2 leading-[28px]">
                    여름맞이 에어컨 이전 설치<br />최대 20% 특별 할인
                  </h4>
                  <p className="text-[14px] text-white/80 mt-1">공식 인증 기사 100% 안심 보장제</p>
                </div>

                {/* Form Body (312px Grid) */}
                <div className="p-6 flex flex-col items-center gap-5 bg-white mt-2">
                  <div className="w-[312px] text-left">
                    <label className="text-[14px] font-bold text-text-01">에어컨 종류 선택</label>
                  </div>
                  <Segmented3Split
                    options={['스탠드형', '벽걸이형', '2in1']}
                    selectedIndex={airconTypeIdx}
                    onChange={(idx) => setAirconTypeIdx(idx)}
                  />

                  <InputNumber
                    label="설치 대수"
                    placeholder="1"
                    unit="대"
                    value={airconCount}
                    onChange={(e) => setAirconCount(e.target.value)}
                  />

                  <InputText
                    label="설치 희망 지역"
                    placeholder="시/군/구 동 입력 (예: 분당구 서현동)"
                  />

                  <div className="w-[312px] p-3 rounded-[10px] bg-main-04 border border-main-02/30 flex items-start gap-2.5">
                    <ShieldCheck className="w-5 h-5 text-main-01 shrink-0 mt-0.5" />
                    <p className="text-[13px] text-text-02 leading-[18px]">
                      추가 타공비와 배관 길이에 따른 예상 견적은 기사님 사전 유선 확인 후 확정됩니다.
                    </p>
                  </div>

                  <Button
                    variant="public"
                    onClick={() => setIsAirconSuccessModal(true)}
                  >
                    에어컨 설치 견적 비교하기
                  </Button>
                </div>

                {/* Floating CTA (56px 100% width) */}
                <div className="fixed bottom-0 left-0 right-0 max-w-[344px] mx-auto z-20">
                  <Button
                    variant="floating"
                    onClick={() => setIsAirconSuccessModal(true)}
                  >
                    간편 1초 견적 신청 (56px)
                  </Button>
                </div>
              </div>
            )}

            {/* 2. 후기 페이지 & 모달 */}
            {selectedScreen === 'review' && (
              <div className="flex flex-col flex-1 p-4 pb-6 space-y-4">
                <div className="h-[56px] bg-white -m-4 mb-2 px-4 flex items-center justify-between border-b border-etc-03">
                  <h3 className="text-[18px] font-bold text-text-01">실제 고객 이사 후기</h3>
                  <span className="text-[14px] text-main-01 font-bold">총 42,912건</span>
                </div>

                {/* Rating Summary */}
                <div className="bg-white p-4 rounded-[12px] border border-etc-02 flex items-center justify-between">
                  <div>
                    <span className="text-[12px] text-text-03">다이사 종합 만족도</span>
                    <div className="text-[24px] font-bold text-text-01 flex items-center gap-1.5 mt-1">
                      <span>4.9</span>
                      <div className="flex text-amber-400">
                        {'★'.repeat(5)}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsReviewModalOpen(true)}
                    className="px-3 py-2 rounded-[8px] bg-main-01 text-white text-[13px] font-bold hover:bg-[#0D14D6]"
                  >
                    후기 작성하기
                  </button>
                </div>

                {/* Review Cards */}
                {[
                  {
                    author: '김*현 고객님',
                    date: '2026.11.04',
                    service: '가정이사 (32평 아파트)',
                    rating: 5,
                    content: '약속 시간 정확히 맞춰 오시고 가구 스크래치 하나 없이 꼼꼼하게 포장해주셨어요. 다이사 추천합니다!',
                  },
                  {
                    author: '이*수 고객님',
                    date: '2026.11.02',
                    service: '원룸이사 (오피스텔)',
                    rating: 5,
                    content: '견적 비교가 투명해서 좋았고 기사님께서 청소 마무리까지 깔끔하게 해주셔서 감동이었습니다.',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-[12px] border border-etc-02 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-[14px] text-text-01">{item.author}</span>
                        <span className="text-[12px] text-text-04">{item.date}</span>
                      </div>
                      <div className="flex text-amber-400 text-[12px]">
                        {'★'.repeat(item.rating)}
                      </div>
                    </div>
                    <span className="inline-block px-2 py-0.5 rounded text-[12px] font-medium bg-etc-04 text-text-03">
                      {item.service}
                    </span>
                    <p className="text-[14px] text-text-02 leading-[20px]">{item.content}</p>
                  </div>
                ))}
              </div>
            )}

            {/* 3. 인터넷 가격 비교 */}
            {selectedScreen === 'internet' && (
              <div className="flex flex-col flex-1 p-4 pb-6 space-y-4">
                <div className="h-[56px] bg-white -m-4 mb-2 px-4 flex items-center justify-between border-b border-etc-03">
                  <h3 className="text-[18px] font-bold text-text-01 flex items-center gap-2">
                    <Wifi className="w-5 h-5 text-main-01" /> 인터넷 가격비교
                  </h3>
                  <span className="text-[12px] font-bold text-error">최대 47만원 지급</span>
                </div>

                <div className="bg-white p-5 rounded-[16px] border border-etc-02 space-y-4">
                  <div className="space-y-1">
                    <span className="text-[12px] font-bold text-main-01">통신사 선택</span>
                    <Segmented3Split
                      options={['SK브로드밴드', 'KT올레', 'LG유플러스']}
                      selectedIndex={telecomIdx}
                      onChange={(idx) => setTelecomIdx(idx)}
                    />
                  </div>

                  <SelectBox
                    label="인터넷 속도 상품"
                    options={[
                      { label: '100M 슬림 (웹서핑, 1인가구)', value: '100M' },
                      { label: '500M 베이직 (가장 인기, 3~4인가구)', value: '500M' },
                      { label: '1G 기가 (대용량 다운로드/게임)', value: '1G' },
                    ]}
                    value={internetPlan}
                    onChange={(val) => setInternetPlan(val)}
                  />

                  {/* Cash back info */}
                  <div className="p-4 rounded-[12px] bg-main-04 border border-main-02/30 flex items-center justify-between">
                    <div>
                      <span className="text-[12px] text-text-03">개통 당일 현금 사은품</span>
                      <div className="text-[20px] font-bold text-main-01">최대 470,000원</div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[12px] font-bold bg-main-01 text-white">
                      당일지급
                    </span>
                  </div>

                  <Button
                    variant="public"
                    fullWidth
                    onClick={() => alert('인터넷 최대 사은품 상담이 접수되었습니다.')}
                  >
                    통신사별 요금 비교 확인하기
                  </Button>
                </div>
              </div>
            )}

            {/* 4. 빠크 방문견적 모달 */}
            {selectedScreen === 'estimate' && (
              <div className="flex flex-col flex-1 p-4 pb-6 space-y-4">
                <div className="h-[56px] bg-white -m-4 mb-2 px-4 flex items-center justify-between border-b border-etc-03">
                  <h3 className="text-[18px] font-bold text-text-01 flex items-center gap-2">
                    <Truck className="w-5 h-5 text-main-01" /> 빠크 방문견적
                  </h3>
                  <span className="text-[12px] text-text-04">KLDA7nLwHvbDCIHS6y0MgT</span>
                </div>

                <div className="bg-white p-5 rounded-[16px] border border-etc-02 space-y-4">
                  <h4 className="text-[18px] font-bold text-text-01">
                    우수 이사업체 3곳이<br />직접 방문하여 견적을 산출합니다
                  </h4>
                  <p className="text-[14px] text-text-03 leading-[20px]">
                    비대면 어림 견적 대비 방문 견적은 당일 추가 요금 분쟁을 100% 방지합니다.
                  </p>

                  <div className="space-y-3 pt-2">
                    <InputText label="방문 희망 일자" placeholder="예: 2026.11.15 오후 2시" />
                    <InputText label="출발지 주소" placeholder="동/호수 포함 입력" />
                  </div>

                  <Button
                    variant="public"
                    fullWidth
                    onClick={() => setIsEstimateModalOpen(true)}
                  >
                    방문 견적 무료 신청하기
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Screen Explanation & Specification */}
        <div className="flex-1 max-w-[560px] space-y-6">
          <div className="bg-white border border-etc-02 rounded-[16px] p-6 shadow-sm space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-main-01" />
              <h3 className="text-[18px] font-bold text-text-01">화면 구현 분석 및 토큰 매핑</h3>
            </div>

            {selectedScreen === 'aircon' && (
              <div className="space-y-3 text-[14px] text-text-02 leading-[22px]">
                <p><strong>Figma Node:</strong> 7785:11499 (ㄴ [고객향] 에어컨 페이지 리뉴얼)</p>
                <p><strong>적용 규격:</strong></p>
                <ul className="list-disc list-inside space-y-1 text-text-03">
                  <li><strong>Segmented 3-Split:</strong> 에어컨 종류(스탠드/벽걸이/2in1) 선택에 103-104-103px 3분할 적용</li>
                  <li><strong>InputNumber & InputText:</strong> 312px 너비, 56px 높이, 10px 라운드 표준 폼 인풋 적용</li>
                  <li><strong>Floating CTA:</strong> 화면 하단 56px 높이, 0px 라운드의 전폭 Primary 버튼 고정</li>
                </ul>
              </div>
            )}

            {selectedScreen === 'review' && (
              <div className="space-y-3 text-[14px] text-text-02 leading-[22px]">
                <p><strong>Figma Node:</strong> 6813:9676 (ㄴ [고객향] 후기 페이지 리뉴얼 모달)</p>
                <p><strong>적용 규격:</strong></p>
                <ul className="list-disc list-inside space-y-1 text-text-03">
                  <li><strong>모달 규격:</strong> 312px 너비, 16px 라운드, 패딩 24/16/24/16, Dimmed 60%</li>
                  <li><strong>액션 버튼:</strong> 280px 너비 내 136px 취소(#EBEEF2) + 8px 간격 + 136px 확인(#1219F7) 2분할 버튼</li>
                  <li><strong>타이포그래피:</strong> Title 20px Bold, 본문 16px Regular, Pretendard -1px 자간</li>
                </ul>
              </div>
            )}

            {selectedScreen === 'internet' && (
              <div className="space-y-3 text-[14px] text-text-02 leading-[22px]">
                <p><strong>Figma Node:</strong> 7349:334 (ㄴ [고객향] 인터넷 가격 비교)</p>
                <p><strong>적용 규격:</strong></p>
                <ul className="list-disc list-inside space-y-1 text-text-03">
                  <li><strong>통신사 3분할 탭:</strong> SK/KT/LG 3분할 Segmented 버튼으로 직관적 선택</li>
                  <li><strong>SelectBox:</strong> 312px 너비 56px 높이 표준 드롭다운 메뉴</li>
                  <li><strong>배경 틴트:</strong> main-04 (#F4F5FF) 배경 박스로 사은품 강조</li>
                </ul>
              </div>
            )}

            {selectedScreen === 'estimate' && (
              <div className="space-y-3 text-[14px] text-text-02 leading-[22px]">
                <p><strong>Figma Node:</strong> 6458:2639 (ㄴ [고객향] 빠크 방문견적모달 추가 수정)</p>
                <p><strong>적용 규격:</strong></p>
                <ul className="list-disc list-inside space-y-1 text-text-03">
                  <li><strong>다이사 표준 콘텐츠 그리드:</strong> 312px 중앙 정렬 폼</li>
                  <li><strong>원클릭 팝업 인터랙션:</strong> 신청 버튼 클릭 시 312px 표준 Alert 모달 호출</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Real Overlays */}
      <Modal
        isOpen={isAirconSuccessModal}
        onClose={() => setIsAirconSuccessModal(false)}
        title="에어컨 설치 견적 접수 완료"
        description="전문 설치 기사님이 1시간 내로 사전 유선 확인 연락을 드립니다."
        type="alert"
        confirmText="확인"
      />

      <Modal
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
        title="이사 후기를 남겨주세요"
        type="confirm"
        cancelText="닫기"
        confirmText="등록하기"
        onConfirm={() => alert('후기가 성공적으로 등록되었습니다.')}
      >
        <div className="flex flex-col items-center gap-3 py-2">
          <div className="flex gap-1 text-amber-400 text-[24px]">
            {[1, 2, 3, 4, 5].map((s) => (
              <button
                key={s}
                onClick={() => setRating(s)}
                className="hover:scale-110 transition-transform"
              >
                {s <= rating ? '★' : '☆'}
              </button>
            ))}
          </div>
          <span className="text-[13px] text-text-03">{rating}점 / 5점 만점</span>
          <textarea
            placeholder="기사님의 친절도, 짐 정리 상태는 어떠셨나요? (최소 10자 이상)"
            rows={3}
            className="w-[280px] p-3 text-[14px] border border-etc-02 rounded-[10px] outline-none focus:border-main-01 resize-none"
          />
        </div>
      </Modal>

      <Modal
        isOpen={isEstimateModalOpen}
        onClose={() => setIsEstimateModalOpen(false)}
        title="방문견적 신청을 완료할까요?"
        description="인증된 다이사 마스터 3곳에 고객님의 연락처가 안전하게 전달됩니다."
        type="confirm"
        cancelText="취소"
        confirmText="신청 확정"
        onConfirm={() => alert('방문견적 신청이 완료되었습니다!')}
      />
    </div>
  );
};
