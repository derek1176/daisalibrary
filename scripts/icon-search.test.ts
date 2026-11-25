import assert from 'node:assert/strict';
import { test } from 'node:test';
import { createServer } from 'node:http';
import { systemIcons } from '../src/data/iconCatalog';
import { createIconManifest } from '../src/lib/iconAssets';
import { searchIcons } from '../src/lib/iconSearch';
import { createIconSearchHandler } from '../api/icons/search';

const manifest = createIconManifest(systemIcons);

test('search returns a few relevant assets instead of the full catalog', () => {
  const result = searchIcons(manifest, new URLSearchParams({ q: '검색', limit: '3', size: '20' }));
  assert(result.total > 0);
  assert(result.results.length > 0 && result.results.length <= 3);
  assert(result.results.some(icon => icon.id === 'search'));
  assert(result.results.every(icon => icon.downloadUrl.startsWith('/icons/20/')));
  assert(Buffer.byteLength(JSON.stringify(result)) < Buffer.byteLength(JSON.stringify(manifest)) / 20);
  assert(!JSON.stringify(result).includes('keywords'));
  assert.equal(searchIcons(manifest, new URLSearchParams({ q: 'Search' })).results[0].id, 'search');
  assert.equal(searchIcons(manifest, new URLSearchParams({ q: '후기' })).results[0].id, 'review-star-icon');
  assert.equal(searchIcons(manifest, new URLSearchParams({ q: 'CreditCard' })).results[0].id, 'credit-card');
  assert.equal(searchIcons(manifest, new URLSearchParams({ q: '없는아이콘가나다' })).total, 0);
});

test('invalid requests cannot retrieve the entire list', () => {
  for (const params of [{}, { q: ' ' }, { q: 'a'.repeat(81) }, { q: 'search', limit: '300' },
    { q: 'search', limit: '0' }, { q: 'search', size: '18' }]) {
    assert.throws(() => searchIcons(manifest, new URLSearchParams(params)));
  }
});

test('HTTP endpoint distinguishes invalid, empty-result and unavailable states', async () => {
  let loads = 0;
  const handler = createIconSearchHandler(async () => { loads++; return manifest; });
  const broken = createIconSearchHandler(async () => { throw new Error('missing assets'); });
  const server = createServer((req, res) => void (req.url?.startsWith('/broken') ? broken : handler)(req, res));
  await new Promise<void>(resolve => server.listen(0, '127.0.0.1', resolve));
  try {
    const address = server.address(); assert(address && typeof address !== 'string');
    const base = `http://127.0.0.1:${address.port}`;
    assert.equal((await fetch(base + '/api/icons/search')).status, 400);
    assert.equal(loads, 0);
    const response = await fetch(base + '/api/icons/search?q=calendar&limit=2');
    assert.equal(response.status, 200);
    assert.equal(response.headers.get('access-control-allow-origin'), '*');
    assert.equal((await response.json()).results[0].id, 'calendar');
    const empty = await fetch(base + '/api/icons/search?q=none-xyz-abc');
    assert.equal(empty.status, 200); assert.equal((await empty.json()).total, 0);
    assert.equal(loads, 1);
    const unavailable = await fetch(base + '/broken?q=search');
    assert.equal(unavailable.status, 503); assert((await unavailable.json()).error);
    assert.equal((await fetch(base + '/api/icons/search?q=search', { method: 'POST' })).status, 405);
    assert.equal((await fetch(base + '/api/icons/search', { method: 'OPTIONS' })).status, 204);
  } finally {
    await new Promise<void>((resolve, reject) => server.close(error => error ? reject(error) : resolve()));
  }
});
