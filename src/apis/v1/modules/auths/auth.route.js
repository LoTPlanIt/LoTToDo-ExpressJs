const express = require('express')
const authRouter = express.Router()
const authUserController = require('./authUser.controller')

authRouter.get('/', authUserController.getUser)
authRouter.post('/register', authUserController.createUser)

module.exports = authRouter
