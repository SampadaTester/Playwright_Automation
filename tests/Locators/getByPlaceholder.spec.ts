//getByPlaceholder

import {test, expect} from "@playwright/test";

test("Verify Playwright locators5",async({page})=>{

    await page.goto("https://www.kapruka.com/");

    await page.getByPlaceholder("SEARCH PRODUCTS..").fill("Iphone");


});