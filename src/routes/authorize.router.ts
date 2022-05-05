import express from "express";
import authorizeUser from "../controllers/authorize.controller";

const authorizeRouter = express.Router();

authorizeRouter.post("/", authorizeUser);

export default authorizeRouter;

