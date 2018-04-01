const express = require('express')

const controlers = require('./../../controlers/userToOrganisation/userToOrganisation')

const router = express.Router()

router.post('/', controlers.userToOrganisationOpenAccount)

router.post('/close', controlers.userToOrganisationCloseAccount)


router.post('/')

module.exports = router
