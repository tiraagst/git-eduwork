describe('Pay bills', () => {
    beforeEach(() => {
        cy.visit('http://zero.webappsecurity.com/login.html', { timeout: 10000 });
        cy.fixture("user-bank").then(user => {
            cy.get('#user_login').clear().type(user.username);
            cy.get('#user_password').clear().type(user.password);
            cy.get('input[name="submit"]').click();
        });
    });

    it("should complete a bill payment", () => {
        cy.payBill('Sprint', '500', '2025-04-07', 'Monthly subscription');
    });

});
