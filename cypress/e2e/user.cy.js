describe("User API", () => {
    const userData = require("../fixtures/userData.json");
    const apiData = require("../fixtures/apiData.json");

    it.only("Cоздания пользователя", () => {
        cy.userCreate(apiData.baseUrl, userData.user1).then(response => {
            expect(response.status).to.eq(apiData.codeOk);
            expect(response.body.code).to.eq(apiData.codeOk);
            expect(response.body.message).to.eq(`${userData.user1.id}`);
        });

        cy.userGet(`${apiData.baseUrl}${userData.user1.username}`).then(
            ({ status, body }) => {
                expect(status).to.eq(apiData.codeOk);
                expect(body).to.deep.eq(userData.user1);
            }
        );
    });
    it.skip("Редактирование пользователя", () => {});
    it.skip("Удаление пользователя", () => {});
});
