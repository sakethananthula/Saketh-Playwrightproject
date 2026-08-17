import{Page,Locator} from '@playwright/test';
export class CheckoutInformation{
    readonly checkoutinfo:Locator;
    readonly firstnametextbox:Locator;
    readonly lastnametextbox:Locator;
    readonly postaltextbox:Locator;
    readonly continuebutton:Locator;

    constructor(private page:Page){
        this.checkoutinfo=page.getByText('Checkout: Your Information');
        this.firstnametextbox=page.locator("#first-name");
        this.lastnametextbox=page.locator("#last-name");
        this.postaltextbox=page.locator("#postal-code");
        this.continuebutton=page.locator('#continue');
    }

    async enterfirstname(firstname:string){
       await  this.firstnametextbox.fill(firstname)
    }
async enterlastname(lastname:string){
    await this.lastnametextbox.fill(lastname);
}

async enterportal(portal:string){
   await  this.postaltextbox.fill(portal)
}

async clickoncontinue(){
   await  this.continuebutton.click();
}

}