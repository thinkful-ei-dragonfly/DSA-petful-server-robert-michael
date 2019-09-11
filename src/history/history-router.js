const express = require('express')
const store = require('../store')
const historyRouter = express.Router()

historyRouter
  .route('/')
  .get((req, res, next) => {
    if (!store.history.isEmpty()) {
      res.status(200).json(store.history.display())
    } else {
      return res.status(204).json('no history')
    }
  })

module.exports = historyRouter