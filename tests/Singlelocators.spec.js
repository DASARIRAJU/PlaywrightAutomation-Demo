const{test,expect} = require('@playwright/test')

test('Single locators' , async ({page}) => {
  //await page.goto("https://www.sap.com/india/index.html");

  // ***click operation***
``
  // method 1 - First locating the locator and then performing the click action
  // await page.locator("//span[normalize-space()='Learn more']").click()

   // method 2 - First performing the click action and then locating the locator
   //await page.click("//span[normalize-space()='Learn more']")


   // **********************************************************************************************************

   // **** Sending data into input fields ***

   await page.goto("https://www.demoblaze.com/");

   //method 1 - using fill() operation

   await page.locator("//a[@id='login2']").click()
   // await page.fill("//input[@id='loginusername']", 'TEST')
   // await page.locator("//input[@id='loginusername']").fill("abc")

    //method 2 - using type() operation (Deprecated recently)

    // await page.type("//input[@id='loginusername']", 'typetype')
    // await page.locator("//input[@id='loginusername']").type



  await page.close()


    



}
)