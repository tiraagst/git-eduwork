// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('payBill', (payee, amount, date, description) => {
    cy.get('#pay_bills_tab').click();

    cy.get('#sp_payee').select(payee);
    cy.get('#sp_account').select('Checking');
    cy.get('#sp_amount').type(amount);
    cy.get('#sp_date').type(date);
    cy.get('[for="sp_description"]').click();
    cy.get('#sp_description').type(description);
    cy.get('#pay_saved_payees').click();

    cy.get('#alert_content')
      .should('be.visible')
      .and('contain', 'The payment was successfully submitted.');
});
