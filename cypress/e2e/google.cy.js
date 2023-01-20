/// <reference types="cypress" />
// describe is used to define a group of test for smillar.

// describe --> it
// discribe --> describe


describe('Google search', () => {
  it("sign in",()=> {
    cy.visit("http://www.facebook.com");
    cy.get('[data-testid="royal_email"]').type("abc@gmail.com");
    cy.get('[data-testid="royal_pass"]').type("passqword");
    cy.get('[data-testid="royal_login_button"]').click()
  })
})