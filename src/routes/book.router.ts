import express, { Request, Response } from "express"
import { save, getAll } from '../controllers/book.controller';

// Get the router instance
const bookRouter = express.Router();

// NOTE Starts at /books
// bookRouter.post("/", BookController.save()).get("/", BookController.getAll())


// bookRouter.get("/", (req: Request, res: Response) => {
//     res.status(200).json({ book_title: "jaime is an autodidact" })
// })

bookRouter.route("/").get(getAll).post(save)
export default bookRouter;