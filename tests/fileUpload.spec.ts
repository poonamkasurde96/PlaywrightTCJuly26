
import {test, expect, Page} from '@playwright/test'

test("Handling file upload", async ({page})=>{
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")

    // setInputFiles("path of the file")
    await page.locator("#filesToUpload").setInputFiles(["testdata/LLM.png","testdata/blanksheet.xlsx"])

    await expect(page.locator("#fileList").first()).toHaveText("LLM.png")
    await expect(page.locator("#fileList").last()).toHaveText("blanksheet.xlsx")

});
