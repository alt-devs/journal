## Installation

```bash
$ npm i -g @nestjs/cli
$ npm install --save @nestjs/typeorm typeorm pg
$ npm install class-validator --save
$ npm install --save @nestjs/swagger swagger-ui-express
```
Execute initial.sql script. Database will be created. 
Then run migrations to create database objects:

```bash
$ npx typeorm migration:run
```


## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
