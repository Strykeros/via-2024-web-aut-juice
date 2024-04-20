import { BasePage } from "../pageObjects/BasePage";

export class HomePage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get dismissButton() {
    return cy.get("[aria-label='Close Welcome Banner']");
  }

  static get meWantItButton() {
    return cy.get("[aria-label='dismiss cookie message']");
  }

  static get accountBtn(){
    return cy.get("#navbarAccount")
  }

  static get navbarLoginBtn(){
    return cy.get("#navbarLoginButton")
  }

  static get navbarAccountName(){
    return cy.get("button[aria-label='Go to user profile'] span");
  }

  static get searchField() {
    return cy.get("#searchQuery");
  }

  static get searchInput() {
    return cy.get(".mat-input-element");
  }

  static get juiceSelect() {
    return cy.get(".item-name");
  }

  static get checkCard() {
    return cy.get(".mat-dialog-container");
  }

  static get closeDialogBtn() {
    return cy.get(".close-dialog");
  }

  static get openReviewsBtn() {
    return cy.get("#mat-expansion-panel-header-0");
  }

  static get getReview() {
    return cy.get(".mat-tooltip-trigger.review-text");
  }

  static get itemReview() {
    return cy.get("[data-placeholder='What did you like or dislike?']");
  }

  static get sendReview() {
    return cy.get("#submitButton");
  }

  static get pagination() {
    return cy.get(".mat-select-value-text");
  }

  static get paginationSelect() {
    return cy.get(".mat-option-text");
  }

  static get cardCount() {
    return cy.get(".mat-grid-tile-content");
  }

  static get addToBasketBtn() {
    return cy.get(".btn-basket");
  }

  static get shoppingCartBtn() {
    return cy.get("[aria-label='Show the shopping cart']");
  }

}
