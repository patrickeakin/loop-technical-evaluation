module.exports = async ({ page }) => {
    await page.goto('https://app.asana.com/-/login')
    await page.getByLabel('Email address').fill('ben+pose@workwithloop.com')
    await page.getByRole('Button', { name: 'Continue', exact: true }).click()
    await page.getByLabel('Password', { exact: true }).fill('Password123')
    await page.getByRole('Button', { name: 'Log in' }).click()
  }
  