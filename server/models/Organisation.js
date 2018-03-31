const mongoose = require('mongoose')

const organisationSchema = new mongoose.Schema({
  owner: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true
  },
  name: {
    type: mongoose.SchemaTypes.String,
    required: true
  },
  workers: {
    type: mongoose.SchemaTypes.Array,
    default: []
  },
  soldItemsBlueprint: {
    type: mongoose.SchemaTypes.Array,
    default: []
  },
  tabs: {
    type: mongoose.SchemaTypes.Array,
    default: []
  }
})
module.exports = mongoose.model('Organisation', organisationSchema)
