import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://elawyersbd.com/');
  const text = await page.evaluate(() => document.body.innerText);
  console.log(text);
  await browser.close();
})();
