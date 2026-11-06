import React, { useState } from 'react';
import { Copy, Check, Info, ShieldCheck } from 'lucide-react';

export const WritingSection: React.FC<{ mode?: 'customer' | 'partner' }> = ({ mode = 'customer' }) => {
  const isDark = mode === 'partner';
  const [activeTab, setActiveTab] = useState<'all' | 'title' | 'desc' | 'notice' | 'button' | 'words' | 'format'>('all');
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const copy = (txt: string) => {
    navigator.clipboard.writeText(txt);
    setCopiedText(txt);
    setTimeout(() => setCopiedText(null), 1200);
  };

  const tabs = [
    { id: 'all', label: '전체 보기' },
    { id: 'title', label: '타이틀' },
    { id: 'desc', label: '설명' },
    { id: 'notice', label: '유의 사항 / 힌트' },
    { id: 'button', label: '버튼' },
    { id: 'words', label: '자주 쓰는 단어' },
    { id: 'format', label: '그 외 표기' },
  ];

  return (
    <section id="writing" className="space-y-10">
      {/* Section Header */}
      <div className={`border-b pb-6 ${isDark ? 'border-[#262F40]' : 'border-[#E5E8EB]'}`}>
        <span className={`text-[13px] font-bold ${isDark ? 'text-[#7075FA]' : 'text-[#3182F6]'}`}>
          {isDark ? '파트너 B2B 커뮤니케이션' : '다이사 / 위매치 공식 가이드'}
        </span>
        <h2 className={`text-[28px] md:text-[32px] font-extrabold tracking-tight mt-1 ${
          isDark ? 'text-white' : 'text-[#191F28]'
        }`}>
          {isDark ? '파트너 UX 라이팅 가이드 (B2B Writing Guide)' : 'UX 라이팅 가이드 (Writing Guide)'}
        </h2>
        <p className={`text-[15px] mt-2 leading-relaxed max-w-3xl ${
          isDark ? 'text-[#94A3B8]' : 'text-[#4E5968]'
        }`}>
          {isDark
            ? '다이사 파트너(기사님·시공업체) 서비스에서 신속하고 오차 없는 현장 업무 처리를 돕는 직관적이고 명확한 텍스트 및 지시어 표기 규칙입니다.'
            : '다이사(da24)와 위매치(wematch) 프로덕트 전반에서 고객과 소통할 때 일관된 브랜드 경험을 전달하기 위한 공식 텍스트 및 맞춤법 표기 규칙입니다.'}
        </p>
      </div>

      {/* Category Navigation Bar */}
      <div className={`flex flex-wrap items-center gap-1.5 p-1.5 rounded-[12px] w-fit border ${
        isDark ? 'bg-[#161B26] border-[#262F40]' : 'bg-[#F2F4F6] border-[#E5E8EB]/60'
      }`}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-3.5 py-1.5 rounded-[8px] text-[13px] transition-all select-none ${
              activeTab === tab.id
                ? isDark ? 'bg-[#1E2536] text-[#A5A8FC] font-bold shadow-xs border border-[#595EF9]/40' : 'bg-white text-[#191F28] font-bold shadow-2xs'
                : isDark ? 'text-[#94A3B8] hover:text-white' : 'text-[#6B7684] hover:text-[#191F28] font-medium'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* 1. 타이틀 (Title) */}
      {(activeTab === 'all' || activeTab === 'title') && (
        <div className={`border rounded-[20px] p-6 md:p-8 space-y-4 shadow-sm ${
          isDark ? 'bg-[#161B26] border-[#262F40]' : 'bg-white border-[#E5E8EB]'
        }`}>
          <div className={`border-b pb-3 ${isDark ? 'border-[#222A3A]' : 'border-[#F2F4F6]'}`}>
            <h3 className={`text-[18px] font-bold ${isDark ? 'text-white' : 'text-[#191F28]'}`}>1. 타이틀 (Title)</h3>
            <p className={`text-[13px] mt-0.5 ${isDark ? 'text-[#94A3B8]' : 'text-[#6B7684]'}`}>
              {isDark ? '간결하고 명확한 지시어 · ~해 주세요 종결' : '고객의 행동을 유도하는 명확하고 부드러운 청유형 종결'}
            </p>
          </div>
          <div className="space-y-3">
            {[
              { rule: '청유형 종결 어미', good: isDark ? '견적 제출 내역을 확인해 주세요' : '이사할 집의 주소를 검색해 주세요', bad: isDark ? '견적 확인하십시오 / 견적 확인' : '주소 입력', note: '명확하고 정중한 어조' },
              { rule: '마침표 미사용', good: isDark ? '출발지 작업 환경을 선택해 주세요' : '정확한 견적을 위해 이사 날짜를 선택해 주세요', bad: isDark ? '출발지 작업 환경을 선택해 주세요.' : '이사 날짜를 선택해 주세요.', note: '타이틀 끝에는 마침표(.)를 찍지 않음' },
            ].map((item, i) => (
              <div key={i} className={`p-4 rounded-[12px] border flex flex-col md:flex-row md:items-center justify-between gap-3 ${
                isDark ? 'bg-[#10141D] border-[#222A3A]' : 'bg-[#F9FAFB] border-[#E5E8EB]'
              }`}>
                <div className="space-y-1">
                  <span className={`text-[12px] font-bold px-2 py-0.5 rounded ${
                    isDark ? 'bg-[#1E2536] text-[#A5A8FC]' : 'bg-[#E8F3FF] text-[#1B64DA]'
                  }`}>{item.rule}</span>
                  <div className={`text-[14px] font-bold ${isDark ? 'text-white' : 'text-[#191F28]'}`}>권장: "{item.good}"</div>
                  <div className="text-[12px] text-red-400">지양: "{item.bad}"</div>
                </div>
                <div className={`text-[12px] ${isDark ? 'text-[#94A3B8]' : 'text-[#8B95A1]'}`}>{item.note}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 2. 버튼 (Button) */}
      {(activeTab === 'all' || activeTab === 'button') && (
        <div className={`border rounded-[20px] p-6 md:p-8 space-y-4 shadow-sm ${
          isDark ? 'bg-[#161B26] border-[#262F40]' : 'bg-white border-[#E5E8EB]'
        }`}>
          <div className={`border-b pb-3 ${isDark ? 'border-[#222A3A]' : 'border-[#F2F4F6]'}`}>
            <h3 className={`text-[18px] font-bold ${isDark ? 'text-white' : 'text-[#191F28]'}`}>2. 액션 버튼 (Button)</h3>
            <p className={`text-[13px] mt-0.5 ${isDark ? 'text-[#94A3B8]' : 'text-[#6B7684]'}`}>
              행동 지향적 '~하기' 종결 형태 고정
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {[
              { action: isDark ? '견적 제출' : '견적 신청', text: isDark ? '견적 제출하기' : '견적 신청하기', desc: '메인 CTA 권장 표기' },
              { action: '조건 변경', text: '조건 변경하기', desc: '옵션 수정 버튼' },
              { action: isDark ? '오더 수락' : '매칭 조회', text: isDark ? '오더 수락하기' : '업체 조회하기', desc: '주요 다음 단계' },
              { action: '닫기/취소', text: '취소', desc: '간결한 2글자 명사형' },
            ].map((btn, i) => (
              <div key={i} className={`p-4 rounded-[12px] border flex items-center justify-between ${
                isDark ? 'bg-[#10141D] border-[#222A3A]' : 'bg-[#F9FAFB] border-[#E5E8EB]'
              }`}>
                <div>
                  <div className={`text-[15px] font-bold ${isDark ? 'text-white' : 'text-[#191F28]'}`}>{btn.text}</div>
                  <div className={`text-[12px] ${isDark ? 'text-[#94A3B8]' : 'text-[#8B95A1]'}`}>{btn.desc}</div>
                </div>
                <button
                  type="button"
                  onClick={() => copy(btn.text)}
                  className={`text-[11px] font-bold px-2 py-1 rounded transition-colors ${
                    copiedText === btn.text
                      ? 'bg-emerald-950 text-emerald-300'
                      : isDark ? 'bg-[#1E2536] text-[#CBD5E1]' : 'bg-white border text-[#4E5968]'
                  }`}
                >
                  {copiedText === btn.text ? '복사됨' : '복사'}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. 자주 쓰는 단어 (Standard Words) */}
      {(activeTab === 'all' || activeTab === 'words') && (
        <div className={`border rounded-[20px] p-6 md:p-8 space-y-4 shadow-sm ${
          isDark ? 'bg-[#161B26] border-[#262F40]' : 'bg-white border-[#E5E8EB]'
        }`}>
          <div className={`border-b pb-3 ${isDark ? 'border-[#222A3A]' : 'border-[#F2F4F6]'}`}>
            <h3 className={`text-[18px] font-bold ${isDark ? 'text-white' : 'text-[#191F28]'}`}>3. 자주 쓰는 공식 용어 7종</h3>
            <p className={`text-[13px] mt-0.5 ${isDark ? 'text-[#94A3B8]' : 'text-[#6B7684]'}`}>
              혼용하기 쉬운 단어의 공식 단일 표준 표기
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {[
              { word: '포장이사', ban: '포장 이사 (띄어쓰기 금지)', desc: '단일 명사로 붙여쓰기' },
              { word: '보관이사', ban: '보관 이사', desc: '단일 명사로 붙여쓰기' },
              { word: '사다리차', ban: '사다리 차', desc: '단일 명사로 붙여쓰기' },
              { word: '원룸이사', ban: '원룸 이사 / 소형이사', desc: '공식 서비스 명칭' },
              { word: '견적 신청', ban: '견적신청 / 견적요청', desc: '신청은 띄어쓰기 적용' },
              { word: '출발지 / 도착지', ban: '보내는 곳 / 받는 곳', desc: '전문 용어 통일' },
            ].map((w, i) => (
              <div key={i} className={`p-4 rounded-[12px] border space-y-1.5 ${
                isDark ? 'bg-[#10141D] border-[#222A3A]' : 'bg-[#F9FAFB] border-[#E5E8EB]'
              }`}>
                <div className={`text-[15px] font-extrabold ${isDark ? 'text-[#A5A8FC]' : 'text-[#1219F7]'}`}>
                  {w.word}
                </div>
                <div className="text-[12px] text-red-400">지양: {w.ban}</div>
                <div className={`text-[11px] ${isDark ? 'text-[#94A3B8]' : 'text-[#8B95A1]'}`}>{w.desc}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
