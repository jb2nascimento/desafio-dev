# Importação de arquivo CNAB

>Aplicação WEB para importação e apresentação dos dados do arquivo CNAB com as movimentações finanaceira de várias lojas.*

-----------
### Table of Contents
* [API CNAB](#api-cnab)
* [Front CNAB](#front-cnab)
* [Banco de dados](#banco-de-dados)
* [Configuração com Docker](#configuração-com-docker)
-----------
## API CNAB

### - Requisitos
* NodeJS > v10.15.0
* TypeScript v4.6.3+ | Target ES6
* Swagger
* Jest
* Express
* Docker
* Docker Compose

### - Deploy do Projeto

**Depois de clonar o projeto e entrar no diretório "srv-cnab" em um terminal:**

```bash
# instalar dependências
npm install

# gerar documentação - swagger
npm run swagger-generate

# construir
npm run build

# executar
npm start
```
### - Documentação Swagger da API
* **http://localhost:8080/api-docs**

## Front CNAB

### - Requisitos
* NodeJS > v10.15.0
* TypeScript v4.6.3+ | Target ES6
* Docker
* Docker Compose
* Angular Cli

### - Deploy do Projeto

**Depois de clonar o projeto e entrar no diretório "fed-cnab" em um terminal:**

```bash
# instalar dependências
npm install

# construir
npm run build

# executar
npm start
```
### - Url de acesso Front
* **http://localhost:8080/api-docs**

## - Banco de dados

#### - Requisitos
* Docker
* Docker Compose

**Banco de dados SQL Server, Utilizar instalação conforme configuração do docker.**
**Depois de clonar o projeto, entrar no diretório raiz em um terminal:**

```bash
# gerar o build da imagem do banco de dados
docker-compose build sql-server-db

# Iniciar a instancia do container e execução dos scripts iniciais
docker-compose up -d sql-server-db
```
## Configuração com Docker
**Nao é possível configurar o ambiente local e docker na mesma maquina tempo pois gera conlito nas portas**

**Depois de clonar o projeto, entrar no diretório raiz em um terminal:**

```bash
# gerar o build das imagem
docker-compose build

# Iniciar a instancia dos containers
docker-compose up -d
```
