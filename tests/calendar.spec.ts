import {test, expect, selectors} from '@playwright/test'

/*test("Handling calendar" , async ({page})=>{
    await page.goto("https://www.hyrtutorials.com/p/calendar-practice.html")
    await page.locator(".ui-datepicker-trigger").click()

    let targetDay = "11"
    let targetMonth = "September"
    let targetYear = "2026"


    const monthPicker = page.locator(".ui-datepicker-month")
    const yearPicker = page.locator(".ui-datepicker-year")

    while(true){

        if((await monthPicker.textContent() == targetMonth) &&
            (await yearPicker.textContent() == targetYear))
        {
            await page.getByText(targetDay, {exact:true}).click()
            break
        }
        else{
            await page.getByText("Next", {exact:true}).click()
        }

    }

    await page.waitForTimeout(3000)




})*/

test("Handled spicject calender selection",async ({page})=>
    {
            await page.goto("https://www.spicejet.com/");
        
            await page.getByText("Departure Date",{exact:true}).click()
        
            const datepicker = '15';
            const month = 'December';
            const year = '2026';

            while(true){

        if(await page.getByText(${month} ${year},{exact:true}).isVisible())
        {
           await page.getByTestId(undefined-month-${month}-${year}).getByTestId(undefined-calender-${datepicker}).click(); 
           break;
        }
        else
        {
            await page.locator('button').filter({hasText:'>'}).click();
            
        }
    }
       

    await page.waitForTimeout(2000)
       
    })