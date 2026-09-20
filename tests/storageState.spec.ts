import {test,expect} from '@playwright/test';

test.beforeAll( async ({browser})=>{

    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill("rafi.tgcs219@gmail.com");
    await page.locator("#userPassword").fill("MBxanptFWYri5$k");
    await page.locator("#login").click();
    await page.waitForLoadState('networkidle');
    await context.storageState({path:'state.json'});
});

test.only("storageState Test Case", async ({browser})=>{

    const context=await browser.newContext({storageState:'state.json'});
    const page=await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client");
    await page.pause();

});