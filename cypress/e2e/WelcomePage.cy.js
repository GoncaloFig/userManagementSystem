
describe('template spec', () => {
  it('Welcome title checked', () => {
    cy.visit('http://localhost:3000/welcomePage');
    cy.get('[data-testWelcomeTitle]').should('contain', 'Welcome');
  })

  it('Go to Dashboard', () => {
    cy.visit('http://localhost:3000/welcomePage');
    cy.get('[data-btnDashboard="goToDashboard"]').click();
    cy.url().should('include', '/dashboard');
    cy.get('[data-testDashTitle]').should('contain', 'Dashboard');
  })
})