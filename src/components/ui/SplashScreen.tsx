import React, { useState, useEffect } from 'react';

export const SplashScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [isFadingOut, setIsFadingOut] = useState(false);

  // daisalibrary 12글자 스펙 (중앙에서 시작하여 양옆으로 퍼지는 드로잉)
  const letters = [
    { char: 'd', width: 25, isBrand: true },
    { char: 'a', width: 23, isBrand: true },
    { char: 'i', width: 12, isBrand: true },
    { char: 's', width: 21, isBrand: true },
    { char: 'a', width: 23, isBrand: true },
    { char: 'l', width: 12, isBrand: false },
    { char: 'i', width: 12, isBrand: false },
    { char: 'b', width: 25, isBrand: false },
    { char: 'r', width: 17, isBrand: false },
    { char: 'a', width: 23, isBrand: false },
    { char: 'r', width: 17, isBrand: false },
    { char: 'y', width: 23, isBrand: false },
  ];

  // 중앙(인덱스 5, 6: l, i)에서 시작해 밖으로 퍼지는 딜레이 계산
  const getDelay = (idx: number) => {
    const center = 5.5;
    const distFromCenter = Math.abs(idx - center);
    // 0.5 -> 0.05s, 1.5 -> 0.18s, 2.5 -> 0.31s ...
    return (distFromCenter - 0.5) * 0.13 + 0.05;
  };

  useEffect(() => {
    // 2.1초에 부드러운 페이드아웃 시작
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 2100);

    // 2.5초에 스플래시 종료 및 앱 진입
    const endTimer = setTimeout(() => {
      onComplete();
    }, 2500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(endTimer);
    };
  }, [onComplete]);

  // 클릭 시 즉시 스킵
  const handleSkip = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      onComplete();
    }, 250);
  };

  return (
    <div
      onClick={handleSkip}
      className={`fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center select-none cursor-pointer transition-all duration-400 ease-out ${
        isFadingOut ? 'opacity-0 scale-[1.03] pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      <div className="flex flex-col items-center">
        {/* 중앙에서 밖으로 드로잉되는 로고 텍스트 */}
        <div className="flex items-center justify-center -space-x-[1.5px]">
          {letters.map((item, idx) => (
            <svg
              key={idx}
              width={item.width}
              height="60"
              viewBox={`0 0 ${item.width} 60`}
              className="overflow-visible"
            >
              <text
                x="50%"
                y="45"
                textAnchor="middle"
                className="animate-stroke-letter"
                style={{
                  animationDelay: `${getDelay(idx)}s`,
                  fontFamily: "'Pretendard Variable', 'Pretendard', sans-serif",
                  fontWeight: 900,
                  fontSize: '40px',
                  letterSpacing: '-1.5px',
                  stroke: item.isBrand ? '#1219F7' : '#191F28',
                  fill: item.isBrand ? '#1219F7' : '#191F28',
                  strokeWidth: 2,
                  strokeLinejoin: 'round',
                  strokeLinecap: 'round',
                }}
              >
                {item.char}
              </text>
            </svg>
          ))}
        </div>

        {/* 중앙에서 부드럽게 퍼지는 액센트 라인 */}
        <div className="mt-3 w-12 h-[2px] bg-[#1219F7] rounded-full animate-scaleUp opacity-80" />

        {/* 하단 서브타이틀 */}
        <div className="mt-2.5 overflow-hidden">
          <span className="text-[11px] font-extrabold tracking-[0.28em] text-[#8B95A1] uppercase animate-fadeIn">
            Design System
          </span>
        </div>
      </div>

      {/* 우측 하단 미세 안내 */}
      <div className="absolute bottom-6 text-[11px] text-[#CBD5E1] font-medium tracking-wide">
        클릭하여 넘어가기
      </div>
    </div>
  );
};

export default SplashScreen;
