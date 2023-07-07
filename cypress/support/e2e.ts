require('dotenv/config')
import 'cypress-mochawesome-reporter/register'
import './commands-ui'
import 'cypress-mochawesome-reporter/register'
Cypress.on('uncaught:exception', (_err, _runnable) => {
  // returning false here prevents Cypress from failing the test
  return false
})

import {Entity, ID} from '../helpers/interfaces'

declare global {
  namespace Cypress {
    interface Chainable {
      addBoard: Chainable<Element>
      //add your command here
      login: (email: string, password: string) => Cypress.Chainable<void>
      register: (email: string, password: string) => Cypress.Chainable<void>
      apiLogin: (email: string, password: string) => Cypress.Chainable<Response<Cypress>>
      apiLogout: () => Cypress.Chainable<Response<Cypress>>
      loginSession: (user: {email: string; password: string}) => Cypress.Chainable<void>
      cookieAuth: () => Cypress.Chainable<Cookie[]>
      registerUserApi: () => Cypress.Chainable<void>
      createItemApi: (entity: Entity) => Cypress.Chainable<any>
      createFewItemsApi: (entity: Entity, number: number) => Cypress.Chainable<void>
      createApi: (entity: Entity, testItem: any) => Cypress.Chainable<any>
      searchAllItemsApi: (entity: Entity) => Cypress.Chainable<any>
      getItemApi: (entity: Entity, itemId: ID) => Cypress.Chainable<any>
      deleteItemApi: (entity: Entity, itemId: ID) => Cypress.Chainable<void>
      deleteFewItemsApi: (entity: Entity, number: number) => Cypress.Chainable<void>
      deleteAllItemsApi: (entity: Entity) => Cypress.Chainable<void>
      createGql: (entity: Entity, item: any, itemSchema: string) => Cypress.Chainable<any>
      createItemGql: (entity: Entity) => Cypress.Chainable<any>
      createFewItemGql: (entity: Entity, number: number) => Cypress.Chainable<void>
      searchItemGql: (entity: Entity, text?: string) => Cypress.Chainable<any>
      getByIdItemGql: (entity: Entity, id: ID) => Cypress.Chainable<any>
      verifyUrl: (endpoint: string) => Cypress.Chainable<any>
      verifyValueOfFirstEl: (selector: string, text: string) => Cypress.Chainable<any>
      verifyTextOfEl: (selector: string, text: string) => Cypress.Chainable<any>
      verifyElementsExist: (selector: string[], text: string[]) => Cypress.Chainable<any>
      verifyHeader: (selector: string, text: string) => Cypress.Chainable<any>
      verifyEl: (selector: string) => Cypress.Chainable<any>
      verifyElDoesNotExist: (selector: string) => Cypress.Chainable<any>
      verifyValue: (selector: string, value: string) => Cypress.Chainable<any>
      verifyPaymentInTable: (selector: string, row: number, text: string) => Cypress.Chainable<any>
      verifyLengthOfInput: (selector: string, value: string) => Cypress.Chainable<any>
      verifyTextOfErrors: (errorSelector: object, errorMessages: object) => Cypress.Chainable<any>
      verifyCellFromSearchField: (
        index: number,
        selector: string,
        symbols: number,
        interceptSearch: object
      ) => Cypress.Chainable<any>
      clickOnButton: (buttonName: string) => Cypress.Chainable<void>
      clickOnElByName: (selector: string, text: string) => Cypress.Chainable<void>
      clickOnEl: (selector: string) => Cypress.Chainable<void>
      clickOnElByText: (selector: string, text: string) => Cypress.Chainable<void>
      clickOnText: (text: string) => Cypress.Chainable<void>
      inputText: (selector: string, text: string | number) => Cypress.Chainable<void>
      clickFromList: (selector: string) => Cypress.Chainable<void>
      clickOnDropdownEl: (selector: string, text: string) => Cypress.Chainable<void>
      clickOnDatePicker: (selector: string, date: string | number) => Cypress.Chainable<void>
      clickOnLastDropDownEl: (selector: string) => Cypress.Chainable<void>
      clearText: (selector: string) => Cypress.Chainable<void>
      typeSpecialCharSequence: (selector: string, sequence: string) => Cypress.Chainable<void>
      wrapJQueryThenFindEl: (JQuery: JQuery, element: string) => Cypress.Chainable<any>
      wrapJQueryThenContainsElWithText: (
        JQuery: JQuery,
        element: string,
        text: string
      ) => Cypress.Chainable<any>
      elWithTextAndFind: (
        selector1: string,
        text: string,
        selector2: string
      ) => Cypress.Chainable<any>
      clickOnFirstFromTheList: (selector: string) => Cypress.Chainable<void>
      typeAndClearField: (selector: string, text: string) => Cypress.Chainable<void>
      clickOnLastItem: (selector: string) => Cypress.Chainable<void>
      clickOnElBySiblings: (selector: string, siblings: string) => Cypress.Chainable<void>
      getElByTestid: (text: string) => Cypress.Chainable<void>
    }
  }
}
