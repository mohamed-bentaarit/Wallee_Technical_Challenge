const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://woocommerce.showcase-wallee.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  video: true
})