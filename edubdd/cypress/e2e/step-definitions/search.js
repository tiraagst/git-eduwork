const { Given, When, Then } = require ('@badeball/cypress-cucumber-preprocessor');

    Given('I open the zero bank homepage', () => {
        cy.visit('http://zero.webappsecurity.com/');  
    });  

    When('I type "online" into the searchbox', () => {
        cy.get('#searchTerm').type('online {enter}');
        cy.wait(1000);
    }); 

    Then('I should see results that contain the word "online"', () => {
        cy.get('h2').contains('Search Results:');
        cy.url().should('include', 'search.html');
        cy.get('ul li a').contains('Online').should('exist');
    });