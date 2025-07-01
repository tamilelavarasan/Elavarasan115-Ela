import { test, expect } from '@playwright/test';

let context;
let page;

test.beforeAll(async ({ browser }) => {
  context = await browser.newContext();
  await context.tracing.start({
    snapshots: true,   
    screenshots: true,
  });
  page = await context.newPage(); 
});

test.afterAll(async () => {
  await context.tracing.stop({ path: 'Elatrace.zip' });
});

test('Checkout flow on SauceDemo', async () => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  await page.locator('.shopping_cart_link').click(); 
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').fill('Nila');
  await page.locator('[data-test="lastName"]').fill('Usha');
  await page.locator('[data-test="postalCode"]').fill('2147');
  await page.locator('[data-test="continue"]').click();
  await page.locator('[data-test="finish"]').click();

});
