describe('No access Sign check', () => {
    it('Deny access to unauthenticated users ', () => {
      cy.visit('http://localhost:3000/welcomePage');
      cy.url().should('eq', 'http://localhost:3000/');
    })
})