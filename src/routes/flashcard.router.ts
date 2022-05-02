import express from "express"
//import { addFlashcard, getFlashcard, removeFlashcard, updateFlashcard } from "src/controllers/flashcard.controller"
import { authenticationMiddleware } from 'src/middleware/auth.middleware';
import {addFlashcard, deleteFlashcard, updateFlashcard, getFlashcard, getFlashcards} from "../controllers/flashcard.controller"

const flashcardRouter = express.Router()

flashcardRouter.route("/flashcards/:bookId").post(authenticationMiddleware, addFlashcard)
flashcardRouter.route("/flashcard/:flashcardId").get(authenticationMiddleware, getFlashcard).post(authenticationMiddleware, updateFlashcard).delete(authenticationMiddleware, deleteFlashcard);


export default flashcardRouter
