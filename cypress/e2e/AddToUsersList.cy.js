describe("Add new user test", () => {
    it("New user added to the list", () => {
        cy.visit('http://localhost:3000');
        cy.get('[data-emailfield="email"]').type('test@example.com');
    });
});
