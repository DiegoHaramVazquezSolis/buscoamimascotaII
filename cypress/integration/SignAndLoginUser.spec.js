describe('SignIn and then Login user test', function() {
    beforeEach(() => {
        cy.fixture('users').as('users');
    });
    it('Get an element', function() {
        cy.visit('/');
        cy.contains('Registrarse').click();
        cy.url()
            .should('include', '/signin');
        cy.get('#name')
            .type(this.users.newUser.name)
            .should('have.value', this.users.newUser.name);
        cy.get('#email')
            .type(this.users.newUser.email)
            .should('have.value', this.users.newUser.email);
        cy.get('#password')
            .type(this.users.newUser.password)
            .should('have.value', this.users.newUser.password);
        cy.get('#verify')
            .type(this.users.newUser.verify)
            .should('have.value', this.users.newUser.verify);
        cy.get('form').submit();
        cy.contains('Iniciar sesión').click();
        cy.url()
            .should('include', '/login');
        cy.get('#email')
            .type(this.users.newUser.email)
            .should('have.value', this.users.newUser.email);
        cy.get('#password')
            .type(this.users.newUser.password)
            .should('have.value', this.users.newUser.password);
        cy.get('form').submit();
    });
});