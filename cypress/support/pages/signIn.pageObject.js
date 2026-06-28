import { PageObject } from '../pageObject';

export class signInPageObject extends PageObject {
  url = '/login';

  emailField() {
    return cy.getByDataCy('email-sign-in');
  }

  passwordField() {
    return cy.getByDataCy('password-sign-in');
  }

  signInButton() {
    return cy.getByDataCy('sign-in-btn');
  }
}
