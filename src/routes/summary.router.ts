import express from "express";
import {getSummaries, getSummary, addSummary, deleteSummary, updateSummary} from "../controllers/summary.controller";
import {authenticationMiddleware} from "../middleware/auth.middleware"

const summaryRouter = express.Router();


summaryRouter.route("/").post(authenticationMiddleware, addSummary);
summaryRouter.route("/:type").get(authenticationMiddleware, getSummaries)
summaryRouter.route("/:summaryId").get(authenticationMiddleware, getSummary).post(authenticationMiddleware, updateSummary).delete(authenticationMiddleware, deleteSummary)

export default summaryRouter;
