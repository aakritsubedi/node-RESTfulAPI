const empServices = require('./employee.service');

module.exports = {
  fetchAll: (req, res, next) => {
    empServices.getAllEmployees().then(data => {
      res.json({
        success: 1,
        data: data
      });
    }).catch(err => next(err));
  }
};
