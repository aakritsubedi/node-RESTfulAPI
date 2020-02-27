//After creating migration file and sync the migration table into the database 

//1. Create a Model File

//require Bookshelf 
const bookshelf = require('../../config/knexDatabase');

const TABLE_NAME = "teachers";

class Teachers extends bookshelf.Model {
  get tableName() {
    return TABLE_NAME;
  }
  get hasTimestamps() {
    return true;
  }
}

module.exports = Teachers;