import { Request, Response, NextFunction } from 'express';
import jwt from "jsonwebtoken"
import dotenv from "dotenv";
import UnauthenticatedError from '../errors/unauthenticated.error';
import { join } from 'path';
dotenv.config()

// @ts-ignore
const authenticationMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    // TODO Must have a token after Bearer
// @ts-ignore
    if (!authHeader || !authHeader.startsWith('Bearer ') && new RegExp("\w{21,}").exec(authHeader.split(' ')[1])) {
        return res.status(401).send("No token provided");
    }


    // Get the token
    const token = authHeader.split(' ')[1];

    try {

        if (!process.env.JWT_SECRET) {
            throw new UnauthenticatedError("process.env.JWT_SECRET is not given");
        }

        // Decode token
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        console.log("decoded: ", decoded)

        // @ts-ignore
        const { user_id, email } = decoded;
        res.locals.user = { user_id, email }

        // Go to controller
        next();
    }

    catch (err) {
        console.log(err);
    }

}

export { authenticationMiddleware }
