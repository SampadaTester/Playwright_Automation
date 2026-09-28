import{test,expect} from '@playwright/test';
import fs from 'fs';
import * as XLSX from 'xlsx';
 // reading file 
 const excelPath='testdata/data.xlsx';
 const workbook=XLSX.readFile(excelPath);
 const sheetName=workbook.SheetNames[0];
 const workSheet=workbook.Sheets[sheetName];

  // convert sheet into json 
const loginData:any=XLSX.utils.sheet_to_json(workSheet);



test.describe('Login data driven test',()=>{

for(const data of loginData){

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
