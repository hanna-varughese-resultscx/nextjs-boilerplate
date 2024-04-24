import { test, expect } from '@playwright/test';

test('navigate to Get Started page', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.click('button:has-text("Get Started")');
  const url = new URL(page.url());
  await expect(url.pathname).toBe('/get-started');
});

test('navigate to Documentation page', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.click('button:has-text("Documentation")');
  const url = new URL(page.url());
  await expect(url.pathname).toBe('/documentation');
});
