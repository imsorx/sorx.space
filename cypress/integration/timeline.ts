describe('Timeline Page', () => {
    it('Show error on request fail', () => {
        cy.intercept('**/timeline.json', { statusCode: 404 }).as('data');
        cy.visit('/timeline')
        cy.wait('@data').then(interception => {
            cy.wrap(interception.response).should('have.a.property', 'statusCode').should('eq', 404);
            cy.wait(300);
            cy.get('main').find('p').should('contain', 'Oops Github\'s server is not responding...🤷‍♂️');
        });
    });

    it('Fetch data and render', () => {
        cy.intercept('**/timeline.json',{fixture:'timeline.json'}).as('data');
        cy.visit('/timeline')
        cy.wait('@data').then(interception => {
            cy.wrap(interception.response).should('have.a.property', 'statusCode').should('eq', 200);
            cy.wait(1000);
            cy.get('main ul').children().should('length', interception.response?.body.length);
        });
    });
});