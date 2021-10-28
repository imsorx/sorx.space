describe('Home page', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('has logo', () => {
        cy.get('header').should('contain', 'sorx').should('contain', 'Sourabh Patel');
    });

    it('has social links', () => {
        cy.get('footer')
            .should('contain', 'Github')
            .should('contain', 'Steam')
            .should('contain', 'Instagram')
            .should('contain', 'Mail');
    });

    it('Mobile navigation works', () => {
        cy.viewport(350, 600);
        cy.get('header').find('.nav-toggle[aria-label="Open navigation menu"]')
            .should('have.css', 'display', 'block').click();
        cy.wait(300);
        cy.get('header').find('nav').should('have.class', 'open');
    });

    it('\'Scroll To Top\' button works', () => {
        cy.viewport(350, 600);
        cy.wait(300);
        cy.scrollTo('bottom');
        cy.get('button[aria-label="Go to top"').should('have.class', 'show').click();
        cy.wait(300);
        cy.window().then(win => expect(win.scrollY).to.be.eq(0));
    })
});