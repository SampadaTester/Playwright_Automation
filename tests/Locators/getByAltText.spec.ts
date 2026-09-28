//identify image based on alt attribute
// 1. getByAltText()
import {test, expect} from "@playwright/test";

test("Verify Playwright locators1",async({page})=>{

    await page.goto("https://practicetestautomation.com/practice-test-log");

    await expect(page.getByAltText("Practice Test Automation")).toBeVisible();

});
