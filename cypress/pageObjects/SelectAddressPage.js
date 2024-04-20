import { BasePage } from "../pageObjects/BasePage";

export class SelectAddressPage extends BasePage {

    static get addressInput() {
        return cy.get(".mat-column-Country");
    }

    static get continueBtn() {
        return cy.get("[aria-label='Proceed to payment selection']");
    }

    static get savedAddresses() {
        return cy.get("[aria-label='Go to saved address page']");
    }

}