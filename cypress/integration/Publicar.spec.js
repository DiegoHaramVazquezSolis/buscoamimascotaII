describe('Publicar test', function() {
    beforeEach(() => {
        cy.fixture('publicarData').as('publicar');
    });
    it('Get an element', function() {
        cy.visit('/publicar');

        cy.wait(1500);

        cy.get('#name')
            .type(this.publicar.newMascota.name)
            .should('have.value', this.publicar.newMascota.name);
        
        cy.get('#specie')
            .select(this.publicar.newMascota.specie)
            .should('have.value', this.publicar.newMascota.specie);
        
        cy.get('#sex').check(this.publicar.newMascota.sex, {force: true});

        cy.get('#description')
            .type(this.publicar.newMascota.description)
            .should('have.value', this.publicar.newMascota.description);
        
        cy.get('#lastSeen')
            .type(this.publicar.newMascota.date)
            .should('have.value', this.publicar.newMascota.date);
        cy.get('#haveId').check({force: true});
        
        this.publicar.newMascota.contact.map((contact, index) => {
            cy.get(`.${contact.type}-${index}`).click();
            cy.get(`#contact-${index}`)
                .type(contact.content)
                .should('have.value', contact.content);
            if (this.publicar.newMascota.contact.length - 1 !== index) {
                cy.contains('Agregar otro').click();
            }
        });
    });
});