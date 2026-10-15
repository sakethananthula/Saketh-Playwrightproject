import {Page,Locator} from '@playwright/test';
export class LoginPage{
  readonly usernametextbox:Locator;
  readonly passwordtextbox:Locator;
  readonly loginbutton:Locator;
  readonly invalidtext:Locator;
  readonly emptytext:Locator;
  readonly logoutlink:Locator;

  readonly forgotlink:Locator;

  readonly firstname:Locator;
    readonly lastname:Locator;
    readonly address:Locator;
    readonly city:Locator;
    readonly state:Locator;
    readonly zipcode:Locator;
    readonly phone:Locator;
    readonly SSN:Locator;
    readonly findbutton:Locator;

constructor(private page:Page){
  this.usernametextbox=page.locator("[name='username']");
  this.passwordtextbox=page.locator("[name='password']");
  this.loginbutton=page.getByRole('button',{name:"Log In"});
  // this.invalidtext=page.locator("p.error");
  this.invalidtext=page.getByText("The username and password could not be verified.");
  this.emptytext=page.getByText('Please enter a username and password.');
  this.logoutlink=page.getByRole('link',{name:"Log Out"});

  this.forgotlink=page.getByRole('link',{name:"Forgot login info?"});

this.firstname=page.locator("[id='customer.firstName']");
this.lastname= page.locator('[id="customer.lastName"]');
this.address=page.locator('[name="customer.address.street"]');
this.city=page.locator('[id="customer.address.city"]');
this.state=page.locator('[id="customer.address.state"]');
this.zipcode=page.locator('[id="customer.address.zipCode"]');
this.phone=page.locator('[id="customer.phoneNumber"]');
this.SSN=page.locator('[id="customer.ssn"]');

this.findbutton=page.getByRole('button',{name:'Find My Login Info'});

}
async open(){
  await this.page.goto("https://parabank.parasoft.com/parabank/index.htm");
}

async login(username:string,password:string){
 await this.usernametextbox.fill(username);
 await this.passwordtextbox.fill(password);
 await this.loginbutton.click();
}

async logout(){
  await this.logoutlink.click();
}

async forgot(firstname:string,lastname:string,address:string,city:string,state:string,
    zipcode:string,SSN:string){
        await this.firstname.fill(firstname);
        await this.lastname.fill(lastname);
        await this.address.fill(address);
        await this.city.fill(city);
        await this.state.fill(state);
        await this.zipcode.fill(zipcode);
        await this.SSN.fill(SSN);

        await this.findbutton.click();
    }
}