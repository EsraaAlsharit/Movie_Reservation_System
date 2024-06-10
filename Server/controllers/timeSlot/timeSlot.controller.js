const timeSlotModel = require('../../models/timeSlot/timeSlot.model')

const createtimeSlot = async (req, res, next) => {
    try {
        const { timeSlot, capacity } = req.body
        console.log(new Date(timeSlot));
        const TimeSlot = await timeSlotModel.create({ timeSlot, capacity })
        res.status(201).json({ message: 'Time Slot created successfully!', status: 201, docs: TimeSlot })
    } catch (error) {
        next(error)
    }
}
const retrieve = async (req, res, next) => {
    try {
        const alltimeSlots = await timeSlotModel.find()
        res.json({ message: 'All timeSlots retrieved successfully!', status: 200, docs: alltimeSlots })
    } catch (error) {
        next(error)
    }
}
const signMovie = async (req, res, next) => {
    try {
        const { movieId, timeSlotId } = req.body

        const timeSlots = await timeSlotModel.findByIdAndUpdate(timeSlotId, { movieId })
        res.json({ message: 'timeSlots retrieved successfully!', status: 201, docs: timeSlots })
    } catch (error) {
        next(error)
    }
}

//reserve timeSlots with time slots
const reserveTimeSlot = async (req, res, next) => {
    try {
        const { timeSlotId, chairs } = req.body


        const Slot = await timeSlotModel.findById(timeSlotId)

        if (Slot.timeSlot < new Date())
            throw new Error("can't reserve time slot on the past")


        if (chairs == 0)
            throw new Error("you need at least one chair to make reservation")

        if ((Slot.capacity - chairs) <= 0)
            throw new Error('the number of people you want to reserve for is more than capacity')


        const updatedTimeSlot = await timeSlotModel.findByIdAndUpdate(timeSlotId, { capacity: Slot.capacity - chairs, booked: Slot.booked+chairs }, { new: true })

        res.json({ message: 'timeSlot updates successfully!', status: 200, docs: updatedTimeSlot })
    } catch (error) {
        next(error)
    }
}
const CheckAvailabilityTimeSlot = async (req, res, next) => {
    try {
        const { timeSlotId } = req.query
        
        const Slot = await timeSlotModel.findById(timeSlotId)

        res.json({ message: 'time slot retrieve successfully!', status: 200, docs: Slot })
    } catch (error) {
        next(error)
    }
}


module.exports = { createtimeSlot, reserveTimeSlot, signMovie, CheckAvailabilityTimeSlot, retrieve }