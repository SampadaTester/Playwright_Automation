// 2. getByText(): eg <p> hl div span 
import {test, expect} from "@playwright/test";

test("Verify Playwright locators2",async({page})=>{

    await page.goto("https://practicetestautomation.com/practice-test-log");

    await expect(page.getByText("Test login")).toBeVisible();

});