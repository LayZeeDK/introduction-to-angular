import { expect, test } from '@playwright/test';

test('A user flow', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByText('Hello, TimePlan!')).toBeVisible();

  await page.getByRole('button', { name: 'send message' }).click();

  await page.getByRole('link', { name: 'joke' }).click();

  await expect(page.getByRole('heading', { name: 'joke' })).toBeVisible();

  await page.getByRole('link', { name: 'messages' }).click();

  await expect(page.getByText('Message #')).toContainText('Hi there');
});
