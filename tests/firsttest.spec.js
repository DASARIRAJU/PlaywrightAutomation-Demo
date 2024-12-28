const{test,expect} = require('@playwright/test')

test('First' , async ({page}) => {

    await page.goto("https://www.facebook.com/login/");
    const pageTitle = await page.title();
    console.log("Facebook Page title is : " ,pageTitle);
    await expect(page).toHaveTitle("Log in to Facebook");
    await page.close();

}
)