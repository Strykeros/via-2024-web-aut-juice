import { BasePage } from "../pageObjects/BasePage";

export class SelectAddressPage extends BasePage {

    static get addressField() {
        return cy.get(".mat-column-Country");
    }

    static get selectContinueButton() {
        return cy.get("[aria-label='Proceed to payment selection']");
    }

    static get savedAddresses() {
        return cy.get("[aria-label='Go to saved address page']");
    }

}