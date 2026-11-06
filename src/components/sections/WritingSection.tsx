import React, { useState } from 'react';
import { Check, X, Sparkles, MessageSquare, AlertCircle, HelpCircle } from 'lucide-react';

export const WritingSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'button' | 'error' | 'modal'>('all');

  const writingRules = [
    {
      category: 'button',
      label: '버튼 (CTA)',
      bad: '확인 / 완료',
      good: '방문견적 신청하기 / 다음 단계로',
      reason: '모호한 명사형 대신 사용자가 누른 후 어떤 일이 일어나는지 명확한 동사형으로 표현합니다.',
    },
    {
      category: 'button',
      label: '버튼 (부호)',
      bad: '신청하기! / 확인하기.',
      good: '신청하기 / 확인하기',
      reason: '버튼 레이블에는 마침표(.)나 느낌표(!) 등의 문장 부호를 일절 사용하지 않습니다.',
    },
    {
      category: 'error',
      label: '에러 메시지',
      bad: '잘못된 입력입니다.',
      good: '정확한 도로명 주소를 2글자 이상 입력해주세요',
      reason: '단순 비난이나 모호한 오류 알림 대신, 사용자가 지금 당장 취해야 할 올바른 행동을 안내합니다.',
    },
    {
      category: 'error',
      label: '에러 피드백',
      bad: '인증 실패!',
      good: '인증번호가 일치하지 않습니다. 다시 입력해주세요',
      reason: '느낌표를 지양하고 정중한 설명과 구체적 재시도 가이드를 함께 제공합니다.',
    },
    {
      category: 'modal',
      label: '모달 다이얼로그',
      bad: '취소 확인 안내',
      good: '방문견적 신청을 취소할까요?',
      reason: '모달 타이틀은 사용자가 판단해야 하는 질문형으로 직관적이게 구성합니다.',
    },
    {
      category: 'modal',
      label: '모달 본문 설명',
      bad: '취소하시면 불이익이 발생합니다.',
      good: '작성 중인 이사 정보와 요청 사항이 모두 초기화돼요',
      reason: '위협적인 문구 대신 사용자 관점에서 실제로 발생하는 상태 변화를 친절하게 설명합니다.',
    },
  ];

  const filteredRules = activeFilter === 'all'
    ? writingRules
    : writingRules.filter((r) => r.category === activeFilter);

  return (
    <section id="writing" className="space-y-12">
      {/* Section Header */}
      <div className="border-b border-etc-03 pb-6">
        <span className="text-[13px] font-bold text-main-01">
          보이스앤톤 & UX 라이팅
        </span>
        <h2 className="text-[28px] font-extrabold text-text-01 tracking-da24 mt-1">
          UX 라이팅 가이드 (Writing Guide)
        </h2>
        <p className="text-[15px] text-text-03 mt-2 leading-relaxed max-w-2xl">
          다이사(da24)와 위매치(wematch) 프로덕트 전반에서 고객에게 신뢰와 명확성을 전달하기 위한 공식 텍스트 작성 규칙입니다.
          AI 에이전트와 메이커는 UI 문구를 작성할 때 아래 4대 보이스앤톤과 표기법을 준수합니다.
        </p>
      </div>

      {/* 4 Core Voice & Tone Principles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white border border-[#EBEEF2] rounded-[18px] p-5 shadow-soft space-y-2">
          <div className="w-8 h-8 rounded-[8px] bg-main-04 text-main-01 flex items-center justify-center font-bold text-[14px]">
            01
          </div>
          <h3 className="text-[16px] font-bold text-text-01">명확성 (Clear)</h3>
          <p className="text-[13px] text-text-03 leading-relaxed">
            모호한 은유나 전문 용어 대신, 사용자가 다음 행동을 즉시 이해할 수 있는 직관적인 단어를 사용합니다.
          </p>
        </div>

        <div className="bg-white border border-[#EBEEF2] rounded-[18px] p-5 shadow-soft space-y-2">
          <div className="w-8 h-8 rounded-[8px] bg-main-04 text-main-01 flex items-center justify-center font-bold text-[14px]">
            02
          </div>
          <h3 className="text-[16px] font-bold text-text-01">간결성 (Concise)</h3>
          <p className="text-[13px] text-text-03 leading-relaxed">
            군더더기 수식어를 덜어내고, 한 문장에는 오직 한 가지 핵심 메시지만 담아 빠르게 읽히도록 합니다.
          </p>
        </div>

        <div className="bg-white border border-[#EBEEF2] rounded-[18px] p-5 shadow-soft space-y-2">
          <div className="w-8 h-8 rounded-[8px] bg-main-04 text-main-01 flex items-center justify-center font-bold text-[14px]">
            03
          </div>
          <h3 className="text-[16px] font-bold text-text-01">친근한 신뢰 (Trust)</h3>
          <p className="text-[13px] text-text-03 leading-relaxed">
            공손하고 따뜻한 어조(<code>~해요</code>, <code>~해주세요</code>)로 신뢰감을 주되, 지나친 유행어는 지양합니다.
          </p>
        </div>

        <div className="bg-white border border-[#EBEEF2] rounded-[18px] p-5 shadow-soft space-y-2">
          <div className="w-8 h-8 rounded-[8px] bg-main-04 text-main-01 flex items-center justify-center font-bold text-[14px]">
            04
          </div>
          <h3 className="text-[16px] font-bold text-text-01">행동 지향 (Action)</h3>
          <p className="text-[13px] text-text-03 leading-relaxed">
            부정형 금지(<code>~하지 마세요</code>) 대신, 사용자가 취할 수 있는 긍정적인 해결책을 안내합니다.
          </p>
        </div>
      </div>

      {/* Punctuation Rules Card */}
      <div className="bg-white border border-[#EBEEF2] rounded-[20px] p-6 md:p-8 shadow-soft space-y-5">
        <h3 className="text-[18px] font-bold text-text-01 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-main-01" />
          문장 부호 및 표기 규칙 (Punctuation)
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
          <div className="p-4 bg-etc-04 rounded-[12px] border border-etc-03 space-y-2">
            <span className="text-[12px] font-bold text-main-01">마침표 (.)</span>
            <h4 className="text-[14px] font-bold text-text-01">버튼/타이틀에는 생략</h4>
            <p className="text-[12px] text-text-03 leading-relaxed">
              버튼, 탭, 인풋 라벨, 모달 제목에는 마침표를 붙이지 않습니다. 온전한 서술문(2줄 이상의 본문)에만 마침표를 사용합니다.
            </p>
          </div>

          <div className="p-4 bg-etc-04 rounded-[12px] border border-etc-03 space-y-2">
            <span className="text-[12px] font-bold text-main-01">물음표 (?)</span>
            <h4 className="text-[14px] font-bold text-text-01">질문형 모달에 사용</h4>
            <p className="text-[12px] text-text-03 leading-relaxed">
              사용자에게 판단과 결정을 되묻는 얼럿/모달 다이얼로그의 타이틀에 적극적으로 물음표를 사용하여 질문임을 명시합니다.
            </p>
          </div>

          <div className="p-4 bg-etc-04 rounded-[12px] border border-etc-03 space-y-2">
            <span className="text-[12px] font-bold text-main-01">느낌표 (!)</span>
            <h4 className="text-[14px] font-bold text-text-01">원칙적 사용 지양</h4>
            <p className="text-[12px] text-text-03 leading-relaxed">
              에러나 경고에 느낌표를 쓰면 위압감을 줄 수 있습니다. 축하 이벤트나 프로모션 강조 외에는 느낌표 사용을 지양합니다.
            </p>
          </div>
        </div>
      </div>

      {/* DO vs DON'T Showcase */}
      <div className="bg-white border border-[#EBEEF2] rounded-[20px] p-6 md:p-8 shadow-soft space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-etc-03 pb-4">
          <div>
            <h3 className="text-[18px] font-bold text-text-01">
              실무 라이팅 DO & DON'T 비교
            </h3>
            <p className="text-[13px] text-text-03 mt-0.5">
              실제 다이사 UI 컴포넌트에 적용되는 올바른 카피라이팅 예시입니다.
            </p>
          </div>

          <div className="flex items-center gap-1.5 bg-etc-04 p-1 rounded-[10px] border border-etc-02 text-[12px]">
            {(['all', 'button', 'error', 'modal'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3 py-1 rounded-[7px] font-bold capitalize transition-colors ${
                  activeFilter === filter
                    ? 'bg-white text-main-01 shadow-2xs'
                    : 'text-text-03 hover:text-text-01'
                }`}
              >
                {filter === 'all' ? '전체' : filter === 'button' ? '버튼' : filter === 'error' ? '에러' : '모달'}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {filteredRules.map((r, idx) => (
            <div
              key={idx}
              className="p-4 rounded-[14px] border border-etc-02 bg-[#FAFBFD] space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-main-04 text-main-01">
                  {r.label}
                </span>
                <span className="text-[11px] text-text-04">가이드 수칙</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[13px]">
                {/* DON'T */}
                <div className="p-3 bg-rose-50/60 rounded-[10px] border border-rose-200/60 flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-rose-500 text-white flex items-center justify-center shrink-0 mt-0.5 text-[11px] font-bold">
                    ✕
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-rose-600 block">DON'T</span>
                    <span className="font-semibold text-text-01 line-through decoration-rose-400">{r.bad}</span>
                  </div>
                </div>

                {/* DO */}
                <div className="p-3 bg-emerald-50/60 rounded-[10px] border border-emerald-200/60 flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5 text-[11px] font-bold">
                    ✓
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-emerald-700 block">DO</span>
                    <span className="font-bold text-text-01">{r.good}</span>
                  </div>
                </div>
              </div>

              <p className="text-[12px] text-text-03 leading-relaxed pl-1">
                <strong>이유:</strong> {r.reason}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
