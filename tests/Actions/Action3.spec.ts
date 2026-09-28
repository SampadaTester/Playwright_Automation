import{test,expect,Locator} from '@playwright/test';

test('Select single dropdown' , async({page})=>{

    await page.goto('https://testing.qaautomationlabs.com/index.php');

 await page.getByRole('heading',{name:"Dropdown"}).click();

 //await page.getByRole('combobox',{name:"Select a fruit"}).selectOption('Mango');

 // await page.getByRole('combobox',{name:"Select a fruit"}).selectOption({value:"Apple"});

 // await page.getByRole('combobox',{name:"Select a fruit"}).selectOption({index:1});

  await page.getByRole('combobox',{name:"Select a fruit"}).selectOption({label:"Orange"});

 

 //check number of options and list down 

 const dropdownList:Locator=page.locator('#fruitDropdown option');
 const count=await dropdownList.count();
 console.log("Total count ===> ",count);

 const dropdownPrint=await dropdownList.allTextContents();
 for(const option of dropdownPrint){
    console.log(option)

 }
await page.pause();
});