import { PageObject } from '../pageObject';

export class homePageObject extends PageObject {
  url = '/';

  home() {
    return cy.getByDataCy('home-link');
  }

  newArticle() {
    return cy.getByDataCy('new-article-link');
  }

  settings() {
    return cy.getByDataCy('settings-link');
  }

  username() {
    return cy.getByDataCy('username-link');
  }
}
