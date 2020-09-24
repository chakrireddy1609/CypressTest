describe('Test Suite',function()
{

    it('TC1',function()
    {
 
        cy.visit('https://mojo2.joveo.com/clients')
        cy.title().should('eq','Mojo')

    })

    it('TC2',function()
    {
 
        cy.visit('https://mojo2.joveo.com/clients')
        cy.title().should('eq','Moo')

    })



})