const { errorSchema, successfulCreationResponse, successfulRetrieveResponse } = require('../errorSchema')
const { TimeSlotBody, singleTimeSlotSchema } = require('./timeSlotSchema')
const { Types } = require('ts-openapi')

//
//create TimeSlot path
const createTimeSlotPath = (openApi) => {
    return {
        post: {
            summary: "Create TimeSlot",
            description: "This operation will create a new TimeSlot.",
            operationId: "create-TimeSlot",
            tags: ["TimeSlot"],
            requestSchema: {
                body: TimeSlotBody
            },
            responses: {
                201: openApi.declareSchema('TimeSlot created successfully!', successfulCreationResponse(singleTimeSlotSchema, 'TimeSlot')),
                400: openApi.declareSchema("An Error Occured", errorSchema)
            }
        }
    }
}

//Get all projcts path
const reserveTimeSlotPath = (openApi) => {
    return {
        patch: {
            summary: 'Get All TimeSlots',
            description: 'This operation will reserve time Slot for movie',
            operationId: 'reserve-TimeSlot',
            // requestSchema: {
            //     body: { // path parameter
            //         timeSlotId: Types.String({
            //             description: "timeslot ID",
            //             required: true, // param values MUST be required
            //             example: "6663bef329980d420efe331d",
            //         }),
            //         movieId: Types.String({
            //             description: "movie ID",
            //             required: true, // param values MUST be required
            //             example: "6663af29862c4159526a5b11",
            //         }),
            //     },
            // },
            tags: ['TimeSlot'],
            responses: {
                200: openApi.declareSchema("All movies retrieved successfully!", successfulRetrieveResponse(singleTimeSlotSchema, 'TimeSlot')),
                400: openApi.declareSchema("An Error Occured", errorSchema)
            }
        }
    }
}
//Get all projcts path
const getAllTimeSlotPath = (openApi) => {
    return {
        get: {
            summary: 'Get All Time Slots',
            description: 'This operation will retrieve all movies with time slot',
            operationId: 'retrieve-TimeSlot',
            tags: ['TimeSlot'],
            requestSchema: {
                query: { // path parameter
                    timeSlotId: Types.String({
                        description: "timeslot ID",
                        required: true, // param values MUST be required
                        example: "6663bef329980d420efe331d",
                    }),
                },
            },
            responses: {
                200: openApi.declareSchema("All time slot retrieved successfully!", successfulRetrieveResponse(singleTimeSlotSchema, 'TimeSlot')),
                400: openApi.declareSchema("An Error Occured", errorSchema)
            }
        }
    }
}

const updateTimeSlotPath = (openApi) => {
    return {
        patch: {
            summary: 'Get All TimeSlots',
            description: 'This operation will sign time slot for a Movie',
            operationId: 'update-TimeSlot',
            // requestSchema: {
            //     body: { // path parameter
            //         timeSlotId: Types.String({
            //             description: "timeslot ID",
            //             required: true, // param values MUST be required
            //             example: "6663bef329980d420efe331d",
            //         }),
            //         movieId: Types.String({
            //             description: "movie ID",
            //             required: true, // param values MUST be required
            //             example: "6663af29862c4159526a5b11",
            //         }),
            //     },
            // },
            tags: ['TimeSlot'],
            responses: {
                200: openApi.declareSchema("All movies retrieved successfully!", successfulRetrieveResponse(singleTimeSlotSchema, 'TimeSlot')),
                400: openApi.declareSchema("An Error Occured", errorSchema)
            }
        }
    }
}

module.exports = { createTimeSlotPath, reserveTimeSlotPath, getAllTimeSlotPath, updateTimeSlotPath }



