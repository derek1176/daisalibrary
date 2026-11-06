import React from 'react';
import { FIGMA_SOURCES } from '../../tokens';
import { ExternalLink, Palette, Type, MousePointerClick, FormInput, CopyCheck, Smartphone } from 'lucide-react';

export interface OverviewShowcaseProps {
  onNavigate: (tab: string) => void;
}

export const OverviewShowcase: React.FC<OverviewShowcaseProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-12">
      {/* Hero Banner */}
      <div className="bg-gradient-to-br from-white via-white to-main-04 border border-etc-02 rounded-[20px] p-8 md:p-10 shadow-sm relative overflow-hidden">
        <div className="max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-main-01 text-white text-[12px] font-bold">
            다이사 공식 디자인시스템 v1.2
          </div>
          <h1 className="text-[32px] md:text-[38px] font-extrabold text-text-01 tracking-da24 leading-[1.25]">
            daisalibrary
          </h1>
          <p className="text-[16px] md:text-[18px] text-text-02 leading-[28px] tracking-da24">
            국내 1위 이사/청소 중개 플랫폼 <strong>다이사(da24)</strong>의 디지털 프로덕트를 위한 디자인 가이드라인 및 웹 컴포넌트 라이브러리입니다.
            당근 Seed Design 철학을 계승하여 직관적이고 견고한 인터랙션을 제공합니다.
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <button
              onClick={() => onNavigate('buttons')}
              className="h-[48px] px-6 rounded-[10px] bg-main-01 text-white font-bold text-[15px] hover:bg-[#0D14D6] transition-colors shadow-sm"
            >
              컴포넌트 둘러보기
            </button>
            <button
              onClick={() => onNavigate('screens')}
              className="h-[48px] px-6 rounded-[10px] bg-white border border-etc-02 text-text-01 font-bold text-[15px] hover:border-main-01 transition-colors"
            >
              실제 화면 인터랙션
            </button>
          </div>
        </div>

        {/* Decorative graphic */}
        <div className="hidden lg:block absolute -right-6 -bottom-6 w-72 h-72 rounded-full bg-main-01/5 border-[16px] border-main-01/10 pointer-events-none" />
      </div>

      {/* Grid & Layout Breakpoints */}
      <div className="space-y-4">
        <div>
          <h3 className="text-[20px] font-bold text-text-01 tracking-da24">
            반응형 그리드 & 규격 (Breakpoints & Margins)
          </h3>
          <p className="text-[14px] text-text-03 mt-1">
            Figma 원본 <code className="bg-etc-04 px-1.5 py-0.5 rounded text-main-01">csWoLlTCHOtuE7oAMswuL7 (Node: 384:1369)</code>에 정의된 디바이스별 표준 레이아웃입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white border border-etc-02 rounded-[14px] p-5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[14px] font-bold text-main-01">Mobile (모바일)</span>
              <span className="font-mono text-[13px] bg-main-04 px-2 py-0.5 rounded text-main-01 font-bold">360px</span>
            </div>
            <div className="text-[14px] text-text-02 space-y-1">
              <div><strong>콘텐츠 그리드:</strong> 312px</div>
              <div><strong>양측 마진:</strong> 24px (좌 24 / 우 24)</div>
              <div><strong>하단 CTA:</strong> 360px 전폭 고정 (h: 56px, r: 0)</div>
            </div>
          </div>

          <div className="bg-white border border-etc-02 rounded-[14px] p-5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[14px] font-bold text-text-01">Tablet (태블릿)</span>
              <span className="font-mono text-[13px] bg-etc-04 px-2 py-0.5 rounded text-text-02 font-bold">768px</span>
            </div>
            <div className="text-[14px] text-text-02 space-y-1">
              <div><strong>콘텐츠 그리드:</strong> 704px</div>
              <div><strong>양측 마진:</strong> 32px (좌 32 / 우 32)</div>
              <div><strong>컬럼 수:</strong> 8 Columns Grid</div>
            </div>
          </div>

          <div className="bg-white border border-etc-02 rounded-[14px] p-5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[14px] font-bold text-text-01">PC (데스크탑)</span>
              <span className="font-mono text-[13px] bg-etc-04 px-2 py-0.5 rounded text-text-02 font-bold">1200px</span>
            </div>
            <div className="text-[14px] text-text-02 space-y-1">
              <div><strong>콘텐츠 그리드:</strong> 1120px</div>
              <div><strong>양측 마진:</strong> 40px (좌 40 / 우 40)</div>
              <div><strong>컬럼 수:</strong> 12 Columns Grid</div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Navigation Cards */}
      <div className="space-y-4">
        <h3 className="text-[20px] font-bold text-text-01 tracking-da24">
          핵심 디자인시스템 모듈
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { id: 'colors', title: 'Colors', icon: Palette, desc: 'main-01 (#1219F7), text 계층, etc 보더 토큰' },
            { id: 'typography', title: 'Typography', icon: Type, desc: 'Pretendard 폰트, 짝수 6개 규격, -1px 자간' },
            { id: 'buttons', title: 'Buttons', icon: MousePointerClick, desc: 'Floating(56px), Public(312px), Modal(280px), 3-Split' },
            { id: 'inputs', title: 'Form Inputs', icon: FormInput, desc: '312x56px 규격의 텍스트, 숫자, 셀렉트 폼' },
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
                    이동하기 →
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
