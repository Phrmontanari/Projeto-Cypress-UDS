# Projeto de Testes Automatizados Cypress

Este projeto contém testes automatizados de UI utilizando Cypress


# Configurações

- Setup:

Node - v22.15.1<br/>
Cypress - cypress@15.1.0

Instalar o node: 
Node -v

Dentro do projeto
npm init -y

- Instalar o Cypress:
npm install cypress --save-dev

Para instalar em uma versão específica:
npm install cypress@15.1.0 --save-dev

- Como executar os testes:

Modo Interativo: 
npx cypress open 

Modo Headless:
npx cypress run --spec cypress/e2e/addProductsToCart/add-oriducts-to-cart.cy.js
npx cypress run --spec cypress/e2e/API/RestfulBookerAPI.cy.cy.js
npx cypress run --spec cypress/e2e/Checkout/checkout.cy.js
npx cypress run --spec cypress/e2e/Login/login-failure.cy.js
npx cypress run --spec cypress/e2e/Login/login-success.cy.js


- Estratégias de Testes:
Seletores centralizados em cypress/support/selectors.js
Comandos customizados como loginSuccess, addProductsToCart e checkout foram implementadas em cypress/support/commands.js
Cada teste tem seu próprio spec (login.spec.js, addProductsToCart.spec.js, checkout.spec.js)

- Estruturas de Pasta:
e2e - Contém arquivos de teste
support - Contem seletores customizados e selectors

- Limitações devido aos prazos: 
Não foram implementadas bibliotecas como faker para geração de relatórios 
Relatórios detalhados não foram configurados

OBS: Usuário e Senha para executar os testes devem ser configurados em um novo arquivo em cypress.env.json
