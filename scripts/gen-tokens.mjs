// Genera src/styles/tokens.css da scripts/tokens.json (design system Rifipack).
import { readFileSync, writeFileSync } from "node:fs";

const d = JSON.parse(readFileSync(new URL("./tokens.json", import.meta.url), "utf8"));
const dark = [], light = [], plain = [];

for (const t of d.color.tokens) {
  dark.push(`  --${t.name}: ${t.value.dark};`);
  light.push(`  --${t.name}: ${t.value.light};`);
}
for (const t of d.shadow.tokens) {
  dark.push(`  --${t.name}: ${t.value.dark};`);
  light.push(`  --${t.name}: ${t.value.light};`);
}
for (const g of [d.spacing, d.radius, d.layout, d.zIndex]) {
  for (const t of g.tokens) plain.push(`  --${t.name}: ${t.value};`);
}

const css = `/* GENERATO da scripts/gen-tokens.mjs: non modificare a mano. */
:root {
${dark.join("\n")}
${plain.join("\n")}
  color-scheme: dark;
}
[data-theme="light"] {
${light.join("\n")}
  color-scheme: light;
}
`;
writeFileSync(new URL("../src/styles/tokens.css", import.meta.url), css);
console.log("tokens.css scritto");
