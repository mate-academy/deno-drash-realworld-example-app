/// <reference types="../support" />

describe('Article', () => {
  let user;
  let article;

  beforeEach(() => {
    cy.task('db:clear');
    cy.task('newUser').then(newUser => {
      user = newUser;
    });
    cy.task('newArticle').then(newArticle => {
      article = newArticle;
    });
  });

  it('should be created using New Article form', () => {
    cy.login(user.email, user.username, user.password);

    cy.visit('/editor');
    cy.getByDataCy('title-field')
      .type(article.title);
    cy.getByDataCy('description-field')
      .type(article.description);
    cy.getByDataCy('body-field')
      .type(article.body);
    cy.getByDataCy('publish-btn')
      .click();

    cy.getByDataCy('article-title')
      .should('contain', article.title);
    cy.getByDataCy('article-body')
      .should('contain', article.body);
    cy.getByDataCy('edit-article')
      .should('exist');
    cy.getByDataCy('delete-article')
      .should('exist');
  });

  it('should be deleted using Delete button', () => {
    cy.createArticle(article.title, article.description, article.body)
      .then(response => {
        cy.visit(`/articles/${response.body.article.slug}`);
        cy.getByDataCy('delete-article')
          .eq(1)
          .click();
        cy.url()
          .should('not.include', response.body.article.slug);
      });
    cy.document()
      .matchImageSnapshot();
  });
});
