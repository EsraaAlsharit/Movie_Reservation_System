const movieModel = require('../../models/movie/movie.model')

const createmovie = async (req, res, next) => {
    try {
        const { title } = req.body
        console.log(req.body);

        if (Object.keys(req.body).length === 0) {
            throw new Error('not data sent')
        }

        const movie = await movieModel.create({ title })
        res.status(201).json({ message: 'Movie created successfully!', status: 201, docs: movie })
    } catch (error) {
        next(error)
    }
}
/**
 * 
 * @swagger
 * /:
 * get:
 *      summary: this api is used to check
 *      description: this api 
 *      responses:
 *          200:
 *              description: to test 
 * 
 */
const retrieveAllmovies = async (req, res, next) => {
    try {
        const allMovies = await movieModel.find()
        res.json({ message: 'All movies retrieved successfully!', status: 200, docs: allMovies })
    } catch (error) {
        next(error)
    }
}

//retrieve all movies with time slots
const retrieveAllmoviesTimeSlot = async (req, res, next) => {
    try {
        let pipelines = [
            {
                $lookup: {
                    from: "timeslots",
                    let: {
                        movieId: "$_id"
                    },
                    pipeline: [
                        {
                            $match: {
                                $expr: {
                                    $and: [
                                        { $gt: ["$capacity", 0] },
                                        { $gte: ["$timeSlot", new Date()] },
                                        { $eq: ["$movieId", "$$movieId"] }
                                    ]
                                }
                            }
                        }
                    ],
                    as: "timeSlots"
                }
            },
            { $unset: ["timeSlots.createdAt", "timeSlots.updatedAt", "timeSlots.movieId", "timeSlots.__v", "__v"] },
            {
                $match: {
                    timeSlots: { $ne: [] }
                }

            },
            { $sort: { _id: -1 } }
        ]
        const allMovies = await movieModel.aggregate(pipelines)
        res.json({ message: 'All movies retrieved successfully!', status: 200, docs: allMovies })
    } catch (error) {
        next(error)
    }
}


module.exports = { createmovie, retrieveAllmovies, retrieveAllmoviesTimeSlot }