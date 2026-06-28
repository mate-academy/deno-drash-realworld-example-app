import { signInPageObject } from '../support/pages/signIn.pageObject.js';
import { homePageObject } from '../support/pages/home.pageObject.js';

const signInPage = new signInPageObject();
const homePage = new homePageObject();

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

    signInPage
      .visit();
    signInPage
      .emailField()
      .type(user.email);
    signInPage
      .passwordField()
      .type(user.password);
    signInPage
      .signInButton()
      .click();

    homePage
      .username()
      .should('contain', user.username);
  });
});
