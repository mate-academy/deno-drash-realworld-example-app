/// <reference types="cypress" />

describe('User', () => {
  let user;

  beforeEach(() => {
    cy.task('db:clear');
    cy.task('newUser').then(newUser => {
      user = newUser;
    });
  });

  it('should be able to follow the user', () => {
    cy.register();
    cy.login(user.email, user.username, user.password);

    cy.visit('/@riot');
    cy.getByDataCy('follow-btn')
      .click();
    cy.getByDataCy('unfollow-btn')
      .should('exist');
  });
});
