describe('PokeAPI - Abilities Check', () => {
  it('should verify the first ability details of Ditto', () => {
    cy.request('https://pokeapi.co/api/v2/pokemon/ditto').then((response) => {
      const body = response.body;

      expect(body.abilities).to.be.an('array').and.to.have.length.greaterThan(0);

      const ability = body.abilities[0];

      expect(ability.ability.name).to.eq('limber');

      expect(ability.ability.url).to.eq('https://pokeapi.co/api/v2/ability/7/');

      expect(ability.is_hidden).to.be.false;

      expect(ability.slot).to.eq(1);
    });
  });
});
