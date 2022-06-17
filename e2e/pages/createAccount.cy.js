class CreateAccount {
  email() {
    return cy.get("#email_create")
  }
  password() {
    return cy.get('#passwd')
  }
  signInButton() {
    return cy.get(".login")
  }
  createButton() {
    return cy.get('#SubmitCreate > span')
  }

  dayBirth(){
    return cy.get('#days')
  }
  monthBirth(){
    return cy.get('#months')
  }
  yearBirth(){
    return cy.get('#years')
  }

  registerButton() {
    return cy.get('#submitAccount > span')
  }
}

export default {CreateAccount};
