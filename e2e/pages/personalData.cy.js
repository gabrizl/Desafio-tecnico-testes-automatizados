class PersonalData {
  title() {
    return cy.get("#id_gender1"); // 1 - Mr.  2 - Mrs.
  }

  firstName() {
    return cy.get("#customer_firstname");
  }
  lastName() {
    return cy.get("#customer_lastname");
  }

  company() {
    return cy.get("#company");
  }

  address1() {
    return cy.get("#address1");
  }

  address2() {
    return cy.get("#address2");
  }

  city() {
    return cy.get('#city');
  }

  state() {
    return cy.get('#id_state');
  }
  zipCode() {
    return cy.get('#postcode');
  }

  country(){
    return cy.get('#id_country');
  }
  aditionalInfo() {
    return cy.get('#other');
  }
  MobileNumber() {
    return cy.get('#phone_mobile');
  }
}

export default { PersonalData };
