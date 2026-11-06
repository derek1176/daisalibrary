import React, { useState, useEffect } from 'react';
import { HomeSection } from './components/sections/HomeSection';
import { LayoutSection } from './components/sections/LayoutSection';
import { WritingSection } from './components/sections/WritingSection';
import { ColorSection } from './components/sections/ColorSection';
import { TypographySection } from './components/sections/TypographySection';
import { SpacingRadiusSection } from './components/sections/SpacingRadiusSection';
import { ButtonSection } from './components/sections/ButtonSection';
import { InputSection } from './components/sections/InputSection';
import { ModalSection } from './components/sections/ModalSection';
import { ArchiveSection } from './components/sections/ArchiveSection';
import { IconSection } from './components/sections/IconSection';

import {
  Menu,
  X,
  Search,
  ChevronRight
} from 'lucide-react';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [serviceMode, setServiceMode] = useState<'customer' | 'partner'>('customer');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);

  const handleServiceModeChange = (newMode: 'customer' | 'partner') => {
    if (serviceMode === newMode) return;
    setServiceMode(newMode);
  };

  const navItems = [
    { id: 'home', label: 'Components', category: 'Overview', koLabel: '컴포넌트 모아보기' },
    { id: 'archive', label: 'Resources', category: 'Overview', koLabel: '자료실' },
    { id: 'colors', label: 'Colors', category: 'Foundations', koLabel: '색상 토큰' },
    { id: 'typography', label: 'Typography', category: 'Foundations', koLabel: '타이포그래피' },
    { id: 'icons', label: 'Icons', category: 'Foundations', koLabel: '아이콘' },
    { id: 'spacing-radius', label: 'Spacing & Radius', category: 'Foundations', koLabel: '여백 및 라운드' },
    { id: 'layout', label: 'Layout', category: 'Foundations', koLabel: '작업 규격' },
    { id: 'writing', label: 'Writing Guide', category: 'Foundations', koLabel: '라이팅 가이드' },
    { id: 'buttons', label: 'Buttons', category: 'Components', koLabel: '버튼' },
    { id: 'inputs', label: 'Inputs', category: 'Components', koLabel: '입력창' },
    { id: 'modals', label: 'Dialog & Sheet', category: 'Components', koLabel: '모달 및 바텀시트' },
  ];

  // Quick search filter
  const filteredNavItems = navItems.filter(item =>
    item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.koLabel.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    setSearchQuery('');
    setSearchFocused(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Keyboard shortcut '/' to focus search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && document.activeElement?.tagName !== 'INPUT') {
        e.preventDefault();
        const searchInput = document.getElementById('toss-search-input');
        searchInput?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans antialiased bg-[#EBEEF2] text-[#191F28] selection:bg-[#E8F3FF] selection:text-[#1B64DA] relative">
      {/* ============================================================ */}
      {/* Toss Style GNB Header (Full Width Clean White) */}
      {/* ============================================================ */}
      <header className="sticky top-0 z-40 h-[60px] backdrop-blur-md bg-white/95 border-b border-[#E5E8EB] px-6 lg:px-8 flex items-center justify-between w-full">
        <div className="flex items-center gap-6">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 -ml-2 rounded-[8px] text-[#4E5968] hover:bg-[#F2F4F6] transition-colors"
            aria-label="메뉴 열기"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Official Logo */}
          <div
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer select-none group -ml-1"
          >
            <img
              src="/logo-dark.png"
              alt="daisalibrary logo"
              className="h-[24px] md:h-[26px] w-auto object-contain transition-transform group-hover:scale-102"
            />
            <span className="hidden sm:inline-block text-[13px] font-bold pl-2 border-l border-[#E5E8EB] text-[#8B95A1]">
              {serviceMode === 'partner' ? '파트너향 디자인시스템' : '고객향 디자인시스템'}
            </span>
          </div>
        </div>

        {/* Center: Search Bar */}
        <div className="relative hidden md:block w-[280px] lg:w-[320px]">
          <div className={`flex items-center gap-2.5 px-3.5 py-2 rounded-[12px] transition-all border ${
            searchFocused
              ? 'bg-white border-[#3182F6] ring-2 ring-[#3182F6]/10'
              : 'bg-[#F2F4F6] border-transparent hover:bg-[#E5E8EB]/70'
          }`}>
            <Search className="w-4 h-4 text-[#8B95A1]" />
            <input
              id="toss-search-input"
              type="text"
              placeholder="검색어를 입력하세요 (단축키 /)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setTimeout(() => setSearchFocused(false), 200)}
              className="w-full bg-transparent text-[13px] outline-none font-medium text-[#191F28] placeholder-[#8B95A1]"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="text-[12px] text-[#8B95A1] hover:text-[#191F28]"
              >
                ✕
              </button>
            )}
          </div>

          {/* Search Dropdown Results */}
          {searchFocused && searchQuery && (
            <div className="absolute top-[48px] left-0 right-0 rounded-[16px] shadow-[0_12px_36px_rgba(0,0,0,0.12)] border border-[#E5E8EB] bg-white p-2 space-y-1 z-50 animate-scaleUp">
              {filteredNavItems.length > 0 ? (
                filteredNavItems.map(item => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className="w-full px-3.5 py-2.5 rounded-[10px] text-left flex items-center justify-between text-[13px] hover:bg-[#F2F4F6] transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-[#191F28]">{item.label}</span>
                      <span className="text-[11px] text-[#8B95A1]">({item.koLabel})</span>
                    </div>
                    <span className="text-[11px] px-2 py-0.5 rounded-full font-medium bg-[#F2F4F6] text-[#8B95A1]">
                      {item.category}
                    </span>
                  </button>
                ))
              ) : (
                <div className="p-4 text-center text-[13px] text-[#8B95A1]">
                  검색 결과가 없습니다.
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right Header Area: Customer / Partner Segmented Toggle */}
        <div className="flex items-center gap-3">
          <div className="flex items-center p-1 rounded-[12px] border bg-[#F2F4F6] border-[#E5E8EB]/60">
            <button
              onClick={() => handleServiceModeChange('customer')}
              className={`px-3.5 py-1.5 rounded-[9px] text-[13px] transition-all select-none ${
                serviceMode === 'customer'
                  ? 'bg-white text-[#191F28] font-bold shadow-[0_1px_4px_rgba(0,0,0,0.06)]'
                  : 'text-[#6B7684] hover:text-[#191F28] font-medium'
              }`}
            >
              고객향
            </button>
            <button
              onClick={() => handleServiceModeChange('partner')}
              className={`px-3.5 py-1.5 rounded-[9px] text-[13px] transition-all select-none ${
                serviceMode === 'partner'
                  ? 'bg-white text-[#191F28] font-bold shadow-[0_1px_4px_rgba(0,0,0,0.06)]'
                  : 'text-[#6B7684] hover:text-[#191F28] font-medium'
              }`}
            >
              파트너향
            </button>
          </div>
        </div>
      </header>

      {/* ============================================================ */}
      {/* Main Body Layout (Left Sidebar + Right Main Content) */}
      {/* ============================================================ */}
      <div className="flex-1 flex w-full">
        {/* ============================================================ */}
        {/* Left Sticky Sidebar */}
        {/* ============================================================ */}
        <aside
          className={`fixed md:sticky top-[60px] left-0 z-30 w-[240px] lg:w-[250px] h-[calc(100vh-60px)] overflow-y-auto border-r border-[#E5E8EB] bg-white p-4 shrink-0 transition-transform duration-200 ${
            mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
          }`}
        >
          <div className="space-y-6">
            {/* Group 1: OVERVIEW (아이콘 삭제 및 영어 이름 적용) */}
            <div>
              <div className="px-3 py-1.5 text-[11px] font-bold tracking-wider text-[#8B95A1] uppercase">
                Overview
              </div>
              <div className="space-y-0.5">
                <button
                  onClick={() => handleNavClick('home')}
                  className={`w-full h-[40px] px-3.5 rounded-[12px] text-[14px] flex items-center justify-between transition-all select-none text-left ${
                    activeTab === 'home'
                      ? 'bg-[#E8F3FF] text-[#1B64DA] font-bold'
                      : 'text-[#333D4B] font-semibold hover:bg-[#F2F4F6] hover:text-[#191F28]'
                  }`}
                >
                  <span>Components</span>
                  {activeTab === 'home' && <ChevronRight className="w-4 h-4 text-[#1B64DA]" />}
                </button>

                <button
                  onClick={() => handleNavClick('archive')}
                  className={`w-full h-[40px] px-3.5 rounded-[12px] text-[14px] flex items-center justify-between transition-all select-none text-left ${
                    activeTab === 'archive'
                      ? 'bg-[#E8F3FF] text-[#1B64DA] font-bold'
                      : 'text-[#333D4B] font-semibold hover:bg-[#F2F4F6] hover:text-[#191F28]'
                  }`}
                >
                  <span>Resources</span>
                  {activeTab === 'archive' && <ChevronRight className="w-4 h-4 text-[#1B64DA]" />}
                </button>
              </div>
            </div>

            {/* Group 2: FOUNDATIONS */}
            <div>
              <div className="px-3 py-1.5 text-[11px] font-bold tracking-wider text-[#8B95A1] uppercase">
                Foundations
              </div>
              <div className="space-y-0.5">
                {[
                  { id: 'colors', label: 'Colors' },
                  { id: 'typography', label: 'Typography' },
                  { id: 'icons', label: 'Icons', isShared: true },
                  { id: 'spacing-radius', label: 'Spacing & Radius' },
                  { id: 'layout', label: 'Layout' },
                  { id: 'writing', label: 'Writing Guide', isShared: true },
                ].map((item) => {
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`w-full h-[38px] px-3.5 rounded-[12px] text-[14px] flex items-center justify-between transition-all select-none text-left ${
                        isActive
                          ? 'bg-[#E8F3FF] text-[#1B64DA] font-bold'
                          : 'text-[#4E5968] font-medium hover:bg-[#F2F4F6] hover:text-[#191F28]'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span>{item.label}</span>
                        {item.isShared && (
                          <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-[#E8F3FF] text-[#1B64DA]">
                            Shared
                          </span>
                        )}
                      </div>
                      {isActive && <ChevronRight className="w-4 h-4 text-[#1B64DA]" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Group 3: COMPONENTS */}
            <div>
              <div className="px-3 py-1.5 text-[11px] font-bold tracking-wider text-[#8B95A1] uppercase">
                Components
              </div>
              <div className="space-y-0.5">
                {[
                  { id: 'buttons', label: 'Buttons' },
                  { id: 'inputs', label: 'Inputs' },
                  { id: 'modals', label: 'Dialog & Sheet' },
                ].map((item) => {
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`w-full h-[38px] px-3.5 rounded-[12px] text-[14px] flex items-center justify-between transition-all select-none text-left ${
                        isActive
                          ? 'bg-[#E8F3FF] text-[#1B64DA] font-bold'
                          : 'text-[#4E5968] font-medium hover:bg-[#F2F4F6] hover:text-[#191F28]'
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && <ChevronRight className="w-4 h-4 text-[#1B64DA]" />}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Sidebar Bottom Status */}
          <div className="mt-8 pt-5 border-t border-[#F2F4F6] px-3 space-y-1 text-[12px] text-[#8B95A1]">
            <div className="font-bold text-[#4E5968]">daisalibrary</div>
            <div>{serviceMode === 'partner' ? '파트너향 디자인시스템' : '고객향 디자인시스템'}</div>
            <div className="text-[11px] pt-1 flex items-center gap-1.5">
              <span className={`w-2 h-2 rounded-full inline-block ${serviceMode === 'partner' ? 'bg-[#595EF9]' : 'bg-emerald-500'}`} />
              <span className="text-[#B0B8C1]">
                {serviceMode === 'partner' ? 'Radius 6px · Body 18px 규격' : 'Radius 10px · Body 16px 규격'}
              </span>
            </div>
          </div>
        </aside>

        {/* ============================================================ */}
        {/* Right Main Content Panel */}
        {/* ============================================================ */}
        <main className="flex-1 p-6 md:p-10 lg:p-12 overflow-x-hidden min-w-0">
          <div className="max-w-[1040px] mx-auto space-y-16">
            {activeTab === 'home' && <HomeSection mode={serviceMode} onSelectTab={(id) => handleNavClick(id)} />}
            {activeTab === 'archive' && <ArchiveSection mode={serviceMode} />}
            {activeTab === 'colors' && <ColorSection mode={serviceMode} />}
            {activeTab === 'typography' && <TypographySection mode={serviceMode} />}
            {activeTab === 'icons' && <IconSection mode={serviceMode} />}
            {activeTab === 'spacing-radius' && <SpacingRadiusSection mode={serviceMode} />}
            {activeTab === 'layout' && <LayoutSection mode={serviceMode} />}
            {activeTab === 'writing' && <WritingSection mode={serviceMode} />}
            {activeTab === 'buttons' && <ButtonSection mode={serviceMode} />}
            {activeTab === 'inputs' && <InputSection mode={serviceMode} />}
            {activeTab === 'modals' && <ModalSection mode={serviceMode} />}
          </div>
        </main>
      </div>

      {/* ============================================================ */}
      {/* Footer */}
      {/* ============================================================ */}
      <footer className="border-t border-[#E5E8EB] py-8 px-6 text-[13px] w-full bg-white text-[#6B7684]">
        <div className="max-w-[1040px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-extrabold text-[#191F28]">daisalibrary</span>
            <span>·</span>
            <span>다이사 & 위매치 공식 디자인시스템</span>
          </div>
          <div className="text-[12px] text-[#8B95A1]">
            {serviceMode === 'partner' ? '파트너향 디자인시스템 v1.0.0' : '고객향 디자인시스템 v1.0.0'}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;