

// const options = {
//     definition: {
//         openapi: "3.0.0",
//         info: {
//             title: "Movie Reservation System APIs",
//             version: "1.0.0"
//         },
//         servers: [
//             { url: "http://localhost:8000" }
//         ]
//     },
//     apis: ["./routes/api.routes.js"]
    
// }

const { OpenApi } = require('ts-openapi')
const { createMoviePath, getAllMoviesPath } = require('./movie/moviePath')

const openApi = new OpenApi(
    "Beta 0.1",
    'SAAMS API',
    "This is the API for Saudi Arabian Actavo Management System",
)

//Set the baseURL for the api
openApi.setServers([
    { url: "http://localhost:8000" }
])

openApi.addPath('/api/movie/create', createMoviePath(openApi), true)

openApi.addPath('/api/movie/retrieve', getAllMoviesPath(openApi), true)
// openApi.addPath('/api/movie/all', getAllMoviesPath(openApi), true)

module.exports = {
    openApiJson: openApi.generateJson()
}
// module.exports = options