const bookshelf = require("../../config/knexDatabase");

const TABLE_NAME = "employees";

class Employee extends bookshelf.Model {
  get tableName() {
    return TABLE_NAME;
  }
  get hasTimestamps() {
    return true;
  }
}

module.exports = Employee;
