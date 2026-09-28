import { Locator, Page } from '@playwright/test';

export class LoginPages

{

   page:Page
   private email : Locator
   private password : Locator
   private loginBtn : Locator
   homePageIdentifier : Locator
   errorMessage : Locator

   constructor(page:Page)
   
   {
        this.page = page
        this.email=this.page.getByPlaceholder("email@example.com")
        this.password = this.page.getByPlaceholder("enter your passsword")
        this.loginBtn = this.page.locator("#login")
        this.errorMessage = this.page.locator("#toast-container")
        this.homePageIdentifier = this.page.locator("[routerlink='/dashboard/']")

   }

async launchURL(url:string){
        await this.page.goto(url)
    }

    async loginIntoApplication(username:string, password: string){
        await this.email.fill(username)
        await this.password.fill(password)
        await this.loginBtn.click()
    }

   }