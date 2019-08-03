const express = require('express')
const store = require('../store')
const peopleRouter = express.Router()

const jsonBodyParser = express.json()

peopleRouter
  .route('/')
  .get((req, res) => {
    res.status(200).json(store.people.display())
  })
  .post(jsonBodyParser, (req, res) => {
    store.people.enqueue(req.body.name)
    res.status(201).json(store.people.peek())
  })

module.exports = peopleRouter
