import React, { useState } from 'react';
import { TYPOGRAPHY_TOKENS } from '../../tokens';
import { ShieldAlert, Type } from 'lucide-react';

export const TypographyShowcase: React.FC = () => {
  const [testText, setTestText] = useState('다이사에서 검증된 프리미엄 이사/청소 견적을 쉽고 빠르게 받아보세요.');

  return (
    <div className="space-y-10">
      <div>
        <h2 className="text-[24px] font-bold text-text-01 leading-[34px] tracking-da24">
          Typography System
        </h2>
        <p className="mt-2 text-[16px] text-text-03 leading-[24px] tracking-da24">
          다이사 디자인시스템은 가독성과 일관성을 위해 <strong>Pretendard 단일 폰트</strong>와 <strong>짝수 6개 규격</strong>만을 엄격히 허용합니다.
        </p>
      </div>

      {/* Strict Design Rule Card */}
      <div className="bg-white border-l-4 border-l-main-01 border border-etc-02 rounded-r-[12px] p-5 shadow-sm space-y-3">
        <div className="flex items-center gap-2 text-main-01">
          <ShieldAlert className="w-5 h-5" />
          <h3 className="text-[16px] font-bold tracking-da24">다이사 타이포그래피 핵심 원칙</h3>
        </div>
        <ul className="text-[14px] text-text-02 space-y-1.5 list-disc list-inside leading-[22px]">
          <li><strong>6대 짝수 규격 절대 준수:</strong> 12px, 14px, 16px, 18px, 20px, 24px 외의 홀수(13, 15, 17, 19, 21, 23px) 및 소수점 크기는 엄격히 차단됩니다.</li>
          <li><strong>자간(Letter-spacing) 고정:</strong> 모든 텍스트는 <code className="bg-etc-04 px-1.5 py-0.5 rounded text-main-01 font-mono">-1px (-0.01em)</code>으로 통일되어 최상의 한글 조판 리듬을 제공합니다.</li>
          <li><strong>단일 서체 사용:</strong> Pretendard를 메인으로 적용하여 모바일/웹 전 환경에서 깨끗한 시인성을 보장합니다.</li>
        </ul>
      </div>

      {/* Live Text Sandbox */}
      <div className="bg-white border border-etc-02 rounded-[12px] p-5 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[14px] font-bold text-text-02 flex items-center gap-1.5">
            <Type className="w-4 h-4 text-main-01" /> 타이포그래피 실시간 테스트
          </span>
          <button
            onClick={() => setTestText('다이사에서 검증된 프리미엄 이사/청소 견적을 쉽고 빠르게 받아보세요.')}
            className="text-[12px] text-text-03 hover:text-main-01 underline"
          >
            기본 텍스트 초기화
          </button>
        </div>
        <input
          type="text"
          value={testText}
          onChange={(e) => setTestText(e.target.value)}
          className="w-full h-[48px] px-4 rounded-[8px] bg-etc-04 border border-etc-02 text-[14px] outline-none focus:border-main-01"
          placeholder="테스트할 문구를 입력해 보세요"
        />
      </div>

      {/* Typography Scale Table */}
      <div className="bg-white border border-etc-02 rounded-[12px] overflow-hidden shadow-sm">
        <div className="px-6 py-4 border-b border-etc-03 bg-[#FCFDFE] flex justify-between items-center">
          <h3 className="text-[16px] font-bold text-text-01">표준 텍스트 계층 스펙 (6대 규격)</h3>
          <span className="text-[12px] text-text-04">Line-height & Font-size Auto Layout 규격</span>
        </div>

        <div className="divide-y divide-etc-03">
          {TYPOGRAPHY_TOKENS.map((token) => {
            const isBold = token.weight === 'Bold';
            return (
              <div key={token.name} className="p-6 hover:bg-[#F9FAFC] transition-colors">
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[14px] font-bold text-main-01 bg-main-04 px-2 py-0.5 rounded">
                      {token.name}
                    </span>
                    <span className="text-[12px] font-semibold text-text-03 bg-etc-04 border border-etc-03 px-2 py-0.5 rounded-full">
                      {token.size}px / {token.weight}
                    </span>
                    <span className="text-[12px] text-text-04 hidden sm:inline">
                      LH: {token.lineHeight} | LS: {token.letterSpacing}
                    </span>
                  </div>
                  <span className="text-[13px] text-text-03">
                    용도: <strong className="text-text-02">{token.usage}</strong>
                  </span>
                </div>

                {/* Rendered Text */}
                <div
                  className="tracking-da24 text-text-01"
                  style={{
                    fontSize: `${token.size}px`,
                    fontWeight: isBold ? 700 : 400,
                  }}
                >
                  {testText || token.sampleText}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
