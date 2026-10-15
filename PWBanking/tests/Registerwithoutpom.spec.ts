import{test,expect,Locator} from '@playwright/test';
test('Verify the Registration',async({page})=>{
    await page.goto("https://parabank.parasoft.com/parabank/index.htm");   
    await page.getByRole('link',{name:'Register'}).click();
  // await expect(page).toHaveURL("https://parabank.parasoft.com/parabank/register.htm");
  await page.locator("[id='customer.firstName']").fill("Saketh");
  await page.locator('[id="customer.lastName"]').fill("Ananthula");
  await page.locator('[name="customer.address.street"]').fill("KPHB");
  await page.locator('[id="customer.address.city"]').fill("Hyd");
  await page.locator('[id="customer.address.state"]').fill("Telangana");
  await page.locator('[id="customer.address.zipCode"]').fill("500073");
  await page.locator('[id="customer.phoneNumber"]').fill("9090909090");
  await page.locator('[id="customer.ssn"]').fill("SKN");


  await page.locator("[id='customer.username']").fill('SAKETH7');
  await page.locator('[id="customer.password"]').fill("Saketh@123");
  await page.locator('[id="repeatedPassword"]').fill("Saketh@123");

  await page.getByRole('button',{name:"Register"}).click();

  const welcome= page.getByText("Welcome SAKETH7");
  await expect(welcome).toHaveText("Welcome SAKETH7");

})