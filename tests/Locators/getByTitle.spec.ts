//getByTitle -getByTitle() works only if title attribute exists It is not for page title ❌
// <button title="Submit form">Submit</button>
// await expect(page.getByTitle("Submit form")).toHaveText("Submit");

import {test, expect} from "@playwright/test";

test("Verify Playwright locators5",async({page})=>{

    await page.goto("https://www.kapruka.com/");


 await expect(page.getByTitle("")).toHaveText("");


});