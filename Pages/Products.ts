import{Page,Locator} from "@playwright/test";
export class Products{
readonly validateproducts:Locator;
readonly cartbutton:Locator;

constructor(private page:Page){
    this.validateproducts=page.getByText("Products");
    this.cartbutton=page.locator(".shopping_cart_link");
}

async Addcart(produtname:string){
    const product =this.page.locator(".inventory_item").filter({hasText:produtname});

    await product.getByRole('button',{name:"Add to cart"}).click();
   
}
async carticon(){
    await this.cartbutton.click();
}




}