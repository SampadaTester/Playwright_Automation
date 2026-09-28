import{test,expect,Locator} from '@playwright/test'

test('check textbox',async({page})=>{
 await page.goto('https://testing.qaautomationlabs.com/index.php');

 await page.locator('//a[@title="Checkbox"]//div[@class="card-body text-center"]').click();



 const femalebutton=page.getByLabel(' Check me!');
 await femalebutton.check();

 const isChecked=await page.locator('#message').innerText();

 console.log("isChecked: "+isChecked);
});

test.only('check radio button',async({page})=>{
 await page.goto('https://testing.qaautomationlabs.com/index.php');
 await page.getByRole('heading',{name:"Radio Button"}).click();

 await page.locator('//input[@data-testid="radio-gender-female"]').check();

 await page.getByRole('button',{name:'Show Selected Gender'}).click();
 const femaleButton=await page.locator('//p[text()="You selected: Female"]')
  await expect(femaleButton).toBeVisible();



 await page.pause();
});


