'use strict';
const express = require('express')
// const cors = require('cors')
const config = require('./config')
const morgan = require('morgan')
const dogsRouter = require('./dogs/dogs-router')
const catsRouter = require('./cats/cats-router')
const peopleRouter = require('./people/people-router')
const historyRouter = require('./history/history-router')

const app = express();

app.use(morgan((config.NODE_ENV === 'production') ? 'tiny' : 'common', {
  skip: () => config.NODE_ENV === 'test',
}))

// app.use(cors({
//   origin: config.CLIENT_ORIGIN
// }))

app.use('/api/dog', dogsRouter)
app.use('/api/cat', catsRouter)
app.use('/api/people', peopleRouter)
app.use('/api/history', historyRouter)

// Catch-all 404
app.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Catch-all Error handler
// Add NODE_ENV check to prevent stacktrace leak
app.use(function errorHandler(error, req, res, next) {
  let response
  if (config.NODE_ENV === 'production') {
    response = { error: 'Server error' }
  } else {
    console.error(error)
    response = { error: error.message, object: error }
  }
  res.status(500).json(response)
})

app.listen(config.PORT, () => {
  console.log(`Server listening at http://localhost:${config.PORT}`)
})
