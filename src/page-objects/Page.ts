import { expect, type Locator, type Page } from '@playwright/test';


class BasePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateToURL(urlPath:string):Promise<void>{
        await this.page.goto(urlPath);
    }

    async clickOnWebElement(webElement:Locator):Promise<void>{
        if(!webElement) throw Error ("No Web Element Was Provided");
        await webElement.click();
    }
    
    async typeOnWebElement(webElement:Locator,inputText:string):Promise<void>{
        if(!webElement && !inputText) throw Error ("No Web Element and input text were provided");
        await webElement.fill(inputText);
    }



}

export default BasePage;