import express from "express"
import {authenticationMiddleware} from "../middleware/auth.middleware"
const subjectRouter = express.Router();
import {addSubject, getSubject, getSubjects, updateSubject, deleteSubject} from "../controllers/subject.controller"

subjectRouter.route("/subject").post(authenticationMiddleware, addSubject).get(authenticationMiddleware, getSubjects)

subjectRouter.route("/subject/:subjectId").get(authenticationMiddleware,getSubject).post(authenticationMiddleware, updateSubject).delete(authenticationMiddleware, deleteSubject)

export default subjectRouter;
