/// <reference types="cypress"/>

describe('Hubspot',function(){

it('Hubspot TC1',function(){

    cy.visit('https://www.zoopla.co.uk/')
    cy.get('.ui-cookie-consent-choose__buttons > .ui-button-primary').click()
    cy.title().should('eq','Zoopla > Search Property to Buy, Rent, House Prices, Estate Agents')
    cy.get('.search-input-location-placeholder-1').type('Hyderabad')
    cy.get('#forsale_price_min').select('£40,000')
    cy.get('#forsale_price_max').select('£125,000')
    cy.get('.search-attributes-col > span > #property_type').select('Flats')
    cy.get('#beds_min').select('4+')
    cy.get('#search-submit').click()
      })

})

