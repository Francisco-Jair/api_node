const express = require("express")
const userController = require('../controllers/user.js')

const router = express.Router()

router
    .get('/', userController.getAll)
    .get('/:id', userController.getById)
    .post('/', userController.createUser)
    .put('/:id', userController.updateUser)
    .delete('/:id', userController.deleteUser)



module.exports = router