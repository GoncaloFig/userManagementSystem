describe('List all users from API', () => {
  it('Fetches all users successfully and show 6 per page', () => {
    

    const apiUrl = 'https://reqres.in/api/register';
      //cy.get('input[data-emailField="email"]').should('exist').type('test@example.com');
  
    cy.request('POST', apiUrl, {
      email: 'michael.lawson@reqres.in',
      password: '12345',
    }).then((response) => {
      window.localStorage.setItem('userToken', response.token);
      window.localStorage.setItem('userId', response.id);
      //cy.wait(500);
      cy.visit('http://localhost:3000/welcomePage');
      cy.wait(500)
      cy.visit('http://localhost:3000/dashboard');
      //cy.wait(500)
    });
    
    cy.intercept('GET', 'https://reqres.in/api/users?page=1').as('getAllUsers');
    cy.wait('@getAllUsers').then((intercept) => {
      expect(intercept.response.statusCode).to.equal(200);
      expect(intercept.response.body).to.have.property('page');
      expect(intercept.response.body).to.have.property('per_page');
      expect(intercept.response.body).to.have.property('total');
      expect(intercept.response.body).to.have.property('total_pages');
      expect(intercept.response.body).to.have.property('data');
    })

    //Checks 6 users per page
    cy.get('[data-testUsersTable] tbody tr').should('have.length', 6);

  })
  
})