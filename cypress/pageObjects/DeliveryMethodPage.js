import { BasePage } from "../pageObjects/BasePage";

export class DeliveryMethodPage extends BasePage {

    static get deliveryMethod() {
        return cy.get(".svg-inline--fa.fa-truck.fa-w-20");
    }

    static get continueBtn() {
        return cy.get("[aria-label='Proceed to delivery method selection']");
    }

}