import{test,expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test("Verify the login with valid credentials",async({page})=>{
   const loginpage = new LoginPage(page);
   await loginpage.open();
   await loginpage.login("SAKETH7","Saketh@123");
})

test.skip("Verify login with invalid Username",async({page})=>{
    const loginpage=new LoginPage(page);
    await loginpage.open();
    await loginpage.login("INVALIDUSER1","Saketh@123")
    await expect(loginpage.invalidtext).toBeVisible();
})

test.skip("Verify the login with invalid password",async({page})=>{
    const loginpage=new LoginPage(page);
   await  loginpage.open();
    await loginpage.login("SAKETH6","INVALIDPASSs");
    // await expect(loginpage.invalidtext).toHaveText("The username and password could not be verified.");
    await expect(loginpage.invalidtext).toBeVisible();
})

test("Verify the login with empty username",async({page})=>{
    const loginpage=new LoginPage(page);
    await loginpage.open();
    await loginpage.login('','Saketh@123');
    await expect(loginpage.emptytext).toBeVisible();

})

test ("verify the login with empty password",async({page})=>{
   const loginpage= new LoginPage(page);
   await loginpage.open();
   await loginpage.login("SAKETH","");
   await expect(loginpage.emptytext).toBeVisible();
})

test("Verify the logout after login",async({page})=>{
    const loginpage=new LoginPage(page);
    await loginpage.open();
    await loginpage.login("SAKETH7","Saketh@123");
    await loginpage.logout();
    
})

test.only("Verify the Forgot feature",async({page})=>{
    const loginpage=new LoginPage(page);
    await loginpage.forgotlink.click();
    await loginpage.forgot("SAKETH10","A","KPHB","HYD","TELANGANA","500098","12234");

    await expect(loginpage.afterforgottext).toBeVisible();


})