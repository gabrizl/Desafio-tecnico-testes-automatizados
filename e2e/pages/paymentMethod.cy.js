class Pay {
    bankWire() {
      return cy.get('.bankwire')
    }
  
    check() {
      return cy.get('.cheque')
    }
    
    confirm(){
        return cy.get('#cart_navigation > .button > span');
    }
   
  }
  export default {Pay};