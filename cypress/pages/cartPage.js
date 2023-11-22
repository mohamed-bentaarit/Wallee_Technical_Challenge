class CartPage {
    // Elements
    elements = {
        cartItems: () => cy.get('.woocommerce-cart-form__cart-item'),
        cartItem: (index) => cy.get(".woocommerce-cart-form__cart-item").eq(index),
        itemName: function (index) {
            return this.cartItem(index).find('[data-title="Product"]')
        },
        itemPrice: function (index) {
            return this.cartItem(index).find('[data-title="Price"]')
        },
        itemQnty: function (index) {
            return this.cartItem(index).find('[data-title="Quantity"]')
        },
        itemSubtotal: function (index) {
            return this.cartItem(index).find('[data-title="Subtotal"]')
        },
        removeButton: function (index) {
            return this.cartItem(index).find('.product-remove')
        },
        Total: () => cy.get('[data-title="Total"]'),
        continueShopingBtn: () => cy.contains('Continue shopping'),
        checkoutBtn: () => cy.get('.checkout-button')
    }
    // Actions
    clickOnRemoveBtn(index) {
        this.elements.removeButton(index).click();
    }
    clickOnContinueShopingBtn() {
        this.elements.continueShopingBtn().click();
    }
    clickOnCheckoutBtn() {
        this.elements.checkoutBtn().click();
    }
}
export default CartPage;