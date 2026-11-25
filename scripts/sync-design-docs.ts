import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import JSZip from 'jszip';

const root = new URL('../', import.meta.url);
for (const mode of ['customer', 'partner'] as const) {
  const prefix = mode === 'partner' ? 'partner/' : '';
  await mkdir(new URL(`public/${prefix}`, root), { recursive: true });
  const zip = new JSZip();
  for (const name of ['DESIGN.md', 'START-HERE.md']) {
    const source = new URL(prefix + name, root);
    await copyFile(source, new URL(`public/${prefix}${name}`, root));
    zip.file(name, await readFile(source), { date: new Date('2000-01-01T00:00:00Z') });
  }
  const alias = mode === 'customer' ? 'DAISA_DESIGN_SYSTEM.md' : 'DAISA_PARTNER_DESIGN_SYSTEM.md';
  for (const target of [alias, `public/${alias}`]) {
    await copyFile(new URL(prefix + 'DESIGN.md', root), new URL(target, root));
  }
  await writeFile(new URL(`public/daisa-${mode}-md.zip`, root),
    await zip.generateAsync({ type: 'nodebuffer', compression: 'DEFLATE' }));
}
console.log(`Synced separate customer and partner documents from ${fileURLToPath(root)}`);
