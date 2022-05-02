import path from "path"
import {ConnectionOptions } from "typeorm"
import  dotenv from "dotenv"
dotenv.config();

export = {
  name: "librimem",
  host: process.env.NODE_ENV === "development" ? "lm-backend-db" : process.env.POSTGRES_HOST,
  port: 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: "librimem",
   synchronize: true,
  migrationsRun: true,
  dropSchema: false,
  entities: ["../entity/**/**{.ts}"],
  migrations: [path.join(__dirname, "migrations", "*.*")],
  cli: {
    entitiesDir: path.join(__dirname, "..", "entity"),
    migrationsDir: path.join(__dirname, "migrations")
  }
} as ConnectionOptions;
