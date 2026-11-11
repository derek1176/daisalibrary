import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { systemIcons } from "../src/data/iconCatalog";
import { createIconManifest, getIconUrl, iconSizes, renderIconSvg } from "../src/lib/iconAssets";

const root = fileURLToPath(new URL("../", import.meta.url));
const output = path.join(root, "public/icons");
const manifest = createIconManifest(systemIcons);
const catalog = new Map(systemIcons.map(item => [item.name, item]));

// public/icons is generated only. Removing it also removes assets for deleted entries.
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
for (const icon of manifest.icons) {
  const item = catalog.get(icon.name)!;
  for (const size of iconSizes) {
    const destination = path.join(root, "public", getIconUrl(icon.name, size));
    await mkdir(path.dirname(destination), { recursive: true });
    await writeFile(destination, renderIconSvg(item, size) + "\n");
  }
}
await writeFile(path.join(output, "manifest.json"), JSON.stringify(manifest, null, 2) + "\n");
await writeFile(path.join(output, "LICENSE-lucide.txt"),
  await readFile(path.join(root, "node_modules/lucide-react/LICENSE")));
await writeFile(path.join(output, "README.md"), `# 다이사 공식 아이콘 사용 안내

- AI는 아이콘이 필요할 때만 검색: /api/icons/search?q=search&limit=3&size=24
- q: 한글·영문 검색어(URL 인코딩), limit: 기본 5개·최대 10개, size: 24·20·16. 검색어 없는 요청은 허용하지 않습니다.
- 소수 후보의 모양을 확인하고 선택한 SVG만 다운로드하세요. 일반 작업에서 전체 manifest를 읽거나 대화에 넣지 마세요.
- total: 0은 검색 결과 없음입니다. HTTP 오류나 HTML 응답은 아이콘 부재가 아닙니다. 적합한 결과가 없으면 유사어로 재검색하고, 접근 불가 시 원본을 전달받으세요.
- 기존 전체 목록: [manifest.json](./manifest.json) — 호환·관리용이며 일반 AI 작업의 시작점이 아닙니다.
- 기본 SVG: /icons/{id}.svg (24px)
- 작은 SVG: /icons/20/{id}.svg 또는 /icons/16/{id}.svg
- 미리보기와 다운로드는 같은 SVG 파일을 사용합니다. 서버나 JavaScript 실행 없이 GET으로 받을 수 있습니다.
- manifest의 URL은 사이트 루트 기준입니다. 목록을 받은 사이트의 origin과 결합하세요. 별도 서비스에서 사용할 때는 파일을 내려받아 프로젝트에 포함하는 것을 권장합니다.
- 검색 서버가 이름·한글 설명·검색어·여러 용도를 찾아 소수 결과만 반환합니다. 전체 데이터는 AI에 전달하지 않습니다.
- 300개 등 고정 개수를 가정하지 말고 entryCount(용도 수)와 iconCount(고유 SVG 수)를 확인하세요.
- 적합한 원본이 있으면 재생성하지 마세요. 목록을 확인할 수 없었던 상황을 검색 결과 없음으로 처리하지 마세요.
- 원본은 currentColor와 1.5px 선을 사용합니다. inline SVG에서는 CSS color를 따릅니다. img 요소에서는 부모 color가 SVG 내부로 전달되지 않으므로 색상 제어가 필요하면 원본을 inline으로 사용하세요.
- Lucide 아이콘의 라이선스: [LICENSE-lucide.txt](./LICENSE-lucide.txt). ReviewStarIcon은 이 프로젝트의 커스텀 아이콘입니다.

예: 검색 아이콘은 [search.svg](./search.svg), 달력은 [calendar.svg](./calendar.svg)입니다.

이 파일과 목록·SVG는 src/data/iconCatalog.tsx에서 자동 생성됩니다. 생성 결과를 직접 수정하지 마세요.
`);
console.log(`Generated ${manifest.iconCount} icons × ${iconSizes.length} sizes (${manifest.entryCount} usages).`);
