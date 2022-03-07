import { getRepository } from "typeorm";
import { Request, Response, NextFunction } from "express";
import Book from "../entity/Book";
import logger from '../utils/logger';

export default class BookController {

    // TODO Add midleware
    async save(req: Request, res: Response, next: NextFunction) {
        const bookRepository = getRepository(Book);
        return bookRepository.save(req.body).then((res) => {
            logger.info("Added book to database")
        })
    }

}