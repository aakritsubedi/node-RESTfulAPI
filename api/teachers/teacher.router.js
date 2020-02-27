const router = require('express').Router();

const   teacherController  = require('./teacher.controller');


router.get('/', teacherController.fetchAll);
router.get('/:id', teacherController.fetchById);
router.post('/', teacherController.create);
router.put('/:id', teacherController.update);
router.delete('/:id', teacherController.remove);

module.exports = router;
