import selectors from './selectors';

Cypress.Commands.add('loginSuccess', (
  user = Cypress.env('user_name'),
  password = Cypress.env('user_password')
) => {
  cy.visit('/');
  cy.get(selectors.usernames).type(user);
  cy.get(selectors.passwords).type(password, { log: false });
  cy.get(selectors.buttonLogin).click();
});

Cypress.Commands.add('emptyUsernameField', () => {
  cy.visit('/');
  cy.get(selectors.passwords).type(' ');
  cy.get(selectors.buttonLogin).click();
});

Cypress.Commands.add('emptyPasswordField', () => {
  cy.visit('/');
  cy.get(selectors.usernames).type(' ');
  cy.get(selectors.buttonLogin).click();
});

Cypress.Commands.add('addProductsToCart', () => {
  cy.url().should('include', '/inventory.html');
  cy.get(selectors.addBackpackButton).click();
  cy.get(selectors.cartLink).click();
  cy.get(selectors.removeButton)
    .should('exist')
    .and('be.visible');
});

Cypress.Commands.add('checkout', () => {
  cy.get(selectors.checkoutButton).click();
  cy.contains('Checkout: Your Information').should('be.visible');

  cy.get(selectors.firstNameField).type('Nome Teste');
  cy.get(selectors.lastNameField).type('Sobrenome Teste');
  cy.get(selectors.postalCodeField).type('000');
  cy.get(selectors.continueButton).click();

  cy.contains('Checkout: Overview').should('be.visible');
  cy.get(selectors.finishButton).click();

  cy.contains(selectors.thankYouMessage).should('be.visible');
});
