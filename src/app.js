const envs = require('./configs/env.config')
const Server = require('./server')
const AppRoutes = require('./routes')

function main() {
  const server = new Server({
    port: envs.PORT,
    apiPrefix: envs.API_PREFIX,
    routes: AppRoutes.routes()
  })
  server.start()
}

main()
