describe('Product Page', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
        cy.fixture("standard-user").then(user => {
            cy.get('#user-name').clear().type(user.username);
            cy.get('#password').clear().type(user.password);
            cy.get('#login-button').click();
        });
    });

    it('Verify product list are displayed', () => {
        cy.get('.inventory_item').should('have.length.greaterThan', 0);
        cy.get('.inventory_item_img').should('be.visible');
        cy.get('.inventory_item_name').should('not.be.empty');
        cy.get('.inventory_item_desc').should('not.be.empty');
        cy.get('.inventory_item_price').should('not.be.empty');
        cy.get('.btn.btn_primary.btn_small.btn_inventory').should('be.visible');
    });

    it('Verify user can see the full product view', () => {
        cy.get('.inventory_item_name').first().click();
        cy.get('.inventory_details_img').should('be.visible');
        cy.get('[data-test="inventory-item-name"]').should('not.be.empty');
        cy.get('[data-test=inventory-item-desc]').should('not.be.empty');
        cy.get('[data-test="inventory-item-price"]').should('not.be.empty');
        cy.get('#add-to-cart').should('be.visible');
    });

    it('Verify product sort option and cart is displayed', () => {
        cy.get('.product_sort_container').should('be.visible');
        cy.get('.shopping_cart_link').should('be.visible');
    });

    it('Verify product sort option ZA is working correctly', () => {
        cy.get('.product_sort_container').select('za');
        
        cy.get('.inventory_item_name')
      .then(($items) => {
          const itemNames = $items.map((index, html) => Cypress.$(html).text()).get();

          const sortedNames = [...itemNames].sort().reverse();

          expect(itemNames).to.deep.equal(sortedNames);
        });
    });

    it('Verify product sort option AZ is working correctly', () => {
        cy.get('.product_sort_container').select('az');
        
        cy.get('.inventory_item_name')
      .then(($items) => {
          const itemNames = $items.map((index, html) => Cypress.$(html).text()).get();

          const sortedNames = [...itemNames].sort();
          expect(itemNames).to.deep.equal(sortedNames);
        });
    });

    it('Verify product sort option low to high is working correctly', () => {
        cy.get('.product_sort_container').select('hilo');

        cy.get('.inventory_item_price')
      .then(($prices) => {
          const priceValues = $prices.map((index, html) => 
              parseFloat(Cypress.$(html).text().replace('$', ''))).get();

          const sortedPrices = [...priceValues].sort((a, b) => b - a);
          expect(priceValues).to.deep.equal(sortedPrices);
         });
    });

    it('Verify product sort option hgh to low is working correctly', () => {
        cy.get('.product_sort_container').select('lohi');

        cy.get('.inventory_item_price')
      .then(($prices) => {
          const priceValues = $prices.map((index, html) => 
              parseFloat(Cypress.$(html).text().replace('$', ''))).get();

          const sortedPrices = [...priceValues].sort((a, b) => a - b);
          expect(priceValues).to.deep.equal(sortedPrices);
         });
    });

    it('Verify footer are displayed', () => {
        cy.get('.footer').should('be.visible');
        cy.get('.social').should('be.visible');
        cy.get('.footer_copy').should('not.be.empty');
    });

    it('Verify Twitter link is accessible', () => {
        cy.get('[data-test="social-twitter"]')
        .should('have.attr', 'href', 'https://twitter.com/saucelabs')
    });
    
    it('Verify Facebook link is accessible', () => {
        cy.get('[data-test="social-facebook"]')
          .should('have.attr', 'href', 'https://www.facebook.com/saucelabs');
    });
    
    it('Verify Linkedin link is accessible', () => {
        cy.get('[data-test="social-linkedin"]')
          .should('have.attr', 'href', 'https://www.linkedin.com/company/sauce-labs/');
    });

});