import type { createIconManifest } from './iconAssets';

type Manifest = ReturnType<typeof createIconManifest>;

export function parseIconSearchParams(params: URLSearchParams) {
  const query = (params.get('q') ?? '').normalize('NFKC').trim().toLowerCase();
  const limit = params.has('limit') ? Number(params.get('limit')) : 5;
  const size = params.has('size') ? Number(params.get('size')) : 24;
  if (!query || query.length > 80) throw new Error('q must contain 1–80 characters.');
  if (!Number.isInteger(limit) || limit < 1 || limit > 10) throw new Error('limit must be an integer from 1 to 10.');
  if (![24, 20, 16].includes(size)) throw new Error('size must be 24, 20 or 16.');
  return { query, limit, size };
}

export function searchIcons(manifest: Manifest, params: URLSearchParams) {
  const { query, limit, size } = parseIconSearchParams(params);
  const terms = query.split(/\s+/u);
  const matches = manifest.icons.flatMap(icon => {
    const haystack = [icon.id, icon.name, icon.label, icon.description, ...icon.keywords,
      ...icon.usages.flatMap(usage => [usage.label, usage.description])].join(' ').normalize('NFKC').toLowerCase();
    if (!terms.every(term => haystack.includes(term))) return [];
    const score = icon.id === query || icon.name.toLowerCase() === query ? 100
      : icon.label.toLowerCase() === query ? 80
      : icon.keywords.includes(query) ? 60 : 20;
    return [{ icon, score }];
  }).sort((a, b) => b.score - a.score || a.icon.id.localeCompare(b.icon.id));

  return {
    query, size, total: matches.length,
    results: matches.slice(0, limit).map(({ icon }) => {
      const usage = icon.usages.find(item => terms.every(term =>
        `${item.label} ${item.description}`.normalize('NFKC').toLowerCase().includes(term)));
      return {
        id: icon.id, name: icon.name,
        label: usage?.label ?? icon.label,
        description: usage?.description ?? icon.description,
        ...icon.variants[size],
      };
    }),
  };
}
