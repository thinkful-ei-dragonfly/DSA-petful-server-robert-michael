const express = require('express')
const store = require('../store')
const peopleRouter = express.Router()

const jsonBodyParser = express.json()

peopleRouter
  .route('/')
  .get((req, res) => {
    res.json(store.people.display())
  })
  .post(jsonBodyParser, (req, res) => {
    store.people.enqueue(req.body.name)
    res.json(store.people.peek())
  })

module.exports = peopleRouter
