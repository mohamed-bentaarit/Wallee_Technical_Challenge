import ProductListPage from "../pages/ProductListPage"
import ProductDetailsPage from "../pages/ProductDetailsPage"


const plp = new ProductListPage()
const pdp = new ProductDetailsPage()

beforeEach(function () {
  cy.visit('/')


});

describe("Wallee Webshop Tests", () => {

  it('Create products fixture file', () => {
    cy.writeProductDataIntoFixtureFile()
  })

  it('End-to-end flow for a web shop.', () => {
    plp.elements.products().then(($elements) => {
      const numberOfMatchingElements = $elements.length
      cy.log(`Number of elements with ID 'yourId': ${numberOfMatchingElements}`)
    })

    plp.elements.productItemDiv(1).find('div[data-block-name="woocommerce/product-image"] img').invoke("attr", "src").then((srcValue) => {
      cy.log(srcValue)
    })
    let price = null
    plp.elements.productItemDiv(0).find('[data-block-name="woocommerce/product-price"]').invoke("text").then((price) => {
      cy.log(price)
    })
    plp.elements.productItemDiv(0).find('a').eq(1).invoke("text").then((name) => {
      cy.log(name)
    })

  })


  it("User can successfully sign-up for a subscription", function () {
    plp.clickOnProductBtn(0)

  })

  it("User can successfully place an order of a product", function () {
    plp.clickOnProductBtn(0)

  })


  it('Check all links returning status ok in plp', () => {
    let linksTested = 0
    cy.get('a').each(link => {
      if (link.prop('href')) {
        linksTested++
        cy.log(`Link ${link.text()} has href attribute: ${link.prop('href')}`)
        cy.request({
          url: link.prop('href')
        }).should(({ status }) => {
          if (status === 200 || status === 400) {
            expect(status).to.eq(200)
          } else {
            expect(status).to.eq(400)
          }
          expect(link.prop('href')).to.exist
        })
      }
      else {
        cy.log(`Link ${link.text()} does not have href attribute`)
      }
    }).then(() => {
      cy.log(`Total links tested: ${linksTested}`)
    })
  })

  it('Check all links returning status ok in pdp', () => {
    let linksTested = 0
    plp.elements.productImage(1).click()
    cy.get('a').each(link => {
      if (link.prop('href')) {
        linksTested++
        cy.log(`Link ${link.text()} has href attribute: ${link.prop('href')}`)
        cy.request({
          url: link.prop('href')
        }).should(({ status }) => {
          if (status === 200 || status === 400) {
            expect(status).to.eq(200)
          } else {
            expect(status).to.eq(400)
          }
          expect(link.prop('href')).to.exist
        })
      }
      else {
        cy.log(`Link ${link.text()} does not have href attribute`)
      }
    }).then(() => {
      cy.log(`Total links tested: ${linksTested}`)
    })
  })
})