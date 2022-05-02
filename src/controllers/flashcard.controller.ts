import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import {Flashcard } from '../entity';

const addFlashcard = async (req: Request, res: Response) => {
    const user = res.locals.user;
    const {flashcard_id, question, answer, bookcollection_id, book_id, subchapter_id, articlecollection_id, article_id, flashcardType  }= req.body;

    const flashcard = new Flashcard();
    flashcard.user_id = user.user_id

    Object.assign(flashcard, {flashcard_id,question, answer, bookcollection_id, book_id, subchapter_id, articlecollection_id, article_id, flashcardType });

    await getRepository(Flashcard).createQueryBuilder().insert().values(flashcard).execute();

  return res.status(200).json({result: "success"})

}

const getFlashcard = async (req: Request, res: Response) => {

    const flashcardId = req.params.flashcardId;

    const flashcard = await getRepository(Flashcard).createQueryBuilder().where("flashcard_id = flashcard_id", { flashcard_id: flashcardId }).getOne();

    return res.status(200).json({ result: "success", flashcard: flashcard })
}

const getFlashcards = async (req: Request, res: Response) => {
  const user = res.locals.params;

  const bookId = req.params.bookId
  
    const flashcards = await getRepository(Flashcard).createQueryBuilder().where("book_id = :book_id", {book_id: bookId}).andWhere("user_id = :user_id", {user_id: user.user_id}).execute()

    return res.status(200).json({ result: "success", flashcards: flashcards });
}

const updateFlashcard = async (req: Request, res: Response) => {
    const updatedFlashcard = req.body;

    const newFlashcard = await getRepository(Flashcard).createQueryBuilder().update().set(updatedFlashcard).where("flashcard_id = :flashcard_id", { flashcard_id: updatedFlashcard.flashcard_id })

    return res.status(200).json({ result: "success", flashcard: newFlashcard })
}


const deleteFlashcard= async (req: Request, res: Response) => {
    const flashcardId = req.params.flashcardId;

    const deletedFlashcard = await getRepository(Flashcard).createQueryBuilder().delete().where("flashcard_id = :flashcard_id", { flashcard_id: flashcardId }).execute();

    return res.status(200).json({ result: "success", flashcard: deletedFlashcard });
}


export { getFlashcard, addFlashcard, deleteFlashcard, updateFlashcard, getFlashcards }
