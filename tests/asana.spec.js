// @ts-check
const { test, expect } = require('@playwright/test');
const login = require('../scripts/login.js')
const testCases = JSON.parse(JSON.stringify(require('./testCases.json')))

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
