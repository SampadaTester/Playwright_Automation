import{test,expect,Locator} from "@playwright/test";

test('Auto suggestion dropdown',async({page})=>{

    await page.goto('https://www.amazon.in/');
   
    await page.getByRole('searchbox',{name:"Search Amazon.in"}).fill('iphone');

    await page.waitForTimeout(5000);

    const options:Locator=page.locator('#sac-autocomplete-results-container [role="row"]');
    await options.first().waitFor();

    const count=await options.count();
    console.log("Total number of options available : ",count);

    for(let i=0;i<count;i++){
        console.log(await options.nth(i).textContent());
    }

    




    




});