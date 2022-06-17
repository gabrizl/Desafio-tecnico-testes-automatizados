class login {
    emailLogin() {
      return cy.get("#email")
    }
    password() {
      return cy.get('#passwd')
   
  }
  loginButton() {
    return cy.get('#SubmitLogin > span')
 
}
}
  export default {login};