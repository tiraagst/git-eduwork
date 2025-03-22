describe('Working with inputs', () => {
    beforeEach(() => {
        cy.visit('http://zero.webappsecurity.com/login.html', { timeout: 10000 });
        cy.url().should('include', 'login.html');
        cy.get('#user_login').should('be.visible'); // Pastikan elemen tersedia
    });

    it('Should fill username', () => {
        cy.get('#user_login').clear().type('username');
    });

    it('Should fill password', () => {
        cy.get('#user_password').clear().type('password');
    });

    it('Should check "Keep me signed in"', () => {
        cy.get('#user_remember_me').check().should('be.checked');
    });
});
