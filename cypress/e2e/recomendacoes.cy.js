/// <reference types="cypress"/>

const { it, interfaces } = require("mocha");

describe('US-015-Funcionalidade: Recomendações', () => {
 beforeEach(() => {
  cy.visit('/')

 })})

 afterEach(() => {
   cy.screenshot ()
});

 describe('US-015-Funcionalidade: Recomendações', () => {
    it('Deve mostrar as recomendações do dia', () => {
     cy.visit('#recommendations-section')
     cy.get('#recommendations-section > h2')
     
    });

    it('Deve mostrar de 4 e 5 filmes listados', () => {
     cy.visit('#recommendations-section')
     cy.get('#recommendations-section > h2')
    })
   
   })

 