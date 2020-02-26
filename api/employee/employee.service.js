const Employee = require('./employee.model');

module.exports = {
  getAllEmployees: () => {
    return Employee.fetchAll();
  }
}