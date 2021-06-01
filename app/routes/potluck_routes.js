const express = require('express')
const passport = require('passport')
const Potluck = require('../models/potluck')
const customErrors = require('../../lib/custom_errors')
const handle404 = customErrors.handle404
const requireOwnership = customErrors.requireOwnership
const removeBlanks = require('../../lib/remove_blank_fields')
const requireToken = passport.authenticate('bearer', { session: false })
const router = express.Router()

// CREATE
// POST /potlucks
router.post('/potlucks', requireToken, (req, res, next) => {
  req.body.potluck.owner = req.user.id
  req.body.potluck.ownerEmail = req.user.email
  Potluck.create(req.body.potluck)
    .then(potluck => {
      res.status(201).json({ potluck: potluck.toObject() })
    })
    .catch(next)
})

// INDEX (user only)
// GET /potlucks
router.get('/potlucks', requireToken, (req, res, next) => {
  const id = req.user.id
  Potluck.find({ owner: id })
    .then(potlucks => {
      return potlucks.map(potluck => potluck.toObject())
    })
    .then(potlucks => res.status(200).json({ potlucks: potlucks }))
    .catch(next)
})

// INDEX (all)
// GET /potlucks
router.get('/potlucks/all', requireToken, (req, res, next) => {
  Potluck.find()
    .then(potlucks => {
      return potlucks.map(potluck => potluck.toObject())
    })
    .then(potlucks => res.status(200).json({ potlucks: potlucks }))
    .catch(next)
})

// UPDATE
// PATCH /potlucks/6099578461dd6be72ba96d87
router.patch('/potlucks/:id', requireToken, removeBlanks, (req, res, next) => {
  // if the client attempts to change the `owner` property by including a new
  // owner, prevent that by deleting that key/value pair
  delete req.body.potluck.owner

  Potluck.findById(req.params.id)
    .then(handle404)
    .then(potluck => {
      // pass the `req` object and the Mongoose record to `requireOwnership`
      // it will throw an error if the current user isn't the owner
      requireOwnership(req, potluck)

      // pass the result of Mongoose's `.update` to the next `.then`
      return potluck.updateOne(req.body.potluck)
    })
    // if that succeeded, return 204 and no JSON
    .then(() => res.sendStatus(204))
    // if an error occurs, pass it to the handler
    .catch(next)
})

router.delete('/potlucks/:id', requireToken, (req, res, next) => {
  Potluck.findById(req.params.id)
    .then(handle404)
    .then(potluck => {
      requireOwnership(req, potluck)
      potluck.deleteOne()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

module.exports = router
