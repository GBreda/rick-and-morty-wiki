// https://docs.cypress.io/api/introduction/api.html

describe('Searching test', () => {
  it('Searching with empty input must return the first 20 characters', () => {
    cy.visit('/');
    cy.get('[data-cy=search-button]').click();
    cy.get('[data-cy=cards]')
      .find('.card')
      .should('have.length', 20);
  });
});
