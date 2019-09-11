const express = require('express')
const dogsService = require('./dogs-service')
const dogsRouter = express.Router()

dogsRouter
  .route('/')
  .get((req, res) => {
    res.status(200).json(dogsService.getDog())
  })
  .delete((req, res, next) => {
    const dog = dogsService.deleteDog()
    if (!dog) {
      return res
        .status(400)
        .json({
          error: "There are no dogs left"
        })
    }
    return res.json(dog)
  })


module.exports = dogsRouter