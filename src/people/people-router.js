const express = require('express')
const store = require('../store')
const peopleRouter = express.Router()

peopleRouter
  .route('/')
  .get((req, res) => {
    res.json(store.people.display())
  })

module.exports = peopleRouter
