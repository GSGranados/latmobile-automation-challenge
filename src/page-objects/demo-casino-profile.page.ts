import { expect, type Locator, type Page } from '@playwright/test'
import constants from '../../data/constants.json' assert {type: "json"}

class DemoCasinoProfilePage {
    readonly page: Page
    readonly profileSettingsHeader: Locator

    constructor(page: Page) {
        this.page = page;
        this.profileSettingsHeader = page.getByRole("heading",{name: "My Profile"})
        }

    async isMyProfileHeaderVisible():Promise<void>{
        await expect(this.profileSettingsHeader).toBeVisible({timeout:constants.timeoutConstants.implicitTimeout});
    }

}

export default DemoCasinoProfilePage;