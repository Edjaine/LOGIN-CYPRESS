const { defineConfig } = require("cypress");
const env = require("./cypress.env");
const base = env.BASE_URL

module.exports = defineConfig({

  e2e: {
    baseUrl: base,
    env: { hideXhr: true },  
    experimentalModifyObstructiveThirdPartyCode: true
  },
  fixturesFolder: false,
});
