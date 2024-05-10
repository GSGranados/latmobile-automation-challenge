import { expect, type Locator, type Page } from '@playwright/test';
import randomIntFromInterval from '../helpers/random-number-generator';
import constants from '../../data/constants.json';

class DemoCasinoSignUpPage {

    readonly page: Page
    readonly emailRegistrationMethodOption: Locator
    readonly emailRegistrationInput: Locator
    readonly agreeTermsAndConditionsCheckbox: Locator
    readonly noBonusRadioButton: Locator
    readonly currencyDropdown: Locator
    readonly currencyListOptions: Locator
    readonly passwordInput: Locator
    readonly confirmPasswordInput: Locator
    readonly createAccountButton: Locator
    //Error locators
    readonly errorEmailMessage: Locator
    readonly errorTermsAndConditions: Locator
    readonly errorPasswordConfirmation: Locator

    constructor(page: Page) {
        this.page = page;
        this.emailRegistrationMethodOption = page.locator('li').filter({ hasText: 'E-mail' })
        this.emailRegistrationInput = page.locator('input[data-test="input-email"]');
        this.agreeTermsAndConditionsCheckbox = page.getByText('I unconditionally agree with')
        this.noBonusRadioButton = page.locator('label').filter({ hasText: "No Bonus" });
        this.currencyDropdown = page.locator('.input__wrapper .selectric-wrapper .selectric');
        this.currencyListOptions = page.locator(".input__wrapper .selectric-items ul > li");
        this.passwordInput = page.locator('input[data-test="input-password"]');
        this.confirmPasswordInput = page.locator('input[data-test="input-password_confirmation"]');
        this.createAccountButton = page.locator('button[data-test="control-submit"]');
        this.errorEmailMessage = page.locator('[data-test="error-email"]');
        this.errorTermsAndConditions = page.locator('[data-test="error-terms_and_conditions"]');
        this.errorPasswordConfirmation = page.locator('[data-test="error-password_confirmation"]');
    }

    async clickOnEmailRegistrationOption(): Promise<void> {
        await this.emailRegistrationMethodOption.click();
    }

    async typeOnEmailRegistrationInput(emailUsername: string): Promise<void> {
        await this.emailRegistrationInput.fill(emailUsername);
    }

    async checkOnAgreeUponTermsAndConditions(): Promise<void> {
        await this.agreeTermsAndConditionsCheckbox.check();
    }

    async checkOnNoBonusesRadioButton(): Promise<void> {
        await this.noBonusRadioButton.check();
    }

    async selectRandomCurrencyOption(): Promise<void> {
        await this.currencyDropdown.click();
        const amountOfCurrencies = await this.currencyListOptions.count();
        this.currencyListOptions.nth(randomIntFromInterval(0, amountOfCurrencies - 1)).click();
    }

    async typeIntoPasswordInput(password: string): Promise<void> {
        await this.passwordInput.fill(password);
    }

    async typeIntoConfirmPasswordInpupt(confirmPassword: string): Promise<void> {
        await this.confirmPasswordInput.fill(confirmPassword);
    }

    async clickOnCreateAccountButton(): Promise<void> {
        await this.createAccountButton.click();
    }

    async isEmailErrorMessagePresent(): Promise<void> {
        await expect(this.errorEmailMessage).toBeVisible({ timeout: constants.timeoutConstants.implicitTimeout })
    }
    async isTermsAndConditionsErrorPresent(): Promise<void> {
        await expect(this.errorTermsAndConditions).toBeVisible({ timeout: constants.timeoutConstants.implicitTimeout })
    }
    async isPasswordConfirmationErrorPresent(): Promise<void> {
        await expect(this.errorPasswordConfirmation).toBeVisible({ timeout: constants.timeoutConstants.implicitTimeout })
    }

}

export default DemoCasinoSignUpPage