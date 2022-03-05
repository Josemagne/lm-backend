import express, { Request, Response } from "express";
import logger from './utils/logger';
import pino from "pino-http";

// Get the port from env
const port = process.env.PORT_SERVER_DEVELOPMENT || 3000;


/**
 * Main app
 */
const app = express();

/* MIDDLEWARE */
app.use(pino);

app.get("/", (req: Request, res: Response) => {
    res.status(200).json({ msg: "nice" })
})

app.listen(port, () => {
    logger.info(`The server is listening on port ${port}`)
})