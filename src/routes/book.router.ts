import express, { Request, Response } from "express"
import BookController from '../controllers/book.controller';

// Get the router instance
const bookRouter = express.Router();

// NOTE Starts at /books
// bookRouter.post("/", BookController.save()).get("/", BookController.getAll())


bookRouter.get("/", (req: Request, res: Response) => {
    res.status(200).json({ book_title: "jaime is an autodidact" })
})
export default bookRouter;