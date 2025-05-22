Cypress.Commands.add("userCreate", (valueUrl, valueBody) => {
    cy.request({
        method: "POST",
        url: valueUrl,
        body: valueBody
    });
});

Cypress.Commands.add("userGet", valueUrl => {
    cy.request({
        method: "GET",
        url: valueUrl,
        failOnStatusCode: false
    });
});

Cypress.Commands.add("userUpdate", (valueUrl, valueBody) => {
    cy.request({
        method: "PUT",
        url: valueUrl,
        body: valueBody
    });
});

Cypress.Commands.add("userDelete", valueUrl => {
    cy.request({
        method: "DELETE",
        url: valueUrl
    });
});
