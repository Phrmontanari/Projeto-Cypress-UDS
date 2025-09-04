describe('Fluxo de checkout', () => {
  it('Deve realizar o checkout com sucesso', () => {
    cy.loginSuccess();
    cy.addProductsToCart();
    cy.checkout();
  });
});