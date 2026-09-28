import{test,expect}from '@playwright/test';

test('verify Sign In',async({page})=>{

    await page.goto("https://www.passthenote.com/auth/login");

    await page.getByTestId('ptn-login-email-input').fill('ram@gmail.com');
    await page.getByTestId('ptn-login-password-input').fill('1245879');

    await page.getByTestId('ptn-login-submit-button').click();


    
    



})