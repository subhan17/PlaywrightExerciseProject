const {test, expect} = require('@playwright/test')

test('Launch Browser', async function({browser}){
    const context = await browser.newContext(); //we can add any cookies or permissions in this.
    const page = await context.newPage(); // opens a new tab
    await page.goto('https://vins-udemy.s3.amazonaws.com/java/html/drop-down.html#')
    console.log(await page.title())
    expect(await page.title()).toBe("Codeply simple HTML/CSS/JS preview")
});

test('@smoke Launch Browser1', async ({browser, page})=>{
    await page.goto('https://playwright.dev/docs/intro')
    console.log(await page.title())
    expect(await page.title()).toBe("Playwright");    
});

test('Invalid Login Validate', async ({page})=>{
    await page.goto('https://www.saucedemo.com/?utm_source=chatgpt.com')
    await page.locator('#user-name').fill('abcd')
    await page.locator('#password').fill('abcd')
    await page.locator('#login-button').click()
    console.log(await page.locator('[data-test="error"]').textContent())
    expect(await page.locator('[data-test="error"]').textContent()).toBe("Epic sadface: Username and password do not match any user in this service")
    // expect(await page.locator('[data-test="error"]').textContent()).toBe("Epic sadface: Username and password do not match any user in this service")
    expect(await page.locator('[data-test="error"]')).toContainText("Epic sadface: Username and password do not match any user in this service")
    expect(await page.locator('[data-test="error"]')).toBeVisible()
});


test('@smoke Print first & Second item displaying in the products page', async ({page})=>{
    await page.goto('https://www.saucedemo.com/?utm_source=chatgpt.com')
    await page.locator('#user-name').fill('standard_user')
    await page.locator('#password').fill('secret_sauce')
    await page.locator('#login-button').click()
    console.log(await page.locator('.inventory_item_name ').first().textContent())
    console.log(await page.locator('.inventory_item_name ').nth(1).textContent())
    console.log(await page.locator('.inventory_item_name ').last().textContent())

})

test('Get titles of all tiles', async ({page})=>{
    await page.goto('https://www.saucedemo.com/?utm_source=chatgpt.com')
    await page.locator('#user-name').fill('standard_user')
    await page.locator('#password').fill('secret_sauce')
    await page.locator('#login-button').click()
    const allTileNames = await page.locator('.inventory_item_name ').allTextContents()
    console.log(allTileNames)
})