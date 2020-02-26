require('dotenv').config({ path: __dirname + '/../.env' });

const connection = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.MYSQL_DATABASE
};

console.log(connection);

module.exports = {
  client: "mysql",
  connection,
  migrations: {
    tableName: "migrations",
    directory: "../migrations"
  },
  seeds: {
    directory: "../seeds"
  }
};
