const { Types } = require('ts-openapi')


//Body request of creating a new movie
const movieBody = Types.Object({
    description: 'Request body of create movie',
    properties: {
        timeSlot: Types.Date({
            description: 'The timeSlot of the movie',
            required: true,
            example: "09-06-2024",
        }),
        capacity: Types.Integer({
            description: 'The capacity movie',
            required: true,
            example: 20,
        }),
        movieId: Types.String({
            description: "Movie ID",
            example: "6663af45862c4159526a5b13",
        }),
    },

})

//TimeSlot object schema
const singleTimeSlotSchema = Types.Object({
    description: 'TimeSlot object',
    properties: {
        _id: Types.String({ description: "TimeSlot ID" }),
        timeSlot: Types.Date({
            description: 'The title of the movie',
        }),
        capacity: Types.Integer({
            description: 'The title of the movie',
        }),
        movieId: Types.Uuid({ description: "TimeSlot ID" }),
    }
})


module.exports = {
    movieBody,
    singleTimeSlotSchema
}