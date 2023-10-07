require('dotenv/config')
import 'cypress-mochawesome-reporter/register'
import './commands-ui'

declare global {
  namespace Cypress {
    interface Chainable {
      verifyTextOfEl: (selector: string, text: string) => Cypress.Chainable<any>
      clickOnButton: (buttonName: string) => Cypress.Chainable<void>
      clickOnElByName: (selector: string, text: string) => Cypress.Chainable<void>
      clickOnEl: (selector: string) => Cypress.Chainable<void>
      clickOnElByText: (selector: string, text: string) => Cypress.Chainable<void>
      clickOnText: (text: string) => Cypress.Chainable<void>
      inputText: (selector: string, text: string | number) => Cypress.Chainable<void>
      verifyEl: (selector: string) => Cypress.Chainable<any>
      checkFirstCheckBox: (selector: string) => Cypress.Chainable<any>
      selectElFromDropMenu: (
        selector1: string,
        selector2: string,
        value: string,
        text: string
      ) => Cypress.Chainable<any>
      verifyValue: (selector: string, value: string) => Cypress.Chainable<any>
      handlePopUpWindow: (selector: string) => Cypress.Chainable<any>
      checkValues: (selector: string, text: string) => Cypress.Chainable<void>
      selectDomEl: (selector: string, row: number, text: string) => Cypress.Chainable<any>
    }
  }
}
