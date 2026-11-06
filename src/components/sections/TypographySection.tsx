import React, { useState } from 'react';
import { Type } from 'lucide-react';

interface TypeRowProps {
  name: string;
  size: number;
  weight: 'Bold' | 'Regular';
  weightNum: number;
  lh: string;
  usage: string;
  sampleText: string;
}

export const TypographySection: React.FC = () => {
  const [testText, setTestText] = useState('내 주변 모든 이사업체 찾기, 다이사');

  const typeSpecs: TypeRowProps[] = [
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
      sampleText: '내 주변 모든 이사업체 찾기, 다이사',
    },
    {
      name: 'Title',
      size: 20,
      weight: 'Regular',
      weightNum: 400,
      lh: '150% (30px)',
      usage: '섹션 설명, 중간 타이틀 보조 텍스트',
      sampleText: '내 주변 모든 이사업체 찾기, 다이사',
    },
    {
      name: 'Sub-Title (Button 1)',
      size: 18,
      weight: 'Bold',
      weightNum: 700,
      lh: '150% (27px)',
      usage: '하단 고정 Floating CTA 버튼, 바텀시트 헤더',
      sampleText: '무료 방문견적 신청하기',
    },
    {
      name: 'Sub-Title',
      size: 18,
      weight: 'Regular',
      weightNum: 400,
      lh: '150% (27px)',
      usage: '강조 본문 문구, 카드 서브 타이틀',
      sampleText: '내 주변 모든 이사업체 찾기, 다이사',
    },
    {
      name: 'Body (Button 2)',
      size: 16,
      weight: 'Bold',
      weightNum: 700,
      lh: '150% (24px)',
      usage: 'Public 인컨텐츠 버튼, 본문 볼드 강조',
      sampleText: '견적서 제출하기 (312px)',
    },
    {
      name: 'Body',
      size: 16,
      weight: 'Regular',
      weightNum: 400,
      lh: '150% (24px)',
      usage: '일반 본문 기본 텍스트, 모달 본문 설명문',
      sampleText: '고객님의 안심 이사를 위해 전문 상담원이 배정됩니다.',
    },
    {
      name: 'Sub',
      size: 14,
      weight: 'Bold',
      weightNum: 700,
      lh: '150% (21px)',
      usage: '폼 입력 라벨, 탭 필터 텍스트, 소분류 제목',
      sampleText: '출발지 주소 입력',
    },
    {
      name: 'Sub',
      size: 14,
      weight: 'Regular',
      weightNum: 400,
      lh: '150% (21px)',
      usage: '폼 도움말 문구, 리스트 메타 정보',
      sampleText: '상세 동/호수는 방문 시 전달됩니다.',
    },
    {
      name: 'Caption',
      size: 12,
      weight: 'Bold',
      weightNum: 700,
      lh: '150% (18px)',
      usage: '상태 뱃지 레이블, 에러 피드백 문구',
      sampleText: '인증이 완료되었습니다',
    },
    {
      name: 'Caption',
      size: 12,
      weight: 'Regular',
      weightNum: 400,
      lh: '150% (18px)',
      usage: '하단 약관 링크, 유의사항 각주, 타임스탬프',
      sampleText: '접수일 기준 3영업일 이내 순차 연락',
    },
    {
      name: 'Micro Badge',
      size: 11,
      weight: 'Bold',
      weightNum: 700,
      lh: '130% (14px)',
      usage: '상태 뱃지, 카운트 배지 등 특수 배지 전용 예외 허용 (10px / 11px)',
      sampleText: 'N개 · 추천 · 신규',
    },
  ];

  return (
    <section id="typography" className="space-y-10">
      {/* Section Header */}
      <div className="border-b border-etc-03 pb-6">
        <span className="text-[13px] font-bold text-main-01">
          타이포그래피
        </span>
        <h2 className="text-[28px] font-extrabold text-text-01 tracking-da24 mt-1">
          서체 및 글꼴 규격
        </h2>
        <p className="text-[15px] text-text-03 mt-2 leading-relaxed max-w-2xl">
          Pretendard Bold (700) · Regular (400) 2개 두께만 사용합니다. 사이즈는 <strong>12 · 14 · 16 · 18 · 20 · 24</strong> 짝수 6개 기본 원칙이며, 뱃지(Badge) 제작 시에 한하여 예외적으로 <strong>10px 또는 11px</strong> 사용이 허용됩니다. 모든 텍스트에 <strong>자간 -1px (-0.01em)</strong>을 고정 적용합니다.
        </p>
      </div>

      {/* Typeface Family Card */}
      <div className="bg-white border border-[#EBEEF2] rounded-[20px] p-8 flex flex-col md:flex-row items-start md:items-center gap-8 shadow-soft">
        <div className="text-[88px] font-bold text-main-01 leading-none tracking-tighter select-none">
          다Aa
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <h3 className="text-[22px] font-extrabold text-text-01">Pretendard (프리텐다드)</h3>
            <span className="px-2.5 py-0.5 rounded-full text-[12px] font-bold bg-main-04 text-main-01">
              단일 서체
            </span>
          </div>
          <p className="text-[14px] text-text-03 leading-relaxed">
            한글과 라틴 문자 모두 최상의 가독성과 밸런스를 제공하는 산세리프 서체입니다. 다이사의 모든 프로덕트 화면에 단일하게 적용됩니다.
          </p>
          <div className="flex flex-wrap gap-2 pt-1 font-mono text-[12px]">
            <span className="px-2.5 py-1 rounded-[6px] bg-etc-04 text-text-02 font-medium">400 Regular</span>
            <span className="px-2.5 py-1 rounded-[6px] bg-etc-04 text-text-02 font-bold">700 Bold</span>
            <span className="px-2.5 py-1 rounded-[6px] bg-main-04 text-main-01 font-bold">Letter-spacing: -1px</span>
          </div>
        </div>
      </div>

      {/* Live Text Sandbox */}
      <div className="bg-white border border-[#EBEEF2] rounded-[16px] p-5 space-y-2 shadow-xs">
        <div className="flex items-center justify-between">
          <span className="text-[13px] font-bold text-text-02 flex items-center gap-1.5">
            <Type className="w-4 h-4 text-main-01" /> 타이포그래피 실시간 문구 테스트
          </span>
          <button
            onClick={() => setTestText('내 주변 모든 이사업체 찾기, 다이사')}
            className="text-[12px] text-text-04 hover:text-main-01 transition-colors"
          >
            기본값 복원
          </button>
        </div>
        <input
          type="text"
          value={testText}
          onChange={(e) => setTestText(e.target.value)}
          placeholder="테스트할 문구를 입력하세요"
          className="w-full h-[46px] px-3.5 rounded-[10px] bg-etc-04 border border-etc-02 text-[15px] text-text-01 outline-none focus:border-main-01 focus:bg-white transition-all"
        />
      </div>

      {/* Type Rows Table Panel */}
      <div className="bg-white border border-[#EBEEF2] rounded-[20px] divide-y divide-[#EBEEF2] shadow-soft overflow-hidden">
        {typeSpecs.map((spec, idx) => (
          <div key={idx} className="p-6 md:p-7 flex flex-col lg:flex-row lg:items-center justify-between gap-4 hover:bg-[#FAFBFD] transition-colors">
            {/* Meta Info */}
            <div className="w-full lg:w-[260px] shrink-0 space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-[15px] font-bold text-text-01">{spec.name}</span>
                <span className="text-[12px] font-mono px-2 py-0.5 rounded bg-etc-04 text-text-03 font-semibold">
                  {spec.size}px · {spec.weight}
                </span>
              </div>
              <div className="text-[12px] text-text-04 font-mono">
                LH: {spec.lh} · LS: -1px
              </div>
              <div className="text-[12px] text-text-03 pt-0.5">
                {spec.usage}
              </div>
            </div>

            {/* Rendered Text */}
            <div
              className="flex-1 text-text-01 tracking-da24 leading-snug break-keep"
              style={{
                fontSize: `${spec.size}px`,
                fontWeight: spec.weightNum,
              }}
            >
              {testText || spec.sampleText}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
