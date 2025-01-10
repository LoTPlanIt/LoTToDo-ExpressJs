const mongoose = require('mongoose')
const envs = require('./env.config')

const connectDB = async () => {
  try {
    console.log('Connecting to DB...')
    const conn = await mongoose.connect(envs.DB_HOST)
    console.clear()
    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.error(`Error: ${error.message}`)
    global.process.exit(1)
  }
}

module.exports = connectDB
