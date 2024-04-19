import { BasePage } from "../pageObjects/BasePage";

export class LoginPage extends BasePage {
  static get url() {
    return "/#/login";
  }

  static get elementName() {
    return cy.get("elementSelector");
  }

  static get loginEmail(){
    return cy.get("#email");
  }

  static get loginPassword(){
    return cy.get("#password");
  }

  static get loginButton(){
    return cy.get("#loginButton");
  }

  static get registerLink(){
    return cy.get("#newCustomerLink a");
  }
}
