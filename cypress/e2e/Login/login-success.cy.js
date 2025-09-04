describe('Fluxo de login', () => {
  it('Deve realizar login com sucesso!', () => {
    const success = 'Products';

    cy.loginSuccess();
    cy.contains(success).should('be.visible');
  });
});