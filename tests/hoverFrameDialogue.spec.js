const{test, expect} = require("@playwright/test")

test("Handle JSS Dialogue", async({page})=>{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await page.locator('#confirmbtn').click();
    page.on('dialog',dialogue=>{
        console.log(dialogue.message());
        dialogue.dismiss();
    })    
})

test('Perform Hover',async({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await page.locator('#mousehover').hover();
    await page.locator('text=Top').click();
    console.log(await page.locator('#mousehover').textContent());
})

test('Handle Frame',async({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    const framePage = page.frameLocator('#courses-iframe');
    framePage.locator('a[href="lifetime-access"]:visible').click();

    const text = await framePage.locator('div[class=text] h2').textContent();
    console.log(text);

    await page.locator("#select-class-example #autocomplete").fill("Ind");
    
    
})