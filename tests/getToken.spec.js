const {expect, test, request} = require('@playwright/test');
const { log } = require('console');
const loginPayload = {
    userEmail: "subhan.qtp@gmail.com",
    userPassword: "Test@3141"
}


test('Fetch Token', async()=>{

    const apicontext = await request.newContext();
    const loginresponse = await apicontext.post("https://rahulshettyacademy.com/api/ecom/auth/login",{
        data: loginPayload
    })
    expect (( loginresponse).status()).toBe(200);
    expect ( loginresponse.ok()).toBeTruthy();

    const responseJson = await loginresponse.json();

    const tkn = responseJson.token;
    console.log(tkn);

})