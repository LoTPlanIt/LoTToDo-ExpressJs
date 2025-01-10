const userController = {
  getUser(req, res) {
    return res.status(200).json({ message: 'Get User' })
  }
}

module.exports = userController
