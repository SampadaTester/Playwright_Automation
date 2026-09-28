import{test,expect} from '@playwright/test';

test.describe('Frame handling',()=>{

    test('handle single iFrame',async({page})=>{

        await page.goto('https://demoqa.com/frames');

        const frame1=page.frameLocator('#frame1');
        const headingText=await frame1.locator('#sampleHeading');
        expect.soft(await headingText.textContent()).toBe('This is a sample page');
        console.log(await headingText.textContent());

    })



});