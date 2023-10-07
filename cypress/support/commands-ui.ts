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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('clickOnButton', buttonName => {
  cy.contains('button', buttonName).then(btn => {
    cy.wrap(btn).click({force: true})
  })
})
Cypress.Commands.add('verifyTextOfEl', (selector, text) => {
  cy.get(selector).should('be.visible').and('contain.text', text)
})
Cypress.Commands.add('inputText', (selector, text) => {
  cy.get(selector).should('be.visible').clear().type(text.toString())
})
Cypress.Commands.add('clickOnElByName', (selector, text) => {
  cy.get(selector).contains(text).should('be.visible').click({force: true})
})
//
Cypress.Commands.add('clickOnEl', selector => {
  cy.get(selector)
    .should('be.visible')
    .then(el => {
      cy.wrap(el).click({force: true})
    })
})
Cypress.Commands.add('inputText', (selector, text) => {
  cy.get(selector).should('be.visible').clear().type(text.toString())
})
Cypress.Commands.add('verifyEl', selector => {
  cy.get(selector).should('be.visible')
})
Cypress.Commands.add('checkFirstCheckBox', selector => {
  cy.get(selector).first().check()
})
Cypress.Commands.add('selectElFromDropMenu', (selector1, selector2, value, text) => {
  cy.get(selector1).find(selector2).select(value).contains(text)
})
Cypress.Commands.add('verifyValue', (selector, value) => {
  cy.get(selector).should('have.value', value)
})
Cypress.Commands.add('handlePopUpWindow', selector => {
  cy.window().then(win => {
    cy.wrap(win).as('popupWindow')
  })
  cy.get('@popupWindow').then(popup => {
    cy.wrap(popup['document']).find(selector).click()
  })
})
Cypress.Commands.add('selectDomEl', (selector, row, text) => {
  cy.get(selector).eq(row).should('have.text', text)
})
