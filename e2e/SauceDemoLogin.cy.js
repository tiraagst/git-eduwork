describe('Website Login', () => {
    beforeEach(() => {
    cy.visit('https://www.saucedemo.com/', {timeout: 10000});
    });

    it('Login with valid credential', () => {
        cy.fixture("standard-user").then(user => {
            const username = user.username
            const password = user.password

            cy.get('#user-name').clear().type(username);
            cy.get('#password').clear().type(password);
            cy.contains('Login').click()
            cy.url().should('include', '/inventory.html');
        });
    });

    it('Login with invalid credential', () => {
        cy.fixture("wrong_username").then(user => {
            const username = user.username
            const password = user.password
    
            cy.get('#user-name').clear().type(username);
            cy.get('#password').clear().type(password);
            cy.contains('Login').click();
            cy.get('[data-test="error"]').should('be.visible');
    });
    });

    it('Login with empty username field', () => {
        cy.fixture("standard-user").then(user => {
            const password = user.password
    
            cy.get('#user-name').clear();
            cy.get('#password').clear().type(password);
            cy.contains('Login').click();
            cy.get('[data-test="error"]').should('be.visible');
        });
    });

    it('Login with empty password field', () => {
        cy.fixture("standard-user").then(user => {
            const username = user.username
    
            cy.get('#user-name').clear().type(username);
            cy.get('#password').clear();
            cy.contains('Login').click();
            cy.get('[data-test="error"]').should('be.visible');
        });
    });

    it('Login with locked credential', () => {
        cy.fixture("locked_out_user").then(user => {
            const username = user.username
            const password = user.password

            cy.get('#user-name').clear().type(username);
            cy.get('#password').clear().type(password);
            cy.contains('Login').click()
            cy.get('[data-test="error"]').should('be.visible');
        });
    });

});
