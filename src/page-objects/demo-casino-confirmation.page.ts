import { expect, type Locator, type Page } from '@playwright/test'
import constants from '../../data/constants.json'

class DemoCasinoConfirmationPage {
    readonly page: Page
    readonly confirmationMessage: Locator
    readonly goToProfileButton: Locator

    constructor(page: Page) {
        this.page = page
        this.confirmationMessage = page.locator("p").filter({ hasText: " Registration successfully finished! " })
        this.goToProfileButton = page.getByRole("link", { name: "View Profile" })
    }

    async isConfirmationMessagePresent(): Promise<void> {
        await expect(this.confirmationMessage).toBeVisible({timeout:constants.timeoutConstants.implicitTimeout})
        expect(await this.confirmationMessage.innerText()).toContain(constants.testScripConstants.registrationCompleteText);
    }

    async clickOnGoToProfileButton():Promise<void>{
        await this.goToProfileButton.click();
    }
}

export default DemoCasinoConfirmationPage;