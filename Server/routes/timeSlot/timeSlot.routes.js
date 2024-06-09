const { Router } = require('express')
const { createtimeSlot, reserveTimeSlot, signMovie, CheckAvailabilityTimeSlot, retrieve } = require('../../controllers/timeSlot/timeSlot.controller')

const timeSlotRouter = Router()
// =============== api/timeSlot/... =================

timeSlotRouter.post('/create', createtimeSlot)

timeSlotRouter.patch('/update', signMovie)

timeSlotRouter.patch('/reserve', reserveTimeSlot)

timeSlotRouter.get('/check', CheckAvailabilityTimeSlot)

timeSlotRouter.get('/all', retrieve)


module.exports = timeSlotRouter


