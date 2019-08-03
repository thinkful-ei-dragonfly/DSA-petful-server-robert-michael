const express = require('express')
const store = require('../store')
const catsRouter = express.Router()

catsRouter
  .route('/')
  .get((req, res) => {
    res.status(200).json(store.cats.peek())
  })
  .delete((req, res) => {
    store.history.enqueue({animal: store.cats.peek(), person: store.people.peek()})
    store.people.dequeue()
    store.cats.dequeue()
    res.status(204).json(store.cats.peek())
  })

module.exports = catsRouter
