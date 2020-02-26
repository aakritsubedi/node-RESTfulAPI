
const Boom = require('@hapi/boom');
const Employee = require('./employee.model');

module.exports = {
  getAllEmployees: () => {
    return Employee.fetchAll();
  },
  getEmpolyee: (id) => {
    return Employee.where({ id })
      .fetch()
      .then(employee => employee)
      .catch(Employee.NotFoundError, () => {
        throw Boom.notFound('Employee not found');
      });
  },
  createUser: (employee) => {
    return new Employee({ name: employee.name, email: employee.email, password: employee.password, age: employee.age, status: 1 }).save()
  },
  updateUser: (id, employee) => {
    return new Employee({ id }).save({ name: employee.name, email: employee.email, password: employee.password, age: employee.age, status: 1})
  },
  deleteUser: (id) => {
    return new Employee({ id }).fetch().then( user => user.destroy());
  }
}