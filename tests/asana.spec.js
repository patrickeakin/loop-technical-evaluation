// @ts-check
const { test, expect } = require('@playwright/test');

const login = async ({ page }) => {
    await page.goto('https://app.asana.com/-/login')
    await page.fill('.LoginEmailForm-emailInput', 'ben+pose@workwithloop.com')
    await page.click('.LoginEmailForm-continueButton')
    await page.fill('.LoginPasswordForm-passwordInput', 'Password123')
    await page.click('.LoginPasswordForm-loginButton')
    await page.waitForSelector('.HomePageContent-greeting')
  }

test.beforeEach(login)

test('Test Case', async ({ page }) => {
  
})