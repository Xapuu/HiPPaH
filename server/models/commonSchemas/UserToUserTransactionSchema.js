const mongoose = require('mongoose')

const userToUserTransactionSchema = new mongoose.Schema({
  payer: {
    type: mongoose.Schema.Types.ObjectId
  },
  reciever: {
    type: mongoose.Schema.Types.ObjectId
  },
  ammount: {
    type: mongoose.SchemaTypes.Number,
    default: 0
  },
  comment: {
    type: mongoose.SchemaTypes.String
  },
  dateStamp: {
    type: mongoose.SchemaTypes.Date,
    default: Date.now
  }
})

module.exports = userToUserTransactionSchema