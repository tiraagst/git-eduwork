it('Add a new user', () => {
    var user = {
        "name": "Tira Gustina",
        "job": 'Test Engineer'
    }

    cy.request('POST', 'https://reqres.in/api/users', user).then((response) => {
        expect(response.status).equal(201)

        expect(response.body).to.have.property('name', 'Tira Gustina');
        expect(response.body).to.have.property('job', 'Test Engineer');
    });
});