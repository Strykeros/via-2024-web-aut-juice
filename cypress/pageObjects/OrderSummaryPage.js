import { BasePage } from "../pageObjects/BasePage";

export class OrderSummaryPage extends BasePage {

    static get buyBtn() {
        return cy.get("#checkoutButton");

    }

}