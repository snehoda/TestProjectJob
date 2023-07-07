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

// Cypress.Commands.add('login', (email: string, password: string) => {
//   cy.visit('/')
//   cy.contains('a', 'Office Login').then(btn => {
//     cy.wrap(btn).click({force: true})
//     // cy.url().should('include', '')
//     cy.get('[type="text"]').should('be.visible').type(email)
//     cy.get('[type="password"]').should('be.visible').type(password)
//     cy.get('button')
//         .contains('Sign In')
//         .should('be.enabled')
//         .click({ force: true })
//   })

Cypress.Commands.add('verifyUrl', (endpoint) => {
  cy.url().should('include', endpoint)
})

Cypress.Commands.add('verifyValueOfFirstEl', (selector, text) => {
  cy.get(selector).first().should('be.visible').and('contain.value', text)
})

Cypress.Commands.add('verifyTextOfEl', (selector, text) => {
  cy.get(selector).should('be.visible').and('contain.text', text)
})
Cypress.Commands.add('inputText', (selector, text) => {
  cy.get(selector).should('be.visible').clear().type(text.toString())
})
//
// Cypress.Commands.add('verifyElementsExist', (selector: string[], text: string[]) => {
//   for (let i = 0; i < text.length; i++) {
//     cy.get(selector[i]).should('exist').and('contain.text', text[i])
//   }
// })
//
// Cypress.Commands.add('verifyHeader', (selector, text) => {
//   cy.get(selector).contains(text).should('be.visible')
// })
//
// Cypress.Commands.add('verifyEl', (selector) => {
//   cy.get(selector).should('be.visible')
// })
//
// Cypress.Commands.add('verifyElDoesNotExist', (selector) => {
//   cy.get(selector).should('not.exist')
// })
//
// Cypress.Commands.add('verifyValue', (selector, value) => {
//   cy.get(selector).should('have.value', value)
// })
//
// Cypress.Commands.add('verifyPaymentInTable', (selector, row, text) => {
//   cy.get(selector).eq(row).should('have.text', text)
// })
//
// Cypress.Commands.add('verifyLengthOfInput', (selector, value) => {
//   cy.get(selector).invoke('attr', 'maxlength').should('eq', value)
// })
//
// Cypress.Commands.add('verifyTextOfErrors', (errorSelector, errorMessages) => {
//   for (const key in errorMessages) {
//     cy.verifyTextOfEl(errorSelector[key], errorMessages[key])
//   }
// })
//
// Cypress.Commands.add('clickOnElByName', (selector, text) => {
//   cy.get(selector).contains(text).should('be.visible').click({ force: true })
// })
//
// Cypress.Commands.add('clickOnEl', (selector) => {
//   cy.get(selector)
//       .should('be.visible')
//       .then((el) => {
//         cy.wrap(el).click({ force: true })
//       })
// })
//
// Cypress.Commands.add('clickOnElByText', (selector, text) => {
//   cy.get(selector).contains(text).click()
// })
//
// Cypress.Commands.add('clickOnText', (text) => {
//   cy.contains(text).should('be.visible').click()
// })
//
Cypress.Commands.add('inputText', (selector, text) => {
  cy.get(selector).should('be.visible').clear().type(text.toString())
})
//
// Cypress.Commands.add('clickFromList', (selector) => {
//   cy.get(selector).then((list) => {
//     const n = list.length
//     const i = Cypress._.random(0, n - 1)
//     cy.get(selector).should('be.visible').eq(i).click({ force: true })
//   })
// })
//
// Cypress.Commands.add('clickOnDropdownEl', (selector, text) => {
//   cy.get(selector).contains(text).scrollIntoView().click({ force: true })
// })
//
// Cypress.Commands.add('clickOnLastDropDownEl', (selector) => {
//   cy.get(selector).scrollIntoView().click({ force: true })
// })
//
// Cypress.Commands.add('clickOnDatePicker', (selector, date) => {
//   cy.get(selector).contains(date).click({ force: true })
// })
//
// Cypress.Commands.add('clearText', (selector) => {
//   cy.get(selector).should('be.visible').clear()
// })
//
// Cypress.Commands.add('typeSpecialCharSequence', (selector, sequence) => {
//   cy.get(selector).should('be.visible').type(sequence)
// })
//
// Cypress.Commands.add('wrapJQueryThenFindEl', (JQuery, element) => {
//   return cy.wrap(JQuery).find(element)
// })
//
// Cypress.Commands.add('elWithTextAndFind', (selector1, text, selector2) => {
//   return cy.contains(selector1, text).find(selector2)
// })
//
// Cypress.Commands.add('clickOnFirstFromTheList', (selector) => {
//   cy.get(selector).first().click()
// })
//
// Cypress.Commands.add('typeAndClearField', (selector, text) => {
//   cy.get(selector).should('be.visible').type(text).clear()
// })
//
// Cypress.Commands.add('clickOnLastItem', (selector) => {
//   cy.get(selector).last().click()
// })
//
// Cypress.Commands.add('clickOnElBySiblings', (selector, siblings) => {
//   cy.get(selector).siblings(siblings).click()
// })
//
// Cypress.Commands.add('getElByTestid', (textDataId) => {
//   cy.get(`[data-testid="${textDataId}"]`)
//       .should('be.visible')
//       .click({ force: true })
// })
