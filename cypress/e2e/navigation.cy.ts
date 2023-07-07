import {validData} from '../helpers/testData'
import {buttons} from '../helpers/names'
import {mainPage} from '../helpers/selectors'

describe('Login', () => {
  beforeEach('', () => {
    cy.visit('/')
    top.window
    cy.get('body').contains('Accept').click({force: true})
  })
  it('Login with valid credentials', () => {
    cy.contains(mainPage.selA, buttons.officeLogin).then(btn => {
      cy.wrap(btn).click({force: true})
      cy.get(mainPage.email).type(validData.email)
      cy.get(mainPage.password).type(validData.password)
      cy.contains(mainPage.button, buttons.signIn).then(btn => {
        cy.wrap(btn).click({force: true})
      })
      cy.get(mainPage.alert).contains(buttons.ok).click({force: true})
      cy.get(mainPage.selH1).should('be.visible').contains(buttons.generalInfo)
      cy.get(mainPage.firstName).first().should('be.visible').and('contain.value', 'Ivan')
      cy.get(mainPage.lastName).first().should('be.visible').and('contain.value', 'Polubotko')
    })
  })
})
