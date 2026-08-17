import { test, expect } from "@playwright/test";
import { LoginPage } from "../Pages/LoginPage";
import { Products } from "../Pages/Products";
import { CartPage } from "../Pages/CartPage";
import { CheckoutInformation } from "../Pages/CheckoutInformation";
import { CheckoutOverview } from "../Pages/CheckoutOverview";
import { CheckoutComplete } from "../Pages/CheckoutComplete";

test("Verify login with the valid Username and Password", async ({ page }) => {
  const urllogin = new LoginPage(page);
  await urllogin.open();
  await urllogin.login("standard_user", "secret_sauce");

  const producttext = new Products(page);

  await expect(producttext.validateproducts).toBeVisible();
  await producttext.Addcart("Sauce Labs Backpack")
  await producttext.carticon();

  const cartpage = new CartPage(page);
  await expect(cartpage.yourcarttext).toBeVisible();
  await cartpage.checkbutton();

  const checkinfo = new CheckoutInformation(page);
  await expect(checkinfo.checkoutinfo).toBeVisible();
  await checkinfo.enterfirstname("Saketh");
  await checkinfo.enterlastname("Ananthula");
  await checkinfo.enterportal("500039");
  await checkinfo.clickoncontinue();

  
  const overviewpage = new CheckoutOverview(page);
  await expect(overviewpage.overviewtext).toBeVisible();
  await expect(overviewpage.validateproduct).toHaveText("Sauce Labs Backpack");
  await expect(overviewpage.validateprice).toHaveText("$29.99");
  await overviewpage.finish();

  const complete = new CheckoutComplete(page);
  await expect(complete.completetext).toBeVisible();
  await expect(complete.Thankyoutext).toBeVisible();
  await complete.homebutton();
});

test("verify the invalid username and password ", async ({ page }) => {
  const urllogin = new LoginPage(page);
  await urllogin.open();
  await urllogin.login("Saketh", "Saketh");
});

test ("Verify the empty cart",async({page})=>{
    const urllogin=new LoginPage(page);
    urllogin.open();
    urllogin.login("standard_user","secret_sauce");
    const producttext = new Products(page);

  await expect(producttext.validateproducts).toBeVisible();
  await producttext.Addcart("Sauce Labs Bike Light");
  await producttext.carticon();

  const cartpage = new CartPage(page);
  await expect(cartpage.yourcarttext).toBeVisible();
  await cartpage.remove();

})

test("Verify the multiple products",async({page})=>{
    const urllogin = new LoginPage(page);
  await urllogin.open();
  await urllogin.login("standard_user", "secret_sauce");

  const producttext = new Products(page);

  await expect(producttext.validateproducts).toBeVisible();
  await producttext.Addcart("Sauce Labs Backpack")
  await producttext.Addcart("Sauce Labs Bike Light");
await producttext.carticon();

 const cartpage = new CartPage(page);
  await expect(cartpage.yourcarttext).toBeVisible();
  await cartpage.checkbutton();     
  
  const checkinfo = new CheckoutInformation(page);
  await expect(checkinfo.checkoutinfo).toBeVisible();
  await checkinfo.enterfirstname("Nithish");
  await checkinfo.enterlastname("Surrabi");
  await checkinfo.enterportal("505301");
  await checkinfo.clickoncontinue();

})


