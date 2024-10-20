/* global Given, Then, When */

import IncluirProdutoCarrinhoPage from '../page-objects/IncluirProdutoCarrinhoPage'
const incluirProdutoCarrinhoPage = new IncluirProdutoCarrinhoPage();

When('seleciono o produto que eu quero adicionar', () => {
    incluirProdutoCarrinhoPage.selectProduct()
});

When('escolho a cor do produto', () => {
    incluirProdutoCarrinhoPage.selectColor()
});

When('verifico se contém especificações do produto', () => {
    incluirProdutoCarrinhoPage.validateSpecificationsProduct()
});

When('adiciono o produto no carrinho', () => {
    incluirProdutoCarrinhoPage.addProductToCart()
});

When('clico no ícone do carrinho', () => {
    incluirProdutoCarrinhoPage.selectCart()
});

When('escolho a quantidade do produto', () => {
    incluirProdutoCarrinhoPage.selectProductQuantity()
});

When('excluir o item do carrinho', () => {
    incluirProdutoCarrinhoPage.deleteItem()
});

Then('validar se o produto que selecionei é o mesmo mostrado no carrinho', () => {
    incluirProdutoCarrinhoPage.validateSelectedProduct()
});

Then('validar se a cor selecionada é a mesma do carrinho', () => {
    incluirProdutoCarrinhoPage.validateSelectedColor()
});

Then('validar se a quantidade selecionada é a mesma do carrinho', () => {
    incluirProdutoCarrinhoPage.validateSelectedQuantity()
});

Then('validar se o valor mostrado é o mesmo no carrinho', () => {
    incluirProdutoCarrinhoPage.validateProductValue()
});

Then('validar se o item foi excluído do carrinho', () => {
    incluirProdutoCarrinhoPage.validateItemDeletion()
});