import productListPage from "../pages/productListPage"
import productDetailsPage from "../pages/productDetailsPage"
import cartPage from "../pages/cartPage"
import checkoutPage from "../pages/checkoutPage"



const productList = new productListPage()
const productDetails = new productDetailsPage()
const cart = new cartPage()
const checkout = new checkoutPage()



beforeEach(function () {
  cy.visit('/')
  cy.writeProductDataIntoFixtureFile();
  cy.fixture("products").then((productData) => {
    this.products = productData;
  });

});

describe("Wallee Webshop Tests", () => {


  it("Should Successfully Sign Up for a Subscription", function () {
    productList.clickOnProductBtn(0)
    cy.url().should('eq', Cypress.config().baseUrl + 'cart')

  })

  it("Should Successfully Add a Product to cart then remove it", function () {
    productList.clickOnProductBtn(1)
    cy.url().should('eq', Cypress.config().baseUrl + 'cart')
    cart.elements.cartItems().its('length').then((count) => {
      cy.log(`Number of items in Cart: ${count}`)
    });
    cart.elements.itemName(0).invoke("text").then((name) => {
      expect(name.trim()).to.equal(this.products[1].name)
    })
    cart.elements.itemPrice(0).invoke("text").then((price) => {
      expect(price.match(/\d+\.*\d*/g)[0]).to.equal(this.products[1].price)
    })

    cart.elements.removeButton(0).click()
    cy.get('.return-to-shop').should('be.visible')
  })

  it("Should Successfully Place an Order for a Product", function () {
    productList.clickOnProductBtn(1)
    cy.url().should('eq', Cypress.config().baseUrl + 'cart')
    cart.elements.cartItems().its('length').then((count) => {
      cy.log(`Number of items in Cart: ${count}`)
    });
    cart.elements.itemName(0).invoke("text").then((name) => {
      expect(name.trim()).to.equal(this.products[1].name)
    })
    cart.elements.itemPrice(0).invoke("text").then((price) => {
      expect(price.match(/\d+\.*\d*/g)[0]).to.equal(this.products[1].price)
    })
    cart.elements.checkoutBtn().click()
    cy.TypeBuyerInfo()
    checkout.clickOnTermsCheckBx()
    checkout.clickOnPlaceOrderBtn()
    cy.get('.return-to-shop').should('be.visible')
  })

  it('Should Check all links in productListPage', () => {
    cy.checkAllLinks()
  })

  it('Should Check all links in productDetailsPage', () => {
    productList.elements.productImage(1).click()
    cy.checkAllLinks()
  })
})