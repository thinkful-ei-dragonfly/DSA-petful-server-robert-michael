const express = require('express')
const store = require('../store')
const dogsRouter = express.Router()

dogsRouter
  .route('/')
  .get((req, res) => {
    res.status(200).json(store.dogs.peek())
  })
  .delete((req, res) => {
    if (store.dogs && store.people) {
      store.history.enqueue({animal: store.dogs.peek(), person: store.people.peek()})
      store.people.dequeue()
      store.dogs.dequeue()
      console.log(store.dogs.peek())
      return res.status(204).json(store.dogs.peek())
    } else {
      res.status(400).json({ error: 'missing dog or person' })
    }
  })

module.exports = dogsRouter