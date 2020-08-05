const express = require('express')
const router = express.Router();
const controllers = require('../controllers/userController')

router.get('/', controllers.findUsers)
router.get('/:id', controllers.findUserById)
router.post('/create', controllers.create)
router.patch('/:id', controllers.modifyUser)
router.delete('/:id', controllers.deleteUser)

module.exports = router;