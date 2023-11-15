describe('List all users from API', () => {
  it('Fetches all users successfully and show 6 per page', () => {
    

    const apiUrl = 'https://reqres.in/api/login';
      //cy.get('input[data-emailField="email"]').should('exist').type('test@example.com');
  
    // cy.request('POST', apiUrl, {
    //   email: 'admin@admin.com',
    //   password: 'admin',
    // }).then((response) => {
    //   window.localStorage.setItem('userToken', 'adminToken1234');
    //   //window.localStorage.setItem('userId', response.id);
    //   cy.wait(500);
    //   cy.visit('http://localhost:3000/welcomePage');
    //   cy.wait(500)
    //   cy.visit('http://localhost:3000/dashboard');
    //   cy.wait(500)
    // });

    cy.visit('http://localhost:3000');
    cy.get('[data-gotosignin="goToSignIn"]').click()
    cy.get('[data-signinmailtxt="signInEmail"]').type('admin@admin.com');
    cy.get('[data-signinmailpass="signInPass"]').type('admin');
    cy.wait(500);
    cy.get('[data-signinbtn="signInbtn"]').click()
    cy.wait(2000);
    cy.get('[data-btndashboard="goToDashboard"]').click();

    //cy.intercept('GET', 'https://reqres.in/api/users?page=1').as('getAllUsers');
    // cy.wait('@getAllUsers')  // Increase the timeout for debugging
    // .then((intercept) => {
    //   cy.log('Intercepted response:', intercept);
    //   expect(intercept.response.statusCode).to.equal(200);
    //   expect(intercept.response.body).to.have.property('page');
    //   expect(intercept.response.body).to.have.property('per_page');
    //   expect(intercept.response.body).to.have.property('total');
    //   expect(intercept.response.body).to.have.property('total_pages');
    //   expect(intercept.response.body).to.have.property('data');
    // });

    //Checks 6 users per page
    cy.get('[data-testUsersTable] tbody tr').should('have.length', 6);

  })
  
})