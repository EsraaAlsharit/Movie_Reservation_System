const { Router } = require('express');
const movieRouter = require('./movie/movie.routes');
const timeSlotRouter = require('./timeSlot/timeSlot.routes');
const apiRouter = Router();

apiRouter.use("/movie", movieRouter);
apiRouter.use("/timeSlot", timeSlotRouter);



module.exports = apiRouter;