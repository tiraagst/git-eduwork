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
    });

    it('Verify checkout overview are displayed correctly information', () => {
        cy.get('.cart_quantity').should('not.be.empty');
        cy.get('.inventory_item_name').should('not.be.empty');
        cy.get('.inventory_item_desc').should('not.be.empty');
        cy.get('.inventory_item_price').should('not.be.empty');
        
        cy.get('.summary_info_label').should('not.be.empty');
        cy.get('.summary_value_label').should('not.be.empty');
        cy.get('.summary_subtotal_label').should('not.be.empty');
        cy.get('.summary_tax_label').should('not.be.empty');
        cy.get('.summary_total_label').should('not.be.empty');
    });

    it('Verify user can see the full product view', () => {
        cy.get('.inventory_item_name').click();
        cy.get('.inventory_details_img').should('be.visible');
        cy.get('[data-test="inventory-item-name"]').should('not.be.empty');
        cy.get('[data-test=inventory-item-desc]').should('not.be.empty');
        cy.get('[data-test="inventory-item-price"]').should('not.be.empty');
        cy.get('#remove').should('be.visible');
    });

    it('Verify user can go back to product page from checkout overview page', () => {
        cy.get('#cancel').click();
        cy.url().should('include', '/inventory.html');
    });
    it('Verify user can finish checkout', () => {
        cy.get('#finish').click();
        cy.url().should('include', '/checkout-complete.html');
    });
});