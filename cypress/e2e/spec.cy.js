/// <reference types="cypress"/>

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  it('Deve fazer o cadastro de campos obrigatórios', () => {

    cy.visit('http://127.0.0.1:8080/')
    cy.get ('#signup-firstname').type ("D")
    cy.get('#signup-lastname').type ("AD")
    cy.get('#signup-email').type ("dtested3@teste.com")
    cy.get('#signup-phone').type ("25845692")
    cy.get('#signup-password').type ("Teste!2020")
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain' , 'Cadastro realizado com sucesso!')
  })
})

