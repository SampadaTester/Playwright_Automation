import {test,expect} from '@playwright/test';

test('Basic screenshot',async({page})=>{

    await page.goto("https://www.saucedemo.com/");

    await page.screenshot({path:'Screenshots/basic1.png'});
})