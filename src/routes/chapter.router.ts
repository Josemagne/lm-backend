import express from 'express';
import { authenticationMiddleware } from "../middleware/auth.middleware";
import { deleteChapter, getChapter, getChapters, saveChapter, updateChapter } from "../controllers/chapter.controller"

const chapterRouter = express.Router();

chapterRouter.route("/").post(authenticationMiddleware, saveChapter);

chapterRouter.route("/chapters/:bookId").get(authenticationMiddleware, getChapters)

chapterRouter.route("/:chapterId").get(authenticationMiddleware, getChapter).post(authenticationMiddleware, updateChapter).delete(authenticationMiddleware, deleteChapter);

export default chapterRouter;
