describe('Welcome page test', () => {
  it('Welcome title checked and dark mode activate', () => {
    //const apiUrl = 'https://reqres.in/api/register';
    cy.visit('http://localhost:3000');
    cy.get('[data-emailfield="email"]').type('michael.lawson@reqres.in');
    cy.get('[data-passwordfield="passwordfield"]').type('password123@');
    cy.get('[data-confpasswordfield="confpasswordfield"]').type('password123@');
    cy.get('[data-signupbtn="signupbtn"]').click()

    // cy.request('POST', apiUrl, {
    //   email: 'michael.lawson@reqres.in',
    //   password: '12345',
    // }).then((response) => {
    //   window.localStorage.setItem('userToken', response.token);
    //   window.localStorage.setItem('userId', response.id);
    //   cy.visit('http://localhost:3000/welcomePage');
    //   cy.get('[data-testWelcomeTitle]').should('contain', 'Welcome');
    //   cy.wait(1000);

      //checks welcome page tittle
      cy.get('[data-testWelcomeTitle]').should('contain', 'Welcome');
      
      //Check dark mode switch
      cy.get('[data-switch="darkModeSwitch"]').should('exist').click();
      cy.get('.App').should('have.css', 'background-color', 'rgb(24, 25, 26)');
    });
  });