module.exports = {

    development: {

        migrations: { tableName: 'knex_migrations' },
        seeds: { tableName: './seeds' },

        client: 'mysql',
        connection: {

            host: 'localhost',

            user: 'root',
            password: 'zaq1@WSX',

            database: 'test',
            charset: 'utf8',

        }

    }

};