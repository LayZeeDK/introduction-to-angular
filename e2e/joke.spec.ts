import { expect, Locator, test } from '@playwright/test';

test('has jokes', async ({ page }) => {
  await page.goto('/joke');

  const joke: Locator = page.getByTestId('joke');
  await expect(await joke.innerText()).not.toHaveLength(0);
});

test.skip('sends an HTTP request', async ({ page, request }) => {
  const whenJokeResponse = page.route(
    'https://v2.jokeapi.dev/joke/Programming?safe-mode&type=single',
    async (route) => {
      const response = await route.fetch();

      // Assert that the request was sent and received an OK response
      expect(response.ok()).toBeTruthy();
    },
  );
  // Navigate to a specific URL and wait for the HTTP request+response
  await page.goto('/joke');
});
