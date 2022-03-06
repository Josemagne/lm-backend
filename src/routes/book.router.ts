import express from "express"
import BookController from '../controllers/book.controller';

// Get the router instance
const bookRouter = express.Router();

bookRouter.post("/", new BookController().save)

export default bookRouter;