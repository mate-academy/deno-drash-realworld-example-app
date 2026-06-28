/// <reference types="cypress" />

describe('Settings page', () => {
  let user;

  beforeEach(() => {
    cy.task('db:clear');
    cy.task('newUser').then(newUser => {
      user = newUser;
    });
});

  it('should provide an ability to update username', () => {
    cy.login(user.email, user.username, user.password);
    cy.visit('/#/settings', {
      onBeforeLoad(win) {
        cy.stub(win.console, 'log')
          .as('consoleLog');
      },
    });

    cy.getByDataCy('username-field-settings')
      .type('new');
    cy.getByDataCy('update-btn')
      .click();
    
    cy.get('@consoleLog')
      .should('be.calledWith', 'User updated successfuly.');
    cy.get('.swal-title')
      .should('contain', 'Update successful!');
    
    cy.getByDataCy('username-field-settings')
      .should('have.value', user.username + 'new');
  });

  it('should provide an ability to update bio', () => {
    cy.login(user.email, user.username, user.password);
    cy.visit('/#/settings');

    cy.getByDataCy('bio')
      .type('new');
    cy.getByDataCy('update-btn')
      .click();

    cy.get('.swal-title')
      .should('contain', 'Update successful!');
    cy.reload()
      .getByDataCy('bio')
      .should('have.value', 'new');
  });

  it.skip('should provide an ability to update an email', () => {
    cy.login(user.email, user.username, user.password);
    cy.visit('/#/settings');

    cy.getByDataCy('email-field-settings')
      .clear()
      .type('riot1@qa.team');
    cy.getByDataCy('update-btn')
      .click();

    cy.get('.swal-title')
      .should('contain', 'Update successful!');
    cy.reload()
      .getByDataCy('email-field-settings')
      .should('have.value', 'riot1@qa.team');
  });

  it('should provide an ability to update password', () => {
    const newPass = '12345Qwerty!';

    cy.login(user.email, user.username, user.password);
    cy.visit('/#/settings');

    cy.getByDataCy('password-field-settings')
      .type(newPass);
    cy.getByDataCy('update-btn')
      .click();

    cy.get('.swal-title')
      .should('contain', 'Update successful!');
    
    cy.reload()
      .clearCookies();

    cy.visit('/#/login');
    cy.getByDataCy('email-sign-in')
      .type(user.email);
    cy.getByDataCy('password-sign-in')
      .type(newPass);
    cy.getByDataCy('sign-in-btn')
      .click();
    cy.getByDataCy('username-link')
      .should('contain', user.username);
  });

  it.only('should provide an ability to log out', () => {
    cy.login(user.email, user.username, user.password);
    cy.visit('/#/settings');

    cy.getByDataCy('logout-btn')
      .click();
    cy.url()
      .should('not.include', 'settings');
    cy.getByDataCy('sign-in-link')
      .should('exist');
    cy.getCookie('drash_sess')
      .should('have.property', 'value', 'null');
  });
});
