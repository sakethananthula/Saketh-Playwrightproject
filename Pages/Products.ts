import{Page,Locator} from "@playwright/test";
export class Products{
readonly validateproducts:Locator;
readonly cartbutton:Locator;
readonly dropdown:Locator;
readonly productprices:Locator;
readonly addcartbutton:Locator;

constructor(private page:Page){
    this.validateproducts=page.getByText("Products");
    this.cartbutton=page.locator(".shopping_cart_link");
    this.dropdown=page.locator(".product_sort_container");
    this.productprices=page.locator(".inventory_item_price");
    this.addcartbutton=page.getByRole('button',{name:"Add to cart"});
}

async Addcart(produtname:string){
    const product =this.page.locator(".inventory_item").filter({hasText:produtname});

    await product.getByRole('button',{name:"Add to cart"}).click();
   
}
async carticon(){
    await this.cartbutton.click();
}

async drop(option:string){
    await this.dropdown.selectOption(option);
}

async addallproducts() {
    while (await this.addcartbutton.count() > 0) {
        await this.addcartbutton.first().click();
    }
}
}
