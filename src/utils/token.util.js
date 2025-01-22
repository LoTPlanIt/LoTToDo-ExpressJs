const jwt = require('jsonwebtoken')
const envs = require('@configs/env.config')

const createToken = ({ username, email }) => {
  return jwt.sign({ username, email }, envs.JWT_SECRET, {
    expiresIn: '1d'
  })
}

module.exports = { createToken }
