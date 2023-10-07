import {
  formLocatorsMyCart,
  myCart,
  orderSummary,
  popUpWindows,
  productPage,
} from '../helper/selectors'
import {buttons, countryName, province} from '../helper/names'
import {myCartData, orderSummaryData, prices, skus, values, zip} from '../helper/testData'

describe('User flow', () => {
  beforeEach('Close pop-up window', () => {
    cy.visit('/')
    cy.handlePopUpWindow(popUpWindows.closeIcon)
  })
  it('Verify product SKU and price', () => {
    cy.verifyTextOfEl(productPage.sku28, skus.cun100)
    cy.verifyTextOfEl(productPage.priceValue, prices.price119_99)
  })
  it('Verify the Order Summery page displays valid data', () => {
    cy.clickOnButton(buttons.addToCard)
    cy.clickOnButton(buttons.goToCart)
    cy.verifyTextOfEl(productPage.productName, skus.cun100)
    cy.clickOnEl(productPage.estimateShipping)
    cy.selectElFromDropMenu(
      popUpWindows.mainWindow,
      popUpWindows.countries,
      values.value237,
      countryName.usa
    )
    cy.selectElFromDropMenu(
      popUpWindows.mainWindow,
      popUpWindows.province,
      values.value1683,
      province.florida
    )
    cy.inputText(popUpWindows.zip, zip.zip33331)
    cy.verifyEl(popUpWindows.estimateShippingRow)
    cy.clickOnButton(buttons.apply)
    for (const key in myCartData) {
      cy.verifyTextOfEl(formLocatorsMyCart[key], myCartData[key])
    }
    cy.checkFirstCheckBox(myCart.temOfService)
    cy.clickOnButton(buttons.checkOut)
    cy.clickOnButton(buttons.guestCheckOut)
    cy.selectDomEl(orderSummary.rows, 2, orderSummaryData.CartSubtotals)
    cy.selectDomEl(orderSummary.rows, 3, orderSummaryData.Shipping)
  })
})
