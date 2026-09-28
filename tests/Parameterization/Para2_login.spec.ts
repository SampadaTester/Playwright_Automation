import{test,expect} from '@playwright/test';

const logindata:any=[
    {label:"Valid Credentials",email:"ruby@gmail.com",password:"Ruby@123",validity:'valid'},
    {label:"invalid Email",email:"invalid@gmail.com",password:"Ruby@123",validity:'invalid'},
    {label:"invalid Password",email:"ruby@gmail.com",password:"testxyz",validity:'invalid'},
    {label:"Empty fields",email:" ",password:" ",validity:'invalid'},

];

 test.describe('Login data driven test',()=>{

for(const {label,email,password,validity} of logindata){

   

        test(`login for ${label}`,async({page})=>{


            await page.goto("https://demowebshop.tricentis.com/login");
            await page.getByRole('textbox',{name:"Email"}).fill(email);
            await page.getByRole('textbox',{name:"Password"}).fill(password);
            await page.getByRole('button',{name:'Log in'}).click();


            if(validity.toLowerCase()==='valid'){
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
    }
})