const UserService = require('@apiV1/services/user.service')
const { hashPassword } = require('@utils/bcrypt.util')

const userController = {
  getUser(req, res) {
    return res.status(200).json({ message: 'Get User' })
  },
  async createUser(req, res) {
    /**
     * [x] ตรวจสอบ email ซ้ํา
     * [x] สร้าง user ใหม่
     * [x] สร้าง token
     * [] เก็บ token
     */
    const { username, password, email } = req.body
    const checkEmailExist = await UserService.getOneByEmail(email)

    if (checkEmailExist) {
      return res
        .status(400)
        .json({ success: false, message: 'Email already exist' })
    }

    //TODO - find some way to save token
    const hashedPassword = await hashPassword(password)
    const newUserDocument = await UserService.create({
      username,
      hashedPassword,
      email
    })
    return res.status(200).json({ success: true, data: newUserDocument })
  }
}

module.exports = userController
