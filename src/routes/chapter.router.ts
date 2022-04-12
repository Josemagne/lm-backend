import express from 'express';
import { getChapter, getChapters, saveChapter, updateChapter } from "../controllers/chapter.controller"

const chapterRouter = express.Router();

chapterRouter.route("/").post(saveChapter);
chapterRouter.route("/:bookId").get(getChapters);
chapterRouter.route("/:chapterId").get(getChapter).post(updateChapter)

export default chapterRouter;