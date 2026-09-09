import { Page,Locator } from "@playwright/test";
export class CheckoutOverview{
    readonly overviewtext :Locator;
    readonly finishbutton:Locator;
    readonly validateprice:Locator;
    readonly validateproduct:Locator;

constructor(private page:Page){
        this.overviewtext=page.getByText("Checkout: Overview");
        this.validateproduct=page.locator(".inventory_item_name");
        this.validateprice=page.locator(".inventory_item_price")
        this.finishbutton=page.getByRole("button",{name:"Finish"});
    }
    async finish(){
     await   this.finishbutton.click();
        
    }
}
