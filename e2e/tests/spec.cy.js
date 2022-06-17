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

  it("buy a casual dress logged in site", () => {
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

  it.only("buy casual dress directly", () => {
   
  });

});
