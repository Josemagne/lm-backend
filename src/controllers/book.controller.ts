
import { getRepository, createConnection, getManager } from 'typeorm';
import { Request, Response, NextFunction } from "express";
import Book from "../entity/Book";
import logger from '../utils/logger';
import { LM_Book } from "src/types/Book/book";
import Chapter from "../entity/Chapter";
import Author from "../entity/Author";
import { nanoid } from 'nanoid';



/**
 * Add book to database
 * @param req 
 * @param res 
 * @param next 
 * @version 1.0.0
 * @returns 
 */
const addBook = async (req: Request, res: Response) => {
    const user = res.locals.user;

    const newBook = new Book();
    const { author_id, book_id, book_title, pages, status, progress } = req.body as LM_Book;

    newBook.user_id = user.user_id;
    newBook.author_id = author_id;
    newBook.book_id = book_id;
    newBook.book_title = book_title;
    newBook.pages = pages;
    newBook.status = status;
    newBook.progress = progress;

    await getRepository(Book).createQueryBuilder().insert().values(newBook).execute();

    return res.status(200).json({ msg: "Book inserted into database" })
}

/**
 * Gets a particular book from the database
 * @param req 
 * @param res 
 * @param next 
 * @version 1.0.0
 */
const getBook = async (req: Request, res: Response) => {

    /* Get user authenticated user data */
    // NOTE We get this from the middleware auth.middleware.ts
    const user = res.locals.user;

    console.log("The user is: ", user)

    /* Retrieve data for query */
    const bookId = req.params.bookId;

    /* Query  */
    const book = await getRepository(Book).createQueryBuilder().where("book_id = :book_id", { book_id: bookId }).andWhere("user_id = :user_id", { user_id: user.user_id }).getOne();

    logger.info("reslt: ", book)

    /* Return response */

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
const getAll = async (req: Request, res: Response) => {
    const user = res.locals.user;

    const books = await getRepository(Book).createQueryBuilder().where("user_id = :user_id", { user_id: user.user_id }).getMany();

    return res.status(200).json({ books: books });
}

/**
 * Updates the book
 * @param req 
 * @param res 
 * @param next 
 */
const updateBook = async (req: Request, res: Response, ) => {
    const user = res.locals.user;

const { book_id, author_prename, author_name, book_title, pages, status, progress } = req.body as LM_Book;
  
    const updatedBook = new Book();

    updatedBook.user_id = user.user_id;
    updatedBook.book_id = book_id;
    updatedBook.book_title = book_title;
    updatedBook.pages = pages;
    updatedBook.status = status;

    await getRepository(Book).createQueryBuilder().update(Book).set(updatedBook).where("book_id = :book_id", { book_id: updatedBook.book_id }).andWhere("user_id = :user_id", { user_id: user.user_id }).execute();

    res.status(200).json({ data: updatedBook });
}

const removeBook = async (req: Request, res: Response) => {
    const user = res.locals.user;

    /**
     * Id of the book
     */
    const bookId = req.params.bookId;

    await getRepository(Book).createQueryBuilder().delete().where("book_id = :book_id", { book_id: bookId }).andWhere("user_id = :user_id", { user_id: user.user_id }).execute();

    res.status(200).json({ msg: "Book deleted" });
}


export { addBook, getAll, removeBook, updateBook, getBook } 
