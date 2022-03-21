import { getRepository, createConnection, getManager } from 'typeorm';
import { Request, Response, NextFunction } from "express";
import Book from "../entity/Book";
import logger from '../utils/logger';
import { LM_Book } from "src/types/Book/book";



// TODO Add midleware
const save = async (req: Request<{}, {}, LM_Book>, res: Response, next: NextFunction) => {
    const book = new Book();
    Object.assign(book, req.body);
    const bookRepository = getManager().getRepository(Book);
    await bookRepository.save(book);
    logger.debug("Going to insert: ", req.body)

    return res.status(200).json({ msg: "Book inserted into database" })

}

const getAll = async (req: Request, res: Response, next: NextFunction) => {
    const books = await getRepository(Book).manager.find(Book);

    logger.info("Returned all books from database.")

    return res.status(200).json(books);
}

const removeBook = async (req: Request, res: Response, next: NextFunction) => {
    /**
     * Id of the book
     */
    const id = req.params.bookId;
    // await getRepository(Book).manager.createQueryBuilder().delete().where("book_id = :id", { id: id })
    await getRepository(Book).delete(id)
}


export { save, getAll, removeBook } 
