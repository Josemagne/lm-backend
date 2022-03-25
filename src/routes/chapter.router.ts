import express from 'express';
import { saveChapter } from "../controllers/chapter.controller"

const chapterRouter = express.Router();

chapterRouter.route("/").post(saveChapter);

export default chapterRouter;