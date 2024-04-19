import { BasePage } from "../pageObjects/BasePage";

export class RegisterPage extends BasePage {
    static get url() {
        return "/#/register";
    }

    static get registerEmail(){
        return cy.get("#emailControl");
    }

    static get registerPassword(){
        return cy.get("#passwordControl");
    }

    static get repeatRegisterPassword(){
        return cy.get("#repeatPasswordControl");
    }

    static get registerSecurityQuestion(){
        return cy.get(".mat-form-field-flex");
    }

    static get securityQuestion() {
        return cy.get(".mat-form-field-flex.ng-tns-c22-16");
    }

    static get securityQuestionOption() {
        return cy.get(".mat-option-text");
    }
    
    static get petName() {
        return cy.get("#securityAnswerControl");
    }
    
    static get registerButton() {
        return cy.get("#registerButton");
    }

}