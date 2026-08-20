import { Page,Locator } from "@playwright/test";
export class Menu{
    readonly menubutton:Locator;
    readonly logoutbutton:Locator;

    constructor(private page:Page ){
        this.menubutton=page.getByRole("button",{name:'Open Menu'});
        this.logoutbutton=page.getByText("Logout");
    }

    async menulines(){
       await this.menubutton.click();
    }

    async logout(){
        await this.logoutbutton.click();
    }

}