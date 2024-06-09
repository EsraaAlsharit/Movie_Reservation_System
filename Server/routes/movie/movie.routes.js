const { Router } = require('express')
const { createmovie, retrieveAllmovies, retrieveAllmoviesTimeSlot } = require('../../controllers/movie/movie.controller')

const movieRouter = Router()
// =============== api/movie/... =================

/**
 * 
 * @swagger
 * api/movie/create:
 * post:
 *      description: this api 
 *      responses:
 *          '201':
 *              description: Movie created successfully!

 * 
 */
movieRouter.post('/create', createmovie)
//A route to get all movies
movieRouter.get('/all', retrieveAllmovies)
//A route to get all movies with time slot 
movieRouter.get('/retrieve', retrieveAllmoviesTimeSlot)


module.exports = movieRouter


