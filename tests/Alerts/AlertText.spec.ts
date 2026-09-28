import{test,expect} from '@playwright/test';

test('Alert OK',async({page})=>{

    await page.goto('https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/');

    page.on('dialog',async dialog=>{

        console.log( dialog.message());
        await dialog.accept('Sampada');
    });

    await page.locator("//body/div[@id='__next']/div[@class='__className_538739']/main/section[@class='mt-50']/div[@class='container']/div[@class='flex smtablet:block']/div[@class='w-full']/div[1]/p[1]/button[1]").click();
  

})