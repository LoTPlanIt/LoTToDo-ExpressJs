const { Router } = require('express')
const { swaggerUi, swaggerSpec } = require('./configs/swagger.config')

class AppRoutes {
  static routes() {
    const router = new Router()
    router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
    router.get('/', (req, res) => {
      return res.status(200).json({ message: 'Hello World' })
    })
    return router
  }
}

module.exports = AppRoutes
