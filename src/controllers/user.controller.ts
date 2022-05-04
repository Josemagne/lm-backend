import { getRepository } from 'typeorm';
import { Request, Response, NextFunction } from 'express';
import {User} from "../entity"




async function getUserData(req: Request, res: Response, _next: NextFunction): Promise<Response<User>> {
    const user_id = req.params.userId;

    const soughtUser = getRepository(User).createQueryBuilder().where("user_id = :user_id", { user_id: user_id }).execute();


    return res.status(200).json(soughtUser);
}

async function updateUser() {

}

async function removeUser() {

}


export { getUserData, updateUser, removeUser };
