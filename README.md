# Projeto de Testes Automatizados Cypress

Este projeto contém testes automatizados de UI utilizando Cypress


# Configurações

:robot: Setup:

Node - v22.15.1<br/>
Cypress - cypress@15.1.0

Instalar o node: 
Node -v

Dentro do projeto
npm init -y

Instalar o Cypress:
npm install cypress --save-dev

Para instalar em uma versão específica: <br/>
npm install cypress@15.1.0 --save-dev

Como executar os testes:

Modo Interativo: <br/>
npx cypress open 

Modo Headless: <br/>
npx cypress run --spec cypress/e2e/addProductsToCart/add-oriducts-to-cart.cy.js <br/>
npx cypress run --spec cypress/e2e/API/RestfulBookerAPI.cy.cy.js <br/>
npx cypress run --spec cypress/e2e/Checkout/checkout.cy.js <br/>
npx cypress run --spec cypress/e2e/Login/login-failure.cy.js <br/>
npx cypress run --spec cypress/e2e/Login/login-success.cy.js <br/>


Estratégias de Testes: <br/>
Seletores centralizados em cypress/support/selectors.js <br/>
Comandos customizados como loginSuccess, addProductsToCart e checkout foram implementadas em cypress/support/commands.js <br/>
Cada teste tem seu próprio spec (login.spec.js, addProductsToCart.spec.js, checkout.spec.js)

Estruturas de Pasta: <br/>
e2e - Contém arquivos de teste <br/>
support - Contem seletores customizados e selectors

Limitações devido aos prazos: <br/>
Não foram implementadas bibliotecas como faker para geração de relatórios 
Relatórios detalhados não foram configurados

OBS: Usuário e Senha para executar os testes devem ser configurados em um novo arquivo em cypress.env.json
