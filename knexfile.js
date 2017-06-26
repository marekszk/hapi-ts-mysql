module.exports = {

    development: {

        migrations: { tableName: 'knex_migrations' },
        seeds: { tableName: './seeds' },
    
        client: 'mysql',
        connection: {

            host: 'host_name',

            user: 'user_name',
            password: 'password',

            database: 'db_name',
            charset: 'utf8',

        }

    }

};