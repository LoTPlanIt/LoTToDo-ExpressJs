const mongoose = require('mongoose')
const RoleEnum = require('@constants/roleEnum.constant')

const userSchema = new mongoose.Schema(
  {
    username: { type: String, require: true },
    password: { type: String, require: true },
    email: { type: String, unique: true, require: true },
    role: {
      type: String,
      default: RoleEnum.USER,
      enum: Object.values(RoleEnum)
    }
  },
  { timestamps: true }
)

const UserModel = mongoose.model('User', userSchema)
module.exports = UserModel
