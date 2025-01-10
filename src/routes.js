const { Router } = require('express')

class AppRoutes {
  static routes() {
    const router = new Router()
    router.get('/', (req, res) => {
      return res.status(200).json({ message: 'Hello World' })
    })
    return router
  }
}

module.exports = AppRoutes
