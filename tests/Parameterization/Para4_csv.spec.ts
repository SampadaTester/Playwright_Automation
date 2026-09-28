import{test,expect} from '@playwright/test';
import fs from 'fs';
import {parse} from 'csv-parse/sync';

const csvPath='testdata/data.csv';
const fileContent=fs.readFileSync(csvPath,'utf-8');
const record:any[]=parse(fileContent,{columns:true,skip_empty_lines:true});


test.describe('Login data driven test',()=>{

for(const data of record){

        test(`login for ${data.label}`,async({page})=>{


            await page.goto("https://demowebshop.tricentis.com/login");
            await page.getByRole('textbox',{name:"Email"}).fill(data.email);
            await page.getByRole('textbox',{name:"Password"}).fill(data.password);
            await page.getByRole('button',{name:'Log in'}).click();


            if(data.validity.toLowerCase()==='valid'){
                const logoutLink=page.getByRole('link',{name:"Log out"});
                //const logoutLink=page.locator('a[href="/logout"]');
                await expect(logoutLink).toBeVisible({timeout:5000});
            }
            else{
                const errorMsg=page.locator('.validation-summary-errors');
                await expect(errorMsg).toBeVisible({timeout:5000});
                await expect(page).toHaveURL("https://demowebshop.tricentis.com/login")
            }



        });
    };
})
