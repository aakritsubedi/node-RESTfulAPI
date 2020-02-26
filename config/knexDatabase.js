const knexJs = require('knex');
const knexConfig = require('./knexConfig');
const bookShelfJs = require('bookshelf');

const knex = knexJs(knexConfig);
const bookshelf = bookShelfJs(knex);

module.exports = bookshelf;