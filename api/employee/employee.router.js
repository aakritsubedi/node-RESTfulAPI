const router = require('express').Router();

const   empController  = require('./employee.controller');

router.get('/', empController.fetchAll);

module.exports = router;
