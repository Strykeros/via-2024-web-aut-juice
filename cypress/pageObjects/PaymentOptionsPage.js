import { BasePage } from "../pageObjects/BasePage";

export class PaymentOptionsPage extends BasePage {

    static get cardOption() {
        return cy.get(".mat-radio-button").first();
    }

    static get continueBtn() {
        return cy.get("[aria-label='Proceed to review']");
    }

    static get ordersBtn() {
        return cy.get(".mat-focus-indicator.mat-menu-trigger.mat-menu-item.mat-menu-item-submenu-trigger");
    }

    static get paymentOptions() {
        return cy.get("[aria-label='Go to saved payment methods page']");
    }

   

}