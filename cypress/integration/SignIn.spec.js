describe('SignIn test', function() {
    beforeEach(() => {
        cy.fixture('users').as('users');
    });
    it('Get an element', function() {
        cy.visit('/');
        cy.contains('Registrarse').click();
        cy.url()
            .should('include', '/signin');
        cy.get('#name')
            .type(this.users.notExisting.name)
            .should('have.value', this.users.notExisting.name);
        cy.get('#email')
            .type(this.users.notExisting.email)
            .should('have.value', this.users.notExisting.email);
        cy.get('#password')
            .type(this.users.notExisting.password)
            .should('have.value', this.users.notExisting.password);
        cy.get('#verify')
            .type(this.users.notExisting.verify)
            .should('have.value', this.users.notExisting.verify);
        cy.get('form').submit();
    });
});