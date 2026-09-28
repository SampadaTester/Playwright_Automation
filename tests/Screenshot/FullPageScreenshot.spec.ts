import{test,expect} from '@playwright/test';

test('Full page screenshot',async({page})=>{

    await page.goto("https://www.flipkart.com/");
    await page.screenshot({path:'Screenshots/FullPage.png',fullPage:true});


})