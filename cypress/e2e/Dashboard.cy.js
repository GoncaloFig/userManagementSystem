describe('Dashboard test', () => {
  it('Dashboard title checked', () => {
    //const apiUrl = 'https://reqres.in/api/register';
    cy.visit('http://localhost:3000');
    cy.get('[data-gotosignin="goToSignIn"]').click()
    cy.get('[data-signinmailtxt="signInEmail"]').type('admin@admin.com');
    cy.get('[data-signinmailpass="signInPass"]').type('admin');
    cy.wait(500);
    cy.get('[data-signinbtn="signInbtn"]').click()
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