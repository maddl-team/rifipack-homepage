import { chromium } from 'playwright-core';
import AxeBuilder from '@axe-core/playwright';
const b = await chromium.launch({ executablePath: process.env.CHROME_PATH || undefined });
for (const [name, vp, reduce] of [['desktop',{width:1440,height:900},'no-preference'],['mobile',{width:390,height:844},'no-preference'],['reduced',{width:1440,height:900},'reduce']]) {
  const ctx = await b.newContext({ viewport: vp, reducedMotion: reduce });
  const p = await ctx.newPage(); await p.goto('http://localhost:3000/'); await p.waitForTimeout(2500);
  // scorri per attivare reveal
  await p.evaluate(async()=>{for(let y=0;y<document.documentElement.scrollHeight;y+=600){window.scrollTo(0,y);await new Promise(r=>setTimeout(r,120))}window.scrollTo(0,0)});
  await p.waitForTimeout(800);
  const r = await new AxeBuilder({ page: p }).withTags(['wcag2a','wcag2aa','wcag21a','wcag21aa','wcag22aa']).analyze();
  console.log(name, 'violations:', r.violations.length);
  for (const v of r.violations) console.log(' -', v.id, v.impact, v.nodes.length, v.nodes.slice(0,3).map(n=>n.target.join(' ')).join(' | '), '|', v.help);
  await ctx.close();
}
await b.close();
