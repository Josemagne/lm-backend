import { Request, Response } from "express"
import jwt from "jsonwebtoken"
import { getRepository } from 'typeorm';
import { User } from '../entity/User';

const login = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    if (!username || !password) {
        res.status(400).send("Please provide the uesrname and password");
    }

    const { user_id } = await getRepository(User).createQueryBuilder().where("username = :username", { username: username }).execute();


    const token = jwt.sign({ user_id, password }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })

    res.status(200).json({ msg: "User created", token })
}