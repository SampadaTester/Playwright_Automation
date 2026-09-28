import{test,expect} from '@playwright/test';

test('Little portion screenshot',async({page})=>{

    await page.goto("https://playwright.dev/");
   await page.screenshot({path:'Screenshots/Omitbackground.png',omitBackground:true,fullPage:true});
   

})
// It is mainly useful when you want a screenshot with a transparent background, such as for logos, graphics,
//  or elements where transparency is des9red