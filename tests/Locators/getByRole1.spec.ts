//3. getByRole ---include buttons,checkbox,headline.links,table 

import {test, expect} from "@playwright/test";

test("Verify Playwright locators3",async({page})=>{

    await page.goto("https://practicetestautomation.com/practice-test-log");

    await page.getByRole("link",{name:'Home'}).click();

    await expect(page.getByRole("link",{name:'Home'})).toBeVisible();

});