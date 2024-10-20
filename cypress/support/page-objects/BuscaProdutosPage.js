/// <reference types="Cypress" />
class BuscaProdutosPage {

    clickSearch() {
        cy.get("#search > a > svg").should('be.visible')
        cy.get("#search > a > svg").click()
    }

    searchElementSearch(){
        cy.get("#autoComplete").should('be.visible')
    }

    searchProduct(product){
        cy.get("#autoComplete").type(product, { force: true })
    }

    closeSearch(){
        cy.get('div[data-ng-click="closeSearchForce()"]').click()
    }

    searchElementSearchNotVisible(){
        cy.get("#autoComplete").should('not.be.visible')
    }

    validateResearchProduct(prod){
        let products = cy.get('a[class="product ng-scope"]');
        products.should('be.visible')
        products.contains(prod)
    }

    validateVisibleCategories(){
        cy.get('h3[class="roboto-medium ng-scope"]').should('be.visible')
    }

    validateNotVisibleModal(){
        cy.get(".searchPopUp").should('not.be.visible')
    }

    selectViewAll(){
        cy.get('a[translate="View_All"]').click()
    }

    viewCategoryElement(){
        cy.get('#accordionCategories').should('be.visible')
    }

    viewElementPrice(){
        cy.get('#accordionPrice').should('be.visible')
    }

    viewElementColors(){
        cy.get('#accordionColor').should('be.visible')
    }

    viewProductsElement(){
        cy.get('.imgProduct').should('be.visible')
    }


}

export default BuscaProdutosPage;