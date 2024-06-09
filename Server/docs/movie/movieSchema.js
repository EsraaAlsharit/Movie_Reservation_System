const { Types } = require('ts-openapi')


//Body request of creating a new movie
const movieBody = Types.Object({
    // description: 'Request body of create movie',
    // properties: {
        title: Types.String({
            description: 'Movie title',
            required: true,
            example:  "M3GAN",
        })
    // },
    // example: { title: "M3GAN" },
})

//Movie object schema
const singleMovieSchema = Types.Object({
    description: 'Movie object',
    properties: {
        _id: Types.String({ description: "Movie ID" }),
        title: Types.String({
            description: 'The title of the movie',
        }),
    },
    example: { _id: Types.String("66652fec7b3eda456080ed4b"), title: "M3GAN"},
})


module.exports = {
    movieBody,
    singleMovieSchema
}