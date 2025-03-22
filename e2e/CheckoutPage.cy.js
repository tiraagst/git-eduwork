describe('Checkout Page', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
        cy.fixture("standard-user").then(user => {
            cy.get('#user-name').clear().type(user.username);
            cy.get('#password').clear().type(user.password);
            cy.get('#login-button').click();
            cy.get('.btn.btn_primary.btn_small.btn_inventory').first().click();
            cy.get('.shopping_cart_link').click();
            cy.get('#checkout').click();
        });
    });

    it('Verify checkout with full information', () => {
        cy.fixture("standard-user-check").then(user => {
            const firstname = user.firstname
            const lastname = user.lastname
            const zip = user.zip

            cy.get('#first-name').clear().type(user.firstname);
            cy.get('#last-name').clear().type(user.lastname);
            cy.get('#postal-code').clear().type(user.zip);
            cy.get('#continue').click();
            cy.url().should('include', '/checkout-step-two.html');
         });
    });

    it('Verify checkout with empty First Name', () => {
        cy.fixture("standard-user-check").then(user => {
            cy.get('#first-name').clear();
            cy.get('#last-name').clear().type(user.lastname);
            cy.get('#postal-code').clear().type(user.zip);
            cy.get('#continue').click();
            cy.get('.error-message-container.error').should('be.visible');
         })
    });

    it('Verify checkout with empty Last Name', () => {
        cy.fixture("standard-user-check").then(user => {
            cy.get('#first-name').clear().type(user.firstname);
            cy.get('#last-name').clear();
            cy.get('#postal-code').clear().type(user.zip);
            cy.get('#continue').click();
            cy.get('.error-message-container.error').should('be.visible');
         })
    });

    it('Verify checkout with empty Zip/postal code', () => {
        cy.fixture("standard-user-check").then(user => {
            cy.get('#first-name').clear().type(user.firstname);
            cy.get('#last-name').clear().type(user.lastname);
            cy.get('#postal-code').clear();
            cy.get('#continue').click();
            cy.get('.error-message-container.error').should('be.visible');
         })
    });

    it('Verify user can go back to cart page', () => {
        cy.get('#cancel').click();
        cy.url().should('include', '/cart.html');
    });

});