import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Flashcard from '../entity/Flashcard';

const addFlashcard = async (req: Request, res: Response) => {
    const flashcard = req.body;

    const newFlashcard = new Flashcard();

    Object.assign(newFlashcard, flashcard);

    return await getRepository(Flashcard).createQueryBuilder().insert().values(newFlashcard).execute();

}

const getFlashcard = async (req: Request, res: Response) => {

    const flashcardId = req.params.flashcardId;

    const flashcard = await getRepository(Flashcard).createQueryBuilder().where("flashcard_id = flashcard_id", { flashcard_id: flashcardId }).getOne();

    return res.status(200).json({ result: "success", flashcard: flashcard })
}

const getFlashcards = async (req: Request, res: Response) => {
    const flashcards = await getRepository(Flashcard).createQueryBuilder().getMany();

    return res.status(200).json({ result: "success", flashcards: flashcards });
}

const updateFlashcard = async (req: Request, res: Response) => {

}

const removeFlashcard = async (req: Request, res: Response) => {

}


export { getFlashcard, addFlashcard, removeFlashcard, updateFlashcard, getFlashcards }