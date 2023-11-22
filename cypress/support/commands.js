import productListPage from "../pages/productListPage";
import checkoutPage from "../pages/checkoutPage";



const productList = new productListPage()
const checkout = new checkoutPage()


Cypress.Commands.add("writeProductDataIntoFixtureFile", () => {
    let products = [];
    productList.elements.products().each(($product) => {
        let product = {
            name: null,
            price: null,
            image: null,
        };
        cy.wrap($product)
            .find('a')
            .eq(1)
            .invoke("text")
            .then((productNameText) => {
                const productName = productNameText
                cy.wrap($product)
                    .find('[data-block-name="woocommerce/product-price"]')
                    .invoke("text")
                    .then((productPriceText) => {
                        const productPrice = productPriceText.match(/\d+\.*\d*/g);
                        cy.wrap($product)
                            .find('div[data-block-name="woocommerce/product-image"] img')
                            .invoke("attr", "src")
                            .then((src) => {
                                product.name = productName;
                                product.price = productPrice[0];
                                product.image = src;
                                products.push(product);
                            });
                    });
            });
    });
    console.log(products);
    cy.writeFile("cypress/fixtures/products.js", products);
});


Cypress.Commands.add("checkAllLinks", () => {
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


Cypress.Commands.add("TypeBuyerInfo", () => {
    cy.fixture("buyerinfo").then((buyerinfo) => {
        checkout.typeFirstName(buyerinfo.firstName)
        checkout.typeLastName(buyerinfo.lastName)
        checkout.typeStreetAddress(buyerinfo.streetAddress)
        checkout.typePostCode(buyerinfo.postCode)
        checkout.typeCity(buyerinfo.city)
        checkout.typePhoneNumber(buyerinfo.phoneNumber)
        checkout.typeEmailAddress(buyerinfo.emailAddress)
    })
})