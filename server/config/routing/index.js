const express = require('express')
const authStrategy = require('./../passprot')
const auth = require('./authenticaition')
const org = require('./organisation')
const profile = require('./userProfile')
const userToUser = require('./userToUserTransaction')

module.exports = app => {
  app.use(express.static('public'))
  app.get('/', (req, res) => {
    res.status(200).send({ message: 'all is good' })
  })

  // TODO protect smart
  app.use('/api/auth', auth)
  app.use('/api/profile', authStrategy.authenticate(), profile)
  app.use('/api/organisation', authStrategy.authenticate(), org)
  app.use('/api/payment', authStrategy.authenticate(), userToUser)
  // app.use('/app/purchase', )

  app.all('*', (req, res) => {
    res.status(404)
    res.send('404 Not Found')
    res.end()
  })
}
