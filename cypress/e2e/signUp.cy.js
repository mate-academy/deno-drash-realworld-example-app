/// <reference types="cypress" />
/// <reference types="../support" />

describe('Sign Up page', () => {
  let user;

  beforeEach(() => {
    cy.task('db:clear');
    cy.task('newUser').then(newUser => {
      user = newUser;
    });
  });

  it('should provide an ability to register a new account', () => {
    const successMsg = 'Your registration was successful!';

    cy.intercept('POST', '/users')
      .as('register');

    cy.visit('/register');
    cy.getByDataCy('username-sign-up')
      .type(user.username);
    cy.getByDataCy('email-sign-up')
      .type(user.email);
    cy.getByDataCy('password-sign-up')
      .type(user.password);
    cy.getByDataCy('sign-up-btn')
      .click();
    
    cy.wait('@register');
    cy.get('.swal-text')
      .should('contain', successMsg);
    cy.getByDataCy('username-link')
      .should('contain', user.username);
  });
});
