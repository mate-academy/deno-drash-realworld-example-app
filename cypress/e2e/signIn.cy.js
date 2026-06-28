/// <reference types="cypress" />
/// <reference types="../support" />

describe('Sign In page', () => {
  let user;

  before(() => {
    cy.task('db:clear');
    cy.task('newUser').then(newUser => {
      user = newUser;
    });
  });
  
  it('should provide an ability to log in', () => {
    cy.visit('/login');
    cy.register(user.email, user.username, user.password);

    cy.getByDataCy('email-sign-in')
      .type(user.email);
    cy.getByDataCy('password-sign-in')
      .type(user.password);
    cy.getByDataCy('sign-in-btn')
      .click();

    cy.getByDataCy('username-link')
      .should('contain', user.username);
  });
});
