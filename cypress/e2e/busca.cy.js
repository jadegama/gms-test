/// <reference types="cypress"/>

const { it, interfaces, after } = require("mocha");

describe('US-001-Funcionalidade: Busca de filmes com palavra-chave valida', () => {
    beforeEach(() => {
     cy.visit('/')
   
    });
    
    afterEach(() => {
        cy.screenshot ()
    });

    it('Deve retornar com sucesso um filme com a busca', () => {
      cy.get('#search-input').type ("matrix")
      cy.get('#search-button').click()
      cy.get('#results-section').should ('contain', 'Matrix')
    });

    it('Deve buscar filme com sucesso de uma lista', () => {
        cy.fixture('filmes').then((filmes) => {
            cy.get('#search-input').type (filmes[2].titulo)
            cy.get('#search-button').click()
            cy.get('#results-section').should ('contain', filmes[2].titulo)

        })

    });

    it('Deve buscar filme com sucesso de uma lista inteira', () => {
        cy.fixture('filmes').each((filmes) => {
            cy.get('#search-input').clear().type (filmes.titulo)
            cy.get('#search-button').click()
            cy.get('#results-section').should ('contain', filmes.titulo)

        })
    });

    it('Deve dar erro na busca por um filme que não está cadastrado', () => {
      cy.get('#search-input').type ("meu malvado favorito")
      cy.get('#search-button').click()
      cy.get('#results-section > p').should('contain' , 'Filme não encontrado') 
   })

    it('Deve limpar a barra de busca quando o usuario solicitar', () => {
     cy.get('#search-input').type ("matrix")
     cy.get('#clear-button').click ()
  })

  it('Mostrar as informações básicas da resposta da busca do usuário', () => {
    cy.get('#search-input').type ("matrix")
    cy.get('#results-section')
   })

   it('Deve ter uma rolagem infinita', () => {
    cy.get('#search-input').type ("matrix")
    cy.get('#results-section')
    
   })
  })