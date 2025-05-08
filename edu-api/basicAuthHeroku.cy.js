describe('Login to Basic Auth Protected Page with POST', () => {
    it('should successfully load the page after basic auth', () => {
    
      cy.loginViaBasicAuth();
  
      cy.url().should('include', '/basic_auth');
      cy.get('div.example').should('contain', 'Congratulations! You must have the proper credentials.');
    });
  });
  