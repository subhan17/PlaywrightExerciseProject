const {test, expect} = require('@playwright/test');

test("check hidden elements", async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await page.locator('#hide-textbox').click();
    await expect(page.locator("input[name='show-hide']")).toBeHidden();
    await expect(page.locator("input[name='show-hide']")).not.toHaveCount(1);
    await page.locator('#show-textbox').click();
    await expect(page.locator("input[name='show-hide']")).toBeVisible();
    await expect(page.locator("input[name='show-hide']")).toHaveCount(1);toHaveCount(1);
});