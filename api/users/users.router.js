const { createUser,readUsers, updateUsers,deleteUser } = require('./users.controller');
const router = require('express').Router();

router.post('/',createUser);
router.get('/', readUsers);
router.patch('/',updateUsers);
router.delete("/", deleteUser);
module.exports = router;
