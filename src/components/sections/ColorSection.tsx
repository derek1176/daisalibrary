import React, { useState } from 'react';
import { Check, Copy, AlertOctagon } from 'lucide-react';

interface ColorToken {
  token: string;
  variable: string;
  hex: string;
  name: string;
  desc: string;
  border?: boolean;
  isBanned?: boolean;
}

export const ColorSection: React.FC<{ mode?: 'customer' | 'partner' }> = ({ mode = 'customer' }) => {
  const isPartner = mode === 'partner';
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  const handleCopy = (hex: string, token: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedToken(token);
    setTimeout(() => setCopiedToken(null), 1500);
  };

  // 고객향 컬러 토큰 (DAISA_DESIGN_SYSTEM.md 기준)
  const customerGroups: { title: string; tokens: ColorToken[] }[] = [
    {
      title: '메인 브랜드 컬러 (Main Colors)',
      tokens: [
        {
          token: 'main-01',
          variable: '$color.main-01',
          hex: '#1219F7',
          name: 'Primary Blue',
          desc: '전사 메인 브랜드 블루 (Primary CTA, 포커스 테두리, 주요 활성 상태)',
        },
        {
          token: 'main-02',
          variable: '$color.main-02',
          hex: '#595EF9',
          name: 'Secondary Blue',
          desc: '보조 블루 포인트 (서브 버튼, 선택 칩 테두리, 액티브 라인)',
        },
        {
          token: 'main-03',
          variable: '$color.main-03',
          hex: '#1219F7 ~ #595EF9',
          name: 'Brand Gradient',
          desc: '프로모션 배너 및 브랜드 강조 그라디언트',
        },
        {
          token: 'main-04',
          variable: '$color.main-04',
          hex: '#F4F5FF',
          name: 'Tint Background',
          desc: '키컬러 배경 틴트 (상태 뱃지, 안내 박스 배경)',
          border: true,
        },
        {
          token: 'sub-02',
          variable: '$color.sub-02',
          hex: '#F34766',
          name: 'Error Red',
          desc: '에러 스트로크 및 오류 피드백 텍스트',
        },
      ],
    },
    {
      title: '텍스트 위계 컬러 (Text Hierarchy)',
      tokens: [
        {
          token: 'text-01',
          variable: '$color.text-01',
          hex: '#121212',
          name: 'Headline / Title',
          desc: '페이지 대제목, 섹션 헤드라인, 메인 강조 문구',
        },
        {
          token: 'text-02',
          variable: '$color.text-02',
          hex: '#333333',
          name: 'Body Text',
          desc: '본문 기본 텍스트, 인풋 입력 값, 라벨',
        },
        {
          token: 'text-03',
          variable: '$color.text-03',
          hex: '#666666',
          name: 'Sub / Help',
          desc: '보조 설명문, 입력 힌트 안내, 모달 본문 설명',
        },
        {
          token: 'text-04',
          variable: '$color.text-04',
          hex: '#888888',
          name: 'Caption / Placeholder',
          desc: '인풋 플레이스홀더, 비활성 텍스트, 각주 약관',
        },
      ],
    },
    {
      title: '배경 및 구분선 (Borders & Backgrounds)',
      tokens: [
        {
          token: 'etc-01',
          variable: '$color.etc-01',
          hex: '#FFFFFF',
          name: 'White',
          desc: '카드 컨테이너 배경, 인풋 필드 배경',
          border: true,
        },
        {
          token: 'etc-02',
          variable: '$color.etc-02',
          hex: '#D7DBE2',
          name: 'Default Border',
          desc: '기본 보더 스트로크 (1px solid), 카드 라인 구분선',
          border: true,
        },
        {
          token: 'etc-03',
          variable: '$color.etc-03',
          hex: '#EBEEF2',
          name: 'Divider / Cancel',
          desc: '영역 구분선, 취소/보조 버튼 배경',
          border: true,
        },
        {
          token: 'etc-04',
          variable: '$color.etc-04',
          hex: '#F7F8FA',
          name: 'Disabled BG',
          desc: '비활성 인풋 배경, 탭바 컨테이너 배경',
          border: true,
        },
        {
          token: 'etc-05',
          variable: '$color.etc-05',
          hex: '#FAFAFA',
          name: 'Page Background',
          desc: '전체 대시보드 및 서비스 기본 배경',
          border: true,
        },
        {
          token: 'dimmed',
          variable: '$color.dimmed',
          hex: 'rgba(0,0,0,0.6)',
          name: 'Overlay Dimmed',
          desc: '모달 및 바텀시트 배경 오버레이 (60%)',
        },
      ],
    },
  ];

  // 파트너향 컬러 토큰 (DAISA_PARTNER_DESIGN_SYSTEM.md 기준)
  const partnerGroups: { title: string; tokens: ColorToken[] }[] = [
    {
      title: '메인 브랜드 컬러 (Main Colors)',
      tokens: [
        {
          token: 'main-01',
          variable: '$color.partner.main-01',
          hex: '#1219F7',
          name: 'Primary Blue',
          desc: '전사 메인 CTA 버튼(56px/62px), 핵심 활성 상태, 승인 완료',
        },
        {
          token: 'main-02',
          variable: '$color.partner.main-02',
          hex: '#595EF9',
          name: 'Secondary Blue',
          desc: '보조 인터랙션, 그래픽 강조 포인트, 아웃라인 버튼',
        },
        {
          token: 'sub-01',
          variable: '$color.partner.sub-01',
          hex: '#F7D915',
          name: 'Sub Yellow',
          desc: '파트너 강조 포인트, 노란색 태그, 주의 및 배차 알림',
        },
        {
          token: 'sub-02',
          variable: '$color.partner.sub-02',
          hex: '#F34766',
          name: 'Sub Red / Error',
          desc: '오류 알림, 에러 인풋 보더, 취소/패널티 등 부정 상태',
        },
      ],
    },
    {
      title: '텍스트 위계 컬러 (Text Hierarchy)',
      tokens: [
        {
          token: 'text-01',
          variable: '$color.partner.text-01',
          hex: '#121212',
          name: 'Headline / Title',
          desc: '타이틀, 견적 금액, 주문 번호 등 주요 헤드라인 정보',
        },
        {
          token: 'text-02',
          variable: '$color.partner.text-02',
          hex: '#333333',
          name: 'Body Text',
          desc: '본문 기본 텍스트(18px), 폼 입력 값, 고객명, 주소 라벨',
        },
        {
          token: 'text-03',
          variable: '$color.partner.text-03',
          hex: '#666666',
          name: 'Sub / Help',
          desc: '보조 설명, 견적 일시, 부가 정보 안내문',
        },
        {
          token: 'text-04',
          variable: '$color.partner.text-04',
          hex: '#888888',
          name: 'Caption / Placeholder',
          desc: '캡션(14px), 인풋 플레이스홀더, 비활성 텍스트',
        },
      ],
    },
    {
      title: '배경 및 구분선 (Borders & Backgrounds)',
      tokens: [
        {
          token: 'etc-01',
          variable: '$color.partner.etc-01',
          hex: '#FFFFFF',
          name: 'White',
          desc: '카드 컨테이너 배경, 인풋 필드 배경',
          border: true,
        },
        {
          token: 'etc-02',
          variable: '$color.partner.etc-02',
          hex: '#D7DBE2',
          name: 'Default Border',
          desc: '기본 보더 스트로크 (1px solid), 카드 외곽 테두리',
          border: true,
        },
        {
          token: 'etc-03',
          variable: '$color.partner.etc-03',
          hex: '#EBEEF2',
          name: 'Divider / Cancel',
          desc: '영역 구분선 Divider, 취소 버튼 배경',
          border: true,
        },
        {
          token: 'etc-04',
          variable: '$color.partner.etc-04',
          hex: '#F7F8FA',
          name: 'Disabled BG',
          desc: '비활성 배경, 카드 배경',
          border: true,
        },
        {
          token: 'etc-05',
          variable: '$color.partner.etc-05',
          hex: '#FAFAFA',
          name: 'Page Background',
          desc: '전체 서비스 기본 배경',
          border: true,
        },
      ],
    },
    {
      title: '사용 금지 폐기 컬러 (Not Used Tokens)',
      tokens: [
        {
          token: 'notused-01',
          variable: '$color.partner.notused-01',
          hex: '#1E25F8',
          name: 'Not Used 01',
          desc: '🚫 레거시 블루 톤 (현재 main-01 #1219F7로 완전 통일됨)',
          isBanned: true,
        },
        {
          token: 'notused-02',
          variable: '$color.partner.notused-02',
          hex: '#EBEEF2',
          name: 'Not Used 02',
          desc: '🚫 비표준 구분선 톤 (etc-02 / etc-03으로 명확히 구분하여 사용)',
          isBanned: true,
        },
      ],
    },
  ];

  const currentGroups = isPartner ? partnerGroups : customerGroups;

  return (
    <section id="colors" className="space-y-12">
      {/* Section Header */}
      <div className="border-b pb-6 border-[#E5E8EB]">
        <span className="text-[13px] font-bold text-[#3182F6]">
          {isPartner ? '파트너향 디자인시스템' : '스타일 파운데이션'}
        </span>
        <h2 className="text-[28px] md:text-[32px] font-extrabold tracking-tight mt-1 text-[#191F28]">
          {isPartner ? '파트너 색상 시스템 (Partner Color Tokens)' : '색상 시스템 (Color Tokens)'}
        </h2>
        <p className="text-[15px] mt-2 leading-relaxed max-w-2xl text-[#4E5968]">
          {isPartner
            ? '피그마 공식 [파트너] 스타일가이드(loNec9fjF6nIEgkwxH7aSN) 기반 시맨틱 컬러 토큰입니다. 행을 클릭하면 Hex 코드가 클립보드에 자동 복사됩니다.'
            : '다이사(da24) 고객향 공식 명세서(DAISA_DESIGN_SYSTEM.md) 기반 시맨틱 컬러 토큰입니다. 행을 클릭하면 Hex 코드가 클립보드에 자동 복사됩니다.'}
        </p>
      </div>

      {/* Clean Minimalist Table Layout (Seed Design / Tokens Table Style) */}
      <div className="space-y-10">
        {currentGroups.map((group, groupIdx) => (
          <div key={groupIdx} className="space-y-3">
            {/* Group Title */}
            <h3 className="text-[18px] font-extrabold text-[#191F28] tracking-tight">
              {group.title}
            </h3>

            {/* Table Container */}
            <div className="border-t border-[#E5E8EB] divide-y divide-[#F2F4F6]">
              {/* Table Column Header */}
              <div className="flex items-center justify-between py-3 text-[13px] font-bold text-[#191F28]">
                <span>이름</span>
                <span>값</span>
              </div>

              {/* Rows */}
              {group.tokens.map((item) => {
                const isCopied = copiedToken === item.token;
                const isGradient = item.hex.includes('~');

                return (
                  <div
                    key={item.token}
                    onClick={() => !item.isBanned && handleCopy(item.hex, item.token)}
                    className={`flex items-center justify-between py-3.5 transition-colors group select-none ${
                      item.isBanned
                        ? 'opacity-70 cursor-not-allowed bg-red-50/30'
                        : 'cursor-pointer hover:bg-[#F9FAFB]'
                    }`}
                  >
                    {/* Left Column: Token Variable & Description */}
                    <div className="space-y-1 pr-4">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[14px] font-mono font-bold text-[#191F28] group-hover:text-[#1219F7] transition-colors">
                          {item.variable}
                        </span>
                        <span className="text-[13px] text-[#8B95A1] group-hover:text-[#1219F7] transition-colors font-sans">
                          ↗
                        </span>
                        {item.isBanned && (
                          <span className="text-[11px] font-bold px-1.5 py-0.2 rounded bg-red-100 text-red-600 border border-red-200 ml-1">
                            사용 금지
                          </span>
                        )}
                      </div>
                      <p className="text-[13px] text-[#6B7684] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    {/* Right Column: Circle Swatch & Hex Code */}
                    <div className="flex items-center gap-3 shrink-0">
                      {/* Circle Swatch */}
                      <div
                        className={`w-4 h-4 rounded-full shrink-0 shadow-2xs ${
                          item.border
                            ? 'border border-[#D7DBE2]'
                            : ''
                        }`}
                        style={{
                          background: isGradient
                            ? 'linear-gradient(135deg, #1219F7 0%, #595EF9 100%)'
                            : item.hex,
                        }}
                      />

                      {/* Hex Value / Copied Indicator */}
                      <div className="w-[110px] text-right font-mono text-[14px] text-[#191F28]">
                        {isCopied ? (
                          <span className="text-[12px] font-bold text-[#1219F7] flex items-center justify-end gap-1">
                            <Check className="w-3.5 h-3.5" /> 복사됨
                          </span>
                        ) : (
                          <span className="group-hover:text-[#1219F7] transition-colors">
                            {item.hex}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
