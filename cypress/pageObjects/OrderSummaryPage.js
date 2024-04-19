import { BasePage } from "../pageObjects/BasePage";

export class OrderSummaryPage extends BasePage {

    static get placeOrderButton() {
        return cy.get("#checkoutButton");

    }

}