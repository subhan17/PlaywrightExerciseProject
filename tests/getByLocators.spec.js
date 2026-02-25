const {test, expect} = require('@playwright/test');

test("Check getByLocators method", async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.getByLabel("Check me out if you Love IceCreams!").check();
    await page.getByLabel("Gender").selectOption("Female");
    await page.getByLabel("Employed").click();
    await page.getByRole('link',{name: 'Shop'}).click();

    await page.locator('.card.h-100').filter({hasText: 'Nokia Edge'}).getByRole('button','Add').click();
    await page.pause();

})

test("Select first Link", async ({page})=>{

    await page.goto("https://www.google.com");
    await page.locator('[name="q"]').fill('Playwright');
    //await page.getByRole('textbox', { name: 'Search' }).press('Enter');
    await page.getByRole('button', { name: 'Google Search' }).click();
    await page.getByRole('link', {name: 'Playwright Automation'}).first().click();

})