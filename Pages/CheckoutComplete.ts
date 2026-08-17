import{Page,Locator} from '@playwright/test';
export class CheckoutComplete{
    readonly completetext:Locator;
    readonly Thankyoutext:Locator;
    readonly backtohomebutton:Locator;

    constructor(private page:Page){
        this.completetext=page.getByText("Checkout: Complete!");
        this.Thankyoutext=page.getByText("Thank you for your order!");
        this.backtohomebutton=page.getByRole("button",{name:'Back Home'});
    }
    async homebutton(){
        await this.backtohomebutton.click();
    }
}
