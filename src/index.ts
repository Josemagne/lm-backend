import "reflect-metadata";
import { createConnection } from "typeorm";
import * as bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import pino from 'pino-http';
// NOTE Entities
import Book from "./entity/Book";
import Chapter from "./entity/Chapter";
import Author from './entity/Author';
import bookRouter from './routes/book.router';
import { join } from "path";
import chapterRouter from './routes/chapter.router';
import { User } from './entity/User';
import authRouter from './routes/auth.router';
import dotenv from "dotenv"
dotenv.config();

let port = 0;

// Get the port
if (process.env.NODE_ENV === "development") {
    port = 4000;
} else {
    port = 4000
}

// TODO Pass the parameters from .env to createConnection()
createConnection({
    type: "postgres",
    host: process.env.NODE_ENV === "development" ? "lm-backend-db" : process.env.POSTGRES_HOST,
    port: 5432,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: "librimem",
    entities: [Book, Chapter, Author, User],
    synchronize: true
}).then(async connection => {


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
    // NOTE Serves "/"

    const dev = join(__dirname, "..", "build", "assets")

    const prod = join(__dirname, "assets");

    /* Book routes */
    app.use("/api/books", bookRouter);
    app.use("/api/chapters", chapterRouter);
    app.use("/api/auth", authRouter)

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
