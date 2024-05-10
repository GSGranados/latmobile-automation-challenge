import {  type Locator, type Page } from '@playwright/test'


class DemoCasinoSignInPage{

    readonly page: Page
    readonly usernameInput: Locator
    readonly passwordInput: Locator
    readonly signInButton: Locator

    constructor(page:Page){
        this.page = page;
        this.usernameInput = page.locator('[data-test="input-username"]');
        this.passwordInput = page.locator('[data-test="input-password"]');
        this.signInButton = page.locator('[data-test="control-submit"]');
    }

    async typeOnUsernameInput(username:string):Promise<void>{
        await this.usernameInput.fill(username);
    }

    async typeOnPasswordInput(password:string):Promise<void>{
        await this.passwordInput.fill(password);
    }

    async clickOnSignInButton():Promise<void>{
        await this.signInButton.click();
    }

}

export default DemoCasinoSignInPage