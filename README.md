# hapi-ts-mysql
Configuration for node.js api working with hapi.js and mysql's database writing in typescipt

`npm install`
to install dependencies

`npm run typings` 
to install node's and hapi's types

## knex.js

First, fill up knexfile.js with your database infomation

http://knexjs.org/#Migrations-CLI <- there is knex-cli documentation

`knex migrate:make MIGRATION_NAME`  
to create tables or editing data structures

**DO NOT DELETE MIGRATION FILES!**  
To correct data structure make new migration

`knex migrate:latest`  
to insert tables into database

`knex migrate:rollback`  
to undo latest migration

`knex seed:make SEED_NAME`  
to make mock up data

`knex seed:run`  
to import data into db

## Run app

`npm run server`  
app is availaible on localhost:8080