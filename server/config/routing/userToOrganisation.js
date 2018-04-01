const express = require('express')

const controlers = require('./../../controlers/userToOrganisation/userToOrganisation')

const router = express.Router()

router.post('/', controlers.userToOrganisationOpenAccount)

module.exports = router
