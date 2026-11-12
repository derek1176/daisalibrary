import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, CheckCircle2, Search } from 'lucide-react';
import { CUSTOMER_COLORS, CUSTOMER_RADII, CUSTOMER_TYPOGRAPHY } from '../../data/customerRules';
import { PARTNER_COLORS, PARTNER_RADII, PARTNER_TYPOGRAPHY } from '../../data/partnerRules';

const textStyle = (size: number, lineHeight: number, weight: number): React.CSSProperties => ({
  fontSize: size, lineHeight: `${lineHeight}px`, fontWeight: weight,
});

export const ExampleSection: React.FC<{ mode?: 'customer' | 'partner' }> = ({ mode = 'customer' }) => {
  const isPartner = mode === 'partner';
  const [address, setAddress] = useState('');
  const [modal, setModal] = useState<'cancel' | 'success' | null>(null);
  const dialog = useRef<HTMLDivElement | null>(null);
  const colors = isPartner ? PARTNER_COLORS : CUSTOMER_COLORS;
  const typography = isPartner ? PARTNER_TYPOGRAPHY : CUSTOMER_TYPOGRAPHY;
  const headline = typography.find(item => item.name === 'Headline')!;
  const body = typography.find(item => item.name === (isPartner ? 'Body 1' : 'Body'))!;
  const label = isPartner ? body : CUSTOMER_TYPOGRAPHY.find(item => item.name === 'Sub')!;
  const radius = (isPartner ? PARTNER_RADII : CUSTOMER_RADII).find(item => item.highlight)!.val;
  const modalRadius = isPartner ? '6px' : '16px';
  const actionHeight = isPartner ? 51 : 56;

  useEffect(() => { setModal(null); }, [mode]);

  useEffect(() => {
    if (!modal) return;
    const previous = document.activeElement as HTMLElement | null;
    const request = requestAnimationFrame(() => dialog.current?.focus());
    return () => { cancelAnimationFrame(request); if (previous?.isConnected) previous.focus(); };
  }, [modal]);

  const close = () => { setModal(null); };
  const open = (type: 'cancel' | 'success') => { setModal(type); };
  const dialogKeys = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') { event.preventDefault(); close(); }
    if (event.key !== 'Tab' || !dialog.current) return;
    const buttons = Array.from(dialog.current.querySelectorAll<HTMLElement>('button:not(:disabled), [tabindex="0"], input:not(:disabled)'));
    const first = buttons[0], last = buttons[buttons.length - 1];
    if (!first) return;
    if (document.activeElement === dialog.current) { event.preventDefault(); (event.shiftKey ? last : first).focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    else if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
  };
  const primaryStyle: React.CSSProperties = {
    ...textStyle(body.size, body.lineHeight, 700), borderRadius: radius,
    backgroundColor: colors['main-01'], color: colors['system-02'],
  };

  return (
    <section className="space-y-6">
      <div className="border-b pb-4 border-[#E5E8EB]">
        <h2 className="text-[28px] md:text-[32px] font-extrabold tracking-tight text-[#191F28]">Example Screen</h2>
      </div>
      <p className="text-[14px] leading-relaxed text-[#6B7684]">
        {isPartner ? '파트너향' : '고객향'}의 기본 규칙과 모달 동작을 확인하는 예시입니다. 실제 신청은 전송되지 않습니다.
      </p>
      <div className="flex justify-start">
        <div className="min-w-0 flex flex-col items-center gap-3">
          <p className="text-[12px] text-[#8B95A1]">모바일 360px 기준 · 좁은 화면에서는 가용 너비에 맞춤</p>
          <div
            data-example-screen={mode}
            data-customer-preview={!isPartner || undefined}
            data-partner-preview={isPartner || undefined}
            className="relative isolate overflow-hidden w-[360px] max-w-full min-h-[640px] flex flex-col shadow-sm ring-1 ring-[#D7DBE2]"
            style={{ backgroundColor: colors['system-02'] }}
          >
            <header className="h-[56px] shrink-0 px-6 flex items-center gap-3 border-b" style={{ borderColor: colors['etc-03'], color: colors['text-01'] }}>
              <button type="button" aria-label="뒤로가기" onClick={() => open('cancel')} className="w-6 h-6 shrink-0 flex items-center justify-center">
                <ArrowLeft size={24} strokeWidth={1.5} aria-hidden />
              </button>
              <span style={textStyle(body.size, body.lineHeight, 700)}>{isPartner ? '견적 작성' : '견적 신청'}</span>
            </header>
            <div className="px-6 pt-8 pb-6 flex-1 space-y-6" data-example-content>
              <div className="space-y-3">
                <h3 data-example-title style={{ ...textStyle(headline.size, headline.lineHeight, 700), color: colors['text-01'] }}>
                  {isPartner ? '작업 정보를 확인해 주세요' : '이사 정보를 알려 주세요'}
                </h3>
                <p data-example-body style={{ ...textStyle(body.size, body.lineHeight, 400), color: colors['text-02'] }}>
                  {isPartner ? '현장 주소를 입력하면 견적 내용을 확인할 수 있습니다.' : '출발지 주소를 입력하면 필요한 이사 정보를 안내해 드려요.'}
                </p>
              </div>
              <div className="space-y-2">
                <label htmlFor="example-address" className="block" style={{ ...textStyle(label.size, label.lineHeight, 700), color: colors['text-01'] }}>
                  {isPartner ? '현장 주소' : '출발지 주소'}
                </label>
                <div className="h-[56px] px-4 border flex items-center gap-2" data-example-input-box
                  style={{ borderRadius: radius, borderColor: colors['etc-02'], backgroundColor: colors['system-02'] }}>
                  <input id="example-address" type="text" value={address} onChange={event => setAddress(event.target.value)}
                    placeholder="도로명, 건물명 검색"
                    className="min-w-0 w-full bg-transparent outline-none placeholder:text-text-04"
                    style={{ ...textStyle(body.size, body.lineHeight, 400), color: colors['text-02'] }} />
                  <Search size={24} strokeWidth={1.5} className="shrink-0" style={{ color: colors['text-02'] }} aria-hidden />
                </div>
              </div>
            </div>
            <div className="px-6 pb-6 pt-4">
              <button type="button" onClick={() => open('success')} data-example-cta className="w-full h-[56px] flex items-center justify-center" style={primaryStyle}>
                견적신청하기
              </button>
            </div>

            {modal && (
              <div className="absolute inset-0 z-20 flex items-center justify-center p-6" onKeyDown={dialogKeys}>
                <div data-example-dimmed className="absolute inset-0" style={{ backgroundColor: colors.dimmed }} onClick={close} />
                <div ref={dialog}
                  tabIndex={-1}
                  role="dialog" aria-modal="true" aria-labelledby="example-dialog-title" aria-describedby="example-dialog-body"
                  className="relative w-[312px] max-w-full bg-white px-4 py-6 flex flex-col gap-6 shadow-lg outline-none"
                  style={{ borderRadius: modalRadius }}>
                  <div className="space-y-2 text-center">
                    {modal === 'success' && <div className="flex justify-center mb-4"><CheckCircle2 size={48} strokeWidth={1.5} style={{ color: colors['main-01'] }} aria-hidden /></div>}
                    <h4 id="example-dialog-title" style={{ ...textStyle(20, 30, 700), color: colors['text-01'] }}>
                      {modal === 'cancel' ? '신청을 취소하시겠습니까?' : '견적 신청 완료'}
                    </h4>
                    <p id="example-dialog-body" style={{ ...textStyle(body.size, body.lineHeight, 400), color: colors['text-02'] }}>
                      {modal === 'cancel' ? '작성 중인 정보가 저장되지 않습니다.' : isPartner ? '견적 신청이 완료되었습니다.' : '견적 신청이 완료됐어요.'}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    {modal === 'cancel' && <button type="button" onClick={() => { setAddress(''); close(); }} className="min-w-0 flex-1 flex items-center justify-center"
                      style={{ ...textStyle(body.size, body.lineHeight, 700), height: actionHeight, borderRadius: radius,
                        backgroundColor: colors['system-02'], color: colors['text-03'],
                        border: `1px solid ${colors['etc-02']}` }}>
                      취소하기
                    </button>}
                    <button type="button" className="min-w-0 flex-1 flex items-center justify-center"
                      style={{ ...primaryStyle, height: actionHeight }} onClick={close}>
                      {modal === 'cancel' ? '계속하기' : '확인'}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
