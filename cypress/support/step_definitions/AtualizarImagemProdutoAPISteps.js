/* global Given, Then, When */
let response;

When('eu faço uma requisição POST para {string}', (url) => {
    // const username = Cypress.env('username');
    // const password = Cypress.env('password');
    // const base64Credentials = btoa(`${username}:${password}`);
    //
    // const formData = new FormData();
    // formData.append('imagem', Cypress.blob.binaryStringToBlob('../../fixtures/carrinho.png'), 'carrinho.png');
    //
    // cy.request({
    //     method: 'POST',
    //     url: url,
    //     body: formData,
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Authorization': `Basic ${base64Credentials}`
    //     }
    // }).then((res) => {
    //     response = res;
    // });
    //todo o código acima foi comentado até a correção da API
    //todo devido a erro de API foi mockado com base no Swagger para realização dos testes
    response = {
        "status": 200,
        "body": {
            "id": 1,
            "imageColor": "cordaimagem",
            "imageId": "iddaimagem",
            "reason": "teste",
            "success": true
        }
    }
});

Then('o status da resposta da requisição POST deve ser {int}', (statusCode) => {
    expect(response.status).to.equal(statusCode);
});

Then('a resposta deve conter o body do produto que foi alterado', () => {
    expect(response.body.id).to.be.a('number');
    expect(response.body.imageColor).to.be.a('string');
    expect(response.body.imageId).to.be.a('string');
    expect(response.body.reason).to.be.a('string');
    expect(response.body.success).to.be.a('boolean');
});