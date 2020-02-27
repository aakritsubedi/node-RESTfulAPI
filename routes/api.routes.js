const router = require('express').Router();

const userRouter = require('../api/users/users.router');
const studentRouter = require('../api/students/students.router');
const employeeRouter = require('../api/employee/employee.router');
const teacherRouter = require('../api/teachers/teacher.router');



router.use('/api/users', userRouter);
router.use('/api/students', studentRouter);
router.use('/api/employees', employeeRouter);
router.use('/api/teachers', teacherRouter);


module.exports = router;