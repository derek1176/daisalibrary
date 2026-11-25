import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import type { IconMeta } from "../data/iconCatalog";

export const iconSizes = [24, 20, 16] as const;

export function getIconId(name: string): string {
  return name
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1-$2")
    .toLowerCase();
}

export function getIconUrl(name: string, size = 24): string {
  if (!iconSizes.some(value => value === size)) {
    throw new Error(`Unsupported icon size: ${size}`);
  }
  const id = getIconId(name);
  return size === 24 ? `/icons/${id}.svg` : `/icons/${size}/${id}.svg`;
}

// Shared by static assets and the existing ZIP download to keep their geometry identical.
export function renderIconSvg(item: IconMeta, size = 24): string {
  getIconUrl(item.name, size);
  let svg = renderToStaticMarkup(React.createElement(item.icon, {
    size,
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none",
    stroke: "currentColor",
  }));
  if (!svg.includes("xmlns=")) {
    svg = svg.replace("<svg", '<svg xmlns="http://www.w3.org/2000/svg"');
  }
  return svg;
}

export function createIconManifest(catalog: IconMeta[]) {
  const groups = new Map<string, IconMeta[]>();
  for (const item of catalog) {
    const id = getIconId(item.name);
    const group = groups.get(id) ?? [];
    if (group.length && group[0].name !== item.name) {
      throw new Error(`Icon ID collision: ${id}`);
    }
    group.push(item);
    groups.set(id, group);
  }

  const icons = [...groups.entries()].map(([id, usages]) => {
    const first = usages[0];
    const words = usages.flatMap(item => [
      item.name, getIconId(item.name), item.label, item.desc,
      ...getIconId(item.name).split("-"),
      ...`${item.label} ${item.desc}`.split(/[\s/·,()]+/u),
    ]);
    const variants = Object.fromEntries(iconSizes.map(size => [
      size, { previewUrl: getIconUrl(first.name, size), downloadUrl: getIconUrl(first.name, size) },
    ]));
    return {
      id,
      name: first.name,
      label: first.label,
      description: first.desc,
      keywords: [...new Set(words.filter(Boolean).map(word => word.toLowerCase()))],
      categories: [...new Set(usages.map(item => item.category))],
      usages: usages.map(({ label, desc, category }) => ({ label, description: desc, category })),
      previewUrl: getIconUrl(first.name),
      downloadUrl: getIconUrl(first.name),
      variants,
    };
  });

  return {
    schemaVersion: 1,
    description: "다이사 공식 아이콘. keywords와 usages에서 용도를 찾고 SVG 원본을 사용하세요.",
    urlResolution: "Resolve previewUrl and downloadUrl relative to this manifest's origin.",
    defaultSize: 24,
    supportedSizes: iconSizes,
    strokeWidth: 1.5,
    entryCount: catalog.length,
    iconCount: icons.length,
    licenseUrl: "/icons/LICENSE-lucide.txt",
    icons,
  };
}
