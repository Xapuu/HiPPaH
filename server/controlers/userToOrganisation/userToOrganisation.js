const User = require('mongoose').model('User')
const tokenConfig = require('./../../config/token.config')

var jwt = require('jwt-simple')

const userToOrganisationOpenAccount = (req, res) => {
  const token = req.headers.authorization
  const data = req.body
  const currentuserId = jwt.decode(
    token.replace('jwt ', ''),
    tokenConfig.jwtSecret
  )
}

module.exports = {
  userToOrganisationOpenAccount
}
