const express = require('express')
const store = require('../store')
const catsRouter = express.Router()

catsRouter
  .route('/')
  .get((req, res) => {
    res.json(store.cats.peek())
  })

module.exports = catsRouter