const express = require('express')
const store = require('../store')
const dogsRouter = express.Router()

dogsRouter
  .route('/')
  .get((req, res) => {
    res.json(store.dogs.peek())
  })
  .delete((req, res) => {
    store.history.enqueue({animal: store.dogs.peek(), person: store.people.peek()})
    store.people.dequeue()
    store.dogs.dequeue()
    res.json(store.dogs.peek())
  })

module.exports = dogsRouter