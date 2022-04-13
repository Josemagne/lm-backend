import { LM_User } from "src/types/common/user";
import { getRepository } from 'typeorm';
import { Request, Response, NextFunction } from 'express';
import { User } from '../entity/User';

class UserController {

    public async addUser() {

    }

    public async getUser(req: Request, res: Response, next: NextFunction): Promise<LM_User> {
        const user_id = req.params.userId;

        const soughtUser = getRepository(User).createQueryBuilder().where("user_id = :user_id", { user_id: user_id }).execute();


        res.status(200).json(soughtUser);
    }

    public async updateUser() {

    }

    public async removeUser() {

    }

}

export default UserController;