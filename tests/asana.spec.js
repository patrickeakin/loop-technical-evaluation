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

testCases.forEach(data => {
    test(`${data.name}`, async ({ page }) => {
        await page.getByLabel(data.leftNav).click()
        await expect(
            page.locator('.BoardBody-column', { has: page.getByText(data.column) })
            .locator('.BoardCardLayout', { has: page.getByText(data.card_title)})
            ).toBeVisible()
        await data.tags.forEach(tag => {
            expect(page.locator('.BoardCardLayout', { has: page.getByText(data.card_title) })
            .locator('.BoardCardCustomPropertiesAndTags')
            ).toContainText(tag)    
        })
    })
})
