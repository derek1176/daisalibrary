import React, { useState } from 'react';
import { Check, Copy, MousePointer2 } from 'lucide-react';

type Property = { name: string; value: string; token?: string };
export type Inspection = {
  id: string;
  name: string;
  tag: string;
  layout: Property[];
  style: Property[];
  typography: Property[];
  colors: Property[];
  bounds: { left: number; top: number; width: number; height: number };
};

function colorValue(value: string): string {
  const match = value.match(/^rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:\s*[,/]\s*([\d.]+))?\s*\)$/);
  if (!match) return value;
  const [, r, g, b, alpha] = match;
  if (alpha === '0') return 'transparent';
  if (alpha && Number(alpha) < 1) return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  return '#' + [r, g, b].map(channel => Math.round(Number(channel)).toString(16).padStart(2, '0')).join('').toUpperCase();
}

export function inspectElement(element: Element, frame: HTMLElement, palette: Record<string, string>): Inspection {
  const id = element.getAttribute('data-inspect-id') ?? 'screen';
  const styles = getComputedStyle(element);
  const rect = element.getBoundingClientRect(), frameRect = frame.getBoundingClientRect();
  const px = (number: number) => `${Math.round(number * 100) / 100}px`;
  const token = (value: string) => Object.entries(palette).find(([, candidate]) =>
    candidate.replace(/\s/g, '').toUpperCase() === value.replace(/\s/g, '').toUpperCase())?.[0];
  const property = (name: string, raw: string): Property => {
    const value = colorValue(raw);
    return { name, value, token: token(value) };
  };
  const hasText = ['header', 'title', 'body', 'label', 'input', 'cta', 'modal-title', 'modal-body', 'modal-cancel', 'modal-confirm'].includes(id);
  const textElement = id === 'input' ? element.querySelector('input') ?? element
    : id === 'header' ? element.querySelector('[data-inspect-text]') ?? element : element;
  const text = getComputedStyle(textElement);
  const style: Property[] = [property('background-color', styles.backgroundColor)];
  if (hasText) style.push(property('color', text.color));
  style.push({ name: 'border-radius', value: styles.borderRadius });
  const sides = ['top', 'right', 'bottom', 'left'];
  const borders = sides.map(side => `${styles.getPropertyValue(`border-${side}-width`)} ${styles.getPropertyValue(`border-${side}-style`)} ${colorValue(styles.getPropertyValue(`border-${side}-color`))}`);
  if (sides.some(side => parseFloat(styles.getPropertyValue(`border-${side}-width`)) > 0)) {
    if (new Set(borders).size === 1) style.push({ name: 'border', value: borders[0] });
    else sides.forEach((side, index) => {
      if (parseFloat(styles.getPropertyValue(`border-${side}-width`)) > 0) style.push({ name: `border-${side}`, value: borders[index] });
    });
  }
  if (element instanceof SVGElement) {
    style.push(property('stroke', styles.stroke), { name: 'stroke-width', value: styles.strokeWidth });
  }
  const colors = style.filter(item => item.token || (/color/.test(item.name) || item.name === 'stroke') && item.value !== 'transparent' && item.value !== 'none');
  for (const side of sides) {
    if (parseFloat(styles.getPropertyValue(`border-${side}-width`)) > 0) {
      const border = property('border-color', styles.getPropertyValue(`border-${side}-color`));
      if (!colors.some(item => item.name === border.name && item.value === border.value)) colors.push(border);
    }
  }
  return {
    id, name: element.getAttribute('data-inspect-name') ?? id, tag: element.tagName.toLowerCase(),
    layout: [
      { name: 'width', value: px(rect.width) }, { name: 'height', value: px(rect.height) },
      { name: 'display', value: styles.display }, { name: 'padding', value: styles.padding },
      ...(styles.gap !== 'normal' ? [{ name: 'gap', value: styles.gap }] : []),
    ],
    style,
    typography: hasText ? [
      { name: 'font-family', value: text.fontFamily }, { name: 'font-size', value: text.fontSize },
      { name: 'font-weight', value: text.fontWeight }, { name: 'line-height', value: text.lineHeight },
      { name: 'letter-spacing', value: text.letterSpacing },
    ] : [],
    colors,
    bounds: { left: rect.left - frameRect.left, top: rect.top - frameRect.top, width: rect.width, height: rect.height },
  };
}

const cssText = (properties: Property[]) => properties.map(item => `${item.name}: ${item.value};${item.token ? ` /* ${item.token} */` : ''}`).join('\n');

export const ExampleInspector: React.FC<{ selection: Inspection | null; mode: string }> = ({ selection, mode }) => {
  const [view, setView] = useState<'code' | 'list'>('code');
  const [copied, setCopied] = useState('');
  const [error, setError] = useState('');
  const copy = async (name: string, properties: Property[]) => {
    try { await navigator.clipboard.writeText(cssText(properties)); setCopied(name); setError(''); }
    catch { setError('복사할 수 없습니다. 코드를 직접 선택해 복사해 주세요.'); }
  };
  const groups = selection ? [
    { name: 'Layout', properties: selection.layout },
    { name: 'Style', properties: selection.style },
    { name: 'Typography', properties: selection.typography },
  ].filter(group => group.properties.length) : [];

  return (
    <aside data-example-inspector className="lg:sticky lg:top-[84px] rounded-[16px] bg-[#252525] text-[#EEEEEE] overflow-hidden border border-[#3D3D3D]">
      <div className="px-5 py-4 border-b border-[#3D3D3D] space-y-3">
        <div className="flex items-center justify-between gap-3">
          <div role="tablist" aria-label="Inspector view" className="flex gap-1 rounded-[8px] bg-[#303030] p-1">
            {(['list', 'code'] as const).map(value => (
              <button key={value} role="tab" aria-selected={view === value} onClick={() => setView(value)}
                className={`px-3 py-1 text-[13px] rounded-[6px] ${view === value ? 'bg-[#424242] text-white' : 'text-[#BDBDBD]'}`}>
                {value === 'list' ? 'List' : 'Code'}
              </button>
            ))}
          </div>
          <span className="text-[12px] text-[#BDBDBD] font-mono">CSS</span>
        </div>
        <div className="flex items-center gap-2"><MousePointer2 size={16} /><strong className="text-[15px]" data-inspected-name>{selection?.name ?? 'Screen'}</strong></div>
        <p className="text-[12px] leading-[18px] text-[#AFAFAF]">왼쪽 요소에 마우스를 올리거나 키보드로 포커스하면 실제 적용 값을 확인할 수 있습니다.</p>
        <p className="text-[11px] text-[#AFAFAF]">{mode === 'partner' ? 'Partner' : 'Customer'} · {selection?.tag ?? 'div'}</p>
      </div>
      <div className="p-5 space-y-6 lg:max-h-[calc(100vh-280px)] overflow-auto">
        {groups.map(group => (
          <section key={group.name} data-inspector-group={group.name} className="space-y-2">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-[14px] font-medium">{group.name}</h3>
              <button type="button" aria-label={`Copy ${group.name} CSS`} onClick={() => void copy(group.name, group.properties)} className="p-1 text-[#CFCFCF] hover:text-white">
                {copied === group.name ? <Check size={16} /> : <Copy size={16} />}
              </button>
            </div>
            {view === 'code' ? (
              <div className="rounded-[8px] border border-[#424242] p-3 overflow-x-auto">
                {group.properties.map((item, index) => (
                  <div key={item.name} data-css-property={item.name} className="flex items-start gap-3 text-[12px] leading-[21px] font-mono">
                    <span aria-hidden className="text-[#727272] w-3 shrink-0 text-right select-none">{index + 1}</span>
                    <code className="whitespace-pre-wrap break-all" style={{ fontFamily: 'monospace' }}>{item.name}: <span className="text-[#E3A5DE]" style={{ fontFamily: 'inherit' }}>{item.value}</span>;{item.token && <span className="text-[#9D9D9D]" style={{ fontFamily: 'inherit' }}> {`/* ${item.token} */`}</span>}</code>
                  </div>
                ))}
              </div>
            ) : (
              <dl className="rounded-[8px] border border-[#424242] px-3 divide-y divide-[#3D3D3D]">
                {group.properties.map(item => <div key={item.name} data-css-property={item.name} className="py-2 grid grid-cols-[110px_1fr] gap-2 text-[12px] leading-[18px]">
                  <dt className="text-[#AFAFAF] break-all">{item.name}</dt><dd className="break-all">{item.value}{item.token && <span className="text-[#AFAFAF]"> · {item.token}</span>}</dd>
                </div>)}
              </dl>
            )}
          </section>
        ))}
        {selection && selection.colors.length > 0 && (
          <section className="space-y-3" data-inspector-colors>
            <h3 className="text-[14px] font-medium">Colors</h3>
            {selection.colors.map((color, index) => <div key={`${color.name}-${index}`} className="flex items-center gap-3 text-[12px]">
              <span className="w-6 h-6 rounded-[4px] border border-white/20 shrink-0" style={{ backgroundColor: color.value }} />
              <div><div>{color.token ?? color.name}</div><div className="text-[#BDBDBD] font-mono">{color.value}</div></div>
            </div>)}
          </section>
        )}
        {error && <p role="status" className="text-[12px] text-[#F8C5CA]">{error}</p>}
      </div>
    </aside>
  );
};
