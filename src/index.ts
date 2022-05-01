import "reflect-metadata";
import { createConnection } from "typeorm";
import * as bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import pino from 'pino-http';
// NOTE Entities
import {User, Book, Author,Chapter, Flashcard, Summary} from "./entity";
import bookRouter from './routes/book.router';
import { join } from "path";
import chapterRouter from './routes/chapter.router';
import authRouter from './routes/auth.router';
import authorRouter from "./routes/auth.router";
import dotenv from "dotenv"
import summaryRouter from "./routes/summary.router"
dotenv.config();

const port = 4000;

// TODO Pass the parameters from .env to createConnection()
createConnection({
    type: "postgres",
    host: process.env.NODE_ENV === "development" ? "lm-backend-db" : process.env.POSTGRES_HOST,
    port: 5432,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: "librimem",
    entities: [Book, Chapter, Author,  Flashcard, Summary, User],
    synchronize: true
}).then(async (connection) => {

    // create express app
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(pino())
    // NOTE cors
    app.use(cors({
        origin: "*", methods: "GET,HEAD,PUT,POST,DELETE,PATCH", "preflightContinue": false,
        "optionsSuccessStatus": 204
    }))
    // Allow all options
    app.options('*', cors())

    /* Book routes */
    app.use("/api/v1/book", bookRouter);
    app.use("/api/v1/chapter", chapterRouter);
    app.use("/api/v1/auth", authRouter)
    app.use("/api/v1/author", authorRouter);
    //TODO 
    app.use("api/v1/summary", summaryRouter)
    //app.use("/api/v1/flashcard", flashcardRouter)
  //  app.use("api/v1/question", questionRouter)
  //  app.use("api/v1/word", wordRouter)

    // start express server
    app.listen(port, () => {
        console.log(`Server is listening on port ${port}`)
    })

}).catch(error => console.log(error));
