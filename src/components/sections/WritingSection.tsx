import React, { useState } from 'react';
import { Copy, Check, Sparkles, BookOpen } from 'lucide-react';

interface WritingSectionProps {
  mode?: 'customer' | 'partner';
}

export const WritingSection: React.FC<WritingSectionProps> = ({ mode = 'customer' }) => {
  const isDark = false; // 파트너향도 고객향과 동일한 깨끗한 라이트모드로 통일
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const copy = (txt: string) => {
    navigator.clipboard.writeText(txt);
    setCopiedText(txt);
    setTimeout(() => setCopiedText(null), 1200);
  };

  return (
    <section id="writing" className="space-y-12">
      {/* Page Header */}
      <div className="border-b pb-4 border-[#E5E8EB]">
        <h2 className="text-[28px] md:text-[32px] font-extrabold tracking-tight text-[#191F28]">
          Writing Guide
        </h2>
      </div>

      {/* ============================================================ */}
      {/* 1. 타이틀 (Title) */}
      {/* ============================================================ */}
      <div className="space-y-3">
        <h3 className={`text-[20px] font-bold ${isDark ? 'text-white' : 'text-[#191F28]'}`}>
          타이틀
        </h3>

        <div className={`border rounded-[14px] overflow-hidden ${
          isDark ? 'border-[#26252D] bg-[#141319]' : 'border-[#E5E8EB] bg-white'
        }`}>
          <table className="w-full text-left border-collapse">
            <tbody>
              {/* Row 1: 해요체 */}
              <tr className={`border-b ${isDark ? 'border-[#222129]' : 'border-[#E5E8EB]'}`}>
                <td className={`w-[32%] md:w-[28%] p-4 md:p-5 align-top text-[14px] font-semibold ${
                  isDark ? 'text-[#D1D1D6] bg-[#17161E]' : 'text-[#333D4B] bg-[#F9FAFB]'
                }`}>
                  <span className={`font-bold ${isDark ? 'text-[#4B89FF]' : 'text-[#1B64DA]'}`}>[해요체]</span>를 기본으로 사용합니다.
                </td>
                <td className="p-4 md:p-5 space-y-2.5">
                  <div className="flex items-center justify-between gap-3 group">
                    <div className="flex items-center gap-3">
                      <span className={`px-2 py-0.5 rounded text-[11px] font-bold tracking-wide select-none ${
                        isDark ? 'bg-[#064E3B]/70 text-[#34D399] border border-[#065F46]' : 'bg-[#E8F8F0] text-[#00A86B]'
                      }`}>
                        Do
                      </span>
                      <span className={`text-[14px] font-medium ${isDark ? 'text-white' : 'text-[#191F28]'}`}>
                        출발지를 검색해 주세요
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => copy('출발지를 검색해 주세요')}
                      className={`text-[11px] px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity ${
                        copiedText === '출발지를 검색해 주세요'
                          ? 'bg-emerald-500 text-white'
                          : isDark ? 'bg-[#292931] text-[#9E9EA4] hover:text-white' : 'bg-[#F2F4F6] text-[#4E5968]'
                      }`}
                    >
                      {copiedText === '출발지를 검색해 주세요' ? '복사됨' : '복사'}
                    </button>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`px-2 py-0.5 rounded text-[11px] font-bold tracking-wide select-none ${
                      isDark ? 'bg-[#7F1D1D]/60 text-[#F87171] border border-[#991B1B]' : 'bg-[#FEECEB] text-[#F04438]'
                    }`}>
                      Don't
                    </span>
                    <span className={`text-[14px] ${isDark ? 'text-[#8E8E93]' : 'text-[#8B95A1]'}`}>
                      출발지를 검색해 주십시오
                    </span>
                  </div>
                </td>
              </tr>

              {/* Row 2: 온점 미사용 */}
              <tr>
                <td className={`w-[32%] md:w-[28%] p-4 md:p-5 align-top text-[14px] font-semibold ${
                  isDark ? 'text-[#D1D1D6] bg-[#17161E]' : 'text-[#333D4B] bg-[#F9FAFB]'
                }`}>
                  온점을 사용하지 않습니다.
                </td>
                <td className="p-4 md:p-5 space-y-2.5">
                  <div className="flex items-center justify-between gap-3 group">
                    <div className="flex items-center gap-3">
                      <span className={`px-2 py-0.5 rounded text-[11px] font-bold tracking-wide select-none ${
                        isDark ? 'bg-[#064E3B]/70 text-[#34D399] border border-[#065F46]' : 'bg-[#E8F8F0] text-[#00A86B]'
                      }`}>
                        Do
                      </span>
                      <span className={`text-[14px] font-medium ${isDark ? 'text-white' : 'text-[#191F28]'}`}>
                        이사 업체를 찾는 중이에요
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => copy('이사 업체를 찾는 중이에요')}
                      className={`text-[11px] px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity ${
                        copiedText === '이사 업체를 찾는 중이에요'
                          ? 'bg-emerald-500 text-white'
                          : isDark ? 'bg-[#292931] text-[#9E9EA4] hover:text-white' : 'bg-[#F2F4F6] text-[#4E5968]'
                      }`}
                    >
                      {copiedText === '이사 업체를 찾는 중이에요' ? '복사됨' : '복사'}
                    </button>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`px-2 py-0.5 rounded text-[11px] font-bold tracking-wide select-none ${
                      isDark ? 'bg-[#7F1D1D]/60 text-[#F87171] border border-[#991B1B]' : 'bg-[#FEECEB] text-[#F04438]'
                    }`}>
                      Don't
                    </span>
                    <span className={`text-[14px] ${isDark ? 'text-[#8E8E93]' : 'text-[#8B95A1]'}`}>
                      이사업체를 찾는 중이에요.
                    </span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 2. 설명 (Description) */}
      {/* ============================================================ */}
      <div className="space-y-3">
        <h3 className={`text-[20px] font-bold ${isDark ? 'text-white' : 'text-[#191F28]'}`}>
          설명
        </h3>

        <div className={`border rounded-[14px] overflow-hidden ${
          isDark ? 'border-[#26252D] bg-[#141319]' : 'border-[#E5E8EB] bg-white'
        }`}>
          <table className="w-full text-left border-collapse">
            <tbody>
              {/* Row 1: 해요체 */}
              <tr className={`border-b ${isDark ? 'border-[#222129]' : 'border-[#E5E8EB]'}`}>
                <td className={`w-[32%] md:w-[28%] p-4 md:p-5 align-top text-[14px] font-semibold ${
                  isDark ? 'text-[#D1D1D6] bg-[#17161E]' : 'text-[#333D4B] bg-[#F9FAFB]'
                }`}>
                  <span className={`font-bold ${isDark ? 'text-[#4B89FF]' : 'text-[#1B64DA]'}`}>[해요체]</span>를 기본으로 사용합니다.
                </td>
                <td className="p-4 md:p-5 space-y-2.5">
                  <div className="flex items-center justify-between gap-3 group">
                    <div className="flex items-center gap-3">
                      <span className={`px-2 py-0.5 rounded text-[11px] font-bold tracking-wide select-none ${
                        isDark ? 'bg-[#064E3B]/70 text-[#34D399] border border-[#065F46]' : 'bg-[#E8F8F0] text-[#00A86B]'
                      }`}>
                        Do
                      </span>
                      <span className={`text-[14px] font-medium ${isDark ? 'text-white' : 'text-[#191F28]'}`}>
                        업체에게 모든걸 맡기세요!
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => copy('업체에게 모든걸 맡기세요!')}
                      className={`text-[11px] px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity ${
                        copiedText === '업체에게 모든걸 맡기세요!'
                          ? 'bg-emerald-500 text-white'
                          : isDark ? 'bg-[#292931] text-[#9E9EA4] hover:text-white' : 'bg-[#F2F4F6] text-[#4E5968]'
                      }`}
                    >
                      {copiedText === '업체에게 모든걸 맡기세요!' ? '복사됨' : '복사'}
                    </button>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`px-2 py-0.5 rounded text-[11px] font-bold tracking-wide select-none ${
                      isDark ? 'bg-[#7F1D1D]/60 text-[#F87171] border border-[#991B1B]' : 'bg-[#FEECEB] text-[#F04438]'
                    }`}>
                      Don't
                    </span>
                    <span className={`text-[14px] ${isDark ? 'text-[#8E8E93]' : 'text-[#8B95A1]'}`}>
                      업체에게 모든걸 맡기십시오!
                    </span>
                  </div>
                </td>
              </tr>

              {/* Row 2: 온점 사용 */}
              <tr>
                <td className={`w-[32%] md:w-[28%] p-4 md:p-5 align-top text-[14px] font-semibold ${
                  isDark ? 'text-[#D1D1D6] bg-[#17161E]' : 'text-[#333D4B] bg-[#F9FAFB]'
                }`}>
                  온점을 사용합니다.
                </td>
                <td className="p-4 md:p-5 space-y-2.5">
                  <div className="flex items-center justify-between gap-3 group">
                    <div className="flex items-center gap-3">
                      <span className={`px-2 py-0.5 rounded text-[11px] font-bold tracking-wide select-none ${
                        isDark ? 'bg-[#064E3B]/70 text-[#34D399] border border-[#065F46]' : 'bg-[#E8F8F0] text-[#00A86B]'
                      }`}>
                        Do
                      </span>
                      <span className={`text-[14px] font-medium ${isDark ? 'text-white' : 'text-[#191F28]'}`}>
                        선택 후에도 업체와 조율이 가능해요.
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => copy('선택 후에도 업체와 조율이 가능해요.')}
                      className={`text-[11px] px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity ${
                        copiedText === '선택 후에도 업체와 조율이 가능해요.'
                          ? 'bg-emerald-500 text-white'
                          : isDark ? 'bg-[#292931] text-[#9E9EA4] hover:text-white' : 'bg-[#F2F4F6] text-[#4E5968]'
                      }`}
                    >
                      {copiedText === '선택 후에도 업체와 조율이 가능해요.' ? '복사됨' : '복사'}
                    </button>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`px-2 py-0.5 rounded text-[11px] font-bold tracking-wide select-none ${
                      isDark ? 'bg-[#7F1D1D]/60 text-[#F87171] border border-[#991B1B]' : 'bg-[#FEECEB] text-[#F04438]'
                    }`}>
                      Don't
                    </span>
                    <span className={`text-[14px] ${isDark ? 'text-[#8E8E93]' : 'text-[#8B95A1]'}`}>
                      선택 후에도 업체와 조율이 가능합니다
                    </span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 3. 유의 사항, 힌트메시지 */}
      {/* ============================================================ */}
      <div className="space-y-3">
        <h3 className={`text-[20px] font-bold ${isDark ? 'text-white' : 'text-[#191F28]'}`}>
          유의 사항, 힌트메시지
        </h3>

        <div className={`border rounded-[14px] overflow-hidden ${
          isDark ? 'border-[#26252D] bg-[#141319]' : 'border-[#E5E8EB] bg-white'
        }`}>
          <table className="w-full text-left border-collapse">
            <tbody>
              {/* Row 1: ~입니다체 */}
              <tr className={`border-b ${isDark ? 'border-[#222129]' : 'border-[#E5E8EB]'}`}>
                <td className={`w-[32%] md:w-[28%] p-4 md:p-5 align-top text-[14px] font-semibold ${
                  isDark ? 'text-[#D1D1D6] bg-[#17161E]' : 'text-[#333D4B] bg-[#F9FAFB]'
                }`}>
                  <span className={`font-bold ${isDark ? 'text-[#4B89FF]' : 'text-[#1B64DA]'}`}>[~입니다체]</span>를 기본으로 사용합니다.
                </td>
                <td className="p-4 md:p-5 space-y-2.5">
                  <div className="flex items-center justify-between gap-3 group">
                    <div className="flex items-center gap-3">
                      <span className={`px-2 py-0.5 rounded text-[11px] font-bold tracking-wide select-none ${
                        isDark ? 'bg-[#064E3B]/70 text-[#34D399] border border-[#065F46]' : 'bg-[#E8F8F0] text-[#00A86B]'
                      }`}>
                        Do
                      </span>
                      <span className={`text-[14px] font-medium ${isDark ? 'text-white' : 'text-[#191F28]'}`}>
                        이벤트 신청은 이사 한 건 당 한 번만 가능합니다.
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => copy('이벤트 신청은 이사 한 건 당 한 번만 가능합니다.')}
                      className={`text-[11px] px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity ${
                        copiedText === '이벤트 신청은 이사 한 건 당 한 번만 가능합니다.'
                          ? 'bg-emerald-500 text-white'
                          : isDark ? 'bg-[#292931] text-[#9E9EA4] hover:text-white' : 'bg-[#F2F4F6] text-[#4E5968]'
                      }`}
                    >
                      {copiedText === '이벤트 신청은 이사 한 건 당 한 번만 가능합니다.' ? '복사됨' : '복사'}
                    </button>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`px-2 py-0.5 rounded text-[11px] font-bold tracking-wide select-none ${
                      isDark ? 'bg-[#7F1D1D]/60 text-[#F87171] border border-[#991B1B]' : 'bg-[#FEECEB] text-[#F04438]'
                    }`}>
                      Don't
                    </span>
                    <span className={`text-[14px] ${isDark ? 'text-[#8E8E93]' : 'text-[#8B95A1]'}`}>
                      이벤트 신청은 이사 한 건 당 한 번만 가능해요.
                    </span>
                  </div>
                </td>
              </tr>

              {/* Row 2: 온점 사용 */}
              <tr>
                <td className={`w-[32%] md:w-[28%] p-4 md:p-5 align-top text-[14px] font-semibold ${
                  isDark ? 'text-[#D1D1D6] bg-[#17161E]' : 'text-[#333D4B] bg-[#F9FAFB]'
                }`}>
                  온점을 사용합니다.
                </td>
                <td className="p-4 md:p-5 space-y-2.5">
                  <div className="flex items-center justify-between gap-3 group">
                    <div className="flex items-center gap-3">
                      <span className={`px-2 py-0.5 rounded text-[11px] font-bold tracking-wide select-none ${
                        isDark ? 'bg-[#064E3B]/70 text-[#34D399] border border-[#065F46]' : 'bg-[#E8F8F0] text-[#00A86B]'
                      }`}>
                        Do
                      </span>
                      <span className={`text-[14px] font-medium ${isDark ? 'text-white' : 'text-[#191F28]'}`}>
                        가정이사 업체 한정 이벤트입니다.
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => copy('가정이사 업체 한정 이벤트입니다.')}
                      className={`text-[11px] px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity ${
                        copiedText === '가정이사 업체 한정 이벤트입니다.'
                          ? 'bg-emerald-500 text-white'
                          : isDark ? 'bg-[#292931] text-[#9E9EA4] hover:text-white' : 'bg-[#F2F4F6] text-[#4E5968]'
                      }`}
                    >
                      {copiedText === '가정이사 업체 한정 이벤트입니다.' ? '복사됨' : '복사'}
                    </button>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`px-2 py-0.5 rounded text-[11px] font-bold tracking-wide select-none ${
                      isDark ? 'bg-[#7F1D1D]/60 text-[#F87171] border border-[#991B1B]' : 'bg-[#FEECEB] text-[#F04438]'
                    }`}>
                      Don't
                    </span>
                    <span className={`text-[14px] ${isDark ? 'text-[#8E8E93]' : 'text-[#8B95A1]'}`}>
                      가정이사 업체 한정 이벤트입니다
                    </span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 4. 버튼 (Button) */}
      {/* ============================================================ */}
      <div className="space-y-3">
        <h3 className={`text-[20px] font-bold ${isDark ? 'text-white' : 'text-[#191F28]'}`}>
          버튼
        </h3>

        <div className={`border rounded-[14px] overflow-hidden ${
          isDark ? 'border-[#26252D] bg-[#141319]' : 'border-[#E5E8EB] bg-white'
        }`}>
          <table className="w-full text-left border-collapse">
            <tbody>
              {/* Row 1: ~하기체 */}
              <tr className={`border-b ${isDark ? 'border-[#222129]' : 'border-[#E5E8EB]'}`}>
                <td className={`w-[32%] md:w-[28%] p-4 md:p-5 align-top text-[14px] font-semibold ${
                  isDark ? 'text-[#D1D1D6] bg-[#17161E]' : 'text-[#333D4B] bg-[#F9FAFB]'
                }`}>
                  <span className={`font-bold ${isDark ? 'text-[#4B89FF]' : 'text-[#1B64DA]'}`}>[~하기체]</span>를 기본으로 사용합니다.
                </td>
                <td className="p-4 md:p-5 space-y-2.5">
                  <div className="flex items-center justify-between gap-3 group">
                    <div className="flex items-center gap-3">
                      <span className={`px-2 py-0.5 rounded text-[11px] font-bold tracking-wide select-none ${
                        isDark ? 'bg-[#064E3B]/70 text-[#34D399] border border-[#065F46]' : 'bg-[#E8F8F0] text-[#00A86B]'
                      }`}>
                        Do
                      </span>
                      <span className={`text-[14px] font-medium ${isDark ? 'text-white' : 'text-[#191F28]'}`}>
                        설정하러 가기, 자세히 보기, 추천업체 바로 신청하기
                      </span>
                    </div>
                  </div>
                </td>
              </tr>

              {/* Row 2: 명사형 종결 */}
              <tr>
                <td className={`w-[32%] md:w-[28%] p-4 md:p-5 align-top text-[14px] font-semibold ${
                  isDark ? 'text-[#D1D1D6] bg-[#17161E]' : 'text-[#333D4B] bg-[#F9FAFB]'
                }`}>
                  [~하기체]가 적용되지 않거나 너무 길어지는 경우 명사로 끝냅니다.
                </td>
                <td className="p-4 md:p-5 space-y-2.5">
                  <div className="flex items-center justify-between gap-3 group">
                    <div className="flex items-center gap-3">
                      <span className={`px-2 py-0.5 rounded text-[11px] font-bold tracking-wide select-none ${
                        isDark ? 'bg-[#064E3B]/70 text-[#34D399] border border-[#065F46]' : 'bg-[#E8F8F0] text-[#00A86B]'
                      }`}>
                        Do
                      </span>
                      <span className={`text-[14px] font-medium ${isDark ? 'text-white' : 'text-[#191F28]'}`}>
                        신청 정보 확인 완료, 고객 상태 변경
                      </span>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 5. 자주 쓰는 단어 표기 */}
      {/* ============================================================ */}
      <div className="space-y-3">
        <h3 className={`text-[20px] font-bold ${isDark ? 'text-white' : 'text-[#191F28]'}`}>
          자주 쓰는 단어 표기
        </h3>

        <div className={`border rounded-[14px] overflow-hidden ${
          isDark ? 'border-[#26252D] bg-[#141319]' : 'border-[#E5E8EB] bg-white'
        }`}>
          <table className="w-full text-left border-collapse">
            <tbody>
              {[
                {
                  id: '1. 이사 종류',
                  do: '가정이사, 원룸이사, 사무실이사',
                  dont: '가정 이사, 원룸 이사, 사무실 이사',
                },
                {
                  id: '2. 업체 종류',
                  do: '이사업체, 청소업체, 추천업체, 입주 청소업체',
                  dont: '이사 업체, 청소 업체',
                },
                {
                  id: '3. 방문 견적 희망일',
                  do: '방문 견적 희망일',
                  dont: '방문견적 희망일',
                },
                {
                  id: '4. 일시 정지',
                  do: '일시 정지',
                  dont: '일시정지',
                },
                {
                  id: '5. 이사 지원금',
                  do: '이사 지원금 이벤트',
                  dont: '이사진원금 이벤트',
                },
                {
                  id: '6. 견적 신청',
                  do: '견적 신청 가능 날짜',
                  dont: '견적신청 가능 날짜',
                },
                {
                  id: '7. 매칭 완료',
                  do: '청소업체 매칭 완료',
                  dont: '청소업체 매칭완료',
                },
              ].map((item, idx, arr) => (
                <tr
                  key={item.id}
                  className={idx !== arr.length - 1 ? `border-b ${isDark ? 'border-[#222129]' : 'border-[#E5E8EB]'}` : ''}
                >
                  <td className={`w-[32%] md:w-[28%] p-4 md:p-5 align-top text-[14px] font-bold ${
                    isDark ? 'text-white bg-[#17161E]' : 'text-[#191F28] bg-[#F9FAFB]'
                  }`}>
                    {item.id}
                  </td>
                  <td className="p-4 md:p-5 space-y-2.5">
                    <div className="flex items-center justify-between gap-3 group">
                      <div className="flex items-center gap-3">
                        <span className={`px-2 py-0.5 rounded text-[11px] font-bold tracking-wide select-none ${
                          isDark ? 'bg-[#064E3B]/70 text-[#34D399] border border-[#065F46]' : 'bg-[#E8F8F0] text-[#00A86B]'
                        }`}>
                          Do
                        </span>
                        <span className={`text-[14px] font-medium ${isDark ? 'text-white' : 'text-[#191F28]'}`}>
                          {item.do}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => copy(item.do)}
                        className={`text-[11px] px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity ${
                          copiedText === item.do
                            ? 'bg-emerald-500 text-white'
                            : isDark ? 'bg-[#292931] text-[#9E9EA4] hover:text-white' : 'bg-[#F2F4F6] text-[#4E5968]'
                        }`}
                      >
                        {copiedText === item.do ? '복사됨' : '복사'}
                      </button>
                    </div>
                    {item.dont && (
                      <div className="flex items-center gap-3">
                        <span className={`px-2 py-0.5 rounded text-[11px] font-bold tracking-wide select-none ${
                          isDark ? 'bg-[#7F1D1D]/60 text-[#F87171] border border-[#991B1B]' : 'bg-[#FEECEB] text-[#F04438]'
                        }`}>
                          Don't
                        </span>
                        <span className={`text-[14px] ${isDark ? 'text-[#8E8E93]' : 'text-[#8B95A1]'}`}>
                          {item.dont}
                        </span>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 6. 그 외 표기 */}
      {/* ============================================================ */}
      <div className="space-y-3">
        <h3 className={`text-[20px] font-bold ${isDark ? 'text-white' : 'text-[#191F28]'}`}>
          그 외 표기
        </h3>

        <div className={`border rounded-[14px] overflow-hidden ${
          isDark ? 'border-[#26252D] bg-[#141319]' : 'border-[#E5E8EB] bg-white'
        }`}>
          <table className="w-full text-left border-collapse">
            <tbody>
              {/* 1. 금액 표기 */}
              <tr className={`border-b ${isDark ? 'border-[#222129]' : 'border-[#E5E8EB]'}`}>
                <td className={`w-[32%] md:w-[28%] p-4 md:p-5 align-top text-[14px] font-bold ${
                  isDark ? 'text-white bg-[#17161E]' : 'text-[#191F28] bg-[#F9FAFB]'
                }`}>
                  1. 금액 표기
                </td>
                <td className="p-4 md:p-5 space-y-2.5">
                  <div className="flex items-center justify-between gap-3 group">
                    <div className="flex items-center gap-3">
                      <span className={`px-2 py-0.5 rounded text-[11px] font-bold tracking-wide select-none ${
                        isDark ? 'bg-[#064E3B]/70 text-[#34D399] border border-[#065F46]' : 'bg-[#E8F8F0] text-[#00A86B]'
                      }`}>
                        Do
                      </span>
                      <span className={`text-[14px] font-medium ${isDark ? 'text-white' : 'text-[#191F28]'}`}>
                        48만 원, 총 200만 원, 340,000원
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`px-2 py-0.5 rounded text-[11px] font-bold tracking-wide select-none ${
                      isDark ? 'bg-[#7F1D1D]/60 text-[#F87171] border border-[#991B1B]' : 'bg-[#FEECEB] text-[#F04438]'
                    }`}>
                      Don't
                    </span>
                    <span className={`text-[14px] ${isDark ? 'text-[#8E8E93]' : 'text-[#8B95A1]'}`}>
                      48만원, 총200만원, 340000원
                    </span>
                  </div>
                </td>
              </tr>

              {/* 2. 날짜 표기 */}
              <tr className={`border-b ${isDark ? 'border-[#222129]' : 'border-[#E5E8EB]'}`}>
                <td className={`w-[32%] md:w-[28%] p-4 md:p-5 align-top text-[14px] font-bold ${
                  isDark ? 'text-white bg-[#17161E]' : 'text-[#191F28] bg-[#F9FAFB]'
                }`}>
                  2. 날짜 표기
                </td>
                <td className="p-4 md:p-5 space-y-2.5">
                  <div className="flex items-center justify-between gap-3 group">
                    <div className="flex items-center gap-3">
                      <span className={`px-2 py-0.5 rounded text-[11px] font-bold tracking-wide select-none ${
                        isDark ? 'bg-[#064E3B]/70 text-[#34D399] border border-[#065F46]' : 'bg-[#E8F8F0] text-[#00A86B]'
                      }`}>
                        Do
                      </span>
                      <span className={`text-[14px] font-medium ${isDark ? 'text-white' : 'text-[#191F28]'}`}>
                        2024.07.06
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`px-2 py-0.5 rounded text-[11px] font-bold tracking-wide select-none ${
                      isDark ? 'bg-[#7F1D1D]/60 text-[#F87171] border border-[#991B1B]' : 'bg-[#FEECEB] text-[#F04438]'
                    }`}>
                      Don't
                    </span>
                    <span className={`text-[14px] ${isDark ? 'text-[#8E8E93]' : 'text-[#8B95A1]'}`}>
                      24.07.06, 24-07-06
                    </span>
                  </div>
                </td>
              </tr>

              {/* 3. / [슬래시] */}
              <tr className={`border-b ${isDark ? 'border-[#222129]' : 'border-[#E5E8EB]'}`}>
                <td className={`w-[32%] md:w-[28%] p-4 md:p-5 align-top text-[14px] font-bold ${
                  isDark ? 'text-white bg-[#17161E]' : 'text-[#191F28] bg-[#F9FAFB]'
                }`}>
                  3. / [슬래시]
                </td>
                <td className="p-4 md:p-5 space-y-2.5">
                  <div className="flex items-center justify-between gap-3 group">
                    <div className="flex items-center gap-3">
                      <span className={`px-2 py-0.5 rounded text-[11px] font-bold tracking-wide select-none ${
                        isDark ? 'bg-[#064E3B]/70 text-[#34D399] border border-[#065F46]' : 'bg-[#E8F8F0] text-[#00A86B]'
                      }`}>
                        Do
                      </span>
                      <span className={`text-[14px] font-medium ${isDark ? 'text-white' : 'text-[#191F28]'}`}>
                        슬래시 앞뒤에는 띄어쓰기 없이 ex) 알림톡/mms
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`px-2 py-0.5 rounded text-[11px] font-bold tracking-wide select-none ${
                      isDark ? 'bg-[#7F1D1D]/60 text-[#F87171] border border-[#991B1B]' : 'bg-[#FEECEB] text-[#F04438]'
                    }`}>
                      Don't
                    </span>
                    <span className={`text-[14px] ${isDark ? 'text-[#8E8E93]' : 'text-[#8B95A1]'}`}>
                      슬래시 앞 뒤 띄어쓰기 쓰기 ex) 알림톡 / mms
                    </span>
                  </div>
                </td>
              </tr>

              {/* 4. () [괄호] */}
              <tr className={`border-b ${isDark ? 'border-[#222129]' : 'border-[#E5E8EB]'}`}>
                <td className={`w-[32%] md:w-[28%] p-4 md:p-5 align-top text-[14px] font-bold ${
                  isDark ? 'text-white bg-[#17161E]' : 'text-[#191F28] bg-[#F9FAFB]'
                }`}>
                  4. () [괄호]
                </td>
                <td className="p-4 md:p-5 space-y-2.5">
                  <div className="flex items-center gap-3">
                    <span className={`px-2 py-0.5 rounded text-[11px] font-bold tracking-wide select-none ${
                      isDark ? 'bg-[#064E3B]/70 text-[#34D399] border border-[#065F46]' : 'bg-[#E8F8F0] text-[#00A86B]'
                    }`}>
                      Do
                    </span>
                    <span className={`text-[14px] font-medium ${isDark ? 'text-white' : 'text-[#191F28]'}`}>
                      괄호 앞에 영문/숫자가 올때는 띄어쓰기 | <span className="font-semibold text-emerald-600 dark:text-emerald-400">oneroom (9평 이하)</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`px-2 py-0.5 rounded text-[11px] font-bold tracking-wide select-none ${
                      isDark ? 'bg-[#064E3B]/70 text-[#34D399] border border-[#065F46]' : 'bg-[#E8F8F0] text-[#00A86B]'
                    }`}>
                      Do
                    </span>
                    <span className={`text-[14px] font-medium ${isDark ? 'text-white' : 'text-[#191F28]'}`}>
                      괄호 앞에 국문이 올때는 붙여쓰기 | <span className="font-semibold text-emerald-600 dark:text-emerald-400">원룸/오피스텔(9평 이하)</span>
                    </span>
                  </div>
                </td>
              </tr>

              {/* 5. : [대] */}
              <tr className={`border-b ${isDark ? 'border-[#222129]' : 'border-[#E5E8EB]'}`}>
                <td className={`w-[32%] md:w-[28%] p-4 md:p-5 align-top text-[14px] font-bold ${
                  isDark ? 'text-white bg-[#17161E]' : 'text-[#191F28] bg-[#F9FAFB]'
                }`}>
                  5. : [대]
                </td>
                <td className="p-4 md:p-5 space-y-2.5">
                  <div className="flex items-center justify-between gap-3 group">
                    <div className="flex items-center gap-3">
                      <span className={`px-2 py-0.5 rounded text-[11px] font-bold tracking-wide select-none ${
                        isDark ? 'bg-[#064E3B]/70 text-[#34D399] border border-[#065F46]' : 'bg-[#E8F8F0] text-[#00A86B]'
                      }`}>
                        Do
                      </span>
                      <span className={`text-[14px] font-medium ${isDark ? 'text-white' : 'text-[#191F28]'}`}>
                        글자와 : 를 붙여 쓰기 | <span className="font-semibold text-emerald-600 dark:text-emerald-400">1:1 (일대일)</span>
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`px-2 py-0.5 rounded text-[11px] font-bold tracking-wide select-none ${
                      isDark ? 'bg-[#7F1D1D]/60 text-[#F87171] border border-[#991B1B]' : 'bg-[#FEECEB] text-[#F04438]'
                    }`}>
                      Don't
                    </span>
                    <span className={`text-[14px] ${isDark ? 'text-[#8E8E93]' : 'text-[#8B95A1]'}`}>
                      글자와 : 를 띄어 쓰기 | 1 : 1 (일 대 일)
                    </span>
                  </div>
                </td>
              </tr>

              {/* 6. & */}
              <tr>
                <td className={`w-[32%] md:w-[28%] p-4 md:p-5 align-top text-[14px] font-bold ${
                  isDark ? 'text-white bg-[#17161E]' : 'text-[#191F28] bg-[#F9FAFB]'
                }`}>
                  6. &
                </td>
                <td className="p-4 md:p-5 space-y-2.5">
                  <div className="flex items-center justify-between gap-3 group">
                    <div className="flex items-center gap-3">
                      <span className={`px-2 py-0.5 rounded text-[11px] font-bold tracking-wide select-none ${
                        isDark ? 'bg-[#064E3B]/70 text-[#34D399] border border-[#065F46]' : 'bg-[#E8F8F0] text-[#00A86B]'
                      }`}>
                        Do
                      </span>
                      <span className={`text-[14px] font-medium ${isDark ? 'text-white' : 'text-[#191F28]'}`}>
                        글자와 & 를 띄어 쓰기 | <span className="font-semibold text-emerald-600 dark:text-emerald-400">조건 & 혜택</span>
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`px-2 py-0.5 rounded text-[11px] font-bold tracking-wide select-none ${
                      isDark ? 'bg-[#7F1D1D]/60 text-[#F87171] border border-[#991B1B]' : 'bg-[#FEECEB] text-[#F04438]'
                    }`}>
                      Don't
                    </span>
                    <span className={`text-[14px] ${isDark ? 'text-[#8E8E93]' : 'text-[#8B95A1]'}`}>
                      글자와 & 를 붙여 쓰기 | 조건&혜택
                    </span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
