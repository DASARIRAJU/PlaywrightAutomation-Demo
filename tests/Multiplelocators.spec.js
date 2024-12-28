const{test,expect} = require('@playwright/test')

test('Multiple Locators' , async ({page}) => {

    await page.goto("https://www.demoblaze.com/");
    const imageCount = await page.$$("//a"); // $$ symbol defines the muliple elements on the web page


    for (const ic of imageCount)
    {
        const pc = await ic.textContent(); // textContent() method gets the text of the elements
        console.log(pc);
    }

    await page.close();

}
)