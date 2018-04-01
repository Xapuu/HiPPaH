const User = require('mongoose').model('User')
const Organisation = require('mongoose').model('Organisation')
const tokenConfig = require('./../../config/token.config')
const ObjectId = require('mongodb').ObjectId

var jwt = require('jwt-simple')

const userToOrganisationOpenAccount = (req, res) => {
  const token = req.headers.authorization
  const data = req.body
  const currentuserId = jwt.decode(
    token.replace('jwt ', ''),
    tokenConfig.jwtSecret
  )

  Organisation.findById(data.userOrganisationId)
    .then(organisation => {
      let target = organisation.staticAccounts
        .map(x => x.id)
        .indexOf(data.staticAccountId)

      let connectId = ObjectId()

      organisation.staticAccounts[target].status = true
      organisation.staticAccounts[target].connectId = connectId

      const accountSchema = {
        payer: currentuserId,
        reciever: organisation.owner,
        connectId: connectId
      }
      organisation.income.push(accountSchema)
      organisation
        .save()
        .then(updatedOrganisation => {
          res.status(200).json(updatedOrganisation).end()
        })
        .catch(err => {
          res.status(404).json({ message: 'Message invalid save' }).end()
        })
    })
    .catch(err => {
      res.status(404).json({ message: 'Invalid organisation id' }).end()
    })
}

const userToOrganisationCloseAccount = (req, res) => {
  const token = req.headers.authorization
  const data = req.body
  const currentuserId = jwt.decode(
    token.replace('jwt ', ''),
    tokenConfig.jwtSecret
  )

  Organisation.findById(data.userOrganisationId).then(organisation => {
    let target = organisation.staticAccounts
      .map(x => x.id)
      .indexOf(data.staticAccountId)

    // organisation.staticAccounts[target].status = false
    // organisation.staticAccounts[target].connectId = null
    console.log(organisation.staticAccounts)
    console.log(organisation.income)
  })
}

module.exports = {
  userToOrganisationOpenAccount,
  userToOrganisationCloseAccount
}
