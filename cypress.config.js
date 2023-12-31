const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://woocommerce.showcase-wallee.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('@cypress/code-coverage/task')(on, config)
      // include any other plugin code...

      // It's IMPORTANT to return the config object
      // with any changed environment variables
      return config
    },
  },
  video: true
})