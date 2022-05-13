import express from "express";
import {authenticationMiddleware} from "../middleware/auth.middleware"
import {getNote, addNote, getNotes, updateNote, deleteNote} from "../controllers/note.controller";

const noteRouter = express.Router();

noteRouter.route("/note").get(authenticationMiddleware, getNotes)

noteRouter.route("/note/:noteId").post(authenticationMiddleware, addNote).get(authenticationMiddleware, getNote).post(authenticationMiddleware, updateNote).delete(authenticationMiddleware, deleteNote);


export default noteRouter;
