import productListPage from "../pages/productListPage"
import productDetailsPage from "../pages/productDetailsPage"
import cartPage from "../pages/cartPage"



const plp = new productListPage()
const pdp = new productDetailsPage()
const cp = new cartPage()


beforeEach(function () {
  cy.visit('/')
  cy.writeProductDataIntoFixtureFile();
  cy.fixture("products").then((productData) => {
    this.products = productData;
  });

});

describe("Wallee Webshop Tests", () => {

  it('End-to-end flow for a web shop.', () => {
    plp.elements.products().then(($elements) => {
      const numberOfMatchingElements = $elements.length
      cy.log(`Number of elements with ID 'yourId': ${numberOfMatchingElements}`)
    })

    plp.elements.productItem(1).find('div[data-block-name="woocommerce/product-image"] img').invoke("attr", "src").then((srcValue) => {
      cy.log(srcValue)
    })
    let price = null
    plp.elements.productItem(0).find('[data-block-name="woocommerce/product-price"]').invoke("text").then((price) => {
      cy.log(price)
    })
    plp.elements.productItem(0).find('a').eq(1).invoke("text").then((name) => {
      cy.log(name)
    })

  })


  it("Should Successfully Sign Up for a Subscription", function () {
    plp.clickOnProductBtn(0)
    cy.url().should('eq', Cypress.config().baseUrl + 'cart')

  })

  it("Should Successfully Place an Order for a Product", function () {
    plp.clickOnProductBtn(1)
    cy.url().should('eq', Cypress.config().baseUrl + 'cart')
    cp.elements.cartItems().its('length').then((count) => {
      cy.log(`Number of items in Cart: ${count}`)
    });
    cp.elements.itemName(0).invoke("text").then((name) => {
      expect(name.trim()).to.equal(this.products[1].name)
    })
    cp.elements.itemPrice(0).invoke("text").then((price) => {
      expect(price.match(/\d+\.*\d*/g)[0]).to.equal(this.products[1].price)
    })

    cp.elements.removeButton(0).click()
    cy.get('.return-to-shop').should('be.visible')
    cp.elements.itemPrice(0).should('be.visible')
  })

  it('Should Check all links in productListPage', () => {
    cy.checkAllLinks()
  })

  it('Should Check all links in productDetailsPage', () => {
    plp.elements.productImage(1).click()
    cy.checkAllLinks()
  })
})