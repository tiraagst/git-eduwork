describe('Navbar test', () => {
    beforeEach(() => {
        cy.visit('http://zero.webappsecurity.com/index.html');
    });

    it('Should navigate to Online Banking and display content', () => {
        cy.contains('Online Banking').click();
        cy.url().should('include', 'online-banking.html');
        cy.get('h1').should('be.visible').and('contain', 'Online Banking');
    });

    it('Should navigate to Feedback page and display form', () => {
        cy.contains('Feedback').click();
        cy.url().should('include', 'feedback.html');
        cy.get('h3').should('be.visible').and('contain', 'Feedback');
        cy.get('#name').should('be.visible');
        cy.get('#email').should('be.visible');
        cy.get('#subject').should('be.visible');
        cy.get('#comment').should('be.visible');
    });

    it('Should navigate back to homepage from Feedback page', () => {
        cy.contains('Feedback').click();
        cy.url().should('include', 'feedback.html');
        cy.get('.brand').click();
        cy.url().should('include', 'index.html');
        cy.get('#nav').should('be.visible');
    });
});
