const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    specPattern: "cypress/e2e/tests/*.feature",
    baseUrl: 'https://advantageonlineshopping.com',
    viewportWidth: 1400,
    viewportHeight: 1000,
  },
})
