# Desafio Técnico INmetrics

## Descrição da autora:
- Nome: Diovana Kraml Akutsu de Oliveira
- Cidade: São Paulo/SP
- Idade: 21
- Linguagens de programação: Java | Javascript | SQL | TypeScript | Ruby | C#
- Frameworks e ferramentas para testes: Selenium | Cypress | Playwright | Appium | Postman
- CI/CD: Bitbucket / Jenkins / GitLab
- Documentação: Conluence / Microsoft Office/ Jira
- Ferramenta de versionamento: GitHub / GitLab / Azure DevOps / BitBucket

## Testes manuais :
- Abaixo segue o link para os testes manuais que foram realizados:
  https://1drv.ms/w/c/bd98575f18f73cf5/EX13QLWz2L5Fj9EoPK2yblUB6BB1CaEN1AYPRldc3wvImQ?e=Yl2bd9

## Tecnologias e versionamento:
- Cypress | Versão 13.15.0
- Cucumber | Versão 4.3.1

## Pré-Requisitos técnicos:
- Ter o Node.js e NPM instalado na máquina (foi usado a versão 22 do Node.js)

## Passo a passo para a instalação:
1. Clonar repositório:
    `git clone https://github.com/seu_usuário/inmetrics_test.git`
2. Executar no terminal o comando `npm i` para instalar as dependências do projeto
3. Criar na pasta Cypress um arquivo .env pode ser nomeado por exemplo como `cypress.env`, e inserir o seguinte código abaixo contendo seu usuário e senha:
   `CYPRESS_USERNAME=seu_usuário
CYPRESS_PASSWORD=sua_senha`

## Execução dos testes:
- Executar no terminal o comando`npx cypress open` para abrir o menu do cypress e selecionar a feature desejada ou `npx cypress run` para executar todos os testes disponíveis
