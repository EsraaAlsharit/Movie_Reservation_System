const { Types } = require('ts-openapi')

const TimeSlotBody = Types.Object({
    description: 'Request body of create movie',
    properties: {
        timeSlot: Types.String({
            description: 'The timeSlot of the movie',
            required: true,
            example: { timeSlot: "12-06-2024 07:45:00" }
        }),
        capacity: Types.Integer({
            description: 'The capacity movie',
            required: true,
            example: { capacity: 20 },
        }),
        movieId: Types.String({
            description: "Movie ID",
            example: { movieId: "6663af45862c4159526a5b13" }
        }),
    },
    example: {
        timeSlot: "12-06-2024 07:45:00", capacity: 30,
        //  movieId: "6663af45862c4159526a5b13"
    }

})

const singleTimeSlotSchema = Types.Object({
    description: 'TimeSlot object',
    properties: {
        _id: Types.Uuid({ description: "TimeSlot ID" }),
        timeSlot: Types.DateTime({
            description: 'The time slot for the movie',
            default: new Date("12-06-2024 07:45:00"),
            example: new Date("12-06-2024 07:45:00")
        }),
        capacity: Types.Integer({
            description: 'The capacity of the time slot',
            default: 20,
            example: 20
        }),
        movieId: Types.Uuid({
            description: "TimeSlot ID",
            default: "6663af45862c4159526a5b13",
            example: "6663af45862c4159526a5b13"

        }),
    },
    example: {
        timeSlot: new Date("12-06-2024 07:45:00"), capacity: 30,
        movieId: Types.Uuid("6663af45862c4159526a5b13")
    }
})

module.exports = {
    TimeSlotBody,
    singleTimeSlotSchema
}