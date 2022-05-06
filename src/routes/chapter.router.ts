import express from 'express';
import { authenticationMiddleware } from "../middleware/auth.middleware";
import { deleteChapter, getChapter, getChapters, saveChapter, updateChapter } from "../controllers/chapter.controller"

const chapterRouter = express.Router();

chapterRouter.route("/chapters/:bookId").get(authenticationMiddleware, getChapters)

chapterRouter.route("/chapter/:chapterId").get(authenticationMiddleware, getChapter).post(authenticationMiddleware, updateChapter).delete(authenticationMiddleware, deleteChapter);

chapterRouter.route("/chapter").post(authenticationMiddleware, saveChapter);

export default chapterRouter;
