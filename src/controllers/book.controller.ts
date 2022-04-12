
// @ts-nocheck
import { getRepository, createConnection, getManager } from 'typeorm';
import { Request, Response, NextFunction } from "express";
import Book from "../entity/Book";
import logger from '../utils/logger';
import { LM_Book } from "src/types/Book/book";
import { getChapters } from './chapter.controller';



/**
 * Add book to database
 * @param req 
 * @param res 
 * @param next 
 * @version 1.0.0
 * @returns 
 */
const addBook = async (req: Request<{}, {}, LM_Book>, res: Response, next: NextFunction) => {
    const book = new Book();
    Object.assign(book, req.body);
    const bookRepository = getManager().getRepository(Book);
    await bookRepository.save(book);

    return res.status(200).json({ msg: "Book inserted into database" })

}

/**
 * Gets a particular book from the database
 * @param req 
 * @param res 
 * @param next 
 * @version 1.0.0
 */
const getBook = async (req: Request, res: Response, next: NextFunction) => {
    const bookId = req.params.bookId;
    const book = await getRepository(Book).createQueryBuilder().where("book_id = :book_id", { book_id: bookId }).getOne();

    // const bookRepository = getManager().getRepository(Book);
    // const book = await bookRepository.findOne({ where: { book_id: bookId } });

    logger.info("The book is: ", book)

    if (book) {
        res.status(200).json(book);
    }
    else {
        res.status(404).send("Can't find the book.")
    }
}

/**
 * Gets all the books in the database
 * @param req 
 * @param res 
 * @param next 
 * @returns 
 * @version 1.0.0
 */
const getAll = async (req: Request, res: Response, next: NextFunction) => {
    const books = await getRepository(Book).manager.find(Book);

    logger.info("Returned all books from database.")

    return res.status(200).json({ books: books });
}

/**
 * Updates the book
 * @param req 
 * @param res 
 * @param next 
 */
const updateBook = async (req: Request<{}, {}, Book>, res: Response, next: NextFunction) => {
    const updatedBook = req.body;

    await getRepository(Book).createQueryBuilder().update(Book).set(updatedBook).where("book_id = :book_id", { book_id: updatedBook.book_id }).execute();

    res.status(200).json({ ...updatedBook });
}

const removeBook = async (req: Request, res: Response, next: NextFunction) => {
    /**
     * Id of the book
     */
    const id = req.params.bookId;
    await getRepository(Book).delete(id)

    logger.info("Removed book")

    res.status(200).json({ msg: "Book deleted" });
}


export { addBook, getAll, removeBook, updateBook, getBook } 
