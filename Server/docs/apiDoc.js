

const { OpenApi } = require('ts-openapi')
const { createMoviePath, getAllMoviesPath, getAllMoviesTimeSlotPath } = require('./movie/moviePath')
const { createTimeSlotPath, reserveTimeSlotPath, getAllTimeSlotPath, updateTimeSlotPath } = require('./timeSlot/timeSlotPath')

const openApi = new OpenApi(
    "Beta 0.1",
    'SAAMS API',
    "This is the API for Saudi Arabian Actavo Management System",
)

//Set the baseURL for the api
openApi.setServers([
    { url: "http://localhost:8000" }
])
//movie
openApi.addPath('/api/movie/create', createMoviePath(openApi), true)
openApi.addPath('/api/movie/all', getAllMoviesPath(openApi), true)
openApi.addPath('/api/movie/retrieve', getAllMoviesTimeSlotPath(openApi), true)
//timeslot
openApi.addPath('/api/timeSlot/create', createTimeSlotPath(openApi), true)
openApi.addPath('/api/timeSlot/retrieve', getAllTimeSlotPath(openApi), true)
openApi.addPath('/api/timeSlot/update', updateTimeSlotPath(openApi), true)
openApi.addPath('/api/timeSlot/reserve', reserveTimeSlotPath(openApi), true)

module.exports = {
    openApiJson: openApi.generateJson()
}
// module.exports = options