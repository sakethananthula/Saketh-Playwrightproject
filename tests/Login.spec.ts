import { test, expect } from "@playwright/test";
import { LoginPage } from "../Pages/LoginPage";
import { Products } from "../Pages/Products";
import { CartPage } from "../Pages/CartPage";
import { CheckoutInformation } from "../Pages/CheckoutInformation";
import { CheckoutOverview } from "../Pages/CheckoutOverview";
import { CheckoutComplete } from "../Pages/CheckoutComplete";
import{Menu} from "../Pages/Menu"

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


test("Verify the empty cart",async({page})=>{
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

test("click on the Z to A dropdown and purchase",async({page})=>{
    const urllogin = new LoginPage(page);
  await urllogin.open();
  await urllogin.login("standard_user", "secret_sauce");

  const producttext = new Products(page);
 await expect(producttext.validateproducts).toBeVisible();
 await producttext.drop("za");
 await producttext.Addcart("Test.allTheThings() T-Shirt (Red)")
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
  await expect(overviewpage.validateproduct).toHaveText("Test.allTheThings() T-Shirt (Red)");
  await expect(overviewpage.validateprice).toHaveText("$15.99");
  await overviewpage.finish();

  const complete = new CheckoutComplete(page);
  await expect(complete.completetext).toBeVisible();
  await expect(complete.Thankyoutext).toBeVisible();
  await complete.homebutton();

})

test("click on the Price Low to high dropdown and purchase",async({page})=>{
    const urllogin = new LoginPage(page);
  await urllogin.open();
  await urllogin.login("standard_user", "secret_sauce");

  const producttext = new Products(page);
 await expect(producttext.validateproducts).toBeVisible();
 await producttext.drop("lohi");
 await producttext.Addcart("Sauce Labs Bolt T-Shirt")
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
  await expect(overviewpage.validateproduct).toHaveText("Sauce Labs Bolt T-Shirt");
  await expect(overviewpage.validateprice).toHaveText("$15.99");
  await overviewpage.finish();

  const complete = new CheckoutComplete(page);
  await expect(complete.completetext).toBeVisible();
  await expect(complete.Thankyoutext).toBeVisible();
  await complete.homebutton();

})

test("click on the high to Low dropdown and purchase",async({page})=>{
    const urllogin = new LoginPage(page);
  await urllogin.open();
  await urllogin.login("standard_user", "secret_sauce");

  const producttext = new Products(page);
 await expect(producttext.validateproducts).toBeVisible();
 await producttext.drop("hilo");
 await producttext.Addcart("Sauce Labs Fleece Jacket")
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
  await expect(overviewpage.validateproduct).toHaveText("Sauce Labs Fleece Jacket");
  await expect(overviewpage.validateprice).toHaveText("$49.99");
  await overviewpage.finish();

  const complete = new CheckoutComplete(page);
  await expect(complete.completetext).toBeVisible();
  await expect(complete.Thankyoutext).toBeVisible();
  await complete.homebutton();

})

test("Verify the Logout",async({page})=>{
  const urllogin = new LoginPage(page);
  await urllogin.open();
  await urllogin.login("standard_user", "secret_sauce");
  const producttext = new Products(page);
 await expect(producttext.validateproducts).toBeVisible();

 const logoutlines =new Menu(page);
 await logoutlines.menulines();
 await logoutlines.logout();


})

test("click on the Price Low to high dropdown and validate the prices ",async({page})=>{
    const urllogin = new LoginPage(page);
  await urllogin.open();
  await urllogin.login("standard_user", "secret_sauce");

  const producttext = new Products(page);
 await expect(producttext.validateproducts).toBeVisible();
 await producttext.drop("lohi");
//  await expect(producttext.productprices).toBeVisible();

 const prices =await producttext.productprices.allTextContents();
const numericprice =prices.map(prices => Number (prices.replace("$","")));
const sortedPrices = [...numericprice].sort((a, b) => a - b);

expect(numericprice).toEqual(sortedPrices);


})
test("click on the Price high to Low dropdown and validate the prices",async({page})=>{
    const urllogin=new LoginPage(page);
    await urllogin.open();
  await urllogin.login("standard_user", "secret_sauce");
    
    const producttext = new Products(page);
 await expect(producttext.validateproducts).toBeVisible();
 await producttext.drop("hilo");
//  await expect(producttext.productprices).toBeVisible();

 const prices =await producttext.productprices.allTextContents();
const numericprice =prices.map(prices => Number (prices.replace("$","")));
const sortedPrices = [...numericprice].sort((a, b) => b-a);

expect(numericprice).toEqual(sortedPrices);

})

test("Add all products to cart", async ({ page }) => {
  const urllogin = new LoginPage(page);
  await urllogin.open();
  await urllogin.login("standard_user", "secret_sauce");

  const producttext = new Products(page);

   await expect(producttext.validateproducts).toBeVisible();

    await producttext.addallproducts();


})

test("Verify cart count after selecting multiple products",async({page})=>{
  const urllogin = new LoginPage(page);
  await urllogin.open();
  await urllogin.login("standard_user", "secret_sauce");

  const producttext = new Products(page);

  await expect(producttext.validateproducts).toBeVisible();
  await producttext.Addcart("Sauce Labs Backpack");
  await producttext.Addcart("Sauce Labs Bolt T-Shirt");
  await producttext.Addcart("Sauce Labs Onesie");

  await expect(producttext.cartbutton).toHaveText("3");

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
  await expect(overviewpage.validateproduct.nth(0)).toHaveText("Sauce Labs Backpack");
  await expect (overviewpage.validateproduct.nth(1)).toHaveText("Sauce Labs Bolt T-Shirt");
    await expect (overviewpage.validateproduct.nth(2)).toHaveText("Sauce Labs Onesie");


  // await expect(overviewpage.validateprice).toHaveText("$29.99");
  await overviewpage.finish();

})

test("Verify empty first name",async({page})=>{
  const urllogin = new LoginPage(page);
  await urllogin.open();
  await urllogin.login("standard_user", "secret_sauce");

  const producttext = new Products(page);

  await expect(producttext.validateproducts).toBeVisible();
  await producttext.Addcart("Sauce Labs Backpack");
  

 
  await producttext.carticon();

  const cartpage = new CartPage(page);
  await expect(cartpage.yourcarttext).toBeVisible();
  await cartpage.checkbutton();

  const checkinfo = new CheckoutInformation(page);
  await expect(checkinfo.checkoutinfo).toBeVisible();
  
  await checkinfo.enterlastname("Ananthula");
  await checkinfo.enterportal("500039");
  await checkinfo.clickoncontinue();
  await expect(checkinfo.error).toHaveText("Error: First Name is required");

})

test.only("Verify empty lastname",async({page})=>{
  const urllogin = new LoginPage(page);
  await urllogin.open();
  await urllogin.login("standard_user", "secret_sauce");

  const producttext = new Products(page);

  await expect(producttext.validateproducts).toBeVisible();
  await producttext.Addcart("Sauce Labs Backpack");
  

 
  await producttext.carticon();

  const cartpage = new CartPage(page);
  await expect(cartpage.yourcarttext).toBeVisible();
  await cartpage.checkbutton();

  const checkinfo = new CheckoutInformation(page);
  await expect(checkinfo.checkoutinfo).toBeVisible();
  
  await checkinfo.enterfirstname("saketh")
  await checkinfo.enterportal("500039");
  await checkinfo.clickoncontinue();
  await expect(checkinfo.error).toHaveText("Error: Last Name is required");

})

test.only("Verify empty postal code",async({page})=>{
  const urllogin = new LoginPage(page);
  await urllogin.open();
  await urllogin.login("standard_user", "secret_sauce");

  const producttext = new Products(page);

  await expect(producttext.validateproducts).toBeVisible();
  await producttext.Addcart("Sauce Labs Backpack");
  

 
  await producttext.carticon();

  const cartpage = new CartPage(page);
  await expect(cartpage.yourcarttext).toBeVisible();
  await cartpage.checkbutton();

  const checkinfo = new CheckoutInformation(page);
  await expect(checkinfo.checkoutinfo).toBeVisible();
  
  await checkinfo.enterlastname("Ananthula");
  await checkinfo.enterfirstname("Saketh")
  await checkinfo.clickoncontinue();
  await expect(checkinfo.error).toHaveText("Error: Postal Code is required");

})