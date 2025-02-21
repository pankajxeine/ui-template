describe('Eworles UI Template', () => {
  it('basic', () => {
    cy.visit('/');

    // should have the correct tile
    cy.title().should('include', 'Eworles UI React template');
  });
});
