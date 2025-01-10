const { Router } = require('express')
const { swaggerUi, swaggerSpec } = require('./configs/swagger.config')
const apiV1Router = require('./features/v1/apiV1.route')

class AppRoutes {
  static routes() {
    const router = new Router()
    router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
    router.use('/v1', apiV1Router)
    return router
  }
}

module.exports = AppRoutes
