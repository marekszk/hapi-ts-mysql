import * as Knex from 'knex';
export default Knex({
    client: 'mysql',
    connection: {

        host: 'localhost',

        user: 'root',
        password: 'zaq1@WSX',

        database: 'test',
        charset: 'utf8',

    }

});
