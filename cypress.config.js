const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;
require('dotenv').config();

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
      return config;
    },
    specPattern: "cypress/e2e/tests/*.feature",
    baseUrl: 'https://advantageonlineshopping.com',
    viewportWidth: 1400,
    viewportHeight: 1000,
    env: {
      username: process.env.CYPRESS_USERNAME,
      password: process.env.CYPRESS_PASSWORD,
    },
  },
})
