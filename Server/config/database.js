const mongoose = require("mongoose");

//Initiate the connection to the database.

const connectToDB = async (DATABASE_URL) =>
  new Promise((resolve, reject) => {
    mongoose
      .connect(DATABASE_URL)

      .then((res, err) => {
        if (err) reject(err);

        resolve("Successfully connected to the database");
      })

      .catch((err) => reject(`Error while connecting to the database: ${err}`));
  });

const disconnectDB = () => mongoose.disconnect();

module.exports = { connectToDB, disconnectDB };
