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
      {/* Section Header: Toss Style */}
      <div className="border-b border-[#E5E8EB] pb-6">
        <span className="text-[13px] font-bold text-[#3182F6]">
          다이사 / 위매치 공식 가이드
        </span>
        <h2 className="text-[28px] md:text-[32px] font-extrabold text-[#191F28] tracking-tight mt-1">
          UX 라이팅 가이드 (Writing Guide)
        </h2>
        <p className="text-[15px] text-[#4E5968] mt-2 leading-relaxed max-w-3xl">
          다이사(da24)와 위매치(wematch) 프로덕트 전반에서 고객과 소통할 때 일관된 브랜드 경험을 전달하기 위한 공식 텍스트 및 맞춤법 표기 규칙입니다.
        </p>
      </div>

      {/* Category Navigation Bar: Toss Pill Tab */}
      <div className="flex flex-wrap items-center gap-1.5 bg-[#F2F4F6] p-1.5 rounded-[14px] w-fit border border-[#E5E8EB]/60">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-3.5 py-1.5 rounded-[10px] text-[13px] transition-all select-none ${
              activeTab === tab.id
                ? 'bg-white text-[#191F28] font-bold shadow-2xs'
                : 'text-[#6B7684] hover:text-[#191F28] font-medium'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* 1. 타이틀 (Title) */}
      {(activeTab === 'all' || activeTab === 'title') && (
        <div className="bg-white border border-[#E5E8EB] rounded-[22px] p-6 md:p-8 space-y-4 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
          <div className="border-b border-[#F2F4F6] pb-3">
            <h3 className="text-[18px] font-bold text-[#191F28]">1. 타이틀 (Title)</h3>
            <p className="text-[13px] text-[#6B7684] mt-0.5">
              화면 상단 제목 및 모달 타이틀은 <strong>[해요체]</strong>를 기본으로 쓰며, <strong>온점(마침표)을 절대 사용하지 않습니다</strong>.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-[13px] border-collapse">
              <thead>
                <tr className="border-b border-[#E5E8EB] text-[#8B95A1] text-[12px]">
                  <th className="py-2.5 px-3 w-[220px]">규칙</th>
                  <th className="py-2.5 px-3 w-[45%]">Do (올바른 표기)</th>
                  <th className="py-2.5 px-3 w-[45%]">Don't (지양 표기)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F2F4F6] text-[#333D4B]">
                <tr className="hover:bg-[#F9FAFB]">
                  <td className="py-3 px-3 font-bold text-[#191F28]">[해요체] 기본 사용</td>
                  <td className="py-3 px-3">
                    <span className="inline-flex items-center gap-1.5 text-[#1B64DA] font-bold bg-[#E8F3FF] px-2 py-0.5 rounded-[6px]">
                      Do
                    </span>
                    <span className="ml-2 font-medium">출발지를 검색해 주세요</span>
                  </td>
                  <td className="py-3 px-3 text-[#8B95A1]">
                    <span className="inline-flex items-center gap-1.5 text-[#D93442] font-bold bg-[#FEEBED] px-2 py-0.5 rounded-[6px]">
                      Don't
                    </span>
                    <span className="ml-2 line-through">출발지를 검색해 주십시오</span>
                  </td>
                </tr>
                <tr className="hover:bg-[#F9FAFB]">
                  <td className="py-3 px-3 font-bold text-[#191F28]">온점(.) 미사용</td>
                  <td className="py-3 px-3">
                    <span className="inline-flex items-center gap-1.5 text-[#1B64DA] font-bold bg-[#E8F3FF] px-2 py-0.5 rounded-[6px]">
                      Do
                    </span>
                    <span className="ml-2 font-medium">이사 업체를 찾는 중이에요</span>
                  </td>
                  <td className="py-3 px-3 text-[#8B95A1]">
                    <span className="inline-flex items-center gap-1.5 text-[#D93442] font-bold bg-[#FEEBED] px-2 py-0.5 rounded-[6px]">
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
        <div className="bg-white border border-[#E5E8EB] rounded-[22px] p-6 md:p-8 space-y-4 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
          <div className="border-b border-[#F2F4F6] pb-3">
            <h3 className="text-[18px] font-bold text-[#191F28]">2. 설명 (Description)</h3>
            <p className="text-[13px] text-[#6B7684] mt-0.5">
              본문 부연 설명문은 <strong>[해요체]</strong>를 기본으로 쓰며, 문장의 끝에 <strong>온점(마침표)을 반드시 찍습니다</strong>.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-[13px] border-collapse">
              <thead>
                <tr className="border-b border-[#E5E8EB] text-[#8B95A1] text-[12px]">
                  <th className="py-2.5 px-3 w-[220px]">규칙</th>
                  <th className="py-2.5 px-3 w-[45%]">Do (올바른 표기)</th>
                  <th className="py-2.5 px-3 w-[45%]">Don't (지양 표기)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F2F4F6] text-[#333D4B]">
                <tr className="hover:bg-[#F9FAFB]">
                  <td className="py-3 px-3 font-bold text-[#191F28]">[해요체] 기본 사용</td>
                  <td className="py-3 px-3">
                    <span className="inline-flex items-center gap-1.5 text-[#1B64DA] font-bold bg-[#E8F3FF] px-2 py-0.5 rounded-[6px]">
                      Do
                    </span>
                    <span className="ml-2 font-medium">업체에게 모든걸 맡기세요.</span>
                  </td>
                  <td className="py-3 px-3 text-[#8B95A1]">
                    <span className="inline-flex items-center gap-1.5 text-[#D93442] font-bold bg-[#FEEBED] px-2 py-0.5 rounded-[6px]">
                      Don't
                    </span>
                    <span className="ml-2 line-through">업체에게 모든걸 맡기십시오!</span>
                  </td>
                </tr>
                <tr className="hover:bg-[#F9FAFB]">
                  <td className="py-3 px-3 font-bold text-[#191F28]">온점(.) 필수 사용</td>
                  <td className="py-3 px-3">
                    <span className="inline-flex items-center gap-1.5 text-[#1B64DA] font-bold bg-[#E8F3FF] px-2 py-0.5 rounded-[6px]">
                      Do
                    </span>
                    <span className="ml-2 font-medium">선택 후에도 업체와 조율이 가능해요.</span>
                  </td>
                  <td className="py-3 px-3 text-[#8B95A1]">
                    <span className="inline-flex items-center gap-1.5 text-[#D93442] font-bold bg-[#FEEBED] px-2 py-0.5 rounded-[6px]">
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

      {/* 3. 유의 사항 / 힌트메시지 (Notice & Hint) */}
      {(activeTab === 'all' || activeTab === 'notice') && (
        <div className="bg-white border border-[#E5E8EB] rounded-[22px] p-6 md:p-8 space-y-4 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
          <div className="border-b border-[#F2F4F6] pb-3">
            <h3 className="text-[18px] font-bold text-[#191F28]">3. 유의 사항, 힌트메시지 (Notice & Hint)</h3>
            <p className="text-[13px] text-[#6B7684] mt-0.5">
              주의점, 법적 고지, 인풋 힌트는 신뢰감 있는 <strong>[~입니다체]</strong>를 기본으로 쓰며, <strong>온점(마침표)을 찍습니다</strong>.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-[13px] border-collapse">
              <thead>
                <tr className="border-b border-[#E5E8EB] text-[#8B95A1] text-[12px]">
                  <th className="py-2.5 px-3 w-[220px]">규칙</th>
                  <th className="py-2.5 px-3 w-[45%]">Do (올바른 표기)</th>
                  <th className="py-2.5 px-3 w-[45%]">Don't (지양 표기)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F2F4F6] text-[#333D4B]">
                <tr className="hover:bg-[#F9FAFB]">
                  <td className="py-3 px-3 font-bold text-[#191F28]">[~입니다체] 기본 사용</td>
                  <td className="py-3 px-3">
                    <span className="inline-flex items-center gap-1.5 text-[#1B64DA] font-bold bg-[#E8F3FF] px-2 py-0.5 rounded-[6px]">
                      Do
                    </span>
                    <span className="ml-2 font-medium">이벤트 신청은 이사 한 건 당 한 번만 가능합니다.</span>
                  </td>
                  <td className="py-3 px-3 text-[#8B95A1]">
                    <span className="inline-flex items-center gap-1.5 text-[#D93442] font-bold bg-[#FEEBED] px-2 py-0.5 rounded-[6px]">
                      Don't
                    </span>
                    <span className="ml-2 line-through">이벤트 신청은 이사 한 건 당 한 번만 가능해요.</span>
                  </td>
                </tr>
                <tr className="hover:bg-[#F9FAFB]">
                  <td className="py-3 px-3 font-bold text-[#191F28]">온점(.) 필수 사용</td>
                  <td className="py-3 px-3">
                    <span className="inline-flex items-center gap-1.5 text-[#1B64DA] font-bold bg-[#E8F3FF] px-2 py-0.5 rounded-[6px]">
                      Do
                    </span>
                    <span className="ml-2 font-medium">가정이사 업체 한정 이벤트입니다.</span>
                  </td>
                  <td className="py-3 px-3 text-[#8B95A1]">
                    <span className="inline-flex items-center gap-1.5 text-[#D93442] font-bold bg-[#FEEBED] px-2 py-0.5 rounded-[6px]">
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
        <div className="bg-white border border-[#E5E8EB] rounded-[22px] p-6 md:p-8 space-y-4 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
          <div className="border-b border-[#F2F4F6] pb-3">
            <h3 className="text-[18px] font-bold text-[#191F28]">4. 버튼 (Button)</h3>
            <p className="text-[13px] text-[#6B7684] mt-0.5">
              사용자가 버튼을 눌렀을 때 어떤 일이 일어나는지 명확히 인지할 수 있도록 <strong>[~하기체] 동사형</strong>을 사용합니다.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-[13px] border-collapse">
              <thead>
                <tr className="border-b border-[#E5E8EB] text-[#8B95A1] text-[12px]">
                  <th className="py-2.5 px-3 w-[220px]">규칙</th>
                  <th className="py-2.5 px-3">Do (올바른 표기)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F2F4F6] text-[#333D4B]">
                <tr className="hover:bg-[#F9FAFB]">
                  <td className="py-3 px-3 font-bold text-[#191F28]">[~하기체] 기본 사용</td>
                  <td className="py-3 px-3">
                    <span className="inline-flex items-center gap-1.5 text-[#1B64DA] font-bold bg-[#E8F3FF] px-2 py-0.5 rounded-[6px]">
                      Do
                    </span>
                    <span className="ml-2 font-medium">설정하러 가기, 자세히 보기, 추천업체 바로 신청하기</span>
                  </td>
                </tr>
                <tr className="hover:bg-[#F9FAFB]">
                  <td className="py-3 px-3 font-bold text-[#191F28]">[~하기체] 예외 (길어질 때)</td>
                  <td className="py-3 px-3">
                    <span className="inline-flex items-center gap-1.5 text-[#1B64DA] font-bold bg-[#E8F3FF] px-2 py-0.5 rounded-[6px]">
                      Do
                    </span>
                    <span className="ml-2 font-medium">신청 정보 확인 완료, 고객 상태 변경 (명사형으로 마무리)</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 5. 자주 쓰는 단어 표기 (Word Guidelines) */}
      {(activeTab === 'all' || activeTab === 'words') && (
        <div className="bg-white border border-[#E5E8EB] rounded-[22px] p-6 md:p-8 space-y-4 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
          <div className="border-b border-[#F2F4F6] pb-3">
            <h3 className="text-[18px] font-bold text-[#191F28]">5. 자주 쓰는 단어 표기 (7대 표준)</h3>
            <p className="text-[13px] text-[#6B7684] mt-0.5">
              다이사 핵심 비즈니스 용어의 붙여쓰기 및 띄어쓰기 공식 맞춤법 규격입니다.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-[13px] border-collapse">
              <thead>
                <tr className="border-b border-[#E5E8EB] text-[#8B95A1] text-[12px]">
                  <th className="py-2.5 px-3 w-[180px]">단어 항목</th>
                  <th className="py-2.5 px-3 w-[45%]">Do (올바른 표기)</th>
                  <th className="py-2.5 px-3 w-[45%]">Don't (지양 표기)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F2F4F6] text-[#333D4B]">
                {[
                  { name: '1. 이사 종류', do: '가정이사, 원룸이사, 사무실이사', dont: '가정 이사, 원룸 이사, 사무실 이사' },
                  { name: '2. 업체 종류', do: '이사업체, 청소업체, 추천업체, 입주 청소업체', dont: '이사 업체, 청소 업체' },
                  { name: '3. 방문 견적 희망일', do: '방문 견적 희망일', dont: '방문견적 희망일' },
                  { name: '4. 일시 정지', do: '일시 정지', dont: '일시정지' },
                  { name: '5. 이사 지원금', do: '이사 지원금 이벤트', dont: '이사지원금 이벤트' },
                  { name: '6. 견적 신청', do: '견적 신청 가능 날짜', dont: '견적신청 가능 날짜' },
                  { name: '7. 매칭 완료', do: '청소업체 매칭 완료', dont: '청소업체 매칭완료' },
                ].map((item) => (
                  <tr key={item.name} className="hover:bg-[#F9FAFB]">
                    <td className="py-3 px-3 font-bold text-[#191F28]">{item.name}</td>
                    <td className="py-3 px-3">
                      <span className="inline-flex items-center gap-1.5 text-[#1B64DA] font-bold bg-[#E8F3FF] px-2 py-0.5 rounded-[6px]">
                        Do
                      </span>
                      <span className="ml-2 font-medium">{item.do}</span>
                    </td>
                    <td className="py-3 px-3 text-[#8B95A1]">
                      <span className="inline-flex items-center gap-1.5 text-[#D93442] font-bold bg-[#FEEBED] px-2 py-0.5 rounded-[6px]">
                        Don't
                      </span>
                      <span className="ml-2 line-through">{item.dont}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 6. 그 외 표기 (Format Guidelines) */}
      {(activeTab === 'all' || activeTab === 'format') && (
        <div className="bg-white border border-[#E5E8EB] rounded-[22px] p-6 md:p-8 space-y-4 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
          <div className="border-b border-[#F2F4F6] pb-3">
            <h3 className="text-[18px] font-bold text-[#191F28]">6. 그 외 표기 (금액, 날짜, 기호)</h3>
            <p className="text-[13px] text-[#6B7684] mt-0.5">
              숫자, 날짜 단위, 괄호, 슬래시 등의 세밀한 문장부호 띄어쓰기 기준입니다.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-[13px] border-collapse">
              <thead>
                <tr className="border-b border-[#E5E8EB] text-[#8B95A1] text-[12px]">
                  <th className="py-2.5 px-3 w-[180px]">구분</th>
                  <th className="py-2.5 px-3 w-[45%]">Do (올바른 표기)</th>
                  <th className="py-2.5 px-3 w-[45%]">Don't (지양 표기)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F2F4F6] text-[#333D4B]">
                {[
                  { name: '1. 금액 표기', do: '48만 원, 총 200만 원, 340,000원', dont: '48만원, 총200만원, 340000원' },
                  { name: '2. 날짜 표기', do: '2024.07.06', dont: '24.07.06, 24-07-06' },
                  { name: '3. / [슬래시]', do: '슬래시 앞뒤 띄어쓰기 없이: 알림톡/mms', dont: '알림톡 / mms' },
                  { name: '4. () [괄호]', do: '영문/숫자 앞 띄어쓰기: oneroom (9평 이하) | 국문 앞 붙여쓰기: 원룸/오피스텔(9평 이하)', dont: 'oneroom(9평 이하), 원룸/오피스텔 (9평 이하)' },
                  { name: '5. : [대]', do: '글자와 : 를 붙여 쓰기: 1:1 (일대일)', dont: '1 : 1 (일 대 일)' },
                  { name: '6. &', do: '글자와 & 를 띄어 쓰기: 조건 & 혜택', dont: '조건&혜택' },
                ].map((item) => (
                  <tr key={item.name} className="hover:bg-[#F9FAFB]">
                    <td className="py-3 px-3 font-bold text-[#191F28]">{item.name}</td>
                    <td className="py-3 px-3">
                      <span className="inline-flex items-center gap-1.5 text-[#1B64DA] font-bold bg-[#E8F3FF] px-2 py-0.5 rounded-[6px]">
                        Do
                      </span>
                      <span className="ml-2 font-medium">{item.do}</span>
                    </td>
                    <td className="py-3 px-3 text-[#8B95A1]">
                      {item.dont && (
                        <>
                          <span className="inline-flex items-center gap-1.5 text-[#D93442] font-bold bg-[#FEEBED] px-2 py-0.5 rounded-[6px]">
                            Don't
                          </span>
                          <span className="ml-2 line-through">{item.dont}</span>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </section>
  );
};
