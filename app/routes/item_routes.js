const express = require('express')
const passport = require('passport')
const Potluck = require('../models/potluck')
const customErrors = require('../../lib/custom_errors')
const handle404 = customErrors.handle404
// const requireOwnership = customErrors.requireOwnership
// const removeBlanks = require('../../lib/remove_blank_fields')
const requireToken = passport.authenticate('bearer', { session: false })
const router = express.Router()

// CREATE
// POST /additem
router.post('/items', requireToken, (req, res, next) => {
  // returns name of the item passed in the req
  console.log('item is ' + req.body.item.name)
  const item = req.body.item
  console.log('Potluck is ' + req.body.item.potluckID)
  const potluckID = req.body.item.potluckID
  req.body.item.owner = req.user.id
  req.body.item.ownerEmail = req.user.email
  console.log('Owner is ' + req.body.item.owner)
  console.log('Owner email is ' + req.body.item.ownerEmail)
  Potluck.findById(potluckID)
    .then(handle404)
    .then(potluck => {
      potluck.items.push(item)
      return potluck.save()
    })
    // if that succeeded, return 201
    .then(potluck =>
      res.status(201).json({ potluck }))
    // if an error occurs, pass it to the handler
    .catch(next)
})

module.exports = router
