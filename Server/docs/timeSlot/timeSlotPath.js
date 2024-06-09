const { errorSchema, successfulCreationResponse, successfulRetrieveResponse, successfulUpdateResponse } = require('../responseSchema')
const { TimeSlotBody, singleTimeSlotSchema } = require('./timeSlotSchema')
const { Types } = require('ts-openapi')

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

const reserveTimeSlotPath = (openApi) => {
    return {
        get: {
            summary: 'retrieve all time slots',
            description: 'This operation will retrieve all time slot',
            operationId: 'retrieve-TimeSlots',
            tags: ['TimeSlot'],
            responses: {
                200: openApi.declareSchema("All movies retrieved successfully!", successfulUpdateResponse(singleTimeSlotSchema, 'TimeSlot')),
                400: openApi.declareSchema("An Error Occured", errorSchema)
            }
        }
    }
}
const retrieveTimeSlotPath = (openApi) => {
    return {
        patch: {
            summary: 'reserve Time Slot for movie',
            description: 'This operation will reserve time Slot for movie',
            operationId: 'reserve-TimeSlot',
            requestSchema: {
                body: Types.Object({
                    description: 'TimeSlot id and number of chairs to make the reservation',
                    timeSlotId: Types.String({
                        description: "timeslot ID",
                        required: true,
                        example: "6663bef329980d420efe331d",
                    }),
                    chairs: Types.Integer({
                        description: "capacity for the movie",
                        required: true,
                        example: 5,
                    }),
                    example: {
                        timeSlotId: "6663bef329980d420efe331d", chairs: 5
                    }
                }),
            },
            tags: ['TimeSlot'],
            responses: {
                200: openApi.declareSchema("All movies retrieved successfully!", successfulUpdateResponse(singleTimeSlotSchema, 'TimeSlot')),
                400: openApi.declareSchema("An Error Occured", errorSchema)
            }
        }
    }
}

const CheckAvailabilityTimeSlot = (openApi) => {
    return {
        get: {
            summary: 'Get Time Slot to Check Availability',
            description: 'This operation will retrieve all movies with time slot',
            operationId: 'retrieve-TimeSlot',
            tags: ['TimeSlot'],
            requestSchema: {
                description: 'TimeSlot id to get timeslot info',
                query: {
                    timeSlotId: Types.String({
                        description: "timeslot ID",
                        required: true,
                        example: "6663bef329980d420efe331d",
                    }),
                },
            },
            responses: {
                200: openApi.declareSchema("Get time slot retrieved successfully!", successfulRetrieveResponse(singleTimeSlotSchema, 'TimeSlot')),
                400: openApi.declareSchema("An Error Occured", errorSchema)
            }
        }
    }
}

const signMoviePath = (openApi) => {
    return {
        patch: {
            summary: 'sign time slot for movie',
            description: 'This operation will sign time slot for a Movie',
            operationId: 'update-TimeSlot',
            requestSchema: {
                body: Types.Object({
                    description: 'TimeSlot id and movie id to sign movie',

                    timeSlotId: Types.String({
                        description: "timeslot ID",
                        required: true,
                        example: "6663bef329980d420efe331d",
                    }),
                    movieId: Types.String({
                        description: "movie ID",
                        required: true,
                        example: "6663af29862c4159526a5b11",
                    }),
                    example: {
                        timeSlotId: "6663bef329980d420efe331d", movieId: "6663af29862c4159526a5b11"
                    }
                }),
            },
            tags: ['TimeSlot'],
            responses: {
                200: openApi.declareSchema("Time slot updated successfully!", successfulUpdateResponse(singleTimeSlotSchema, 'TimeSlot')),
                400: openApi.declareSchema("An Error Occured", errorSchema)
            }
        }
    }
}

module.exports = { createTimeSlotPath, reserveTimeSlotPath, CheckAvailabilityTimeSlot, signMoviePath, retrieveTimeSlotPath }



