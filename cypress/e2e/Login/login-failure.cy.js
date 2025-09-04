describe('Fluxo de login', () => {
  it('Deve exibir mensagem de erro ao deixar o campo Username vazio', () => {
    const messageUsername = 'Epic sadface: Username is required';

    cy.emptyUsernameField();
    cy.contains(messageUsername).should('be.visible');
  });

  it('Deve exibir mensagem de erro ao deixar o campo Password vazio', () => {
    const messagePassword = 'Epic sadface: Password is required';

    cy.emptyPasswordField();
    cy.contains(messagePassword).should('be.visible');
  });
});