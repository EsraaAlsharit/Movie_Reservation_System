require("dotenv").config();
const app = require("./app");


const { connectToDB } = require("./config/database");

connectToDB(process.env.DATABASE_URL)
    .then((res) => {
        console.log(res);

        const PORT = process.env.PORT || 7999;

        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    })

    .catch((error) => console.log(error));