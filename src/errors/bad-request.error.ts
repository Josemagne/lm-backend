import CustomAPIError from "./customAPIError.error";

class BadRequestError extends CustomAPIError {
    statusCode: number;
    constructor(message) {
        super(message);
        this.statusCode = 401;
    }
}

export default BadRequestError;