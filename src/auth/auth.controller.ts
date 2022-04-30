import { NextFunction, Request, Response } from "express"
import jwt from "jsonwebtoken"
import { getRepository } from 'typeorm';
import { User } from '../entity/User';
import dotenv from "dotenv"
import { nanoid } from "nanoid";
import BadRequestError from '../errors/bad-request.error';
import { join } from "path"
import bcrypt from "bcrypt"
dotenv.config()

/**
 * Creates token and sends it to the user
 * @param req 
 * @param res 
 */
const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400).send("Please provide the email and password");
    }

    console.log("email and pwd: ", req.body)


    if (!process.env.JWT_SECRET) {
        throw new BadRequestError("proces.env.JWT_SECRET is not given");
    }

    const user = await getRepository(User).createQueryBuilder().where("email = :email", { email: email }).getOne();

    if (user && bcrypt.compareSync(password, user.password)) {
        const token = user.token;

        res.status(200).json({ token, result: "success" })
    }
    else {
        res.status(401).json({ result: "failure" })

    }


}

/**
 * Register a new user
 * @param req 
 * @param res 
 * @param _next 
 * @returns 
 */
async function register(req: Request, res: Response, ) {
    const {email, password}= req.body;

    if (!email || !password) {
        return res.status(400).send("Please provide email and password");
    }

    const user_id = nanoid();

    const user = new User();
    user.user_id = user_id;

    // Check if user already exists
    const oldUser = await getRepository(User).findOne({ where: { email: email } });
    if (oldUser) {
        return res.status(409).send("User already exists");
    }

    // Encrypt password
    const encryptedPassword = await bcrypt.hashSync(password, 10);
    user.password = encryptedPassword;

    if (!process.env.JWT_SECRET) {
        throw new BadRequestError("proces.env.JWT_SECRET is not given");
    }
    const token = jwt.sign({ email: email, user_id: user_id }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })

    user.token = token;
    await getRepository(User).save(user).
        catch(() => {
            return res.status(500).send("Could not add user");
        })

    return res.status(200).json({ token, result: "success" })

}

export { login, register };
