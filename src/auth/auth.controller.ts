import { NextFunction, Request, Response } from "express"
import jwt from "jsonwebtoken"
import { getRepository } from 'typeorm';
import { User } from '../entity/User';
import dotenv from "dotenv"
import { nanoid } from "nanoid";
dotenv.config();

/**
 * Creates token and sends it to the user
 * @param req 
 * @param res 
 */
const login = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    if (!username || !password) {
        res.status(400).send("Please provide the uesrname and password");
    }

    const { user_id } = await getRepository(User).createQueryBuilder().where("username = :username", { username: username }).andWhere("password = :password", { password: password }).execute();


    if (!process.env.JWT_SECRET) {
        throw new Error("proces.env.JWT_SECRET is not given");
    }
    const token = jwt.sign({ password, username }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })

    res.status(200).json({ msg: "User created", token })
}

/**
 * Register a new user
 * @param req 
 * @param res 
 * @param next 
 * @returns 
 */
async function register(req: Request, res: Response, next: NextFunction) {
    const newUser = req.body;

    if (!newUser.username || !newUser.password) {
        return res.status(400).send("Please provide username and password");
    }

    const user_id = nanoid();
    newUser.user_id = user_id;

    const user = new User();

    Object.assign(user, newUser);


    await getRepository(User).save(user).then(() => {
        return res.status(200).send("Added user")
    }).catch((err) => {
        return res.status(500).send("Could not add user");
    })

    return res.status(200).send("Added user")

}

export { login, register };