describe("User API", () => {
    const userData = require("../fixtures/userData.json");
    const apiData = require("../fixtures/apiData.json");

    it("Cоздания пользователя", () => {
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

    it("Редактирование пользователя", () => {
        cy.userCreate(apiData.baseUrl, userData.user2).then(response => {
            expect(response.status).to.eq(apiData.codeOk);
            expect(response.body.code).to.eq(apiData.codeOk);
            expect(response.body.message).to.eq(`${userData.user2.id}`);
        });

        cy.userUpdate(
            `${apiData.baseUrl}${userData.user2.username}`,
            userData.user2New
        ).then(response => {
            expect(response.status).to.eq(apiData.codeOk);
            expect(response.body.code).to.eq(apiData.codeOk);
            expect(response.body.message).to.eq(`${userData.user2New.id}`);
        });

        cy.userGet(`${apiData.baseUrl}${userData.user2New.username}`).then(
            ({ status, body }) => {
                expect(status).to.eq(apiData.codeOk);
                expect(body).to.deep.eq(userData.user2New);
            }
        );
    });

    it("Удаление пользователя", () => {
        cy.userCreate(apiData.baseUrl, userData.user3).then(response => {
            expect(response.status).to.eq(apiData.codeOk);
            expect(response.body.code).to.eq(apiData.codeOk);
            expect(response.body.message).to.eq(`${userData.user3.id}`);
        });

        cy.wait(2000);
        cy.userGet(`${apiData.baseUrl}${userData.user3.username}`).then(
            ({ status, body }) => {
                expect(status).to.eq(apiData.codeOk);
                expect(body).to.deep.eq(userData.user3);
            }
        );

        cy.wait(2000);
        cy.userDelete(`${apiData.baseUrl}${userData.user3.username}`).then(
            response => {
                expect(response.status).to.eq(apiData.codeOk);
                expect(response.body.message).to.eq(
                    `${userData.user3.username}`
                );
            }
        );

        cy.wait(2000);
        cy.userGet(`${apiData.baseUrl}${userData.user3.username}`).then(
            ({ status }) => {
                expect(status).to.eq(apiData.codeErr);
            }
        );
    });
});
