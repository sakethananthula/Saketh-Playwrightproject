import { Page,Locator } from "@playwright/test";
export class LoginPage{
    readonly usernametextbox:Locator;
    readonly passwordtextbox:Locator;
    readonly loginbutton:Locator;

    constructor(private page:Page){
this.usernametextbox=page.getByPlaceholder("Username");
this.passwordtextbox=page.locator("#password");
this.loginbutton=page.getByRole('button',{name:"Login"});
}

async open(){
  await  this.page.goto("https://www.saucedemo.com")
}
 
async login(username:string,password:string){
    await this.usernametextbox.fill(username);
    await this.passwordtextbox.fill(password);
    await this.loginbutton.click();

}
}
