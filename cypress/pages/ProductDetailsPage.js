class productDetailsPage {
    // Elements
    elements = {

      productName: () => cy.get(".wp-block-post-title "),
      productPrice: () => cy.get('[data-block-name="woocommerce/product-price"]'),
      productImage: () => cy.get('div[data-block-name="woocommerce/product-image-gallery"] img'),
      addToCartBtn: () => cy.get('[data-block-name="woocommerce/add-to-cart-form"] button'),
      backToProductsBtn: () => cy.get('button').contans('Add to cart')
    }
  
    // Actions

    
  }
  export default productDetailsPage;