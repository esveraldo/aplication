module.exports = {
    test: {
        client: 'mysql',
        connection: {
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'aplication',
        },
        migrations: {
            directory: 'src/migrations'
        }
    }
}

//COMANDO PARA CRIAR MIGRATIONS (--env para desenvolvimento)
//node_modules/.bin/knex migrate:make create_users --env