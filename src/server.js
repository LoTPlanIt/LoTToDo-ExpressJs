const express = require('express')
const compression = require('compression')
const cors = require('cors')
const rateLimit = require('express-rate-limit')

const httpCode = require('./constants/httpCode.constant')
const {
  SIXTY,
  ONE_HUNDRED,
  ONE_THOUSAND
} = require('./constants/number.constant')

class Server {
  constructor(options) {
    const { port, routes, apiPrefix } = options
    this.port = port
    this.routes = routes
    this.apiPrefix = apiPrefix
    this.app = express()
  }
  async start() {
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(compression())
    this.app.use(cors())
    this.app.use(
      rateLimit({
        max: ONE_HUNDRED,
        windowMs: SIXTY * SIXTY * ONE_THOUSAND,
        message:
          'Too many requests from this IP, please try again after an hour'
      })
    )

    // Routes
    this.app.use(this.apiPrefix, this.routes)

    // Test rest api
    this.app.get('/', (req, res) => {
      return res.status(httpCode.OK).json({
        message: 'Server is running'
      })
    })

    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`)
    })
  }
  close() {
    this.app.close()
  }
}

module.exports = Server
