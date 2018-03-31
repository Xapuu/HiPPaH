const mongoose = require('mongoose')

const paymentBluePrintSchema = new mongoose.Schema({
  name: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
    default: ''
  },
  price: {
    type: mongoose.SchemaTypes.Number,
    required: true
  },
  payedBy: {
    type: mongoose.SchemaTypes.ObjectId
  }
})

const organisationSchema = new mongoose.Schema({
  owner: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
    ref: 'User'
  },
  name: {
    type: mongoose.SchemaTypes.String,
    required: true
  },
  balance: {
    type: mongoose.SchemaTypes.Number,
    required: true,
    default: 0
  },
  workers: {
    type: mongoose.SchemaTypes.Array,
    default: []
  },
  soldItemsBlueprint: {
    type: [paymentBluePrintSchema],
    default: []
  },
  tabs: {
    type: mongoose.SchemaTypes.Array,
    default: []
  }
})
module.exports = mongoose.model('Organisation', organisationSchema)
