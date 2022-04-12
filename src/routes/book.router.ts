import express from "express"
import { addBook, getAll, removeBook, updateBook, getBook } from '../controllers/book.controller';

// Get the router instance
const bookRouter = express.Router();

// NOTE Starts at /books
// bookRouter.post("/", BookController.save()).get("/", BookController.getAll())


// bookRouter.get("/", (req: Request, res: Response) => {
//     res.status(200).json({ book_title: "jaime is an autodidact" })
// })

bookRouter.route("/").get(getAll).post(addBook);
bookRouter.route("/:bookId").delete(removeBook).post(updateBook).get(getBook);
export default bookRouter;