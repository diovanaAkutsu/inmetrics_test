/* global Given, Then, When */
let response;

Given('a API {string} está disponível', (url) => {
    cy.request(url)
        .its('status')
        .should('equal', 200);
});

When('eu faço uma requisição GET para {string}', (url) => {
    cy.request(url).then((res) => {
        response = res;
    });
});

Then('o status da resposta deve ser {int}', (statusCode) => {
    expect(response.status).to.equal(statusCode);
});

Then('a resposta deve conter uma lista de produtos', () => {
    validateBodyFields(response.body);
});

const validateBodyFields = (objeto) => {
    expect(objeto).to.have.property('attributes');
    objeto.attributes.forEach(attr => {
        expect(attr).to.be.an('object');
        expect(attr).to.have.property('attributeName').that.is.a('string');
        expect(attr).to.have.property('attributeValue').that.is.an('array');
        attr.attributeValues.forEach(value => {
            expect(value).to.be.a('string');
        });
    });

    expect(objeto).to.have.property('categoryId').that.is.a('number');
    expect(objeto).to.have.property('categoryImageId').that.is.a('string');
    expect(objeto).to.have.property('categoryName').that.is.a('string');
    expect(objeto).to.have.property('colors').that.is.an('array');
    objeto.colors.forEach(color => {
        expect(color).to.be.a('string');
    });

    expect(objeto).to.have.property('products').that.is.an('array');
    objeto.products.forEach(product => {
        expect(product).to.be.an('object');
        expect(product).to.have.property('attributes').that.is.an('array');
        product.attributes.forEach(attr => {
            expect(attr).to.be.an('object');
            expect(attr).to.have.property('attributeName').that.is.a('string');
            expect(attr).to.have.property('attributeValue').that.is.a('string');
        });

        expect(product).to.have.property('categoryId').that.is.a('number');
        expect(product).to.have.property('colors').that.is.an('array');
        product.colors.forEach(color => {
            expect(color).to.be.an('object');
            expect(color).to.have.property('code').that.is.a('string');
            expect(color).to.have.property('inStock').that.is.a('number');
            expect(color).to.have.property('name').that.is.a('string');
        });

        expect(product).to.have.property('description').that.is.a('string');
        expect(product).to.have.property('imageUrl').that.is.a('string');
        expect(product).to.have.property('images').that.is.an('array');
        product.images.forEach(image => {
            expect(image).to.be.a('string');
        });

        expect(product).to.have.property('price').that.is.a('number');
        expect(product).to.have.property('productId').that.is.a('number');
        expect(product).to.have.property('productName').that.is.a('string');
        expect(product).to.have.property('productStatus').that.is.a('string');
    });

    expect(objeto).to.have.property('promotedProduct').that.is.an('object');
    expect(objeto.promotedProduct).to.have.property('attributes').that.is.an('array');
    objeto.promotedProduct.attributes.forEach(attr => {
        expect(attr).to.be.an('object');
        expect(attr).to.have.property('attributeName').that.is.a('string');
        expect(attr).to.have.property('attributeValue').that.is.a('string');
    });

    expect(objeto.promotedProduct).to.have.property('color').that.is.a('string');
    expect(objeto.promotedProduct).to.have.property('description').that.is.a('string');
    expect(objeto.promotedProduct).to.have.property('id').that.is.a('number');
    expect(objeto.promotedProduct).to.have.property('imageUrl').that.is.a('string');
    expect(objeto.promotedProduct).to.have.property('price').that.is.a('number');
    expect(objeto.promotedProduct).to.have.property('productName').that.is.a('string');
    expect(objeto.promotedProduct).to.have.property('promotionHeader').that.is.a('string');
    expect(objeto.promotedProduct).to.have.property('promotionImageId').that.is.a('string');
    expect(objeto.promotedProduct).to.have.property('promotionSubHeader').that.is.a('string');
    expect(objeto.promotedProduct).to.have.property('staringPrice').that.is.a('string');
};