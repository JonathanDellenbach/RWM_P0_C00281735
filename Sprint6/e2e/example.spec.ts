import { test, expect } from '@playwright/test';

test('checklist page has title', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  
  const title = page.getByTestId('title');
  await expect(title).toHaveText('Progress Checklist');
});

test('progress updates only on submit', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  const progressSection = page.locator('h2:has-text("With Submit Gate")').locator('~ *');
  const progress = page.getByTestId('progress-label');
  const checkboxes = progressSection.locator('input[type="checkbox"]');
  const submitButton = page.getByTestId('submit-version');

  await expect(progress).toHaveText('0/4 (0%)');

  await checkboxes.nth(0).click();
  await checkboxes.nth(1).click();

  await expect(progress).toHaveText('0/4 (0%)');

  await submitButton.click();

  await expect(progress).toHaveText('2/4 (50%)', { timeout: 3000 });
});

test('progress label updates only after submit even with store', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  const progress = page.getByTestId('progress-label');
  const checkboxes = page.locator('input[type="checkbox"]');
  const submit = page.getByTestId('submit-version');

  await expect(progress).toHaveText('0/4 (0%)');

  await checkboxes.nth(0).click();
  await checkboxes.nth(1).click();
  await expect(progress).toHaveText('0/4 (0%)'); 

  await submit.click();
  await expect(progress).toHaveText('2/4 (50%)');
});
