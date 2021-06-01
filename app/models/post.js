const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  body: {
    type: String,
    required: true
  },
  ownerEmail: {
    type: String,
    ref: 'User',
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Post', postSchema)
