const mongoose = require('mongoose')

//Database schema for timeSlot
const timeSlotSchema = new mongoose.Schema({

    timeSlot: {
        type: Date,
        required: [true,"timeSlots is required"]
    },
    capacity: {
        type: Number,
        required: true,
        default: 50,
        
    },
    movieId: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'movie'
    },
    // availability : {
    //     type: Boolean,
    //     required: true,
    //     default: false
    // },
   

}, {
    timestamps: true
})

const timeSlot = mongoose.model('timeSlot', timeSlotSchema)
module.exports = timeSlot