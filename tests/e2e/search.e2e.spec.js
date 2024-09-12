import { test, expect } from '@playwright/test';
import { injectAxe, checkA11y } from 'axe-playwright';

test('Form submission and accessibility check', async ({ page }) => {
  // Navigate to the app
  await page.goto('http://localhost:5173');

  // Inject axe-core for accessibility testing
  await injectAxe(page);

  // Fill out the form
  await page.fill('input[name="search"]', 'Accessibility Testing');
  await page.click('button[type="submit"]');

  // Ensure results are displayed
  await expect(page.locator('.search-results')).toBeVisible();

  // Run accessibility tests on the form
  await checkA11y(page, null, {
    detailedReport: true,
    detailedReportOptions: { html: true },
  });
});
