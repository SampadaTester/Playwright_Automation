import{test,expect} from '@playwright/test';

test.describe('Frame handling',()=>{

    // test.beforeEach(async({page})=>{

    //     await page.goto('https://demo.automationtesting.in/Frames.html');
    // })
    test('Single frame handling ',async({page})=>{

        await page.goto('https://demo.automationtesting.in/Frames.html');
        const frame1=page.frameLocator('#singleframe');
        const inputBox=frame1.locator('input[type="text"]');
        await inputBox.fill('Hello Sampada');
        expect (await inputBox.inputValue()).toBe('Hello Sampada');
        console.log(await inputBox.inputValue());


    });

    test('Nested frame handling ',async({page})=>{
        
        await page.goto('https://demo.automationtesting.in/Frames.html');
        await page.locator('a[href="#Multiple"]').click();

        const outerFrame=page.frameLocator('[src*="MultipleFrames.html"]');
        
        const innerFrame=outerFrame.frameLocator('[src*="SingleFrame.html"]').getByRole('textbox');
        
        await innerFrame.fill('Hello Sampada');

      
    });
});