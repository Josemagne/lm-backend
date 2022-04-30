import express from "express";
import { login, register } from "../auth/auth.controller";

const authRouter = express.Router();


// NOTE Base route is "/auth"
authRouter.route("/login").post(login);
authRouter.route("/register").post(register);

export default authRouter;
