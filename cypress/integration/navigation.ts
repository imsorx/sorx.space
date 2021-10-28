describe('Navigation', () => {

    beforeEach(() => {
        cy.visit('/');
    });

    it('Navigate to home', () => {
        cy.get('nav').find('a').contains('About').click();
        cy.title().should('equal', 'Sourabh Patel | About');
    });

    it('Navigate to timeline', () => {
        cy.get('nav').find('a').contains('Timeline').click();
        cy.title().should('equal', 'Sourabh Patel | Timeline');
    });

    it('Navigate to resources', () => {
        cy.get('nav').find('a').contains('Resources').click();
        cy.title().should('equal', 'Sourabh Patel | Resources');
    });

    it('Navigate to blog', () => {
        cy.get('nav').find('a').contains('Blog').click();
        cy.title().should('equal', 'Sourabh Patel | Blog');
    });

    it('Navigate to not found', () => {
        cy.visit('/awdawd').title().should('equal', 'Sourabh Patel | Oops');
    });
});