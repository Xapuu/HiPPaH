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

  User.findById(currentuserId).populate('organisations').exec((err, user) => {
    if (err) {
      res.status(404).json({ message: err }).end()
    }

    res
      .status(200)
      .json({
        username: user.username,
        balance: user.balance,
        organisations: user.organisations,
        workPlace: user.workPlace,
        account: user.account
      })
      .end()
  })
}

module.exports = {
  getProfile
}
