// @ts-check
const { test, expect } = require('@playwright/test');
const testCases = JSON.parse(JSON.stringify(require('./testCases.json')))

const login = async ({ page }) => {
    await page.goto('https://app.asana.com/-/login')
    await page.fill('.LoginEmailForm-emailInput', 'ben+pose@workwithloop.com')
    await page.click('.LoginEmailForm-continueButton')
    await page.fill('.LoginPasswordForm-passwordInput', 'Password123')
    await page.click('.LoginPasswordForm-loginButton')
  }

test.beforeEach(login)

test('Test Case', async ({ page }) => {
    console.log(testCases)
    await test.step('Select project in side bar"', async () => {
        await page.click('[aria-label="Cross-functional project plan, Project"]')
    })
    await expect(page.locator('.BoardBody-column', { has: page.locator('text="To do"') }).locator('.BoardCardLayout', { has: page.locator('text="Draft project brief"')})).toBeVisible()
    await expect(page.locator('.BoardCardLayout', { has: page.locator('text="Draft project brief"')}).locator('.BoardCardCustomPropertiesAndTags')).toContainText('Low')
    await expect(page.locator('.BoardCardLayout', { has: page.locator('text="Draft project brief"')}).locator('.BoardCardCustomPropertiesAndTags')).toContainText('On track')
})