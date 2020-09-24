/// <reference types="cypress"/>

describe('NopCommerce',function(){

    it('Search',function(){

        cy.visit('https://demo.nopcommerce.com/')
        cy.get("#small-searchterms").type("Macbook")
        cy.get(".search-box-button").click()
        cy.get("[value='Add to cart']").click()
        cy.title().should('be.visible').should('be.checked')

    })









})