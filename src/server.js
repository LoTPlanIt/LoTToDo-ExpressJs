const express = require('express')
const session = require('cookie-session')
const compression = require('compression')
const cors = require('cors')
const helmet = require('helmet')
const rateLimit = require('express-rate-limit')

const httpCode = require('./constants/httpCode.constant')
const {
  SIXTY,
  ONE_HUNDRED,
  ONE_THOUSAND
} = require('./constants/number.constant')

const sessionExpire = new Date(Date.now() + SIXTY * SIXTY * ONE_THOUSAND)

class Server {
  constructor(options) {
    const { port, routes, apiPrefix, sessionKey1, sessionKey2 } = options
    this.port = port
    this.routes = routes
    this.apiPrefix = apiPrefix
    this.sessionKey1 = sessionKey1
    this.sessionKey2 = sessionKey2
    this.app = express()
  }
  async start() {
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(compression())
    this.app.use(cors())
    this.app.use(helmet())
    // TODO: morgan

    // Rate limit
    this.app.use(
      rateLimit({
        max: ONE_HUNDRED,
        windowMs: SIXTY * SIXTY * ONE_THOUSAND,
        message:
          'Too many requests from this IP, please try again after an hour'
      })
    )

    // Session
    this.app.use(
      session({
        name: 'session',
        keys: [this.sessionKey1, this.sessionKey2],
        cookie: {
          secure: true,
          httpOnly: true,
          sameSite: 'none',
          expires: sessionExpire
        }
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
    this.app.close(() => {
      console.log('Server closed')
      process.exit(0)
    })
  }
}

module.exports = Server
