import{test,expect} from '@playwright/test';

const searchItems:string[]=['laptop','gift card','smartphone','monitor'];

// for-of loop

// for(const item of searchItems){


//     test(`search test for ${item}`,async({page})=>{

//         await page.goto('https://demowebshop.tricentis.com/');
//         await page.locator('#small-searchterms').fill(item);
//         await page.getByRole('button',{name:"Search"}).click();
//         await expect.soft(page.locator('h2 a').nth(0)).toContainText(item,{ignoreCase:true});


//     });
// }
// here 3 test passed = 'laptop','gift card','smartphone'
// 1 test failed = monitor -- bcz monitor is not present in search box 

// by using for each function 

searchItems.forEach((item)=>{

    test(`search test for ${item}`,async({page})=>{

         await page.goto('https://demowebshop.tricentis.com/');
         await page.locator('#small-searchterms').fill(item);
         await page.getByRole('button',{name:"Search"}).click();
         await expect.soft(page.locator('h2 a').nth(0)).toContainText(item,{ignoreCase:true});


     });
    
});