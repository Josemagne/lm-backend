import { CustomAPIError } from "../errors";
import { Request, Response, NextFunction } from "express";

const errorMiddleware = (
  err,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }

  return res.status(500).send("Something strange happened. Try later");
};

export default errorMiddleware;
