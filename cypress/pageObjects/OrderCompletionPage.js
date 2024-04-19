import { BasePage } from "../pageObjects/BasePage";

export class OrderCompletionPage extends BasePage {

    static get orderConfirmation() {
        return cy.get(".mat-card.mat-focus-indicator.mat-elevation-z0");
    }

}