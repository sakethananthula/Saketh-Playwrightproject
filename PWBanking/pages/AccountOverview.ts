import { Locator,Page } from "@playwright/test";
export class AccountOverview{
readonly overviewtext:Locator;
readonly accounttable:Locator;
readonly accountnumber12345:Locator;
readonly accountdetailstext:Locator;


constructor(private page:Page){
this.overviewtext=page.getByText("Accounts Overview");
this.accounttable=page.locator("#accountTable").first();
this.accountnumber12345=page.getByRole('link',{name:'12345'});
this.accountdetailstext=page.getByText('Account Details');
}
async clickaccountnbr(){
    await this.accountnumber12345.click();
}

}