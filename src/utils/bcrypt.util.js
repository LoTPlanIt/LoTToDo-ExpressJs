const bcrypt = require('bcrypt')
const { TEN } = require('@constants/number.constant')

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(TEN)
  return await bcrypt.hash(password, salt)
}

const comparePassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword)
}

module.exports = { hashPassword, comparePassword }
