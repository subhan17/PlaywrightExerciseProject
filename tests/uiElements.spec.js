const {test, expect} = require('@playwright/test')

test('dropdown test', async ({page})=>{
    await page.goto('https://the-internet.herokuapp.com/')
    await page.locator('a[href="/dropdown"]').click()
    const dropdown = page.locator("#dropdown")
    await dropdown.selectOption("2")
    await page.pause()
    await dropdown.selectOption("1")
    await page.pause()
    await dropdown.selectText("Option 2")
    await page.pause()

})

test('Radio button', async ({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    const radio = page.locator('input[value="radio1"]')
    await radio.click()
    console.log(await radio.isChecked())
    await expect(radio).toBeChecked()
    await page.pause()
    await radio.click()
    await page.pause()
    console.log(await radio.isChecked())
    await expect(radio).not.toBeChecked()
})

test('Check Box', async ({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    const checkBox = page.locator('#checkBoxOption1')
    await checkBox.click()
    console.log(await checkBox.isChecked())
    await expect(checkBox).toBeChecked()
    await page.pause()
    await checkBox.uncheck()
    await page.pause()
    console.log(await checkBox.isChecked())
    await expect(checkBox).not.toBeChecked()
})

test('To have Attribute', async ({page})=>{

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
    const blinkingLink = page.locator('a[href*=documents-request]')
    await expect(blinkingLink).toHaveAttribute("class","blinkingText")
})


test('Child Window Handling', async ({browser})=>{

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
    
    const [docReqPage] = await Promise.all([
        context.waitForEvent('page'),
        page.locator('a[href*=documents-request]').click()

    ])

    const text = await docReqPage.locator('.im-para.red').textContent()
    console.log(text)

    await page.locator('#username').fill("Subhan Ahmed")


})

test('Value Input Method', async ({page})=>{

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
    await page.locator('#username').fill("Subhan Ahmed")
    const text = await page.locator('#username').inputValue()
    console.log(text)


})