describe('Cart Page', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
        cy.fixture("standard-user").then(user => {
            cy.get('#user-name').clear().type(user.username);
            cy.get('#password').clear().type(user.password);
            cy.get('#login-button').click();
        });
    });

    it('Verify user can see the cart badge get updated when add items to cart', () => {
        cy.get('.btn.btn_primary.btn_small.btn_inventory').first().click();
        cy.get('.shopping_cart_badge').should('be.visible').and('have.text', '1');
    });
    
    it('Verify user can see the remove button when add items to cart', () => {
        cy.get('.btn.btn_primary.btn_small.btn_inventory').first().click();
        cy.get('.btn.btn_secondary.btn_small.btn_inventory').should('be.visible');
    });

    it('Verify user can see the cart badge get updated when remove items from cart', () => {
        cy.get('.btn.btn_primary.btn_small.btn_inventory').first().click();
        cy.get('.btn.btn_secondary.btn_small.btn_inventory').first().click();
        cy.get('.shopping_cart_badge').should('not.exist');
    });

    it('Verify user can see the cart items added to cart', () => {
        cy.get('.btn.btn_primary.btn_small.btn_inventory').first().click();
        cy.get('.shopping_cart_link').click();
        cy.get('.inventory_item_name').should('not.be.empty');
        cy.get('.cart_quantity').should('not.be.empty');
        cy.get('.inventory_item_desc').should('not.be.empty');
        cy.get('.inventory_item_price').should('not.be.empty');
        cy.get('.btn.btn_secondary.btn_small.cart_button').should('be.visible');
    });

    it('Verify user can see the full product view', () => {
        cy.get('.btn.btn_primary.btn_small.btn_inventory').first().click();
        cy.get('.shopping_cart_link').click();  
        cy.get('.inventory_item_name').click();
        cy.get('.inventory_details_img').should('be.visible');
        cy.get('.inventory_details_name.large_size').should('not.be.empty');
        cy.get('.inventory_details_desc.large_size').should('not.be.empty');
        cy.get('.inventory_details_price').should('not.be.empty');
        cy.get('.btn.btn_secondary.btn_small.btn_inventory').should('be.visible');
    });

    it('Verify user can remove cart items from cart', () => {
        cy.get('.btn.btn_primary.btn_small.btn_inventory').first().click();
        cy.get('.shopping_cart_link').click();
        cy.get('.btn.btn_secondary.btn_small.cart_button').click();
        cy.get('.cart_item').should('not.exist');
    });

    it('Verify user can go back to product page from cart page', () => {
        cy.get('.shopping_cart_link').click();
        cy.get('#continue-shopping').click();
        cy.url().should('include', '/inventory.html');
    });

    it('Verify user can go to checkout from cart', () => {
        cy.get('.btn.btn_primary.btn_small.btn_inventory').first().click();
        cy.get('.shopping_cart_link').click();
        cy.get('#checkout').click();
        cy.url().should('include', '/checkout-step-one.html');
    });

});