
class productListPage {
    // Elements

    elements = {

        productItem: (index) => cy.get('[data-block-name="woocommerce/product-image"]').parent().eq(index),
        products: () => cy.get('[data-block-name="woocommerce/product-image"]').parent(),
        productName: (index) => cy.get('[data-block-name="woocommerce/product-image"]').eq(index).next(),
        productImage: (index) => cy.get('div[data-block-name="woocommerce/product-image"] img').eq(index),
        productPrice: (index) => cy.get('[data-block-name="woocommerce/product-price"]').eq(index),
        productButton: (index) => cy.get('[data-block-name="woocommerce/product-button"]').eq(index)
    }

    // Actions
    clickOnProductBtn(index) {
        this.elements.productButton(index).click();
    }

    selectSortOption(option) {
        this.elements.productSortDropDown().select(option);
    }


}

export default productListPage;


