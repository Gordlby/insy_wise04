module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', 'db'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'strapi'),
        username: env('DATABASE_USERNAME', 'wordpress'),
        password: env('DATABASE_PASSWORD', 'wordpress'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
