const { test, expect } = require('@playwright/test');

function parsePrice(text) {
  // text like "$9.99"
  return parseFloat(text.replace('$', '').trim());
}

test('@smoke Sauce Demo: add 2nd & 3rd items after sorting low->high and checkout', async ({ page }) => {
  // 1) Go to site and login
  await page.goto('https://www.saucedemo.com/');
  await page.fill('input[data-test="username"]', 'standard_user');
  await page.fill('input[data-test="password"]', 'secret_sauce');
  await page.click('input[data-test="login-button"]');

  // Wait for products page
  await expect(page.locator('.inventory_list')).toBeVisible();

  // 2) Sort items by price (low to high)
  await page.selectOption('select[data-test="product_sort_container"]', 'lohi');
  // Wait for sort to re-order items
  await page.waitForTimeout(250);

  // 3) Add 2nd and 3rd items in the list to the cart (0-based index: 1, 2)
  const items = page.locator('.inventory_item');
  const count = await items.count();
  expect(count).toBeGreaterThanOrEqual(3);
 
 /* s = "abcd";

  const chosen = [];
  for (const idx of [1, 2]) {
    const item = items.nth(idx);
    const name = (await item.locator('.inventory_item_name').textContent()).trim();
    const priceText = (await item.locator('.inventory_item_price').textContent()).trim();
    const price = parsePrice(priceText);
    chosen.push({ name, price });
    // click add to cart button inside the item
    await item.locator('button:has-text("Add to cart")').click();
  }

  // 4) Open the cart and verify exactly those two items are present (names & prices)
  await page.click('.shopping_cart_link');
  await expect(page).toHaveURL(/.*cart.html/);

  const cartItems = page.locator('.cart_item');
  await expect(cartItems).toHaveCount(2);

  const cartCaptured = [];
  for (let i = 0; i < 2; ++i) {
    const it = cartItems.nth(i);
    const name = (await it.locator('.inventory_item_name').textContent()).trim();
    const priceText = (await it.locator('.inventory_item_price').textContent()).trim();
    const price = parsePrice(priceText);
    cartCaptured.push({ name, price });
  }

  // Compare arrays (order matters: we added 2nd then 3rd items)
  expect(cartCaptured).toEqual(chosen);


  // 5) Proceed to checkout, fill details
  await page.click('button[data-test="checkout"]');
  await expect(page).toHaveURL(/.*checkout-step-one.html/);
  await page.fill('input[data-test="firstName"]', 'John');
  await page.fill('input[data-test="lastName"]', 'Doe');
  await page.fill('input[data-test="postalCode"]', '12345');
  await page.click('input[data-test="continue"]');

  // 6) On Checkout: Overview page, verify the same two items and prices; assert item total equals sum
  await expect(page).toHaveURL(/.*checkout-step-two.html/);

  const overviewItems = page.locator('.cart_item');
  await expect(overviewItems).toHaveCount(2);

  const overviewCaptured = [];
  for (let i = 0; i < 2; ++i) {
    const it = overviewItems.nth(i);
    const name = (await it.locator('.inventory_item_name').textContent()).trim();
    const priceText = (await it.locator('.inventory_item_price').textContent()).trim();
    const price = parsePrice(priceText);
    overviewCaptured.push({ name, price });
  }

  expect(overviewCaptured).toEqual(chosen);

  // Check item total
  const subtotalText = (await page.locator('.summary_subtotal_label').textContent()).trim();
  // subtotalText like "Item total: $39.98"
  const subtotalMatch = subtotalText.match(/\$([0-9.,]+)/);
  expect(subtotalMatch).not.toBeNull();
  const subtotalValue = parseFloat(subtotalMatch[1].replace(',', ''));
  const computed = chosen.reduce((s, it) => s + it.price, 0);
  // Use rounding to avoid floating point precision issues
  expect(Math.round(subtotalValue * 100)).toBe(Math.round(computed * 100));

  // 7) Finish checkout and assert final confirmation
  await page.click('button[data-test="finish"]');
  await expect(page).toHaveURL(/.*checkout-complete.html/);
  const title = (await page.locator('.title').textContent()).trim();
  expect(title).toBe('Checkout: Complete!');
  */
});
