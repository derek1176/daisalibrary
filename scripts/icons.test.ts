import assert from "node:assert/strict";
import { test } from "node:test";
import { systemIcons } from "../src/data/iconCatalog";
import { createIconManifest, getIconId, getIconUrl, iconSizes, renderIconSvg } from "../src/lib/iconAssets";

test("public IDs remain name-based and size URLs are explicit", () => {
  assert.equal(getIconId("CalendarClock"), "calendar-clock");
  assert.equal(getIconId("ReviewStarIcon"), "review-star-icon");
  assert.equal(getIconUrl("Search"), "/icons/search.svg");
  assert.equal(getIconUrl("Search", 20), "/icons/20/search.svg");
  assert.throws(() => getIconUrl("Search", 18), /Unsupported/);
});

test("duplicate SVGs retain every label, category and search term", () => {
  const manifest = createIconManifest(systemIcons);
  assert.equal(manifest.entryCount, systemIcons.length);
  assert.equal(manifest.iconCount, new Set(systemIcons.map(item => item.name)).size);
  assert.equal(manifest.icons.reduce((sum, icon) => sum + icon.usages.length, 0), systemIcons.length);
  assert.equal(new Set(manifest.icons.map(icon => icon.id)).size, manifest.icons.length);
  const creditCard = manifest.icons.find(icon => icon.name === "CreditCard")!;
  for (const usage of systemIcons.filter(icon => icon.name === "CreditCard")) {
    assert(creditCard.keywords.includes(usage.label.toLowerCase()));
    assert(creditCard.usages.some(item => item.description === usage.desc));
  }
  assert(manifest.icons.find(icon => icon.id === "search")!.keywords.includes("search"));
  assert(manifest.icons.some(icon => icon.name === "ReviewStarIcon"));
  assert.throws(() => createIconManifest([
    { ...systemIcons[0], name: "FooBar" },
    { ...systemIcons[0], name: "foo-bar" },
  ]), /collision/);
});

test("every standard and custom SVG is standalone and matches its size variant", () => {
  for (const item of systemIcons) {
    for (const size of iconSizes) {
      const svg = renderIconSvg(item, size);
      assert(svg.startsWith("<svg"), item.name);
      assert(svg.includes('xmlns="http://www.w3.org/2000/svg"'), item.name);
      assert(svg.includes(`width="${size}"`) && svg.includes(`height="${size}"`), item.name);
      assert(svg.includes('viewBox="0 0 24 24"'), item.name);
      assert(svg.includes('stroke-width="1.5"'), item.name);
      assert(svg.includes('stroke="currentColor"'), item.name);
      assert(!/<script|<foreignObject|\bon\w+=/i.test(svg), item.name);
    }
  }
});
