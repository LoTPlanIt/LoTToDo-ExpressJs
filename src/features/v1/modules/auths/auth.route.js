const express = require('express')
const authRouter = express.Router()
const userController = require('./user.controller')

authRouter.get('/', userController.getUser)
authRouter.post('/register', userController.createUser)

module.exports = authRouter
