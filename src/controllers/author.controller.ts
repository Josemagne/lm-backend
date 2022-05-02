import { Request, Response } from 'express';
import {getRepository} from "typeorm"
import Author from "../entity/Author"

/**
 * Gets data about an author
 * @param req 
 * @param res 
 */
const getAuthor = async (req: Request, res: Response) => {
  const user = res.locals.user;

  const authorId = req.params;

  return getRepository(Author).createQueryBuilder().update().where("author_id = :author_id", {author_id: authorId}).andWhere("user_id = :user_id", {user_id: user.user_id}).execute();

}

/**
 * Adds an author
 * @param req 
 * @param res 
 */
const addAuthor = async (req: Request, res: Response) => {
  const user = res.locals.user;

  const {author_prename, author_name, favorite, author_id} = req.body;

  const author = new Author();
  author.author_id = author_id;
  author.author_prename = author_prename;
  author.author_name = author_name;
  author.user_id = author_id;
  author.favorite = favorite;
  author.user_id = user.user_id;

  await getRepository(Author).createQueryBuilder().insert().values(author).execute();

  return res.status(200).json({result: "sucess"})
}

/**
 * Update an author
 * @param req 
 * @param res 
 */
const updateAuthor = async (req: Request, res: Response) => {
  const user = res.locals.user;
  
  const {author_id, author_prename, author_name, favorite, books} = req.body;
  const author = new Author();
  author.author_id = author_id;
  author.author_prename = author_prename;
  author.author_name = author_name;
  author.favorite = favorite;
  author.books = books;

  await getRepository(Author).createQueryBuilder().update().where("user_id = :user_id" , {user_id: user.user_id}).andWhere("author_id = :author_id", {author_id: author_id}).execute();

  return res.status(200).json({result: "success"})
}

/**
 * Delete an author
 * @param req 
 * @param res 
 */
const deleteAuthor = async (req: Request, res: Response) => {
  const user = res.locals.user;
  
  const authorId = req.params.authorId;

  await getRepository(Author).createQueryBuilder().delete().where("user_id = :user_id", {user_id: user.user_id}).andWhere("author_id = :author_id",  {author_id: authorId}).execute();

  return res.status(200).json({result: "success"})

}

export { getAuthor, updateAuthor, addAuthor, deleteAuthor };
