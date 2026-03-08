import { test, expect } from '@playwright/test';

test.describe('Mobile Layout UX', () => {

  test('Navbar should not overflow and text should be visually hidden', async ({ page, isMobile }) => {
    // Only run this test in mobile projects
    test.skip(!isMobile, 'This test is only relevant for mobile viewports');

    await page.goto('/');

    // Target the navigation bar
    const nav = page.locator('nav');
    
    // The "Aharon Maslin" span inside the Navbar link should have the class `hidden` on mobile
    const nameSpan = nav.locator('span', { hasText: 'Aharon Maslin' });
    
    // Wait for the element to attach
    await nameSpan.waitFor({ state: 'attached' });
    
    // Check if it's hidden (display: none via the `hidden md:block` classes)
    await expect(nameSpan).toBeHidden();
  });

  test('Timeline cards should expand on tap', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'This test is only relevant for mobile viewports');

    await page.goto('/');
    
    // Navigate to Timeline section
    await page.getByRole('link', { name: 'Timeline' }).click();

    // The first timeline card
    const firstCard = page.locator('.group', { hasText: 'Started coding journey' }).first();

    // Tap the card
    await firstCard.tap();

    // After tapping, the expanded classes (like text-emerald-600 on the year) should apply
    const yearIndicator = firstCard.locator('.font-mono').first();
    await expect(yearIndicator).toHaveClass(/text-emerald-600/);
    
    // Tap outside (on the body) to dismiss
    await page.locator('body').tap({ position: { x: 10, y: 10 } });
    
    // The class should revert to neutral
    await expect(yearIndicator).toHaveClass(/text-neutral-500/);
  });

});
