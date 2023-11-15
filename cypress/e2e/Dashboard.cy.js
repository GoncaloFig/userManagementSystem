describe('Dashboard test', () => {
  it('Dashboard title checked', () => {
    //const apiUrl = 'https://reqres.in/api/register';
    cy.visit('http://localhost:3000');
    cy.get('[data-emailfield="email"]').type('michael.lawson@reqres.in');
    cy.get('[data-passwordfield="passwordfield"]').type('password123@');
    cy.get('[data-confpasswordfield="confpasswordfield"]').type('password123@');
    cy.get('[data-signupbtn="signupbtn"]').click()
    cy.wait(2000);
    cy.get('[data-btndashboard="goToDashboard"]').click()
    

    // cy.request('POST', apiUrl, {
    //   email: 'michael.lawson@reqres.in',
    //   password: '12345',
    // }).then((response) => {
    //   window.localStorage.setItem('userToken', response.token);
    //   window.localStorage.setItem('userId', response.id);
      //cy.wait(500);

      //Checks dashboard title
      cy.get('[data-testDashTitle]').should('contain', 'Dashboard');
    });
});