import { Page,Locator } from "@playwright/test";
export class CartPage{
    readonly yourcarttext:Locator;
    readonly checkoutbutton:Locator;

    constructor(private page:Page){
         this.yourcarttext=page.getByText("Your Cart");
         this.checkoutbutton=page.getByRole('button',{name:"Checkout"});

    }

    async checkbutton(){
        await this.checkoutbutton.click();
    }
}