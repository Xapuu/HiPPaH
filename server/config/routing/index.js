const auth = require('./authenticaition')
const org = require('./organisation')
const profile = require('./userProfile')
const express = require('express')
const authStrategy = require('./../passprot')

module.exports = app => {
  app.use(express.static('public'))
  app.get('/', (req, res) => {
    res.status(200).send({ message: 'all is good' })
  })

  // TODO protect smart
  app.use('/api/auth', auth)
  app.use('/api/profile', authStrategy.authenticate(), profile)
  app.use('/api/organisation', authStrategy.authenticate(), org)

  app.all('*', (req, res) => {
    res.status(404)
    res.send('404 Not Found')
    res.end()
  })
}
