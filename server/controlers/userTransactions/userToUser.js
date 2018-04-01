const User = require('mongoose').model('User')
const encrypt = require('./../utils/crypto')
const tokenConfig = require('./../config/token.config')

var jwt = require('jwt-simple')

const userToUserTransaction = (req, res) => {
  const token = req.headers.authorization
  const data = req.body
  const currentuserId = jwt.decode(
    token.replace('jwt ', ''),
    tokenConfig.jwtSecret
  )



}

module.exports = {
  userToUserTransaction
}
