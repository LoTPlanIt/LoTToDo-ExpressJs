require('./configs/alias.config')
const envs = require('./configs/env.config')
const Server = require('./server')
const AppRoutes = require('./routes')
const connectDB = require('./configs/database.config')

async function main() {
  await connectDB()
  const server = new Server({
    port: envs.PORT,
    apiPrefix: envs.API_PREFIX,
    sessionKey1: envs.SESSION_KEY_1,
    sessionKey2: envs.SESSION_KEY_2,
    routes: AppRoutes.routes()
  })
  server.start()
}

main()
