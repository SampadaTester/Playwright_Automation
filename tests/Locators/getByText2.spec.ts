import{test,expect}from '@playwright/test';

test('verify login',async({page})=>{

    await page.goto("https://practicetestautomation.com/practice-test-login/")

    await page.getByText('Test case 3: Negative password test').isVisible();
    



})