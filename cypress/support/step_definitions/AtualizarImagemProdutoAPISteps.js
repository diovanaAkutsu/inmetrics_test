/* global Given, Then, When */
let response;

When('eu faço uma requisição POST para {string}', (url) => {
    cy.request(url/1/"nomeproduto"/"blue").then((res) => {
        response = res;
    });
});

Then('a resposta deve conter a imagem do produto que foi alterada', () => {
    expect(response.body.length).to.be.greaterThan(0);
    response.body.forEach((produto) => {
        expect(produto).to.have.all.keys('id', 'imageColor', 'imageId', 'reason', 'success');
        expect(produto.id).to.be.a('number');
        expect(produto.imageColor).to.be.a('string');
        expect(produto.imageId).to.be.a('string');
        expect(produto.reason).to.be.a('string');
        expect(produto.success).to.be.a('boolean');
    });
});