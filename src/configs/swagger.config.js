const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const envs = require('./env.config')

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'LoTToDo API',
    version: '1.0.0',
    description: 'API for LoTToDo application'
  },
  servers: [
    {
      url: `http://localhost:3030${envs.API_PREFIX}`,
      description: 'Development server version 1'
    }
  ]
}

const options = {
  swaggerDefinition,
  apis: ['./src/routes.js']
}

const swaggerSpec = swaggerJsDoc(options)

module.exports = { swaggerUi, swaggerSpec }
