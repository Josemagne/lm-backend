import { Request, Response, NextFunction } from 'express';
import Chapter from '../entity/Chapter';
import { getManager, getRepository } from 'typeorm';
import logger from '../utils/logger';
import LM_Chapter from '../types/Book/chapter';

/**
 * Saves the chapter in the backend
 * @param req 
 * @param res 
 * @param next 
 */
const saveChapter = async (req: Request, res: Response, next: NextFunction) => {

    const chapter = new Chapter();
    // NOTE Assigns the enumerable props of req.body to chapter!!!
    Object.assign(chapter, req.body);
    const chapterRepository = getManager().getRepository(Chapter);
    await chapterRepository.save(chapter);

    logger.info("Inserted chapter into database")

    return res.status(200).json({ msg: "Chapter inserted into database" })

}

/**
 * Gets all the chapters of a book
 * @param req 
 * @param res 
 * @param next 
 * @returns 
 */
const getChapters = async (req: Request, res: Response, next: NextFunction) => {
    const bookId = req.params.bookId;

    let chapters: Chapter[] = []

    try {

        chapters = await getRepository(Chapter).createQueryBuilder().where("book_id = :book_id", { book_id: bookId }).getMany();
    }

    catch (err) {
        logger.info(`Could not get chapters from book ${bookId}. Here the error:`);
        logger.error(err)
    }

    res.status(200).json({ chapters: chapters })
}

const getChapter = async (req: Request, res: Response, next: NextFunction) => {
    const chapterId = req.params.chapterId;

    const chapter = await getRepository(Chapter).createQueryBuilder().where("chapter_id = :chapter_id", { chapter_id: chapterId }).execute();

    res.status(200).json(chapter);


}

/**
 * Updates the chapter
 * @param req 
 * @param res 
 * @param next 
 */
const updateChapter = async (req: Request<{}, {}, Chapter>, res: Response, next: NextFunction) => {

    const updatedChapter = req.body;

    await getRepository(Chapter).createQueryBuilder().update(Chapter).set(updatedChapter).where("chapter_id = :chapter_id", { chapter_id: updatedChapter.chapter_id }).execute();

    logger.info("Updated chpater")

    res.status(200).json(req.body);
}

export { saveChapter, updateChapter, getChapter, getChapters };