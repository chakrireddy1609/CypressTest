/// <reference types="cypress"/>

describe('Demo1',function(){

    it('flow',function(){

        cy.visit('http://demo.automationtesting.in/Register.html')
        cy.get('#basicBootstrapForm > div:nth-child(1) > div:nth-child(2) > input').click().type('Chakri')
        cy.get('#basicBootstrapForm > div:nth-child(1) > div:nth-child(3) > input').type('Reddy')
        cy.get('[type=email]').type('abc@gmail.com')
        cy.get('[type=tel]').type('123456789')
        cy.get('[value=Male]').check().should('be.checked')
        cy.get('#checkbox1').check().should('be.checked')
        cy.get('#checkbox2').check().should('be.checked')
        cy.get('#msdd').click()
        cy.get('.ui-corner-all').contains('Romanian').click()
        cy.get('.ui-corner-all').contains('Thai').click()
        cy.get('[role=combobox]').click({force:true})
        cy.get('.select2-search__field').type('Ind')
        cy.get('.select2-search__field').type('{enter}')
        cy.get('#Skills').select('Python').should('have.value','Python')
        cy.get('#countries').select('India')
        cy.get('#yearbox').select('1989')
        cy.get('#basicBootstrapForm > div:nth-child(11) > div:nth-child(3) > select').select('September')
        cy.get('#daybox').select('16')
        cy.focused().should('have.class','to-do')

    })

})