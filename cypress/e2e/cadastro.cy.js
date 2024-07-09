/// <reference types="cypress"/>

const { it, interfaces } = require("mocha");

describe('US-012-Funcionalidade: Cadastro de membros', () => {
 beforeEach(() => {
  cy.visit('/')

 });
 
 afterEach(() => {
  cy.screenshot ()
});

  it('Deve fazer o cadastro de campos obrigatórios', () => {
    
    var email = `jade${Date.now()}@teste.com`
    cy.PreencherCadastro('Jade', 'Gama', email, '145816511', 'Teste@12345')
    cy.get('#signup-response').should('contain' , 'Cadastro realizado com sucesso!')
  });

  it('Deve fazer o cadastro de campos obrigatórios, observando se o nome não está vazio', () => {
    var email = `jade${Date.now()}@teste.com`

    cy.get ('#signup-firstname').type (" ")
    cy.get('#signup-lastname').type ("AD")
    cy.get('#signup-email').type (email)
    cy.get('#signup-phone').type ("25845692")
    cy.get('#signup-password').type ("Teste!2020")
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain' , 'Cadastro realizado com sucesso!')
});

it('Deve validar mensagem de erro com o nome campo inválido', () => {
  cy.PreencherCadastro('Jade20', 'Gama', 'jade@test.com', '145816511', 'Teste@12345')
  cy.get('#signup-response').should('contain', 'Nome deve conter apenas caracteres alfabéticos, acentuados e espaços')

})
})








