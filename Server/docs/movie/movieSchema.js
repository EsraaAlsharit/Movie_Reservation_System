const { Types } = require('ts-openapi')

const movieBody = Types.Object({
    description: 'Request body of create movie',
    properties: {
        title: Types.String({
            description: 'Movie title',
            required: true,
        })
    },
    example: { title: "SPLIT" },
})

const singleMovieSchema = Types.Object({
    description: 'Movie object',
    properties: {
        _id: Types.Uuid({ description: "Movie ID" }),
        title: Types.String({
            description: 'The title of the movie',
        }),
    },
    example: { _id: Types.Uuid("6666409479edaef061065492"), title: "M3GAN" },
})

module.exports = {
    movieBody,
    singleMovieSchema
}