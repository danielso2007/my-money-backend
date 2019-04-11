[![Build Status](https://travis-ci.org/danielso2007/my-money-app.svg?branch=master)](https://travis-ci.org/danielso2007/my-money-app)
![version](https://img.shields.io/badge/version-1.0.0-blue.svg)
[![GitHub pull requests](https://img.shields.io/github/issues-pr-raw/danielso2007/my-money-app.svg)](https://github.com/danielso2007/my-money-app/pulls)
[![GitHub issues](https://img.shields.io/github/issues/danielso2007/my-money-app.svg)](https://github.com/danielso2007/my-money-app/issues?q=is%3Aopen+is%3Aissue)
![GitHub last commit](https://img.shields.io/github/last-commit/danielso2007/my-money-app.svg)
![GitHub contributors](https://img.shields.io/github/contributors/danielso2007/my-money-app.svg)
![GitHub top language](https://img.shields.io/github/languages/top/danielso2007/my-money-app.svg)

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

[![GitHub followers](https://img.shields.io/github/followers/danielso2007.svg?label=Follow&style=social)](https://github.com/danielso2007?tab=followers)

# BACKEND

## Instalação do produção

- [Expressjs](https://expressjs.com/pt-br/)
- [Mongoosejs](https://mongoosejs.com/)
- [Body-parser](https://www.npmjs.com/package/body-parser)
- [Lodash](https://lodash.com/)
- [Mongoose-paginate](https://github.com/edwardhotchkiss/mongoose-paginate)
- [Express-query-int](https://www.npmjs.com/package/express-query-int)
- [Node-restful](https://github.com/baugarten/node-restful)
- [PM2](http://pm2.keymetrics.io/) `Gerente de processo de produção avançado para o Node.js`

```shell
npm i --save express
npm i --save mongoose
npm i --save body-parser
npm i --save lodash
npm i --save mongoose-paginate
npm i --save express-query-int
npm i --save node-restful
npm i --save pm2
```

## Instalação do desenvolvimento

- [Nodemon](https://nodemon.io/)

```shell
npm i --save-dev nodemon
```

## Rodando backend em segundo plano

```shell
nohup node loader.js > output.log &
```
### Matando processo

```shell
ps -ef | grep loader.js
```

## Rodando como serviço no linux

- Crie um arquivo chamado `my-money-app-backend.service`
- Adicione o conteúdo abaixo:
```shell
[Unit]
Description=My money app backend

[Service]
[Unit]
Description=My money app backend

[Install]
WantedBy=multi-user.target

[Service]
WorkingDirectory=/home/FASOLTI/daniel.oliveira/desenv/estudo_react_webpack/my-money-app
Type=forking
Restart=always
ExecStart=/home/FASOLTI/daniel.oliveira/desenv/estudo_react_webpack/my-money-app nodemon
KillMode=process
```
- Observe: backend/src/loader.js deve ter `#!/usr/bin/env node` na primeira linha
- Copie seu arquivo de serviço para o `/etc/systemd/system`
- Comece com `systemctl start my-money-app-backend`.
- Ativá-lo para ser executado na inicialização com `systemctl enable my-money-app-backend`.
- Veja os logs com `journalctl -u my-money-app-backend`

## Teste REST POSTMAN
- POST
- Body: x-www-form-urlencoded
- http://localhost:3003/api/billingCycles

```
name: Março/18
month: 3
year: 2018
debts[0][name]: Condomínio
debts[0][value]: 452.98
debts[1][name]: Aluguel
debts[1][value]: 1375.98
credi[0][name]: Telefone
debts[0][value]: 2369
debts[0][status]: PAGO
```

## Consultando com paginação e ordenação

http://localhost:3003/api/billingCycles?skip=0&limit=3&sort=month


# Autenticação

- [bcrypt](https://www.npmjs.com/package/bcrypt)

bcrypt é uma função hash de senhas projetada por Niels Provos e David Mazières, baseada na cifra Blowfish e apresentada na USENIX em 1999. [1] Além de incorporar um salt para proteger contra ataques rainbow table attacks , o bcrypt é uma função adaptativa: com o tempo, a contagem de iteração pode ser aumentada para torná-lo mais lento, por isso, permanece resistente a ataques de busca de força bruta, mesmo com o aumento do poder de computação.

- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)

O JSON Web Token (JWT) é um meio compacto e seguro de URL para representar alega ser transferido entre duas partes. As reivindicações em um JWT são codificados como um objeto JSON que é usado como carga útil de um JSON
Estrutura de Assinatura da Web (JWS) ou como texto simples de uma Web JSON Criptografia (JWE), permitindo que as solicitações sejam digitalmente assinado ou protegido por integridade com um Código de Autenticação de Mensagem (MAC) e / ou criptografados.

### Para Encode or Decode JWTs

- [JSON Web Token](https://www.jsonwebtoken.io/)
- [jwt.io](https://jwt.io/)

### Arquivo `.env`

O objetivo principal do .env é armazenar váriáveis de configuração da sua aplicação backend, por enquando será armazendo apenas a chave usada para gerar o token JWT.

# Enviando variável para o webpack

`MONGOLAB_URI=mongodb://localhost/mymoney AUTH_SECRET=d693dec53c75117c134cb4751ac978c6 yarn dev`

# Deploy Heroku (Backend)

## Passos para o deploy...

### 1) Instalar o _Heroku CLI_

```bash
$ npm install -g heroku-cli
```
### 2) Verificar a instalação do _Heroku CLI_

```bash
$ heroku --version
```

### 3) Efetuar o login com _Heroku CLI_

```bash
$ heroku login

Enter your Heroku credentials:
Email: <SEU E-MAIL>
Password: **********
Logged in as <SEU E-MAIL>
```

### 4) Criar um projeto no Heroku via _Heroku CLI_

```bash
$ heroku create estudo-my-money-app-backend
```

### 5) Selecionar o buildpack para NodeJS

```bash
$ heroku buildpacks:set heroku/nodejs -a estudo-my-money-app-backend
```

### 6) Configurar o repositório remoto

```bash
$ heroku git:remote -a estudo-my-money-app-backend
```

### 7) Adicionar o Add-on do **_mLab_** para termos uma instância do **_MongoDB_**

*Add-on do **_mLab_***

### 8) Clicar no Add-on do **_mLab_** e adicionar o usuário da aplicação

*Adicionar usuário do **_MongoDB_***

### 9) Configurar as variáveis de ambiente que a aplicação **_backend_** usa.

```bash
# URL_MONGO é mais ou menos assim: mongodb://<dbuser>:<dbpassword>@ds037215.mlab.com:37215/heroku_n8633ft5
$ heroku config:set MONGOLAB_URI=<URL_MONGO>

# Gere o seu próprio AUTH_SECRET
$ heroku config:set AUTH_SECRET=<KEY>
```

### 10) Fazer deploy da aplicação via **push** no repositório.

```bash
$ git push heroku master
```

### 11) Definir o tipo de escalonamento mínimo (grátis) - Passo **Opcional**

```bash
$ heroku ps:scale web=1
```

### 12) Consultar o log e verificar se tudo ocorreu bem - Passo **Opcional**

```bash
$ heroku logs --tail
```