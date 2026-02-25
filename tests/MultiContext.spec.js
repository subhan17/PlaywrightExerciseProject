import {test, expect, chromium} from '@playwright/test';

test('check multi context in single test', async()=>{

    const browser = await chromium.launch()

    //create context for standard user
    const standardUserContext = await browser.newContext();
    const standardUserPage = await standardUserContext.newPage();

   //create context for performance user
    const performanceUserContext = await browser.newContext();
    const performanceUserPage = await performanceUserContext.newPage();

    //Standard user
   await standardUserPage.goto('https://www.saucedemo.com/');
   await standardUserPage.fill('input[data-test="username"]', 'standard_user');
   await standardUserPage.fill('input[data-test="password"]', 'secret_sauce');
   await standardUserPage.click('input[data-test="login-button"]');
   await standardUserPage.click('text="Sauce Labs Backpack"');
   await standardUserPage.waitForTimeout(3000);


    //performance user
   await performanceUserPage.goto('https://www.saucedemo.com/');
   await performanceUserPage.fill('input[data-test="username"]', 'standard_user');
   await performanceUserPage.fill('input[data-test="password"]', 'secret_sauce');
   await performanceUserPage.click('input[data-test="login-button"]');
   await performanceUserPage.click('text="Sauce Labs Onesie"');
   await performanceUserPage.waitForTimeout(3000);


   //cleaning
   await standardUserContext.close();
   await performanceUserContext.close();
   await browser.close();

});