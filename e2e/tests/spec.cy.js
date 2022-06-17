/// <reference types="cypress" />

import { CreateAccount } from "../pages/createAccount.cy";
import { PersonalData } from "../pages/personalData.cy";
import { login } from "../pages/login.cy";
import { dresses } from "../pages/dresses.cy";
import { Pay } from "../pages/paymentMethod.cy"

describe("authentication", () => {
  beforeEach(() => {
    cy.visit(
      "http://automationpractice.com/index.php?id_category=9&controller=category"
    );
  });

  it("create account with minimum data", () => {
    const create = new CreateAccount();
    const data = new PersonalData();
    create.signInButton().click();
    create.email().type("exemplo@email.com");
    create.createButton().click();

    data.title().click();
    data.firstName().type("John");
    data.lastName().type("Anderson");
    create.password().type("admin123");
    create.dayBirth().select("4");
    create.monthBirth().select("4");
    create.yearBirth().select("1987");
    data.company().type("Minsait");
    data.address1().type("Street example,123");
    data.city().type("Miami");
    data.state().select("9");
    data.zipCode().type("00000");
    data.country().select("21");
    data.aditionalInfo().type("phone: +5583999999999");
    data.MobileNumber().type("+5583999999999");
    create.registerButton().click();
  });

  it("Login with a existent account", () => {
    const create = new CreateAccount();
    const logIn = new login();

    create.signInButton().click();
    logIn.emailLogin().type("exemplo@email.com");
    logIn.password().type("admin123");
    logIn.loginButton().click();
  });

  it.only("buy a casual dress logged in site", () => {
    const create = new CreateAccount();
    const logIn = new login();
    const dress = new dresses();
    const pay = new Pay();

    create.signInButton().click();
    logIn.emailLogin().type("exemplo@email.com");
    logIn.password().type("admin123");
    logIn.loginButton().click();
    dress.categorybutton().click();
    dress.casualdresses().click();
    dress.addToCart().click();
    dress.checkout().click();
    dress.proceedCheckout().click();
    dress.proceedCheckout().click();
    dress.agreeTerms().click();
    dress.proceedCheckout().click();
    pay.bankWire().click();
    pay.confirm().click();

  });

  it("buy casual dress directly", () => {
   
  });

  it("can filter for completed tasks", () => {
    // We can perform similar steps as the test above to ensure
    // that only completed tasks are shown
    cy.contains("Completed").click();

    cy.get(".todo-list li")
      .should("have.length", 1)
      .first()
      .should("have.text", "Pay electric bill");

    cy.contains("Walk the dog").should("not.exist");
  });

  it("can delete all completed tasks", () => {
    // First, let's click the "Clear completed" button
    // `contains` is actually serving two purposes here.
    // First, it's ensuring that the button exists within the dom.
    // This button only appears when at least one task is checked
    // so this command is implicitly verifying that it does exist.
    // Second, it selects the button so we can click it.
    cy.contains("Clear completed").click();

    // Then we can make sure that there is only one element
    // in the list and our element does not exist
    cy.get(".todo-list li")
      .should("have.length", 1)
      .should("not.have.text", "Pay electric bill");

    // Finally, make sure that the clear button no longer exists.
    cy.contains("Clear completed").should("not.exist");
  });
});
