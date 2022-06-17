class dresses {
  categorybutton() {
    return cy.get(".sf-menu > :nth-child(2) > .sf-with-ul");
  }

  casualdresses() {
    return cy.get(":nth-child(1) > h5 > .subcategory-name");
  }

  addToCart() {
    return cy.get(".ajax_add_to_cart_button > span");
  }
  expandDetails() {
    return cy.get(".lnk_view > span");
  }
  checkout() {
    return cy.get('.button-container > .button-medium > span')
  }
  proceedCheckout() {
    return cy.get(".cart_navigation > .button > span");
  }

  agreeTerms() {
    return cy.get("#cgv");
  }
}
export default { dresses };
