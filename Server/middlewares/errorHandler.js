const errorHandler = (err, req, res, next) => {


    let statusCode = res.statusCode ? res.statusCode : 500;
    if (statusCode == 200) {
        statusCode = 400;
    }

    if (err.name === "CastError") {
        res.status(statusCode).json({ message: "Resource not found" });
    }

    if (err.code === 11000) {
        if (err.name === "duplicateCombinationError") {
            return res.status(statusCode).json({ message: `${err.code} ${err.message}` });
        }
        else if (err.name === "MongoBulkWriteError") {
            errorMessage = err.result.result.writeErrors[0].err.errmsg
            //console.log("errorMessage type: ", typeof errorMessage)
            // Parse the err message
            const parsedJson = parseErrorMessage(errorMessage);
            //console.log("err.code: ", err.code);
            //console.log("parsedJson: ", parsedJson);

            if (parsedJson !== null) {
                res.status(statusCode).json({ message: `${err.code} Duplicate ${parsedJson.duplicate_field}: ${parsedJson.duplicate_value}` });
            } else {
                res.status(statusCode).json({ message: `${err.code} Duplicate key error` });
            }

        } else {
            res
                .status(statusCode)
                .json({ message: `Duplicate ${Object.keys(err.keyValue)}` });
        }
        // if (err.code === 11000) {
        //   res
        //     .status(statusCode)
        //     .json({ message: `Duplicate ${Object.keys(err.keyValue)}` });
        // }
    }

    if (err.name === "ValidationError") {
        const errorObj = err.errors;
        let errArr = [];
        for (const key of Object.keys(errorObj)) {
            errArr.push({ label: key, value: errorObj[key].message });
        }
        res.status(statusCode).json({ message: "Oops", errors: errArr });
    }

    function parseErrorMessage(errorMsg) {
        // Check if errorMsg is a string
        if (typeof errorMsg !== 'string') {
            return null;
        }

        // console.log("errorMsg: ", errorMsg);

        // Define a regular expression pattern to extract information
        const pattern = /E11000 duplicate key error collection: (\S+)\.(\S+) index: (\S+) dup key: { ((\S+)\.(\S+)): "([^"]+)" }/;

        const match = pattern.exec(errorMsg);

        if (match) {
            const [, database, collection, index, duplicate_field_full, , duplicate_field, duplicate_value] = match;

            const jsonObject = {
                database,
                collection,
                index,
                duplicate_field: duplicate_field_full,
                duplicate_value
            };

            return jsonObject;
        } else {
            return null;
        }
    }

    res.status(statusCode).json({
        message: err.message,
        stack: process.env.NODE_ENV === "production" ? null : err.stack,
        status: statusCode,
    });


};

module.exports = {
    errorHandler,
};