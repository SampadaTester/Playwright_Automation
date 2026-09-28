import{test,expect} from '@playwright/test';

test('Little portion screenshot',async({page})=>{

    await page.goto("https://www.flipkart.com/");
    await page.screenshot({path:'Screenshots/portion.png',
        type:'png',
        clip:{x:0,y:0,width:800,height:800},
    });


})

