import{test,expect} from '@playwright/test';

test('Alert OK',async({page})=>{

    await page.goto('https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/');

    page.on('dialog',async dialog=>{

        console.log( dialog.message());
        await dialog.dismiss();
    });

    await page.locator("//p[@class='text-gray-900 text-size-16 mt-10 text-black font-bold']//button[@type='button'][normalize-space()='Click Me']").click();
  

})