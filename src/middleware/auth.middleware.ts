import { Request, Response, NextFunction } from 'express';
import jwt from "jsonwebtoken"
import dotenv from "dotenv";
import UnauthenticatedError from '../errors/unauthenticated.error';
import { join } from 'path';
dotenv.config()

// @ts-ignore
const authenticationMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    console.log(req.headers.authorization)
    const authHeader = req.headers.authorization;
    console.log("authHeader", authHeader)


    if (!authHeader || !authHeader.startsWith('Bearer ')) {
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