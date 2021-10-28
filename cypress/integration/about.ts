describe('About Page', () => {
    it('Show error message on request fail', () => {
        cy.intercept('**/imsorx/main/README.md', { statusCode: 500 }).as('readme');
        cy.visit('/');
        cy.wait('@readme').then(interception => {
            cy.wrap(interception.response).should('have.a.property', 'statusCode').should('eq', 500);
            cy.wait(300);
            cy.get('main').find('p').should('contain', 'Oops Github\'s server is not responding...🤷‍♂️');
        });
    });

    it('Fetch readme markdown and renders it', () => {
        cy.intercept('**/imsorx/main/README.md').as('readme');
        cy.visit('/');
        cy.wait('@readme').then(interception => {
            cy.wrap(interception.response).should('have.a.property', 'statusCode').should('eq', 200);
            cy.wait(300);
            cy.get('main').find('.md').should('exist');
        });
    });
})