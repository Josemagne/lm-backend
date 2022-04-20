import { NextFunction, Request, Response } from "express"
import jwt from "jsonwebtoken"
import { getRepository } from 'typeorm';
import { User } from '../entity/User';
import dotenv from "dotenv"
import { nanoid } from "nanoid";
import BadRequestError from '../errors/bad-request.error';
import { join } from "path"
import bcrypt from "bcrypt"
if (process.env.NODE_ENV === "production") {
    dotenv.config({ path: join(__dirname, "..", ".env") })
} else {
    dotenv.config()
}

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


    if (!process.env.JWT_SECRET) {
        throw new BadRequestError("proces.env.JWT_SECRET is not given");
    }

    // Encrypt password
    const encryptedPassword = bcrypt.hash(password, 10);

    const user = await getRepository(User).createQueryBuilder().where("email = :email", { email: email }).andWhere("password = :password", { password: encryptedPassword }).execute();

    const token = jwt.sign({ email: user.email, user_id: user.user_id }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })

    res.status(200).json({ token })
}

/**
 * Register a new user
 * @param req 
 * @param res 
 * @param _next 
 * @returns 
 */
async function register(req: Request, res: Response, _next: NextFunction) {
    console.log("req.body: ", req.body)
    const newUser = req.body;

    if (!newUser.email || !newUser.password) {
        return res.status(400).send("Please provide email and password");
    }

    const user_id = nanoid();
    newUser.user_id = user_id;

    const user = new User();

    // Check if user already exists
    const oldUser = await getRepository(User).findOne({ where: { email: newUser.email } });
    if (oldUser) {
        return res.status(409).send("User already exists");
    }

    // Encrypt password
    const encryptedPassword = await bcrypt.hash(newUser.password, 10);
    newUser.password = encryptedPassword;

    Object.assign(user, newUser);

    await getRepository(User).save(user).
        catch((_err) => {
            return res.status(500).send("Could not add user");
        })

    if (!process.env.JWT_SECRET) {
        throw new BadRequestError("proces.env.JWT_SECRET is not given");
    }
    const token = jwt.sign({ email: newUser.email, user_id: user_id }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })


    return res.status(200).json({ token })

}

export { login, register };