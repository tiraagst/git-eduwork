class SearchPage {
    visit() {
      cy.visit('http://zero.webappsecurity.com');
    }
  
    typeSearchKeyword(keyword) {
      cy.get('#searchTerm').type(`${keyword}{enter}`);
    }
  
    verifySearchResult(keyword) {
      cy.get('h2').should('contain.text', 'Search Results');
      cy.get('.top_offset').should('contain.text', keyword);
    }
  }
  
  export default new SearchPage();
  