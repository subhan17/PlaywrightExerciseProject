const{test, expect, request} = require('@playwright/test');

test('Get book with id', async()=>{

    const apicontext = await request.newContext();
    const bookResponse = await apicontext.get('https://rahulshettyacademy.com/Library/GetBook.php',{
                                            params:{
                                                ID:'2343'
                                            }
                                        });
    expect(bookResponse.ok()).toBeTruthy();;
    console.log(bookResponse.status());

    const responseJson = await bookResponse.json();
    console.log(responseJson);
    console.log(responseJson[0].book_name);
    expect(responseJson[0].book_name).toBe("Learn Appium Automation with Life");
    expect(responseJson[0].author).toBe("John foe")
    console.log(responseJson[0].author);



})