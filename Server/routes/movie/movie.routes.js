const { Router } = require('express')
const { createmovie, retrieveAllMovies, retrieveAllmoviesTimeSlot, retrieveMovie } = require('../../controllers/movie/movie.controller')

const movieRouter = Router()
// =============== api/movie/... =================

movieRouter.post('/create', createmovie)
//A route to get all movies
movieRouter.get('/all', retrieveAllMovies)
//A route to get all movies with time slot 
movieRouter.get('/retrieve', retrieveAllmoviesTimeSlot)

movieRouter.get('/show', retrieveMovie)


module.exports = movieRouter


