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
  ChevronRight,
  Layers,
  FolderDown,
  Building2,
  CheckCircle2
} from 'lucide-react';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [serviceMode, setServiceMode] = useState<'customer' | 'partner'>('customer');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);

  const isDark = serviceMode === 'partner';

  const navItems = [
    { id: 'home', label: '컴포넌트 모아보기', category: '대시보드' },
    { id: 'archive', label: '자료실', category: '자료실' },
    { id: 'colors', label: '색상 토큰', category: '기초 규격' },
    { id: 'typography', label: '타이포그래피', category: '기초 규격' },
    { id: 'icons', label: '아이콘', category: '기초 규격' },
    { id: 'spacing-radius', label: '여백 및 라운드', category: '기초 규격' },
    { id: 'layout', label: '작업 규격', category: '기초 규격' },
    { id: 'writing', label: '라이팅 가이드', category: '기초 규격' },
    { id: 'buttons', label: '버튼', category: '핵심 컴포넌트' },
    { id: 'inputs', label: '입력창', category: '핵심 컴포넌트' },
    { id: 'modals', label: '모달 및 바텀시트', category: '핵심 컴포넌트' },
  ];

  // Quick search filter
  const filteredNavItems = navItems.filter(item =>
    item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
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
    <div className={`min-h-screen flex flex-col font-sans antialiased transition-colors duration-200 ${
      isDark
        ? 'bg-[#0C0E14] text-[#F3F4F6] selection:bg-[#1E2638] selection:text-[#595EF9]'
        : 'bg-[#F9FAFB] text-[#191F28] selection:bg-[#E8F3FF] selection:text-[#1B64DA]'
    }`}>
      {/* ============================================================ */}
      {/* Toss-Style Minimal GNB Header (Full Width) */}
      {/* ============================================================ */}
      <header className={`sticky top-0 z-40 h-[60px] backdrop-blur-md border-b px-6 lg:px-8 flex items-center justify-between transition-colors w-full ${
        isDark
          ? 'bg-[#121620]/95 border-[#232936]'
          : 'bg-white/95 border-[#E5E8EB]'
      }`}>
        <div className="flex items-center gap-6">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 -ml-2 rounded-[8px] transition-colors ${
              isDark
                ? 'text-[#94A3B8] hover:bg-[#1E2536]'
                : 'text-[#4E5968] hover:bg-[#F2F4F6]'
            }`}
            aria-label="메뉴 열기"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Official Logo (White in Partner Dark, Dark in Customer Light) */}
          <div
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer select-none group -ml-1"
          >
            <img
              src={isDark ? '/logo-white.png' : '/logo-dark.png'}
              alt="daisalibrary logo"
              className="h-[24px] md:h-[26px] w-auto object-contain transition-transform group-hover:scale-102"
            />
            <span className={`hidden sm:inline-block text-[13px] font-bold pl-2 border-l ${
              isDark ? 'border-[#2B3548] text-[#94A3B8]' : 'border-[#E5E8EB] text-[#8B95A1]'
            }`}>
              {isDark ? '파트너 B2B 시스템' : '고객향 디자인시스템'}
            </span>
          </div>
        </div>

        {/* Center: Search Bar */}
        <div className="relative hidden md:block w-[280px] lg:w-[320px]">
          <div className={`flex items-center gap-2.5 px-3.5 py-2 rounded-[12px] transition-all border ${
            isDark
              ? searchFocused
                ? 'bg-[#182030] border-[#595EF9] ring-2 ring-[#595EF9]/20'
                : 'bg-[#161B26] border-[#262F40] hover:border-[#3A4560]'
              : searchFocused
              ? 'bg-white border-[#3182F6] ring-2 ring-[#3182F6]/10'
              : 'bg-[#F2F4F6] border-transparent hover:bg-[#E5E8EB]/70'
          }`}>
            <Search className={`w-4 h-4 ${isDark ? 'text-[#64748B]' : 'text-[#8B95A1]'}`} />
            <input
              id="toss-search-input"
              type="text"
              placeholder="검색어를 입력하세요 (단축키 /)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setTimeout(() => setSearchFocused(false), 200)}
              className={`w-full bg-transparent text-[13px] outline-none font-medium ${
                isDark ? 'text-white placeholder-[#64748B]' : 'text-[#191F28] placeholder-[#8B95A1]'
              }`}
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className={`text-[12px] ${isDark ? 'text-[#64748B] hover:text-white' : 'text-[#8B95A1] hover:text-[#191F28]'}`}
              >
                ✕
              </button>
            )}
          </div>

          {/* Search Dropdown Results */}
          {searchFocused && searchQuery && (
            <div className={`absolute top-[48px] left-0 right-0 rounded-[16px] shadow-[0_12px_36px_rgba(0,0,0,0.3)] border p-2 space-y-1 z-50 animate-scaleUp ${
              isDark ? 'bg-[#161B26] border-[#2B3548]' : 'bg-white border-[#E5E8EB]'
            }`}>
              {filteredNavItems.length > 0 ? (
                filteredNavItems.map(item => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full px-3.5 py-2.5 rounded-[10px] text-left flex items-center justify-between text-[13px] transition-colors ${
                      isDark ? 'hover:bg-[#1E2536]' : 'hover:bg-[#F2F4F6]'
                    }`}
                  >
                    <span className={`font-bold ${isDark ? 'text-white' : 'text-[#191F28]'}`}>{item.label}</span>
                    <span className={`text-[11px] px-2 py-0.5 rounded-full font-medium ${
                      isDark ? 'bg-[#222A3B] text-[#94A3B8]' : 'bg-[#F2F4F6] text-[#8B95A1]'
                    }`}>
                      {item.category}
                    </span>
                  </button>
                ))
              ) : (
                <div className={`p-4 text-center text-[13px] ${isDark ? 'text-[#64748B]' : 'text-[#8B95A1]'}`}>
                  검색 결과가 없습니다.
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right Header Area: Customer / Partner Segmented Toggle */}
        <div className="flex items-center gap-3">
          <div className={`flex items-center p-1 rounded-[12px] border ${
            isDark ? 'bg-[#161B26] border-[#2B3548]' : 'bg-[#F2F4F6] border-[#E5E8EB]/50'
          }`}>
            <button
              onClick={() => setServiceMode('customer')}
              className={`px-3.5 py-1.5 rounded-[9px] text-[13px] transition-all select-none ${
                serviceMode === 'customer'
                  ? 'bg-white text-[#191F28] font-bold shadow-[0_1px_4px_rgba(0,0,0,0.06)]'
                  : isDark ? 'text-[#94A3B8] hover:text-white font-medium' : 'text-[#6B7684] hover:text-[#191F28] font-medium'
              }`}
            >
              고객향
            </button>
            <button
              onClick={() => setServiceMode('partner')}
              className={`px-3.5 py-1.5 rounded-[9px] text-[13px] transition-all select-none flex items-center gap-1.5 ${
                serviceMode === 'partner'
                  ? 'bg-[#595EF9] text-white font-bold shadow-xs'
                  : isDark ? 'text-[#94A3B8] hover:text-white font-medium' : 'text-[#6B7684] hover:text-[#191F28] font-medium'
              }`}
            >
              <span>파트너향</span>
              <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded-full ${
                serviceMode === 'partner'
                  ? 'bg-black/30 text-white'
                  : isDark ? 'bg-[#222A3B] text-[#94A3B8]' : 'bg-[#E5E8EB] text-[#4E5968]'
              }`}>
                B2B 다크
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* ============================================================ */}
      {/* Main Body Layout (Left Sidebar + Right Main Content) */}
      {/* ============================================================ */}
      <div className="flex-1 flex w-full">
        {/* ============================================================ */}
        {/* Left Sticky Sidebar (Anchored to Left Screen Edge) */}
        {/* ============================================================ */}
        <aside
          className={`fixed md:sticky top-[60px] left-0 z-30 w-[240px] lg:w-[250px] h-[calc(100vh-60px)] overflow-y-auto border-r p-4 shrink-0 transition-transform duration-200 ${
            isDark
              ? 'bg-[#121620] border-[#232936]'
              : 'bg-white border-[#E5E8EB]'
          } ${
            mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
          }`}
        >
          <div className="space-y-6">
            {/* Group 1: 전체 개요 & 자료실 */}
            <div>
              <div className={`px-3 py-1.5 text-[11px] font-bold tracking-wider ${
                isDark ? 'text-[#64748B]' : 'text-[#8B95A1]'
              }`}>
                대시보드 & 자료
              </div>
              <div className="space-y-0.5">
                <button
                  onClick={() => handleNavClick('home')}
                  className={`w-full h-[40px] px-3.5 rounded-[12px] text-[14px] flex items-center justify-between transition-all select-none text-left ${
                    activeTab === 'home'
                      ? isDark
                        ? 'bg-[#1A2234] text-[#A5A8FC] font-bold border-l-2 border-[#595EF9]'
                        : 'bg-[#E8F3FF] text-[#1B64DA] font-bold'
                      : isDark
                      ? 'text-[#94A3B8] font-semibold hover:bg-[#182030] hover:text-white'
                      : 'text-[#333D4B] font-semibold hover:bg-[#F2F4F6] hover:text-[#191F28]'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Layers className={`w-4 h-4 ${isDark ? 'text-[#7075FA]' : 'text-[#8B95A1]'}`} />
                    <span>컴포넌트 모아보기</span>
                  </div>
                  {activeTab === 'home' && <ChevronRight className={`w-4 h-4 ${isDark ? 'text-[#7075FA]' : 'text-[#1B64DA]'}`} />}
                </button>

                <button
                  onClick={() => handleNavClick('archive')}
                  className={`w-full h-[40px] px-3.5 rounded-[12px] text-[14px] flex items-center justify-between transition-all select-none text-left ${
                    activeTab === 'archive'
                      ? isDark
                        ? 'bg-[#1A2234] text-[#A5A8FC] font-bold border-l-2 border-[#595EF9]'
                        : 'bg-[#E8F3FF] text-[#1B64DA] font-bold'
                      : isDark
                      ? 'text-[#94A3B8] font-semibold hover:bg-[#182030] hover:text-white'
                      : 'text-[#333D4B] font-semibold hover:bg-[#F2F4F6] hover:text-[#191F28]'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <FolderDown className={`w-4 h-4 ${isDark ? 'text-[#7075FA]' : 'text-[#3182F6]'}`} />
                    <span>자료실</span>
                  </div>
                  {activeTab === 'archive' && <ChevronRight className={`w-4 h-4 ${isDark ? 'text-[#7075FA]' : 'text-[#1B64DA]'}`} />}
                </button>
              </div>
            </div>

            {/* Group 2: 파운데이션 / 기초 규격 */}
            <div>
              <div className={`px-3 py-1.5 text-[11px] font-bold tracking-wider ${
                isDark ? 'text-[#64748B]' : 'text-[#8B95A1]'
              }`}>
                기초 규격 & 원칙
              </div>
              <div className="space-y-0.5">
                {[
                  { id: 'colors', label: '색상 토큰' },
                  { id: 'typography', label: '타이포그래피' },
                  { id: 'icons', label: '아이콘' },
                  { id: 'spacing-radius', label: '여백 및 라운드' },
                  { id: 'layout', label: '작업 규격' },
                  { id: 'writing', label: '라이팅 가이드' },
                ].map((item) => {
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`w-full h-[38px] px-3.5 rounded-[12px] text-[14px] flex items-center justify-between transition-all select-none text-left ${
                        isActive
                          ? isDark
                            ? 'bg-[#1A2234] text-[#A5A8FC] font-bold border-l-2 border-[#595EF9]'
                            : 'bg-[#E8F3FF] text-[#1B64DA] font-bold'
                          : isDark
                          ? 'text-[#94A3B8] font-medium hover:bg-[#182030] hover:text-white'
                          : 'text-[#4E5968] font-medium hover:bg-[#F2F4F6] hover:text-[#191F28]'
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && <ChevronRight className={`w-4 h-4 ${isDark ? 'text-[#7075FA]' : 'text-[#1B64DA]'}`} />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Group 3: 핵심 컴포넌트 */}
            <div>
              <div className={`px-3 py-1.5 text-[11px] font-bold tracking-wider ${
                isDark ? 'text-[#64748B]' : 'text-[#8B95A1]'
              }`}>
                핵심 컴포넌트
              </div>
              <div className="space-y-0.5">
                {[
                  { id: 'buttons', label: '버튼' },
                  { id: 'inputs', label: '입력창' },
                  { id: 'modals', label: '모달 및 바텀시트' },
                ].map((item) => {
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`w-full h-[38px] px-3.5 rounded-[12px] text-[14px] flex items-center justify-between transition-all select-none text-left ${
                        isActive
                          ? isDark
                            ? 'bg-[#1A2234] text-[#A5A8FC] font-bold border-l-2 border-[#595EF9]'
                            : 'bg-[#E8F3FF] text-[#1B64DA] font-bold'
                          : isDark
                          ? 'text-[#94A3B8] font-medium hover:bg-[#182030] hover:text-white'
                          : 'text-[#4E5968] font-medium hover:bg-[#F2F4F6] hover:text-[#191F28]'
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && <ChevronRight className={`w-4 h-4 ${isDark ? 'text-[#7075FA]' : 'text-[#1B64DA]'}`} />}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Sidebar Bottom Status */}
          <div className={`mt-8 pt-5 border-t px-3 space-y-1 text-[12px] ${
            isDark ? 'border-[#232936] text-[#64748B]' : 'border-[#F2F4F6] text-[#8B95A1]'
          }`}>
            <div className={`font-bold ${isDark ? 'text-[#CBD5E1]' : 'text-[#4E5968]'}`}>daisalibrary</div>
            <div>{isDark ? '다이사 파트너 B2B 시스템' : '다이사(da24) 디자인시스템'}</div>
            <div className="text-[11px] pt-1 flex items-center gap-1.5">
              <span className={`w-2 h-2 rounded-full inline-block ${isDark ? 'bg-[#595EF9]' : 'bg-emerald-500'}`} />
              <span className={isDark ? 'text-[#94A3B8]' : 'text-[#B0B8C1]'}>
                {isDark ? 'B2B 다크모드 규격' : 'Pretendard 공식 표준 규격'}
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
      <footer className={`border-t py-8 px-6 text-[13px] w-full transition-colors ${
        isDark
          ? 'bg-[#121620] border-[#232936] text-[#94A3B8]'
          : 'bg-white border-[#E5E8EB] text-[#6B7684]'
      }`}>
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src={isDark ? '/logo-white.png' : '/logo-dark.png'}
              alt="daisalibrary logo"
              className="h-[20px] w-auto object-contain opacity-90"
            />
            <span>
              {isDark ? '© 2026 다이사 파트너(da24) B2B 디자인시스템' : '© 2026 다이사 (da24) 디자인시스템'}
            </span>
          </div>
          <div className={`flex items-center gap-4 text-[12px] ${isDark ? 'text-[#64748B]' : 'text-[#8B95A1]'}`}>
            <span>{isDark ? 'Noto Sans KR / Pretendard' : 'Pretendard 공식 서체'}</span>
            <span>•</span>
            <span>{isDark ? '파트너 B2B 프로덕션 규격 (다크모드)' : '고객향 프로덕션 규격'}</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
