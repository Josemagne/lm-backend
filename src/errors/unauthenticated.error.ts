import CustomAPIError from "./customAPIError.error";

class UnauthenticatedError extends CustomAPIError {
    statusCode: number;
    constructor(message) {
        super(message);
        this.statusCode = 400;
    }
}

export default UnauthenticatedError;