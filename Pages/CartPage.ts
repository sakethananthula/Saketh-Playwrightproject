import { Page,Locator } from "@playwright/test";
export class CartPage{
    readonly yourcarttext:Locator;
    readonly checkoutbutton:Locator;
    readonly removebutton:Locator;

    constructor(private page:Page){
         this.yourcarttext=page.getByText("Your Cart");
         this.checkoutbutton=page.getByRole('button',{name:"Checkout"});
         this.removebutton=page.getByRole('button',{name:"Remove"});

    }

    async checkbutton(){
        await this.checkoutbutton.click();
    }

    async remove(){
        await this.removebutton.click();
    }
}