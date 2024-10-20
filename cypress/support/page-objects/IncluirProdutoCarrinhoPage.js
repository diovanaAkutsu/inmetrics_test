/// <reference types="Cypress" />
class IncluirProdutoCarrinhoPage {

    selectProduct() {
        cy.get('[href="#/product/1"]').should('be.visible')
        cy.get('[href="#/product/1"]').click()
        cy.get('h2[class="roboto-regular product_specifications ng-scope"]').should('be.visible')

        cy.get('div[id="Description"] > h1').invoke('text').then((text) => {
            let nameText = text.trim()
            const filePath = '../../fixtures/Produto.json';
            const updates = {
                nome: nameText
            };

            cy.updateJson(filePath, updates);
        });

        cy.get('div[id="Description"] > h2').invoke('text').then((text) => {
            let priceText = text.replace(/(\n.*)/, '').trim()
            const filePath = '../../fixtures/Produto.json';
            const updates = {
                preco: priceText
            };

            cy.updateJson(filePath, updates);
        });
    }

    selectColor(){
        cy.get('span[id="bunny"]:nth-of-type(2)').click()

        cy.get('span[id="bunny"]:nth-of-type(2)').invoke('attr', 'title').then((text) => {
            let colorText = text.trim()
            const filePath = '../../fixtures/Produto.json';
            const updates = {
                cor: colorText
            };

            cy.updateJson(filePath, updates);
        });
    }

    validateSpecificationsProduct(){
        cy.get('h2[translate="PRODUCT_SPECIFICATIONS"]').should('be.visible')
        cy.get('div[ng-repeat="attr in product_attributes"]').should('be.visible')
    }

    addProductToCart(){
        cy.get('button[class="roboto-medium ng-scope"]').click()
    }

    selectCart(){
        cy.get('#shoppingCartLink').click()
    }

    selectProductQuantity(){
        cy.get('.plus').dblclick();

        cy.get('input[name="quantity"]').invoke('val').then((valor) => {
            let quantityText = valor.trim()
            const filePath = '../../fixtures/Produto.json';
            const updates = {
                quantidade: quantityText
            };

            cy.updateJson(filePath, updates);
        });
    }

    deleteItem(){
        cy.get('a[class="remove red ng-scope"]').click()
    }

    validateSelectedProduct(){
        cy.get('label[class="roboto-regular productName ng-binding"]').should('be.visible')
        cy.get('label[class="roboto-regular productName ng-binding"]').invoke('text').then((text) => {
            let nameText = text.trim()
            const filePath = '../../fixtures/Produto.json';

            cy.readFile(filePath).then((dados) => {
                expect(dados.nome).to.equal(nameText);
            });
        });
    }

    validateSelectedColor(){
        cy.get('.productColor').invoke('attr', 'title').then((text) => {
            let colorText = text.trim()
            const filePath = '../../fixtures/Produto.json';

            cy.readFile(filePath).then((dados) => {
                expect(dados.cor).to.equal(colorText);
            });
        });
    }

    validateSelectedQuantity(){
        cy.get('td[class="smollCell quantityMobile"] > label:nth-child(2)').invoke('text').then((text) => {
            let quantityText = text.trim()
            const filePath = '../../fixtures/Produto.json';

            cy.readFile(filePath).then((dados) => {
                expect(dados.quantidade).to.equal(quantityText);
            });
        });
    }

    validateProductValue(){
        cy.get('tr[class="ng-scope"] > td:nth-child(6) > p').invoke('text').then((text) => {
            let priceText = text.trim()
            const filePath = '../../fixtures/Produto.json';

            cy.readFile(filePath).then((dados) => {
                expect(dados.preco).to.equal(priceText);
            });
        });
    }

    validateItemDeletion(){
        cy.get('label[class="roboto-bold ng-scope"]').should('be.visible')
    }

}

export default IncluirProdutoCarrinhoPage;