import express from "express";
import { authenticationMiddleware } from "../middleware/auth.middleware";
import {
  addFlashcard,
  deleteFlashcard,
  updateFlashcard,
  getFlashcard,
  getFlashcards,
} from "../controllers/flashcard.controller";

const flashcardRouter = express.Router();

flashcardRouter
  .route("/flashcards/:bookId")
  .get(authenticationMiddleware, getFlashcards);
flashcardRouter
  .route("/flashcard")
  .post(authenticationMiddleware, addFlashcard);
flashcardRouter
  .route("/flashcard/:flashcardId")
  .get(authenticationMiddleware, getFlashcard)
  .post(authenticationMiddleware, updateFlashcard)
  .delete(authenticationMiddleware, deleteFlashcard);

export default flashcardRouter;
