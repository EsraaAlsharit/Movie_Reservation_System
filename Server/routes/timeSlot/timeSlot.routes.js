const { Router } = require('express')
const { createtimeSlot, reserveTimeSlot, signMovie, CheckAvailabilityTimeSlot } = require('../../controllers/timeSlot/timeSlot.controller')

const timeSlotRouter = Router()
// =============== api/timeSlot/... =================

timeSlotRouter.post('/create', createtimeSlot)

timeSlotRouter.patch('/update', signMovie)

timeSlotRouter.patch('/reserve', reserveTimeSlot)

timeSlotRouter.get('/retrieve', CheckAvailabilityTimeSlot)


module.exports = timeSlotRouter


