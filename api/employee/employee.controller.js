const empServices = require("./employee.service");

module.exports = {
  fetchAll: (req, res, next) => {
    empServices
      .getAllEmployees()
      .then(data => {
        res.json({
          success: 1,
          data: data
        });
      })
      .catch(err => next(err));
  },
  fetchById: (req, res, next) => {
    empServices
      .getEmpolyee(req.params.id)
      .then(data => {
        res.status(200).json({
          success: 1,
          message: data
        })
      })
      .catch(err => next(err));
  },
  create: (req, res, next) => {
    empServices
      .createUser(req.body)
      .then(data =>
        res.status(200).json({
          success: 1,
          message: data
        })
      )
      .catch(err => next(err));
  },
  update: (req, res, next) => {
    empServices
    .updateUser(req.params.id, req.body)
    .then(data => {
      res.status(200).json({
        success: 1,
        message: data
      })
    })
    .catch(err => next(err));
  },
  remove: (req, res, next) => {
    empServices
    .deleteUser(req.params.id)
    .then(data => {
      res.status(200).json({
        success: 1,
        message: data
      })
    })
    .catch(err => next(err));
  }
};
