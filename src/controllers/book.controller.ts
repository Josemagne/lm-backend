import { getRepository } from "typeorm";
import { Request, Response, NextFunction } from "express";
import Book from "../entity/Book";
import logger from '../utils/logger';
import { LM_Book } from "src/types/Book/book";

/**
 * Controller for the books
 */
export default class BookController {


    // TODO Add midleware
    public static async save(req: Request<{}, {}, LM_Book>, res: Response, next: NextFunction) {
        const { author, book_title, book_id, chapters, pages, progress, rate, read, summary } = req.body;

        const book = Book.create({
            author: author
        });


        const bookRepository = getRepository(Book);
        return bookRepository.save(req.body).then((res) => {
            logger.info("Added book to database")
            return res;
        })
    }

    public static async getAll(req: Request, res: Response, next: NextFunction) {
        const bookRepository = getRepository(Book);
        return bookRepository.save(req.body).then((res) => {
            logger.info("Returned all books from database.")
            return res;
        })
    }

}

