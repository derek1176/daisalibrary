import React from 'react';
import { FIGMA_SOURCES } from '../../tokens';
import {
  ExternalLink,
  Palette,
  Type,
  MousePointerClick,
  FormInput,
  CopyCheck,
  Smartphone,
  Sparkles,
  Maximize2,
  CheckCircle2,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';

export interface OverviewShowcaseProps {
  onNavigate: (tab: string) => void;
}

export const OverviewShowcase: React.FC<OverviewShowcaseProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-12">
      {/* Official Header Banner with Official daisalibrary Logo */}
      <div className="bg-[#171717] text-white rounded-[24px] p-8 md:p-12 shadow-xl relative overflow-hidden border border-white/10">
        <div className="max-w-2xl space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-main-01 text-white text-[12px] font-bold">
            <Sparkles className="w-3.5 h-3.5" /> 다이사 공식 디자인시스템 v1.2
          </div>

          {/* Official daisalibrary Logo */}
          <div className="flex items-center">
            <img
              src="/daisalibrary-logo.png"
              alt="daisalibrary logo"
              className="h-[52px] md:h-[64px] object-contain -ml-1 select-none"
            />
          </div>

          <p className="text-[16px] md:text-[18px] text-gray-300 leading-[28px] tracking-da24 font-normal">
            국내 1위 이사/청소 중개 플랫폼 <strong>다이사(da24)</strong>의 디지털 프로덕트를 위한 디자인 가이드라인 및 웹 컴포넌트 라이브러리입니다.
            디자인시스템을 잘 모르는 신규 입사자, 기획자, 개발자 누구나 <strong>"우리 서비스에 버튼, 인풋, 색상, 폰트, 모달이 어떻게 쓰이는지"</strong> 직관적으로 파악하고 일관된 사용자 경험을 구현할 수 있도록 돕습니다.
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <button
              onClick={() => onNavigate('buttons')}
              className="h-[48px] px-6 rounded-[10px] bg-main-01 text-white font-bold text-[15px] hover:bg-[#0D14D6] transition-colors shadow-sm flex items-center gap-2"
            >
              <span>버튼 시스템 살펴보기</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('radius')}
              className="h-[48px] px-6 rounded-[10px] bg-white/10 text-white font-bold text-[15px] hover:bg-white/20 transition-colors border border-white/20"
            >
              8단계 라운드 규칙
            </button>
            <button
              onClick={() => onNavigate('screens')}
              className="h-[48px] px-6 rounded-[10px] bg-white/10 text-white font-bold text-[15px] hover:bg-white/20 transition-colors border border-white/20"
            >
              실제 피그마 화면 체험
            </button>
          </div>
        </div>

        {/* Ambient background glow */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-main-01/30 to-transparent pointer-events-none" />
      </div>

      {/* 5 Core Pillars (핵심 5대 원칙) */}
      <div className="space-y-4">
        <div>
          <span className="text-[12px] font-bold text-main-01">FOUNDATION PRINCIPLES</span>
          <h2 className="text-[22px] font-bold text-text-01 tracking-da24 mt-0.5">
            다이사 디자인시스템의 5대 핵심 원칙
          </h2>
          <p className="text-[14px] text-text-03 mt-1">
            모든 컴포넌트와 화면은 아래 5가지 원칙을 기반으로 일관되게 설계됩니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white border border-etc-02 rounded-[14px] p-5 space-y-2 shadow-xs">
            <div className="w-8 h-8 rounded-[8px] bg-main-04 text-main-01 flex items-center justify-center font-bold text-[15px]">
              1
            </div>
            <h4 className="text-[16px] font-bold text-text-01">56px 절대 터치 타겟</h4>
            <p className="text-[13px] text-text-03 leading-[20px]">
              모바일 환경에서 최상의 터치 경험을 제공하기 위해 모든 버튼, 폼 인풋, 바텀시트 행 높이는 56px로 통일됩니다.
            </p>
          </div>

          <div className="bg-white border border-etc-02 rounded-[14px] p-5 space-y-2 shadow-xs">
            <div className="w-8 h-8 rounded-[8px] bg-main-04 text-main-01 flex items-center justify-center font-bold text-[15px]">
              2
            </div>
            <h4 className="text-[16px] font-bold text-text-01">8단계 Corner Radius</h4>
            <p className="text-[13px] text-text-03 leading-[20px]">
              0px(Floating CTA)부터 10px(전사 표준 버튼/인풋), 16px(모달/섹션), 28px(Pill 칩)까지 위계에 따른 라운드를 준수합니다.
            </p>
          </div>

          <div className="bg-white border border-etc-02 rounded-[14px] p-5 space-y-2 shadow-xs">
            <div className="w-8 h-8 rounded-[8px] bg-main-04 text-main-01 flex items-center justify-center font-bold text-[15px]">
              3
            </div>
            <h4 className="text-[16px] font-bold text-text-01">짝수 6대 타이포그래피</h4>
            <p className="text-[13px] text-text-03 leading-[20px]">
              Pretendard 단일 서체, -1px 자간, 짝수 6개 규격(12, 14, 16, 18, 20, 24px) 외의 홀수나 소수점은 절대 허용하지 않습니다.
            </p>
          </div>

          <div className="bg-white border border-etc-02 rounded-[14px] p-5 space-y-2 shadow-xs">
            <div className="w-8 h-8 rounded-[8px] bg-main-04 text-main-01 flex items-center justify-center font-bold text-[15px]">
              4
            </div>
            <h4 className="text-[16px] font-bold text-text-01">312px $\leftrightarrow$ 720px 대칭 확장</h4>
            <p className="text-[13px] text-text-03 leading-[20px]">
              모바일(360px 너비 내 312px 그리드)로 먼저 설계된 후, PC 환경에서는 무한정 늘어나지 않고 720px(또는 672px)로 최적화됩니다.
            </p>
          </div>

          <div className="bg-white border border-etc-02 rounded-[14px] p-5 space-y-2 shadow-xs">
            <div className="w-8 h-8 rounded-[8px] bg-main-04 text-main-01 flex items-center justify-center font-bold text-[15px]">
              5
            </div>
            <h4 className="text-[16px] font-bold text-text-01">103-104-103px 분할 룰</h4>
            <p className="text-[13px] text-text-03 leading-[20px]">
              3분할 세그먼트 버튼 사용 시 가운데 버튼에 1px을 추가하여 312px 콘텐츠 폭에 픽셀 깨짐 없이 완벽하게 정렬합니다.
            </p>
          </div>

          <div className="bg-white border border-etc-02 rounded-[14px] p-5 space-y-2 shadow-xs">
            <div className="w-8 h-8 rounded-[8px] bg-main-04 text-main-01 flex items-center justify-center font-bold text-[15px]">
              6
            </div>
            <h4 className="text-[16px] font-bold text-text-01">모달 280px 액션 그리드</h4>
            <p className="text-[13px] text-text-03 leading-[20px]">
              312px 모달 내 패딩 16px을 제외한 280px 안에서 단일(280px) 또는 136px(취소) + 8px(간격) + 136px(확인)로 엄격히 분할됩니다.
            </p>
          </div>
        </div>
      </div>

      {/* Grid & Layout Breakpoints */}
      <div className="space-y-4">
        <div>
          <span className="text-[12px] font-bold text-main-01">LAYOUT SYSTEM</span>
          <h3 className="text-[20px] font-bold text-text-01 tracking-da24 mt-0.5">
            반응형 그리드 & 여백 (Breakpoints & Margins)
          </h3>
          <p className="text-[14px] text-text-03 mt-1">
            Figma 원본 <code className="bg-etc-04 px-1.5 py-0.5 rounded text-main-01 font-mono">csWoLlTCHOtuE7oAMswuL7 (Node: 384:1369)</code>에 정의된 디바이스별 표준 레이아웃입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white border border-etc-02 rounded-[14px] p-5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[14px] font-bold text-main-01">Mobile (모바일)</span>
              <span className="font-mono text-[13px] bg-main-04 px-2 py-0.5 rounded text-main-01 font-bold">360px</span>
            </div>
            <div className="text-[14px] text-text-02 space-y-1.5">
              <div><strong>콘텐츠 그리드:</strong> <code className="text-main-01 font-bold">312px</code></div>
              <div><strong>양측 마진:</strong> 24px (좌 24 / 우 24)</div>
              <div><strong>하단 CTA:</strong> 360px 전폭 밀착 (h: 56px, r: 0)</div>
            </div>
          </div>

          <div className="bg-white border border-etc-02 rounded-[14px] p-5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[14px] font-bold text-text-01">Tablet (태블릿)</span>
              <span className="font-mono text-[13px] bg-etc-04 px-2 py-0.5 rounded text-text-02 font-bold">768px</span>
            </div>
            <div className="text-[14px] text-text-02 space-y-1.5">
              <div><strong>콘텐츠 그리드:</strong> <code className="font-bold">704px</code></div>
              <div><strong>양측 마진:</strong> 32px (좌 32 / 우 32)</div>
              <div><strong>컬럼 수:</strong> 8 Columns Grid</div>
            </div>
          </div>

          <div className="bg-white border border-etc-02 rounded-[14px] p-5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[14px] font-bold text-text-01">PC (데스크탑)</span>
              <span className="font-mono text-[13px] bg-etc-04 px-2 py-0.5 rounded text-text-02 font-bold">1200px</span>
            </div>
            <div className="text-[14px] text-text-02 space-y-1.5">
              <div><strong>콘텐츠 그리드:</strong> <code className="text-main-01 font-bold">720px</code> (본문) / 1120px (전체)</div>
              <div><strong>양측 마진:</strong> 40px (좌 40 / 우 40)</div>
              <div><strong>컬럼 수:</strong> 12 Columns Grid</div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Navigation Cards */}
      <div className="space-y-4">
        <h3 className="text-[20px] font-bold text-text-01 tracking-da24">
          디자인시스템 컴포넌트 둘러보기
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { id: 'radius', title: 'Corner Radius', icon: Maximize2, desc: '0px부터 28px/Pill까지 8단계 라운드 규칙' },
            { id: 'colors', title: 'Colors', icon: Palette, desc: 'main-01 (#1219F7), text 계층, etc 보더 토큰' },
            { id: 'typography', title: 'Typography', icon: Type, desc: 'Pretendard 폰트, 짝수 6개 규격, -1px 자간' },
            { id: 'buttons', title: 'Buttons', icon: MousePointerClick, desc: 'Floating(56px), Public(312px), Modal(280px), 3-Split' },
            { id: 'inputs', title: 'Form Inputs', icon: FormInput, desc: 'Text, Memo(104px), Search, Number, Select' },
            { id: 'modals', title: 'Modals & Sheets', icon: CopyCheck, desc: '312px 중앙 모달과 360px 모바일 바텀시트' },
            { id: 'screens', title: 'Real Screens', icon: Smartphone, desc: '에어컨, 후기, 인터넷 비교, 방문견적 재현' },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="text-left bg-white border border-etc-02 rounded-[14px] p-5 hover:border-main-01 hover:shadow-md transition-all group flex flex-col justify-between h-[140px]"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-[10px] bg-main-04 text-main-01 flex items-center justify-center group-hover:bg-main-01 group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[12px] font-bold text-main-01 opacity-0 group-hover:opacity-100 transition-opacity">
                    자세히 보기 →
                  </span>
                </div>
                <div>
                  <h4 className="text-[16px] font-bold text-text-01">{item.title}</h4>
                  <p className="text-[13px] text-text-03 mt-0.5 line-clamp-1">{item.desc}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Target Figma Files Reference */}
      <div className="bg-white border border-etc-02 rounded-[16px] p-6 space-y-5">
        <div className="flex items-center justify-between border-b border-etc-03 pb-4">
          <div>
            <h3 className="text-[18px] font-bold text-text-01">조회된 피그마 프로젝트 원본 소스</h3>
            <p className="text-[13px] text-text-03 mt-0.5">다이사 프로젝트의 실제 피그마 파일 및 노드 정보</p>
          </div>
          <span className="px-2.5 py-1 rounded bg-green-50 text-green-700 text-[12px] font-bold border border-green-200">
            Figma API 연결됨
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FIGMA_SOURCES.map((file) => (
            <div key={file.key} className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-bold text-[15px] text-text-01">{file.title}</span>
                <a
                  href={`https://www.figma.com/design/${file.key}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-text-03 hover:text-main-01"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <div className="text-[12px] font-mono text-text-04 bg-etc-04 p-1.5 rounded">
                Key: {file.key}
              </div>
              <ul className="space-y-1.5">
                {file.nodes.map((node) => (
                  <li key={node.id} className="text-[13px] text-text-02 flex items-start gap-1.5">
                    <span className="text-main-01 font-mono text-[12px] shrink-0 font-bold">[{node.id}]</span>
                    <span>{node.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
