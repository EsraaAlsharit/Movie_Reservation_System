const { errorSchema, successfulCreationResponse, successfulRetrieveResponse } = require('../responseSchema')
const { movieBody, singleMovieSchema } = require('./movieSchema')
const { Types } = require('ts-openapi')


const createMoviePath = (openApi) => {
    return {
        post: {
            summary: "Create movie",
            description: "This operation will create a new movie.",
            operationId: "create-Movie",
            requestSchema: {
                body: movieBody
            },
            tags: ["Movie"],
            responses: {
                201: openApi.declareSchema('Movie created successfully!', successfulCreationResponse(singleMovieSchema, 'Movie')),
                400: openApi.declareSchema("An Error Occured", errorSchema)
            }
        }
    }
}

const getAllMoviesPath = (openApi) => {
    return {
        get: {
            summary: 'Get all movies',
            description: 'This operation will retrieve all movies',
            operationId: 'retrieve-all-movies',
            tags: ['Movie'],
            responses: {
                200: openApi.declareSchema("All movies retrieved successfully!", successfulRetrieveResponse(singleMovieSchema, 'Movie')),
                400: openApi.declareSchema("An Error Occured", errorSchema)
            }
        }
    }
}

const getMoviePath = (openApi) => {
    return {
        get: {
            summary: 'Get movie info',
            description: 'This operation will retrieve movie info',
            operationId: 'retrieve-Movie',
            requestSchema: {
                description: 'movie id to get movie info',
                query: {
                    movieId: Types.String({
                        description: "movie ID",
                        required: true,
                        example: "6663af45862c4159526a5b13",
                    }),
                },
            },
            tags: ['Movie'],
            responses: {
                200: openApi.declareSchema("All movies retrieved successfully!", successfulRetrieveResponse(singleMovieSchema, 'Movie')),
                400: openApi.declareSchema("An Error Occured", errorSchema)
            }
        }
    }
}

const getAllMoviesTimeSlotPath = (openApi) => {
    return {
        get: {
            summary: 'Get all movies with time slot',
            description: 'This operation will retrieve all movies with time slot that is Available time in the future and the capacity is not equal zero',
            operationId: 'retrieve-all-movies_timeSlot',
            tags: ['Movie'],
            responses: {
                200: openApi.declareSchema("All movies with time slot retrieved successfully!", successfulRetrieveResponse(singleMovieSchema, 'Movie')),
                400: openApi.declareSchema("An Error Occured", errorSchema)
            }
        }
    }
}

module.exports = { createMoviePath, getAllMoviesPath, getAllMoviesTimeSlotPath, getMoviePath }



