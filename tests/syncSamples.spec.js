const {test, expect} = require('@playwright/test')


test('waitFor method sample', async({page})=>{
await page.goto('https://www.saucedemo.com/inventory.html')
await page.locator('#user-name').fill('standard_user')
await page.locator('#password').fill('secret_sauce')
await page.locator('#login-button').click()
await page.locator('.inventory_item_name ').last().waitFor() // wait for the last item to be visible on the page
const items = await page.locator('.inventory_item_name ').allTextContents()
console.log(items)
    
})