class Cart {
  validarProdutosPresenteNoCarrinho(name) {
    cy.get('.cart_item').contains(name).should('be.visible')

    cy.screenshot('produto adicionado')
  }
}

export default new Cart()