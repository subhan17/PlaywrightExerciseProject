import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click();

  
  await page.locator('[data-test="firstName"]').fill('subhan');
  console.log(await page.locator('[data-test="firstName"]').inputValue());
  await page.locator('[data-test="firstName"]').press('Tab');
  await page.locator('[data-test="lastName"]').fill('ahmed');
  await page.locator('[data-test="lastName"]').press('Tab');
  await page.locator('[data-test="postalCode"]').fill('500080');
  await page.locator('[data-test="continue"]').click();

  await page.locator('[data-test="finish"]').click();
  await expect(page.locator('[data-test="complete-header"]')).toContainText('Thank you for your order!');
  console.log(await page.locator('[data-test="complete-header"]').textContent())
  await page.locator('[data-test="back-to-products"]').click();

});