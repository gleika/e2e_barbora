// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import 'cypress-wait-until';

Cypress.Commands.add('precond', () => {
    cy.visit('https://pagrindinis.barbora.lt/')
    cy.get('.b-select-lang--input').select('1595dc26-9ecc-4c7d-b26e-badffc19c6b5')
    cy.get('.b-select-lang--input').should('have.value', '1595dc26-9ecc-4c7d-b26e-badffc19c6b5')
    cy.wait(250)
})

Cypress.Commands.add('precondlogin', () => {
    cy.visit('https://pagrindinis.barbora.lt/')
    cy.get('.b-select-lang--input').select('1595dc26-9ecc-4c7d-b26e-badffc19c6b5')
    cy.get('.b-select-lang--input').should('have.value', '1595dc26-9ecc-4c7d-b26e-badffc19c6b5')
    cy.wait(250)
    cy.get('.b-login-register--login').click()
    cy.get('#b-login-email').clear()
    cy.get('#b-login-email').type('vard.pavard@gmail.com')
    cy.get('#b-login-password').clear()
    cy.get('#b-login-password').type('Password987')
    cy.get('.b-login-form--login-button').click()
    cy.wait(500)
    cy.get('.modal-content').find('.close').click()
})
