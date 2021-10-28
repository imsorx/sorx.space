describe('Blog Page', () => {

    it('Display error on request fail', () => {
        cy.intercept('GET', '**/imsorx/blog/main/index.json', { statusCode: 404 }).as('getBlogIndex');

        cy.visit('/blog');

        cy.wait('@getBlogIndex').then(interception => {
            cy.wrap(interception.response).should('have.a.property', 'statusCode').should('eq', 404)
            cy.wait(500)
            cy.get('p').should('contain', 'Oops Github\'s server is not responding...🤷‍♂️')
        });
    });

    it('No articles on empty response', () => {
        cy.intercept('GET', '**/imsorx/blog/main/index.json', []).as('getBlogIndex');

        cy.visit('/blog');

        cy.wait('@getBlogIndex');
        cy.wait(500);
        cy.get('main')
            .find('article')
            .should('not.exist');
        cy.get('main').find('p').should('contain', 'Oops...he forgot to post a single post 😓😐')

    });

    it('Show articles on success response', () => {
        cy.intercept('GET', '**/imsorx/blog/main/index.json', {
            fixture: 'blog.index'
        }).as('getBlogIndex');

        cy.visit('/blog');

        cy.wait('@getBlogIndex').then(interception => {
            cy.wrap(interception.response).should('have.a.property', 'statusCode').should('eq', 200);
            cy.wait(500);
            cy.get('main')
                .find('article')
                .its('length')
                .should('eq', interception.response?.body.length);
        });
    });
});