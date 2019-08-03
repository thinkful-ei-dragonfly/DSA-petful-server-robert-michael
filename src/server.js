'use strict';
const express = require('express');
const cors = require('cors');
const dogsRouter = require('./dogs/dogs-router')
const catsRouter = require('./cats/cats-router')
const peopleRouter = require('./people/people-router')
const historyRouter = require('./history/history-router')

const app = express();
app.use(cors({
  origin: CLIENT_ORIGIN
});

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
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: app.get('env') === 'development' ? err : {}
  });
});

app.listen(8080,()=>{
  console.log('Serving on 8080');
});