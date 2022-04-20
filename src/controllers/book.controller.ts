
// @ts-nocheck
import { getRepository, createConnection, getManager } from 'typeorm';
import { Request, Response, NextFunction } from "express";
import Book from "../entity/Book";
import logger from '../utils/logger';
import { LM_Book } from "src/types/Book/book";
import Chapter from '../entity/Chapter';
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
const addBook = async (req: Request<{}, {}, LM_Book>, res: Response, next: NextFunction) => {
    const user = res.locals.user;
    console.log("user in addBook: ", user)

    console.log("req.body: ", req.body)
    const newBook = new Book();
    const { book_id, author, book_title, pages, read, progress } = req.body as LM_Book;

    newBook.user_id = user.user_id;
    newBook.author = author;
    newBook.book_id = book_id;
    newBook.book_title = book_title;
    newBook.pages = pages;
    newBook.read = read;
    newBook.progress = progress;

    await getRepository(Book).createQueryBuilder().insert().values(newBook).execute();

    // NewAuthor
    const newAuthor = new Author();
    newAuthor.author_id = nanoid();
    newAuthor.user_id = user.user_id;
    // newAuthor.author_prename = author.split(" ")[0]
    // newAuthor.author_name = author.split(" ")[1]
    newAuthor.books = [];
    newAuthor.favorite = false;

    await getRepository(Author).createQueryBuilder().insert().values(newAuthor).execute();
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
const getAll = async (req: Request, res: Response, next: NextFunction) => {
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
const updateBook = async (req: Request<{}, {}, Book>, res: Response, next: NextFunction) => {
    const user = res.locals.user;

    const updatedBook = req.body;

    await getRepository(Book).createQueryBuilder().update(Book).set(updatedBook).where("book_id = :book_id", { book_id: updatedBook.book_id }).andWhere("user_id = :user_id", { user_id: user.user_id }).execute();

    res.status(200).json({ data: updatedBook });
}

const removeBook = async (req: Request, res: Response, next: NextFunction) => {
    const user = res.locals.user;

    /**
     * Id of the book
     */
    const bookId = req.params.bookId;

    await getRepository(Book).createQueryBuilder().delete().where("book_id = :book_id", { book_id: bookId }).andWhere("user_id = :user_id", { user_id: user.user_id }).execute();

    res.status(200).json({ msg: "Book deleted" });
}


export { addBook, getAll, removeBook, updateBook, getBook } 
