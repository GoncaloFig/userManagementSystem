describe('List all users from API', () => {
  it('fetches all users successfully', () => {
    cy.visit('http://localhost:3000/dashboard');
    cy.intercept('GET', 'https://reqres.in/api/users?page=1').as('getAllUsers');
    cy.wait('@getAllUsers').then((intercept) => {
      expect(intercept.response.statusCode).to.equal(200);
      expect(intercept.response.body).to.have.property('page');
      expect(intercept.response.body).to.have.property('per_page');
      expect(intercept.response.body).to.have.property('total');
      expect(intercept.response.body).to.have.property('total_pages');
      expect(intercept.response.body).to.have.property('data');
    })
  })
  
  it('display just 6 users per page', () => {
    cy.visit('http://localhost:3000/dashboard');
    cy.get('[data-testUsersTable] tr').should('have.length', 7);
  })

  // it('creates a new user successfully', () => {
  //   cy.visit('http://localhost:3000/dashboard');
  //   cy.get('[data-testUsersTable] tr').should('have.length', 7);
  // })
})