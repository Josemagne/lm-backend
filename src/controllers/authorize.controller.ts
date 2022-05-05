import jwt from "jsonwebtoken";
import {User} from "../entity";
import {getRepository} from "typeorm"
import {Request, Response} from "express";
import dotenv from "dotenv";
dotenv.config();

export default async function authorizeUser(req: Request, res: Response) {
	let token: string;

	try {
		token = req.body.token;
	} catch(err){
		return res.status(401).json({result: "failure"})
	}	

	const decoded = jwt.verify(token, process.env.JWT_SECRET as string)

	console.log("decoded: ", decoded)

	// @ts-ignore
	const {user_id, email} = decoded;

	const user = await getRepository(User).createQueryBuilder().where(`email = :email`, {email: email}).getOne();

	console.log("user: ", user)

	if (user) return res.status(200).json({result: "success"});
	else return res.status(401).json({result: "failure"});
}
