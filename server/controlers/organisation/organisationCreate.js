const User = require('mongoose').model('User')
const encrypt = require('./../utils/crypto')
const tokenConfig = require('./../config/token.config')

var jwt = require('jwt-simple')

const validateRequest = (reqProps, body) => {
  return reqProps.some(x => body[x] === undefined)
}

const getProfile = (req, res) => {
  const token = req.headers.authorization

  if (!token) {
    res
      .staus(401)
      .json({
        message: 'You must provide also a token'
      })
      .end()
    return
  }

  const currentuserId = jwt.decode(
    token.replace('jwt ', ''),
    tokenConfig.jwtSecret
  )


}

module.exports = {
  getProfile
}
