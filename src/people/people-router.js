const express = require('express')
const store = require('../store')
const peopleRouter = express.Router()

const jsonBodyParser = express.json()

peopleRouter
  .route('/')
  .get((req, res, next) => {
    if (!store.people.isEmpty()) {
      res.status(200).json(store.people.display())
    } else {
      return res.status(204).json('no history')
    }
  })
  .post(jsonBodyParser, (req, res) => {
    if (!store.people.isEmpty()) {
      const duplicate = store.people.display().find(function(element) {
        return element === req.body.name;
      })
      if (duplicate == null ) {
        store.people.enqueue(req.body.name)
        console.log('1')
        res.status(201).json(store.people.peek())
      } else {
        console.log('2')
        res.status(204).json('duplicate')
      }
    } else {
      store.people.enqueue(req.body.name)
      console.log('3')
      res.status(201).json(store.people.peek())
    }

  })

module.exports = peopleRouter
