const { errorSchema, successfulCreationResponse, successfulRetrieveResponse } = require('../errorSchema')
const { MovieBody, singleMovieSchema } = require('./movieSchema')
const { Types } = require('ts-openapi')


//create Movie path
const createMoviePath = (openApi) => {
    return {
        post: {
            summary: "Create Movie",
            description: "This operation will create a new Movie.",
            operationId: "create-Movie",
            requestBody:{
                content:{
                'application/json': {
                    schema: MovieBody
                 }
            }
        },

    // requestSchema: {
    //     body: { // path parameter
    //         title: Types.String({
    //             description: "title movie",
    //             required: true, // param values MUST be required
    //             example: "Split",
    //         }),
    //     },
    // },
    tags: ["Movie"],
    //     requestSchema: {
    //     body: MovieBody
    // },
    responses: {
        201: openApi.declareSchema('Movie created successfully!', successfulCreationResponse(singleMovieSchema, 'Movie')),
            400: openApi.declareSchema("An Error Occured", errorSchema)
    }
}
    }
}

//Get all projcts path
const getAllMoviesPath = (openApi) => {
    return {
        get: {
            summary: 'Get All Movies',
            description: 'This operation will retrieve all Movies',
            operationId: 'retrieve-all-Movies',
            tags: ['Movie'],
            responses: {
                200: openApi.declareSchema("All movies retrieved successfully!", successfulRetrieveResponse(singleMovieSchema, 'Movie')),
                400: openApi.declareSchema("An Error Occured", errorSchema)
            }
        }
    }
}
//Get all projcts path
const getAllMoviesTimeSlotPath = (openApi) => {
    return {
        get: {
            summary: 'Get All Movies with time slot',
            description: 'This operation will retrieve all movies with time slot',
            operationId: 'retrieve-all-Movies_timeSlot',
            tags: ['Movie'],
            responses: {
                200: openApi.declareSchema("All movies with time slot retrieved successfully!", successfulRetrieveResponse(singleMovieSchema, 'Movie')),
                400: openApi.declareSchema("An Error Occured", errorSchema)
            }
        }
    }
}

module.exports = { createMoviePath, getAllMoviesPath, getAllMoviesTimeSlotPath }



