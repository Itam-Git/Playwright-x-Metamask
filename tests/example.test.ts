// tests/example.test.ts
import { test, expect } from './fixtures';

test('example test', async ({ page }) => {
  await page.goto('https://example.com');
  debugger;
  await expect(page.locator('body')).toHaveText('Changed by my-extension');
});

test('popup page', async ({ page, extensionId }) => {
  await page.goto(`chrome-extension://${extensionId}/popup.html`);
  await expect(page.locator('body')).toHaveText('my-extension popup');
});
