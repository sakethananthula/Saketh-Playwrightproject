import { Locator,Page} from "@playwright/test";
export class RegisterPage{
    readonly registerlink :Locator;
    readonly firstname:Locator;
    readonly lastname:Locator;
    readonly address:Locator;
    readonly city:Locator;
    readonly state:Locator;
    readonly zipcode:Locator;
    readonly phone:Locator;
    readonly SSN:Locator;

    readonly username:Locator;
    readonly password:Locator;
    readonly confirmpassword:Locator;

    readonly registerbutton:Locator;

    readonly firstnameerror:Locator;

constructor(private page:Page){
this.registerlink=page.getByRole("link",{name:'Register'});
this.firstname=page.locator("[id='customer.firstName']");
this.lastname= page.locator('[id="customer.lastName"]');
this.address=page.locator('[name="customer.address.street"]');
this.city=page.locator('[id="customer.address.city"]');
this.state=page.locator('[id="customer.address.state"]');
this.zipcode=page.locator('[id="customer.address.zipCode"]');
this.phone=page.locator('[id="customer.phoneNumber"]');
this.SSN=page.locator('[id="customer.ssn"]');

this.username=page.locator("[id='customer.username']");
this.password=page.locator('[id="customer.password"]');
this.confirmpassword=page.locator('[id="repeatedPassword"]');

this.registerbutton=page.getByRole('button',{name:"Register"});

this.firstnameerror=page.getByText('First name is required.');
}



async Registration(firstname:string,lastname:string,address:string,city:string,state:string,
    zipcode:string,phone:string,SSN:string,username:string,password:string,confirmpassword:string){
        await this.registerlink.click();
        await this.firstname.fill(firstname);
        await this.lastname.fill(lastname);
        await this.address.fill(address);
        await this.city.fill(city);
        await this.state.fill(state);
        await this.zipcode.fill(zipcode);
        await this.phone.fill(phone);
        await this.SSN.fill(SSN);
        await this.username.fill(username);
        await this.password.fill(password);
        await this.confirmpassword.fill(confirmpassword);
        await this.registerbutton.click();
    }

    getwelcomemessage(username:string):Locator{
        return this.page.getByText(`Welcome ${username}`);
    }

}