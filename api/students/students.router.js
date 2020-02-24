const router = require('express').Router();

const { createStudents,getStudentById, updateStudent, readStudents, deleteStudent } = require('./students.controller');

router.post('/', createStudents);
router.get('/:id', getStudentById);
router.patch('/', updateStudent)
router.get('/', readStudents);
router.delete('/', deleteStudent);

module.exports = router;