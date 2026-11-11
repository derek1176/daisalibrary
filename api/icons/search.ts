import type { IncomingMessage, ServerResponse } from 'node:http';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { parseIconSearchParams, searchIcons } from '../../src/lib/iconSearch';

export function createIconSearchHandler(load: () => Promise<Parameters<typeof searchIcons>[0]>) {
  let catalog: Promise<Parameters<typeof searchIcons>[0]> | undefined;
  return async function handler(req: IncomingMessage, res: ServerResponse) {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    if (req.method === 'OPTIONS') { res.statusCode = 204; res.end(); return; }
    if (req.method !== 'GET') {
      res.setHeader('Allow', 'GET, OPTIONS');
      res.statusCode = 405;
      res.end(JSON.stringify({ error: 'Use GET with q, optional limit (1–10) and size (24, 20, 16).' }));
      return;
    }

    const params = new URL(req.url ?? '/', 'https://daisalibrary.vercel.app').searchParams;
    // Validate before loading the full server-side catalog. Empty queries never dump the list.
    try { parseIconSearchParams(params); }
    catch (error) {
      res.statusCode = 400;
      res.end(JSON.stringify({ error: (error as Error).message }));
      return;
    }

    try {
      catalog ??= load();
      const result = searchIcons(await catalog, params);
      res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400');
      res.end(JSON.stringify(result));
    } catch {
      catalog = undefined;
      res.statusCode = 503;
      res.end(JSON.stringify({ error: 'Icon search is unavailable. Retry later or request an official SVG file; this is not a no-match result.' }));
    }
  };
}

export default createIconSearchHandler(() =>
  readFile(path.join(process.cwd(), 'public/icons/manifest.json'), 'utf8').then(JSON.parse));
