const router = require('express').Router();

const   empController  = require('./employee.controller');


router.get('/', empController.fetchAll);
router.get('/:id', empController.fetchById);
router.post('/', empController.create);
router.put('/:id', empController.update);
router.delete('/:id', empController.remove);

module.exports = router;
