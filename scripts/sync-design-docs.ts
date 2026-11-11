import { copyFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const root = new URL('../', import.meta.url);
for (const name of ['DESIGN.md', 'START-HERE.md']) {
  await copyFile(new URL(name, root), new URL(`public/${name}`, root));
}
// Keep existing customer download URLs and file references compatible.
for (const target of ['DAISA_DESIGN_SYSTEM.md', 'public/DAISA_DESIGN_SYSTEM.md']) {
  await copyFile(new URL('DESIGN.md', root), new URL(target, root));
}
console.log(`Synced customer documents from ${fileURLToPath(root)}`);
