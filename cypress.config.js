const { defineConfig } = require('cypress');
require('dotenv/config')

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: process.env.BASE_URL,
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 10000,
    excludeSpecPattern: ['**/1-geting-started/*','**/2-advanced-examples/*']
  },
});
