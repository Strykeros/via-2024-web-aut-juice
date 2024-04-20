import { BasePage } from "../pageObjects/BasePage";

export class OrderCompletionPage extends BasePage {

    static get orderSuccessMsg() {
        return cy.get(".mat-card.mat-focus-indicator.mat-elevation-z0");
    }

}