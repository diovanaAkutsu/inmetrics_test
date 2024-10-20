/* global Given, Then, When */

import BuscaProdutosPage from '../page-objects/BuscaProdutosPage'
const buscaProdutosPage = new BuscaProdutosPage();

Given("acesso o site da Advantage Online Shopping", () => {
    cy.login()
});

When("clico no ícone de pesquisa", () => {
    buscaProdutosPage.clickSearch()
});

Then("aparecerá o elemento de pesquisa", () => {
    buscaProdutosPage.searchElementSearch()
});

When(/^pesquiso pelo produto "([^"]*)"$/, function (product) {
    buscaProdutosPage.searchProduct(product)
});

When("clico o ícone de limpar pesquisa", function () {
    buscaProdutosPage.closeSearch()
});

Then("o elemento de pesquisa não ficará visível", function () {
    buscaProdutosPage.searchElementSearchNotVisible()
});

Then(/^deverá aparecer os produtos que contenham a palavra "([^"]*)" no modal$/, function (product) {
    buscaProdutosPage.validateResearchProduct(product)
});

Then("também serão visiveis as categorias da pesquisa", function () {
    buscaProdutosPage.validateVisibleCategories()
});

Then("não aparecerá o modal com os produtos", function () {
    buscaProdutosPage.validateNotVisibleModal()
});

When("seleciono a opção View All", function () {
    buscaProdutosPage.selectViewAll()
});

Then("validar se é mostrado em tela as categorias", function () {
    buscaProdutosPage.viewCategoryElement()
});

Then("validar se é mostrado em tela o preço", function () {
    buscaProdutosPage.viewElementPrice()
});

Then("validar se é mostrado em tela as cores", function () {
    buscaProdutosPage.viewElementColors()
});

Then("validar se é mostrado em tela os produtos", function () {
    buscaProdutosPage.viewProductsElement()
});