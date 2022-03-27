import express from 'express';
import { saveChapter, updateChapter } from "../controllers/chapter.controller"

const chapterRouter = express.Router();

chapterRouter.route("/").post(saveChapter);
chapterRouter.route("/:bookId").post(updateChapter)

export default chapterRouter;