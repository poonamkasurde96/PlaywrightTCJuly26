
  const today = new Date();
    const rangeStart = new Date(today);
    rangeStart.setDate(today.getDate() + 1);
    const rangeEnd = new Date(today);
    rangeEnd.setDate(today.getDate() + 7);

    await selectCalendarDate(page, '#datepicker', today);
    await selectCalendarDate(page, '#txtDate', today);
    await selectCalendarDate(page, '#start-date', rangeStart);
    await selectCalendarDate(page, '#end-date', rangeEnd);



    // await page.locator("p:has-text('Date Picker 1') input").fill("10/03/2026");
    // await page.locator("p:has-text('Date Picker 2') input").fill("04/11/2026");
    await page.locator("[class='submit-btn']").click();


 


  
  const row = page.locator('table tr').filter({ hasText: 'Internet Explorer' });

  const cpu = await row.locator('td').nth(3).textContent();

  console.log('CPU of Internet Explorer:', cpu?.trim());
 







})

/*
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
*/