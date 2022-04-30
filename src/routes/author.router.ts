import express from "express"

import {addAuthor, getAuthor, deleteAuthor, updateAuthor} from "../controllers/author.controller"

import {authenticationMiddleware } from "../middleware/auth.middleware"

const authorRouter = express.Router();

authorRouter.route("/").post(authenticationMiddleware, addAuthor);
authorRouter.route("/:authorId").get(authenticationMiddleware, getAuthor).post(authenticationMiddleware, updateAuthor).delete(authenticationMiddleware, deleteAuthor)

export default authorRouter;
