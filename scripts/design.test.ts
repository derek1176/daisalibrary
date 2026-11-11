import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';
import JSZip from 'jszip';
import { CUSTOMER_COLORS, CUSTOMER_COLOR_USAGES, CUSTOMER_TYPOGRAPHY, CUSTOMER_RADII } from '../src/data/customerRules';
import { PARTNER_COLORS, PARTNER_COLOR_USAGES, PARTNER_TYPOGRAPHY, PARTNER_RADII } from '../src/data/partnerRules';

const root = new URL('../', import.meta.url);
const read = (name: string) => readFile(new URL(name, root), 'utf8');
const systems = [
  { mode: 'customer', prefix: '', alias: 'DAISA_DESIGN_SYSTEM.md', colors: CUSTOMER_COLORS, usages: CUSTOMER_COLOR_USAGES, typography: CUSTOMER_TYPOGRAPHY, solids: 15 },
  { mode: 'partner', prefix: 'partner/', alias: 'DAISA_PARTNER_DESIGN_SYSTEM.md', colors: PARTNER_COLORS, usages: PARTNER_COLOR_USAGES, typography: PARTNER_TYPOGRAPHY, solids: 16 },
] as const;

for (const system of systems) {
  test(`${system.mode}: website palette and hover descriptions match the MD`, async () => {
    const doc = await read(system.prefix + 'DESIGN.md');
    const rows = [...doc.matchAll(/^\| ([a-z]+-\d+|dimmed) \| `([^`]+)` \| ([^|]+) \|/gm)];
    assert.deepEqual(Object.fromEntries(rows.map(match => [match[1], match[2]])), system.colors);
    assert.deepEqual(Object.fromEntries(rows.map(match => [match[1], match[3].trim()])), system.usages);
    assert.equal(Object.values(system.colors).filter(value => value.startsWith('#')).length, system.solids);
    assert.equal(system.colors['etc-01'], '#C4C9D1');
    assert.equal(system.colors['system-02'], '#FFFFFF');
    assert.equal(system.colors['sub-01'], '#F7D915');
  });

  test(`${system.mode}: typography defaults match explicit px line heights and -1% spacing`, async () => {
    const doc = await read(system.prefix + 'DESIGN.md');
    for (const row of system.typography) {
      assert(doc.includes(`| ${row.name} | ${row.size}px | ${row.lineHeight}px | ${row.weight} |`));
    }
    assert(doc.includes('**-1%**') && doc.includes('letter-spacing: -0.01em'));
  });

  test(`${system.mode}: direct downloads, compatibility aliases and the ZIP use current canonical documents`, async () => {
    for (const name of ['DESIGN.md', 'START-HERE.md']) {
      assert.equal(await read('public/' + system.prefix + name), await read(system.prefix + name));
    }
    const design = await read(system.prefix + 'DESIGN.md');
    for (const target of [system.alias, 'public/' + system.alias]) assert.equal(await read(target), design);
    const zip = await JSZip.loadAsync(await readFile(new URL(`public/daisa-${system.mode}-md.zip`, root)));
    assert.deepEqual(Object.keys(zip.files).sort(), ['DESIGN.md', 'START-HERE.md']);
    for (const name of ['DESIGN.md', 'START-HERE.md']) {
      assert.equal(await zip.file(name)!.async('string'), await read(system.prefix + name));
    }
  });
}

test('same document structure, independently scoped values and no embedded stale MD', async () => {
  const customer = await read('DESIGN.md'), partner = await read('partner/DESIGN.md');
  assert.deepEqual(customer.match(/^## .+/gm), partner.match(/^## .+/gm));
  assert.equal(CUSTOMER_TYPOGRAPHY.length, 6);
  assert.equal(PARTNER_TYPOGRAPHY.length, 7);
  assert.deepEqual([...new Set(CUSTOMER_RADII.map(row => row.val))], ['10px', '16px', 'Full']);
  assert.deepEqual([...new Set(PARTNER_RADII.map(row => row.val))], ['6px', '16px', 'Full']);
  assert(partner.includes('**Noto Sans KR**') && partner.includes('**일반 버튼·입력창·카드·모달은 6px'));
  const resources = await read('src/components/sections/ArchiveSection.tsx');
  for (const path of ['../../../DESIGN.md?raw', '../../../START-HERE.md?raw', '../../../partner/DESIGN.md?raw', '../../../partner/START-HERE.md?raw']) {
    assert(resources.includes(path));
  }
  assert(!resources.includes('const CUSTOMER_MD_CONTENT = `') && !resources.includes('const PARTNER_MD_CONTENT = `'));
});
