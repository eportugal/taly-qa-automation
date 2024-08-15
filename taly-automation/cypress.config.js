import { defineConfig } from "cypress";

export default defineConfig({
  "chromeWebSecurity": false,
  "experimentalModuleVariables": true,
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: 'https://www.wearetaly.com/',
    testIsolation: false,
    viewportWidth: 1920,
    viewportHeight: 1080
  },
});
