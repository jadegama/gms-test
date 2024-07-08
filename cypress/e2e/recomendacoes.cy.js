/// <reference types="cypress"/>

const { it, interfaces } = require("mocha");

describe('US-012-Funcionalidade: Cadastro de membros', () => {
 beforeEach(() => {
  cy.visit('/')

 })})

 describe('US-015-Funcionalidade: Recomendações', () => {
    it('Deve mostrar as recomendações do dia', () => {
     cy.visit('http://127.0.0.1:8080/')
     cy.get('#recommendations-section')
     
    });

    it('Deve mostrar de 4 e 5 filmes listados', () => {
     cy.visit('http://127.0.0.1:8080/')
     cy.get('#recommendations-section')
     
    })
   
   })

 