Cypress.Commands.add("userCreate", (valueUrl, valueBody) => {
    cy.request({
        method: "post",
        url: valueUrl,
        body: valueBody
    });
});

Cypress.Commands.add("userGet", valueUrl => {
    cy.request(valueUrl);
});
