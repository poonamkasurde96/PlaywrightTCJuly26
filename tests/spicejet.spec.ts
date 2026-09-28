import {test, expect, Page} from '@playwright/test'


test('spicejet side test', async ({page}) =>
{
 await page.goto("https://www.spicejet.com/");
 await page.getByText('Add-ons', {exact: true}).click();
 await expect(page.getByTestId("test-id-SpiceMax")).toHaveText("SpiceMax")
 await page.getByTestId('test-id-SpiceMax').click();
 await page.waitForTimeout(3000);
 await page.goBack();
 await page.getByText('round trip').click(); 
 await page.waitForTimeout(3000);
 await page.getByText('From', {exact:true}).click();
 await page.getByText('Agra', {exact:true}).click();
 await page.waitForTimeout(3000);
 await page.getByText('To', {exact:true}).click();
 await page.getByText('Ahmedabad', {exact:true}).click();
 await page.getByText('Senior Citizen', {exact:true}).click();
  });



