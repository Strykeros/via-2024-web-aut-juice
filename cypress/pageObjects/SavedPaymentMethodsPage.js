import { BasePage } from "../pageObjects/BasePage";

export class SavedPaymentMethodsPage extends BasePage {
    static get addNewCardBtn() {
        return cy.get(".mat-expansion-panel");
    }

    static get name() {
        return cy.get(".ng-tns-c22-12#mat-input-1");
    }

    static get cardNumber() {
        return cy.get("#mat-input-2");
    }

    static get expiryDate() {

        return cy.get("#mat-input-3");
    }

    static get expiryYear() {

        return cy.get("#mat-input-4");
    }

    static get submitButton() {
        return cy.get("#submitButton");
    }

    static get cardName() {
        return cy.get(".mat-cell.cdk-cell.cdk-column-Name.mat-column-Name.ng-star-inserted");
    }
}