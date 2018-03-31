const User = require('mongoose').model('User')
const Organisation = require('mongoose').model('Organisation')
const tokenConfig = require('./../../config/token.config')
const jwt = require('jwt-simple')

// TODO split

const retrieveOrganisations = (req, res) => {
  const token = req.headers.authorization
  const currentuserId = jwt.decode(
    token.replace('jwt ', ''),
    tokenConfig.jwtSecret
  )

  let organisationId = req.query

  if (organisationId ? organisationId.id : {}) {
    Organisation.findById(organisationId.id, (err, org) => {
      if (err) {
        res.status(404).send(err.message).end()
        return
      }
      res.status(200).json(org).end()
    })
  }
  User.findById(currentuserId).populate('organisations').exec((err, user) => {
    if (err) {
      res.status(404).json({ message: err }).end()
      return
    }
    res
      .status(200)
      .json({
        organisations: user.organisations
      })
      .end()
  })
}

const createOrganisation = (req, res) => {
  const token = req.headers.authorization
  const data = req.body

  const currentuserId = jwt.decode(
    token.replace('jwt ', ''),
    tokenConfig.jwtSecret
  )

  User.findById(currentuserId, (err, user) => {
    Organisation.create({
      owner: user.id,
      name: data.organisationName
    })
      .then(newOrg => {
        console.log(user.organisations)
        user.organisations.push(newOrg.id)
        user.save()

        res
          .status(200)
          .json({ message: 'succesfully created organisation' })
          .end()
      })
      .catch(err => res.status(404).json(err).end())
  }).catch(err => res.status(404).json({ message: err }).end())
}

const addTemplate = (req, res) => {
  const token = req.headers.authorization
  const data = req.body

  const currentuserId = jwt.decode(
    token.replace('jwt ', ''),
    tokenConfig.jwtSecret
  )
}

module.exports = {
  createOrganisation,
  addTemplate,
  retrieveOrganisations
}
