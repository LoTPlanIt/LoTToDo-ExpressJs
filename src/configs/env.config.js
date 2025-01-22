require('dotenv').config()
const { get } = require('env-var')

const envs = {
  PORT: get('PORT').required().asPortNumber(),
  API_PREFIX: get('DEFAULT_API_PREFIX').default('/api/v1').asString(),
  DB_HOST: get('MONGO_DEV_DB').required().asString(),
  JWT_SECRET: get('JWT_SECRET').required().asString(),
  SESSION_KEY_1: get('SESSION_KEY_1').required().asString(),
  SESSION_KEY_2: get('SESSION_KEY_2').required().asString()
}

module.exports = envs
