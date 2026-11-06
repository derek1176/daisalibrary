import React, { useState } from 'react';
import { OverviewShowcase } from './components/showcase/OverviewShowcase';
import { ColorsShowcase } from './components/showcase/ColorsShowcase';
import { TypographyShowcase } from './components/showcase/TypographyShowcase';
import { ButtonsShowcase } from './components/showcase/ButtonsShowcase';
import { InputsShowcase } from './components/showcase/InputsShowcase';
import { ModalsShowcase } from './components/showcase/ModalsShowcase';
import { ScreensShowcase } from './components/showcase/ScreensShowcase';

import {
  Palette,
  Type,
  MousePointerClick,
  FormInput,
  CopyCheck,
  Smartphone,
  Layout,
  Search,
  ExternalLink,
  Menu,
  X,
  Compass,
  Boxes,
  Sparkles
} from 'lucide-react';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navGroups = [
    {
      group: 'GET STARTED',
      icon: Compass,
      items: [
        { id: 'overview', label: '개요 & 그리드 (Overview)', icon: Layout, tag: 'Guide' },
      ],
    },
    {
      group: 'FOUNDATION',
      icon: Boxes,
      items: [
        { id: 'colors', label: 'Colors (컬러 팔레트)', icon: Palette, tag: '12 Tokens' },
        { id: 'typography', label: 'Typography (6대 규격)', icon: Type, tag: 'Pretendard' },
      ],
    },
    {
      group: 'COMPONENTS',
      icon: Sparkles,
      items: [
        { id: 'buttons', label: 'Buttons (4대 버튼 규격)', icon: MousePointerClick, tag: '4 Types' },
        { id: 'inputs', label: 'Form Inputs (입력 폼)', icon: FormInput, tag: '312x56' },
        { id: 'modals', label: 'Modals & Sheets (오버레이)', icon: CopyCheck, tag: 'Interactive' },
      ],
    },
    {
      group: 'REAL PRODUCTION',
      icon: Smartphone,
      items: [
        { id: 'screens', label: '피그마 실제 화면 재현', icon: Smartphone, tag: '4 Screens' },
      ],
    },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredNavGroups = navGroups.map((g) => ({
    ...g,
    items: g.items.filter((item) =>
      item.label.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((g) => g.items.length > 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FB] text-text-01">
      {/* Top Sticky Header */}
      <header className="sticky top-0 z-40 h-[64px] bg-white border-b border-etc-03 px-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-text-02 hover:bg-etc-04"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Logo & Version */}
          <div
            onClick={() => handleNavClick('overview')}
            className="flex items-center gap-2.5 cursor-pointer select-none"
          >
            <div className="w-8 h-8 rounded-[8px] bg-main-01 text-white font-black flex items-center justify-center text-[18px] tracking-tighter shadow-sm">
              24
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[18px] font-extrabold tracking-da24 text-text-01">
                daisalibrary
              </span>
              <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-main-04 text-main-01 border border-main-02/20">
                v1.2 Seed
              </span>
            </div>
          </div>
        </div>

        {/* Header Search & External Links */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center w-[220px] lg:w-[280px] h-[38px] px-3 rounded-[8px] bg-etc-04 border border-etc-02 focus-within:border-main-01 focus-within:bg-white transition-colors">
            <Search className="w-4 h-4 text-text-04 mr-2 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="컴포넌트 검색..."
              className="w-full bg-transparent text-[13px] outline-none text-text-01 placeholder:text-text-04"
            />
          </div>

          <a
            href="https://www.figma.com/design/csWoLlTCHOtuE7oAMswuL7"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-[8px] text-[13px] font-bold text-text-02 hover:text-main-01 hover:bg-etc-04 transition-colors"
          >
            <span>Figma 원본</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      {/* Main Container */}
      <div className="flex-1 flex max-w-[1440px] w-full mx-auto">
        {/* Left Sidebar (Desktop) */}
        <aside
          className={`fixed md:sticky top-[64px] z-30 w-[260px] lg:w-[280px] h-[calc(100vh-64px)] overflow-y-auto bg-white border-r border-etc-03 p-4 shrink-0 transition-transform duration-200 ${
            mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
          }`}
        >
          <div className="space-y-6">
            {filteredNavGroups.map((group) => (
              <div key={group.group} className="space-y-1">
                <div className="px-3 py-1 text-[11px] font-bold text-text-04 tracking-wider">
                  {group.group}
                </div>
                {group.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`w-full h-[40px] px-3 rounded-[8px] text-[14px] font-medium tracking-da24 flex items-center justify-between transition-all select-none ${
                        isActive
                          ? 'bg-main-04 text-main-01 font-bold'
                          : 'text-text-02 hover:bg-etc-04 hover:text-text-01'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className={`w-4 h-4 ${isActive ? 'text-main-01' : 'text-text-03'}`} />
                        <span>{item.label}</span>
                      </div>
                      {item.tag && (
                        <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                          isActive ? 'bg-main-01 text-white' : 'bg-etc-04 text-text-04'
                        }`}>
                          {item.tag}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>

          <div className="mt-8 pt-4 border-t border-etc-03 px-3 text-[12px] text-text-04 leading-[18px]">
            <div><strong>다이사(da24)</strong> 디자인시스템</div>
            <div>벤치마크: 당근 Seed Design</div>
            <div className="mt-1 text-[11px]">Strict 6 Even Typography System</div>
          </div>
        </aside>

        {/* Right Main Content */}
        <main className="flex-1 p-6 md:p-10 lg:p-12 overflow-x-hidden min-w-0">
          <div className="max-w-[1040px] mx-auto">
            {activeTab === 'overview' && <OverviewShowcase onNavigate={handleNavClick} />}
            {activeTab === 'colors' && <ColorsShowcase />}
            {activeTab === 'typography' && <TypographyShowcase />}
            {activeTab === 'buttons' && <ButtonsShowcase />}
            {activeTab === 'inputs' && <InputsShowcase />}
            {activeTab === 'modals' && <ModalsShowcase />}
            {activeTab === 'screens' && <ScreensShowcase />}
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-etc-03 py-8 px-6 text-center text-text-03 text-[13px] tracking-da24">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-main-01">daisalibrary</span>
            <span>© 2026 다이사 (da24) Design System. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-4 text-text-04 text-[12px]">
            <span>File Key: csWoLlTCHOtuE7oAMswuL7</span>
            <span>•</span>
            <span>Pretendard Typography</span>
            <span>•</span>
            <span>React + Tailwind CSS</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
