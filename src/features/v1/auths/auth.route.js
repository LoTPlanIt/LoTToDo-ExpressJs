const express = require('express')
const authRouter = express.Router()
const userController = require('./controllers/user.controller')

authRouter.get('/', userController.getUser)

module.exports = authRouter
