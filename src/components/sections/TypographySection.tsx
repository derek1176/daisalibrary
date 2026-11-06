import React, { useState } from 'react';
import { Type, Copy, Check, CheckCircle2, AlertOctagon, Info } from 'lucide-react';

interface TypeRowProps {
  name: string;
  size: number;
  weight: 'Bold' | 'Regular';
  weightNum: number;
  lh: string;
  usage: string;
  sampleText: string;
  isBaseText?: boolean;
  isMinimum?: boolean;
}

export const TypographySection: React.FC<{ mode?: 'customer' | 'partner' }> = ({ mode = 'customer' }) => {
  const isDark = mode === 'partner';
  const defaultSample = isDark
    ? '다이사 파트너 현장 견적 및 오더 접수 시스템'
    : '내 주변 모든 이사업체 찾기, 다이사';

  const [testText, setTestText] = useState(defaultSample);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const customerSpecs: TypeRowProps[] = [
    {
      name: 'Headline',
      size: 24,
      weight: 'Bold',
      weightNum: 700,
      lh: '140% (34px)',
      usage: '페이지 메인 대타이틀, 주요 완료 안내문',
      sampleText: '내 주변 모든 이사업체 찾기, 다이사',
    },
    {
      name: 'Headline',
      size: 24,
      weight: 'Regular',
      weightNum: 400,
      lh: '140% (34px)',
      usage: '대형 안내문 서브 헤드라인',
      sampleText: '내 주변 모든 이사업체 찾기, 다이사',
    },
    {
      name: 'Title',
      size: 20,
      weight: 'Bold',
      weightNum: 700,
      lh: '150% (30px)',
      usage: '섹션 타이틀, 팝업 및 모달 제목',
      sampleText: '이사 견적 신청을 취소하시겠습니까?',
    },
    {
      name: 'Title',
      size: 20,
      weight: 'Regular',
      weightNum: 400,
      lh: '150% (30px)',
      usage: '중형 부제목, 옵션 그룹 헤더',
      sampleText: '이사 견적 신청을 취소하시겠습니까?',
    },
    {
      name: 'Body (Button 1)',
      size: 18,
      weight: 'Bold',
      weightNum: 700,
      lh: '150% (27px)',
      usage: '메인 액션 버튼(56px), 핵심 본문 강조',
      sampleText: '견적 신청하기',
    },
    {
      name: 'Body',
      size: 18,
      weight: 'Regular',
      weightNum: 400,
      lh: '150% (27px)',
      usage: '강조 본문 문구, 주요 안내 단락',
      sampleText: '포장이사 및 보관이사 전문 업체를 무료로 매칭해 드립니다.',
    },
    {
      name: 'Body 1 (Button 2)',
      size: 16,
      weight: 'Bold',
      weightNum: 700,
      lh: '150% (24px)',
      usage: '서브 버튼, 입력창 타이틀 라벨',
      sampleText: '출발지 주소 입력',
    },
    {
      name: 'Body 1',
      size: 16,
      weight: 'Regular',
      weightNum: 400,
      lh: '150% (24px)',
      usage: '기본 본문 텍스트, 인풋 입력 값, 상세 설명',
      sampleText: '작성 중인 출발지 및 일정 정보가 저장되지 않습니다.',
    },
    {
      name: 'Body 2',
      size: 14,
      weight: 'Bold',
      weightNum: 700,
      lh: '150% (21px)',
      usage: '인풋 필드 라벨 타이틀, 상태 뱃지 텍스트',
      sampleText: '이사 예정일 필수 선택',
    },
    {
      name: 'Body 2',
      size: 14,
      weight: 'Regular',
      weightNum: 400,
      lh: '150% (21px)',
      usage: '하단 에러 피드백, 보조 설명 힌트',
      sampleText: '올바른 건물명을 입력해 주세요.',
    },
    {
      name: 'Caption',
      size: 12,
      weight: 'Bold',
      weightNum: 700,
      lh: '150% (18px)',
      usage: '카드 보조 라벨, 날짜 메타 정보',
      sampleText: '2026.04.15 (수)',
    },
    {
      name: 'Caption',
      size: 12,
      weight: 'Regular',
      weightNum: 400,
      lh: '150% (18px)',
      usage: '각주, 약관 동의 세부 안내, 부가 정보',
      sampleText: '개인정보 제3자 제공 동의 시 매칭 업체에게만 전달됩니다.',
    },
  ];

  const partnerSpecs: TypeRowProps[] = [
    {
      name: 'Display',
      size: 32,
      weight: 'Bold',
      weightNum: 700,
      lh: '140% (45px)',
      usage: '대형 오더 현황 대시보드 메인 카운트, 핵심 요약 수치',
      sampleText: '접수된 신규 오더 32건',
    },
    {
      name: 'Headline',
      size: 28,
      weight: 'Bold',
      weightNum: 700,
      lh: '140% (39px)',
      usage: '파트너 메인 헤드라인, 오더 상태 대제목',
      sampleText: 'CPQ 바로견적 실시간 접수',
    },
    {
      name: 'Title',
      size: 24,
      weight: 'Bold',
      weightNum: 700,
      lh: '140% (34px)',
      usage: '견적 상세 오더 타이틀, 모달 및 팝업 대제목',
      sampleText: '이사 화물 내역 및 작업 조건 확인',
    },
    {
      name: 'Title',
      size: 24,
      weight: 'Regular',
      weightNum: 400,
      lh: '140% (34px)',
      usage: '견적 오더 서브 타이틀 설명',
      sampleText: '이사 화물 내역 및 작업 조건 확인',
    },
    {
      name: 'Sub-Title',
      size: 20,
      weight: 'Bold',
      weightNum: 700,
      lh: '150% (30px)',
      usage: '카드 섹션 헤더, 오더 폼 그룹 명칭',
      sampleText: '출발지 및 도착지 작업 환경',
    },
    {
      name: 'Sub-Title',
      size: 20,
      weight: 'Regular',
      weightNum: 400,
      lh: '150% (30px)',
      usage: '옵션 그룹 안내, 작업자 보조 설명',
      sampleText: '사다리차 진입 가능 여부 확인',
    },
    {
      name: 'Body 1 (★ B2B 기본 본문)',
      size: 18,
      weight: 'Bold',
      weightNum: 700,
      lh: '150% (27px)',
      usage: '메인 CTA 버튼(62px), 핵심 라벨, 견적 금액 강조',
      sampleText: '견적 제출하기 (62px r:6)',
      isBaseText: true,
    },
    {
      name: 'Body 1 (★ B2B 기본 본문)',
      size: 18,
      weight: 'Regular',
      weightNum: 400,
      lh: '150% (27px)',
      usage: '★ 기사님 현장 기본 본문 텍스트 (Default Body Text), 인풋 입력 값',
      sampleText: '서울시 강남구 테헤란로 123 (역삼동 820)',
      isBaseText: true,
    },
    {
      name: 'Body 2',
      size: 16,
      weight: 'Bold',
      weightNum: 700,
      lh: '150% (24px)',
      usage: '서브 버튼(51px), 탭 메뉴, 보조 강조',
      sampleText: '상세 조건 변경',
    },
    {
      name: 'Body 2',
      size: 16,
      weight: 'Regular',
      weightNum: 400,
      lh: '150% (24px)',
      usage: '인풋 라벨 설명, 오더 세부 옵션 리스트',
      sampleText: '엘리베이터 사용 가능 / 계단 작업 없음',
    },
    {
      name: 'Caption (★ 최소 폰트 규격)',
      size: 14,
      weight: 'Bold',
      weightNum: 700,
      lh: '150% (21px)',
      usage: '상태 뱃지, 필수 입력 표시, 에러 안내문',
      sampleText: '필수 입력 항목입니다',
      isMinimum: true,
    },
    {
      name: 'Caption (★ 최소 폰트 규격)',
      size: 14,
      weight: 'Regular',
      weightNum: 400,
      lh: '150% (21px)',
      usage: '★ 파트너 UI 최소 폰트 규격 (12px 이하 사용 절대 금지)',
      sampleText: '견적 제출 후 24시간 내 고객과 전화 상담이 진행됩니다.',
      isMinimum: true,
    },
  ];

  const typeSpecs = isDark ? partnerSpecs : customerSpecs;

  const copyCode = (spec: TypeRowProps, idx: number) => {
    const code = `text-[${spec.size}px] font-[${spec.weightNum}] leading-[${spec.lh.split(' ')[0]}]`;
    navigator.clipboard.writeText(code);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 1200);
  };

  return (
    <section id="typography" className="space-y-10">
      {/* Section Header */}
      <div className={`border-b pb-6 ${isDark ? 'border-[#262F40]' : 'border-[#E5E8EB]'}`}>
        <span className={`text-[13px] font-bold ${isDark ? 'text-[#7075FA]' : 'text-[#3182F6]'}`}>
          {isDark ? '파트너 B2B 타이포그래피 파운데이션' : '타이포그래피'}
        </span>
        <h2 className={`text-[28px] md:text-[32px] font-extrabold tracking-tight mt-1 ${
          isDark ? 'text-white' : 'text-[#191F28]'
        }`}>
          {isDark ? '파트너 타이포그래피 (Partner Typography)' : '타이포그래피 시스템 (Typography)'}
        </h2>
        <p className={`text-[15px] mt-2 leading-relaxed max-w-2xl ${
          isDark ? 'text-[#94A3B8]' : 'text-[#4E5968]'
        }`}>
          {isDark
            ? '피그마 [파트너] 스타일가이드(loNec9fjF6nIEgkwxH7aSN) 공식 규격입니다. 현장 기사님의 시인성을 위해 기본 본문은 18px(Body 1)이며, 14px 캡션이 최소 폰트입니다 (12px 이하 사용 엄격 금지).'
            : '다이사 서비스의 표준 타이포그래피 체계입니다. 서체는 Pretendard 단일 서체만을 사용하며, 짝수 6종 크기(12, 14, 16, 18, 20, 24px)와 자간 -1px 고정 룰을 엄격히 준수합니다.'}
        </p>
      </div>

      {/* Critical Rule Banner for Partner */}
      {isDark && (
        <div className="bg-[#161B26] border border-[#595EF9]/40 rounded-[14px] p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-[8px] bg-[#595EF9]/20 border border-[#595EF9]/40 flex items-center justify-center text-[#7075FA] shrink-0">
              <Info className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[15px] font-extrabold text-white flex items-center gap-2">
                <span>파트너 B2B 2대 핵심 폰트 규칙</span>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-[#595EF9] text-white">Non-Negotiable</span>
              </div>
              <p className="text-[13px] text-[#94A3B8] mt-0.5">
                1) <strong>기본 본문 18px</strong>: 인풋 값, 주소, 화물 내역 기본 텍스트는 18px Bold/Regular<br />
                2) <strong>12px 이하 절대 금지</strong>: 현장 야외 작업 시 가독성 확보를 위해 최소 폰트는 <strong>14px(Caption)</strong> 고정
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Interactive Live Playground Bar */}
      <div className={`rounded-[16px] border p-4 flex flex-col md:flex-row items-center gap-3 ${
        isDark ? 'bg-[#161B26] border-[#262F40]' : 'bg-white border-[#E5E8EB]'
      }`}>
        <div className="flex items-center gap-2 shrink-0">
          <Type className={`w-4 h-4 ${isDark ? 'text-[#7075FA]' : 'text-[#3182F6]'}`} />
          <span className={`text-[13px] font-bold ${isDark ? 'text-white' : 'text-[#191F28]'}`}>실시간 텍스트 미리보기:</span>
        </div>
        <input
          type="text"
          value={testText}
          onChange={(e) => setTestText(e.target.value)}
          placeholder="미리보기할 텍스트를 입력하세요"
          className={`w-full px-3.5 py-2 rounded-[8px] text-[14px] font-medium border outline-none ${
            isDark
              ? 'bg-[#10141D] border-[#2B3548] text-white focus:border-[#595EF9]'
              : 'bg-[#F9FAFB] border-[#E5E8EB] text-[#191F28] focus:border-[#3182F6]'
          }`}
        />
        {testText !== defaultSample && (
          <button
            type="button"
            onClick={() => setTestText(defaultSample)}
            className={`shrink-0 text-[12px] font-bold px-3 py-1.5 rounded-[8px] border transition-colors ${
              isDark
                ? 'bg-[#1E2536] text-[#94A3B8] hover:text-white border-[#3A4560]'
                : 'bg-[#F2F4F6] text-[#6B7684] hover:text-[#191F28] border-[#E5E8EB]'
            }`}
          >
            초기화
          </button>
        )}
      </div>

      {/* Spec Table Cards */}
      <div className="space-y-3">
        {typeSpecs.map((spec, idx) => {
          return (
            <div
              key={idx}
              className={`rounded-[16px] border p-5 transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-5 ${
                spec.isBaseText
                  ? isDark
                    ? 'bg-[#182030] border-[#595EF9] shadow-[0_4px_20px_rgba(89,94,249,0.2)]'
                    : 'bg-[#F4F8FF] border-[#3182F6] shadow-sm'
                  : isDark
                  ? 'bg-[#161B26] border-[#262F40] hover:border-[#3B475E]'
                  : 'bg-white border-[#E5E8EB] hover:border-[#3182F6]/50 shadow-2xs'
              }`}
            >
              {/* Left Column: Spec Meta Info */}
              <div className="w-full lg:w-[280px] shrink-0 space-y-1.5">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className={`text-[15px] font-black tracking-tight ${
                    isDark ? 'text-white' : 'text-[#191F28]'
                  }`}>
                    {spec.name}
                  </span>
                  <span className={`text-[12px] font-bold px-2 py-0.5 rounded-[4px] font-mono ${
                    spec.weight === 'Bold'
                      ? isDark ? 'bg-[#595EF9]/30 text-[#A5A8FC]' : 'bg-[#E8F3FF] text-[#1B64DA]'
                      : isDark ? 'bg-[#222A3B] text-[#94A3B8]' : 'bg-[#F2F4F6] text-[#6B7684]'
                  }`}>
                    {spec.weight} ({spec.weightNum})
                  </span>
                  {spec.isBaseText && (
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#1219F7] text-white">
                      기본 본문
                    </span>
                  )}
                  {spec.isMinimum && (
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">
                      최소 규격
                    </span>
                  )}
                </div>

                <div className={`text-[12px] font-mono flex items-center gap-3 ${
                  isDark ? 'text-[#94A3B8]' : 'text-[#8B95A1]'
                }`}>
                  <span>Size: <strong className={isDark ? 'text-white' : 'text-[#191F28]'}>{spec.size}px</strong></span>
                  <span>•</span>
                  <span>LH: {spec.lh}</span>
                </div>

                <p className={`text-[12px] leading-relaxed line-clamp-2 ${
                  isDark ? 'text-[#94A3B8]' : 'text-[#6B7684]'
                }`}>
                  {spec.usage}
                </p>
              </div>

              {/* Center Column: Live Sample Render */}
              <div className="flex-1 min-w-0 py-1">
                <div
                  style={{
                    fontSize: `${spec.size}px`,
                    fontWeight: spec.weightNum,
                    letterSpacing: '-1px',
                  }}
                  className={`truncate leading-snug tracking-tight ${
                    isDark ? 'text-[#F3F4F6]' : 'text-[#191F28]'
                  }`}
                >
                  {testText}
                </div>
              </div>

              {/* Right Column: Copy Tailwind Helper */}
              <div className="shrink-0 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => copyCode(spec, idx)}
                  className={`text-[12px] font-bold px-3 py-1.5 rounded-[8px] flex items-center gap-1.5 transition-colors ${
                    copiedIndex === idx
                      ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                      : isDark
                      ? 'bg-[#1E2536] text-[#CBD5E1] hover:bg-[#595EF9]/30 hover:text-white border border-[#3A4560]'
                      : 'bg-[#F2F4F6] text-[#4E5968] hover:bg-[#E8F3FF] hover:text-[#1219F7]'
                  }`}
                >
                  {copiedIndex === idx ? (
                    <>
                      <Check className="w-3.5 h-3.5" /> 복사됨
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" /> 코드 복사
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
