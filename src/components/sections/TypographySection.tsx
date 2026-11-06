import React, { useState } from 'react';
import { Type, Check, Info } from 'lucide-react';

interface TypeRowProps {
  tokenVar: string;
  name: string;
  size: number;
  rem: string;
  weight: 'Bold' | 'Regular';
  weightNum: number;
  lh: string;
  usage: string;
  sampleText: string;
  isBaseText?: boolean;
  isMinimum?: boolean;
  isBanned?: boolean;
}

export const TypographySection: React.FC<{ mode?: 'customer' | 'partner' }> = ({ mode = 'customer' }) => {
  const isPartner = mode === 'partner';
  const defaultSample = isPartner
    ? '다이사 파트너 현장 견적 및 오더 접수 시스템'
    : '내 주변 모든 이사업체 찾기, 다이사';

  const [testText, setTestText] = useState(defaultSample);
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  const handleCopy = (token: string, textToCopy: string) => {
    navigator.clipboard.writeText(textToCopy);
    setCopiedToken(token);
    setTimeout(() => setCopiedToken(null), 1500);
  };

  // 고객향 타이포그래피 (DAISA_DESIGN_SYSTEM.md 기준: Pretendard 짝수 6종)
  const customerSpecs: TypeRowProps[] = [
    {
      tokenVar: '$font-size.headline-24.bold',
      name: 'Headline 24',
      size: 24,
      rem: '1.5rem (24px)',
      weight: 'Bold',
      weightNum: 700,
      lh: '140% (34px)',
      usage: '페이지 메인 대타이틀, 주요 완료 안내문',
      sampleText: '내 주변 모든 이사업체 찾기, 다이사',
    },
    {
      tokenVar: '$font-size.headline-24.regular',
      name: 'Headline 24',
      size: 24,
      rem: '1.5rem (24px)',
      weight: 'Regular',
      weightNum: 400,
      lh: '140% (34px)',
      usage: '대형 안내문 서브 헤드라인',
      sampleText: '내 주변 모든 이사업체 찾기, 다이사',
    },
    {
      tokenVar: '$font-size.title-20.bold',
      name: 'Title 20',
      size: 20,
      rem: '1.25rem (20px)',
      weight: 'Bold',
      weightNum: 700,
      lh: '150% (30px)',
      usage: '섹션 타이틀, 팝업 및 모달 제목',
      sampleText: '이사 견적 신청을 취소하시겠습니까?',
    },
    {
      tokenVar: '$font-size.title-20.regular',
      name: 'Title 20',
      size: 20,
      rem: '1.25rem (20px)',
      weight: 'Regular',
      weightNum: 400,
      lh: '150% (30px)',
      usage: '중형 부제목, 옵션 그룹 헤더',
      sampleText: '이사 견적 신청을 취소하시겠습니까?',
    },
    {
      tokenVar: '$font-size.button-18.bold',
      name: 'Button 18',
      size: 18,
      rem: '1.125rem (18px)',
      weight: 'Bold',
      weightNum: 700,
      lh: '140% (25px)',
      usage: '메인 액션 버튼, 견적 핵심 본문 강조',
      sampleText: '견적 신청하기',
    },
    {
      tokenVar: '$font-size.body-18.regular',
      name: 'Body 18',
      size: 18,
      rem: '1.125rem (18px)',
      weight: 'Regular',
      weightNum: 400,
      lh: '150% (27px)',
      usage: '강조 본문 문구, 주요 안내 단락',
      sampleText: '포장이사 및 보관이사 전문 업체를 무료로 매칭해 드립니다.',
    },
    {
      tokenVar: '$font-size.body-16.bold',
      name: 'Body 16',
      size: 16,
      rem: '1rem (16px)',
      weight: 'Bold',
      weightNum: 700,
      lh: '150% (24px)',
      usage: '서브 버튼, 입력창 타이틀 라벨',
      sampleText: '출발지 주소 입력',
      isBaseText: true,
    },
    {
      tokenVar: '$font-size.body-16.regular',
      name: 'Body 16',
      size: 16,
      rem: '1rem (16px)',
      weight: 'Regular',
      weightNum: 400,
      lh: '150% (24px)',
      usage: '★ 고객향 기본 본문 텍스트 (Default Body), 인풋 입력 값, 상세 설명',
      sampleText: '작성 중인 출발지 및 일정 정보가 저장되지 않습니다.',
      isBaseText: true,
    },
    {
      tokenVar: '$font-size.sub-14.bold',
      name: 'Sub 14',
      size: 14,
      rem: '0.875rem (14px)',
      weight: 'Bold',
      weightNum: 700,
      lh: '140% (20px)',
      usage: '필터 칩, 카드 내부 소라벨',
      sampleText: '가정이사 (포장)',
    },
    {
      tokenVar: '$font-size.sub-14.regular',
      name: 'Sub 14',
      size: 14,
      rem: '0.875rem (14px)',
      weight: 'Regular',
      weightNum: 400,
      lh: '140% (20px)',
      usage: '보조 설명문, 입력 힌트 안내, 에러 메시지',
      sampleText: '주소 검색 Tip: 도로명 + 건물번호 (예: 테헤란로7길 12)',
    },
    {
      tokenVar: '$font-size.caption-12.bold',
      name: 'Caption 12',
      size: 12,
      rem: '0.75rem (12px)',
      weight: 'Bold',
      weightNum: 700,
      lh: '130% (16px)',
      usage: '상태 뱃지, 필수 입력 표시',
      sampleText: 'D-3 필수',
    },
    {
      tokenVar: '$font-size.caption-12.regular',
      name: 'Caption 12',
      size: 12,
      rem: '0.75rem (12px)',
      weight: 'Regular',
      weightNum: 400,
      lh: '130% (16px)',
      usage: '각주, 약관 동의 문구, 날짜/시간',
      sampleText: '신청 정보는 전문 매니저 배정 용도로만 안전하게 활용됩니다.',
    },
  ];

  // 파트너향 타이포그래피 (DAISA_PARTNER_DESIGN_SYSTEM.md 기준: 7단계 스케일, 기본 18px, 12px 금지)
  const partnerSpecs: TypeRowProps[] = [
    {
      tokenVar: '$font-size.partner.display-32.bold',
      name: 'Display 32',
      size: 32,
      rem: '2rem (32px)',
      weight: 'Bold',
      weightNum: 700,
      lh: '140% (45px)',
      usage: '환영 메시지, 핵심 성과 지표, 메인 카운트',
      sampleText: '오늘 접수된 오더 48건',
    },
    {
      tokenVar: '$font-size.partner.display-32.regular',
      name: 'Display 32',
      size: 32,
      rem: '2rem (32px)',
      weight: 'Regular',
      weightNum: 400,
      lh: '140% (45px)',
      usage: '대형 숫자 및 데이터 지표',
      sampleText: '총 견적 금액 1,450,000원',
    },
    {
      tokenVar: '$font-size.partner.headline-28.bold',
      name: 'Headline 28',
      size: 28,
      rem: '1.75rem (28px)',
      weight: 'Bold',
      weightNum: 700,
      lh: '140% (39px)',
      usage: '대분류 페이지 메인 헤더, 대형 카드 타이틀',
      sampleText: '실시간 바로견적 오더 현황',
    },
    {
      tokenVar: '$font-size.partner.headline-28.regular',
      name: 'Headline 28',
      size: 28,
      rem: '1.75rem (28px)',
      weight: 'Regular',
      weightNum: 400,
      lh: '140% (39px)',
      usage: '페이지 서브 헤더 단락',
      sampleText: '도착지 및 작업 조건 세부 확인',
    },
    {
      tokenVar: '$font-size.partner.title-24.bold',
      name: 'Title 24',
      size: 24,
      rem: '1.5rem (24px)',
      weight: 'Bold',
      weightNum: 700,
      lh: '140% (34px)',
      usage: '섹션 타이틀, 확인 팝업 제목',
      sampleText: '견적 제출 전 최종 확인',
    },
    {
      tokenVar: '$font-size.partner.title-24.regular',
      name: 'Title 24',
      size: 24,
      rem: '1.5rem (24px)',
      weight: 'Regular',
      weightNum: 400,
      lh: '140% (34px)',
      usage: '그룹 안내 단락 타이틀',
      sampleText: '고객 요청 조건 및 화물 리스트',
    },
    {
      tokenVar: '$font-size.partner.sub-title-20.bold',
      name: 'Sub-Title 20',
      size: 20,
      rem: '1.25rem (20px)',
      weight: 'Bold',
      weightNum: 700,
      lh: '150% (30px)',
      usage: '모달 다이얼로그 타이틀 (node 9053:6921), 그룹 소제목',
      sampleText: '작성 중인 답변이 지워집니다',
    },
    {
      tokenVar: '$font-size.partner.sub-title-20.regular',
      name: 'Sub-Title 20',
      size: 20,
      rem: '1.25rem (20px)',
      weight: 'Regular',
      weightNum: 400,
      lh: '150% (30px)',
      usage: '컨테이너 그룹 소제목 설명',
      sampleText: '사다리차 진입 가능 여부 확인',
    },
    {
      tokenVar: '$font-size.partner.body-18.bold',
      name: 'Body 1 (★ 파트너 기본 본문)',
      size: 18,
      rem: '1.125rem (18px)',
      weight: 'Bold',
      weightNum: 700,
      lh: '150% (27px)',
      usage: '메인 CTA 버튼(56px/62px), 핵심 라벨, 견적 금액 강조',
      sampleText: '견적 제출하기 (56px r:6)',
      isBaseText: true,
    },
    {
      tokenVar: '$font-size.partner.body-18.regular',
      name: 'Body 1 (★ 파트너 기본 본문)',
      size: 18,
      rem: '1.125rem (18px)',
      weight: 'Regular',
      weightNum: 400,
      lh: '150% (27px)',
      usage: '★ 기사님 현장 기본 본문 텍스트 (Default Body), 인풋 입력 값, 모달 본문',
      sampleText: '현재 작성 중이던 내용은 지워지고, 새로운 답변이 생성됩니다.',
      isBaseText: true,
    },
    {
      tokenVar: '$font-size.partner.body-16.bold',
      name: 'Body 2',
      size: 16,
      rem: '1rem (16px)',
      weight: 'Bold',
      weightNum: 700,
      lh: '150% (24px)',
      usage: '보조 버튼(51px), 테이블 헤더, 데이터 라벨',
      sampleText: '상세 조회 (51px)',
    },
    {
      tokenVar: '$font-size.partner.body-16.regular',
      name: 'Body 2',
      size: 16,
      rem: '1rem (16px)',
      weight: 'Regular',
      weightNum: 400,
      lh: '150% (24px)',
      usage: '보조 설명문, 테이블 행 데이터',
      sampleText: '출발지: 서울시 강남구 테헤란로 123 (엘리베이터 이용)',
    },
    {
      tokenVar: '$font-size.partner.caption-14.bold',
      name: 'Caption 14',
      size: 14,
      rem: '0.875rem (14px)',
      weight: 'Bold',
      weightNum: 700,
      lh: '150% (21px)',
      usage: '현장 필터 칩, 상태 태그, 핵심 각주 메타',
      sampleText: '사다리차 필수',
      isMinimum: true,
    },
    {
      tokenVar: '$font-size.partner.caption-14.regular',
      name: 'Caption 14',
      size: 14,
      rem: '0.875rem (14px)',
      weight: 'Regular',
      weightNum: 400,
      lh: '150% (21px)',
      usage: '★ 파트너 최소 가독성 규격 (야외 채광 가독성 보장, 12px 이하 사용 절대 금지)',
      sampleText: '접수일시: 2026.11.06 14:30 | 배차 확정 후 2시간 내 방문 필수',
      isMinimum: true,
    },
  ];

  const currentSpecs = isPartner ? partnerSpecs : customerSpecs;

  return (
    <section id="typography" className="space-y-12">
      {/* Section Header */}
      <div className="border-b pb-6 border-[#E5E8EB]">
        <span className="text-[13px] font-bold text-[#3182F6]">
          {isPartner ? '파트너향 디자인시스템' : '스타일 파운데이션'}
        </span>
        <h2 className="text-[28px] md:text-[32px] font-extrabold tracking-tight mt-1 text-[#191F28]">
          {isPartner ? '파트너 타이포그래피 (기본 본문 18px)' : '타이포그래피 (Pretendard 짝수 6종)'}
        </h2>
        <p className="text-[15px] mt-2 leading-relaxed max-w-2xl text-[#4E5968]">
          {isPartner
            ? '피그마 공식 [파트너] 스타일가이드(loNec9fjF6nIEgkwxH7aSN) 기반 규격입니다. 현장 야외 시인성을 보장하기 위해 기본 본문은 18px로 대폭 상향되었으며, 최소 폰트는 14px로 12px 이하 사용이 엄격히 금지됩니다.'
            : '다이사 고객향 디자인시스템 공식 명세서(DAISA_DESIGN_SYSTEM.md) 기준입니다. Pretendard 단일 서체 및 12, 14, 16, 18, 20, 24px 짝수 6종 규칙을 엄격히 고정합니다.'}
        </p>
      </div>

      {/* Partner Notice Banner if in Partner Mode */}
      {isPartner && (
        <div className="bg-[#FFF8E6] border border-[#FFD666] rounded-[14px] p-5 flex items-start gap-3 shadow-sm">
          <Info className="w-5 h-5 text-[#D48806] shrink-0 mt-0.5" />
          <div className="text-[13px] text-[#4E5968] leading-relaxed">
            <div className="font-extrabold text-[#191F28] mb-0.5 flex items-center gap-2">
              <span>파트너 2대 핵심 폰트 규칙</span>
              <span className="text-[11px] font-bold px-2 py-0.2 rounded bg-[#1219F7] text-white">Non-Negotiable</span>
            </div>
            1) <strong>기본 본문 18px (Body 1)</strong>: 인풋 값, 주소, 모달 본문은 18px Bold/Regular<br />
            2) <strong>12px 이하 절대 금지</strong>: 현장 야외 작업 시 가독성 확보를 위해 최소 폰트는 <strong>14px(Caption)</strong> 고정
          </div>
        </div>
      )}

      {/* Live Sample Text Input Control */}
      <div className="rounded-[16px] border border-[#E5E8EB] p-4 flex flex-col md:flex-row items-center gap-3 bg-white shadow-2xs">
        <div className="flex items-center gap-2 shrink-0">
          <Type className="w-4 h-4 text-[#1219F7]" />
          <span className="text-[13px] font-bold text-[#191F28]">실시간 텍스트 미리보기:</span>
        </div>
        <input
          type="text"
          value={testText}
          onChange={(e) => setTestText(e.target.value)}
          placeholder="미리보기할 텍스트를 입력하세요"
          className="w-full px-3.5 py-2 rounded-[8px] text-[14px] font-medium border border-[#E5E8EB] bg-[#F9FAFB] text-[#191F28] outline-none focus:border-[#1219F7] focus:bg-white transition-colors"
        />
        {testText !== defaultSample && (
          <button
            type="button"
            onClick={() => setTestText(defaultSample)}
            className="shrink-0 text-[12px] font-bold px-3 py-1.5 rounded-[8px] border border-[#E5E8EB] bg-[#F2F4F6] text-[#6B7684] hover:text-[#191F28] transition-colors"
          >
            기본값 복원
          </button>
        )}
      </div>

      {/* Clean Minimalist Typography Table (Matching Uploaded Screenshot Style) */}
      <div className="space-y-3">
        <div className="border-t border-[#E5E8EB] divide-y divide-[#F2F4F6]">
          {/* Table Header */}
          <div className="flex items-center justify-between py-3 text-[13px] font-bold text-[#191F28]">
            <span>이름</span>
            <span>값</span>
          </div>

          {/* Rows */}
          {currentSpecs.map((item) => {
            const isCopied = copiedToken === item.tokenVar;

            return (
              <div
                key={item.tokenVar}
                onClick={() => handleCopy(item.tokenVar, `${item.size}px`)}
                className={`flex flex-col md:flex-row md:items-baseline justify-between py-4 transition-colors group select-none cursor-pointer hover:bg-[#F9FAFB] ${
                  item.isBaseText
                    ? 'bg-[#F4F8FF]/40'
                    : ''
                }`}
              >
                {/* Left Column: Token Variable, Notes & Rendered Sample Text */}
                <div className="space-y-1.5 pr-4 flex-1">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-[14px] font-mono font-bold text-[#191F28] group-hover:text-[#1219F7] transition-colors">
                      {item.tokenVar}
                    </span>
                    <span className="text-[13px] text-[#8B95A1] group-hover:text-[#1219F7] transition-colors font-sans">
                      ↗
                    </span>
                    <span className="text-[12px] font-semibold text-[#8B95A1] ml-1">
                      {item.weight} ({item.weightNum}) · lh: {item.lh}
                    </span>
                    {item.isBaseText && (
                      <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-[#1219F7] text-white">
                        기본 본문
                      </span>
                    )}
                    {item.isMinimum && (
                      <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-amber-100 text-amber-700 border border-amber-300">
                        최소 규격 (12px 금지)
                      </span>
                    )}
                  </div>

                  {/* Usage description note */}
                  <p className="text-[13px] text-[#6B7684]">
                    {item.usage}
                  </p>

                  {/* Visual Rendered Typography Sample */}
                  <div
                    style={{
                      fontSize: `${item.size}px`,
                      fontWeight: item.weightNum,
                      letterSpacing: '-1px',
                    }}
                    className="pt-1 text-[#191F28] break-keep transition-colors group-hover:text-[#1219F7]"
                  >
                    {testText}
                  </div>
                </div>

                {/* Right Column: Measurement Value (rem & px) */}
                <div className="flex items-center gap-2 shrink-0 pt-2 md:pt-0 font-mono text-[14px] text-[#191F28]">
                  <span className="text-[13px] text-[#8B95A1]">⌨</span>
                  {isCopied ? (
                    <span className="text-[12px] font-bold text-[#1219F7] flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" /> 복사됨
                    </span>
                  ) : (
                    <span className="group-hover:text-[#1219F7] transition-colors">
                      {item.rem}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
