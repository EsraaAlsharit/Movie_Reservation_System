const { Types } = require('ts-openapi')


//Body request of creating a new movie
const movieBody = Types.Object({
    description: 'Request body of create movie',
    properties: {
        title: Types.String({
            description: 'Movie title',
            required: true
        })
    },

})

//Movie object schema
const singleMovieSchema = Types.Object({
    description: 'Movie object',
    properties: {
        _id: Types.String({
            description: 'The objectId of the movie'
        }),
        title: Types.String({
            description: 'The title of the movie',
        }),
    }
})


module.exports = {
    movieBody,
    singleMovieSchema
}