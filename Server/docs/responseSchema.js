const { Types } = require('ts-openapi')
//Error response schema
const errorSchema = Types.Object({
    description: "This is the error response structure.",
    properties: {
        message: Types.String({
            description: "Error Message",
            default: "An error occured please try again."
        }),
        status: Types.Integer({
            description: "Response Status Code",
            example: 400
        })
    },
    example: {
        message: "An error occured please try again", status: 400,
    }

})

//Successfull creation response 
const successfulCreationResponse = (schema, type) => {
    const responseSchema = Types.Object({
        description: 'Creation successfull',
        properties: {
            message: Types.String({
                description: `Response message`,
                default: `${type} created successfully`
            }),
            status: Types.Number({
                description: 'Response Status Code',
                example: 201,
                default: 201
            }),
            docs: schema
        },
        // example: {
        //     message: `${type} created successfully`, status: 201, 
        //     docs: schema
        // }

    })
    return responseSchema
}

//successful retrieve response
const successfulRetrieveResponse = (schema, type) => {
    const responseSchema = Types.Object({
        description: 'Retrieve successful',
        properties: {
            message: Types.String({
                description: `Response message`,
                default: `${type} retrieved successfully`
            }),
            status: Types.Number({
                description: 'Response Status Code',
                example: 200,
                default: 200
            }),
            docs: schema
        },
        // example: {
        //     message: `${type} retrieved successfully`, status: 200, docs: 
        // }
    })
    return responseSchema

}
const successfulUpdateResponse = (schema, type) => {
    const responseSchema = Types.Object({
        description: 'Updated successful',
        properties: {
            message: Types.String({
                description: `Response message`,
                default: `${type} updated successfully`
            }),
            status: Types.Number({
                description: 'Response Status Code',
                example: 200,
                default: 200
            }),
            docs: schema
        },
        // example: {
        //     message: `${type} updated successfully`, status: 200,
        // }
    })
    return responseSchema

}

module.exports = {
    errorSchema,
    successfulCreationResponse,
    successfulRetrieveResponse,
    successfulUpdateResponse
}