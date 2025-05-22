describe('Validate ability name from PokeAPI', () => {
  it('should have "limber" as the first ability name for Ditto', () => {
    cy.request('https://pokeapi.co/api/v2/pokemon/ditto').then((response) => {

      expect(response.status).to.eq(200);

      expect(response.body.abilities[0].ability.name).to.eq('limber');
      expect(response.body.abilities[0].ability.url).to.eq('https://pokeapi.co/api/v2/ability/7/');
    });
  });
});
