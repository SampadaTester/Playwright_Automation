// spec: specs/plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Practice Test Login', () => {
  test('Happy path login with valid credentials', async ({ page }) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/');

    await page.locator('#username').fill('student');
    await page.locator('#password').fill('Password123');
    await page.getByRole('button', { name: 'Submit' }).click();

    await expect(page).toHaveURL(/logged-in-successfully/);
    await expect(page.locator('body')).toContainText(/Congratulations|successfully logged in/i);
    await expect(page.getByRole('button', { name: /log out/i })).toBeVisible();
  });

  test('Negative login with invalid username', async ({ page }) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/');

    await page.locator('#username').fill('incorrectUser');
    await page.locator('#password').fill('Password123');
    await page.getByRole('button', { name: 'Submit' }).click();

    await expect(page.locator('#error')).toBeVisible();
    await expect(page.locator('#error')).toContainText('Your username is invalid!');
  });

  test('Negative login with invalid password', async ({ page }) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/');

    await page.locator('#username').fill('student');
    await page.locator('#password').fill('incorrectPassword');
    await page.getByRole('button', { name: 'Submit' }).click();

    await expect(page.locator('#error')).toBeVisible();
    await expect(page.locator('#error')).toContainText('Your password is invalid!');
  });
});
