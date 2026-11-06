import React, { useState } from 'react';
import { ColorSection } from './components/sections/ColorSection';
import { TypographySection } from './components/sections/TypographySection';
import { SpacingRadiusSection } from './components/sections/SpacingRadiusSection';
import { ButtonSection } from './components/sections/ButtonSection';
import { InputSection } from './components/sections/InputSection';
import { ModalSection } from './components/sections/ModalSection';

import {
  Palette,
  Type,
  Maximize2,
  MousePointerClick,
  FormInput,
  CopyCheck,
  Layers,
  ExternalLink,
  Menu,
  X
} from 'lucide-react';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'all', label: '전체 보기 (All)', icon: Layers, tag: 'Full' },
    { id: 'colors', label: 'Color (컬러 팔레트)', icon: Palette, tag: '12 Tokens' },
    { id: 'typography', label: 'Typography (타이포그래피)', icon: Type, tag: 'Pretendard' },
    { id: 'spacing-radius', label: 'Spacing & Radius (간격/라운드)', icon: Maximize2, tag: '8 Radii' },
    { id: 'buttons', label: 'Buttons (버튼 4대 규격)', icon: MousePointerClick, tag: '4 Types' },
    { id: 'inputs', label: 'Form Inputs (입력 폼)', icon: FormInput, tag: '312x56' },
    { id: 'modals', label: 'Modals & Sheets (오버레이)', icon: CopyCheck, tag: 'Dimmed 60%' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-text-01">
      {/* Top Sticky Header */}
      <header className="sticky top-0 z-40 h-[72px] bg-white/90 backdrop-blur-md border-b border-etc-03 px-6 md:px-10 flex items-center justify-between shadow-2xs">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-text-02 hover:bg-etc-04 transition-colors"
            aria-label="메뉴 열기"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Large Official Logo */}
          <div
            onClick={() => handleNavClick('all')}
            className="flex items-center gap-3 cursor-pointer select-none group"
          >
            <img
              src="/logo-dark.png"
              alt="daisalibrary logo"
              className="h-[38px] md:h-[44px] w-auto object-contain transition-transform group-hover:scale-102"
            />
            <span className="hidden sm:inline-block px-2.5 py-1 rounded-full text-[11px] font-bold bg-main-04 text-main-01 border border-main-02/20">
              v1.2 Standard
            </span>
          </div>
        </div>

        {/* Right Meta Info */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 text-[13px] text-text-04 font-medium">
            <span>Pretendard</span>
            <span>·</span>
            <span>Toss TDS Style</span>
            <span>·</span>
            <span className="text-main-01 font-bold">다이사 공식 규격</span>
          </div>

          <a
            href="https://www.figma.com/design/csWoLlTCHOtuE7oAMswuL7"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-[10px] text-[13px] font-bold text-text-02 hover:text-main-01 hover:bg-etc-04 transition-colors border border-etc-02 bg-white shadow-2xs"
          >
            <span>Figma 원본</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      {/* Main Body with Left Sidebar Navigation */}
      <div className="flex-1 flex max-w-[1440px] w-full mx-auto">
        {/* Left Sticky Sidebar */}
        <aside
          className={`fixed md:sticky top-[72px] z-30 w-[270px] lg:w-[290px] h-[calc(100vh-72px)] overflow-y-auto bg-white border-r border-etc-03 p-4 shrink-0 transition-transform duration-200 ${
            mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
          }`}
        >
          <div className="space-y-6">
            <div className="space-y-1">
              <div className="px-3 py-1.5 text-[11px] font-mono font-bold text-text-04 tracking-wider uppercase">
                DESIGN SYSTEM
              </div>
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full h-[44px] px-3.5 rounded-[10px] text-[14px] font-medium tracking-da24 flex items-center justify-between transition-all select-none ${
                      isActive
                        ? 'bg-main-01 text-white font-bold shadow-soft'
                        : 'text-text-02 hover:bg-etc-04 hover:text-text-01'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-text-03'}`} />
                      <span>{item.label}</span>
                    </div>
                    {item.tag && (
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                          isActive ? 'bg-white/20 text-white' : 'bg-etc-04 text-text-04'
                        }`}
                      >
                        {item.tag}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-10 pt-4 border-t border-etc-03 px-3 text-[12px] text-text-04 leading-relaxed">
            <div className="font-bold text-text-03">daisalibrary</div>
            <div>다이사(da24) 디자인시스템</div>
            <div className="mt-1 text-[11px] text-text-04">Reference: Netlify & Toss Style</div>
          </div>
        </aside>

        {/* Right Main Content Panel */}
        <main className="flex-1 p-6 md:p-10 lg:p-14 overflow-x-hidden min-w-0">
          <div className="max-w-[1000px] mx-auto space-y-20">
            {activeTab === 'all' && (
              <>
                <ColorSection />
                <TypographySection />
                <SpacingRadiusSection />
                <ButtonSection />
                <InputSection />
                <ModalSection />
              </>
            )}

            {activeTab === 'colors' && <ColorSection />}
            {activeTab === 'typography' && <TypographySection />}
            {activeTab === 'spacing-radius' && <SpacingRadiusSection />}
            {activeTab === 'buttons' && <ButtonSection />}
            {activeTab === 'inputs' && <InputSection />}
            {activeTab === 'modals' && <ModalSection />}
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-etc-03 py-8 px-6 text-text-03 text-[13px] tracking-da24">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="/logo-dark.png" alt="daisalibrary logo" className="h-[28px] w-auto object-contain" />
            <span>© 2026 다이사 (da24) Design System. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-4 text-text-04 text-[12px]">
            <span>File Key: csWoLlTCHOtuE7oAMswuL7</span>
            <span>•</span>
            <span>Pretendard Typography</span>
            <span>•</span>
            <span>Vite + React + Tailwind CSS</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
