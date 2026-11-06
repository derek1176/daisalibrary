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

import {
  Menu,
  X,
  Search,
  ChevronRight,
  BookOpen,
  Layers,
  Sparkles,
  FolderDown,
  FileText
} from 'lucide-react';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [serviceMode, setServiceMode] = useState<'customer' | 'partner'>('customer');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);

  const navItems = [
    { id: 'home', label: '컴포넌트 모아보기', category: '개요' },
    { id: 'archive', label: '자료실 (다운로드)', category: '문서 & 다운로드' },
    { id: 'layout', label: '작업 규격', category: '파운데이션' },
    { id: 'writing', label: 'UX 라이팅', category: '보이스앤톤' },
    { id: 'colors', label: '색상', category: '파운데이션' },
    { id: 'typography', label: '타이포그래피', category: '파운데이션' },
    { id: 'spacing-radius', label: '여백 및 라운드', category: '파운데이션' },
    { id: 'buttons', label: '버튼', category: '컴포넌트' },
    { id: 'inputs', label: '입력창', category: '컴포넌트' },
    { id: 'modals', label: '모달 및 시트', category: '컴포넌트' },
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
    <div className="min-h-screen flex flex-col bg-[#F9FAFB] text-[#191F28] font-sans antialiased selection:bg-[#E8F3FF] selection:text-[#1B64DA]">
      {/* ============================================================ */}
      {/* Toss-Style Minimal GNB Header */}
      {/* ============================================================ */}
      <header className="sticky top-0 z-40 h-[60px] bg-white/95 backdrop-blur-md border-b border-[#E5E8EB] px-6 lg:px-10 flex items-center justify-between transition-all">
        <div className="flex items-center gap-6">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 -ml-2 rounded-[8px] text-[#4E5968] hover:bg-[#F2F4F6] transition-colors"
            aria-label="메뉴 열기"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Official Logo (Updated with user-uploaded asset) */}
          <div
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer select-none group"
          >
            <img
              src="/logo-dark.png"
              alt="daisalibrary logo"
              className="h-[24px] md:h-[26px] w-auto object-contain transition-transform group-hover:scale-102"
            />
            <span className="hidden sm:inline-block text-[13px] font-bold text-[#8B95A1] pl-2 border-l border-[#E5E8EB]">
              디자인시스템
            </span>
          </div>
        </div>

        {/* Center: Toss-Style Search Bar */}
        <div className="relative hidden md:block w-[280px] lg:w-[320px]">
          <div className={`flex items-center gap-2.5 px-3.5 py-2 rounded-[12px] bg-[#F2F4F6] transition-all border ${
            searchFocused ? 'bg-white border-[#3182F6] ring-2 ring-[#3182F6]/10' : 'border-transparent hover:bg-[#E5E8EB]/70'
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
              className="w-full bg-transparent text-[13px] text-[#191F28] placeholder-[#8B95A1] outline-none font-medium"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="text-[#8B95A1] hover:text-[#191F28] text-[12px]"
              >
                ✕
              </button>
            )}
          </div>

          {/* Search Dropdown Results */}
          {searchFocused && searchQuery && (
            <div className="absolute top-[48px] left-0 right-0 bg-white rounded-[16px] shadow-[0_12px_36px_rgba(0,0,0,0.12)] border border-[#E5E8EB] p-2 space-y-1 z-50 animate-scaleUp">
              {filteredNavItems.length > 0 ? (
                filteredNavItems.map(item => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className="w-full px-3.5 py-2.5 rounded-[10px] text-left hover:bg-[#F2F4F6] flex items-center justify-between text-[13px] transition-colors"
                  >
                    <span className="font-bold text-[#191F28]">{item.label}</span>
                    <span className="text-[11px] text-[#8B95A1] bg-[#F2F4F6] px-2 py-0.5 rounded-full font-medium">
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

        {/* Right Header Area: Toss-Style Segmented Toggle */}
        <div className="flex items-center gap-3">
          <div className="flex items-center bg-[#F2F4F6] p-1 rounded-[12px] border border-[#E5E8EB]/50">
            <button
              onClick={() => setServiceMode('customer')}
              className={`px-3.5 py-1.5 rounded-[9px] text-[13px] transition-all select-none ${
                serviceMode === 'customer'
                  ? 'bg-white text-[#191F28] font-bold shadow-[0_1px_4px_rgba(0,0,0,0.06)]'
                  : 'text-[#6B7684] hover:text-[#191F28] font-medium'
              }`}
            >
              고객향
            </button>
            <button
              onClick={() => setServiceMode('partner')}
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
      {/* Main Body Layout */}
      {/* ============================================================ */}
      {serviceMode === 'partner' ? (
        /* Partner Mode Placeholder */
        <div className="flex-1 flex flex-col items-center justify-center p-8 text-center min-h-[60vh] max-w-lg mx-auto space-y-4">
          <div className="w-16 h-16 rounded-[22px] bg-white border border-[#E5E8EB] flex items-center justify-center text-[#8B95A1] text-2xl font-bold shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
            🏢
          </div>
          <h2 className="text-[22px] font-bold text-[#191F28]">
            파트너향 디자인시스템 준비 중
          </h2>
          <p className="text-[14px] text-[#6B7684] leading-relaxed">
            파트너(기사님/업체용) 디자인시스템은 현재 준비 단계에 있습니다.<br />
            현재는 공식 <strong>[고객향]</strong> 디자인시스템을 조회하실 수 있습니다.
          </p>
          <button
            onClick={() => setServiceMode('customer')}
            className="mt-2 px-5 py-2.5 rounded-[12px] bg-[#3182F6] text-white font-bold text-[14px] hover:bg-[#1B64DA] transition-all shadow-sm active:scale-98"
          >
            고객향 디자인시스템 보기
          </button>
        </div>
      ) : (
        /* Customer Mode Main Content */
        <div className="flex-1 flex max-w-[1440px] w-full mx-auto">
          {/* ============================================================ */}
          {/* Left Sticky Sidebar (Toss LNB Style) */}
          {/* ============================================================ */}
          <aside
            className={`fixed md:sticky top-[60px] z-30 w-[240px] lg:w-[260px] h-[calc(100vh-60px)] overflow-y-auto bg-white border-r border-[#E5E8EB] p-4 shrink-0 transition-transform duration-200 ${
              mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
            }`}
          >
            <div className="space-y-6">
              {/* Group 1: 전체 개요 & 자료실 */}
              <div>
                <div className="px-3 py-1.5 text-[11px] font-bold text-[#8B95A1] tracking-wider">
                  대시보드 & 자료
                </div>
                <div className="space-y-0.5">
                  <button
                    onClick={() => handleNavClick('home')}
                    className={`w-full h-[42px] px-3.5 rounded-[12px] text-[14px] flex items-center justify-between transition-all select-none text-left ${
                      activeTab === 'home'
                        ? 'bg-[#E8F3FF] text-[#1B64DA] font-bold'
                        : 'text-[#333D4B] font-semibold hover:bg-[#F2F4F6] hover:text-[#191F28]'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Layers className="w-4 h-4 text-[#8B95A1]" />
                      <span>컴포넌트 모아보기</span>
                    </div>
                    {activeTab === 'home' && <ChevronRight className="w-4 h-4 text-[#1B64DA]" />}
                  </button>

                  {/* 자료실 (MD 다운로드) 메뉴 항목 */}
                  <button
                    onClick={() => handleNavClick('archive')}
                    className={`w-full h-[42px] px-3.5 rounded-[12px] text-[14px] flex items-center justify-between transition-all select-none text-left ${
                      activeTab === 'archive'
                        ? 'bg-[#E8F3FF] text-[#1B64DA] font-bold'
                        : 'text-[#333D4B] font-semibold hover:bg-[#F2F4F6] hover:text-[#191F28]'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <FolderDown className="w-4 h-4 text-[#3182F6]" />
                      <span>자료실 (다운로드)</span>
                    </div>
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-[#E8F3FF] text-[#1B64DA]">
                      .md
                    </span>
                  </button>
                </div>
              </div>

              {/* Group 2: 파운데이션 / 규격 */}
              <div>
                <div className="px-3 py-1.5 text-[11px] font-bold text-[#8B95A1] tracking-wider">
                  기초 규격 & 원칙
                </div>
                <div className="space-y-0.5">
                  {[
                    { id: 'layout', label: '작업 규격 (360 · 1200)' },
                    { id: 'writing', label: 'UX 라이팅 가이드' },
                    { id: 'colors', label: '색상 토큰' },
                    { id: 'typography', label: '타이포그래피' },
                    { id: 'spacing-radius', label: '여백 및 라운드' },
                  ].map((item) => {
                    const isActive = activeTab === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleNavClick(item.id)}
                        className={`w-full h-[40px] px-3.5 rounded-[12px] text-[14px] flex items-center justify-between transition-all select-none text-left ${
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

              {/* Group 3: 컴포넌트 */}
              <div>
                <div className="px-3 py-1.5 text-[11px] font-bold text-[#8B95A1] tracking-wider">
                  핵심 컴포넌트
                </div>
                <div className="space-y-0.5">
                  {[
                    { id: 'buttons', label: '버튼 (Public 56)' },
                    { id: 'inputs', label: '입력창 (Form Input)' },
                    { id: 'modals', label: '모달 & 바텀시트' },
                  ].map((item) => {
                    const isActive = activeTab === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleNavClick(item.id)}
                        className={`w-full h-[40px] px-3.5 rounded-[12px] text-[14px] flex items-center justify-between transition-all select-none text-left ${
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
              <div>다이사(da24) 디자인시스템</div>
              <div className="text-[11px] text-[#B0B8C1] pt-1 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                <span>Pretendard 공식 표준 규격</span>
              </div>
            </div>
          </aside>

          {/* ============================================================ */}
          {/* Right Main Content Panel */}
          {/* ============================================================ */}
          <main className="flex-1 p-6 md:p-10 lg:p-12 overflow-x-hidden min-w-0">
            <div className="max-w-[1040px] mx-auto space-y-16">
              {activeTab === 'home' && <HomeSection onSelectTab={(id) => handleNavClick(id)} />}
              {activeTab === 'archive' && <ArchiveSection />}
              {activeTab === 'layout' && <LayoutSection />}
              {activeTab === 'writing' && <WritingSection />}
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

      {/* ============================================================ */}
      {/* Footer */}
      {/* ============================================================ */}
      <footer className="bg-white border-t border-[#E5E8EB] py-8 px-6 text-[#6B7684] text-[13px]">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="/logo-dark.png" alt="daisalibrary logo" className="h-[20px] w-auto object-contain opacity-90" />
            <span>© 2026 다이사 (da24) 디자인시스템</span>
          </div>
          <div className="flex items-center gap-4 text-[#8B95A1] text-[12px]">
            <span>피그마 csWoLlTCHOtuE7oAMswuL7</span>
            <span>•</span>
            <span>Pretendard 공식 서체</span>
            <span>•</span>
            <span>고객향 프로덕션 규격</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
