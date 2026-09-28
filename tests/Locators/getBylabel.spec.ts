// 4. getBylabel()----its for form field

import{test,expect} from "@playwright/test";

test("Verify Playwright locators4",async({page})=>{

    await page.goto("https://practicetestautomation.com/practice-test-log");

   await page.getByLabel("Username").fill("student");

   await page.getByLabel("Password").fill("Password123");

   await page.getByRole("button",{name:"Submit"}).click();

});

