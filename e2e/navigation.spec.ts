import { test, expect } from '@playwright/test';

test.describe('Navigation flows', () => {
  test('should navigate between Home, About, and Contact', async ({ page }) => {
    // 1. Go to Home page
    await page.goto('/');

    // Verify Title
    await expect(page).toHaveTitle(/Aharon Maslin \| Portfolio/);

    // Verify the central Hero element
    await expect(page.locator('h1').getByText(/Aharon Maslin/)).toBeVisible();

    // 2. Click About navigation link (which scrolls to #about)
    await page.getByRole('navigation').getByRole('link', { name: 'About' }).click();
    
    // Check if URL contains the hash
    await expect(page).toHaveURL(/.*#about/);
    await expect(page.locator('section#about h2').filter({ hasText: 'About Me' })).toBeVisible();

    // 3. Click Contact navigation link
    await page.getByRole('navigation').getByRole('link', { name: 'Contact' }).click();
    
    // Wait for route change to complete
    await expect(page).toHaveURL(/.*\/contact/);
    await expect(page.locator('h1').filter({ hasText: 'Get in Touch' })).toBeVisible();
  });
});
