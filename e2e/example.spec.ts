// example.spec.ts
import { expect, test } from '@playwright/test';

test('has greeting', async ({ page }) => {
  await page.goto('/');

  // Expect a greeting "to contain" a substring.
  const greeting = page.getByText('hello,');
  await expect(greeting).toContainText('Hello, TimePlan!');
});
