import { HomePage } from "../pageObjects/HomePage";
import { LoginPage } from "../pageObjects/LoginPage";
import { RegisterPage } from "../pageObjects/RegisterPage";
import { BasketPage } from "../pageObjects/BasketPage";
import { DeliveryMethodPage } from "../pageObjects/DeliveryMethodPage";
import { OrderCompletionPage } from "../pageObjects/OrderCompletionPage";
import { SelectAddressPage } from "../pageObjects/SelectAddressPage";
import { OrderSummaryPage } from "../pageObjects/OrderSummaryPage";
import { PaymentOptionsPage } from "../pageObjects/PaymentOptionsPage";
import { SavedAddressesPage } from "../pageObjects/SavedAddressesPage";
import { CreateAddressPage } from "../pageObjects/CreateAddressPage";
import { SavedPaymentMethodsPage } from "../pageObjects/SavedPaymentMethodsPage";

describe("Juice-shop scenarios", () => {
  context("Without auto login", () => {
    beforeEach(() => {
      HomePage.visit();
      HomePage.dismissButton.click();
      HomePage.meWantItButton.click();
    });

    it("Login", () => {
      // Click Account button
      HomePage.accountBtn.click();
      // Click Login button
      HomePage.navbarLoginBtn.click();
      // Set email value to "demo"
      LoginPage.loginEmail.type("demo")
      // Set password value to "demo"
      LoginPage.loginPassword.type("demo");
      // Click Log in
      LoginPage.loginButton.click();
      // Click Account button
      HomePage.accountBtn.click();
      // Validate that "demo" account name appears in the menu section
      HomePage.navbarAccountName.should("have.text", " demo ")
    });

    it("Registration", () => {
      // Click Account button
      HomePage.accountBtn.click();
      // Click Login button
      HomePage.navbarLoginBtn.click();
      // Click "Not yet a customer?"
      LoginPage.registerLink.click();
      // Find - how to generate random number in JS
      // Use that number to genarate unique email address, e.g.: email_7584@ebox.com
      let randNumber = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
      // Save that email address to some variable
      let generatedEmail = `email_${randNumber}@ebox.com`;  
      RegisterPage.registerEmail.type(generatedEmail);    
      // Fill in password field and repeat password field with same password
      RegisterPage.registerPassword.type("12345");
      RegisterPage.repeatRegisterPassword.type("12345");
      // Click on Security Question menu
      RegisterPage.securityQuestion.click();
        // Select  "Name of your favorite pet?"
       RegisterPage.securityQuestionOption.contains("Name of your favorite pet?").click();
    // Fill in answer
     RegisterPage.petName.type("dog");
    // Click Register button
     RegisterPage.registerButton.click();
    // Set email value to previously created email
     LoginPage.loginEmail.type(generatedEmail);
    // Set password value to previously used password value
     LoginPage.loginPassword.type("12345");
    // Click login button
     LoginPage.loginButton.click();
    // Click Account button
    HomePage.accountBtn.click();
      // Validate that account name (with previously created email address) appears in the menu section
    });
  });

  context("With auto login", () => {
    beforeEach(() => {
      cy.login("demo", "demo");
      HomePage.visit();
    });

    it("Search and validate Lemon", () => {
    // Click on search icon
    // Search for Lemon
     HomePage.searchField.type("Lemon");
     HomePage.searchInput.type("{enter}");
    // Select a product card - Lemon Juice (500ml)
     HomePage.juiceSelect.contains("Lemon Juice (500ml)").click();
    // Validate that the card (should) contains "Sour but full of vitamins."
     HomePage.checkCard.should("contain.text", "Sour but full of vitamins.");
    });

    // // Create scenario - Search 500ml and validate Lemon, while having multiple cards
    it("Search 500ml and validate cards", () => {
       // Click on search icon
    // Search for 500ml
       HomePage.searchField.type("500ml");
    // press enter key
       HomePage.searchInput.type("{enter}");
    // Select a product card - Lemon Juice (500ml)
       HomePage.juiceSelect.contains("Lemon Juice (500ml)").click();
    // Validate that the card (should) contains "Sour but full of vitamins."
       HomePage.checkCard.should("contain.text", "Sour but full of vitamins.");
     });

    it("Search 500ml and validate cards", () => {
    // Click on search icon
    // Search for 500ml
    HomePage.searchField.type("500ml");
    // press enter key
       HomePage.searchInput.type("{enter}");

    // Select a product card - Eggfruit Juice (500ml)
       HomePage.juiceSelect.contains("Eggfruit Juice (500ml)").click();
    // Validate that the card contains "Now with even more exotic flavour."
       HomePage.checkCard.should("contain.text", "Now with even more exotic flavour.");
    // Close the card
       HomePage.closeDialogBtn.click();

    // Select a product card - Lemon Juice (500ml)
       HomePage.juiceSelect.contains("Lemon Juice (500ml)").click();
    // Validate that the card contains "Sour but full of vitamins."
       HomePage.checkCard.should("contain.text", "Sour but full of vitamins.");
    // Close the card
       HomePage.closeDialogBtn.click();

    // Select a product card - Strawberry Juice (500ml)
       HomePage.juiceSelect.contains("Strawberry Juice (500ml)").click();
    // Validate that the card contains "Sweet & tasty!"
       HomePage.checkCard.should("contain.text", "Sweet & tasty!");
    // Close the card
       HomePage.closeDialogBtn.click();
     });


    // // Test case for reading a review
    it("Read a review", () => {
    // Click on search icon
    // Search for King
       HomePage.searchField.type("King");
       HomePage.searchInput.type("{enter}");
    // Select a product card - OWASP Juice Shop "King of the Hill" Facemask
       HomePage.juiceSelect.contains('OWASP Juice Shop "King of the Hill" Facemask').click();
    //wait for reviews to appear
       cy.wait(1000);
    // Click expand reviews button/icon
       HomePage.openReviewsBtn.click();
    // Read a review
       HomePage.getReview.contains("K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!");
     });

    // Create scenario - Add a review
    it("Add a review", () => {
      // Click on search icon
      HomePage.searchField.type("Raspberry");
      // Search for Raspberry
      HomePage.searchInput.type("{enter}");
      // Select a product card - Raspberry Juice (1000ml)
      HomePage.juiceSelect.contains("Raspberry Juice (1000ml)").click();
      // Type in review - "Tastes like metal"
      cy.wait(4000);
      HomePage.itemReview.type("Tastes like metal");
      cy.wait(4000);
      // Click Submit
      HomePage.sendReview.click();
      // Click expand reviews button/icon (wait for reviews to appear)
      HomePage.openReviewsBtn.click();
      // Validate review -  "Tastes like metal"
      HomePage.getReview.contains("Tastes like metal");
    });

    // Create scenario - Validate product card amount
    it("Validate product card amount", () => {
      // Validate that the default amount of cards is 12
      HomePage.pagination.should("contain.text", "12");
      // Change items per page (at the bottom of page) to 24
      HomePage.pagination.click();
      HomePage.paginationSelect.contains("24").click();
      // Validate that the amount of cards is 24
      HomePage.pagination.should("contain.text", "24");
      // Change items per page (at the bottom of page) to 36
      HomePage.pagination.click();
      HomePage.paginationSelect.contains("36").click();
      // Validate that the amount of cards is 35
      HomePage.cardCount.should("have.length", 35);
    });


    // Create scenario - Buy Girlie T-shirt
    it("Buy Girlie T-shirt", () => {
      // Click on search icon
      HomePage.searchField.type("Girlie");
      cy.wait(2000);
      // Search for Girlie
      HomePage.searchInput.type("{enter}");
      // Add to basket "Girlie"
      HomePage.addToBasketBtn.click();
      // Click on "Your Basket" button
      HomePage.shoppingCartBtn.click();
      // Create page object - BasketPage
      // Click on "Checkout" button
      BasketPage.checkoutBtn.click();
      // Create page object - SelectAddressPage
      // Select address containing "United Fakedom"
      SelectAddressPage.addressInput.contains("United Fakedom").click();
      // Click Continue button
      SelectAddressPage.continueBtn.click();
      // Create page object - DeliveryMethodPage
      // Select delivery speed Standard Delivery
      DeliveryMethodPage.deliveryMethod.click();
      // Click Continue button
      DeliveryMethodPage.continueBtn.click();
      // Create page object - PaymentOptionsPage
      // Select card that ends with "5678"
      PaymentOptionsPage.cardOption.click();
      // Click Continue button
      PaymentOptionsPage.continueBtn.click();
      // Create page object - OrderSummaryPage
      // Click on "Place your order and pay"
      OrderSummaryPage.buyBtn.click();
      // Create page object - OrderCompletionPage
      // Validate confirmation - "Thank you for your purchase!"
      OrderCompletionPage.orderSuccessMsg.should("contain.text", "Thank you for your purchase!");
    });

    it("Add address", () => {
      // Click on Account
      HomePage.accountBtn.click();
      // Click on Orders & Payment
      PaymentOptionsPage.ordersBtn.first().click();
      // Click on My saved addresses
      SelectAddressPage.savedAddresses.click();
      // Create page object - SavedAddressesPage
      // Click on Add New Address
      SavedAddressesPage.addAddressBtn.click();
      // Create page object - CreateAddressPage
      // Fill in the necessary information
      CreateAddressPage.country.type("United States");
      cy.wait(4000);
      CreateAddressPage.name.type("Bob Lopez");
      cy.wait(4000);
      CreateAddressPage.phone.type("123456789");
      CreateAddressPage.zip.type("445312");
      CreateAddressPage.address.type("1234 Main Street");
      CreateAddressPage.city.type("Los angeles");
      CreateAddressPage.state.type("California");
      // Click Submit buttonAddressesPage
      CreateAddressPage.submitAddressBtn.click();
      // Validate that previously added address is visible
      CreateAddressPage.AddressName.should("contain.text", "Bob Lopez");

    });

    it("Add payment option", () => {

      // Click on Account
      HomePage.accountBtn.click();
      // Click on Orders & Payment
      PaymentOptionsPage.ordersBtn.first().click();
      // Click on My payment options
      PaymentOptionsPage.paymentOptions.click();
      // Create page object - SavedPaymentMethodsPage
      // Click Add new card
      SavedPaymentMethodsPage.addNewCardBtn.click();
      // Fill in Name
      cy.wait(4000);
      SavedPaymentMethodsPage.name.type("Bob Lopez");
      cy.wait(4000);
      // Fill in Card Number
      SavedPaymentMethodsPage.cardNumber.type("1234567890117417");
      // Set expiry month to 7
      SavedPaymentMethodsPage.expiryDate.select("7");
      // Set expiry year to 2090
      SavedPaymentMethodsPage.expiryYear.select("2090");
      // Click Submit button
      SavedPaymentMethodsPage.submitButton.click();
      // Validate that the card shows up in the list
      SavedPaymentMethodsPage.cardName.should("contain.text", "Bob Lopez");
    });
  });
});
