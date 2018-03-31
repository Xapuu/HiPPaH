const express = require('express')

const controlers = require('./../../controlers/organisation')

const router = express.Router()


router.post('/', controlers.createOrganisation)

router.get('/', controlers.retrieveOrganisations)

router.put('/', controlers.addTemplate)

module.exports = router
