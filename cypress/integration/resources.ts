describe('Resource Page', () => {
    it('Fetch markdown and renders it', () => {
        cy.intercept('**/resources.md',{fixture:'resources.md'}).as('data');
        cy.visit('/resources');
        cy.wait('@data').then(interception => {
            cy.wrap(interception.response).should('have.a.property', 'statusCode').should('eq', 200);
            cy.wait(1000);
            cy.get('main').find('.md').should('exist');
        });
    });
});