import{test,expect} from '@playwright/test';
import { AccountOverview } from '../pages/AccountOverview';
import { LoginPage } from '../pages/LoginPage';

test("Verify the Account Overview",async({page})=>{
    const loginpage= new LoginPage(page);
   await loginpage.open();
   await loginpage.login("SAKETH10","Saketh@123");

   const overview=new AccountOverview(page);
   await expect(overview.overviewtext.nth(1)).toBeVisible();//case1
await expect(overview.accounttable).toBeVisible();//case2

test("Verify the account number",async({page})=>{
   const loginpage=new LoginPage(page);
   await loginpage.open();
   await loginpage.login("SAKETH10","Saketh@123");

   const overview=new AccountOverview(page);
   await expect(overview.overviewtext.nth(1)).toBeVisible();
   await overview.clickaccountnbr();
   await expect(overview.accountdetailstext).toBeVisible();
   
})
})