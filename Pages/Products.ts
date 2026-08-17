import{Page,Locator} from "@playwright/test";
export class Products{
readonly validateproducts:Locator;
readonly addtocart:Locator;
readonly cartbutton:Locator;

constructor(private page:Page){
    this.validateproducts=page.getByText("Products");
    this.addtocart=page.locator("#add-to-cart-sauce-labs-backpack");
    this.cartbutton=page.locator(".shopping_cart_link");
}

async Addcart(){
    await this.addtocart.click();
}
async carticon(){
    await this.cartbutton.click();
}




}