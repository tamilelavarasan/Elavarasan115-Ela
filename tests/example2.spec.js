import { test, expect } from '@playwright/test';
test ('check java page', async({page}) => {

    page.goto('https://playwright.dev/');

    await page.getByRole('link', {name:'Get Started'}).click();
    await page.getByRole('button', {name:'Node.js'}).hover();
    await page.getByText('Java', {exact:true}).click();
    await page.goto('https://playwright.dev/java/docs/intro');
    await expect(page.getByText('Installing Playwright', {exact:true})).not.toBeVisible();

    const javadescription = 'Playwright was created specifically to accommodate the needs of end-to-end testing. Playwright supports all modern rendering engines including Chromium, WebKit, and Firefox. Test on Windows, Linux, and macOS, locally or on CI, headless or headed with native mobile emulation.';
    await expect(page.getByText(javadescription)).toBeVisible();



});