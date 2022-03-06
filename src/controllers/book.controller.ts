import { getRepository } from "typeorm";
import { Request, Response, NextFunction } from "express";
import Book from "src/entity/Book";

export default class BookController {
    private bookRepository = getRepository(Book);

    // TODO Add midleware
    async save(req: Request, res: Response, next: NextFunction) {
        return this.bookRepository.save(req.body);
    }

}