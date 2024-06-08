const mongoose = require('mongoose')

//Database schema for movie simple 
const movieSchema = new mongoose.Schema({

    title: {
        type: String,
        required: [true, "title is required"],
        unique: true,
    },
    // timeSlots: {
    //     type: [mongoose.Schema.Types.ObjectId],
    //     required: true,
    //     ref: 'timeSlot'
    // },


}, {
    timestamps: true
})



const movie = mongoose.model('movie', movieSchema)
module.exports = movie