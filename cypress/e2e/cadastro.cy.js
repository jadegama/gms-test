/// <reference types="cypress"/>

const { it, interfaces } = require("mocha");

describe('US-012-Funcionalidade: Cadastro de membros', () => {
 beforeEach(() => {
  cy.visit('/')

 });
 
 
  it('Deve fazer o cadastro de campos obrigatórios', () => {
    
    var email = `jade${Date.now()}@teste.com`
    cy.PreencherCadastro('Jade', 'Gama', email, '145816511', 'Teste@12345')
    cy.get('#signup-response').should('contain' , 'Cadastro realizado com sucesso!')
  })

  it('Deve fazer o cadastro de campos obrigatórios, observando se o nome não está vazio', () => {
    var email = `jade${Date.now()}@teste.com`

    cy.visit('http://127.0.0.1:8080/')
    cy.get ('#signup-firstname').type (" ")
    cy.get('#signup-lastname').type ("AD")
    cy.get('#signup-email').type (email)
    cy.get('#signup-phone').type ("25845692")
    cy.get('#signup-password').type ("Teste!2020")
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain' , 'Cadastro realizado com sucesso!')
})

it('Deve validar mensagem de erro com o nome campo inválido', () => {
  cy.PreencherCadastro('Jade20', 'Gama', 'jade@test.com', '145816511', 'Teste@12345')
  cy.get('#signup-response').should('contain', 'Nome deve conter apenas caracteres alfabéticos, acentuados e espaços')

})
})
describe('US-001-Funcionalidade: Busca de filmes com palavra-chave valida', () => {
  it('Deve retornar um filme com a busca', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#search-input').type ("matrix")
    cy.get('#search-button').click()
    cy.get('#results-section')
  })
  it('Deve dar erro na busca por um filme que não está cadastrado', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#search-input').type ("meu malvado favorito")
    cy.get('#search-button').click()
    cy.get('#results-section > p').should('contain' , 'Filme não encontrado') 
})
  it('Deve limpar a barra de busca quando o usuario solicitar', () => {
   cy.visit('http://127.0.0.1:8080/')
   cy.get('#search-input').type ("matrix")
   cy.get('#clear-button').click ()
})
it('Mostrar as informações básicas da resposta da busca do usuário', () => {
  cy.visit('http://127.0.0.1:8080/')
  cy.get('#search-input').type ("matrix")
  cy.get('#results-section')

 })
 it('Deve ter uma rolagem infinita', () => {
  cy.visit('http://127.0.0.1:8080/')
  cy.get('#search-input').type ("matrix")
  cy.get('#results-section')
  
 })
})

describe('US-015-Funcionalidade: Recomendações', () => {
 it('Deve mostrar as recomendações do dia', () => {
  cy.visit('http://127.0.0.1:8080/')
  cy.get('#recommendations-section')
  
 })
 it('Deve mostrar de 4 e 5 filmes listados', () => {
  cy.visit('http://127.0.0.1:8080/')
  cy.get('#recommendations-section')
  
 })


})






