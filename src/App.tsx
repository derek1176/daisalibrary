import React, { useState } from 'react';
import { HomeSection } from './components/sections/HomeSection';
import { LayoutSection } from './components/sections/LayoutSection';
import { ColorSection } from './components/sections/ColorSection';
import { TypographySection } from './components/sections/TypographySection';
import { SpacingRadiusSection } from './components/sections/SpacingRadiusSection';
import { ButtonSection } from './components/sections/ButtonSection';
import { InputSection } from './components/sections/InputSection';
import { ModalSection } from './components/sections/ModalSection';

import {
  Menu,
  X
} from 'lucide-react';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [serviceMode, setServiceMode] = useState<'customer' | 'partner'>('customer');

  const navItems = [
    { id: 'home', label: '컴포넌트 모아보기' },
    { id: 'layout', label: '작업 규격' },
    { id: 'colors', label: '색상' },
    { id: 'typography', label: '타이포그래피' },
    { id: 'spacing-radius', label: '여백 및 라운드' },
    { id: 'buttons', label: '버튼' },
    { id: 'inputs', label: '입력창' },
    { id: 'modals', label: '모달 및 시트' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-text-01">
      {/* Top Sticky Header */}
      <header className="sticky top-0 z-40 h-[60px] bg-white/90 backdrop-blur-md border-b border-etc-03 px-6 md:px-10 flex items-center justify-between shadow-2xs">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-text-02 hover:bg-etc-04 transition-colors"
            aria-label="메뉴 열기"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Official Logo (No v1.2 badge) */}
          <div
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 cursor-pointer select-none group"
          >
            <img
              src="/logo-dark.png"
              alt="daisalibrary logo"
              className="h-[22px] md:h-[24px] w-auto object-contain transition-transform group-hover:scale-102"
            />
          </div>
        </div>

        {/* Right Header Area: Customer / Partner Mode Toggle */}
        <div className="flex items-center bg-etc-04 p-1 rounded-[10px] border border-etc-02 text-[13px] font-bold">
          <button
            onClick={() => setServiceMode('customer')}
            className={`px-3.5 py-1.5 rounded-[7px] transition-all select-none ${
              serviceMode === 'customer'
                ? 'bg-white text-main-01 shadow-2xs font-extrabold'
                : 'text-text-03 hover:text-text-01'
            }`}
          >
            고객향
          </button>
          <button
            onClick={() => setServiceMode('partner')}
            className={`px-3.5 py-1.5 rounded-[7px] transition-all select-none ${
              serviceMode === 'partner'
                ? 'bg-white text-main-01 shadow-2xs font-extrabold'
                : 'text-text-03 hover:text-text-01'
            }`}
          >
            파트너향
          </button>
        </div>
      </header>

      {/* Main Body */}
      {serviceMode === 'partner' ? (
        /* Partner Mode Placeholder */
        <div className="flex-1 flex flex-col items-center justify-center p-8 text-center min-h-[60vh] max-w-lg mx-auto space-y-4">
          <div className="w-14 h-14 rounded-2xl bg-etc-04 border border-etc-02 flex items-center justify-center text-text-03 text-2xl font-bold">
            P
          </div>
          <h2 className="text-[22px] font-bold text-text-01">
            파트너향 디자인시스템 준비 중
          </h2>
          <p className="text-[14px] text-text-03 leading-relaxed">
            파트너(기사님/업체용) 디자인시스템은 현재 준비 단계에 있습니다.<br />
            현재는 공식 <strong>[고객향]</strong> 디자인시스템을 조회하실 수 있습니다.
          </p>
          <button
            onClick={() => setServiceMode('customer')}
            className="mt-2 px-5 py-2.5 rounded-[10px] bg-main-01 text-white font-bold text-[14px] hover:bg-main-02 transition-colors shadow-xs"
          >
            고객향 디자인시스템 보기
          </button>
        </div>
      ) : (
        /* Customer Mode Main Content */
        <div className="flex-1 flex max-w-[1440px] w-full mx-auto">
          {/* Left Sticky Sidebar */}
          <aside
            className={`fixed md:sticky top-[60px] z-30 w-[230px] lg:w-[250px] h-[calc(100vh-60px)] overflow-y-auto bg-white border-r border-etc-03 p-3 shrink-0 transition-transform duration-200 ${
              mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
            }`}
          >
            <div className="space-y-1">
              <div className="px-3 py-2 text-[11px] font-bold text-text-04 tracking-wider">
                메뉴
              </div>
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full h-[40px] px-3.5 rounded-[8px] text-[14px] tracking-da24 flex items-center transition-all select-none text-left ${
                      isActive
                        ? 'bg-main-01 text-white font-bold shadow-2xs'
                        : 'text-text-02 font-medium hover:bg-etc-04 hover:text-text-01'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            <div className="mt-8 pt-4 border-t border-etc-03 px-3 text-[12px] text-text-04 leading-relaxed">
              <div className="font-bold text-text-03">daisalibrary</div>
              <div>다이사(da24) 디자인시스템</div>
              <div className="mt-1 text-[11px] text-text-04">고객향 공식 표준 규격</div>
            </div>
          </aside>

          {/* Right Main Content Panel */}
          <main className="flex-1 p-6 md:p-10 lg:p-14 overflow-x-hidden min-w-0">
            <div className="max-w-[1000px] mx-auto space-y-20">
              {activeTab === 'home' && <HomeSection onSelectTab={(id) => handleNavClick(id)} />}
              {activeTab === 'layout' && <LayoutSection />}
              {activeTab === 'colors' && <ColorSection />}
              {activeTab === 'typography' && <TypographySection />}
              {activeTab === 'spacing-radius' && <SpacingRadiusSection />}
              {activeTab === 'buttons' && <ButtonSection />}
              {activeTab === 'inputs' && <InputSection />}
              {activeTab === 'modals' && <ModalSection />}
            </div>
          </main>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-white border-t border-etc-03 py-8 px-6 text-text-03 text-[13px] tracking-da24">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="/logo-dark.png" alt="daisalibrary logo" className="h-[20px] w-auto object-contain" />
            <span>© 2026 다이사 (da24) 디자인시스템</span>
          </div>
          <div className="flex items-center gap-4 text-text-04 text-[12px]">
            <span>피그마 csWoLlTCHOtuE7oAMswuL7</span>
            <span>•</span>
            <span>Pretendard 폰트</span>
            <span>•</span>
            <span>다이사 공식 규격</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
