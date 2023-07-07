import {buttons} from '../helpers/names'
import {mainPage} from '../helpers/selectors'
import {dentist, endpoints} from "../helpers/testData";

describe('Login', () => {
  beforeEach('', () => {
    cy.visit('/')
    top.window
    cy.get('body').contains('Accept').click({force: true})
  })
  it('Login with valid credentials', () => {
    cy.contains(mainPage.selA, buttons.officeLogin).then(btn => {
      cy.wrap(btn).click({force: true})
    })
    // cy.get(mainPage.email).type('snehoda@gmail.com')
    // cy.get(mainPage.password).type('merdoc1981')
    cy.inputText(mainPage.email, 'snehoda@gmail.com')
    cy.inputText(mainPage.password, 'merdoc1981')
    cy.clickOnButton(buttons.signIn)
    cy.clickOnButton(buttons.ok)
    cy.verifyTextOfEl(mainPage.selH1, buttons.generalInfo)
    cy.verifyUrl(endpoints.registration)
    cy.verifyValueOfFirstEl(mainPage.firstName, dentist.firstName)
    cy.verifyValueOfFirstEl(mainPage.lastName, dentist.lastName)
    // cy.get(mainPage.firstName).first().should('be.visible').and('contain.value', 'Ivan')
    // cy.get(mainPage.lastName).first().should('be.visible').and('contain.value', 'Polubotko')
  })
})
