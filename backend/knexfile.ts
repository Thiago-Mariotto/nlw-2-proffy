import path from 'path';

module.exports = {

    development: {
      client: 'pg',
      connection: {
          host: '127.0.0.1',
          user: 'postgres',
          password: 'test',
          database: 'nlw2',
      },
      migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
      },
    },
  
    production: {
      client: 'postgresql',
      connection: {
        database: 'my_db',
        user:     'username',
        password: 'password'
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'knex_migrations'
      }
    }
  
  };
  