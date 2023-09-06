module.exports = async ({ page }) => {
    await page.goto('https://app.asana.com/-/login')
    await page.fill('.LoginEmailForm-emailInput', 'ben+pose@workwithloop.com')
    await page.click('.LoginEmailForm-continueButton')
    await page.fill('.LoginPasswordForm-passwordInput', 'Password123')
    await page.click('.LoginPasswordForm-loginButton')
  }