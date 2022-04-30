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

  return await getRepository(Author).createQueryBuilder().insert().values(author).execute();
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

  return await getRepository(Author).createQueryBuilder().update().where("user_id = :user_id" , {user_id: user.user_id}).andWhere("author_id = :author_id", {author_id: author_id}).execute();

}

/**
 * Delete an author
 * @param req 
 * @param res 
 */
const deleteAuthor = async (req: Request, res: Response) => {
  const user = res.locals.user;
  
  const authorId = req.params.authorId;

  return await getRepository(Author).createQueryBuilder().delete().where("user_id = :user_id", {user_id: user.user_id}).andWhere("author_id = :author_id",  {author_id: authorId}).execute();

}

export { getAuthor, updateAuthor, addAuthor, deleteAuthor };
