class checkoutPage {
    // Elements
    elements = {
        firstName: () => cy.get('#billing_first_name'),
        lastName: () => cy.get('#billing_last_name'),
        company: () => cy.get('#billing_company'),
        stressAddress: () => cy.get('#billing_address_1'),
        postCode: () => cy.get('#billing_postcode'),
        city: () => cy.get('#billing_city'),
        phoneNumber: () => cy.get('#billing_phone'),
        emailAddress: () => cy.get('#billing_email'),
        placeOrderBtn: () => cy.get('#place_order'),
        termsCheckBx: () => cy.get('.woocommerce-terms-and-conditions-checkbox-text')
    }
    // Actions

    typeFirstName(firstName) {
        this.elements.firstName().type(firstName);
    }
    typeLastName(lastName) {
        this.elements.lastName().type(lastName);
    }
    typeStreetAddress(streetAddress) {
        this.elements.stressAddress().type(streetAddress);
    }
    typePostCode(postcode) {
        this.elements.postCode().type(postcode);
    }
    typeCity(city) {
        this.elements.city().type(city);
    }
    typePhoneNumber(phoneNumber) {
        this.elements.phoneNumber().type(phoneNumber);
    }
    typeEmailAddress(emailAddress) {
        this.elements.emailAddress().type(emailAddress);
    }
    clickOnTermsCheckBx() {
        this.elements.termsCheckBx().click();
    }
    clickOnPlaceOrderBtn() {
        this.elements.placeOrderBtn().click();
    }
}
export default checkoutPage;