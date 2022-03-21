import "reflect-metadata";
import { createConnection } from "typeorm";
import * as bodyParser from "body-parser";
import express, { Request, Response } from "express";
import { Routes } from "./routes";
import { User } from "./entity/User";
import cors from "cors";
import pino from 'pino-http';
// NOTE Entities
import Book from "./entity/Book";
import Chapter from "./entity/Chapter";
import logger from './utils/logger';
import { Author } from './entity/Author';
import BookController from './controllers/book.controller';
import bookRouter from './routes/book.router';

let port: number = 0;
/**
 * Decides if we synchronize the entities with db
 */
let synchronize: boolean = false;

// Get the port
if (process.env.NODE_ENV === "development") {
    port = 4000;
    synchronize = true;
} else {
    port = 4000
}

// TODO Pass the parameters from .env to createConnection()
createConnection({
    type: "postgres",
    host: "lm-backend-db",
    port: 5432,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: "librimem",
    entities: [Book, Chapter, Author],
    synchronize: synchronize
}).then(async connection => {


    // create express app
    const app = express();
    app.use(bodyParser.json());
    app.use(pino())
    // NOTE cors
    app.use(cors())
    app.use(express.urlencoded({ extended: true }))


    // TODO Move to routers
    app.get("/", (req: Request, res: Response) => {
        res.status(200).json({ msg: "yes, it works" })
    })

    /* Book routes */
    app.use("/books", bookRouter);



    // start express server
    app.listen(port, () => {
        console.log(`Server is listening on port ${port}`)
    })

}).catch(error => console.log(error));
