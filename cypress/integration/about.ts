describe('About Page', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('has correct title', () => {
    cy.title().should('equal', 'Sourabh Patel | About')
  })
})