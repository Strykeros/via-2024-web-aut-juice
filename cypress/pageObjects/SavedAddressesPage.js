import { BasePage } from "../pageObjects/BasePage";

export class SavedAddressesPage extends BasePage {

    static get addAddressBtn() {
        return cy.get(".mat-focus-indicator.btn.btn-new-address");

    }

}