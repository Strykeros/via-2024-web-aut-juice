import { BasePage } from "../pageObjects/BasePage";

export class BasketPage extends BasePage {

    static get checkoutBtn() {
        return cy.get("#checkoutButton");
    }
}