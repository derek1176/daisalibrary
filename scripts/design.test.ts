import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';
import { CUSTOMER_COLORS, CUSTOMER_TYPOGRAPHY, CUSTOMER_RADII } from '../src/data/customerRules';

const root = new URL('../', import.meta.url);
const read = (name: string) => readFile(new URL(name, root), 'utf8');

test('customer website colors exactly match the canonical DESIGN.md table', async () => {
  const doc = await read('DESIGN.md');
  const tokens = Object.fromEntries([...doc.matchAll(/^\| ([a-z]+-\d+|dimmed) \| `([^`]+)`/gm)]
    .map(match => [match[1], match[2]]));
  assert.deepEqual(tokens, CUSTOMER_COLORS);
  assert.equal(Object.values(tokens).filter(value => value.startsWith('#')).length, 13);
  assert(!Object.values(tokens).includes('#E5E8EB'));
});

test('all six website typography defaults match the canonical MD', async () => {
  const doc = await read('DESIGN.md');
  for (const row of CUSTOMER_TYPOGRAPHY) {
    assert(doc.includes(`| ${row.name} | ${row.size}px | ${row.lineHeight}px | ${row.weight} |`));
  }
  assert.equal(CUSTOMER_TYPOGRAPHY.length, 6);
  assert(doc.includes('**-1%**') && doc.includes('letter-spacing: -0.01em'));
  assert.deepEqual([...new Set(CUSTOMER_RADII.map(row => row.val))], ['10px', '16px', 'Full']);
});

test('public customer downloads and legacy URLs contain the same current documents', async () => {
  const design = await read('DESIGN.md');
  for (const target of ['public/DESIGN.md', 'DAISA_DESIGN_SYSTEM.md', 'public/DAISA_DESIGN_SYSTEM.md']) {
    assert.equal(await read(target), design, target);
  }
  assert.equal(await read('public/START-HERE.md'), await read('START-HERE.md'));
  const resources = await read('src/components/sections/ArchiveSection.tsx');
  assert(resources.includes("../../../DESIGN.md?raw"));
  assert(resources.includes("../../../START-HERE.md?raw"));
  assert(!resources.includes('const CUSTOMER_MD_CONTENT = `'));
});
