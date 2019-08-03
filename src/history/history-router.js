const express = require('express')
const store = require('../store')
const historyRouter = express.Router()

historyRouter
  .route('/')
  .get((req, res) => {
    res.status(200).json(store.history.display())
  })

module.exports = historyRouter