
import {test,expect} from '@playwright/test'
import { LoginPages } from '../Pages/Loginpages'

const url = "https://rahulshettyacademy.com/client"
const username = "testnHNk@gmail.com"
const password = "Testing@1234"
const incorrectPassword = "Test"


test("Login Into Application", async ({page})=>
    {
        
        const lp = new LoginPages(page)     
         await lp.launchURL(url);
         await lp.loginIntoApplication(username, password)
         await expect(lp.homePageIdentifier).toBeVisible()


})

test("Login Into Application with invalid cred", async ({page})=>
    {


})




