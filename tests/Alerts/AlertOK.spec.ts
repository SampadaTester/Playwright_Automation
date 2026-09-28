import{test,expect} from '@playwright/test';

test('Alert OK',async({page})=>{

    await page.goto('https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/');

    page.on('dialog',async dialog=>{

        console.log(dialog.message());
        await dialog.accept();
    });

    await page.locator("//button[@class='btn btn-dark my-30 mx-10 hover:bg-lambda-900 hover:border-lambda-900']").click();
  

})