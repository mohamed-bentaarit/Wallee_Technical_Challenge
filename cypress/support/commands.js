import ProductListPage from "../pages/ProductListPage";


const plp = new ProductListPage()


Cypress.Commands.add("writeProductDataIntoFixtureFile", () => {
    let products = [];
    plp.elements.products().each(($product) => {
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
