

const { OpenApi } = require('ts-openapi')
const { createMoviePath, getAllMoviesPath, getAllMoviesTimeSlotPath, getMoviePath } = require('./movie/moviePath')
const { createTimeSlotPath, reserveTimeSlotPath, CheckAvailabilityTimeSlot, signMoviePath, retrieveTimeSlotPath } = require('./timeSlot/timeSlotPath')
// const { singleTimeSlotSchema } = require('./timeSlot/timeSlotSchema')

const openApi = new OpenApi(
    "Beta 0.1",
    'SAAMS API',
    "This is the API for Saudi Arabian Actavo Management System",
)

//Set the baseURL for the api
openApi.setServers([
    { url: `http://localhost:${process.env.PORT}` }
])
//movie
openApi.addPath('/api/movie/create', createMoviePath(openApi), true)
openApi.addPath('/api/movie/all', getAllMoviesPath(openApi), true)
openApi.addPath('/api/movie/retrieve', getAllMoviesTimeSlotPath(openApi), true)
openApi.addPath('/api/movie/show', getMoviePath(openApi), true)

//timeslot
openApi.addPath('/api/timeSlot/create', createTimeSlotPath(openApi), true)
openApi.addPath('/api/timeSlot/check', CheckAvailabilityTimeSlot(openApi), true)
openApi.addPath('/api/timeSlot/update', signMoviePath(openApi), true)
openApi.addPath('/api/timeSlot/reserve', reserveTimeSlotPath(openApi), true)
openApi.addPath('/api/timeSlot/all', retrieveTimeSlotPath(openApi), true)


module.exports = {
    openApiJson: openApi.generateJson()
}
