import { copyFile, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import JSZip from 'jszip';

const root = new URL('../', import.meta.url);
for (const name of ['DESIGN.md', 'START-HERE.md']) {
  await copyFile(new URL(name, root), new URL(`public/${name}`, root));
}
// Keep existing customer download URLs and file references compatible.
for (const target of ['DAISA_DESIGN_SYSTEM.md', 'public/DAISA_DESIGN_SYSTEM.md']) {
  await copyFile(new URL('DESIGN.md', root), new URL(target, root));
}
const zip = new JSZip();
for (const name of ['DESIGN.md', 'START-HERE.md']) {
  zip.file(name, await readFile(new URL(name, root)), { date: new Date('2000-01-01T00:00:00Z') });
}
await writeFile(new URL('public/daisa-customer-md.zip', root),
  await zip.generateAsync({ type: 'nodebuffer', compression: 'DEFLATE' }));
console.log(`Synced customer documents from ${fileURLToPath(root)}`);
