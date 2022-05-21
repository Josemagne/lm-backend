import { NextFunction, Request, Response } from "express"
import jwt from "jsonwebtoken"
import { getRepository } from 'typeorm';
import {User} from "../entity"
import dotenv from "dotenv"
import { nanoid } from "nanoid";
import BadRequestError from '../errors/bad-request.error';
import { join } from "path"
import bcrypt from "bcrypt"
dotenv.config()
import logger from "../utils/logger"
import validator from "validator"
import { string } from "yup"

/**
 * Creates token and sends it to the user
 * @param req 
 * @param res 
 */
const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400).json({reason: "Please provide the email and password", result: "failure"});
    }

    if (!process.env.JWT_SECRET) {
        throw new BadRequestError("proces.env.JWT_SECRET is not given");
    }

    const user = await getRepository(User).createQueryBuilder().where("email = :email", { email: email }).getOne();

  if (!user) {
    return res.status(404).json({result: "failure", reason: "User does not exist."})
  }

    if (user && bcrypt.compareSync(password, user.password)) {
        const token = user.token;

        return res.status(200).json({ token, result: "success" })
    }

        return res.status(401).json({ result: "failure", reason: "E-Mail or password is false"})

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
    let token: string;

    if (!email || !password) {
        return res.status(400).json({reason: "Please provide email and password", result: "failure"});
    }

    const user = new User();
    user.email = email;

    // Check if provided email is truly an email
    const isEmail = validator.isEmail(email)

    if (isEmail) user.user_id = nanoid();
    else return res.status(401).json({reason: "E-Mail is not an E-Mail.", result: "failure"})

    // TODO Sanitize
    
    // Check if password is a string
    const passwordSchema = string().min(7);   
    
    const passwordIsValid = await passwordSchema.validate(password, {strict: true})
    
    if (passwordIsValid) {
      // Encrypt password
      const encryptedPassword = bcrypt.hashSync(password, 10);
      user.password = encryptedPassword;

      if (!process.env.JWT_SECRET) {
          throw new BadRequestError("proces.env.JWT_SECRET is not given");
      }
      token = jwt.sign({ email: email, user_id: user.user_id}, process.env.JWT_SECRET, {
          expiresIn: '30d'
      })

      user.token = token;

      // Check if user already exists
      const oldUser = await getRepository(User).findOne({ where: { email: email } });
      if (oldUser) {
          return res.status(409).json({reason: "User already exists", result: "failure"});
      }
  } else return res.status(401).json({reason: "Password is corrupt", result: "failure"})

    await getRepository(User).save(user).
        catch((err) => {
            logger.error("Could not add user. Here the err: ", err)
            return res.status(500).json({reason: "Could not add user.", result: "failure"});
        })

    return res.status(200).json({ token, result: "success" })

}

export { login, register };
