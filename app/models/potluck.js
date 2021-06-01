const mongoose = require('mongoose')

const itemSchema = require('./item')

const potluckSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  body: {
    type: String,
    required: true
  },

  items: [itemSchema],

  ownerEmail: {
    type: String,
    ref: 'User',
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Potluck', potluckSchema)
