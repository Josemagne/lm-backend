import express from "express"
import { addFlashcard, getFlashcard, removeFlashcard, updateFlashcard } from "src/controllers/flashcard.controller"
import { authenticationMiddleware } from 'src/middleware/auth.middleware';

const flashcardRouter = express.Router()

flashcardRouter.route("/flashcards").post(authenticationMiddleware, addFlashcard)
flashcardRouter.route("/flashcards/:flashcardId").get(authenticationMiddleware, getFlashcard).post(authenticationMiddleware, updateFlashcard).delete(authenticationMiddleware, removeFlashcard);


export default flashcardRouter