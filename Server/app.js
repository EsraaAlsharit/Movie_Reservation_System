
const express = require("express");
const cors = require("cors");
// const passport = require("passport");
const swaggerUI = require("swagger-ui-express");
const swaggerjsdoc = require("swagger-jsdoc");
// require("./config/passport");
// const { session } = require("./config/session");
const origin = require("./config/corsOrigin");
const apiRouter = require("./routes/api.routes");
const { errorHandler } = require("./middlewares/errorHandler");
// const options = require("./docs/apiDoc");
const { openApiJson } = require("./docs/apiDoc");


//Create an instance of express to be used for the server
const app = express();

//to use CORS in the express app
app.use(cors());
// app.use(
//     cors({
//         credentials: true,
//         origin: origin,
//         methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
//     })
// );


//a middleware used to parse the incoming requests with JSON paylaods.
app.use(express.json());

//a middleware used to parse urlencoded paylaods
app.use(express.urlencoded({ extended: true }));

//a middleware to use session
// app.use(session);

//initialize passport middleware
// app.use(passport.initialize());

//to use the session in the app
// app.use(passport.session());

app.use('/api', apiRouter)

//to use the docs in the app
// const swaggerSpec = swaggerjsdoc(options)
// app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));
app.use("/docs", swaggerUI.serve, swaggerUI.setup(openApiJson));



/**
 * 
 * @swagger
 * /api/movie/create:
 * post:
 *      summary: this api is used to check
 *      description: this api 
 *      responses:
 *          200:
 *              description: to test 
 * 
 */

//use the errorHandler to catch errors related to routes.
app.use(errorHandler);

module.exports = app;