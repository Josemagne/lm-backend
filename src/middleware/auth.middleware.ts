import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import UnauthenticatedError from "../errors/unauthenticated.error";
import { join } from "path";
dotenv.config();

// @ts-ignore
const authenticationMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let decoded: any;
  const authHeader = req.headers.authorization;

  // TODO Must have a token after Bearer
  // @ts-ignore
  if (
    !authHeader ||
    (!authHeader.startsWith("Bearer ") &&
      new RegExp("w{21,}").exec(authHeader.split(" ")[1]))
  ) {
    return res.status(401).send("No token provided");
  }

  // Get the token
  const token = authHeader.split(" ")[1];

  try {
    if (!process.env.JWT_SECRET) {
      throw new UnauthenticatedError("process.env.JWT_SECRET is not given");
    }

    // Throws an err if expired
    decoded = await jwt.verify(token, process.env.JWT_SECRET);

    const { user_id, email } = decoded;

    // @ts-ignore
    res.locals.user = { user_id, email };

    // Go to controller
    next();
  } catch (err) {
    console.log(err);
  }
};

export { authenticationMiddleware };
