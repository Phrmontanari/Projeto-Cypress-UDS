describe('Fluxo de adicionar e remover produto no carrinho', () => {
  it('Deve adicionar um produto ao carrinho, removê-lo e validar que o carrinho está vazio!', () => {
    const success = 'Products';
    cy.loginSuccess();
    cy.contains(success).should('be.visible');

    cy.addProductsToCart();
  });
});