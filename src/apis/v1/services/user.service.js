const UserDocument = require('@apiV1/models/user.schema')

const UserService = {
  create(userData) {
    return new UserDocument(userData).save()
  },
  getOneByEmail(email) {
    return UserDocument.findOne({ email })
  }
}

module.exports = UserService
