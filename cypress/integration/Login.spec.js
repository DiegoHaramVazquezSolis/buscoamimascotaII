describe('Login test', function() {
    beforeEach(() => {
        cy.fixture('users').as('users');
    });
    it('Get an element', function() {
        cy.visit('/');
        cy.contains('Iniciar sesión').click();
        cy.location('pathname')
            .should('eq', '/login');
        cy.get('#email')
            .type(this.users.notExisting.email)
            .should('have.value', this.users.notExisting.email);
        cy.get('#password')
            .type(this.users.notExisting.password)
            .should('have.value', this.users.notExisting.password);
        cy.get('form').submit();
    });
});