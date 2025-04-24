describe('Login/Logout test', () => {
    beforeEach(() => {
        cy.visit('http://zero.webappsecurity.com/login.html');
    });

    it('Should try to login with invalid data', () => {
        cy.fixture("invalid_userzero").then(user => {
            const username = user.username
            const password = user.password

            cy.get('#user_login').clear().type(username);
            cy.get('#user_password').clear().type(password);
            cy.get('.btn.btn-primary').click();
            cy.get('.alert-error').should('be.visible').and('contain', 'Login and/or password are wrong.');
        });
    });

    it('Should login with valid data', () => {
        cy.fixture("valid-userzero").then(user =>{
            const username = user.username
            const password = user.password

            cy.get('#user_login').clear().type(username);
            cy.get('#user_password').clear().type(password);
            cy.get('.btn.btn-primary').click();
        }); 
        cy.url().should('include', '/bank/account-summary.html')
    });

    it('Should logout', () => {
        cy.fixture("valid-userzero").then(user =>{
            const username = user.username
            const password = user.password

            cy.get('#user_login').clear().type(username);
            cy.get('#user_password').clear().type(password);
            cy.get('.btn.btn-primary').click();
        });
        
        cy.contains('username').click();
        cy.get('#logout_link').click();
        cy.url().should('contain', '/index.html');
    });
});