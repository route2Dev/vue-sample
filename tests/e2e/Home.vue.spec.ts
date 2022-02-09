import { test, expect } from './base-fixtures';
// import { test, expect } from '@playwright/test';

test.describe('HelloWorld', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display welcome message', async ({ page }) => {
    expect(await page.innerText('h1')).toBe(
      'Welcome to Your Vue.js + TypeScript App'
    );
  });
});

// test('basic test', async ({ page }) => {
//   await page.goto('https://playwright.dev/');
//   const title = page.locator('.navbar__inner .navbar__title');
//   await expect(title).toHaveText('Playwright');
// });
