import{test,expect} from '@playwright/test';
import { RegisterPage} from '../pages/Register';
import { LoginPage } from '../pages/LoginPage';

test("Verify the Registartion with valid details",async({page})=>{
const loginpage=new LoginPage(page);
await loginpage.open();

const registerpage=new RegisterPage(page);
await registerpage.Registration("SAKETH","A","KPHB","HYD","TELANGANA",
"500098","9090909090","12234","SAKETH11","Saketh@123","Saketh@123");

await expect(registerpage.getwelcomemessage("SAKETH11")).toBeVisible();
})

test.only("Verify Registration with out firstname",async({page})=>{
    const loginpage=new LoginPage(page);
    await loginpage.open();

    const registerpage=new RegisterPage(page);
   await registerpage.Registration("","A","KPHB","HYD","TELANGANA",
"500098","9090909090","12234","SAKETH12","Saketh@123","Saketh@123");

await expect(registerpage.firstnameerror).toBeVisible();
})