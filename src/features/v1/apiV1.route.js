const express = require('express')
const apiV1Router = express.Router()
const authRouter = require('./auths/auth.route')

apiV1Router.use('/auth', authRouter)
apiV1Router.get('/', (req, res) => {
  return res.status(200).json({ message: 'API V1 PATH' })
})

module.exports = apiV1Router
