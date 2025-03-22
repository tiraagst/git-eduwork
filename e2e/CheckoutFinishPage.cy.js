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

        cy.fixture("standard-user-check").then(user => {
            cy.get('#first-name').clear().type(user.firstname);
            cy.get('#last-name').clear().type(user.lastname);
            cy.get('#postal-code').clear().type(user.zip);
            cy.get('#continue').click();
         });

         cy.get('#finish').click();
    });

    it('Verify complete checkout are displayed correctly', () => {
        cy.get('.pony_express').should('be.visible');
        cy.get('.complete-header').should('not.be.empty');
        cy.get('.complete-text').should('not.be.empty');
        cy.get('#back-to-products').should('be.visible');
    });

    it('Verify user can go back to product page from complete checkout page', () => {
        cy.get('#back-to-products').click()
        cy.url().should('include', '/inventory.html');
    });
});