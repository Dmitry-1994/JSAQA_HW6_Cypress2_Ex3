const { defineConfig } = require("cypress");

module.exports = defineConfig({
    projectId: "xph882",
    e2e: {
        retries: 1,
        setupNodeEvents(on, config) {
            // implement node event listeners here
        }
    }
});
