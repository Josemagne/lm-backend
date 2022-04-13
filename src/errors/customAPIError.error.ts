
class CustomAPIError extends Error {
    statusCode: number;
    constructor(message) {
        super(message);
    }
}

export default CustomAPIError;