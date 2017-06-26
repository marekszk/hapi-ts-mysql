# hapi-ts-mysql
Configuration for node.js api working with hapi.js and mysql's database writing in typescipt

`npm install`
to install dependencies

`typings install dt~node --global --save`  
and  
`typings install dt~hapi --save`  
to install node's and hapi's types
  
## knex
http://knexjs.org/#Migrations-CLI

`knex migrate:make MIGRATION_NAME`  
to create tables or editing data structures

**DO NOT DELETE MIGRATION FILES!**  
To correct for example data structure make new migration

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
app is running on port 8080