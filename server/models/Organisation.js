const mongoose = require('mongoose')

// TODO used also in account model export to common
const paymentBluePrintSchema = new mongoose.Schema({
  name: {
    type: String
  },
  price: {
    type: mongoose.SchemaTypes.Number,
    required: true
  },
  payedBy: {
    type: mongoose.SchemaTypes.ObjectId
  }
})

const pendingInvitation = new mongoose.Schema({
  key: {
    type: mongoose.SchemaTypes.ObjectId,
    default: mongoose.Types.ObjectId(),
    required: true
  },
  organisationId: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true
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
    type: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'User' }],
    default: []
  },
  pendingInvitations: {
    type: [pendingInvitation],
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
