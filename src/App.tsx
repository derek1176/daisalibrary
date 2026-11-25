import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Link,
  useNavigate,
  useLocation,
  useSearchParams,
} from 'react-router-dom';

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
import { LogoSection } from './components/sections/LogoSection';
import { ExampleSection } from './components/sections/ExampleSection';
import { FigmaPluginSection } from './components/sections/FigmaPluginSection';

import { Menu, X } from 'lucide-react';

export const TAB_PATHS: Record<string, string> = {
  home: '/',
  archive: '/resources',
  logo: '/logo',
  colors: '/colors',
  typography: '/typography',
  icons: '/icons',
  'spacing-radius': '/spacing-radius',
  layout: '/layout',
  writing: '/writing',
  buttons: '/buttons',
  inputs: '/inputs',
  modals: '/modals',
  'figma-plugin': '/figma-plugin',
  example: '/example',
};

export const PATH_TO_TAB: Record<string, string> = {
  '/': 'home',
  '/overview': 'home',
  '/home': 'home',
  '/resources': 'archive',
  '/archive': 'archive',
  '/logo': 'logo',
  '/colors': 'colors',
  '/color': 'colors',
  '/typography': 'typography',
  '/type': 'typography',
  '/icons': 'icons',
  '/icon': 'icons',
  '/spacing-radius': 'spacing-radius',
  '/spacing': 'spacing-radius',
  '/radius': 'spacing-radius',
  '/layout': 'layout',
  '/writing': 'writing',
  '/writing-guide': 'writing',
  '/buttons': 'buttons',
  '/button': 'buttons',
  '/inputs': 'inputs',
  '/input': 'inputs',
  '/modals': 'modals',
  '/modal': 'modals',
  '/dialog': 'modals',
  '/dialog-sheet': 'modals',
  '/figma-plugin': 'figma-plugin',
  '/plugin': 'figma-plugin',
  '/example': 'example',
  '/examples': 'example',
};

const TAB_TITLES: Record<string, string> = {
  home: 'Overview',
  archive: 'Resources',
  logo: 'Logo',
  colors: 'Colors',
  typography: 'Typography',
  icons: 'Icons',
  'spacing-radius': 'Spacing & Radius',
  layout: 'Layout',
  writing: 'Writing Guide',
  buttons: 'Buttons',
  inputs: 'Inputs',
  modals: 'Dialog & Sheet',
  'figma-plugin': 'Figma Plugin',
  example: 'Example Screen',
};

const AppContent: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Initialize service mode from query (?mode=partner|customer) or localStorage
  const [serviceMode, setServiceMode] = useState<'customer' | 'partner'>(() => {
    const modeParam = searchParams.get('mode');
    if (modeParam === 'partner' || modeParam === 'customer') {
      return modeParam;
    }
    const saved = localStorage.getItem('daisa_service_mode');
    return saved === 'partner' ? 'partner' : 'customer';
  });

  // Keep query param in sync with mode
  useEffect(() => {
    const modeParam = searchParams.get('mode');
    if (modeParam === 'partner' && serviceMode !== 'partner') {
      setServiceMode('partner');
    } else if (modeParam === 'customer' && serviceMode !== 'customer') {
      setServiceMode('customer');
    }
  }, [searchParams, serviceMode]);

  const currentPath = location.pathname.toLowerCase().replace(/\/$/, '') || '/';
  const activeTab = PATH_TO_TAB[currentPath] || 'home';

  // Update document title dynamically
  useEffect(() => {
    const title = TAB_TITLES[activeTab] || 'Design System';
    document.title = `daisalibrary | ${title}`;
  }, [activeTab]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleServiceModeChange = (newMode: 'customer' | 'partner') => {
    if (serviceMode === newMode) return;
    setServiceMode(newMode);
    localStorage.setItem('daisa_service_mode', newMode);

    const nextParams = new URLSearchParams(location.search);
    if (newMode === 'partner') {
      nextParams.set('mode', 'partner');
    } else {
      nextParams.delete('mode');
    }
    const searchStr = nextParams.toString();
    navigate(
      {
        pathname: location.pathname,
        search: searchStr ? `?${searchStr}` : '',
      },
      { replace: true }
    );
  };

  const getLinkHref = (path: string) => {
    return serviceMode === 'partner' ? `${path}?mode=partner` : path;
  };

  const handleNavClick = (tabId: string) => {
    const targetPath = TAB_PATHS[tabId] || `/${tabId}`;
    navigate(getLinkHref(targetPath));
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans antialiased bg-white text-[#191F28] selection:bg-[#E8F3FF] selection:text-[#1B64DA] relative">
      {/* ============================================================ */}
      {/* GNB Header (Full Width Clean White) */}
      {/* ============================================================ */}
      <header className="sticky top-0 z-40 h-[60px] backdrop-blur-md bg-white/95 px-6 lg:px-8 flex items-center justify-between w-full border-b border-[#F2F4F6]">
        <div className="flex items-center gap-6">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 -ml-2 rounded-[8px] text-[#4E5968] hover:bg-[#F2F4F6] transition-colors"
            aria-label="메뉴 열기"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Official Logo */}
          <Link
            to={getLinkHref('/')}
            className="flex items-center gap-3 cursor-pointer select-none group -ml-1"
          >
            <img
              src="/logo-dark.png"
              alt="daisalibrary logo"
              className="h-[24px] md:h-[26px] w-auto object-contain transition-transform group-hover:scale-102"
            />
          </Link>
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
          className={`fixed md:sticky top-[60px] left-0 z-30 w-[240px] lg:w-[250px] h-[calc(100vh-60px)] overflow-y-auto no-scrollbar bg-white p-4 shrink-0 transition-transform duration-200 border-r border-[#F2F4F6] ${
            mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
          }`}
        >
          <div className="space-y-6">
            {/* Group 1: OVERVIEW */}
            <div>
              <div className="px-3 py-1.5 text-[11px] font-bold tracking-wider text-[#8B95A1] uppercase">
                Overview
              </div>
              <div className="space-y-0.5">
                <Link
                  to={getLinkHref('/')}
                  className={`w-full h-[40px] px-3.5 rounded-[10px] text-[14px] flex items-center justify-between transition-all select-none text-left ${
                    activeTab === 'home'
                      ? 'bg-[#F2F3F6] text-[#191F28] font-bold'
                      : 'text-[#4E5968] font-medium hover:bg-[#F8F9FA] hover:text-[#191F28]'
                  }`}
                >
                  <span>Overview</span>
                </Link>

                <Link
                  to={getLinkHref('/resources')}
                  className={`w-full h-[40px] px-3.5 rounded-[10px] text-[14px] flex items-center justify-between transition-all select-none text-left ${
                    activeTab === 'archive'
                      ? 'bg-[#F2F3F6] text-[#191F28] font-bold'
                      : 'text-[#4E5968] font-medium hover:bg-[#F8F9FA] hover:text-[#191F28]'
                  }`}
                >
                  <span>Resources</span>
                </Link>
              </div>
            </div>

            {/* Group 2: FOUNDATIONS */}
            <div>
              <div className="px-3 py-1.5 text-[11px] font-bold tracking-wider text-[#8B95A1] uppercase">
                Foundations
              </div>
              <div className="space-y-0.5">
                {[
                  { id: 'logo', path: '/logo', label: 'Logo' },
                  { id: 'colors', path: '/colors', label: 'Colors' },
                  { id: 'typography', path: '/typography', label: 'Typography' },
                  { id: 'icons', path: '/icons', label: 'Icons' },
                  { id: 'spacing-radius', path: '/spacing-radius', label: 'Spacing & Radius' },
                  { id: 'layout', path: '/layout', label: 'Layout' },
                  { id: 'writing', path: '/writing', label: 'Writing Guide' },
                ].map((item) => {
                  const isActive = activeTab === item.id;
                  return (
                    <Link
                      key={item.id}
                      to={getLinkHref(item.path)}
                      className={`w-full h-[38px] px-3.5 rounded-[10px] text-[14px] flex items-center justify-between transition-all select-none text-left ${
                        isActive
                          ? 'bg-[#F2F3F6] text-[#191F28] font-bold'
                          : 'text-[#4E5968] font-medium hover:bg-[#F8F9FA] hover:text-[#191F28]'
                      }`}
                    >
                      <span>{item.label}</span>
                    </Link>
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
                  { id: 'buttons', path: '/buttons', label: 'Buttons' },
                  { id: 'inputs', path: '/inputs', label: 'Inputs' },
                  { id: 'modals', path: '/modals', label: 'Dialog & Sheet' },
                ].map((item) => {
                  const isActive = activeTab === item.id;
                  return (
                    <Link
                      key={item.id}
                      to={getLinkHref(item.path)}
                      className={`w-full h-[38px] px-3.5 rounded-[10px] text-[14px] flex items-center justify-between transition-all select-none text-left ${
                        isActive
                          ? 'bg-[#F2F3F6] text-[#191F28] font-bold'
                          : 'text-[#4E5968] font-medium hover:bg-[#F8F9FA] hover:text-[#191F28]'
                      }`}
                    >
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Group 4: TOOLS */}
            <div>
              <div className="px-3 py-1.5 text-[11px] font-bold tracking-wider text-[#8B95A1] uppercase">
                Tools
              </div>
              <div className="space-y-0.5">
                <Link
                  to={getLinkHref('/figma-plugin')}
                  className={`w-full h-[40px] px-3.5 rounded-[10px] text-[14px] flex items-center justify-between transition-all select-none text-left ${
                    activeTab === 'figma-plugin'
                      ? 'bg-[#F2F3F6] text-[#191F28] font-bold'
                      : 'text-[#4E5968] font-medium hover:bg-[#F8F9FA] hover:text-[#191F28]'
                  }`}
                >
                  <span>Figma Plugin</span>
                </Link>
                <Link
                  to={getLinkHref('/example')}
                  className={`w-full h-[40px] px-3.5 rounded-[10px] text-[14px] flex items-center justify-between transition-all select-none text-left ${
                    activeTab === 'example'
                      ? 'bg-[#F2F3F6] text-[#191F28] font-bold'
                      : 'text-[#4E5968] font-medium hover:bg-[#F8F9FA] hover:text-[#191F28]'
                  }`}
                >
                  <span>Example Screen</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Sidebar Bottom Status */}
          <div className="mt-8 pt-5 border-t border-[#F2F4F6] px-3 space-y-1 text-[12px] text-[#8B95A1]">
            <div className="font-bold text-[#4E5968]">daisalibrary</div>
            <div>{serviceMode === 'partner' ? '파트너향 디자인시스템' : '고객향 디자인시스템'}</div>
            <div className="text-[11px] pt-1 flex items-center gap-1.5">
              <span
                className={`w-2 h-2 rounded-full inline-block ${
                  serviceMode === 'partner' ? 'bg-[#595EF9]' : 'bg-emerald-500'
                }`}
              />
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
            <Routes>
              {/* Overview */}
              <Route path="/" element={<HomeSection mode={serviceMode} onSelectTab={handleNavClick} />} />
              <Route path="/overview" element={<Navigate to={getLinkHref('/')} replace />} />
              <Route path="/home" element={<Navigate to={getLinkHref('/')} replace />} />

              {/* Resources */}
              <Route path="/resources" element={<ArchiveSection mode={serviceMode} />} />
              <Route path="/archive" element={<Navigate to={getLinkHref('/resources')} replace />} />

              {/* Foundations */}
              <Route path="/logo" element={<LogoSection mode={serviceMode} />} />
              <Route path="/colors" element={<ColorSection mode={serviceMode} />} />
              <Route path="/color" element={<Navigate to={getLinkHref('/colors')} replace />} />
              <Route path="/typography" element={<TypographySection mode={serviceMode} />} />
              <Route path="/type" element={<Navigate to={getLinkHref('/typography')} replace />} />
              <Route path="/icons" element={<IconSection mode={serviceMode} />} />
              <Route path="/icon" element={<Navigate to={getLinkHref('/icons')} replace />} />
              <Route path="/spacing-radius" element={<SpacingRadiusSection mode={serviceMode} />} />
              <Route path="/spacing" element={<Navigate to={getLinkHref('/spacing-radius')} replace />} />
              <Route path="/radius" element={<Navigate to={getLinkHref('/spacing-radius')} replace />} />
              <Route path="/layout" element={<LayoutSection mode={serviceMode} />} />
              <Route path="/writing" element={<WritingSection mode={serviceMode} />} />
              <Route path="/writing-guide" element={<Navigate to={getLinkHref('/writing')} replace />} />

              {/* Components */}
              <Route path="/buttons" element={<ButtonSection mode={serviceMode} />} />
              <Route path="/button" element={<Navigate to={getLinkHref('/buttons')} replace />} />
              <Route path="/inputs" element={<InputSection mode={serviceMode} />} />
              <Route path="/input" element={<Navigate to={getLinkHref('/inputs')} replace />} />
              <Route path="/modals" element={<ModalSection mode={serviceMode} />} />
              <Route path="/modal" element={<Navigate to={getLinkHref('/modals')} replace />} />
              <Route path="/dialog" element={<Navigate to={getLinkHref('/modals')} replace />} />
              <Route path="/dialog-sheet" element={<Navigate to={getLinkHref('/modals')} replace />} />

              {/* Tools */}
              <Route path="/figma-plugin" element={<FigmaPluginSection mode={serviceMode} />} />
              <Route path="/plugin" element={<Navigate to={getLinkHref('/figma-plugin')} replace />} />
              <Route path="/example" element={<ExampleSection mode={serviceMode} />} />
              <Route path="/examples" element={<Navigate to={getLinkHref('/example')} replace />} />

              {/* Fallback */}
              <Route path="*" element={<Navigate to={getLinkHref('/')} replace />} />
            </Routes>
          </div>
        </main>
      </div>

      {/* ============================================================ */}
      {/* Footer */}
      {/* ============================================================ */}
      <footer className="border-t border-[#E5E8EB] py-7 px-6 lg:px-8 text-[13px] w-full bg-white text-[#6B7684]">
        <div className="flex items-center gap-3 -ml-1">
          <img
            src="/logo-dark.png"
            alt="daisalibrary logo"
            className="h-[18px] w-auto object-contain"
          />
          <span>·</span>
          <span>다이사 디자인라이브러리</span>
        </div>
      </footer>
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
