import React, { useState } from 'react';
import { Copy, Check, Info } from 'lucide-react';

export const WritingSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'title' | 'desc' | 'notice' | 'button' | 'words' | 'format'>('all');
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const copy = (txt: string) => {
    navigator.clipboard.writeText(txt);
    setCopiedText(txt);
    setTimeout(() => setCopiedText(null), 1200);
  };

  return (
    <section id="writing" className="space-y-10">
      {/* Section Header */}
      <div className="border-b border-etc-03 pb-6">
        <span className="text-[13px] font-bold text-main-01">
          다이사 / 위매치 공식 가이드
        </span>
        <h2 className="text-[28px] font-extrabold text-text-01 tracking-da24 mt-1">
          UX 라이팅 가이드 (Writing Guide)
        </h2>
        <p className="text-[15px] text-text-03 mt-2 leading-relaxed max-w-2xl">
          다이사(da24)와 위매치(wematch) 프로덕트 전반에서 고객과 소통할 때 일관된 브랜드 경험을 전달하기 위한 공식 텍스트 및 맞춤법 표기 규칙입니다.
        </p>
      </div>

      {/* Category Navigation Bar */}
      <div className="flex flex-wrap items-center gap-1.5 bg-white p-1.5 rounded-[12px] border border-etc-02 shadow-2xs">
        {[
          { id: 'all', label: '전체 보기' },
          { id: 'title', label: '타이틀' },
          { id: 'desc', label: '설명' },
          { id: 'notice', label: '유의 사항 / 힌트' },
          { id: 'button', label: '버튼' },
          { id: 'words', label: '자주 쓰는 단어' },
          { id: 'format', label: '그 외 표기' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-3.5 py-1.5 rounded-[8px] text-[13px] font-bold transition-all ${
              activeTab === tab.id
                ? 'bg-main-01 text-white shadow-xs'
                : 'text-text-03 hover:text-text-01 hover:bg-etc-04'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* 1. 타이틀 (Title) */}
      {(activeTab === 'all' || activeTab === 'title') && (
        <div className="bg-white border border-[#EBEEF2] rounded-[20px] p-6 md:p-8 space-y-4 shadow-soft">
          <div className="border-b border-etc-03 pb-3">
            <h3 className="text-[18px] font-bold text-text-01">1. 타이틀 (Title)</h3>
            <p className="text-[13px] text-text-03 mt-0.5">
              화면 상단 제목 및 모달 타이틀은 <strong>[해요체]</strong>를 기본으로 쓰며, <strong>온점(마침표)을 절대 사용하지 않습니다</strong>.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-[13px] border-collapse">
              <thead>
                <tr className="border-b border-etc-03 text-text-04 text-[12px]">
                  <th className="py-2.5 px-3 w-[220px]">규칙</th>
                  <th className="py-2.5 px-3 w-[45%]">Do (올바른 표기)</th>
                  <th className="py-2.5 px-3 w-[45%]">Don't (지양 표기)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-etc-03 text-text-02">
                <tr className="hover:bg-etc-04/50">
                  <td className="py-3 px-3 font-bold text-text-01">[해요체] 기본 사용</td>
                  <td className="py-3 px-3">
                    <span className="inline-flex items-center gap-1.5 text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Do
                    </span>
                    <span className="ml-2 font-medium">출발지를 검색해 주세요</span>
                  </td>
                  <td className="py-3 px-3 text-text-04">
                    <span className="inline-flex items-center gap-1.5 text-rose-700 font-bold bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                      Don't
                    </span>
                    <span className="ml-2 line-through">출발지를 검색해 주십시오</span>
                  </td>
                </tr>
                <tr className="hover:bg-etc-04/50">
                  <td className="py-3 px-3 font-bold text-text-01">온점(.) 미사용</td>
                  <td className="py-3 px-3">
                    <span className="inline-flex items-center gap-1.5 text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Do
                    </span>
                    <span className="ml-2 font-medium">이사 업체를 찾는 중이에요</span>
                  </td>
                  <td className="py-3 px-3 text-text-04">
                    <span className="inline-flex items-center gap-1.5 text-rose-700 font-bold bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                      Don't
                    </span>
                    <span className="ml-2 line-through">이사업체를 찾는 중이에요.</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 2. 설명 (Description) */}
      {(activeTab === 'all' || activeTab === 'desc') && (
        <div className="bg-white border border-[#EBEEF2] rounded-[20px] p-6 md:p-8 space-y-4 shadow-soft">
          <div className="border-b border-etc-03 pb-3">
            <h3 className="text-[18px] font-bold text-text-01">2. 설명 (Description)</h3>
            <p className="text-[13px] text-text-03 mt-0.5">
              타이틀 하단의 본문 설명문은 <strong>[해요체]</strong>를 기본으로 쓰며, <strong>온점(마침표)을 사용</strong>합니다.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-[13px] border-collapse">
              <thead>
                <tr className="border-b border-etc-03 text-text-04 text-[12px]">
                  <th className="py-2.5 px-3 w-[220px]">규칙</th>
                  <th className="py-2.5 px-3 w-[45%]">Do (올바른 표기)</th>
                  <th className="py-2.5 px-3 w-[45%]">Don't (지양 표기)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-etc-03 text-text-02">
                <tr className="hover:bg-etc-04/50">
                  <td className="py-3 px-3 font-bold text-text-01">[해요체] 기본 사용</td>
                  <td className="py-3 px-3">
                    <span className="inline-flex items-center gap-1.5 text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Do
                    </span>
                    <span className="ml-2 font-medium">업체에게 모든걸 맡기세요!</span>
                  </td>
                  <td className="py-3 px-3 text-text-04">
                    <span className="inline-flex items-center gap-1.5 text-rose-700 font-bold bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                      Don't
                    </span>
                    <span className="ml-2 line-through">업체에게 모든걸 맡기십시오!</span>
                  </td>
                </tr>
                <tr className="hover:bg-etc-04/50">
                  <td className="py-3 px-3 font-bold text-text-01">온점(.) 사용</td>
                  <td className="py-3 px-3">
                    <span className="inline-flex items-center gap-1.5 text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Do
                    </span>
                    <span className="ml-2 font-medium">선택 후에도 업체와 조율이 가능해요.</span>
                  </td>
                  <td className="py-3 px-3 text-text-04">
                    <span className="inline-flex items-center gap-1.5 text-rose-700 font-bold bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                      Don't
                    </span>
                    <span className="ml-2 line-through">선택 후에도 업체와 조율이 가능합니다</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 3. 유의 사항, 힌트메시지 (Notice & Hint) */}
      {(activeTab === 'all' || activeTab === 'notice') && (
        <div className="bg-white border border-[#EBEEF2] rounded-[20px] p-6 md:p-8 space-y-4 shadow-soft">
          <div className="border-b border-etc-03 pb-3">
            <h3 className="text-[18px] font-bold text-text-01">3. 유의 사항, 힌트메시지</h3>
            <p className="text-[13px] text-text-03 mt-0.5">
              공식 안내, 약관, 유의 사항 문구는 <strong>[~입니다체]</strong>를 기본으로 쓰며, <strong>온점(마침표)을 사용</strong>합니다.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-[13px] border-collapse">
              <thead>
                <tr className="border-b border-etc-03 text-text-04 text-[12px]">
                  <th className="py-2.5 px-3 w-[220px]">규칙</th>
                  <th className="py-2.5 px-3 w-[45%]">Do (올바른 표기)</th>
                  <th className="py-2.5 px-3 w-[45%]">Don't (지양 표기)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-etc-03 text-text-02">
                <tr className="hover:bg-etc-04/50">
                  <td className="py-3 px-3 font-bold text-text-01">[~입니다체] 기본 사용</td>
                  <td className="py-3 px-3">
                    <span className="inline-flex items-center gap-1.5 text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Do
                    </span>
                    <span className="ml-2 font-medium">이벤트 신청은 이사 한 건 당 한 번만 가능합니다.</span>
                  </td>
                  <td className="py-3 px-3 text-text-04">
                    <span className="inline-flex items-center gap-1.5 text-rose-700 font-bold bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                      Don't
                    </span>
                    <span className="ml-2 line-through">이벤트 신청은 이사 한 건 당 한 번만 가능해요.</span>
                  </td>
                </tr>
                <tr className="hover:bg-etc-04/50">
                  <td className="py-3 px-3 font-bold text-text-01">온점(.) 사용</td>
                  <td className="py-3 px-3">
                    <span className="inline-flex items-center gap-1.5 text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Do
                    </span>
                    <span className="ml-2 font-medium">가정이사 업체 한정 이벤트입니다.</span>
                  </td>
                  <td className="py-3 px-3 text-text-04">
                    <span className="inline-flex items-center gap-1.5 text-rose-700 font-bold bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                      Don't
                    </span>
                    <span className="ml-2 line-through">가정이사 업체 한정 이벤트입니다</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 4. 버튼 (Button) */}
      {(activeTab === 'all' || activeTab === 'button') && (
        <div className="bg-white border border-[#EBEEF2] rounded-[20px] p-6 md:p-8 space-y-4 shadow-soft">
          <div className="border-b border-etc-03 pb-3">
            <h3 className="text-[18px] font-bold text-text-01">4. 버튼 (Button)</h3>
            <p className="text-[13px] text-text-03 mt-0.5">
              버튼은 클릭 시 어떤 일이 일어나는지 명확한 <strong>동사형 [~하기체]</strong>를 기본으로 사용합니다. 적용이 어렵거나 너무 길어지는 경우 명사형으로 끝냅니다.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-[13px] border-collapse">
              <thead>
                <tr className="border-b border-etc-03 text-text-04 text-[12px]">
                  <th className="py-2.5 px-3 w-[220px]">규칙</th>
                  <th className="py-2.5 px-3">Do (올바른 표기)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-etc-03 text-text-02">
                <tr className="hover:bg-etc-04/50">
                  <td className="py-3 px-3 font-bold text-text-01">[~하기체] 기본 사용</td>
                  <td className="py-3 px-3">
                    <span className="inline-flex items-center gap-1.5 text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Do
                    </span>
                    <span className="ml-2 font-medium">
                      <strong>설정하러 가기</strong>, <strong>자세히 보기</strong>, <strong>추천업체 바로 신청하기</strong>, <strong>견적 신청하기</strong>, <strong>계속하기</strong>
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-etc-04/50">
                  <td className="py-3 px-3 font-bold text-text-01">명사형 예외 종결</td>
                  <td className="py-3 px-3">
                    <span className="inline-flex items-center gap-1.5 text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Do
                    </span>
                    <span className="ml-2 font-medium">
                      [~하기체]가 적용되지 않거나 너무 길어지는 경우: <strong>신청 정보 확인 완료</strong>, <strong>고객 상태 변경</strong>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 5. 자주 쓰는 단어 표기 */}
      {(activeTab === 'all' || activeTab === 'words') && (
        <div className="bg-white border border-[#EBEEF2] rounded-[20px] p-6 md:p-8 space-y-4 shadow-soft">
          <div className="border-b border-etc-03 pb-3">
            <h3 className="text-[18px] font-bold text-text-01">5. 자주 쓰는 단어 표기</h3>
            <p className="text-[13px] text-text-03 mt-0.5">
              서비스 내에서 자주 쓰이는 핵심 도메인 용어의 공식 띄어쓰기 기준입니다.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-[13px] border-collapse">
              <thead>
                <tr className="border-b border-etc-03 text-text-04 text-[12px]">
                  <th className="py-2.5 px-3 w-[180px]">구분</th>
                  <th className="py-2.5 px-3 w-[45%]">Do (올바른 표기)</th>
                  <th className="py-2.5 px-3 w-[45%]">Don't (지양 표기)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-etc-03 text-text-02">
                {[
                  { cat: '1. 이사 종류', doText: '가정이사, 원룸이사, 사무실이사', dontText: '가정 이사, 원룸 이사, 사무실 이사' },
                  { cat: '2. 업체 종류', doText: '이사업체, 청소업체, 추천업체, 입주 청소업체', dontText: '이사 업체, 청소 업체' },
                  { cat: '3. 방문 견적 희망일', doText: '방문 견적 희망일', dontText: '방문견적 희망일' },
                  { cat: '4. 일시 정지', doText: '일시 정지', dontText: '일시정지' },
                  { cat: '5. 이사 지원금', doText: '이사 지원금 이벤트', dontText: '이사장학금 이벤트' },
                  { cat: '6. 견적 신청', doText: '견적 신청 가능 날짜', dontText: '견적신청 가능 날짜' },
                  { cat: '7. 매칭 완료', doText: '청소업체 매칭 완료', dontText: '청소업체 매칭완료' },
                ].map((row) => (
                  <tr key={row.cat} className="hover:bg-etc-04/50">
                    <td className="py-3 px-3 font-bold text-text-01">{row.cat}</td>
                    <td className="py-3 px-3">
                      <span className="inline-flex items-center gap-1.5 text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        Do
                      </span>
                      <span className="ml-2 font-medium">{row.doText}</span>
                    </td>
                    <td className="py-3 px-3 text-text-04">
                      <span className="inline-flex items-center gap-1.5 text-rose-700 font-bold bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                        Don't
                      </span>
                      <span className="ml-2 line-through">{row.dontText}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 6. 그 외 표기 (Format) */}
      {(activeTab === 'all' || activeTab === 'format') && (
        <div className="bg-white border border-[#EBEEF2] rounded-[20px] p-6 md:p-8 space-y-4 shadow-soft">
          <div className="border-b border-etc-03 pb-3">
            <h3 className="text-[18px] font-bold text-text-01">6. 그 외 표기 규칙</h3>
            <p className="text-[13px] text-text-03 mt-0.5">
              금액, 날짜, 문장 기호(슬래시, 괄호, 쌍점, &)의 세부 표기 표준입니다.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-[13px] border-collapse">
              <thead>
                <tr className="border-b border-etc-03 text-text-04 text-[12px]">
                  <th className="py-2.5 px-3 w-[180px]">항목</th>
                  <th className="py-2.5 px-3">Do / Don't 표기 기준</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-etc-03 text-text-02">
                <tr className="hover:bg-etc-04/50">
                  <td className="py-3 px-3 font-bold text-text-01">1. 금액 표기</td>
                  <td className="py-3 px-3 space-y-1">
                    <div>
                      <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 mr-2">Do</span>
                      <strong>48만 원, 총 200만 원, 340,000원</strong>
                    </div>
                    <div className="text-text-04">
                      <span className="text-rose-700 font-bold bg-rose-50 px-2 py-0.5 rounded border border-rose-200 mr-2">Don't</span>
                      <span className="line-through">48만원, 총200만원, 340000원</span>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-etc-04/50">
                  <td className="py-3 px-3 font-bold text-text-01">2. 날짜 표기</td>
                  <td className="py-3 px-3 space-y-1">
                    <div>
                      <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 mr-2">Do</span>
                      <strong>2024.07.06</strong>
                    </div>
                    <div className="text-text-04">
                      <span className="text-rose-700 font-bold bg-rose-50 px-2 py-0.5 rounded border border-rose-200 mr-2">Don't</span>
                      <span className="line-through">24.07.06, 24-07-06</span>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-etc-04/50">
                  <td className="py-3 px-3 font-bold text-text-01">3. / [슬래시]</td>
                  <td className="py-3 px-3 space-y-1">
                    <div>
                      <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 mr-2">Do</span>
                      슬래시 앞뒤에는 띄어쓰기 없이: <strong>알림톡/mms</strong>
                    </div>
                    <div className="text-text-04">
                      <span className="text-rose-700 font-bold bg-rose-50 px-2 py-0.5 rounded border border-rose-200 mr-2">Don't</span>
                      <span className="line-through">알림톡 / mms</span>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-etc-04/50">
                  <td className="py-3 px-3 font-bold text-text-01">4. () [괄호]</td>
                  <td className="py-3 px-3 space-y-1.5">
                    <div>
                      <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 mr-2">Do</span>
                      괄호 앞에 영문/숫자가 올 때는 띄어쓰기: <strong>oneroom (9평 이하)</strong>
                    </div>
                    <div>
                      <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 mr-2">Do</span>
                      괄호 앞에 국문이 올 때는 붙여쓰기: <strong>원룸/오피스텔(9평 이하)</strong>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-etc-04/50">
                  <td className="py-3 px-3 font-bold text-text-01">5. : [대]</td>
                  <td className="py-3 px-3 space-y-1">
                    <div>
                      <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 mr-2">Do</span>
                      글자와 : 를 붙여 쓰기: <strong>1:1 (일대일)</strong>
                    </div>
                    <div className="text-text-04">
                      <span className="text-rose-700 font-bold bg-rose-50 px-2 py-0.5 rounded border border-rose-200 mr-2">Don't</span>
                      <span className="line-through">1 : 1 (일 대 일)</span>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-etc-04/50">
                  <td className="py-3 px-3 font-bold text-text-01">6. &</td>
                  <td className="py-3 px-3 space-y-1">
                    <div>
                      <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 mr-2">Do</span>
                      글자와 & 를 띄어 쓰기: <strong>조건 & 혜택</strong>
                    </div>
                    <div className="text-text-04">
                      <span className="text-rose-700 font-bold bg-rose-50 px-2 py-0.5 rounded border border-rose-200 mr-2">Don't</span>
                      <span className="line-through">조건&혜택</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </section>
  );
};
