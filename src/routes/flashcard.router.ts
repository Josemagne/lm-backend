import express from "express"
//import { addFlashcard, getFlashcard, removeFlashcard, updateFlashcard } from "src/controllers/flashcard.controller"
import { authenticationMiddleware } from '../middleware/auth.middleware';
import {addFlashcard, deleteFlashcard, updateFlashcard, getFlashcard, getFlashcards} from "../controllers/flashcard.controller"

const flashcardRouter = express.Router()

flashcardRouter.route("/").post(authenticationMiddleware, addFlashcard)
flashcardRouter.route("/flashcards/:bookId").get(authenticationMiddleware, getFlashcards);
flashcardRouter.route("/:flashcardId").get(authenticationMiddleware, getFlashcard).post(authenticationMiddleware, updateFlashcard).delete(authenticationMiddleware, deleteFlashcard)


export default flashcardRouter
