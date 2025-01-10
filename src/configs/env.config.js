require('dotenv').config()
const { get } = require('env-var')

const envs = {
  PORT: get('PORT').required().asPortNumber(),
  API_PREFIX: get('DEFAULT_API_PREFIX').default('/api/v1').asString(),
  DB_HOST: get('MONGO_DEV_DB').required().asString()
}

module.exports = envs
