import { BasePage } from "../pageObjects/BasePage";

export class CreateAddressPage extends BasePage {

    static get country() {
        return cy.get("[placeholder='Please provide a country.']")
    }

    static get name() {
        return cy.get("[placeholder='Please provide a name.']")
    }

    static get phone() {
        return cy.get("[placeholder='Please provide a mobile number.']")
    }

    static get zip() {
        return cy.get("[placeholder='Please provide a ZIP code.']")
    }

    static get address() {
        return cy.get("[placeholder='Please provide an address.']")
    }

    static get city() {
        return cy.get("[placeholder='Please provide a city.']")
    }

    static get state() {
        return cy.get("[placeholder='Please provide a state.']")
    }

    static get submitButton() {
        return cy.get("#submitButton")
    }

    static get validateName() {
        return cy.get(".mat-cell.cdk-cell.cdk-column-Name.mat-column-Name")
    }

}