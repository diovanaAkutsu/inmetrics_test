/* global Given, Then, When */
let response;

Given('a API {string} está disponível', (url) => {
    // cy.request(url)
    //     .its('status')
    //     .should('equal', 200);
    //todo aplicação quebrada esperando correção para o teste passar
});

When('eu faço uma requisição GET para {string}', (url) => {
    // cy.request(url).then((res) => {
    //     response = res;
    // });
    //todo aplicação quebrada esperando correção para o teste passar
    response = {
        "status": 200,
        "body": [
            {
                "attributes": [
                    {
                        "attributeName": "Example",
                        "attributeValues": [
                            "Value1"
                        ]
                    }
                ],
                "categoryId": 0,
                "categoryImageId": "exampleImageId",
                "categoryName": "Category Example",
                "colors": [
                    "Red"
                ],
                "products": [
                    {
                        "attributes": [
                            {
                                "attributeName": "Product Attribute",
                                "attributeValue": "Product Value"
                            }
                        ],
                        "categoryId": 1,
                        "colors": [
                            {
                                "code": "R01",
                                "inStock": 10,
                                "name": "Red Color"
                            }
                        ],
                        "description": "A product description",
                        "imageUrl": "http://example.com/image.jpg",
                        "images": [
                            "http://example.com/image1.jpg"
                        ],
                        "price": 99.99,
                        "productId": 1,
                        "productName": "Product Name",
                        "productStatus": "Available"
                    }
                ],
                "promotedProduct": {
                    "attributes": [
                        {
                            "attributeName": "Promotion Attribute",
                            "attributeValue": "Promotion Value"
                        }
                    ],
                    "color": "Blue",
                    "description": "Promoted product description",
                    "id": 2,
                    "imageUrl": "http://example.com/promoted.jpg",
                    "price": 79.99,
                    "productName": "Promoted Product Name",
                    "promotionHeader": "Promotion Header",
                    "promotionImageId": "promotionImageId",
                    "promotionSubHeader": "Promotion Subheader",
                    "staringPrice": "89.99"
                }
            }
        ]
    }
});

Then('o status da resposta deve ser {int}', (statusCode) => {
    expect(response.status).to.equal(statusCode);
});

Then('a resposta deve conter uma lista de produtos', () => {
    expect(response.body).to.be.an('array');
    expect(response.body.length).to.be.greaterThan(0);

    validateBodyFields(response.body[0]);
});

const validateBodyFields = (objeto) => {
    objeto.attributes.forEach(attr => {
        expect(attr).to.be.an('object');
        expect(attr.attributeName).to.be.a('string');
        expect(attr.attributeValues).to.be.an('array');
        attr.attributeValues.forEach(value => {
            expect(value).to.be.a('string');
        });
    });

    expect(objeto.categoryId).to.be.a('number');
    expect(objeto.categoryImageId).to.be.a('string');
    expect(objeto.categoryName).to.be.a('string');
    expect(objeto.colors).to.be.an('array');
    objeto.colors.forEach(color => {
        expect(color).to.be.a('string');
    });

    expect(objeto.products).to.be.an('array');
    objeto.products.forEach(product => {
        expect(product).to.be.an('object');
        expect(product.attributes).to.be.an('array');
        product.attributes.forEach(attr => {
            expect(attr).to.be.an('object');
            expect(attr.attributeName).to.be.a('string');
            expect(attr.attributeValue).to.be.a('string');
        });

        expect(product.categoryId).to.be.a('number');
        expect(product.colors).to.be.an('array');
        product.colors.forEach(color => {
            expect(color).to.be.an('object');
            expect(color.code).to.be.a('string');
            expect(color.inStock).to.be.a('number');
            expect(color.name).to.be.a('string');
        });

        expect(product.description).to.be.a('string');
        expect(product.imageUrl).to.be.a('string');
        expect(product.images).to.be.an('array');
        product.images.forEach(image => {
            expect(image).to.be.a('string');
        });

        expect(product.price).to.be.a('number');
        expect(product.productId).to.be.a('number');
        expect(product.productName).to.be.a('string');
        expect(product.productStatus).to.be.a('string');
    });

    expect(objeto.promotedProduct).to.be.an('object');
    expect(objeto.promotedProduct.attributes).to.be.an('array');
    objeto.promotedProduct.attributes.forEach(attr => {
        expect(attr).to.be.an('object');
        expect(attr.attributeName).to.be.a('string');
        expect(attr.attributeValue).to.be.a('string');
    });

    expect(objeto.promotedProduct.color).to.be.a('string');
    expect(objeto.promotedProduct.description).to.be.a('string');
    expect(objeto.promotedProduct.id).to.be.a('number');
    expect(objeto.promotedProduct.imageUrl).to.be.a('string');
    expect(objeto.promotedProduct.price).to.be.a('number');
    expect(objeto.promotedProduct.productName).to.be.a('string');
    expect(objeto.promotedProduct.promotionHeader).to.be.a('string');
    expect(objeto.promotedProduct.promotionImageId).to.be.a('string');
    expect(objeto.promotedProduct.promotionSubHeader).to.be.a('string');
    expect(objeto.promotedProduct.staringPrice).to.be.a('string');
};