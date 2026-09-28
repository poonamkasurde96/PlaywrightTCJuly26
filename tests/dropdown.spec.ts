import {test, expect, Page} from '@playwright/test'

test("Select value from non-select dropdown", async ({ page }) => {
    await page.goto("https://demoqa.com/select-menu");

    const selectValue = page.locator("#withOptGroup");

    await selectValue.click();
    await page.getByRole('option', { name: 'Group 1, option 1' }).click();
    await expect(selectValue).toContainText('Group 1, option 1');

    console.log("Selected value from non-select dropdown is: " + await selectValue.textContent());

    // A single-select dropdown replaces the current value when another option is chosen.
    await selectValue.click();
    await page.getByRole('option', { name: 'Group 2, option 1' }).click();
    await expect(selectValue).toContainText('Group 2, option 1');
    console.log("Selected value from non-select dropdown is: " + await selectValue.textContent());
    
});