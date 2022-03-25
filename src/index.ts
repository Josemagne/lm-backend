import "reflect-metadata";
import { createConnection } from "typeorm";
import * as bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import pino from 'pino-http';
// NOTE Entities
import Book from "./entity/Book";
import Chapter from "./entity/Chapter";
import { Author } from './entity/Author';
import bookRouter from './routes/book.router';
import { join } from "path";
import chapterRouter from './routes/chapter.router';

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
    // @ts-ignore
}).then(async connection => {


    // create express app
    const app = express();
    app.use(bodyParser.json());
    app.use(pino())
    // NOTE cors
    app.use(cors())
    app.use(express.urlencoded({ extended: true }))
    // NOTE Serves "/"

    const dev = join(__dirname, "..", "build", "assets")

    const prod = join(__dirname, "assets");

    if (process.env.NODE_ENV === "production") {

        app.use(express.static(prod))
    }
    else {
        app.use(express.static(dev))
    }

    /* Book routes */
    app.use("/books", bookRouter);
    app.use("/chapters", chapterRouter);

    // @ts-ignore
    app.get('/*', function (req, res) {
        if (process.env.NODE_ENV === "production") {

            res.sendFile(join(prod), function (err) {
                if (err) {
                    res.status(500).send(err)
                }
            })
        }
        else {
            res.sendFile(dev, function (err) {
                if (err) {
                    res.status(500).send(err);
                }
            })
        }

    })


    // start express server
    app.listen(port, () => {
        console.log(`Server is listening on port ${port}`)
    })

}).catch(error => console.log(error));
