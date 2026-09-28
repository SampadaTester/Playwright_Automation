//Text Input/ Text Box/ Input Box
// Radio Buttons
import { test, expect, Locator } from '@playwright/test';

test('Text Input Actions',async({page})=>{


await page.goto("https://testautomationpractice.blogspot.com/");

const textBox: Locator=page. locator('#name');

await expect(textBox).toBeVisible();  // Check visibility
await expect(textBox).toBeEnabled();  // Check visibility-can user intract with textbox or not

const maxLength: string | null = await textBox.getAttribute("maxlength"); // Returns value of maxlength attribute of the element
expect(maxLength).toBe('15'); //Verify maxlength

await textBox.fill("John Canedy");

//console.log("text content of FirstName :", await textBox.textContent()); // returns empty

const enteredValue: string=await textBox.inputValue();  //returns the current value inside an input field.
console.log("Input Value of the FirstName :", enteredValue); // returns th einput value of text box
expect(enteredValue).toBe("John Canedy");

await page.waitForTimeout(3000);

});

/* How do you verify a text box in Playwright?"

First, I locate the text box using a locator. 
Then I can verify whether it is visible and enabled using toBeVisible() and toBeEnabled(). 
I can use fill() to enter text and inputValue() to retrieve and verify the entered value. 
If I need to verify an HTML attribute such as maxlength, I can use getAttribute().
*/

//Radio Buttons

test('Radio Button Actions',async({page})=>{

//await page.goto("https://testautomationpractice.blogspot.com/");
await page.goto('https://testautomationpractice.blogspot.com/');

//const maleRadio:Locator=page.locator('#male'); // Male radio button
const  maleRadio:Locator=page.getByRole('radio', { name: 'Male' }); // Male

await expect(maleRadio).toBeVisible();
await expect(maleRadio).toBeEnabled();
expect(await maleRadio.isChecked()).toBe(false);

await maleRadio.check(); // select radio button
expect(await maleRadio.isChecked()).toBe(true);
await expect(maleRadio).toBeChecked(); // Preferable

await page.waitForTimeout(3000);
});

test.only('CheckBox.Actions',async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");

// //1. Select.specific.checkbox.(Sunday) using getByLabel and assert
// const sundayCheckbox:Locator=page.getByLabel('Sunday');
// await sundayCheckbox.check();
// await expect(sundayCheckbox).toBeChecked();



// 2. Select all checkboxes and assert each is checked
const days:string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const checkboxes:Locator[]=days.map(index => page.getByLabel(index));
expect(checkboxes.length).toBe(7);
 
// select all checkbox 
for(const checkbox of checkboxes)
{
await checkbox.check();
await expect(checkbox).toBeChecked();
}


// select last 3 checkbox 
for(const checkbox of checkboxes.slice(-3))
{
await checkbox.check();
await expect(checkbox).toBeChecked();
}

// suppose from all selected checkbox we want to uncheck some checkbox 

for(const checkbox of checkboxes.slice(-3))
{
await checkbox.uncheck();
await expect(checkbox).not.toBeChecked();
}
 


//Toggle checkboxes: It checked, uncheck; it unchecked, check. Assert state tlipped.

for(const checkbox of checkboxes)

if(await checkbox.isChecked()){ // true

//-onlyne if checked
await checkbox.uncheck();
await expect(checkbox).not.toBeChecked();
}
else{

// onlyne if not checked
await checkbox.check();
await expect(checkbox).toBeChecked();
}

// 7. Randomely select check boxes - Select checkboxes by index (1, 3, 6) and assert

const indexes:number[]=[1,3,6];

for(const i of indexes){

await checkboxes[i].check();
await expect(checkboxes[i]).toBeChecked();

}

//7. Select the check box based on the Label
const weekname:string="Friday";

for(const label of days)
{

if(label.toLowerCase() === weekname.toLowerCase()){

const checkbox=page.getByLabel(label);
checkbox.check();
await expect(checkbox).toBeChecked();

}
}

await page.waitForTimeout(3000);
});

