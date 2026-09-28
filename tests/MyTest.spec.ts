import{test , expect}from "@playwright/test";

// test1
test("Verify page title",async({page})=>{
    await page.goto("https://www.kapruka.com/");

    let title:string=await page.title();
    console.log(`title : ${title}`);

    await expect(page).toHaveTitle("Kapruka.com | Sri Lanka Online Shopping Site | Send Gifts to Sri Lanka");


})