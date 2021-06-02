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
  // console.log('item is ' + req.body.item.name)
  const item = req.body.item
  // console.log('Potluck is ' + req.body.item.potluckId)
  const potluckId = req.body.item.potluckId
  req.body.item.owner = req.user.id
  req.body.item.ownerEmail = req.user.email
  // console.log('Owner is ' + req.body.item.owner)
  // console.log('Owner email is ' + req.body.item.ownerEmail)
  Potluck.findById(potluckId)
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

// DESTROY
// DELETE /items/:itemId
router.delete('/items/:itemId', (req, res, next) => {
  // extract the item's id from the url
  const itemId = req.params.itemId
  // extract the item's id from the incoming request's data
  const potluckId = req.body.item.potluckId

  Potluck.findById(potluckId)
    .then(handle404)
    .then(potluck => {
      // select the review submdocument with the id `reviewId` with: restaurant.reviews.id(reviewId)
      // then remove it (delete it)
      potluck.items.id(itemId).remove()

      // save the deletion
      return potluck.save()
      // if successfully deleted, respond with 204 No Content
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

// UPDATE
// PATCH /items/:itemId
router.patch('/items/:itemId', (req, res, next) => {
  // extract the item id
  const itemId = req.params.itemId

  // extract the item data from the request's body
  const itemData = req.body.item

  // extract the potluck id from the review data
  const potluckId = itemData.potluckId

  Potluck.findById(potluckId)
    .then(handle404)
    .then(potluck => {
      // select the review subdoc with the id `reviewId`
      const review = potluck.items.id(itemId)

      // update our review with the request's data
      // .set is semiliar to how .updateOne works
      review.set(itemData)

      // save the changes by saving the parent doc
      return potluck.save()
    })
    .then(() => res.sendStatus(204))
    // OR .then(restaurant => res.json({ restaurant }))
    .catch(next)
})

module.exports = router
