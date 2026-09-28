import {test, expect} from '@playwright/test'

test("Handling multiple windows", async ({page})=>{

    await page.goto("https://demo.automationtesting.in/Windows.html")


    const page1 = page.waitForEvent("popup")
    
    // Identify and click on the element which is responsible for generation of "popup" event on the page

    await page.locator("#Tabbed button").click()
    const newPage = await page1

    await newPage.getByText("Downloads", {exact:true}).click()
    await expect(newPage.locator("#bindings")).toContainText("WebDriver Language Bindings")
    
    await page.bringToFront()

    await page.getByText("Home", {exact:true}).click()
    await expect(page.getByPlaceholder("Email id for Sign Up")).toBeVisible()

    await page.goBack()

    // Assignment to handle the new window

})