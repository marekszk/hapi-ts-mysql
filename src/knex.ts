import * as Knex from 'knex';
export default Knex({
    
    client: 'mysql',
    connection: {

        host: 'host_name',

        user: 'user_name',
        password: 'password',

        database: 'db_name',
        charset: 'utf8',

    }

});
